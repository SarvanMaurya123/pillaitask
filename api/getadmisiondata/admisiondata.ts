import axiosClient from "@/lib/axiosClient";

const GetAdmisionData = async () => {
    try {
        const response = await axiosClient.get("/admin/auth/getadmisiondata");
        return response.data;
    } catch (error: unknown) {
        console.error("Error fetching admission data: ", error);
        throw error;
    }
};

export default GetAdmisionData;
