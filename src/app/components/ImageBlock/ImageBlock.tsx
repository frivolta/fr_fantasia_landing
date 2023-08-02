"use client";
import { useRotateAnimation } from "@/hooks/animations/useRotateAnimation";
import { motion } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "../Animations/fadeIn";

export const ImageBlock = () => {
  const { rotateAnimationLength, rotateAnimationRef } = useRotateAnimation();
  return (
    <div>
      <FadeIn>
        <h2 className="text-primary" ref={rotateAnimationRef}>
          Employing Flutter, the frontend embodies responsiveness and visual
          appeal.
        </h2>
      </FadeIn>
      <div className="mt-12">
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
