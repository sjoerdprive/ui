export const typographyOptions = [
  "tag",
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
] as const;

export type TypographyOption = (typeof typographyOptions)[number];
