import type { Metadata } from "next";
import { Concert_One } from "next/font/google";
import "./globals.css";

const concertOne = Concert_One({
  weight: "400",
  variable: "--font-concert-one",
  subsets: ["latin"],
});

// const nunitoSans = Nunito_Sans({
//   variable: "--font-nunito-sans",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "ThesngNguyeenx",
  description: "Just me and mine portfolio xD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${concertOne.className} antialiased h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
