import { motion } from "framer-motion";
import { BlurIn } from "../blur-in";

export function ShopHeader() {
  return (
    <>
      <motion.h1
        className="text-4xl sm:text-5xl font-bold uppercase tracking-tight mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Shop
      </motion.h1>
      <BlurIn>
        <p className="text-lg text-muted-foreground mb-4">
          Browse our collection of products and services.
        </p>
      </BlurIn>
    </>
  );
}
