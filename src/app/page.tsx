"use client";
import Head from "@/app/widgets/home/Head/Head";
import MainPhone from "./widgets/home/MainPhone/MainPhone";
import { ImageBlock } from "./components/ImageBlock/ImageBlock";
import { PlainTextBlock } from "./components/PlainTextBlock/PlainTextBlock";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMainPhoneAnimation } from "@/hooks/animations/useMainPhoneAnimation";
import { FadeIn } from "./components/Animations/fadeIn";
import { StickyImageBlock } from "./widgets/home/StickyImageBox/StickyImageBlock";
import { Mockup } from "./components/Mockup/Mockup";
import { useRef } from "react";
import { Spacing } from "./components/Spacing/Spacing";
export default function Home() {
  const initiMockupAnimationRef = useRef<HTMLDivElement>(null);

  return (
    <main
      className="flex flex-col justify-between"
      ref={initiMockupAnimationRef}
    >
      {/*Header Section*/}
      <div className="pt-32 lg:pt-24">
        <Head />
      </div>
      {/*Main Mockup Section*/}
      <div>
        <Mockup ref={initiMockupAnimationRef} />
      </div>
      {/*Sticky Section*/}
      <div className="mt-8">
        <StickyImageBlock />
      </div>
      <div className="mt-8 md:mt-32">
        <StickyImageBlock alt />
      </div>
      <div className="mt-8 md:mt-32">
        <StickyImageBlock />
      </div>
      {/*Secondary Title Section*/}
      <div className="mt-24">
        <Spacing>
          <div className="textblock text-primary lg:mb-20">
            <h1 className="text-primary">
              From Blueprint to Build.{" "}
              <span className="text-primaryDark">
                The Evolution and lifecycle of a Creative Endeavor.
              </span>
            </h1>
          </div>
          {/*Plain Text Blocks Section*/}
          <PlainTextBlock />
          <PlainTextBlock />
          <PlainTextBlock />
          <PlainTextBlock />
          <PlainTextBlock />
        </Spacing>
      </div>
      {/*
      <div className="mt-24">
        <ImageBlock />
      </div>
      <div className="mt-24">
        <ImageBlock />
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
      </section>*/}
    </main>
  );
}
