import { useScroll, useTransform, useSpring } from "framer-motion";
import { useMemo, useRef } from "react";

export const useMainPhoneAnimation = () => {
  const mainPhoneAnimationRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mainPhoneAnimationRef,
  });
  const scaleTransform = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const mainPhoneAnimationScale = useSpring(scaleTransform, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return { mainPhoneAnimationRef, mainPhoneAnimationScale };
};
