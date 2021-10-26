import API from "./api";

export const authorizationService = async (creds, type) => {
  try {
    const response = await API.post(`/user/${type}`, creds);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const checkAuthorizationService = async () => {
  try {
    const response = await API.get("/user/auth/check");
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getUserDataService = async () => {
  try {
    const response = await API.get("/user/data");
    return response;
  } catch (error) {
    return error.response;
  }
};

export const updateUserEmailService = async email => {
  try {
    const response = await API.put("/user/update/email", { email });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const updateUserCredentialsService = async (creds, type) => {
  try {
    const response = await API.put("/user/update/creds", { ...creds, type });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const updateDescriptionPortfolioService = async desc => {
  try {
    const response = await API.put("/user/update/description/portfolio", {
      desc,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const updateDescriptionUserService = async desc => {
  try {
    const response = await API.put("/user/update/description/user", {
      desc,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const updateUserAvatarService = async (formdata) => {
  try {
    const response = await API.put("/user/update/avatar", formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};