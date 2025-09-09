import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Wrench, BarChart3, CheckCircle, Users, Building2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  const services = [
    {
      icon: Settings,
      title: "Design",
      description: "Advanced CAD design using SolidWorks, Catia, AutoCAD, and Inventor for precision engineering solutions.",
    },
    {
      icon: Wrench,
      title: "Manufacturing",
      description: "State-of-the-art CNC, VMC, sheet metal fabrication, machining, and precision manufacturing services.",
    },
    {
      icon: BarChart3,
      title: "Simulations",
      description: "Process visualization and automation flow testing to optimize manufacturing and assembly processes.",
    },
  ];

  const clientLogos = [
    "Client 1", "Client 2", "Client 3", "Client 4", "Client 5", "Client 6"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative hero-gradient text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Innovating Automation 
              <span className="block text-secondary">Since 2018</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Leading provider of robotics and automation services, specializing in CNC, VMC, 
              welding fixtures, and advanced manufacturing solutions.
            </p>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/products">Explore Our Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Intro Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-primary">SARA Robotics</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2018 and based in Pune, SARA Robotics & Automation Services has 
                established itself as a trusted partner in industrial automation. Our 4000 sq. ft. 
                facility houses advanced VMC machines and a team of 20+ skilled professionals.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">4000</div>
                  <div className="text-muted-foreground">Sq. Ft. Facility</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">20+</div>
                  <div className="text-muted-foreground">Skilled Professionals</div>
                </div>
              </div>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Know More</Link>
              </Button>
            </div>
            <div className="slide-up">
              <img
                src="/placeholder.svg"
                alt="SARA Robotics Facility"
                className="rounded-lg shadow-sara w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Key Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive automation solutions designed to enhance your manufacturing capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="card-gradient shadow-sara scale-on-hover text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Logos Carousel */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg text-muted-foreground">
              We're proud to work with some of the most innovative companies in the industry
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {clientLogos.map((client, index) => (
              <div key={index} className="text-center p-4 border rounded-lg">
                <div className="h-12 bg-muted rounded flex items-center justify-center">
                  <span className="text-sm font-medium">{client}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner with SARA Robotics & Automation Services
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Ready to transform your manufacturing processes with cutting-edge automation solutions? 
            Let's discuss your project requirements and create innovative solutions together.
          </p>
          <Button variant="cta" size="lg" className="text-lg px-8 py-4" asChild>
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;