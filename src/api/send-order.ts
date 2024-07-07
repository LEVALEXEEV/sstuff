import { BASE_URL, CHAT_ID, USER_DATA_PARTS } from ".";
import { CartItemType } from "../types/cart-item";
import { getHash } from "../utils";

export const sendOrder = async (cart: CartItemType[], form: HTMLFormElement, shipOption: { service: string; type: string; }, totalPrice: number) => {
    let items = `CART: `;
    cart.map((item) => (items +=`ID: ${item.title}, size: ${item.selectedSize} `));
    let userData = `BUYER: `;
    USER_DATA_PARTS.map(
        (part) => {
            const value = (form.getElementsByClassName(part)[0] as HTMLInputElement).value;
            if (value) userData += `${part}: ${value} `;
        }
    );
    userData += `SHIP: service: ${shipOption.service} type: ${shipOption.type}\n`
    const orderData = items + userData;
    const orderID = `ORDER №${getHash(orderData)} TOTAL: ${totalPrice} `;
    const url = `${BASE_URL}/sendMessage?chat_id=${CHAT_ID}&parse_mode=html&text=${orderID + orderData}`;
    const response: Response = await fetch(url);
    return(response.status);
}