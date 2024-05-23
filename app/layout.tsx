import type { Metadata } from "next";
import { notoSansJP } from "@/lib/fonts";
import favicon from "@/public/favicon.png";
import "@/app/globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Tenui",
  description: 'next generation Saas "Tenui"',
  icons: {
    icon: favicon.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className={notoSansJP.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
