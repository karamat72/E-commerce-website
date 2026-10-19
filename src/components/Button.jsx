export default function Button({ children, variant = "primary", className = "", ...props }) {
  const styles = variant === "secondary"
    ? "border border-ink/15 bg-white text-ink hover:border-ink"
    : variant === "light"
      ? "bg-white text-ink hover:bg-ivory"
      : "bg-ink text-white hover:bg-ink/90";
  return (
    <button className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}
