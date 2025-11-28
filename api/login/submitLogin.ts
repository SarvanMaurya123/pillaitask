import { userLoginForm } from "@/app/types/admin/adminLoginForm";
import axiosClient from "@/lib/axiosClient";


const submitLogin = async (data: userLoginForm) => {
    try {
        const response = await axiosClient.post("/admin/auth/login", data);
        return response.data;
    } catch (error: unknown) {
        console.error("Error during login submission:", error);
        throw error;
    }
};

export default submitLogin;