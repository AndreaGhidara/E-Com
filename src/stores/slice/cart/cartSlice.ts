import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Product {
    id: string;
    name: string;
    description: string;
    typeClothing: string;
    colors: string;
    price: string;
    size: string;
    img: string;
    review: number;
    // Aggiungere quantita di magazzino
    // quantity: number;
    // total: number;
}


export interface CartState {
    product: Product[];
}

const initialState: CartState = {
    product: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            state.product.push(action.payload);
        },
        removeToCart: (state, action: PayloadAction<Product>) => {
            state.product = state.product.filter((item) => item.id !== action.payload.id);
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeToCart } = cartSlice.actions

export default cartSlice.reducer