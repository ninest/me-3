import {
  Category,
  Frontmatter,
  IncompleteCategory,
  IncompleteMarkdownPageData,
  MarkdownPageData,
} from "@/types/content";
import { categories, posts } from "./content-map";
import { mdxFromFile } from "./mdx";

/* 
Code: category name for content/posts the website contains 
Reference: https://stackoverflow.com/a/45257357/8677167
*/

export const categoryCodes = [
  "blog",
  "python",
  "javascript",
  "nextjs",
  "vscode",
  "html",
  "git",
  "mac",
  "cli",
  "cs",
  "project",
  "work-experience"
] as const;
export type CategoryCode = typeof categoryCodes[number];

/* 
Receive a list of md page data (from content-map.ts) and add ALL fields 
to each item
*/
export async function getPostsFromList(
  incompletePosts: IncompleteMarkdownPageData[]
): Promise<MarkdownPageData[]> {
  // Contains all incompletePosts, but with all the required fields from
  // the MarkdownPageData interface
  const completePosts = [];

  for (const incompletePost of incompletePosts) {
    const mainCategoryCode = incompletePost.categoryCodes[0];
    const slug = incompletePost.slug;

    const { code, frontmatter } = await mdxFromFile<{
      code: any;
      frontmatter: Frontmatter;
    }>(`/${mainCategoryCode}/${slug}`);

    completePosts.push({
      ...incompletePost,
      frontmatter,
      code,
    });
  }

  return completePosts;
}

export async function getPost(filepath: string): Promise<MarkdownPageData> {
  const markdownPage: MarkdownPageData = await mdxFromFile(filepath);

  // Must not be empty, but can be empty list
  markdownPage.frontmatter!.linkedPages =
    markdownPage.frontmatter?.linkedPages ?? [];

  return markdownPage;
}

export async function getFullCategory(categoryCode: CategoryCode): Promise<Category> {
  const incompleteCategory: IncompleteCategory = categories.filter(
    (cat) => cat.code == categoryCode
  )[0];
  const completeCategory: Category = {
    ...incompleteCategory,
    pages: await getPostsFromList(
      posts.filter((post) => post.categoryCodes.includes(categoryCode))
    ),
  };
  return completeCategory
}
