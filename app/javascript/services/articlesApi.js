import axios from "axios";

const baseUrl = "http://localhost:3000/articles";

const getArticles = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const searchArticles = async (q) => {
  const searchValue = {
    "q" : {
      "title_or_highlight_cont": q,
    },
  };
  const response = await axios.get(baseUrl, { params: searchValue });
  return response.data;
};

const getArticle = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};
const pagedArticles = async (page) => {
  const response = await axios.get(`${baseUrl}?page=${page}`);
  return response.data;
};

export default {
  getArticles,
  pagedArticles,
  getArticle,
  searchArticles,
};
