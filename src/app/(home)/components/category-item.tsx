import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import { HeadphonesIcon, KeyboardIcon, MonitorIcon, MouseIcon, SpeakerIcon, SquareIcon } from "lucide-react";

interface CategoryItemProp {
    category: Category
}

const CategoryItem = ({category}:CategoryItemProp) => {
    const categoryIcon = {
        keyboards: <KeyboardIcon size={16}/>,
        monitors: <MonitorIcon size={16}/>,
        headphones: <HeadphonesIcon size={16}/>,
        mousepads: <SquareIcon size={16}/>,
        mouses: <MouseIcon size={16}/>,
        speakers: <SpeakerIcon size={16}/>
    }
    return (
        <Badge className="flex justify-center items-center gap-2 py-3 rounded-lg" variant={"outline"}>
            {categoryIcon[category.slug as keyof typeof categoryIcon]}
            <span className="font-bold text-xs">{category.name}</span>
        </Badge>
    )
}

export default CategoryItem;