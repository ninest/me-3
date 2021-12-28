import { listToFilepath } from "@/lib/file";
import type { GetStaticPaths, GetStaticProps } from "next";
import {
  Category,
  IncompleteCategory,
  MarkdownPageData,
} from "@/types/content";

import { getPost, getPostsFromList } from "@/lib/content";
import { categories, otherPages, posts } from "@/lib/content-map";

import MarkdownPage from "@/pages/[...slug]/Markdown";
import ContentListPage from "@/pages/[...slug]/CategoryList";
import { CategoryCode, categoryCodes } from "@/types/category";

export const getStaticPaths: GetStaticPaths = (context) => {
  const categoryPaths = categoryCodes
    // Remove blog post because it's custom
    .filter((code) => code !== "blog")
    .map((code) => `/${code}`);
  const pagePaths = posts.map(
    (post) => `/${listToFilepath([post.categoryCodes[0], post.slug])}`
  );
  const otherPagePaths = otherPages.map((slug) => `/${slug}`);
  return {
    paths: [...pagePaths, ...categoryPaths, ...otherPagePaths],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.slug as string[];

  /* 
  If the slug list:
  - contains only one element and
  - the one element is a categoryCode,
  The page is a "post listing" page
  */
  if (
    slug?.length! === 1 &&
    categoryCodes.includes((slug as CategoryCode[])[0])
  ) {
    // Post listing page for a particular category code
    const categoryCode = slug![0] as CategoryCode;

    const incompleteCategory: IncompleteCategory = categories.filter(
      (cat) => cat.code == categoryCode
    )[0];

    const completeCategory: Category = {
      ...incompleteCategory,
      pages: await getPostsFromList(
        posts.filter((post) => post.categoryCodes.includes(categoryCode))
      ),
    };

    return {
      props: { category: completeCategory },
    };
  } else {
    // Markdown page

    const markdownPage: MarkdownPageData = await getPost(
      listToFilepath(slug as String[])
    );

    // TODO: what if the first part actually isn't a cat code?
    let category = null;
    if (slug.length > 1) {
      const categoryCode = slug![0] as CategoryCode;
      category = categories.filter((cat) => cat.code === categoryCode)[0];
    }
    return {
      props: { category, markdownPage },
    };
  }
};

/* --- */

const ContentPage = ({
  markdownPage,
  category,
}: {
  markdownPage: MarkdownPageData;
  category: Category;
}) => {
  if (markdownPage) {
    return (
      <MarkdownPage
        category={category}
        markdownPage={markdownPage}
      ></MarkdownPage>
    );
  } else if (category) {
    return <ContentListPage category={category}></ContentListPage>;
  }
};

export default ContentPage;
