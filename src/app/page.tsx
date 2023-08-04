"use client";
import Head from "@/app/widgets/home/Head/Head";
import MainPhone from "./widgets/home/MainPhone/MainPhone";
import { ImageBlock } from "./components/ImageBlock/ImageBlock";
import { PlainTextBlock } from "./components/PlainTextBlock/PlainTextBlock";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMainPhoneAnimation } from "@/hooks/animations/useMainPhoneAnimation";
import { FadeIn } from "./components/Animations/fadeIn";
export default function Home() {
  const { mainPhoneAnimationRef, mainPhoneAnimationScale } =
    useMainPhoneAnimation();

  return (
    <main className="flex flex-col justify-between">
      <div className="pt-32 lg:pt-24">
        <Head ref={mainPhoneAnimationRef} />
      </div>
      <motion.div style={{ scale: mainPhoneAnimationScale }}>
        <div className="relative block pt-12 lg:px-12">
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
        <div className="textblock text-primary lg:mb-20">
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
          <FadeIn>
            <Image
              src="/main_phone.png"
              width={313}
              height={568}
              style={{ width: "100%", height: "auto" }}
              alt="Filippo Rivolta Fantasia Iphone"
            />
          </FadeIn>
        </div>
        <div className="text-section mt-12">
          <Head />
        </div>
      </section>
    </main>
  );
}
