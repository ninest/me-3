import Button from "@/components/button/Button";
import Highlight from "@/components/Highlight";
import Spacer from "@/components/Space";
import { copy } from "@/lib/copy";
import { useEffect, useState } from "react";

const ContactPage = () => {
  const [copied, setCopied] = useState(false);
  const [canCopy, setCanCopy] = useState(false);

  useEffect(() => {
    if ("clipboard" in navigator) setCanCopy(true);
  }, []);

  const copyEmail = () => {
    copy("parth.kabra@gmail.com", "My email");
    setCopied(true);

    // In 3 seconds, change text again
    setTimeout(() => {
      setCopied(false);
    }, 987);
  };
  return (
    <>
      <Highlight
        className="wrapper relative"
        frontmatter={{
          title: "Contact",
          description: "Ways to get in touch",
          icon: "filealt",
        }}
      ></Highlight>
      <Spacer size="xl"></Spacer>

      <article className="wrapper">
        <div className="prose">
          <h2>Social</h2>
          <p className="flex flex-col space-y-base">
            <Button
              icon="linkedin"
              href="https://www.linkedin.com/in/parth-kabra/"
              className="w-full"
            >
              LinkedIn
            </Button>
            <Button
              icon="github"
              href="https://github.com/ninest/"
              className="w-full"
            >
              GitHub
            </Button>
          </p>
          <h2>Email</h2>
          <p>
            <a href="mailto:parth.kabra@gmail.com">parth.kabra@gmail.com</a>
          </p>

          <p>
            <Button className="w-full" onClick={copyEmail}>
              {copied ? <span>Copied!</span> : <span>Copy email</span>}
            </Button>
          </p>
        </div>
      </article>
    </>
  );
};

export default ContactPage;
