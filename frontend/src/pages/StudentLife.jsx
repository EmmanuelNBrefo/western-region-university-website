import StudentLifeHero from "../sections/studentlife/StudentLifeHero";
import CampusLife from "../sections/studentlife/CampusLife";
import StudentActivities from "../sections/studentlife/StudentActivities";
import ClubsOrganizations from "../sections/studentlife/ClubsOrganizations";
import SportsRecreation from "../sections/studentlife/SportsRecreation";
import StudentSupportServices from "../sections/studentlife/StudentSupportServices";
import CampusFacilities from "../sections/studentlife/CampusFacilities";
import StudentLifeCTA from "../sections/studentlife/StudentLifeCTA";


function StudentLife() {

  return (

    <>
      <StudentLifeHero />
      <CampusLife />
      <StudentActivities />
      <ClubsOrganizations />
      <SportsRecreation />
      <StudentSupportServices />
      <CampusFacilities />
      <StudentLifeCTA />

    </>

  );

}


export default StudentLife;