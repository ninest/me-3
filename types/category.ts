export const categoryCodes = [
  "blog",
  "python",
  "javascript",
  "nextjs",
  "vscode",
  "html",
  "git",
  "mac",
  "cli",
  "cs",
  "project",
  "mini-project",
  "work-experience",
  "interest",
] as const;
export type CategoryCode = typeof categoryCodes[number];
