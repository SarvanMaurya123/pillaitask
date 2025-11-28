import axiosClient from "@/lib/axiosClient";

const logoutAdmin = async () => {
  try {
    const response = await axiosClient.post("/admin/auth/logout");
    return response.data;
  } catch (error: unknown) {
    console.error("Error during login submission:", error);
    throw error;
  }
};

export default logoutAdmin;
