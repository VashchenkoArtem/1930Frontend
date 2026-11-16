import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "../types/product";

interface RegisterResponse {
    id: number;
    email: string;
}

interface RegisterRequest {
    email: string;
    password: string;
}
interface LoginRequest {
    email: string;
    password: string;
}
interface UserResponse{
    id: number;
    email: string;
}

export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000",
        credentials: "include"
    }),
    tagTypes: ["Me"],
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => "/products"
        }),
        register: builder.mutation<RegisterResponse, RegisterRequest>({
            query: (data) => {
                return {
                    url: "/auth/register",
                    method: "POST",
                    body: data 
                }
            }
        }),
        login: builder.mutation<void, LoginRequest>({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Me"]
        }),
        getMe: builder.query<UserResponse, void>({
            query: () => "/auth/me",
            providesTags: ["Me"],
        })
})})

export const { 
    useGetProductsQuery, 
    useRegisterMutation, 
    useLoginMutation,
    useGetMeQuery
} = baseApi