"use client";
import { useRotateAnimation } from "@/hooks/animations/useRotateAnimation";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

// a framer motion animation so that the h2 sticks to the top of the screen while the image scrolls
export const ImageBlock = () => {
  const ref = useRef(null);
  const { rotateAnimationLength, rotateAnimationRef } = useRotateAnimation();

  return (
    <div className="lg:flex lg:flex-row lg:gap-4">
      <h2 className="text-primary sticky" ref={rotateAnimationRef}>
        Employing Flutter, the frontend embodies responsiveness and visual
        appeal.
      </h2>
      <div className="mt-12" ref={ref}>
        <motion.div style={{ rotate: rotateAnimationLength }}>
          <Image
            src="/phone.png"
            height={854}
            width={421}
            alt="Filippo Rivolta Employing Flutter"
          />
        </motion.div>
      </div>
    </div>
  );
};
