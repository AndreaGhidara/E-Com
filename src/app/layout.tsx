import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import StoreProvider from "@/stores/StoreProvider";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import FooterContent from "@/components/FooterContent";

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
            <Banner />
            <Layout >
              <Header style={{ backgroundColor: 'white', padding: 0 }}>
                <Navbar />
              </Header>
              <Content style={{ padding: "10px 0px", backgroundColor: "white" }}>
                {children}
              </Content>
              <Footer style={{ padding: "30px 0px", }}>
                <FooterContent />
              </Footer>
            </Layout>
          </StoreProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
