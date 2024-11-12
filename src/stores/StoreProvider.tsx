'use client'

import { Provider } from "react-redux"
import { RootState, store } from "./store"

export default function StoreProvider({ children }: { children: RootState }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
