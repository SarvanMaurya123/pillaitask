import RegisterFormValues from "@/app/types/admin/adminSignupForm";
import axiosClient from "@/lib/axiosClient";

const submitSignup = async (data: RegisterFormValues) => {
    try {
        const response = await axiosClient.post("/admin/auth/signup", data);
        return response.data;
    } catch (error: unknown) {
        console.error("Unexpected error during signup:", error);
        throw new Error("An unexpected error occurred");
    }
};

export default submitSignup;
