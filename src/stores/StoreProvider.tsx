'use client'

import { Provider } from "react-redux"
import { store } from "./store"
import { UserProvider } from "@auth0/nextjs-auth0/client"

export default function StoreProvider({ children }: { children: React.ReactNode }) {
    return (
        <UserProvider>
            <Provider store={store}>
                {children}
            </Provider>
        </UserProvider>
    )
}
