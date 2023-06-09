import { Inter } from "next/font/google";

import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <nav className="max-w-md mx-auto mt-12">
          <ul className="flex justify-center gap-4">
            <li>
              <a href="/" className="underline underline-offset-2">
                Home
              </a>
            </li>
            <li>
              <a href="/results" className="underline underline-offset-2">
                Results
              </a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
