import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  deliveryFee: 15,
  freeDeliveryFrom: 200,
  itemsCount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newProduct = action.payload.product;

      state.items.push({ product: newProduct, quantity: 1 });
      state.itemsCount += 1;
    },
    changeQuantity: (state, action) => {},
  },
});
