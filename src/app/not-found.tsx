import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A]">
      <div className="text-center px-4">
        <p className="text-8xl font-bold bg-gradient-to-r from-[#C8A24A] via-[#E8D48B] to-[#C8A24A] bg-clip-text text-transparent mb-4 font-[family-name:var(--font-heading)]">
          404
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
          Page Not Found
        </h1>
        <p className="text-white/50 mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/en"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#C8A24A] via-[#E8D48B] to-[#C8A24A] text-[#0A0A0A] font-semibold hover:opacity-90 transition-opacity"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
