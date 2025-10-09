interface Milestone {
  year: string;
  title: string;
  description: string;
  color: string;
}

const Milestones = () => {
  const milestones: Milestone[] = [
    {
      year: "2018",
      title: "Company Founded",
      description: "SARA Robotics was established with a vision to revolutionize manufacturing through intelligent automation solutions.",
      color: "bg-orange-500",
    },
    {
      year: "2019",
      title: "First Major Project",
      description: "Successfully delivered our first end-of-line testing machine, marking the beginning of our journey in automation excellence.",
      color: "bg-purple-500",
    },
    {
      year: "2020",
      title: "Facility Expansion",
      description: "Expanded to our current 4000 sq. ft. state-of-the-art facility with advanced VMC machines and precision tools.",
      color: "bg-green-500",
    },
    {
      year: "2021",
      title: "Team Growth",
      description: "Grew our team to 20+ skilled professionals, including expert engineers and technicians specializing in robotics.",
      color: "bg-green-600",
    },
    {
      year: "2022",
      title: "Technology Leadership",
      description: "Established ourselves as leaders in robotic welding cells and advanced automation solutions across multiple industries.",
      color: "bg-blue-500",
    },
    {
      year: "2023",
      title: "Innovation Excellence",
      description: "Pioneered new automation technologies and expanded our portfolio to include comprehensive leak testing and assembly solutions.",
      color: "bg-blue-600",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Milestones</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key moments in our journey to transform automation services in the industry
          </p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border hidden md:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  } text-center md:text-inherit`}
                >
                  <div className="inline-block">
                    <span className="text-sm font-semibold text-primary mb-2 block">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground max-w-md">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-4 h-4 rounded-full ${milestone.color} ring-4 ring-background`}
                  />
                </div>

                {/* Spacer for other side */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
