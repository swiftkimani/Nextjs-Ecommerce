import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "../styles/main.scss";
import Provider from "@/context/Provider";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-title",
  display: "swap",
});

export const metadata = {
  title: "Shanny Commerce Suite",
  description: "Unified Next.js storefront and dashboard for Shanny Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} ${sora.variable} font-bodyFont antialiased bg-stone-50 text-stone-950 transition-colors dark:bg-stone-950 dark:text-stone-50`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
