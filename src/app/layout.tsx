import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Pixy",
  description: "Image gallery application ",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative mx-auto">
          {children}
          {modal}
        </main>

      </body>
    </html>
  );
}
