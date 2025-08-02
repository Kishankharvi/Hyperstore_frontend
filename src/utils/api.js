// filepath: frontend/src/utils/api.js

const API_BASE_URL = import.meta.env.VITE_REACT_APP_API_URL ;
console.log("API Base URL:", API_BASE_URL);
class ApiService {
  constructor() {
    this.token = localStorage.getItem("token");
  }

  setToken(token) {
    this.token = token;
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }

 getHeaders() {
  const headers = {
    "Content-Type": "application/json",
  };

  const token = localStorage.getItem("token"); // Get the token from local storage

  if (token) {
    headers.Authorization = `Bearer ${token}`; // Set the Authorization header
  }

  return headers;
}

  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: this.getHeaders(),
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      return data;
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  }

  // Auth methods
  async register(userData) {
    return this.request("/auth/register", {
      method: "POST",
      body: JSON.stringify(userData),
    });
  }

  async login(credentials) {
    return this.request("/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    });
  }

  async getCurrentUser() {
    return this.request("/auth/me");
  }

  async logout() {
    return this.request("/auth/logout", { method: "POST" });
  }

  // Product methods
  async getProducts(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return this.request(`/products?${queryString}`);
  }

  async getProduct(id) {
    return this.request(`/products/${id}`);
  }

  // Order methods
  async createOrder(orderData) {
    return this.request("/orders", {
      method: "POST",
      body: JSON.stringify(orderData),
    });
  }

  async getUserOrders() {
    return this.request("/orders/my-orders");
  }

  async getOrder(id) {
    return this.request(`/orders/${id}`);
  }

  // User methods
  async updateProfile(profileData) {
    return this.request("/users/profile", {
      method: "PUT",
      body: JSON.stringify(profileData),
    });
  }
  async getUsers() {
    return this.request("/users");
  }

  async createProduct(productData) {
    return this.request("/products", {
      method: "POST",
      body: JSON.stringify(productData),
    });
  }

  async updateProduct(id, productData) {
    return this.request(`/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(productData),
    });
  }

  async deleteProduct(id) {
    return this.request(`/products/${id}`, {
      method: "DELETE",
    });
  }
  async createAdmin(userData) {
    return this.request("/auth/create-admin", {
      method: "POST",
      body: JSON.stringify(userData),
    });
  }
}

export default new ApiService();