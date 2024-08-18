import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

// export const dynamic = "force-dynamic";
// export const fetchCache = "force-no-store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MLN Office - Full Stack Web Developer",
  description: "MLN Office provides professional web development services with over 10 years of experience.",
  openGraph: {
    title: "MLN Office - Full Stack Web Developer",
    description: "MLN Office provides professional web development services with over 10 years of experience.",
    url: "https://mlnoffice.com/",
    images: [
      {
        url: "/images/mlnoffice_cover.webp",
        width: 800,
        height: 600,
        alt: "MLN Office Hero Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MLN Office - Full Stack Web Developer",
    description: "MLN Office provides professional web development services with over 10 years of experience.",
    images: ["/images/mlnoffice_cover.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
