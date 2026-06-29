import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SalesOps | Sales operations workspace",
  description:
    "A sales operations workspace for managing prospecting, follow-up, pipeline, and revenue visibility across every channel.",
  icons: {
    icon: "/salesops-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
