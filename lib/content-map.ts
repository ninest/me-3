import { IncompleteCategory, MarkdownPageData } from "@/types/content";

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
  { code: "project", name: "Projects" },
  { code: "mini-project", name: "Mini-projects" },
  { code: "work-experience", name: "Work Experience" },
  { code: "interest", name: "Interests" },
];

export const posts: MarkdownPageData[] = [
  // Blog posts
  { categoryCodes: ["blog"], slug: "contemplations" },
  { categoryCodes: ["blog"], slug: "account-hacked" },

  /* CLI */
  { categoryCodes: ["cli"], slug: "youtube-dl" },

  // Projects
  { categoryCodes: ["project"], slug: "nextbussg" },
  { categoryCodes: ["project"], slug: "ninenine" },
  { categoryCodes: ["project"], slug: "national-service-resources" },
  { categoryCodes: ["project"], slug: "shots" },
  { categoryCodes: ["mini-project"], slug: "typer" },
  { categoryCodes: ["mini-project"], slug: "uniquecode" },
  { categoryCodes: ["mini-project"], slug: "hexy-time" },

  /* Interests */
  { categoryCodes: ["interest"], slug: "origami" },

  /* Work experience */
  { categoryCodes: ["work-experience"], slug: "singapore-armed-forces" },
  { categoryCodes: ["work-experience"], slug: "h3zoomai" },
  { categoryCodes: ["work-experience"], slug: "credr" },

  /* VScode */
  { categoryCodes: ["vscode"], slug: "sonic-pi" },

  /* Python */
  { categoryCodes: ["python"], slug: "black-installation-usage" },
  {
    categoryCodes: ["python", "vscode"],
    slug: "vscode-interactive-pyenv-venv",
  },

  /* Nextjs */
  { categoryCodes: ["nextjs"], slug: "custom-routing" },

  /* Mac */
  { categoryCodes: ["mac"], slug: "clear-space" },
  { categoryCodes: ["mac"], slug: "remove-screenshot-shadow" },
  { categoryCodes: ["mac"], slug: "say" },
  { categoryCodes: ["mac"], slug: "terminal-games" },

  /* HTML */
  { categoryCodes: ["html"], slug: "google-forms-embed" },

  /* Git */
  { categoryCodes: ["git"], slug: "shortlog" },
  { categoryCodes: ["git"], slug: "undo-commits" },

  // CS posts
  // { categoryCodes: ["cs", "blog"], slug: "selection-sort" },
];

export const otherPages = ["about", "resume"];

export const featuredPosts: MarkdownPageData[] = [];
