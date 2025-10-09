import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Target, Award, Shield, Users, Building2, Factory, Lightbulb, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const achievements = [
    { label: "Years of Excellence", value: "6+" },
    { label: "Facility Size", value: "4000+ Sq.Ft" },
    { label: "Skilled Professionals", value: "20+" },
    { label: "Happy Clients", value: "50+" },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously pushing boundaries with cutting-edge robotics and automation technologies to deliver breakthrough solutions.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Uncompromising commitment to quality in every product, service, and interaction with global-standard engineering practices.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Building trust through transparency, ethical practices, and honest communication with all stakeholders.",
    },
    {
      icon: CheckCircle2,
      title: "Customer Success",
      description: "Your success is our success. We partner with you to optimize performance and drive measurable business outcomes.",
    },
  ];

  const facilityFeatures = [
    { icon: Building2, title: "4000 Sq. Ft. Facility", description: "Modern, well-equipped manufacturing facility" },
    { icon: Users, title: "20+ Professionals", description: "Skilled engineers and technicians" },
    { icon: Factory, title: "Advanced VMC Machines", description: "State-of-the-art precision manufacturing equipment" },
  ];

  const clientLogos = [
    "Client 1", "Client 2", "Client 3", "Client 4", "Client 5", "Client 6"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-primary">SARA Robotics</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Empowering Industries with Intelligent Automation Solutions – 
              Transforming Manufacturing Through Innovation, Precision, and Excellence Since 2018
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-up space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2018 in Pune, SARA Robotics & Automation Services emerged from a vision to 
                revolutionize manufacturing through intelligent automation solutions. We recognized that 
                despite India's rapid industrial growth, many manufacturers struggled with outdated 
                processes and inefficient production systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our founders, with decades of combined experience in robotics and automation engineering, 
                set out to build a company that makes advanced manufacturing technology accessible, 
                reliable, and efficient for everyone – from small-scale manufacturers to large industrial 
                enterprises.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we serve numerous industries across India, helping them achieve operational 
                excellence through our technology-driven approach and customer-first philosophy. From 
                CNC fixtures to robotic welding cells, we've consistently delivered solutions that 
                drive measurable business results.
              </p>
            </div>
            <div className="slide-up">
              <div className="relative p-12 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 backdrop-blur-sm border border-primary/20">
                <div className="text-center space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">SARA Robotics</h3>
                  <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                    Innovation in Automation for Every Industry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center slide-up">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {achievement.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <Card className="border-2 border-primary/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base md:text-lg leading-relaxed text-foreground/80">
                  To become India's most trusted automation partner, enabling manufacturing excellence 
                  and industrial transformation through innovative robotics solutions that drive 
                  productivity, quality, and sustainable growth for every client.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base md:text-lg leading-relaxed text-foreground/80">
                  To deliver world-class automation solutions that enhance productivity, ensure precision, 
                  and drive measurable business results through cutting-edge technology, expert engineering, 
                  and unwavering commitment to customer success.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="card-gradient shadow-sara scale-on-hover text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facility Information */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our World-Class Facility</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art infrastructure powered by skilled professionals dedicated to manufacturing excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {facilityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="card-gradient shadow-sara text-center scale-on-hover border-primary/10">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-up order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Advanced Manufacturing Capabilities</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our facility is equipped with cutting-edge VMC machines, precision tools, and 
                quality control systems that ensure every product meets the highest standards 
                of accuracy and reliability.
              </p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base">State-of-the-art VMC machines for precision manufacturing and complex geometries</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base">Advanced quality control, testing, and validation equipment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base">20+ skilled technicians and engineers with deep industry expertise</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base">Comprehensive CAD/CAM design and simulation capabilities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base">Rigorous quality management system ensuring ISO-standard compliance</span>
                </li>
              </ul>
            </div>
            <div className="slide-up order-1 lg:order-2">
              <img
                src="/placeholder.svg"
                alt="SARA Robotics Manufacturing Facility"
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted Partners</h2>
            <p className="text-lg text-muted-foreground">
              We're proud to work with industry leaders who trust us with their automation needs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {clientLogos.map((client, index) => (
              <div key={index} className="text-center p-4 border rounded-lg bg-background">
                <div className="h-12 bg-muted rounded flex items-center justify-center">
                  <span className="text-sm font-medium">{client}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;