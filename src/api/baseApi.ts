import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "../types/product";


export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000"
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => "/products"
        })
    })
})

export const { useGetProductsQuery } = baseApi