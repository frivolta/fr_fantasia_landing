import { FadeIn } from "@/app/components/Animations/fadeIn";
import MainButton from "@/app/components/Button/MainButton";
import Image from "next/image";
import { forwardRef } from "react";
import styles from "./Head.module.scss";
import { BUTTON_URLS } from "@/consts/urls";
import {TEXTS} from "@/consts/texts";
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
            {TEXTS.headingText}
            <span className="text-primaryDark">
              {TEXTS.headingSpan}
            </span>
          </h1>
        </div>
      </FadeIn>
      <div className="pt-8 justify-start flex lg:hidden">
        <FadeIn>
          <div className="flex gap-4" ref={ref}>
            <MainButton
              text={BUTTON_URLS.APP_STORE.label}
              iconUrl={BUTTON_URLS.APP_STORE.icon}
              href={BUTTON_URLS.APP_STORE.url}
            />
            <MainButton
              text={BUTTON_URLS.NERD_INSIGHTS.label}
              iconUrl={BUTTON_URLS.NERD_INSIGHTS.icon}
              href={BUTTON_URLS.NERD_INSIGHTS.url}
            />
          </div>
        </FadeIn>
      </div>
    </div>
  );
});
Head.displayName = "Head";
export default Head;
