import type { Metadata } from "next";
import localFont from "next/font/local";
// import "./globals.css";
import "./todomvc-app.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "TodoMVC on Next.js 2024",
  description: "is an implementation of TodoMVC using NextJS v15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <section className="todoapp">{children}</section>

        <footer className="info">
          <p>Double-click to edit a todo</p>
          <p>Created by the TodoMVC Team</p>
          <p>
            Part of <a href="http://todomvc.com">TodoMVC</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
