import { useScroll } from "framer-motion";

export const useStickyAnimation = (ref: React.RefObject<HTMLDivElement>) => {
  useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
};
