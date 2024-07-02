import { createAction } from "@reduxjs/toolkit";
import { CartItemType } from "../types/cart-item";

export const setDevice = createAction<boolean>('setDevice');
export const addItemToCart = createAction<CartItemType>('addItemToCart');
export const removeItemFromCart = createAction<CartItemType[]>('removeItemFromCart');
export const clearCart = createAction('clearCart');
