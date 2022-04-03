import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb"

const useCart = (products)=>{
    const [cart,setCart] =useState([])
    useEffect(()=>{
        const storeCart = getStoredCart()
        const saveCart =[]
        for(const id in storeCart){
            const addProduct = products.find(product=>product.id === id)
            if(addProduct){
                const quantity = storeCart[id]
                addProduct.quantity = quantity
                saveCart.push(addProduct)
            }
        }
        setCart(saveCart)


    },[products])
    return [cart,setCart]
}
export default useCart;