import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Image Gallery",
  description: "Imag galley application ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-7xl mx-auto mt-12">
          {children}
        </main>

      </body>
    </html>
  );
}
