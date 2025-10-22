import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShineBorder } from "@/components/ui/shine-border";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
}

const ProductCard = ({ title, description, image }: ProductCardProps) => {
  return (
    <ShineBorder
      borderRadius={12}
      borderWidth={2}
      duration={13}
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      className="w-full min-w-0 h-full p-0 bg-transparent dark:bg-transparent"
    >
      <Card className="h-full card-gradient shadow-sara scale-on-hover border-0 overflow-hidden">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-lg leading-tight">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
        </CardContent>
      </Card>
    </ShineBorder>
  );
};

export default ProductCard;
