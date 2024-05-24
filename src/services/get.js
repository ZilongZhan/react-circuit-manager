import axios from "axios";
import { BASE_URL } from ".";

export const Get = async (src) => {
  try {
    const response = await axios.get(`${BASE_URL}/${src}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
