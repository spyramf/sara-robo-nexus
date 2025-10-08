import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Wrench, BarChart3, ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ShineBorder } from "@/components/ui/shine-border";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "Design Services",
      description: "Comprehensive design solutions using industry-leading CAD software and engineering expertise.",
      image: "/placeholder.svg",
      features: [
        "SolidWorks 3D modeling and simulation",
        "Catia advanced surface modeling",
        "AutoCAD technical drawings",
        "Inventor parametric design",
        "SolidEdge synchronous technology",
        "Design optimization and validation"
      ],
    },
    {
      icon: Wrench,
      title: "Manufacturing Services",
      description: "State-of-the-art manufacturing capabilities with precision machining and fabrication expertise.",
      image: "/placeholder.svg",
      features: [
        "CNC machining with multi-axis capability",
        "VMC operations for complex geometries",
        "Sheet metal fabrication and forming",
        "Precision machining and finishing",
        "Grinding operations for tight tolerances",
        "Turning, drilling, and lathe operations"
      ],
    },
    {
      icon: BarChart3,
      title: "Simulation Services",
      description: "Advanced simulation and analysis services for process optimization and validation.",
      image: "/placeholder.svg",
      features: [
        "Process visualization and modeling",
        "Automation flow testing and optimization",
        "Finite element analysis (FEA)",
        "Computational fluid dynamics (CFD)",
        "Thermal analysis and validation",
        "Virtual commissioning and testing"
      ],
    },
  ];

  const additionalServices = [
    {
      title: "Quality Assurance",
      description: "Comprehensive quality control and testing services to ensure product excellence.",
    },
    {
      title: "Installation & Commissioning",
      description: "Professional installation and commissioning services for seamless integration.",
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing maintenance and technical support to maximize equipment uptime.",
    },
    {
      title: "Training Programs",
      description: "Comprehensive training programs for operators and maintenance personnel.",
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
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive automation services from concept to completion, delivered by 
              experienced engineers and skilled technicians committed to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`slide-up ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-8">
                      {service.description}
                    </p>
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" size="lg" className="group">
                      Learn More About This Service
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  <div className={`slide-up ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-lg shadow-sara w-full h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support services to ensure the success of your automation projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <ShineBorder
                key={index}
                borderRadius={12}
                borderWidth={2}
                duration={15}
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                className="w-full min-w-0 h-full p-0 bg-transparent dark:bg-transparent"
              >
                <Card className="h-full card-gradient shadow-sara scale-on-hover border-0">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ShineBorder>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to delivering exceptional automation solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Understanding your requirements and challenges" },
              { step: "02", title: "Design", description: "Creating detailed designs and specifications" },
              { step: "03", title: "Manufacturing", description: "Precision manufacturing and quality control" },
              { step: "04", title: "Implementation", description: "Installation, testing, and commissioning" },
            ].map((item, index) => (
              <div key={index} className="text-center slide-up">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Let's discuss your automation needs and create a customized solution 
            that drives efficiency and growth for your business.
          </p>
          <Button variant="cta" size="lg" className="text-lg px-8 py-4">
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;