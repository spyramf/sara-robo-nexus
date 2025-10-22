import ProductCard from "./ProductCard";

interface Product {
  title: string;
  description: string;
  image: string;
}

interface ProductCategoryProps {
  title: string;
  icon: string;
  products: Product[];
}

const ProductCategory = ({ title, icon, products }: ProductCategoryProps) => {
  return (
    <div className="fade-in">
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">{icon}</div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, productIndex) => (
          <ProductCard
            key={productIndex}
            title={product.title}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
