import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath: 'ProductsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: ((builder) => ({
        getAllproducts: builder.query({
            query: () => 'products'
        }),
        getCategories: builder.query({
            query: () => 'products/categories'
        })
    }))
})

export const { useGetAllproductsQuery, useGetCategoriesQuery } = productApi