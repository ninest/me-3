import PagePreview from "@/components/PagePreview";
import Spacer from "@/components/Space";
import Title from "@/components/typography/Title";
import { getAllPages, getPostsFromList } from "@/lib/content";
import { posts } from "@/lib/content-map";
import { MarkdownPageData } from "@/types/content";
import { GetServerSidePropsContext } from "next";
import { NextSeo } from "next-seo";

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const postsList = posts.filter(
    (post) =>
      !(
        post.categoryCodes.includes("project") ||
        post.categoryCodes.includes("work-experience")
      )
  );

  const pages = await getPostsFromList(postsList);
  return { props: { pages } };
};

const BlogListPage = ({ pages }: { pages: MarkdownPageData[] }) => {
  return (
    <>
      <NextSeo title="All Posts"></NextSeo>

      <div className="wrapper">
        <Title>All Posts</Title>
        <Spacer size="lg"></Spacer>

        <section className="grid gap-xl grid-cols-1 md:grid-cols-2">
          {pages.map((page) => (
            <PagePreview
              key={`/${page.categoryCodes[0]}/${page.slug}`}
              url={`/${page.categoryCodes[0]}/${page.slug}`}
              icon={page.frontmatter?.icon!}
              title={page.frontmatter?.title!}
              description={page.frontmatter?.description}
              size="lg"
              ghost
            ></PagePreview>
          ))}
        </section>
      </div>
    </>
  );
};

export default BlogListPage;
