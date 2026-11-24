import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olivia's 25th Birthday Quest // Codédex Edition",
  description: "A retro pixel-art 25th birthday quest for Olivia with interactive mini-games and memories.",
  icons: {
    icon: "/illustrations/hero-couple.jpg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFFDF5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-canvas text-brandBlack antialiased selection:bg-codedex-yellow selection:text-brandBlack overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
