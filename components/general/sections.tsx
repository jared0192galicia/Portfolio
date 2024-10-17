"use client";
import About from "../section/about";
import Experience from "@/components/section/experience";
import Projects from "@/components/section/projects";
import Skills from "../section/skills";
import Where from "../utilities/where";
import ContactMe from "../section/contact";

export default function Sections({ state }: any) {
  return (
    <section className="md:w-[65vw] md:flex my-0 mx-auto">
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
    </section>
  );
}
