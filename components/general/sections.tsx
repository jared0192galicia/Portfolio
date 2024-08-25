"use client"
import About from "../section/about";
import { useMachine } from "@xstate/react";
import { navigationMachine } from "@/app/stores/machineNavigator";
import Experience from "@/components/section/experience";
import Projects from "@/components/section/projects";
import Skills from "../section/skills";
import { useEffect } from "react";

export default function Sections() {
  const [state, send] = useMachine(navigationMachine);
  
  useEffect(() => {
    console.log("El estado actual es:", state);
  }, [state.value]);
  useEffect(() => {
    console.log("El estado completo es:", state.value, state.context);
  }, [state.context]);


  return (
    <>
      {state.matches("about") && <About />}
      {state.matches("experience") && <Experience />}
      {state.matches("projects") && <Projects />}
      {state.matches("skills") && <Skills />}
    </>
  );
}
