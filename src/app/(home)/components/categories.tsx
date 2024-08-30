import { prismaClient } from "@/lib/prisma";
import CategoryItem from "./category-item";

const Categories = async () => {
    const categories = await prismaClient.category.findMany({});
    return (
        <div className="grid grid-cols-2 gap-y-2 gap-x-4">
            {/*Aqui a gent está fazendo um map dentro das categorias e enviar 
            uma prop para o componente CategoryItem*/}
            {categories.map(category => <CategoryItem key={category.id} category={category} />)}
        </div>
    )
}

export default Categories;