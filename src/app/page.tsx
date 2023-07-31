import Head from "@/app/widgets/home/head";
import MainButton from "@/app/components/Button/MainButton";
import LogoFr from "./components/LogoFR";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-32">
      <header className="flex justify-between align-middle">
        <LogoFr />
        <div>
          <MainButton text="App Store" iconUrl="apple.svg" />
        </div>
      </header>
      <Head />
    </main>
  );
}
