import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tesla & SpaceX Showcase",
  description: "Experience the future with Tesla cars and SpaceX rockets side by side",
  keywords: ["Tesla", "SpaceX", "Electric Cars", "Space Rockets", "Innovation", "Technology"],
  authors: [{ name: "Tesla SpaceX Showcase" }],
  openGraph: {
    title: "Tesla & SpaceX Showcase",
    description: "Experience the future with Tesla cars and SpaceX rockets side by side",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}