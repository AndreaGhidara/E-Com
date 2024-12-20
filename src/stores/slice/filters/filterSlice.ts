import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
    type: string;
    price: number[];
    color: string;
    size: string;
}

const initialState: FilterState = {
    type: '',
    price: [0, 50],
    color: '',
    size: '',
}

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setType: (state, action: PayloadAction<string>) => {
            state.type = action.payload
        },
        setPrice: (state, action: PayloadAction<number[]>) => {
            state.price = action.payload
        },
        setColor: (state, action: PayloadAction<string>) => {
            state.color = action.payload
        },
        setSize: (state, action: PayloadAction<string>) => {
            state.size = action.payload
        },
        clearFilters: (state) => {
            state.type = ''
            state.price = [0, 50]
            state.color = ''
            state.size = ''
        }
    }
})

export const { setType, setPrice, setColor, setSize, clearFilters } = filterSlice.actions

export default filterSlice.reducer