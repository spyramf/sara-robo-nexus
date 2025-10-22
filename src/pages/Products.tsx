import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductHero from "@/components/products/ProductHero";
import ProductCategory from "@/components/products/ProductCategory";
import DesignTools from "@/components/products/DesignTools";
import { productCategories } from "@/data/productData";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <ProductHero
        title={
          <>
            Our <span className="text-primary">Products</span>
          </>
        }
        subtitle="Comprehensive range of automation products designed to enhance manufacturing efficiency, precision, and reliability across diverse industrial applications."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {productCategories.map((category, categoryIndex) => (
              <ProductCategory
                key={categoryIndex}
                title={category.title}
                icon={category.icon}
                products={category.products}
              />
            ))}

            <DesignTools />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
