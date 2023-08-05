import Image from "next/image";
import styles from "./Mockup.module.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { RefObject, forwardRef, useRef } from "react";

export const Mockup = forwardRef<HTMLDivElement, {}>((_, containerRef) => {
  const { scrollYProgress } = useScroll({
    target: containerRef as any as RefObject<HTMLElement>,
    offset: [0, 1],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const t = useTransform(scaleX, [0, 1], [0.8, 1]);
  return (
    <div className={styles.Mockup}>
      <motion.div
        style={{ scale: t }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <div className={styles.Mockup__Container}>
          <Image
            className={styles.Mockup__Image}
            src={"/main_phone.png"}
            width={2000}
            height={2000}
            alt="Filippo Rivolta Fantasia Mockup"
          />
        </div>
      </motion.div>
    </div>
  );
});
