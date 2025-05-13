
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Image, ImageOff } from "lucide-react";

interface ThemeCardProps {
  id: string;
  title: string;
  image: string;
  category: string;
  description?: string;
  noPhoto: string;
  photo: string;
}

const ThemeCard = ({ id, title, image, category, description, noPhoto, photo }: ThemeCardProps) => {
  // Special handling for Mocha theme
  const isMochaTheme = title.toLowerCase().includes('mocha');
  
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
      <CardContent className="p-0">
        <div className="aspect-square relative overflow-hidden bg-gray-100 flex items-center justify-center">
          {image ? (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-gray-400">
              <Image className="w-8 h-8" />
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="mb-2">
            <span className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-600 font-medium">
              {category}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          {description && (
            <p className="text-gray-600 text-sm mb-4">{description}</p>
          )}
          
          <div className="grid grid-cols-2 gap-2 mt-4">
            <Button asChild size="sm" variant="outline" className="flex gap-1 items-center w-full">
              <Link to={noPhoto}>
                <ImageOff className="h-4 w-4" />
                <span>Tanpa Foto</span>
              </Link>
            </Button>
            <Button asChild size="sm" className="flex gap-1 items-center w-full bg-purple-600 hover:bg-purple-700">
              <Link to={photo}>
                <Image className="h-4 w-4" />
                <span>Dengan Foto</span>
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ThemeCard;
