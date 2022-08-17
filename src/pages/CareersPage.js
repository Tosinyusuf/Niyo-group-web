import CareersHome from "../components/careers/CareersHome";
import CareersImages from "../components/careers/CareersImages";
import CareersEmpowered from "../components/careers/CareersEmpowered";
import Benefits from "../components/careers/Benefits";
import JobVacancies from "../components/careers/JobVacancies";
import Join from "../components/home/JoinHome";

const CareersPage = () => {
  return (
    <>
      <CareersHome />
      <CareersImages />
      <CareersEmpowered />
      <Benefits />
      <JobVacancies />
      <Join />
    </>
  );
};

export default CareersPage;
