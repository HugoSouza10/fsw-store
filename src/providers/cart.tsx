"use client";
import { ProductWitchTotalPrice } from "@/helpers/product";
import { createContext, ReactNode, useMemo, useState } from "react";


export interface CartProduct extends ProductWitchTotalPrice {
    quantity: number
}

interface ICartContext {
    products: CartProduct[];
    cartTotalPrice: number;
    cartBasePrice: number;
    cartTotalDiscount: number;
    total: number;
    subtotal: number;
    totalDiscount: number;
    addProuctsToCart: (product: CartProduct) => void;
    decreaseProductQuantity: (productId: string) => void;
    increaseProductQuantity: (productId: string) => void;
    removeProductFromCart: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
    products: [],
    cartTotalPrice: 0,
    cartBasePrice: 0,
    cartTotalDiscount: 0,
    total: 0,
    subtotal: 0,
    totalDiscount: 0,
    addProuctsToCart: () => {},
    decreaseProductQuantity: () => {},
    increaseProductQuantity: () => {},
    removeProductFromCart: () => {}
})

const CartProvider = ({children}:{children: ReactNode}) => {
    const [products, setProducts] = useState<CartProduct[]>([]);

    // Total sem desconto
    const subtotal =  useMemo(()=> {
        return products.reduce((acc, product) => {
            return acc + Number(product.basePrice) * product.quantity;
        }, 0)
    }, [products])

    // Total com desconto
    const total =  useMemo(()=> {
        return products.reduce((acc, product) => {
            return acc + product.totalPrice * product.quantity;
        }, 0)
    }, [products]);

    const totalDiscount = subtotal - total;

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

    const increaseProductQuantity = (productId: string) => {
        setProducts(prev => prev.map(cartProduct => {
            if(cartProduct.id === cartProduct.id) {
                return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + 1,
                };
            }
            return cartProduct;
        }))
    }

    const removeProductFromCart = (productId: string) => {
        // se a quantidade for 1, remova o produto do carrinho
        setProducts((prev) => prev.filter((cartProduct) => cartProduct.id != productId));
        //se não diminua a quantidade
    }
    return (
        <CartContext.Provider value={{
            products,
            addProuctsToCart,
            decreaseProductQuantity,
            increaseProductQuantity,
            removeProductFromCart,
            total,
            subtotal,
            totalDiscount,
            cartTotalPrice: 0,
            cartBasePrice: 0,
            cartTotalDiscount: 0,
            
        }}>
            {children}

        </CartContext.Provider>
    )
}

export default CartProvider;