import axios from "axios";
import { BASE_URL } from ".";

export const Delete = async (src, id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${src}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
