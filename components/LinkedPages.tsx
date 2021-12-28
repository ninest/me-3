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
        className={clsx({
          "grid gap-md grid-cols-2 md:grid-cols-3": grid,
          "space-y-sm": !grid,
        })}
      >
        {pages.map((page) => (
          <div key={page.url}>
            <PagePreview
              url={page.url}
              icon={page.icon}
              iconSize="xs"
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
