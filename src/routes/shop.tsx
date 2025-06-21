import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { ShopHeader } from "@/components/shop/ShopHeader";
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
    <div className="flex flex-col items-center mt-10 text-left">
      <div className="max-w-7xl mx-auto w-full">
        <ShopHeader />
        <ProductGrid
          onProductInfo={handleProductInfo}
          onProductFavorite={handleProductFavorite}
          onProductAddToCart={handleProductAddToCart}
        />
      </div>
    </div>
  );
}
