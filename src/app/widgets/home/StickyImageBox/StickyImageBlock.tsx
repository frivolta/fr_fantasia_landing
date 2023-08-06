"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import styles from "./StickyImageBlock.module.scss";
import { useStickyAnimation } from "./hooks/useStickyAanimation";
import MainButton from "@/app/components/Button/MainButton";
import classNames from "classnames";

interface StickyImageBlockProps {
  alt?: boolean;
}

export const StickyImageBlock = ({ alt }: StickyImageBlockProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useStickyAnimation(ref);
  const className = classNames(styles.StickyImageBlock, {
    [styles.StickyImageBlock__Alt]: alt,
  });
  const textBlock = () => (
    <motion.div>
      <div className="sticky overflow-hidden top-4">
        <h2 className="text-primary">
          Should be sticky, the frontend embodies responsiveness and visual
          appeal.
        </h2>
        <div className="flex mt-10 items-start mx-auto gap-4">
          <MainButton alt text="App Store" iconUrl="appleAlt.svg" />
          <MainButton
            alt
            text="Read Insights"
            iconUrl="terminal-outlineAlt.svg"
          />
        </div>
      </div>
    </motion.div>
  );
  const imageBlock = () => (
    <div>
      <img
        src="/phone.png"
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
