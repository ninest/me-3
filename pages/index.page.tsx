import type { GetServerSidePropsContext, NextPage } from "next";

import Title from "@/components/typography/Title";
import Spacer from "@/components/Space";
import Space from "@/components/Space";
import Button from "@/components/button/Button";
import { getFullCategory } from "@/lib/content";
import { Category, MarkdownPageData } from "@/types/content";
import PagePreview from "@/components/PagePreview";
import { pageUrl } from "@/lib/content/page-url";
import Icon from "@/components/Icon";
import SmartLink from "@/components/SmartLinks";

export const getStaticProps = async ({ params }: GetServerSidePropsContext) => {
  const projects = await getFullCategory("project");
  const miniProjects = await getFullCategory("mini-project");
  const workExperience = await getFullCategory("work-experience");
  const interests = await getFullCategory("interest");

  return {
    props: { projects, workExperience, interests, miniProjects },
  };
};

interface IndexPageProps {
  projects: Category;
  miniProjects: Category;
  workExperience: Category;
  interests: Category;
}

const IndexPage = ({
  projects,
  miniProjects,
  workExperience,
  interests,
}: IndexPageProps) => {
  return (
    <>
      <div className="wrapper">
        <Space size="xl"></Space>

        <Title>Parth Kabra</Title>
        <Spacer></Spacer>

        <div className="flex flex-col space-y-base md:flex-row md:space-y-0 md:space-x-base">
          <Button className="w-full md:w-auto" variant="primary" href="/about">
            Current Endeavors
          </Button>
          <Button className="w-full md:w-auto" href="/resume">
            Resume
          </Button>
        </div>

        <Spacer size="md"></Spacer>

        <article className="prose">
          <p>
            Hi! I{"'"}m a computer science student at{" "}
            <b>Northeastern University</b> with significant experience in app
            development. Please hire me!
          </p>
        </article>

        <Spacer></Spacer>
        {/* Buttons */}
        <section className="flex space-x-base">
          <SmartLink
            className="p-xs rounded bg-gray-100 hover:bg-gray-lightest"
            href="https://github.com/ninest"
          >
            <Icon id="github"></Icon>
          </SmartLink>
          <SmartLink
            className="p-xs rounded bg-gray-100 hover:bg-gray-lightest"
            href="https://www.linkedin.com/in/parth-kabra/"
          >
            <Icon id="linkedin"></Icon>
          </SmartLink>
        </section>

        <Spacer size="3xl"></Spacer>

        <Section category={workExperience}></Section>
        <Spacer size="3xl"></Spacer>
        <Section category={projects}></Section>
        <Spacer size="3xl"></Spacer>
        <Section category={miniProjects}></Section>

        <Spacer size="2xl"></Spacer>
        <hr />
        <Spacer size="xl"></Spacer>

        <Section category={interests}></Section>
        <Spacer size="3xl"></Spacer>
      </div>
    </>
  );
};

interface SectionProps {
  title?: string;
  category: Category;
}
const Section = ({ title, category }: SectionProps) => {
  return (
    <>
      <Title level={2}>{title ?? category.name}</Title>
      <Spacer size="lg"></Spacer>

      <section className="grid gap-xl grid-cols-1 md:grid-cols-2">
        {category.pages.map((page) => (
          <PagePreview
            key={pageUrl(page)}
            data={{
              url: pageUrl(page),
              icon: page.frontmatter?.icon!,
              title: page.frontmatter?.title!,
              description: page.frontmatter?.description,
            }}
            size="lg"
            ghost
          ></PagePreview>
        ))}
      </section>
    </>
  );
};

export default IndexPage;
