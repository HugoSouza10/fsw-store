import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/constants/category-item";
import { Category } from "@prisma/client";
import Link from "next/link";

interface CategoryItemProp {
    category: Category
}

const CategoryItem = ({category}:CategoryItemProp) => {
    return (
        <Link href={`category/${category.slug}`}>
            <Badge className="flex justify-center items-center gap-2 py-3 rounded-lg" variant={"outline"}>
                {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
                <span className="font-bold text-xs">{category.name}</span>
            </Badge>
        </Link>
        
    )
}

export default CategoryItem;