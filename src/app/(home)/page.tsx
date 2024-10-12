
import Image from "next/image";
import Categories from "./components/categories";
import ProductList from "./components/product-list";
import { prismaClient } from "@/lib/prisma";
import SectionTitle from "./components/section-title";
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
 
 return (
  <div className="">
    <PromoBanner
      src="/banner-home-01.png"
      alt="Até 55% de desconto esse mês!"
    />
    <div className="mt-6 px-5">
      <Categories/>
    </div>
    <div className="mt-5">
      <SectionTitle>Ofertas</SectionTitle>
      <ProductList products={deals}/>
    </div>
    <PromoBanner
      src="/banner-home-02.png"
      alt="Até 55% de desconto em mouses!"
    />
    <div className="mt-5">
      <SectionTitle>Teclados</SectionTitle>
      <ProductList products={keybord}/>
    </div>

  </div>
 )
}

