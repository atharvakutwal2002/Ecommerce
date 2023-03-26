import axios from "axios";

const baseUrl = "https://boat-lifestyle-101.onrender.com";
// const baseUrl = "http://localhost:5000";

const headers = {
  "Content-Type": "application/json",
};

export const Signup = async (signupObject) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, signupObject, {
      headers,
    });
    console.log(response);
    localStorage.setItem("token", response.data.token);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const loginApi = async (loginObject) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, loginObject, {
      headers: { headers },
    });
    console.log(response);
    localStorage.setItem("token", response.data.token);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const postProduct = async (obj) => {
  try {
    const response = await axios.post(`${baseUrl}/products`, obj, {
      headers: { headers },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async () => {
  try {
    const response = axios.get(`${baseUrl}/products`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleProduct = async (id) => {
  try {
    const response = axios.get(`${baseUrl}/product/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addToCart = async (obj) => {
  const token = localStorage.getItem("token");
  try {
    const response = axios.post(
      `${baseUrl}/cart/${localStorage.getItem("userId")}`,
      obj,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const removeFromCart = async (obj) => {
  const token = localStorage.getItem("token");
console.log(obj)
  try {
    const response = axios.delete(
      `${baseUrl}/cart/${localStorage.getItem("userId")}`,
      {
        data: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getUserProfile = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/user/${localStorage.getItem("userId")}`,
      { headers: { headers } }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getCartItems = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/cart/${localStorage.getItem("userId")}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const postOrder = async (obj) => {
  const id = localStorage.getItem("userId");
  try {
    const response = await axios.post(`${baseUrl}/order/${id}`, obj, {
      headers: { headers },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getOrders = async () => {
  const id = localStorage.getItem("userId");
  try {
    const response = await axios.get(`${baseUrl}/order/${id}`, {
      headers: { headers },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
