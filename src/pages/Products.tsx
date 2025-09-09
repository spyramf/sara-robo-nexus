import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Products = () => {
  const products = [
    {
      title: "Gear Box EOL Testing Machine",
      description: "Advanced end-of-line testing equipment for comprehensive gear box quality assurance and performance validation.",
      image: "/placeholder.svg",
    },
    {
      title: "Leak Test Machine",
      description: "Precision leak detection systems for automotive and industrial components with high accuracy measurement capabilities.",
      image: "/placeholder.svg",
    },
    {
      title: "Robotic Welding Fixtures",
      description: "Custom-designed robotic welding fixtures for consistent, high-quality welds in automated manufacturing environments.",
      image: "/placeholder.svg",
    },
    {
      title: "Robotic Welding Cells",
      description: "Complete robotic welding solutions including programming, integration, and safety systems for efficient production.",
      image: "/placeholder.svg",
    },
    {
      title: "Welding Fixtures & Manipulators",
      description: "Precision welding fixtures and manipulators designed for optimal positioning and consistent weld quality.",
      image: "/placeholder.svg",
    },
    {
      title: "Machining Fixtures",
      description: "Custom machining fixtures designed for enhanced precision, repeatability, and efficiency in CNC operations.",
      image: "/placeholder.svg",
    },
    {
      title: "PIP Cutting Machine",
      description: "Specialized cutting equipment for precise material processing with advanced control systems and safety features.",
      image: "/placeholder.svg",
    },
    {
      title: "Loader BOOM Welding Fixture",
      description: "Heavy-duty welding fixtures specifically designed for loader boom assembly with superior strength and accuracy.",
      image: "/placeholder.svg",
    },
    {
      title: "Roll Guard Welding Fixture",
      description: "Specialized fixtures for roll guard welding applications ensuring safety compliance and structural integrity.",
      image: "/placeholder.svg",
    },
    {
      title: "Twin Torch Rotary Welding SPM",
      description: "Advanced twin torch rotary welding special purpose machine for high-speed, high-quality welding operations.",
      image: "/placeholder.svg",
    },
    {
      title: "Bearing Crimping SPM",
      description: "Precision bearing crimping special purpose machine designed for consistent, reliable bearing installation processes.",
      image: "/placeholder.svg",
    },
    {
      title: "Universal Type Vertical Welding SPM",
      description: "Versatile vertical welding special purpose machine adaptable to various welding applications and configurations.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive range of automation products designed to enhance manufacturing 
              efficiency, precision, and reliability across diverse industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="card-gradient shadow-sara scale-on-hover overflow-hidden">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg leading-tight">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed mb-4">
                    {product.description}
                  </CardDescription>
                  <Button variant="outline" size="sm" className="w-full group">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Our experienced engineering team can design and manufacture custom automation 
            products tailored to your specific requirements and operational needs.
          </p>
          <Button variant="cta" size="lg" className="text-lg px-8 py-4">
            Request Custom Quote
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;