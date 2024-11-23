"use client";
import { ProductWitchTotalPrice } from "@/helpers/product";
import { createContext, ReactNode, useState } from "react";


export interface CartProduct extends ProductWitchTotalPrice {
    quantity: number
}

interface ICartContext {
    products: CartProduct[];
    cartTotalPrice: number;
    cartBasePrice: number;
    cartTotalDiscount: number;
    addProuctsToCart: (product: CartProduct) => void;
    decreaseProductQuantity: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
    products: [],
    cartTotalPrice: 0,
    cartBasePrice: 0,
    cartTotalDiscount: 0,
    addProuctsToCart: () => {},
    decreaseProductQuantity: () => {}
})

const CartProvider = ({children}:{children: ReactNode}) => {
    const [products, setProducts] = useState<CartProduct[]>([]);

    const addProuctsToCart = (product: CartProduct) => {
        // Se o produto já estiver no carrinho, apenas aumente sua quantidade
        let productIsAlReadyOnCart = products.some(cartProduct => cartProduct.id === product.id);
        if(productIsAlReadyOnCart) {
            setProducts((prev) =>
                 prev.map((cartProduct) => {
                     if(cartProduct.id === product.id) {
                         return {
                             ...cartProduct,
                             quantity: cartProduct.quantity + product.quantity,
                         };
                     }
                     return cartProduct;
                 }),
             );
             return;
         }
        //Se não, adicione o produto no carrinho.
        setProducts((prev)=> [...prev, product]);
    }

    const decreaseProductQuantity = (productId: string) => {
        // se a quantidade for 1, remova o produto do carrinho
        setProducts(prev => prev.map(cartProduct => {
            if(cartProduct.id === cartProduct.id) {
                return {
                    ...cartProduct,
                    quantity: cartProduct.quantity - 1,
                };
            }
            return cartProduct;
        }).filter((cartProduct)=> cartProduct.quantity > 0));

        //se não diminua a quantidade
    }
    return (
        <CartContext.Provider value={{
            products,
            addProuctsToCart,
            decreaseProductQuantity,
            cartTotalPrice: 0,
            cartBasePrice: 0,
            cartTotalDiscount: 0
            
        }}>
            {children}

        </CartContext.Provider>
    )
}

export default CartProvider;