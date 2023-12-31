import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { Toaster } from 'sonner';

 

const fontCanela = localFont({
  src: [
    {
      path: "../../public/fonts/Canela-Light-Trial.otf",
    },
  ],
  variable: '--font-canela',
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "800", "900"],
});


export const metadata: Metadata = {
  title: "Osmel Faure | My Portfolio",
  description: "Web portfolio",
  icons: "http://localhost:3000/favicon-50.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body  className= {`${poppins.className} ${fontCanela.variable} bg-gradient-to-r from-white to-slate-400 `}>{children}
      <Toaster richColors/>
      </body>
    </html>
  );
}
