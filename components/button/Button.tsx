
import clsx from "clsx";

import { HTMLAttributes } from "react";
import SmartLink from "../SmartLinks";

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
  // const { isLightTheme, isDarkTheme } = useColorTheme();

  const Element = (
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
          "bg-gray-lightest text-gray-darkest ring-gray-darker":
            variant === "gray",

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

  if (href) {
    return <SmartLink href={href}>{Element}</SmartLink>;
  }
  return Element;
};

export default Button;
