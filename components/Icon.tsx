import Image from "next/image";
import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";
import { IconType } from "react-icons";
import {
  FaAppStoreIos,
  FaBrain,
  FaFirefox,
  FaGithub,
  FaGooglePlay,
  FaGrinBeam,
  FaMoon,
  FaPencilAlt,
  FaRedditAlien,
  FaRegFileAlt,
  FaSearch,
  FaSortNumericUp,
  FaSun,
} from "react-icons/fa";

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  size?: "xs" | "sm" | "base" | "md" | "lg";
  id?: string;
}

const Icon = ({ children, size = "base", id, ...props }: IconProps) => {
  const className = clsx(
    "text-gray",
    {
      "text-6xl": size == "lg",
      "text-5xl": size == "md",
      "text-4xl": size == "base",
      "text-2xl": size == "sm",
      "text-xl": size == "xs",
    },
    props.className
  );

  if (children) {
    // Emoji icon
    return <div className={className}>{children}</div>;
  } else if (iconMap.hasOwnProperty(id!)) {
    const Component = iconMap[id!];
    return (
      <>
        <Component className={className}></Component>
      </>
    );
  } else if (svgIconMap.hasOwnProperty(id!)) {
    let width = 30;
    switch (size) {
      case "sm":
        width = 30;
        break;
      case "base":
        width = 35;
        break;
      case "md":
        width = 40;
        break;
      case "lg":
        width = 60;
        break;
    }
    return (
      <div>
        <Image src={svgIconMap[id!]} height={width} width={width}></Image>
      </div>
    );
  } else return <></>;
};
export default Icon;

const iconMap: Record<string, IconType> = {
  pencil: FaPencilAlt,
  search: FaSearch,
  dsc: FaSortNumericUp,
  github: FaGithub,
  grin: FaGrinBeam,
  moon: FaMoon,
  sun: FaSun,
  brain: FaBrain,
  playstore: FaGooglePlay,
  appstore: FaAppStoreIos,
  web: FaFirefox,
  filealt: FaRegFileAlt,
  reddit: FaRedditAlien,
};

const svgIconMap: Record<string, string> = {
  nextbus: "/icons/nextbus.svg",
  ninenine: "/icons/ninenine.svg",
  nsr: "/icons/nsr.svg",
  shots: "/icons/shots.svg",
  typer: "/icons/typer.svg",
  uniquecode: "/icons/uniquecode.svg",
  credr: "/icons/ccc.svg",
  h3: "/icons/h3.svg",
  saf: "/icons/saf.svg",
};
