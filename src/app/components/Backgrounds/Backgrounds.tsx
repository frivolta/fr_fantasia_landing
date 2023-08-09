import { useScroll, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion";
export const Backgrounds = () => {
  const { scrollYProgress } = useScroll();
  const s = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const t = useTransform(s, [0, 1], [1, 0]);

  return (
    <motion.div style={{ opacity: t }}>
      <div className="radial-background-contrast" />
      <div className="radial-background-colorful" />
    </motion.div>
  );
};
