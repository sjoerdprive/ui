export const heightOptions = ["sm", "md", "lg"] as const;
export const themeOptions = ["primary", "secondary", "accent"] as const;

export type Height = (typeof heightOptions)[number];
export type Theme = (typeof themeOptions)[number];

export interface WithHeight {
  height?: Height;
}

export interface WithTheme {
  theme?: Theme;
}
