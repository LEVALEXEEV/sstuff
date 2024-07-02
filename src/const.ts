import { CartItemType } from "./types/cart-item"

export enum ItemTypes {
    Longsleeve = 'longsleeve',
    Hoodie = 'hoodie',
    Shorts = 'shorts',
    Cup = 'cup',
    Tee = 'tee'
}

export const removeItemFromCartHandler = (targetItem: CartItemType, cart: CartItemType[]) => {
    return(cart.filter(item => (item.id != targetItem.id || item.selectedSize != targetItem.selectedSize)))
}