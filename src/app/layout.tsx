import type { Metadata } from "next";
import "./globals.css";
import { cvData } from "@/data/cv";

export const metadata: Metadata = {
  title: `${cvData.personal.name} — CV`,
  description: cvData.personal.bio,
  openGraph: {
    title: cvData.personal.name,
    description: cvData.personal.title,
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
