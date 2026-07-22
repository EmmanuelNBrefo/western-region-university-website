import AdmissionsHero from "../sections/admissions/AdmissionsHero";
import WhyChooseWRU from "../sections/admissions/WhyChooseWRU";
import AdmissionProcess from "../sections/admissions/AdmissionProcess";
import UndergraduateAdmission from "../sections/admissions/UndergraduateAdmission";
import GraduateAdmission from "../sections/admissions/GraduateAdmission";
import ProfessionalAdmission from "../sections/admissions/ProfessionalAdmission";
import RequiredDocuments from "../sections/admissions/RequiredDocuments";
import ApplicationInformation from "../sections/admissions/ApplicationInformation";
import AdmissionsCTA from "../sections/admissions/AdmissionsCTA";


function Admissions() {

  return (

    <>

      <AdmissionsHero />

      <WhyChooseWRU />

      <AdmissionProcess />

      <UndergraduateAdmission />

      <GraduateAdmission />

      <ProfessionalAdmission />

      <RequiredDocuments />

      <ApplicationInformation />

      <AdmissionsCTA />

    </>

  );

}


export default Admissions;