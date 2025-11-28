import submitAdmissionEnquiry from "@/api/admission-form/submitAdmissionEnquiry";
import AdmissionFormType from "@/app/types/admissionForm";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const AdmissionForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<AdmissionFormType>();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedCurrentState = watch("state");
  const selectedProgram = watch("program");

  const statesWithCities: Record<string, string[]> = {
    Maharashtra: [
      "Mumbai",
      "Pune",
      "Nagpur",
      "Nashik",
      "Aurangabad",
      "Solapur",
      "Thane",
      "Kolhapur",
    ],
    Karnataka: [
      "Bengaluru",
      "Mysuru",
      "Mangaluru",
      "Hubli",
      "Belagavi",
      "Shivamogga",
      "Davangere",
      "Udupi",
    ],
    Gujarat: [
      "Ahmedabad",
      "Surat",
      "Vadodara",
      "Rajkot",
      "Gandhinagar",
      "Bhavnagar",
      "Junagadh",
      "Anand",
    ],
    Rajasthan: [
      "Jaipur",
      "Udaipur",
      "Jodhpur",
      "Kota",
      "Ajmer",
      "Alwar",
      "Bikaner",
      "Sikar",
    ],
    TamilNadu: [
      "Chennai",
      "Coimbatore",
      "Madurai",
      "Salem",
      "Trichy",
      "Tirunelveli",
      "Erode",
      "Vellore",
    ],
  };

  const programList = [
    "Computer Science Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electronics & Telecommunication",
    "Chemical Engineering",
    "AI & Machine Learning",
    "Robotics & Automation",
  ];

  const handleAdmissionSubmit: SubmitHandler<AdmissionFormType> = async (
    data
  ) => {
    try {
      setIsSubmitting(true);
      const response = await submitAdmissionEnquiry(data);
      console.log("Admission form submitted successfully: ", response);
      toast.success("Form submitted successfully!");
    } catch (error: unknown) {
      console.error("Error submitting admission form: ", error);
      toast.error("Failed to submit the form. Please try again.");
    } finally {
      setIsSubmitting(false);
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleAdmissionSubmit)}
      className="rounded-2xl max-h-screen overflow-y-scroll hide-scrollbar w-[320px] overflow-hidden bg-white"
    >
      <h3 className="bg-[#BE283C] py-2.5 px-[25px] font-semibold text-white text-xl text-center">
        Enquire Now / Apply Now
      </h3>
      <div className="flex flex-col gap-3 py-2.5 px-[25px] w-full">
        <div className="space-y-2">
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="Enter Name *"
            className="px-1.5 text-[#888] w-full border-b outline-none border-b-[#d8d8d8] h-[38px] text-[13px]"
          />
          {errors?.name && (
            <p className="text-red-500 text-sm">{errors?.name?.message}</p>
          )}
        </div>
        {/* email */}
        <div className="space-y-2">
          <input
            type="text"
            {...register("email", {
              required: "Email is required",
              validate: (value) =>
                /^\S+@\S+\.\S+$/.test(value) || "Invalid email address",
            })}
            placeholder="Enter Email *"
            className="px-1.5 text-[#888] w-full border-b outline-none border-b-[#d8d8d8] h-[38px] text-[13px]"
          />
          {errors?.email && (
            <p className="text-red-500 text-sm">{errors?.email?.message}</p>
          )}
        </div>
        {/* mobile number */}
        <div className="space-y-2">
          <input
            type="text"
            {...register("phone", {
              required: "Phone number is required",
              validate: (value) =>
                /^(?:\+91|91)?[6-9]\d{9}$/.test(value) ||
                "Enter a valid Indian mobile number",
            })}
            placeholder="Enter Mobile Number *"
            className="px-1.5 text-[#888] w-full border-b outline-none border-b-[#d8d8d8] h-[38px] text-[13px]"
          />
          {errors?.phone && (
            <p className="text-red-500 text-sm">{errors?.phone?.message}</p>
          )}
        </div>

        {/* state and city */}
        <div className="w-full flex items-center gap-3">
          {/* state */}
          <div className="space-y-2">
            <select
              {...register("state", { required: "State is required" })}
              defaultValue=""
              className="px-1.5 text-[#888] w-full border-b outline-none border-b-[#d8d8d8] h-[38px] text-[13px]"
            >
              <option value="" disabled>
                Select State *
              </option>

              {Object.keys(statesWithCities).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>

            {errors?.state && (
              <p className="text-red-500 text-sm">{errors?.state?.message}</p>
            )}
          </div>

          {/* city */}
          <div className="space-y-2">
            <select
              {...register("city", { required: "City is required" })}
              defaultValue=""
              className={`px-1.5 text-[#888] w-full border-b outline-none border-b-[#d8d8d8] h-[38px] text-[13px] ${!selectedCurrentState && "cursor-not-allowed"
                }`}
            >
              <option value="" disabled>
                Select City *
              </option>

              {selectedCurrentState &&
                statesWithCities[selectedCurrentState]?.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>

            {errors?.city && (
              <p className="text-red-500 text-sm">{errors?.city?.message}</p>
            )}
          </div>
        </div>

        {/* program */}
        <div className="space-y-2">
          <select
            {...register("program", { required: "Program is required" })}
            defaultValue=""
            className="px-1.5 text-[#888] w-full border-b outline-none border-b-[#d8d8d8] h-[38px] text-[13px]"
          >
            <option value="" disabled>
              Select Program *
            </option>
            <option value="Engineering & Technology">
              Engineering & Technology
            </option>

            <option value="Management (BBA / MBA)">
              Management (BBA / MBA)
            </option>

            <option value="Computer Applications (BCA / MCA)">
              Computer Applications (BCA / MCA)
            </option>

            <option value="Science (B.Sc / M.Sc)">Science (B.Sc / M.Sc)</option>

            <option value="Commerce (B.Com / M.Com)">
              Commerce (B.Com / M.Com)
            </option>

            <option value="Pharmacy">Pharmacy</option>

            <option value="Law (BA LLB / BBA LLB)">
              Law (BA LLB / BBA LLB)
            </option>

            <option value="Design (B.Des / M.Des)">
              Design (B.Des / M.Des)
            </option>
          </select>
          {errors?.program && (
            <p className="text-red-500 text-sm">{errors?.program?.message}</p>
          )}
        </div>

        {/* course */}
        <div className="space-y-2">
          <select
            {...register("course", { required: "Course is required" })}
            defaultValue=""
            className="px-1.5 text-[#888] w-full border-b outline-none border-b-[#d8d8d8] h-[38px] text-[13px]"
          >
            <option value="" disabled>
              Select Course *
            </option>

            {selectedProgram && (
              <option value={selectedProgram}>{selectedProgram}</option>
            )}
          </select>
          {errors?.course && (
            <p className="text-red-500 text-sm">{errors?.course?.message}</p>
          )}
        </div>

        {/* check box */}
        <div className="space-y-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register("agree", {
                required: "You must agree before submitting",
              })}
            />
            <p className="text-xs text-[#888] tracking-[0.6px]">
              I agree to receive information regarding my submitted enquiry by
              signing up on MIT-WPU *
            </p>
          </label>

          {errors.agree && (
            <p className="text-red-500 text-sm">{errors.agree.message}</p>
          )}
        </div>

        <button
          className={cn(
            "bg-[#BE283C] border inline-flex items-center gap-2 my-4 text-white border-[#d62832] text-[15px] uppercase font-medium tracking-[0.5px] rounded-[31px] py-[6] px-[40] h-[45px] cursor-pointer  transition-colors duration-500 w-fit self-center",
            isSubmitting
              ? "pointer-events-none opacity-50"
              : "hover:bg-[#be283cc7]"
          )}
        >
          Submit{" "}
          {isSubmitting && (
            <svg
              className="animate-spin h-5 w-5 text-white"
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
  );
};

export default AdmissionForm;
