"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import styles from "./StickyImageBlock.module.scss";
import { useStickyAnimation } from "./hooks/useStickyAanimation";
import MainButton from "@/app/components/Button/MainButton";
import classNames from "classnames";
import { BUTTON_URLS } from "@/consts/urls";
import Image from "next/image";

interface StickyImageBlockProps {
  alt?: boolean;
  text: string;
  imgUrl: string;
}

export const StickyImageBlock = ({
  alt,
  text,
  imgUrl,
}: StickyImageBlockProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useStickyAnimation(ref);
  const className = classNames(styles.StickyImageBlock, {
    [styles.StickyImageBlock__Alt]: alt,
  });
  const textBlock = () => (
    <motion.div>
      <div className="sticky overflow-hidden top-4">
        <h2 className="text-primary">{text}</h2>
        <div className="flex mt-10 items-start mx-auto gap-4">
          <MainButton
            text={BUTTON_URLS.APP_STORE.label}
            iconUrl={BUTTON_URLS.APP_STORE.iconAlt}
            href={BUTTON_URLS.APP_STORE.url}
            alt
          />
          <MainButton
            text={BUTTON_URLS.NERD_INSIGHTS.label}
            iconUrl={BUTTON_URLS.NERD_INSIGHTS.iconAlt}
            href={BUTTON_URLS.NERD_INSIGHTS.url}
            alt
          />
        </div>
      </div>
    </motion.div>
  );
  const imageBlock = () => (
    <div className={styles.StickyImageBlock__ImageContainer}>
      <Image
        src={imgUrl}
        height={854}
        className={styles.StickyImageBlock__Image}
        width={421}
        alt="Filippo Rivolta Employing Flutter"
      />
    </div>
  );
  const content = () =>
    alt ? [imageBlock(), textBlock()] : [textBlock(), imageBlock()];
  return (
    <section ref={ref} className={className}>
      {content()}
    </section>
  );
};
