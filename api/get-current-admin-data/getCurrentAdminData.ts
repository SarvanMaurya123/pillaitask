import axiosClient from "@/lib/axiosClient";

const getCurrentAdminData = async () => {
  try {
    const response = await axiosClient.get("/admin/get-current-admin-data");
    return response.data;
  } catch (error: unknown) {
    console.error("Error fetching admission data: ", error);
    throw error;
  }
};

export default getCurrentAdminData;
