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
  "work-experience",
] as const;
export type CategoryCode = typeof categoryCodes[number];