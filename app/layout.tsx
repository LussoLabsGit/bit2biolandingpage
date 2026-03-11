import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bit2Bio",
  description: "Precision nutrition built from your biology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}