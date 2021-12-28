import { IncompleteMarkdownPageData, MarkdownPageData } from "@/types/content";

export function pageUrl(
  page: IncompleteMarkdownPageData | MarkdownPageData
): string {
  return `/${page.categoryCodes[0]}/${page.slug}`;
}