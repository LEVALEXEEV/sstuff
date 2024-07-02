import {createReducer} from '@reduxjs/toolkit';
import { addItemToCart, clearCart, removeItemFromCart, setDevice } from './actions';
import { CartItemType } from '../types/cart-item';

type StateType = {
  cartItems: CartItemType[]
  device: boolean
}

const initialState: StateType = {
  cartItems: [],
  device: true
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setDevice, (state, action) => {
        state.device = action.payload;
    })
    .addCase(addItemToCart, (state, action) => {
      state.cartItems.push(action.payload);
    })
    .addCase(removeItemFromCart, (state, action) => {
      state.cartItems = action.payload;  
    })
    .addCase(clearCart, (state) => {
        state.cartItems = [];
    })
});

export {reducer};