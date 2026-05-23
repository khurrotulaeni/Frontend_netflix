interface ButtonProps {
  label: string;
  variant?: "primary" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  className,
}) => {
  const baseStyle =
    "w-full px-4 py-3 rounded font-medium transition-all duration-200";

  const variantStyle =
    variant === "primary"
      ? "bg-red-600 text-white hover:bg-red-700"
      : "border border-gray-500 text-white hover:bg-gray-800";

  return (
    <button
    type="submit"
    className={`${baseStyle} ${variantStyle} ${className || ""}`}
  >
    {label}
  </button>
  );
};