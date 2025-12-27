import { httpRequest } from "../api/httpRequest";
import { BASE_URL } from "../config/settings";

export const getUsers = async () => {
  return await httpRequest(`${BASE_URL}/users`);
};
