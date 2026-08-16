import Header from "@components/header";
import "@styles/globals.css";
import type { Metadata } from "next";
import {
  Bebas_Neue as BebasNeue,
  DM_Mono as DmMono,
  DM_Sans as DmSans,
  Gloock,
  Newsreader,
  Reenie_Beanie as ReenieBeanie,
} from "next/font/google";
import { type PropsWithChildren } from "react";

const fontDisplay = Gloock({
  variable: "--font-display",
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
});

const fontPoster = BebasNeue({
  variable: "--font-poster",
  weight: ["400"],
  subsets: ["latin"],
});

const fontSansSerif = Newsreader({
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
});

const fontMono = DmMono({
  variable: "--font-mono",
  weight: ["400", "500"],
  subsets: ["latin", "latin-ext"],
});

const fontSans = DmSans({
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
});

const fontCursive = ReenieBeanie({
  variable: "--font-cursive",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Starter Template",
  description:
    "Starter template with Next.js, TypeScript, and Tailwind baseline.",
};

// const getTheme = async () => {
//   try {
//     const cookieStore = await cookies();
//     return cookieStore.get("theme")?.value ?? null;
//   } catch {
//     return null;
//   }
// };

const RootLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <html
      lang="en"
      // eslint-disable-next-line better-tailwindcss/no-unknown-classes -- custom
      className={`light ${fontDisplay.variable} ${fontPoster.variable} ${fontSansSerif.variable} ${fontMono.variable} ${fontSans.variable} ${fontCursive.variable}`}
    >
      <head />
      <body>
        {/* <ThemeSetter /> */}
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
