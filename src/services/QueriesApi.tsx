import axios from "axios";
import { BASE_URL } from "../models/Constants";
import { IPhoto } from "../models/Image";

export const getData = (): Promise<IPhoto[]> => {
  return axios.get<IPhoto[]>(`${BASE_URL}`).then(res => {
    return res.data;
  });
};
