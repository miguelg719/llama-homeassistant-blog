import Footer from "@/app/_components/footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "./_components/theme-switcher";
import { BASE_URL } from "@/lib/constants";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = BASE_URL;

export const metadata: Metadata = {
  title: `Llama + Home Assistant Blog`,
  description: 'A blog about getting started with Llama to control Home Assistant',
  openGraph: {
    images: [{
      url: `${baseUrl}/favicon/github_logo.png`
    }],
  },
  icons: {
    icon: `${baseUrl}/favicon/github_logo.png`,
    shortcut: `${baseUrl}/favicon/github_logo.png`,
    apple: `${baseUrl}/favicon/github_logo.png`,
    other: {
      rel: 'apple-touch-icon',
      url: `${baseUrl}/favicon/github_logo.png`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="icon" 
          type="image/png" 
          href={`${baseUrl}/favicon/github_logo.png`}
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
      >
        <ThemeSwitcher />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
