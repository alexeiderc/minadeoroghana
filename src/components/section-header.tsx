import clsx from "clsx";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={clsx(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-custom font-[family-name:var(--font-heading)] leading-tight">
        {title}
      </h2>
      <div
        className={clsx(
          "line-gold mt-4 md:mt-6 mb-4 md:mb-6",
          align === "center" && "mx-auto"
        )}
      />
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-custom/60 max-w-2xl leading-relaxed mt-4" style={align === "center" ? { margin: "1rem auto 0" } : undefined}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
