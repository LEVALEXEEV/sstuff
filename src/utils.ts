import { CartItemType } from "./types/cart-item"

export  function getHash(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i); 
        hash |= 0; // Convert to 32bit integer 
    }
    return hash; 
}

export const removeItemFromArray = (targetItem: CartItemType, cart: CartItemType[]) => cart.filter(item => item.id != targetItem.id)