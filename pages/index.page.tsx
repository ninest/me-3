import type { NextPage } from "next";
import Icon from "@/components/Icon";
import Title from "@/components/typography/Title";
import Spacer from "@/components/Space";
import Space from "@/components/Space";
import Button from "@/components/button/Button";
// import Space from "@/components/Space";

const IndexPage: NextPage = () => {
  return (
    <>
      <div className="wrapper">
        <Space size="xl"></Space>
        {/* <Icon id="grin" size="lg"></Icon> */}
        {/* <Spacer size="md"></Spacer> */}

        <Title>Parth Kabra</Title>
        <Spacer></Spacer>

        <div className="flex space-x-base">
          <Button variant="primary">Current Endeavors</Button>
          <Button>Resume</Button>
        </div>

        <Spacer size="md"></Spacer>

        <article className="prose">
          <p>
            Hi! I'm a computer science student at <b>Northeastern University</b>
            ! Please hire me.
          </p>
        </article>
      </div>
    </>
  );
};

export default IndexPage;
