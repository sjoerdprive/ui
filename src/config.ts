export const heightOptions = ["xs", "sm", "md", "lg"] as const;
export const themeOptions = ["primary", "secondary", "accent"] as const;

export type Height = (typeof heightOptions)[number];
export type Theme = (typeof themeOptions)[number];

export interface WithHeight {
  height?: Height;
}

export interface WithTheme {
  theme?: Theme;
}

export const POPPER_DEPTH = {
  BASE: 1000,
  TOOLTIP: 1100,
  DROPDOWN: 1200,
  DIALOG: 1300,
  TOASTER: 1400
};
