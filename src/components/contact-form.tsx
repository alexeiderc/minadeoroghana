"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Send } from "lucide-react";
import clsx from "clsx";

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Required";
    if (!formData.email.trim()) {
      newErrors.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!formData.message.trim()) newErrors.message = "Required";
    return newErrors;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  }

  function handleChange(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
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
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">{t("name")}</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={clsx(inputClasses, errors.name && "border-red-400")}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">{t("email")}</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={clsx(inputClasses, errors.email && "border-red-400")}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">{t("company")}</label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
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
          <label className="block text-sm font-medium text-white/80 mb-2">{t("message")}</label>
        <textarea
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
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
