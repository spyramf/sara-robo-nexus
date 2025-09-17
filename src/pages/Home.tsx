import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Settings, Wrench, BarChart3, Factory, Award, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <div className="mb-8">
              <div className="inline-block px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-6">
                Precision Manufacturing
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Engineering Excellence in
              <span className="block text-secondary">Robotics & Automation</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/80 max-w-3xl">
              Specializing in precision robotics, automation services, and custom special purpose machine manufacturing. 
              Delivering innovative solutions for your industrial automation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg" asChild>
                <Link to="/products">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg" asChild>
                <Link to="/services">View Our Work</Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 max-w-md">
              <div>
                <div className="text-3xl font-bold text-primary">6+ Years</div>
                <div className="text-white/70">Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-white/70">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              We provide comprehensive manufacturing solutions with precision engineering and innovative design approaches for industrial applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Design & Manufacturing */}
            <div className="group">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Factory className="w-24 h-24 text-primary" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Design & Manufacturing</h3>
                  <p className="text-muted-foreground mb-6">
                    Advanced CAD design and state-of-the-art manufacturing using CNC, VMC, welding fixtures, 
                    and precision machining for consistent quality and efficient production processes.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      SolidWorks, Catia, AutoCAD design
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      CNC, VMC precision manufacturing
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Welding fixtures & manipulators
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Sheet metal fabrication
                    </li>
                  </ul>
                  <Button variant="outline" asChild>
                    <Link to="/services">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Automation & Testing */}
            <div className="group">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-64 bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                  <Settings className="w-24 h-24 text-secondary" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Automation & Testing</h3>
                  <p className="text-muted-foreground mb-6">
                    Custom automation solutions and special purpose machinery designed for specific manufacturing 
                    requirements, process visualization, and testing systems.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      Robotic welding cells & fixtures
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      Gear box EOL testing machines
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      Leak test machines
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      Process automation flow testing
                    </li>
                  </ul>
                  <Button variant="outline" asChild>
                    <Link to="/products">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg" asChild>
              <Link to="/contact">Request Custom Solution</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Engineering Solutions Since 2018
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Founded in 2018 and based in Pune, SARA Robotics & Automation Services has established itself 
                as a trusted partner in industrial automation. Our 4000 sq. ft. facility houses advanced VMC machines 
                and a team of 20+ skilled professionals.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our team combines traditional engineering expertise with modern technology to deliver innovative solutions 
                that meet the unique challenges of today's manufacturing environment.
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
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Partner with SARA Robotics & Automation Services
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Ready to transform your manufacturing processes with cutting-edge automation solutions? 
            Let's discuss your project requirements and create innovative solutions together.
          </p>
          <Button variant="secondary" size="lg" className="text-lg px-8 py-4" asChild>
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;