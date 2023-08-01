import Head from "@/app/widgets/home/Head/Head";
import MainPhone from "./widgets/home/MainPhone/MainPhone";

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <Head />
      <div className="relative block">
        <MainPhone />
      </div>
    </main>
  );
}
