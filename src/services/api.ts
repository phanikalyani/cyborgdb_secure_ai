import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000", // FastAPI backend
  headers: {
    "Content-Type": "application/json",
  },
});

export const searchSecure = async (query: string) => {
  const response = await api.get("/search", {
    params: { q: query },
  });
  return response.data;
};
