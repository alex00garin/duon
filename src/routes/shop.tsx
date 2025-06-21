import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { Section } from "@/components/Section";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { toast } from "sonner";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/shop",
  component: Shop,
});

function Shop() {
  const handleProductInfo = (id: number) => {
    console.log(`Show info for product ${id}`);
  };

  const handleProductFavorite = (id: number) => {
    console.log(`Toggle favorite for product ${id}`);
    toast.success(`Added product ${id} to favorites`);
  };

  const handleProductAddToCart = (id: number) => {
    console.log(`Add product ${id} to cart`);
    toast.success(`Added product ${id} to cart`);
  };

  return (
    <Section
      title="Shop"
      description="Browse our collection of products and services."
      animated={true}
    >
      <ProductGrid
        onProductInfo={handleProductInfo}
        onProductFavorite={handleProductFavorite}
        onProductAddToCart={handleProductAddToCart}
      />
    </Section>
  );
}
