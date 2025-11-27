import AdmissionFormType from "@/app/types/admissionForm";
import axiosClient from "@/lib/axiosClient";

const submitAdmissionEnquiry = async (data: AdmissionFormType) => {
  try {
    const respnse = await axiosClient.post("/submit-admission-enquiry", data);
    return respnse.data;
  } catch (error: unknown) {
    console.error("Error submitting admission enquiry: ", error);
    throw error;
  }
};

export default submitAdmissionEnquiry;
