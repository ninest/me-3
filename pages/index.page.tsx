import type { GetServerSidePropsContext, NextPage } from "next";
import Icon from "@/components/Icon";
import Title from "@/components/typography/Title";
import Spacer from "@/components/Space";
import Space from "@/components/Space";
import Button from "@/components/button/Button";
import { getFullCategory } from "@/lib/content";
import { Category } from "@/types/content";
import PagePreview from "@/components/PagePreview";
import { pageUrl } from "@/lib/content/page-url";

export const getStaticProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const projects = await getFullCategory("project");
  const workExperience = await getFullCategory("work-experience");

  return {
    props: { projects, workExperience },
  };
};

interface IndexPageProps {
  projects: Category;
  workExperience: Category;
}

const IndexPage = ({ projects, workExperience }: IndexPageProps) => {
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
            Hi! I{"'"}m a computer science student at <b>Northeastern University</b>{" "}
            with significant experience in app development. Please hire me!
          </p>
        </article>

        <Spacer size="3xl"></Spacer>

        <Title level={2}>Work Experience</Title>
        <Spacer size="lg"></Spacer>

        <section className="grid gap-xl grid-cols-1 md:grid-cols-2">
          {workExperience.pages.map((page) => (
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

        <Spacer size="3xl"></Spacer>

        <Title level={2}>Projects</Title>
        <Spacer size="lg"></Spacer>

        <section className="grid gap-xl grid-cols-1 md:grid-cols-2">
          {projects.pages.map((page) => (
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

        <Spacer size="3xl"></Spacer>

        <Title level={2}>Interests</Title>
        <Spacer size="lg"></Spacer>

        <article className="prose">
          <ul>
            <li>Origami</li>
          </ul>
        </article>
      </div>
    </>
  );
};

export default IndexPage;
