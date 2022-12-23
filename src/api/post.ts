import { Post } from "../models";
import axiosClient from "./axiosClient"

export const postApi = {
  getAll() {
    return axiosClient.get<unknown, Post[]>("/posts");
  }
}