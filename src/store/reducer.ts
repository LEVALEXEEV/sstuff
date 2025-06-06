import {createReducer} from '@reduxjs/toolkit';
import { clearCart, setAllowCookies, setCart, setDevice, setTotalPrice } from './actions';
import { CartItemType } from '../types/cart-item';
import { setCookie } from '../utils';

type StateType = {
  cartItems: CartItemType[]
  device: boolean
  totalPrice: number
  allowCookies: boolean
}

const initialState: StateType = {
  cartItems: [],
  device: true,
  totalPrice: 0,
  allowCookies: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setDevice, (state, action) => {
      state.device = action.payload;
    })
    .addCase(setCart, (state, action) => {
      state.cartItems = action.payload.sort((a, b) => (a.id < b.id ? -1 : 1));  
      setCookie('cart', JSON.stringify(state.cartItems), 7);
    })
    .addCase(setTotalPrice, (state, action) => {
      state.totalPrice = action.payload;  
    })
    .addCase(clearCart, (state) => {
      state.cartItems = [];
      setCookie('cart', JSON.stringify(state.cartItems), 7);
    })
    .addCase(setAllowCookies, (state, action) => {
      state.allowCookies = action.payload;
      setCookie('allowCookies', JSON.stringify(state.allowCookies), 3);
    })
});

export {reducer};