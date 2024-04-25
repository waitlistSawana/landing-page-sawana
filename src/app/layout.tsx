import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "../components/analytics/GoogleAnalytics";
import BaiDuAnalytics from "../components/analytics/BaiDuAnalytics";
import { ThemeProvider } from "@/components/home/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing Page | Sawana",
  description: "提前配置好新建网页的模板，尤其首页的配置",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme={'light'}
          enableSystem
        >
          
          <Navbar />
          {children}
          <Footer />

          {/* 统计代码 - 开发环境不会进行数据统计 */}
          {process.env.NODE_ENV === "development" ? (
            <></>
          ) : (
            <>
              <GoogleAnalytics />
              <BaiDuAnalytics />
            </>
          )}

        </ThemeProvider>
      </body>
    </html>
  );
}
