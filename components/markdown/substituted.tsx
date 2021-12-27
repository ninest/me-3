import Image from "next/image";
import CodeBlock from "@/components/code/CodeBlock";
import ExpandableCode from "@/components/code/ExpandableCode";
import Alert from "@/components/Alert";

const substitutedComponents = {
  /* Code */
  pre: (props: any) => {
    const language = props.children.props["data-language"];
    const code = props.children.props.children ?? "";

    return (
      <div className="mobile-full-bleed">
        <CodeBlock language={language} code={code}></CodeBlock>
      </div>
    );
  },

  /* Expandable code */
  ExpandableCode: (props: any) => {
    return (
      <ExpandableCode {...props} className="mobile-full-bleed"></ExpandableCode>
    );
  },

  /* General alerts */
  Alert: (props: any) => {
    return <Alert {...props} className="mobile-full-bleed"></Alert>;
  },

  /* Next image */
  Image: (props: any) => {
    const src = `/notouchy/${props.src}`;

    return (
      <div className="flex justify-center mobile-full-bleed">
        <Image {...props} src={src} className="md:rounded bg-gray-lightest"></Image>
      </div>
    );
  },
};

export default substitutedComponents;
