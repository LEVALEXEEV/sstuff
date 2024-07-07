import { BASE_URL, CHAT_ID, USER_DATA_PARTS } from ".";
import { CartItemType } from "../types/cart-item";
import { getHash } from "../utils";

export const sendOrder = async (cart: CartItemType[], form: HTMLFormElement, shipOption: { service: string; type: string; }, totalPrice: number) => {
    let items = `CART:\n`;
    cart.map((item) => (items= items + `ID: ${item.title}, size: ${item.selectedSize}\n`));
    let userData = `BUYER:\n`;
    USER_DATA_PARTS.map(
        (part) => {
            const value = (form.getElementsByClassName(part)[0] as HTMLInputElement).value;
            if (value) userData += `${part}: ${value}\n`;
        }
    );
    userData = userData + `SHIP: service: ${shipOption.service} type: ${shipOption.type}\n`;
    const orderData = items + userData;
    const orderID = `ORDER №${getHash(orderData)}\nTOTAL: ${totalPrice}\n`;
    const url = `${BASE_URL}/sendMessage?chat_id=${CHAT_ID}&parse_mode=html&text=${encodeURI(orderID + orderData)}`;
    const response: Response = await fetch(url);
    return(response.status);
}