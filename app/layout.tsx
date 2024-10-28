import type { Metadata } from "next";
import { Inter, Sacramento, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] });
const scp = Source_Code_Pro({ subsets: ["latin"] });
const sacramento = Sacramento({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={scp.className}>{children}
        <Toaster />
      </body>
    </html>
  );
}