"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps as NextThemeProviderInternal } from "next-themes/dist/types";

export function ThemeProvider({
  children,
  ...props
}: React.PropsWithChildren<{
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
