"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export const StickyImageBlock = () => {
  const ref = useRef(null);
  useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <section ref={ref} className="flex">
      <motion.div>
        <h2 className="text-primary sticky overflow-hidden top-4">
          Should be sticky, the frontend embodies responsiveness and visual
          appeal.
        </h2>
      </motion.div>
      <div>
        <img
          src="/phone.png"
          height={854}
          width={421}
          alt="Filippo Rivolta Employing Flutter"
        />
      </div>
    </section>
  );
};
