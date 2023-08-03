"use client";
import { useRotateAnimation } from "@/hooks/animations/useRotateAnimation";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const ImageBlock = () => {
  const ref = useRef(null);
  const { rotateAnimationLength, rotateAnimationRef } = useRotateAnimation();
  return (
    <div>
      <h2 className="text-primary" ref={rotateAnimationRef}>
        Employing Flutter, the frontend embodies responsiveness and visual
        appeal.
      </h2>
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
