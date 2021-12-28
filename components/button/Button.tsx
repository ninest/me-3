import clsx from "clsx";

import { HTMLAttributes } from "react";
import Icon from "../Icon";
import SmartLink from "../SmartLinks";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  href?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "error" | "gray";
  icon?: string;
}

const Button = ({
  href,
  size = "md",
  variant = "gray",
  icon,
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
      onClick={props.onClick}
    >
      <div
        className={clsx("flex justify-center", {
          "flex items-center space-x-base": icon,
        })}
      >
        {icon && <Icon id={icon}></Icon>}
        <div>{children}</div>
      </div>
    </button>
  );

  if (href) {
    return (
      <SmartLink className="block" href={href}>
        {Element}
      </SmartLink>
    );
  }
  return Element;
};

export default Button;
