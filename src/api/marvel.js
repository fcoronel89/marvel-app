//import { axiosInstanceMarvel, axiosInstance } from "./axiosInstance";
import { axiosInstanceMarvel } from "./axiosInstance";

export const getCharacters = async (page = 0) => {
  try {
    const response = await axiosInstanceMarvel.get("characters", {
      params: {
        offset: page,
      },
    });

    return response.data.data;
  } catch (error) {
    throw new Error(
      error.response.data.message || "Failed to fetch characters"
    );
  }
};

export const getCharacter = async (id) => {
  try {
    const response = await axiosInstanceMarvel.get(`characters/${id}`);
    return response.data.data.results[0];
  } catch (error) {
    throw new Error(error.response.data.message || "Failed to fetch character");
  }
};

export const updateCharacter = async (id, data) => {
  try {
    console.log(id, data);
    //await axiosInstance.put(`characters/${id}`, data);
    return {
      success: true,
    };
  } catch (error) {
    throw new Error(
      error.response.data.message || "Failed to update character"
    );
  }
};

export const deleteCharacter = async (id) => {
  try {
    console.log(id);
    //await axiosInstance.delete(`characters/${id}`);
    return {
      success: true,
    };
  } catch (error) {
    throw new Error(
      error.response.data.message || "Failed to delete character"
    );
  }
};
