import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api/v1";

export const fetchBlogs = (page = 1) => {
  return axios.get(`${API_BASE_URL}/blogs/?page=${page}`);
};

export const fetchBlogDetail = (slug) => {
  return axios.get(`${API_BASE_URL}/blogs/${slug}/`);
};
