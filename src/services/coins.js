import API from "./api";

export const getTrendingCoinsService = async range => {
  try {
    const response = await API.get(`/coins/trending/${range}`);
    return response;
  } catch (error) {
    return error.response;
  }
};
