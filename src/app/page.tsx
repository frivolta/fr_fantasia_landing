import Head from "@/app/widgets/home/Head/Head";
import MainPhone from "./widgets/home/MainPhone/MainPhone";
import { Card } from "./components/Card/Card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <Head />
      <div className="relative block">
        <MainPhone />
      </div>
      <div className="relative block py-24">
        <div>
          <h2 className="text-primary">
            Backend developed with Golang, ensuring reliable and innovative
            functionality.
          </h2>
        </div>
        <div className="cards-container mt-12 grid grid-cols-1">
          <Card
            text="Powered by Golang,
Accelerated by Goroutines"
          />
          <Card
            text="Structural Excellence
            via SOLID Principles."
          />
          <Card
            text="Agility Unleashed with
            Microservices"
          />
          <Card
            text="Seamlessness Achieved 
            ia Docker."
          />
        </div>
      </div>
      <div>
        <h2 className="text-primary">
          Employing Flutter, the frontend embodies responsiveness and visual
          appeal.
        </h2>
        <Image
          src="/phone.png"
          height={854}
          width={421}
          alt="Filippo Rivolta Employing Flutter"
        />
      </div>
    </main>
  );
}
