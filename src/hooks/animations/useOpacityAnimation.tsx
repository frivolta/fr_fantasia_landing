import { useRef } from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";

export const useOpacityAnimation = () => {
  const opacityAnimationRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: opacityAnimationRef,
  });
  const opacityTransform = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacityAnimationLength = useSpring(opacityTransform, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001,
  });

  return { opacityAnimationLength, opacityAnimationRef };
};
