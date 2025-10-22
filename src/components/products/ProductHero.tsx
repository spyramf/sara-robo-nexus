import { ReactNode } from "react";

interface ProductHeroProps {
  title: ReactNode;
  subtitle: string;
}

const ProductHero = ({ title, subtitle }: ProductHeroProps) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
