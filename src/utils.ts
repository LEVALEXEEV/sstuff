import { CartItemType } from "./types/cart-item"

export  function getHash(str: string): number {
    const newString = str + Date.now();
    let hash = 0;
    for (let i = 0; i < newString.length; i++) {
        hash = ((hash << 5) - hash) + newString.charCodeAt(i); 
        hash |= 0; // Convert to 32bit integer 
    }
    return hash; 
}

export const removeItemFromArray = (targetItemID: string, cart: CartItemType[]) => cart.filter(item => item.id != targetItemID);
export const findItemInArray = (targetItemID: string, cart: CartItemType[]) => cart.filter(item => item.id == targetItemID);

export function setCookie(name: string, value: string, days: number) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
export function getCookie(name: string) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
export function eraseCookie(name: string) {
    document.cookie = name+'=; Max-Age=-99999999;';  
}

export const getNextVideo = (direction: string, current: string) => {
    if (direction == 'r') {
        switch ( current ) {
            case '1':
                return '2';
            case '2':
                return '3';
            case '3':
                return '1';
            default: 
                return '0';
         }
    }
    else {
        switch ( current ) {
            case '1':
                return '3';
            case '2':
                return '1';
            case '3':
                return '2';
            default: 
                return '0';
         }
    }
}