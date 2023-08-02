import { useScroll, useTransform, useSpring } from "framer-motion";
import { useMemo, useRef } from "react";

export const useRotateAnimation = () => {
  const rotateAnimationRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: rotateAnimationRef,
  });
  const pathTransform = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const rotateAnimationLength = useSpring(pathTransform, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return { rotateAnimationRef, rotateAnimationLength };
};
