import axios from "axios";
import { BASE_URL } from ".";

export const Update = async (src, id, data) => {
  try {
    const response = await axios.put(`${BASE_URL}/${src}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
