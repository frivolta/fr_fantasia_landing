import { FadeIn } from "@/app/components/Animations/fadeIn";
import MainButton from "@/app/components/Button/MainButton";
import Image from "next/image";
import { forwardRef } from "react";
import styles from "./Head.module.scss";
const Head = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className={styles.Head}>
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
      <div className="pt-8 justify-start flex lg:hidden">
        <div className="flex justify-start" ref={ref}>
          <FadeIn>
            <MainButton text="App Store" iconUrl="apple.svg" />
          </FadeIn>
        </div>
      </div>
    </div>
  );
});
Head.displayName = "Head";
export default Head;
