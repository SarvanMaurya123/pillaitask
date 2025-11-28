"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { EyeCloseSvg, EyeOpenSvg } from "@/public/form/formSvg";
import submitSignup from "@/api/signup/submitSignup";
import { useRouter } from "next/navigation";

interface RegisterFormType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const AdminRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormType>();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter();
  const onSubmit: SubmitHandler<RegisterFormType> = async (data) => {
    try {
      setIsSubmitting(true);

      console.log("Admin register data:", data);

      const response = await submitSignup(data);

      toast.success(response.message || "Registration successful!");
      router.push("/admin/login");
    } catch (error: any) {
      console.error("Signup Error:", error);
 
      toast.error(
        error?.message ||
        error?.response?.data?.message ||
        "Registration failed."
      );
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section className="w-full h-screen inline-flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-2xl w-[320px] shadow-lg overflow-hidden bg-white"
      >
        <h3 className="bg-[#BE283C] py-2.5 px-[25px] font-semibold text-white text-xl text-center">
          Admin Register
        </h3>

        <div className="flex flex-col gap-4 py-4 px-[25px]">
          {/* Name */}
          <div className="space-y-1.5">
            <input
              type="text"
              placeholder="Enter Name *"
              {...register("name", { required: "Name is required" })}
              className="px-1.5 text-[#555] w-full border-b border-b-[#d8d8d8] outline-none h-[38px] text-[13px]"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <input
              type="text"
              placeholder="Enter Email *"
              {...register("email", {
                required: "Email is required",
                validate: (v) => /^\S+@\S+\.\S+$/.test(v) || "Invalid email",
              })}
              className="px-1.5 text-[#555] w-full border-b border-b-[#d8d8d8] outline-none h-[38px] text-[13px]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-1.5 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password *"
              {...register("password", { required: "Password is required" })}
              className="px-1.5 pr-8 text-[#555] w-full border-b border-b-[#d8d8d8] outline-none h-[38px] text-[13px]"
            />

            {/* Eye button */}
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-2.5 cursor-pointer text-[#777] text-sm"
            >
              {showPassword ? <EyeCloseSvg /> : <EyeOpenSvg />}
            </span>

            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="space-y-1.5 relative">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password *"
              {...register("confirmPassword", {
                required: "Confirm your password",
                validate: (v) =>
                  v === watch("password") || "Passwords do not match",
              })}
              className="px-1.5 pr-8 text-[#555] w-full border-b border-b-[#d8d8d8] outline-none h-[38px] text-[13px]"
            />

            {/* Eye button */}
            <span
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-2 top-2.5 cursor-pointer text-[#777] text-sm"
            >
              {showConfirm ? <EyeCloseSvg /> : <EyeOpenSvg />}
            </span>

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            className={cn(
              "bg-[#BE283C] border border-[#d62832] text-[15px] uppercase font-medium rounded-[31px] py-[6] px-[40] h-[45px] cursor-pointer text-white  transition duration-300 w-fit self-center mt-3",
              isSubmitting
                ? "cursor-not-allowed opacity-60"
                : "hover:bg-[#be283cc7]"
            )}
          >
            Register
            {isSubmitting && (
              <svg
                className="animate-spin h-5 w-5 inline-block ml-2 text-white"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AdminRegisterForm;
