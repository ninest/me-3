import Image from "next/image";
import clsx from "clsx";
import { HTMLAttributes } from "react";
import { IconType } from "react-icons";
import {
  FaAppStoreIos,
  FaBrain,
  FaComments,
  FaDesktop,
  FaFirefox,
  FaGitAlt,
  FaGithub,
  FaGlobe,
  FaGooglePlay,
  FaGrinBeam,
  FaImages,
  FaMoon,
  FaPencilAlt,
  FaPython,
  FaRedditAlien,
  FaRegFileAlt,
  FaSearch,
  FaShieldAlt,
  FaSitemap,
  FaSortNumericUp,
  FaSun,
  FaYoutube,
} from "react-icons/fa";
import { BsFillTerminalFill } from "react-icons/bs";

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
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
      "text-3xl": size == "sm",
      "text-2xl": size == "xs",
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
        width = 35;
        break;
      case "base":
        width = 40;
        break;
      case "md":
        width = 50;
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
  web: FaGlobe,
  firefox: FaFirefox,
  filealt: FaRegFileAlt,
  reddit: FaRedditAlien,
  youtube: FaYoutube,
  sitemap: FaSitemap,
  desktop: FaDesktop,
  comments: FaComments,
  terminal: BsFillTerminalFill,
  images: FaImages,
  git: FaGitAlt,
  python: FaPython,
  shield: FaShieldAlt,
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
  sonicpi: "/icons/sonicpi.svg",
  black: "/icons/black.svg",
};
