import clsx from "clsx";
import { HTMLAttributes } from "react";
import { formatShortDate } from "@/lib/date";
import { MarkdownPageData } from "@/types/content";
import Icon from "./Icon";
import SmartLink from "./SmartLinks";
import Spacer from "./Space";

export interface PagePreviewProps extends HTMLAttributes<HTMLDivElement> {
  icon: string;
  url: string;
  title: string;
  description?: string;

  size?: "sm" | "base" | "lg";
  ghost?: boolean;
}

const PagePreview = ({
  icon,
  url,
  title,
  description,
  ghost = false,
  size = "base",
  ...props
}: PagePreviewProps) => {
  return (
    <>
      <SmartLink
        href={url}
        className={clsx(
          "block rounded hover:bg-primary-lightest",

          {
            "p-sm -m-sm": ghost,
            "p-md": !ghost,
          },
          {
            "space-x-sm": size == "sm",
            "space-x-base": size == "base",
            "space-x-lg": size == "lg",
          },
          props.className
        )}
      >
        <div className="flex space-x-xl">
          <div className="flex-initial">
            <div>
              <Icon className="text-gray-light" id={icon} size="sm"></Icon>
            </div>
          </div>
          <div className="flex-1">
            <h3
              className={clsx("font-medium  text-gray-dark", {
                "text-sm": size == "sm",
                "text-base": size == "base",
                "text-lg": size == "lg",
              })}
            >
              {title}
            </h3>
            {description && (
              <p
                className={clsx("text-gray", {
                  "text-xs": size == "base",
                })}
              >
                {description}
              </p>
            )}
          </div>
        </div>
      </SmartLink>
    </>
  );
};

export default PagePreview;
