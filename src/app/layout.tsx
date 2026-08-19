import type { Metadata } from "next";
import { Cormorant_Garamond, Quicksand, Caveat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Happy Birthday Rameen Afzal | August 23rd 🌸",
  description: "A warm, luxury aesthetic celebration for Rameen Afzal. Leave your birthday wishes and celebrate her special day on August 23rd.",
  keywords: ["Rameen Afzal", "Birthday", "August 23", "August 23rd", "Wishes", "Celebration"],
  authors: [{ name: "With love for Rameen" }],
  openGraph: {
    title: "Happy Birthday Rameen Afzal | August 23rd",
    description: "Send your warm wishes to Rameen Afzal on her special day!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${quicksand.variable} ${caveat.variable} scroll-smooth`}
    >
      <body className="bg-[#FAF3EA] text-[#4A342A] font-sans antialiased selection:bg-[#E8D5C4] selection:text-[#4A342A]">
        {children}
      </body>
    </html>
  );
}
