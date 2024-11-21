import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import StoreProvider from "@/stores/StoreProvider";

const IntegralCFBold = localFont({
  src: "./fonts/Integral-CF-Regular.woff",
  variable: "--font-integral-cf-regular",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "E-com",
  description: "e-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${IntegralCFBold.variable} antialiased`}
      >
        <AntdRegistry>
          <StoreProvider>
            {children}
          </StoreProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
