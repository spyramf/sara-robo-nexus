import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Wrench, BarChart3, Factory, Award, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ShineBorder } from "@/components/ui/shine-border";
import { motion } from "framer-motion";
import { FeatureSteps } from "@/components/ui/feature-section";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 w-full max-w-7xl mx-auto"
        >
          <div className="max-w-4xl text-center">
            {/* <div className="mb-8">
              <div className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
                Precision Manufacturing
              </div>
            </div> */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight dark:text-white">
              Engineering Excellence in
              <span className="block text-secondary">Robotics & Automation</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 dark:text-white/80 text-foreground/80 max-w-3xl mx-auto">
              Specializing in precision robotics, automation services, and custom special purpose machine manufacturing.
              Delivering innovative solutions for your industrial automation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg" asChild>
                <Link to="/products">Get Started</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-foreground dark:text-white hover:bg-foreground hover:text-background px-8 py-4 text-lg"
                asChild
              >
                <Link to="/services">View Our Work</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
              <div>
                <div className="text-3xl font-bold text-primary">6+ Years</div>
                <div className="dark:text-white/70 text-foreground/70">Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="dark:text-white/70 text-foreground/70">Projects Delivered</div>
              </div>
            </div>
          </div>
        </motion.div>
      </AuroraBackground>

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Partner for Automation Solution</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              We specialize in innovative automation solutions including robotic welding cells, leak testing SPMs,
              machining fixtures, and process automation for industries worldwide.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg" asChild>
              <Link to="/products">Explore Our Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Specializations */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Specializations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive manufacturing solutions with precision engineering and innovative design
              approaches for industrial applications.
            </p>
          </div>

          <div className="space-y-12">
            {/* Design & Manufacturing */}
            <FeatureSteps
              features={[
                {
                  step: "Step 1",
                  title: "CAD Design Excellence",
                  content: "Advanced 3D modeling using SolidWorks, Catia, and AutoCAD for precision engineering.",
                  image:
                    "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2070&auto=format&fit=crop",
                },
                {
                  step: "Step 2",
                  title: "Precision Manufacturing",
                  content: "CNC and VMC machining with welding fixtures for consistent quality production.",
                  image:
                    "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=2070&auto=format&fit=crop",
                },
                {
                  step: "Step 3",
                  title: "Sheet Metal Fabrication",
                  content: "Complete fabrication services with welding manipulators and precision assembly.",
                  image:
                    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
                },
              ]}
              title="Design & Manufacturing"
              autoPlayInterval={4000}
              className="bg-background rounded-2xl shadow-lg"
            />

            {/* Automation & Testing */}
            <FeatureSteps
              features={[
                {
                  step: "Step 1",
                  title: "Robotic Welding Solutions",
                  content: "Custom robotic welding cells and fixtures for automated manufacturing processes.",
                  image:
                    "https://images.unsplash.com/photo-1581093458791-9d42e1bb6a46?q=80&w=2070&auto=format&fit=crop",
                },
                {
                  step: "Step 2",
                  title: "Testing Machines",
                  content: "Gear box EOL testing and leak test machines for quality assurance.",
                  image:
                    "https://images.unsplash.com/photo-1581092583537-20d51b3b4f0b?q=80&w=2070&auto=format&fit=crop",
                },
                {
                  step: "Step 3",
                  title: "Process Automation",
                  content: "Complete automation flow testing and process visualization systems.",
                  image:
                    "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=2070&auto=format&fit=crop",
                },
              ]}
              title="Automation & Testing"
              autoPlayInterval={4000}
              className="bg-background rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Key Product Categories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Product Categories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive range of automation products designed for diverse industrial applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Automation Solutions",
                icon: "🔧",
                description: "End-of-line testing, pressure decay, water dip, and helium leak testing SPMs",
                count: "4+ Products",
              },
              {
                title: "Robotic Welding Solutions",
                icon: "🤖",
                description: "Complete robotic welding cells, fixtures for chassis, drive shaft, and track assembly",
                count: "6+ Products",
              },
              {
                title: "Welding SPMs",
                icon: "⚡",
                description: "Twin torch, servo driven, horizontal, rotary, and semi-automated welding machines",
                count: "5+ Products",
              },
              {
                title: "Machining & Powertrain",
                icon: "🏭",
                description: "HMC/VMC fixtures, hydraulic press, and powered conveyor systems",
                count: "3+ Products",
              },
              {
                title: "Welding Manipulators",
                icon: "🔄",
                description: "Manual and motorized welding positioners for precise part positioning",
                count: "2+ Products",
              },
              {
                title: "Design & Engineering",
                icon: "📐",
                description: "Complete automation solutions, reverse engineering, and new product development",
                count: "6+ Services",
              },
            ].map((category, index) => (
              <ShineBorder
                key={index}
                borderRadius={12}
                borderWidth={2}
                duration={12}
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                className="w-full min-w-0 h-full p-0 bg-transparent dark:bg-transparent"
              >
                <Card className="h-full card-gradient shadow-sara scale-on-hover text-center border-0">
                  <CardHeader>
                    <div className="text-5xl mb-4">{category.icon}</div>
                    <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                    <div className="text-sm text-primary font-semibold">{category.count}</div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">{category.description}</CardDescription>
                  </CardContent>
                </Card>
              </ShineBorder>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg" asChild>
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced engineering capabilities backed by cutting-edge technology and skilled professionals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Design Capabilities */}
            <div className="bg-background rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Design Excellence</h3>
              <p className="text-muted-foreground mb-6">
                Industry-leading CAD software and engineering expertise for precision design solutions.
              </p>
              <div className="space-y-2">
                {[
                  "SolidWorks 3D modeling",
                  "CATIA advanced design",
                  "AutoCAD technical drawings",
                  "Inventor parametric design",
                  "SolidEdge synchronous technology",
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Manufacturing Capabilities */}
            <div className="bg-background rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Manufacturing Excellence</h3>
              <p className="text-muted-foreground mb-6">
                State-of-the-art manufacturing capabilities with precision machining and fabrication.
              </p>
              <div className="space-y-2">
                {[
                  "CNC multi-axis machining",
                  "VMC complex geometries",
                  "Sheet metal fabrication",
                  "Precision grinding operations",
                  "Turning, drilling & lathe work",
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Testing & Simulation */}
            <div className="bg-background rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Testing & Simulation</h3>
              <p className="text-muted-foreground mb-6">
                Advanced simulation and testing services for process optimization and validation.
              </p>
              <div className="space-y-2">
                {[
                  "Process visualization",
                  "Automation flow testing",
                  "Finite element analysis",
                  "Virtual commissioning",
                  "Quality assurance testing",
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to delivering exceptional automation solutions from concept to completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation & Analysis",
                description:
                  "Understanding your requirements, challenges, and operational needs through detailed consultation.",
                icon: "👥",
              },
              {
                step: "02",
                title: "Design & Engineering",
                description:
                  "Creating detailed 3D designs, specifications, and simulations using advanced CAD software.",
                icon: "📐",
              },
              {
                step: "03",
                title: "Manufacturing & Testing",
                description: "Precision manufacturing with quality control and comprehensive testing procedures.",
                icon: "🏭",
              },
              {
                step: "04",
                title: "Installation & Support",
                description: "Professional installation, commissioning, training, and ongoing technical support.",
                icon: "🔧",
              },
            ].map((item, index) => (
              <ShineBorder
                key={index}
                borderRadius={12}
                borderWidth={2}
                duration={14}
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                className="w-full min-w-0 h-full p-0 bg-transparent dark:bg-transparent"
              >
                <Card className="h-full card-gradient shadow-sara text-center scale-on-hover border-0">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                      {item.step}
                    </div>
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </ShineBorder>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Engineering Solutions Since 2018</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Founded in 2018 and based in Pune, SARA Robotics & Automation Services has established itself as a
                trusted partner in industrial automation. Our 4000 sq. ft. facility houses advanced VMC machines and a
                team of 20+ skilled professionals.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our team combines traditional engineering expertise with modern technology to deliver innovative
                solutions that meet the unique challenges of today's manufacturing environment.
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn About Our Journey</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-background rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-background rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-primary mb-2">4000</div>
                <div className="text-muted-foreground">Sq. Ft. Facility</div>
              </div>
              <div className="text-center p-6 bg-background rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground">Expert Engineers</div>
              </div>
              <div className="text-center p-6 bg-background rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-primary mb-2">6+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Partner with SARA Robotics & Automation Services</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Ready to transform your manufacturing processes with cutting-edge automation solutions? Let's discuss your
            project requirements and create innovative solutions together.
          </p>
          <Button variant="secondary" size="lg" className="text-lg px-8 py-4" asChild>
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Home;
