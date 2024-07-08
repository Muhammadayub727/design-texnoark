import type { Metadata } from "next";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/header/page'
import Footer from '../components/footer/page'
import { Client, HydrationProvider } from "react-hydration-provider";


export const metadata: Metadata = {
  title: "Texnoark",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F0F0F0]">
         <HydrationProvider>
            <Client>
               <Header />
               <main>{children}</main>
               <Footer />
            </Client>
         </HydrationProvider>
      </body>
  </html>
  );
}
