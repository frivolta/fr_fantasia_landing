"use client";
import { useAnimation, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export interface FadeInProps {
  children: any;
}
const fadeInVariants = {
  v: { opacity: 1 },
  h: { opacity: 0 },
};

const transitionStyle = {
  duration: 0.8,
};
export const FadeIn = ({ children }: FadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      animate={isInView ? "v" : "h"}
      variants={fadeInVariants}
      transition={transitionStyle}
    >
      {children}
    </motion.div>
  );
};
