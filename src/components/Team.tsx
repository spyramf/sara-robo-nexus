import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  linkedin?: string;
  email?: string;
}

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "John Doe",
      position: "Founder & CEO",
      image: "/placeholder.svg",
      linkedin: "#",
      email: "john@sararobotics.com",
    },
    {
      name: "Jane Smith",
      position: "Chief Technology Officer",
      image: "/placeholder.svg",
      linkedin: "#",
      email: "jane@sararobotics.com",
    },
    {
      name: "Mike Johnson",
      position: "Head of Engineering",
      image: "/placeholder.svg",
      linkedin: "#",
      email: "mike@sararobotics.com",
    },
    {
      name: "Sarah Williams",
      position: "Operations Manager",
      image: "/placeholder.svg",
      linkedin: "#",
      email: "sarah@sararobotics.com",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the passionate professionals driving innovation and excellence at SARA Robotics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 scale-on-hover overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-muted-foreground">{member.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
