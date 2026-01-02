"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLenis } from "@/components/LenisProvider";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenis = useLenis();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          lenis?.scrollTo(0, { immediate: true });
        }}
      >
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
