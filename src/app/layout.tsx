import "./globals.css";
import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "../../styles/global.scss";
import LogoFr from "./components/LogoFR";
import MainButton from "./components/Button/MainButton";
import Footer from "./components/Footer/Footer";
const inter = Inter_Tight({ subsets: ["latin"] });
import { BUTTON_URLS } from "@/consts/urls";

export const metadata: Metadata = {
  title: "Filippo Rivolta, Fantasia - Bedtime Stories",
  description:
    "Filippo Rivolta, Fantasia - Bedtime Stories, how it is made, get the wiki and explore the stack",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-center md:justify-between align-middle p-8 md:p-12 z-10">
          <LogoFr />
          <div className="hidden md:flex md:gap-4 z-50">
            <MainButton
              text={BUTTON_URLS.APP_STORE.label}
              iconUrl={BUTTON_URLS.APP_STORE.icon}
              href={BUTTON_URLS.APP_STORE.url}
            />
            <MainButton
              text={BUTTON_URLS.NERD_INSIGHTS.label}
              iconUrl={BUTTON_URLS.NERD_INSIGHTS.icon}
              href={BUTTON_URLS.NERD_INSIGHTS.url}
            />
          </div>
        </header>
        <section className="custom-container z-10">{children}</section>
        <footer className="mt-24 px-8 mb-4 z-10">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
