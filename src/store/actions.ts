import { createAction } from "@reduxjs/toolkit";
import { CartItemType } from "../types/cart-item";

export const setDevice = createAction<boolean>('setDevice');
export const setCart = createAction<CartItemType[]>('setCart');
export const clearCart = createAction('clearCart');
export const setTotalPrice = createAction<number>('setTotalPrice');
export const setAllowCookies = createAction<boolean>('setAllowCookies');