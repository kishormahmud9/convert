import { Inter } from "next/font/google";
import "./globals.css";
import '@/assets/css/bootstrap.min.css';
import '@/assets/css/style.css';
import '@/assets/lib/animate/animate.min.css';

import Spinner from "@/components/elements/Spinner";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Digitech Agency Website",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>  <div className="container-xxl bg-white p-0">
        <Spinner />
        <Navbar />
        {children}
        <Footer />
      </div></body>
    </html>
  );
}
