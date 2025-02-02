import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Separator } from "./separator";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";


const Cart = () => {
    const { products, subtotal, total, totalDiscount } = useContext(CartContext);
    return (
       <div className="flex flex-col gap-8">
        <Badge className="w-fit gap-1 text-base border-2 py-[0.375rem] uppercase border-primary" variant={"outline"}>
            <ShoppingCartIcon size={16}/>
            Carrinho
        </Badge>
        <div className="flex h-full flex-col gap-5 overflow-hidden">
            <ScrollArea className="h-full">
                <div className="flex flex-col h-full gap-5">
                    {products.length > 0 ? (
                        products.map(product => 
                            <CartItem key={product.id} product={computeProductTotalPrice(product as any) as any}/>
                            )
                    ) : (
                        <p className="text-center font-semibold">Carrinho vazio. Vamos fazer compras?</p>
                    )}
                </div>
            </ScrollArea>
        </div>
        <div className="flex flex-col gap-3 text-xs">
            <Separator/>
            <div className="flex items-center justify-between">
                <p>SubTotal</p>
                <p>R$: {subtotal.toFixed(2)}</p>
            </div>
            <Separator/>
            <div className="flex items-center justify-between">
                <p>Entrega</p>
                <p>GRATIS</p>
            </div>
            <Separator/>
            <div className="flex items-center justify-between">
                <p>Descontos</p>
                <p>R$: - {totalDiscount.toFixed(2)}</p>
            </div>
            <Separator/>
            <div className="flex items-center justify-between text-sm font-bold">
                <p>Total</p>
                <p>R$: {total}</p>
            </div>
            <Button className="font-bold uppercase mt-7">Finalizar compra</Button>
        </div>
       </div>
    )
  
}


export default Cart;