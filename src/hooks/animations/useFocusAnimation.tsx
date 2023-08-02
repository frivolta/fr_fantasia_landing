import { useRef } from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";

export const useFocusAnimation = () => {
  const focusAnimationRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: focusAnimationRef,
  });
  const opacityTransform = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const opacityAnimationLength = useSpring(opacityTransform, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001,
  });

  return { opacityAnimationLength, focusAnimationRef };
};
