

import axios from "axios";
import { create } from "zustand";
import { axiosRequest } from "../../utils/axiosRequest";
import { URL } from "../config/config";

export const useProducts = create((set, get) => ({
  data: [],
  categData: [],

  getProducts: async () => {
    set({ loading: true })

    try {
      const { data } = await axios.get(`${URL}/Product/get-products`)
      set({ data: data.data.products })
    } catch (error) {
      console.error(error);
    }  finally {
      set({ loading: false })

    }
  },
  addToCart: async (id) => {
    try {
      const data = await axiosRequest.post(`/Cart/add-product-to-cart?id=${id}`)
      console.log(data);

    } catch (error) {
      console.error(error);

    }
  },
  getCategories: async () => {
    set({ loading: true })

    try {
      const { data } = await axios.get(`${URL}/Category/get-categories`)
      set({ categData: data.data })
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false })

    }
  },
  loading: false,

  getById: async (id) => {
    set({ loading: true })
    try {
      let { data } = await axiosRequest.get(`/Product/get-product-by-id?id=${id}`)
      console.log(data, "ggg");
      set({ data: data.data })
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false })

    }
  }
}))