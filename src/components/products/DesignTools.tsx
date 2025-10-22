const DesignTools = () => {
  const tools = ["SolidWorks", "SolidEdge", "Inventor", "CATIA"];

  return (
    <div className="fade-in bg-muted/30 rounded-2xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4">Our Design Tools</h3>
        <p className="text-muted-foreground">
          We utilize industry-leading software and tools to deliver precision engineering solutions
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {tools.map((tool, index) => (
          <div key={index} className="bg-background rounded-lg p-4 shadow-sm">
            <span className="font-semibold text-primary">{tool}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignTools;
