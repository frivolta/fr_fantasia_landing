"use client";
import Head from "@/app/widgets/home/Head/Head";
import MainPhone from "./widgets/home/MainPhone/MainPhone";
import { ImageBlock } from "./components/ImageBlock/ImageBlock";
import { PlainTextBlock } from "./components/PlainTextBlock/PlainTextBlock";
import { useRef } from "react";
import { FadeIn } from "@/app/components/Animations/fadeIn";
import MainButton from "@/app/components/Button/MainButton";
import Image from "next/image";
import {
  useScroll,
  useTransform,
  useViewportScroll,
  useSpring,
  motion,
  easeIn,
  mirrorEasing,
} from "framer-motion";
export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const scaleTransform = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const scale = useSpring(scaleTransform, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  //const pathTransform = useTransform(scrollYProgress, [0, 1], [0, 10]);
  /*const pathLength = useSpring(pathTransform, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });*/
  return (
    <main className="flex flex-col justify-between">
      <div className="pt-32">
        <FadeIn>
          <div className="pb-8">
            <Image
              src="fantasia_royal.svg"
              alt="Filippo Rivolta Fantasia Taylored Dreams"
              width={194}
              height={57}
            />
          </div>
        </FadeIn>
        <FadeIn>
          <div>
            <h1 className="text-primary">
              From Blueprint to Build.{" "}
              <span className="text-primaryDark">
                The Evolution and lifecycle of a Creative Endeavor.
              </span>
            </h1>
          </div>
        </FadeIn>
        <div className="pt-8 flex justify-start" ref={ref}>
          <div className="flex justify-start">
            <FadeIn>
              <MainButton text="App Store" iconUrl="apple.svg" />
            </FadeIn>
          </div>
        </div>
      </div>
      <motion.div style={{ scale }}>
        <div className="relative block pt-12">
          <MainPhone />
        </div>
      </motion.div>
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
      <section className="grid grid-cols-1 mt-24">
        <div className="imagesection">
          <Image
            src="/main_phone.png"
            width={313}
            height={568}
            style={{ width: "100%", height: "auto" }}
            alt="Filippo Rivolta Fantasia Iphone"
          />
        </div>
        <div className="text-section mt-12">
          <Head />
        </div>
      </section>
    </main>
  );
}
