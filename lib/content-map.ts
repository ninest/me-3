import { Category, MarkdownPageData } from "../types/content";

export const categories: Category[] = [
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

  // CS posts
  // { categoryCodes: ["cs", "blog"], slug: "searching" },
];
export const featuredPosts: MarkdownPageData[] = [];
