import AdmissionFormType from "@/app/types/admissionForm";
import axiosClient from "@/lib/axiosClient";
import convertProgram from "@/utils/convertProgram";

const submitAdmissionEnquiry = async (data: AdmissionFormType) => {
  try {
    const payload = {
      ...data,
      program: convertProgram(data.program),
    };

    const respnse = await axiosClient.post(
      "/submit-admission-enquiry",
      payload
    );
    return respnse.data;
  } catch (error: unknown) {
    console.error("Error submitting admission enquiry: ", error);
    throw error;
  }
};

export default submitAdmissionEnquiry;
