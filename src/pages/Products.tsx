import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ShineBorder } from "@/components/ui/shine-border";

// Import product images
import endOfLineTesting from "@/assets/products/end-of-line-testing.jpg";
import pressureDecayTesting from "@/assets/products/pressure-decay-testing.jpg";
import waterDipTesting from "@/assets/products/water-dip-testing.jpg";
import heliumLeakTesting from "@/assets/products/helium-leak-testing.jpg";
import roboticWeldingCell from "@/assets/products/robotic-welding-cell.jpg";
import driveShaftFixture from "@/assets/products/drive-shaft-fixture.jpg";
import oscillationAxleFixture from "@/assets/products/oscillation-axle-fixture.jpg";
import chassisWeldingFixture from "@/assets/products/chassis-welding-fixture.jpg";
import swayPivotFixture from "@/assets/products/sway-pivot-fixture.jpg";
import trackAssemblyFixture from "@/assets/products/track-assembly-fixture.jpg";
import twinTorchWelding from "@/assets/products/twin-torch-welding.jpg";
import servoDrivenWelding from "@/assets/products/servo-driven-welding.jpg";
import horizontalWelding from "@/assets/products/horizontal-welding.jpg";
import rotaryWelding from "@/assets/products/rotary-welding.jpg";
import semiAutomatedWelding from "@/assets/products/semi-automated-welding.jpg";
import machiningFixtures from "@/assets/products/machining-fixtures.jpg";
import hydraulicPress from "@/assets/products/hydraulic-press.jpg";
import poweredConveyor from "@/assets/products/powered-conveyor.jpg";
import manualPositioner from "@/assets/products/manual-positioner.jpg";
import motorizedPositioner from "@/assets/products/motorized-positioner.jpg";
import weldingAutomation from "@/assets/products/welding-automation.jpg";
import processAutomation from "@/assets/products/process-automation.jpg";
import assemblyAutomation from "@/assets/products/assembly-automation.jpg";
import ergonomicEquipment from "@/assets/products/ergonomic-equipment.jpg";
import materialHandling from "@/assets/products/material-handling.jpg";
import reverseEngineering from "@/assets/products/reverse-engineering.jpg";

const Products = () => {
  const productCategories = [
    {
      title: "Automation & Testing Solutions",
      icon: "🔧",
      products: [
        {
          title: "End-of-Line Testing SPM",
          description:
            "Advanced end-of-line testing equipment for comprehensive quality assurance and performance validation.",
          image: endOfLineTesting,
        },
        {
          title: "Pressure Decay Leak Testing SPM",
          description: "Precision pressure decay leak detection systems with high accuracy measurement capabilities.",
          image: pressureDecayTesting,
        },
        {
          title: "Water Dip Leak Testing SPM",
          description: "Water immersion leak testing solutions for reliable component quality verification.",
          image: waterDipTesting,
        },
        {
          title: "Helium Leak Testing SPM",
          description: "Ultra-sensitive helium leak detection systems for critical component testing.",
          image: heliumLeakTesting,
        },
        {
          title: "Helium Leak Testing SPM",
          description: "Ultra-sensitive helium leak detection systems for critical component testing.",
          image: heliumLeakTesting,
        },
        {
          title: "Pressure Decay Leak Testing SPM",
          description: "Precision pressure decay leak detection systems with high accuracy measurement capabilities.",
          image: pressureDecayTesting,
        },
      ],
    },
    {
      title: "Robotic Welding Solutions",
      icon: "🤖",
      products: [
        {
          title: "Robotic Welding Cells with Fixtures",
          description:
            "Complete robotic welding solutions for Exhaust System, ROPS, Roll Guard, and Exhaust Muffler applications.",
          image: roboticWeldingCell,
        },
        {
          title: "Drive Shaft Welding Fixture",
          description: "Precision fixtures designed specifically for drive shaft welding operations.",
          image: driveShaftFixture,
        },
        {
          title: "Oscillation Axle Welding Fixture",
          description: "Specialized fixtures for oscillation axle assembly welding processes.",
          image: oscillationAxleFixture,
        },
        {
          title: "Chassis Welding Fixture",
          description: "Heavy-duty welding fixtures for chassis manufacturing and assembly.",
          image: chassisWeldingFixture,
        },
        {
          title: "Sway Pivot Welding Fixture",
          description: "Custom-designed fixtures for sway pivot component welding applications.",
          image: swayPivotFixture,
        },
        {
          title: "Track Assembly Welding Fixture",
          description: "Robust fixtures for track assembly welding in heavy machinery manufacturing.",
          image: trackAssemblyFixture,
        },
      ],
    },
    {
      title: "Welding SPMs",
      icon: "⚡",
      products: [
        {
          title: "Twin Torch Welding SPM",
          description: "Advanced twin torch welding special purpose machine for high-speed, high-quality operations.",
          image: twinTorchWelding,
        },
        {
          title: "Servo Driven Welding SPM",
          description: "Precision servo-controlled welding systems for consistent, repeatable results.",
          image: servoDrivenWelding,
        },
        {
          title: "Horizontal Welding SPM",
          description: "Specialized horizontal welding machines for flat position welding applications.",
          image: horizontalWelding,
        },
        {
          title: "Rotary Welding SPM",
          description: "Rotary welding systems for cylindrical and circular component manufacturing.",
          image: rotaryWelding,
        },
        {
          title: "Semi-Automated Welding SPM",
          description: "Semi-automatic welding solutions combining manual control with automated precision.",
          image: semiAutomatedWelding,
        },
        {
          title: "Semi-Automated Welding SPM",
          description: "Semi-automatic welding solutions combining manual control with automated precision.",
          image: semiAutomatedWelding,
        },
      ],
    },
    {
      title: "Machining & Powertrain Solutions",
      icon: "🏭",
      products: [
        {
          title: "HMC/VMC Machining Fixtures",
          description:
            "Precision fixtures for Piston Block, PRC Frame, Encoder Housing, Turntable, and Front Chassis machining.",
          image: machiningFixtures,
        },
        {
          title: "Hydraulic Press",
          description: "High-force hydraulic press systems for forming, stamping, and assembly operations.",
          image: hydraulicPress,
        },
        {
          title: "Powered Conveyor",
          description: "Automated conveyor systems for efficient material handling and production flow.",
          image: poweredConveyor,
        },
      ],
    },
    {
      title: "Welding Manipulators & Positioners",
      icon: "🔄",
      products: [
        {
          title: "Manual Operated Gearbox-Type Welding Positioner",
          description: "Manual welding positioners with gearbox drive for precise part positioning.",
          image: manualPositioner,
        },
        {
          title: "Single Axis Motorised Welding Positioner",
          description: "Motorized single-axis positioners for automated welding applications.",
          image: motorizedPositioner,
        },
        {
          title: "Single Axis Motorised Welding Positioner",
          description: "Motorized single-axis positioners for automated welding applications.",
          image: motorizedPositioner,
        },
      ],
    },
    {
      title: "Design & Engineering Services",
      icon: "📐",
      products: [
        {
          title: "Welding Automation",
          description: "Complete welding automation solutions from design to implementation.",
          image: weldingAutomation,
        },
        {
          title: "Process Automation",
          description: "Custom process automation systems for enhanced manufacturing efficiency.",
          image: processAutomation,
        },
        {
          title: "Assembly Automation",
          description: "Automated assembly solutions for consistent quality and productivity.",
          image: assemblyAutomation,
        },
        {
          title: "Ergonomic Equipment",
          description: "Human-friendly automation equipment designed for operator safety and comfort.",
          image: ergonomicEquipment,
        },
        {
          title: "Material Handling Automation",
          description: "Automated material handling systems for streamlined production workflows.",
          image: materialHandling,
        },
        {
          title: "Reverse Engineering",
          description: "Professional reverse engineering services for component recreation and improvement.",
          image: reverseEngineering,
        },
      ],
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
              Comprehensive range of automation products designed to enhance manufacturing efficiency, precision, and
              reliability across diverse industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Products Categories */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {productCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="fade-in">
                <div className="text-center mb-12">
                  <div className="text-6xl mb-4">{category.icon}</div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{category.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.products.map((product, productIndex) => (
                    <ShineBorder
                      key={productIndex}
                      borderRadius={12}
                      borderWidth={2}
                      duration={13}
                      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                      className="w-full min-w-0 h-full p-0 bg-transparent dark:bg-transparent"
                    >
                      <Card className="h-full card-gradient shadow-sara scale-on-hover border-0 overflow-hidden">
                        <div className="aspect-video w-full overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-lg leading-tight">{product.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-sm leading-relaxed">{product.description}</CardDescription>
                        </CardContent>
                      </Card>
                    </ShineBorder>
                  ))}
                </div>
              </div>
            ))}

            {/* Design Tools Section */}
            <div className="fade-in bg-muted/30 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Our Design Tools</h3>
                <p className="text-muted-foreground">
                  We utilize industry-leading software and tools to deliver precision engineering solutions
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {["SolidWorks", "SolidEdge", "Inventor", "CATIA"].map((tool, index) => (
                  <div key={index} className="bg-background rounded-lg p-4 shadow-sm">
                    <span className="font-semibold text-primary">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 md:py-24 bg-primary text-primary-foreground">
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
      </section> */}

      <Footer />
    </div>
  );
};

export default Products;
