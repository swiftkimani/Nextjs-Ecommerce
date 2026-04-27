import { Inter } from "next/font/google";
import "../styles/main.scss";
import Provider from "@/context/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shanny Commerce Suite",
  description: "Unified Next.js storefront and dashboard for Shanny Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
