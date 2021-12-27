import {
  Category,
  IncompleteCategory,
  MarkdownPageData,
} from "../types/content";

export const categories: IncompleteCategory[] = [
  { code: "python", name: "Python" },
  { code: "javascript", name: "JavaScript" },
  { code: "nextjs", name: "NextJS" },
  { code: "vscode", name: "VScode" },
  { code: "blog", name: "Blog" },
  { code: "html", name: "HTML" },
  { code: "git", name: "Git" },
  { code: "mac", name: "Mac" },
  { code: "cli", name: "CLI" },
  { code: "cs", name: "Computer Science" },
  { code: "project", name: "Project" },
  { code: "work-experience", name: "Work Experience" },
];

export const posts: MarkdownPageData[] = [
  // Blog posts
  { categoryCodes: ["blog"], slug: "contemplations" },

  // Projects
  { categoryCodes: ["project"], slug: "nextbussg" },
  { categoryCodes: ["project"], slug: "ninenine" },
  { categoryCodes: ["project"], slug: "national-service-resources" },
  { categoryCodes: ["project"], slug: "shots" },
  { categoryCodes: ["project"], slug: "typer" },
  { categoryCodes: ["project"], slug: "uniquecode" },

  /* Work experience */
  { categoryCodes: ["work-experience"], slug: "singapore-armed-forces" },
  { categoryCodes: ["work-experience"], slug: "h3zoomai" },
  { categoryCodes: ["work-experience"], slug: "credr" },

  // CS posts
  // { categoryCodes: ["cs", "blog"], slug: "searching" },
];
export const featuredPosts: MarkdownPageData[] = [];
