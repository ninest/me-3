import useColorTheme from "@/pages/hooks/theme";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  href?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "error" | "gray";
}

const Button = ({
  href,
  size = "md",
  variant = "gray",
  children,
  ...props
}: ButtonProps) => {
  const { isLightTheme, isDarkTheme } = useColorTheme();

  return (
    <button
      className={clsx(
        "rounded-md p-base font-semibold shadow",
        {
          "text-sm": size === "sm",
          "text-base": size === "md",
          "text-lg": size === "lg",
        },
        "focus:ring ring-offset-2",
        {
          "bg-gray-lightest text-gray-darkest ring-gray-dark":
            variant === "gray" && isLightTheme,
          "bg-gray-light text-gray-darkest ring-gray-dark":
            variant === "gray" && isDarkTheme,

          "bg-primary text-primary-lightest ring-primary-light":
            variant === "primary",

          "bg-error text-error-lightest": variant === "error",
        },
        props.className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
