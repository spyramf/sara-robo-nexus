import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Target, Award, Shield, Users, Building2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Eye,
      title: "Vision",
      description: "To be the leading provider of innovative robotics and automation solutions, transforming manufacturing industries through cutting-edge technology and exceptional service.",
    },
    {
      icon: Target,
      title: "Mission",
      description: "Delivering world-class automation solutions that enhance productivity, ensure precision, and drive sustainable growth for our clients across diverse industries.",
    },
    {
      icon: Award,
      title: "Core Values",
      description: "Innovation, Quality, Integrity, Customer-centricity, and Continuous improvement drive everything we do at SARA Robotics.",
    },
    {
      icon: Shield,
      title: "Quality Policy",
      description: "We are committed to delivering superior quality products and services that exceed customer expectations while maintaining the highest standards of excellence.",
    },
  ];

  const facilityFeatures = [
    { icon: Building2, title: "4000 Sq. Ft. Facility", description: "Modern, well-equipped manufacturing facility" },
    { icon: Users, title: "20+ Professionals", description: "Skilled engineers and technicians" },
  ];

  const clientLogos = [
    "Client 1", "Client 2", "Client 3", "Client 4", "Client 5", "Client 6"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">SARA Robotics</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pioneering automation excellence since 2018, we combine innovative technology 
              with deep industry expertise to deliver world-class manufacturing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Company Profile</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-6">
                SARA Robotics is an automation partner delivering customized solutions across welding, 
                leak testing, machining, and assembly automation. With advanced design capabilities and 
                global-standard engineering practices, we help industries optimize performance and efficiency.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
              <h3 className="text-2xl font-bold mb-6">Our Story</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2018 in Pune, SARA Robotics & Automation Services emerged from a vision to 
                revolutionize manufacturing through intelligent automation solutions. What started as 
                a small team of passionate engineers has grown into a trusted partner for businesses 
                seeking to enhance their manufacturing capabilities.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our journey has been marked by continuous innovation, strategic investments in 
                cutting-edge technology, and an unwavering commitment to customer success. Today, 
                we operate from a state-of-the-art 4000 sq. ft. facility, equipped with advanced 
                VMC machines and staffed by over 20 skilled professionals.
              </p>
              <p className="text-lg text-muted-foreground">
                From end-of-line testing machines to complex robotic welding cells, we've consistently 
                delivered solutions that not only meet but exceed our clients' expectations, 
                establishing ourselves as leaders in the robotics and automation industry.
              </p>
            </div>
            <div className="slide-up">
              <img
                src="/placeholder.svg"
                alt="SARA Robotics Team"
                className="rounded-lg shadow-sara w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Foundation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="card-gradient shadow-sara scale-on-hover">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
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
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Facility</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern infrastructure and skilled professionals working together to deliver excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {facilityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="card-gradient shadow-sara text-center scale-on-hover">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
              <img
                src="/placeholder.svg"
                alt="SARA Robotics Manufacturing Facility"
                className="rounded-lg shadow-sara w-full h-80 object-cover"
              />
            </div>
            <div className="slide-up">
              <h3 className="text-2xl font-bold mb-4">Advanced Manufacturing Capabilities</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Our facility is equipped with cutting-edge VMC machines, precision tools, and 
                quality control systems that ensure every product meets the highest standards 
                of accuracy and reliability.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>State-of-the-art VMC machines for precision manufacturing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Advanced quality control and testing equipment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Skilled technicians with years of industry experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Comprehensive design and simulation capabilities</span>
                </li>
              </ul>
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