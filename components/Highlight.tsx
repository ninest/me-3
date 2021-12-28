import { formatDate } from "@/lib/date";
import {
  Category,
  Frontmatter,
  IncompleteCategory,
  MarkdownPageData,
} from "@/types/content";
import clsx from "clsx";
import { HTMLAttributes } from "react";
import Icon from "./Icon";
import LinkedPages from "./LinkedPages";
import SmartLink from "./SmartLinks";
import Spacer from "./Space";
import Title from "./typography/Title";

interface HighlightProps extends HTMLAttributes<HTMLDivElement> {
  theme?: "gray" | "primary" | "error" | "warning";
  // frontmatter: Omit<Frontmatter, "slug" | "showContents" | "updatedAt">;
  frontmatter: Pick<Frontmatter, "title"|"description"|"icon">;
  category?: IncompleteCategory;
}

const Highlight = ({
  children,
  theme = "gray",
  frontmatter,
  category,
  ...props
}: HighlightProps) => {
  return (
    <div
      className={clsx(
        "py-16 border-t border-b",
        {
          "bg-gray-50 border-gray-100": theme === "gray",
          "bg-primary-lighter border-primary-100": theme === "primary",
          "bg-error-light border-error-100": theme === "error",
          "bg-warning-light border-warning-100": theme === "warning",
        },
        props.className
      )}
    >
      <div className="absolute font-black" style={{ fontSize: `10rem` }}>
        <span className="opacity-5">{frontmatter.title.slice(0, 2)}</span>
      </div>

      <Icon id={frontmatter.icon} size="lg"></Icon>
      <Spacer></Spacer>
      <Title>{frontmatter.title}</Title>

      <p className="font-semibold text-lg text-gray-dark">
        {frontmatter.description}
      </p>
      <Spacer size="md"></Spacer>

      <div className="font-display flex space-x-xs text-gray-dark">
        {category && (
          <>
            <SmartLink href={`/${category.code}`}>{category.name}</SmartLink>
            <span>{"·"}</span>
            <span className="text-gray">
              {formatDate(new Date(frontmatter.updatedAt))}
            </span>
          </>
        )}
      </div>

      {/* For projects, show links at the top too */}
      {category?.code === "project" && (
        <>
          <Spacer size="xl"></Spacer>
          <LinkedPages
            ghost
            grid
            size="sm"
            pages={frontmatter.linkedPages}
          ></LinkedPages>
        </>
      )}
    </div>
  );
};
export default Highlight;
