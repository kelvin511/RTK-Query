import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productsAPI = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
    }),

    getProductsById: builder.query({
      query: (id) => `/products/${id}`,
    }),

    addNewProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/products/add",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newProduct,
      }),
    }),

    updateProduct: builder.mutation({
      query: ({ id, updatedProduct }) => ({
        url: `/products/${id}`,
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: updatedProduct,
      }),
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
})

export const {
  useAddNewProductMutation,
  useDeleteProductMutation,
  useGetAllProductsQuery,
  useGetProductsByIdQuery,
  useLazyGetAllProductsQuery,
  useUpdateProductMutation,
} = productsAPI
