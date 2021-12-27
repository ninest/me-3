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
          "flex rounded space-x-lg hover:bg-primary-lightest",
          // "items-center",
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
        <div>
          {/* <Spacer size="sm"></Spacer> */}
          <Icon className="text-gray-light" id={icon} size="base"></Icon>
        </div>
        <div>
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
      </SmartLink>
    </>
  );
};

export default PagePreview;
