import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Piyush - Full Stack Engineer",
  description: "Portfolio showcasing full-stack development projects, skills, and experience in building high-performance web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-white antialiased min-h-screen flex flex-col`}
      >
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}