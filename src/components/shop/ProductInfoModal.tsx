import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Product } from "@/lib/shop-data";
import { useLanguage } from "@/components/language/useLanguage";

interface ProductInfoModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductInfoModal({
  product,
  isOpen,
  onClose,
}: ProductInfoModalProps) {
  const { language } = useLanguage();

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div
              className="bg-background border border-border rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Product images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="relative aspect-square">
                    <img
                      src={product.backgroundImage}
                      alt={`Background ${product.title[language]}`}
                      className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                    />
                  </div>
                  <div className="relative aspect-square">
                    <img
                      src={product.mockImage}
                      alt={product.title[language]}
                      className="w-full h-full object-cover md:rounded-r-lg"
                    />
                  </div>
                </div>

                {/* Product info */}
                <div className="p-8">
                  <div className="space-y-8">
                    {/* Header */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-bold text-foreground">
                          {product.title[language]}
                        </h2>
                      </div>
                      <p className="text-lg text-muted-foreground">
                        {product.description[language]}
                      </p>
                      <div className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                        {product.category[language]}
                      </div>
                    </div>

                    {/* Detailed description */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-foreground">
                        {language === "en" ? "Description" : "Disgrifiad"}
                      </h3>
                      <p className="text-foreground leading-relaxed">
                        {product.detailedDescription[language]}
                      </p>
                    </div>

                    {/* Specifications */}
                    {product.specifications && (
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-foreground">
                          {language === "en" ? "Specifications" : "Manylion"}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {product.specifications[language].map(
                            (spec, index) => (
                              <div
                                key={index}
                                className="flex items-center space-x-3 p-3 bg-muted rounded-lg"
                              >
                                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                                <span className="text-sm text-foreground">
                                  {spec}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}

                    {/* Action buttons */}
                    <div className="flex gap-4 pt-4 border-t border-border">
                      <button className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium">
                        {language === "en"
                          ? "Add to Cart"
                          : "Ychwanegu at y Fasged"}
                      </button>
                      <button className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium">
                        {language === "en"
                          ? "Add to Favorites"
                          : "Ychwanegu at Ffefrynnau"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
