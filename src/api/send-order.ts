import { BASE_URL, CHAT_ID, USER_DATA_PARTS } from ".";
import { CartItemType } from "../types/cart-item";
import { getHash } from "../utils";

export const sendOrder = async (cart: CartItemType[], form: HTMLFormElement, shipOption: { service: string; type: string; }, totalPrice: number) => {
    let items = `CART:\n`;
    cart.map((item) => {
        let itemInf = `ID: ${item.article}`;
        if (item.selectedSize) itemInf += `, size: ${item.selectedSize}`;
        items = items + itemInf + `\n`;
    });
    let userData = `\nBUYER:\n`;
    USER_DATA_PARTS.map(
        (part) => {
            const value = (form.getElementsByClassName(part)[0] as HTMLInputElement).value;
            if (value) userData += `${part}: ${value}\n`;
        }
    );
    userData = userData + `SHIP: service: ${shipOption.service} type: ${shipOption.type}\n`;
    const orderData = items + userData;
    const orderID = `ORDER №${getHash(orderData)}\nTOTAL: ${totalPrice}\n\n`;
    const url = `${BASE_URL}/sendMessage?chat_id=${CHAT_ID}&parse_mode=html&text=${encodeURI(orderID + orderData)}`;
    const response: Response = await fetch(url);
    return(response.status);
}