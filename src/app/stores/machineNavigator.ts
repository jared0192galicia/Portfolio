import { createMachine } from "xstate";

export const navigationMachine = createMachine({
  id: "navbar",
  initial: "about",
  states: {
    about: {
      on: {
        GO_TO_SKILLS: "skills",
        GO_TO_PROJECTS: "projects",
        GO_TO_EXPERIENCE: "experience",
        GO_TO_CONTACT: "contact",
      },
    },
    skills: {
      on: {
        GO_TO_ABOUT: "about",
        GO_TO_PROJECTS: "projects",
        GO_TO_EXPERIENCE: "experience",
        GO_TO_CONTACT: "contact",
      },
    },
    projects: {
      on: {
        GO_TO_ABOUT: "about",
        GO_TO_SKILLS: "skills",
        GO_TO_EXPERIENCE: "experience",
        GO_TO_CONTACT: "contact",
      },
    },
    experience: {
      on: {
        GO_TO_ABOUT: "about",
        GO_TO_SKILLS: "skills",
        GO_TO_PROJECTS: "projects",
        GO_TO_CONTACT: "contact",
      },
    },
    contact: {
      on: {
        GO_TO_ABOUT: "about",
        GO_TO_SKILLS: "skills",
        GO_TO_PROJECTS: "projects",
        GO_TO_EXPERIENCE: "experience",
      },
    },
  },
});
