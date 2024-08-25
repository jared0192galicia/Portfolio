"use client";
import About from "../section/about";
import Experience from "@/components/section/experience";
import Projects from "@/components/section/projects";
import Skills from "../section/skills";
import Where from "../utilities/where";

export default function Sections({ state }: any) {
  return (
    <>
      <Where condition={state.matches("about")}>
        <About />
      </Where>
      <Where condition={state.matches("experience")}>
        <Experience />
      </Where>
      <Where condition={state.matches("projects")}>
        <Projects />
      </Where>
      <Where condition={state.matches("skills")}>
        <Skills />
      </Where>
    </>
  );
}
