import React from "react";
import About from "../components/about/About";
import Who from "../components/about/Who";
import Priorities from "../components/about/Priorities";
import SeeTimeline from "../components/about/SeeTimeline";
import Timeline from "../components/about/Timeline";
import MeetTeam from "../components/about/MeetTeam";
import OpenRoles from "../components/about/OpenRoles";
import Press from "../components/about/Press";
import Join from "../components/home/JoinHome";

const AboutUs = () => {
  return (
    <>
      <About />
      <Who />
      <Priorities />
      <SeeTimeline />
      <Timeline />
      <MeetTeam />
      <Press />
      <OpenRoles />
      <Join />
    </>
  );
};

export default AboutUs;
