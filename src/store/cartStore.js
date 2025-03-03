import axios from "axios";
import { create } from "zustand";
import { axiosRequest } from "../../utils/axiosRequest";
import { URL } from "../config/config";

export const useCart = create((set, get) => ({
    cartData: [],
    total: "",
    getCart: async () => {
        try {
            let { data } = await axiosRequest.get(`/Cart/get-products-from-cart`)
            set({ cartData: data.data[0].productsInCart })
            set({ total: data.data[0].totalPrice })
        } catch (error) {
            console.error(error);
        }
    },
    delProdFromCart: async (id) => {
        try {
            await axiosRequest.delete(`/Cart/delete-product-from-cart?id=${id}`)
            get().getCart()
        } catch (error) {
            console.error(error);
        }
    },
    clearCart: async () => {
        try {
            await axiosRequest.delete(`/Cart/clear-cart`)
            get().getCart()
        } catch (error) {
            console.error(error);
        }
    },
    increaseProd: async (id) => {
        try {
            await axiosRequest.put(`/Cart/increase-product-in-cart?id=${id}`)
            get().getCart()
        } catch (error) {
            console.error(error);
        }
    },
    decreaseProd: async (id) => {
        try {
            await axiosRequest.put(`/Cart/reduce-product-in-cart?id=${id}`)
            get().getCart()
        } catch (error) {
            console.error(error);
        }
    }
}))