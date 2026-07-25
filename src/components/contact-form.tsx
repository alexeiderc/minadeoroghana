"use client";

import { useState, useCallback, useRef, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Send } from "lucide-react";
import clsx from "clsx";

const MAX_LENGTHS = {
  name: 100,
  email: 254,
  company: 150,
  subject: 100,
  message: 2000,
} as const;

const MIN_SUBMIT_MS = 3000;

function sanitize(input: string): string {
  return input
    .replace(/[<>]/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+=/gi, "")
    .replace(/data:/gi, "")
    .replace(/vbscript:/gi, "")
    .replace(/expression\(/gi, "")
    .trim();
}

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function hasDangerousContent(input: string): boolean {
  const lower = input.toLowerCase();
  if (/<\s*script/i.test(lower)) return true;
  if (/<\s*iframe/i.test(lower)) return true;
  if (/<\s*object/i.test(lower)) return true;
  if (/<\s*embed/i.test(lower)) return true;
  if (/<\s*form/i.test(lower)) return true;
  if (/<\s*svg\s+on/i.test(lower)) return true;
  if (/<\s*img[^>]+onerror/i.test(lower)) return true;
  if (/javascript\s*:/i.test(lower)) return true;
  if (/on(mouseover|click|load|error|focus|blur|submit|change)\s*=/i.test(lower)) return true;
  if (/\beval\s*\(/i.test(lower)) return true;
  if (/\bdocument\.(cookie|write|location)/i.test(lower)) return true;
  if (/\bwindow\.(location|open|eval)/i.test(lower)) return true;
  return false;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  website: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  form?: string;
}

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [rateLimited, setRateLimited] = useState(false);
  const submitTimestamp = useRef<number>(0);
  const submitCount = useRef(0);

  const validate = useCallback((): FormErrors => {
    const newErrors: FormErrors = {};
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name) {
      newErrors.name = "Required";
    } else if (name.length < 2) {
      newErrors.name = "Too short";
    } else if (hasDangerousContent(name)) {
      newErrors.name = "Invalid characters";
    }

    if (!email) {
      newErrors.email = "Required";
    } else if (email.length > MAX_LENGTHS.email) {
      newErrors.email = "Too long";
    } else if (!EMAIL_REGEX.test(email)) {
      newErrors.email = "Invalid email";
    }

    if (!message) {
      newErrors.message = "Required";
    } else if (message.length < 10) {
      newErrors.message = "Min 10 characters";
    } else if (hasDangerousContent(message)) {
      newErrors.message = "Invalid content detected";
    }

    if (formData.company.trim() && hasDangerousContent(formData.company)) {
      newErrors.form = "Invalid content detected";
    }

    return newErrors;
  }, [formData]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (formData.website !== "") {
      setSubmitted(true);
      return;
    }

    const now = Date.now();
    if (now - submitTimestamp.current < MIN_SUBMIT_MS) {
      setRateLimited(true);
      setTimeout(() => setRateLimited(false), 5000);
      return;
    }

    if (submitCount.current >= 5) {
      setErrors({ form: "Too many submissions. Please wait." });
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    submitTimestamp.current = Date.now();
    submitCount.current += 1;

    const elapsed = Date.now() - submitTimestamp.current;
    const remaining = Math.max(MIN_SUBMIT_MS - elapsed, 0);
    await new Promise((resolve) => setTimeout(resolve, remaining));

    setIsSubmitting(false);
    setSubmitted(true);
  }

  function handleChange(field: keyof FormData, value: string) {
    const maxLen = MAX_LENGTHS[field as keyof typeof MAX_LENGTHS] ?? 200;
    const truncated = value.slice(0, maxLen);
    const sanitized = sanitize(truncated);
    setFormData((prev) => ({ ...prev, [field]: sanitized }));
    if (errors[field as keyof FormErrors] || errors.form) {
      setErrors((prev) => ({ ...prev, [field]: undefined, form: undefined }));
    }
  }

  const inputClasses =
    "w-full px-4 py-3 bg-white border border-gold-100/60 rounded-xl text-slate-custom placeholder-slate-custom/30 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all text-sm";

  if (submitted) {
    return (
      <div className="text-center py-16 px-8 rounded-2xl bg-gold-50 border border-gold-100">
        <div className="w-16 h-16 rounded-full gold-gradient mx-auto mb-6 flex items-center justify-center">
          <Send className="w-7 h-7 text-dark" />
        </div>
        <h3 className="text-2xl font-bold text-slate-custom font-[family-name:var(--font-heading)] mb-2">
          {t("success")}
        </h3>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot — hidden from humans, visible to bots */}
      <div className="absolute -left-[9999px] opacity-0 h-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="company-website">Leave this empty</label>
        <input
          id="company-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={(e) => handleChange("website", e.target.value)}
        />
      </div>

      {errors.form && (
        <div className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          {errors.form}
        </div>
      )}
      {rateLimited && (
        <div className="px-4 py-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm">
          Please wait a moment before submitting again.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            {t("name")}
            <span className="text-xs text-white/40 ml-1">({formData.name.length}/{MAX_LENGTHS.name})</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            maxLength={MAX_LENGTHS.name}
            autoComplete="name"
            className={clsx(inputClasses, errors.name && "border-red-400")}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            {t("email")}
            <span className="text-xs text-white/40 ml-1">({formData.email.length}/{MAX_LENGTHS.email})</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            maxLength={MAX_LENGTHS.email}
            autoComplete="email"
            className={clsx(inputClasses, errors.email && "border-red-400")}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            {t("company")}
            <span className="text-xs text-white/40 ml-1">({formData.company.length}/{MAX_LENGTHS.company})</span>
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
            maxLength={MAX_LENGTHS.company}
            autoComplete="organization"
            className={inputClasses}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">{t("subject")}</label>
          <select
            value={formData.subject}
            onChange={(e) => handleChange("subject", e.target.value)}
            className={inputClasses}
          >
            <option value="">{t("subject")}</option>
            <option value="investor">Investor Inquiry</option>
            <option value="partnership">Partnership</option>
            <option value="media">Media</option>
            <option value="general">General</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white/80 mb-2">
          {t("message")}
          <span className="text-xs text-white/40 ml-1">({formData.message.length}/{MAX_LENGTHS.message})</span>
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          maxLength={MAX_LENGTHS.message}
          rows={6}
          className={clsx(inputClasses, "resize-none", errors.message && "border-red-400")}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={clsx(
          "w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all",
          isSubmitting
            ? "bg-gold-200 text-gold-700 cursor-not-allowed"
            : "gold-gradient text-dark hover:opacity-90"
        )}
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-gold-700/30 border-t-gold-700 rounded-full animate-spin" />
            {t("sending")}
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            {t("submit")}
          </>
        )}
      </button>
    </form>
  );
}
