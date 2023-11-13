import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/molecules/navbar.components";
import Footer from "@/components/molecules/footer.component";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AnimeKu Apps",
  description: "Website AnimeKu Indonesia",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-main-dark text-main-light`}>
        <Navbar />
        <div className="mt-[110px] md:mt-[68px] px-2 md:px-40 py-4">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
