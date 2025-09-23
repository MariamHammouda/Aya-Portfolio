import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfitFont = Outfit({
  subsets: ["latin"],
  weight: ["400","500","600","700"]
});

const ovoFont = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});


export const metadata = {
  title: "Aya Protfolio",
  description: "Personal portfolio of Aya — showcasing expertise in content creation, social media marketing, copywriting, photography, and video production.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfitFont.className} ${ovoFont.className} antialiased leading-8
        overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
