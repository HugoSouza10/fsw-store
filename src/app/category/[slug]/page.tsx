import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import { CATEGORY_ICON } from "@/constants/category-item";


const CategoryProducts = async ({params}:any) => {
    const category = await prismaClient.category.findFirst({
        where: {
            slug: params.slug
        },
        include: {
            product: true,
        }
    })

    if(!category) return null;
    return (
        <div className="p-5">
            <Badge className="w-fit gap-1 text-base border-2 py-[0.375rem] uppercase border-primary" variant={"outline"}>
                {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
                {category.name}
            </Badge>
            <div className="grid grid-cols-2 gap-8 mt-5">
                {category.product.map((product) =>
                    <ProductItem key={product.id} product={computeProductTotalPrice(product)}/>
                )}
            </div>
        </div>
   
    )
  
}

export default CategoryProducts;