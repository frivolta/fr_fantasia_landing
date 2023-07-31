import "./globals.css";
import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "../../styles/global.scss";
import LogoFr from "./components/LogoFR";
import MainButton from "./components/Button/MainButton";
const inter = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-between p-8">
          <LogoFr />
          <div>
            <MainButton text="App Store" iconUrl="apple.svg" />
          </div>
        </header>
        <section className="">{children}</section>
      </body>
    </html>
  );
}
