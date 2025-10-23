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
  DIALOG: 1200,
  DROPDOWN: 1300,
  TOASTER: 1400
};
