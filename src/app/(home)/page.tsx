
import Categories from "./components/categories";
import ProductList from "@/components/ui/product-list";
import { prismaClient } from "@/lib/prisma";
import SectionTitle from "@/components/ui/section-title";
import PromoBanner from "./components/promo-banner";

export default async function Home() {
  //Pegando todos os produtos onde o desconto seja maior que zero
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      }
    }
  })

  //Pegando todos os produtos da categoria teclado
  const keybord = await prismaClient.product.findMany({
    where: {
      category: {
       slug: 'keyboards'
      }
    }
  })

   //Pegando todos os produtos da categoria mouses
   const mouses = await prismaClient.product.findMany({
    where: {
      category: {
       slug: 'mouses'
      }
    }
  })
 
 return (
  <div className="flex flex-col gap-8">
    <PromoBanner
      src="/banner-home-01.png"
      alt="Até 55% de desconto esse mês!"
    />
    <div className="px-5">
      <Categories/>
    </div>
    <div>
      <SectionTitle>Ofertas</SectionTitle>
      <ProductList products={deals}/>
    </div>
    <PromoBanner
      src="/banner-home-02.png"
      alt="Até 55% de desconto em mouses!"
    />
    <div>
      <SectionTitle>Teclados</SectionTitle>
      <ProductList products={keybord}/>
    </div>
    <PromoBanner
        src="/banner-home-03.png"
        alt="Até 20% de desconto em fones!"
    />
    <div>
      <SectionTitle>Mouses</SectionTitle>
       <ProductList products={mouses}/>
    </div>
  </div>
 )
}

