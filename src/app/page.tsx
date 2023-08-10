"use client";
import Head from "@/app/widgets/home/Head/Head";
import { PlainTextBlock } from "./components/PlainTextBlock/PlainTextBlock";
import { StickyImageBlock } from "./widgets/home/StickyImageBox/StickyImageBlock";
import { Mockup } from "./components/Mockup/Mockup";
import { useRef } from "react";
import { Spacing } from "./components/Spacing/Spacing";
import { Backgrounds } from "./components/Backgrounds/Backgrounds";
import { TEXTS } from "@/consts/texts";
export default function Home() {
  const initiMockupAnimationRef = useRef<HTMLDivElement>(null);

  return (
    <main
      className="flex flex-col justify-between"
      ref={initiMockupAnimationRef}
    >
      <Backgrounds />
      <div className="z-50">
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
          <StickyImageBlock
            imgUrl="/fantasia_story.png"
            text={TEXTS.imageHeadlines[0]}
          />
        </div>
        <div className="mt-8 md:mt-32">
          <StickyImageBlock
            imgUrl="/fantasia_general.png"
            alt
            text={TEXTS.imageHeadlines[1]}
          />
        </div>
        <div className="mt-8 md:mt-32">
          <StickyImageBlock
            imgUrl="/fantasia_create.png"
            text={TEXTS.imageHeadlines[2]}
          />
        </div>
        {/*Secondary Title Section*/}
        <div className="mt-24">
          <Spacing>
            <div className="textblock text-primary lg:mb-20">
              <h1 className="text-primary">
                {TEXTS.scrollingTextHeader}{" "}
                <span className="text-primaryDark">
                  {TEXTS.scrollingTextHeaderSpan}
                </span>
              </h1>
            </div>
            {/*Plain Text Blocks Section*/}
            {TEXTS.scrollingTexts.map((text, index) => (
              <PlainTextBlock key={index} text={text} />
            ))}
          </Spacing>
        </div>
      </div>
    </main>
  );
}
