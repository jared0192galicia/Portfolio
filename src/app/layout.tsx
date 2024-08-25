import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jared Galicia",
  description:
    "Portafolio de evidencias web. Contacto: jared0192galicia@gmail.com",
  icons: {
    icon: "icon/bun.png", // Ruta al archivo del favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
