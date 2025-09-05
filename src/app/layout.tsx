import type { Metadata } from "next";
// This line imports all the Tailwind CSS styles
import "./globals.css";

export const metadata: Metadata = {
  title: "Inventory App",
  description: "A complete inventory management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* The bg-slate-900 class will now be applied from your stylesheet */}
      <body className="bg-slate-900">{children}</body>
    </html>
  );
}