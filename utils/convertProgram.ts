const convertProgram = (value: string) => {
  const programs: Record<string, string> = {
    "Engineering & Technology": "Engineering_and_Technology",
    "Management (BBA/MBA)": "Management_BBA_MBA",
    "Computer Applications (BCA/MCA)": "Computer_Applications_BCA_MCA",
    "Science (BSc/MSc)": "Science_BSc_MSc",
    "Commerce (BCom/MCom)": "Commerce_BCom_MCom",
    Pharmacy: "Pharmacy",
    "Law (BA LLB / BBA LLB)": "Law_BA_LLB_BBA_LLB",
    "Design (BDes/MDes)": "Design_BDes_MDes",
  };

  return programs[value] || null;
};

export default convertProgram;
