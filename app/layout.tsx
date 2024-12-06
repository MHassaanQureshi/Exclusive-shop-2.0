import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/header";
import { CartProvider } from "./context/cartContext";
import Buttonup from "./components/Buttonup/Buttonup";
import Footer from "./components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
      <head>
        {/* Meta tags for SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Your Website Title</title>
        <meta name="description" content="Your website description here" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className="min-h-screen flex flex-col antialiased"
      >
        <CartProvider>
          <Header />
          <Navbar />
          <main className="flex-grow">{children}</main> {/* Ensures the main content takes up the remaining space */}
          <Buttonup />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

