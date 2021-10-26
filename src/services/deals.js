import API from "./api";

export const createDealService = async deal => {
  try {
    const response = await API.post("/deals", deal);
    return response;
  } catch (error) {
    return error.response;
  }
};
