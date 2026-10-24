import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Israt Jahan Rani | Software Engineer & AI Researcher",
  description:
    "Portfolio of Israt Jahan Rani — Computer Science & Engineering graduate specializing in Software Engineering, Applied AI/ML, Medical AI, and Software QA.",
  keywords: [
    "Israt Jahan Rani",
    "Computer Science",
    "Software Engineer",
    "Medical AI",
    "Bengali NLP",
    "TinyML",
    "UIU",
    "Portfolio",
  ],
  authors: [{ name: "Israt Jahan Rani" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-theme="dark"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
