import Head from "@/app/widgets/home/Head/Head";
import MainPhone from "./widgets/home/MainPhone/MainPhone";
import { ImageBlock } from "./components/ImageBlock/ImageBlock";
import { PlainTextBlock } from "./components/PlainTextBlock/PlainTextBlock";

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <Head />
      <div className="relative block">
        <MainPhone />
      </div>
      <div className="mt-8">
        <ImageBlock />
      </div>
      <div className="mt-24">
        <ImageBlock />
      </div>
      <div className="mt-24">
        <ImageBlock />
      </div>
      <div className="mt-24">
        <div className="textblock text-primary">
          <h1 className="text-primary">
            From Blueprint to Build.{" "}
            <span className="text-primaryDark">
              The Evolution and lifecycle of a Creative Endeavor.
            </span>
          </h1>
        </div>
        <PlainTextBlock />
        <PlainTextBlock />
        <PlainTextBlock />
        <PlainTextBlock />
        <PlainTextBlock />
      </div>
      <section className="">

      </section>
    </main>
  );
}
