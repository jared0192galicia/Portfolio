import cn from "@/service/clsx";
import Accordion from "../utilities/accordion";
import Animate from "@/utils/animation";

export default function Skills() {
  const baseClassP: string = "text-white font-extaligth md:w-[500px]";
  return (
    <section className="flex justify-center my-5 md:w-full">
      <div className="w-11/12 borde rounded-lg md md:flex flex-col gap-4 md:w-[500px]">
        <Animate>
          <Accordion title="Frontend Development">
            <section className={cn(baseClassP)}>
              <p>TypeScript</p>
              <p>Tailwind</p>
              <p>Zustand</p>
              <p>XState</p>
              <p>React</p>
              <p>Next</p>
              <p>PrimeReact</p>
              <p>Framer Motion</p>
            </section>
          </Accordion>
        </Animate>
        <Animate>
          <Accordion title="Backend Development">
            <section className={cn(baseClassP)}>
              <p>Express</p>
              <p>Hono</p>
              <p>Java</p>
              <p>PHP</p>
            </section>
          </Accordion>
        </Animate>
        <Animate>
          <Accordion title="Runtime Environments">
            <section className={cn(baseClassP)}>
              <p>NodeJs</p>
              <p>BunJs</p>
            </section>
          </Accordion>
        </Animate>
        <Animate>
          <Accordion title="Databases & ORM">
            <section className={cn(baseClassP)}>
              <p>PostgreSQL</p>
              <p>MongoDB</p>
              <p>Hibernate</p>
              <p>MySQL</p>
              <p>Drizzle</p>
              <p>Knex</p>
              <p>SQLite</p>
            </section>
          </Accordion>
        </Animate>
        <Animate>
          <Accordion title="DevOps, Deployment & Process Management">
            <section className={cn(baseClassP)}>
              <p>GitHub webhooks</p>
              <p>Nginx</p>
              <p>VPS</p>
            </section>
          </Accordion>
        </Animate>
        <Animate>
          <Accordion title="Infrastructure & OS">
            <section className={cn(baseClassP)}>
              <p>Windows Server</p>
              <p>Linux (Ubuntu, Debian, Fedora)</p>
            </section>
          </Accordion>
        </Animate>
        <Animate>
          <Accordion title="Tools & Utilities">
            <section className={cn(baseClassP)}>
              <p>Git / GitHub / Gitea</p>
              <p>Handlebars</p>
              <p>Insomnia</p>
              <p>Postman</p>
              <p>ESLint</p>
              <p>Figma</p>
              <p>Trello</p>
              {/* <p>PM2</p> */}
            </section>
          </Accordion>
        </Animate>
        {/* <Animate>
          <Accordion title="Testing & QA">
            <section className={cn(baseClassP)}>
              <p>Playwright</p>
              <p>Cypress</p>
            </section>
          </Accordion>
        </Animate> */}
        <Animate>
          <Accordion title=" Desktop Development">
            <section className={cn(baseClassP)}>
              <p>Tauri</p>
              <p>Python</p>
              <p>Java</p>
              <p>C</p>
            </section>
          </Accordion>
        </Animate>
      </div>
    </section>
  );
}
