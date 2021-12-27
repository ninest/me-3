import clsx from "clsx";
import { Frontmatter } from "@/types/content";
import PagePreview, { PagePreviewProps } from "./PagePreview";

interface LinkedPagesProps {
  pages: Frontmatter["linkedPages"];
  ghost?: PagePreviewProps["ghost"];
  size?: PagePreviewProps["size"];
  grid?: boolean;
}

const LinkedPages = ({
  pages,
  ghost,
  size,
  grid = false,
}: LinkedPagesProps) => {
  return (
    <>
      <div
        className={clsx(
          {
            // "space-y-sm": size == "sm",
            // "space-y-base": size == "base",
            // "space-y-lg": size == "lg",
          },
          {
            "grid gap-md grid-cols-2 md:grid-cols-3": grid,
          }
        )}
      >
        {pages.map((page) => (
          <div key={page.url}>
            <PagePreview
              url={page.url}
              icon={page.icon}
              title={page.title}
              description={page.description}
              ghost={ghost}
              size={size}
            ></PagePreview>
          </div>
        ))}
      </div>
    </>
  );
};

export default LinkedPages;
