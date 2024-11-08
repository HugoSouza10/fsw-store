"use client";

import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { ProductWitchTotalPrice } from "@/helpers/product";
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useState } from "react";

interface ProductInfoProps {
   product: Pick<
    ProductWitchTotalPrice,
    | "discountPercentage"
    | "description"
    | "totalPrice"
    | "name"
    | "basePrice"
   >
}

const ProductInfo =  ({product: {name, basePrice, totalPrice, description, discountPercentage}}:ProductInfoProps) => {
    const [quantity, setQuantity] = useState(1);

    const handleDecreaseQuantityClick = () => {
        setQuantity((prev)=> (prev === 1 ? prev : prev-1))
    }
    const handleIncreaseQuantityClick = () => {
        setQuantity((prev)=> prev + 1)
    }
    return (
        <div className="flex flex-col px-5">
            <h2 className="text-lg">{name}</h2>
            <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold">R$: {totalPrice.toFixed(2)}</h1>
                {discountPercentage > 0 &&
                 <DiscountBadge>
                      {discountPercentage}
                 </DiscountBadge>
                }
            </div>
            {discountPercentage > 0 &&
                <p className="opacity-75 text-sm line-through"> R$: {Number(basePrice).toFixed(2)}</p>
            }
            <div className="flex items-center gap-2 mt-4">
                <Button onClick={handleDecreaseQuantityClick} size="icon" variant='outline'>
                    <ArrowLeftIcon size={16}/>
                </Button>
                <span>{quantity}</span>
                <Button onClick={handleIncreaseQuantityClick} size="icon" variant='outline'>
                    <ArrowRightIcon size={16}/>
                </Button>
            </div>
            <div className="mt-8 flex flex-col gap-3">
                <h3 className="font-bold">Descrição</h3>
                <p className="opacity-75 text-sm">{description}</p>
            </div>
            <Button className="mt-8 font-bold uppercase">
                Asicionar ao carrinho
            </Button>
            <div className="mt-5 rounded-lg bg-accent flex items-center px-5 py-2 justify-between">
                <div className="flex items-center gap-3">
                    <TruckIcon/>
                    <div className="flex flex-col">
                        <p className="text-xs">Entrega via <span className="font-bold">ESPacket</span></p>
                        <p className="text-[#8162FF]">
                            Envio para <span className="font-bold">todo Brasil</span>
                        </p>
                    </div>
                    <p className="text-xs font-bold">Frete gratis</p>
                </div>
            </div>
        </div>
    )
  
}

export default ProductInfo;