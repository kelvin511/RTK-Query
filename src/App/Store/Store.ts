import { configureStore } from "@reduxjs/toolkit"
import { productsAPI } from "../Service/apiData"
import { setupListeners } from "@reduxjs/toolkit/query"

export const mainStore = configureStore({
  reducer: {
    [productsAPI.reducerPath]: productsAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsAPI.middleware),
})

setupListeners(mainStore.dispatch)
