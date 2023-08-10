import { useFocusAnimation } from "@/hooks/animations/useFocusAnimation";
import { motion } from "framer-motion";

export const PlainTextBlock = ({text}:{text:string}) => {
  const { focusAnimationRef, opacityAnimationLength } = useFocusAnimation();
  return (
    <motion.div style={{ opacity: opacityAnimationLength }}>
      <div className="py-12 lg:py-16">
        <h2 className="text-primary" ref={focusAnimationRef}>
          {text}
        </h2>
      </div>
    </motion.div>
  );
};
