
"use client";

import Startheader from "@/src/components/starting/startheader"
import Name from "@/src/components/starting/name"
import Selectclass from "@/src/components/starting/selectclass"
import RoutineAI from "@/src/components/starting/routineai"

const Home = () => {
  return (
    <>
      <Startheader/>
      <Name/>
      <Selectclass/>
      <RoutineAI/>
    </>
  );
};

export default Home;
