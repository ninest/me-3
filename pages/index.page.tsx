import type { GetServerSidePropsContext, NextPage } from "next";
import Icon from "@/components/Icon";
import Title from "@/components/typography/Title";
import Spacer from "@/components/Space";
import Space from "@/components/Space";
import Button from "@/components/button/Button";
import { getFullCategory } from "@/lib/content";
import { Category } from "@/types/content";
import PagePreview from "@/components/PagePreview";

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const projects = await getFullCategory("project");

  return {
    props: { projects },
  };
};

const IndexPage = ({ projects }: { projects: Category }) => {
  return (
    <>
      <div className="wrapper">
        <Space size="xl"></Space>
        {/* <Icon id="nextbus" size="lg"></Icon> */}
        {/* <Spacer size="md"></Spacer> */}

        <Title>Parth Kabra</Title>
        <Spacer></Spacer>

        <div className="flex space-x-base">
          <Button variant="primary" href="/about">Current Endeavors</Button>
          <Button href="/resume">Resume</Button>
        </div>

        <Spacer size="md"></Spacer>

        <article className="prose">
          <p>
            Hi! I'm a computer science student at <b>Northeastern University</b>
            ! Please hire me.
          </p>
        </article>

        <Spacer size="3xl"></Spacer>

        <Title level={2}>Projects</Title>
        <Spacer size="lg"></Spacer>

        <section className="grid gap-xl grid-cols-1 md:grid-cols-2">
          {projects.pages.map((page) => (
            <PagePreview
              key={`/${page.categoryCodes[0]}/${page.slug}]`}
              url={`/${page.categoryCodes[0]}/${page.slug}]`}
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

export default IndexPage;
