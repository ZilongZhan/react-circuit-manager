import axios from "axios";
import { BASE_URL } from ".";

export const Post = async (src, data) => {
  try {
    const response = await axios.post(`${BASE_URL}/${src}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
