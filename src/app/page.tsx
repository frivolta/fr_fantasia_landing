"use client";
import Head from "@/app/widgets/home/Head/Head";
import { PlainTextBlock } from "./components/PlainTextBlock/PlainTextBlock";
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
    </main>
  );
}
