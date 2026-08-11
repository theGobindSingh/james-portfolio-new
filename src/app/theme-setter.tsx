"use client";

import { clientCookies } from "@utils/cookies";
import { useEffect } from "react";

export default function ThemeSetter() {
  useEffect(() => {
    const cookieTheme = clientCookies.get("theme");

    const theme =
      cookieTheme ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    clientCookies.set("theme", theme);

    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
  }, []);

  return null;
}
