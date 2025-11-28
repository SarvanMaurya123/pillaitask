"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { EyeCloseSvg, EyeOpenSvg, LoaderSvg } from "@/public/form/formSvg";
import submitLogin from "@/api/login/submitLogin";
import { useRouter } from "next/navigation";

interface LoginFormType {
  email: string;
  password: string;
}

const AdminLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const onSubmit: SubmitHandler<LoginFormType> = async (data) => {
    try {
      setIsSubmitting(true);
      const res = await submitLogin(data);
      toast.success(res.message || "Logged in successfully!");
      router.push("/admin/dashboard");
    } catch (error: unknown) {
      toast.error("Login failed. Try again.");
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
          Admin Login
        </h3>

        <div className="flex flex-col gap-4 py-4 px-[25px]">
          {/* Email */}
          <div className="space-y-1.5">
            <input
              type="text"
              {...register("email", {
                required: "Email is required",
                validate: (v) => /^\S+@\S+\.\S+$/.test(v) || "Invalid email",
              })}
              placeholder="Enter Email *"
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
              {...register("password", { required: "Password is required" })}
              placeholder="Enter Password *"
              className="px-1.5 pr-8 text-[#555] w-full border-b border-b-[#d8d8d8] outline-none h-[38px] text-[13px]"
            />

            {/* Eye toggle */}
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

          {/* Submit Button */}
          <button
            className={cn(
              "bg-[#BE283C] border text-white border-[#d62832] text-[15px] uppercase font-medium rounded-[31px] py-[6] px-[40] h-[45px] cursor-pointer  transition duration-300 w-fit self-center mt-3",
              isSubmitting
                ? "cursor-not-allowed opacity-60"
                : "hover:bg-[#be283cc7]"
            )}
          >
            Login
            {isSubmitting && <LoaderSvg />}
          </button>

          {/* Register Link */}
          <p className="text-center text-[13px] text-[#555] mt-1">
            Don&apos;t have an account?{" "}
            <a
              href="/admin/register"
              className="text-[#BE283C] font-semibold hover:underline"
            >
              Click here to register
            </a>
          </p>
        </div>
      </form>
    </section>
  );
};

export default AdminLoginForm;
