import { ClockIcon } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio.tsx";
import { Link } from "react-router-dom";

interface IRecipeProps {
  item: {
    id: number;
    title: string;
    image: string;
    readyInMinutes: number;
    dishTypes: string[];
  };
}

export default function Recipe({ item }: IRecipeProps) {
  return (
    <div className="relative px-4 pt-4 pb-6 bg-white shadow-lg rounded-md transform transition-all hover:scale-[1.01] hover:shadow-2xl">
      <div className="relative mb-6">
        <AspectRatio ratio={7 / 3}>
          <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-md" />
        </AspectRatio>
        <dl className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm">
          <dt>
            <ClockIcon className="w-5 h-5" />
            <span className="sr-only">Ready in minutes</span>
          </dt>
          <dd className="font-medium">{item.readyInMinutes} min</dd>
        </dl>
      </div>
      <Link to={`/recipes/${item.id}`} className="after:absolute after:top-0 after:left-0 after:w-full after:h-full">
        <h3 className="text-xl mb-2 font-semibold">{item.title}</h3>
      </Link>
      <p className="text-sm font-medium capitalize text-foreground/60">{item.dishTypes.join(", ")}</p>
    </div>
  );
}
