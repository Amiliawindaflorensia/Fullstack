import axios from "axios";

const API_URL = "http://127.0.0.1:5000/auth";

export const login = async (email, password) => {
  return axios.post(`${API_URL}/login`, {
    email,
    password,
  });
};

export const register = async (
  username,
  email,
  password,
  cityCode,
  street,
  postalCode
) => {
  return axios.post(`${API_URL}/register`, {
    username,
    email,
    password,
    city_code: cityCode,
    street,
    postal_code: postalCode,
  });
};
