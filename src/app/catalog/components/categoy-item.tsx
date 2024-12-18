import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
    category: Category
}
const CategoryItem = ({category}:CategoryItemProps) => {
    return (
    <Link href={`/category/${category.slug}`}>
        <div className="flex flex-col">
            <div className="bg-category-item-gradient w-full h-[150px] rounded-tl-lg rounded-tr-lg flex items-center justify-center">
                <Image
                    src={category.imageUrl}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-auto max-h[70%] w-auto max-w-[80%]"
                    style={{
                        objectFit:'contain'
                    }}
                    alt=""
                />
            </div>
            <div className="bg-accent py-3 rounded-br-lg rounded-bl-lg">
                <p className="text-sm font-semibold text-center">{category.name}</p>
            </div>
        </div>
    </Link>
    
    )
  
}

export default CategoryItem;