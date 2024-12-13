import axiosInstance from "../axiosInstance";

export const packageBookingProcess = async (data) => {
  try {
    const res = await axiosInstance.post(
      "/package-booking/add-package-booking",
      data
    );
    if (res.status === 201) {
      return res.data.data;
    }
  } catch (error) {
    throw error;
  }
};
