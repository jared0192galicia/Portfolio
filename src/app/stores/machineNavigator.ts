import { createMachine, assign } from "xstate";

export const navigationMachine = createMachine({
  id: "navigation",
  initial: "about", // Cambia el estado inicial si lo deseas
  context: {
    section: "skills",
  },
  states: {
    about: {
      on: {
        GO_TO_PROJECTS: {
          target: "projects",
          actions: assign({ section: "projects" }),
        },
        GO_TO_SKILLS: {
          target: "skills",
          actions: [
            assign((context, event) => {
              console.log("Changing section to skills");
              return { section: "skills" };
            }),
          ],
        },
        GO_TO_CONTACT: {
          target: "contact",
          actions: assign({ section: "contact" }),
        },
        GO_TO_EXPERIENCE: {
          target: "experience",
          actions: assign({ section: "experience" }),
        },
      },
    },
    projects: {
      on: {
        GO_TO_PROJECTS: {
          target: "projects",
          actions: assign({ section: "projects" }),
        },
        GO_TO_SKILLS: {
          target: "skills",
          actions: assign({ section: "skills" }),
        },
        GO_TO_CONTACT: {
          target: "contact",
          actions: assign({ section: "contact" }),
        },
        GO_TO_EXPERIENCE: {
          target: "experience",
          actions: assign({ section: "experience" }),
        },
        GO_TO_ABOUT: {
          target: "experience",
          actions: assign({ section: "experience" }),
        },
      },
    },
    skills: {
      on: {
        GO_TO_PROJECTS: {
          target: "projects",
          actions: assign({ section: "projects" }),
        },
        GO_TO_CONTACT: {
          target: "contact",
          actions: assign({ section: "contact" }),
        },
        GO_TO_EXPERIENCE: {
          target: "experience",
          actions: assign({ section: "experience" }),
        },
        GO_TO_ABOUT: {
          target: "experience",
          actions: assign({ section: "experience" }),
        },
      },
    },
    contact: {
      on: {
        GO_TO_PROJECTS: {
          target: "projects",
          actions: assign({ section: "projects" }),
        },
        GO_TO_SKILLS: {
          target: "skills",
          actions: assign({ section: "skills" }),
        },
        GO_TO_EXPERIENCE: {
          target: "experience",
          actions: assign({ section: "experience" }),
        },
        GO_TO_ABOUT: {
          target: "experience",
          actions: assign({ section: "experience" }),
        },
      },
    },
    experience: {
      on: {
        GO_TO_PROJECTS: {
          target: "projects",
          actions: assign({ section: "projects" }),
        },
        GO_TO_SKILLS: {
          target: "skills",
          actions: assign({ section: "skills" }),
        },
        GO_TO_CONTACT: {
          target: "contact",
          actions: assign({ section: "contact" }),
        },
        GO_TO_ABOUT: {
          target: "experience",
          actions: assign({ section: "experience" }),
        },
      },
    },
  },
});
