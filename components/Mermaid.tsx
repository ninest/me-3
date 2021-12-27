import Image from "next/image";

export const Mermaid = ({ code, alt = "Diagram" }: any) => {
  const object = {
    code,
    mermaid: {
      theme: "default",
      themeVariables: {
        fontFamily: "Arial",
        fontSize: "16px",
        nodeBorder: "#000",
        mainBkg: "#fff",
        nodeTextColor: "#000",
      },
    },
  };

  let base64 =
    typeof window === "undefined"
      ? Buffer.from(JSON.stringify(object)).toString("base64")
      : // @ts-ignore
        btoa(JSON.stringify(object));

  const url = `https://mermaid.ink/svg/${base64}`;

  return <img src={url} alt={alt} />;

  // return (
  //   <div className="bg-primary w-full h-full">
  //     <Image layout="fill" objectFit="cover" src={url}></Image>
  //   </div>
  // );
};

// https://mermaid.ink/svg/eyJjb2RlIjoiZ3JhcGggTFJcbiAgICBBIC0tPiBCIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ

/* 

btoa(JSON.stringify({
  "code": "graph LR\n    A --> B",
  "mermaid": {
    "theme": "default"
  },
}))

*/
