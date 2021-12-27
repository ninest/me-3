import { HTMLAttributes, ReactNode, useState } from "react";
import clsx from "clsx";
import { FaChevronDown } from "react-icons/fa";

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  children: ReactNode;

  // types
  variant?: "primary" | "error" | "gray" | "warning";

  // default state
  open?: boolean;
}

const Alert = ({
  title,
  children,
  variant = "gray",
  open = false,
  ...props
}: AlertProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);

  const toggle = (event: any) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <details
      open={isOpen}
      className={clsx(
        "alert",
        "p-base border-l-8",
        "md:rounded md:rounded-r-lg",
        {
          "border-gray bg-gray-lightest": variant == "gray",
          "border-primary bg-primary-lighter": variant == "primary",
          "border-error bg-error-light": variant == "error",
          "border-warning bg-warning-light": variant == "warning",
        },
        props.className
      )}
    >
      <summary
        onClick={toggle}
        className="list-none font-semibold text-lg flex items-center justify-between space-x-base"
      >
        <div>{title}</div>
        <FaChevronDown
          className={clsx(
            "flex-shrink-0 text-base text-gray-darker transition-transform",
            {
              "transform rotate-180": isOpen,
            }
          )}
        ></FaChevronDown>
      </summary>
      <div className="mt-base space-y-sm overflow-x-scroll">
        {children}
        </div>
    </details>
  );
};

export default Alert;
