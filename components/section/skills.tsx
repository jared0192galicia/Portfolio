import cn from "@/service/clsx";
import Accordion from "../utilities/accordion";

export default function Skills() {
  const baseClassP: string = "text-white font-extaligth md:w-[500px]";
  return (
    <section className="flex justify-center my-5 md:w-full">
      <div className="w-11/12 borde rounded-lg md md:flex flex-col gap-4 md:w-[500px]">
        <Accordion title="Frontend Development">
          <section className={cn(baseClassP)}>
            <p>TypeScript</p>
            <p>Tailwind</p>
            <p>XState</p>
            <p>React</p>
            <p>Next</p>
          </section>
        </Accordion>
        <Accordion title="Backend Development">
          <section className={cn(baseClassP)}>
            <p>Express</p>
            <p>Hono</p>
            <p>Java</p>
          </section>
        </Accordion>
        <Accordion title="Runtime Environments">
          <section className={cn(baseClassP)}>
            <p>NodeJs</p>
            <p>BunJs</p>
          </section>
        </Accordion>
        <Accordion title="Databases & ORM">
          <section className={cn(baseClassP)}>
            <p>PostgreSQL</p>
            <p>MySQL</p>
            <p>Hibernate</p>
            <p>KNext</p>
          </section>
        </Accordion>
        <Accordion title="DevOps & Deployment">
          <section className={cn(baseClassP)}>
            <p>GitHub webhooks</p>
            <p>Nginx</p>
            <p>VPS</p>
          </section>
        </Accordion>
        <Accordion title="Tools & Utilities">
          <section className={cn(baseClassP)}>
            <p>Trello</p>
            <p>ESLint</p>
            <p>Git / GitHub</p>
            <p>Postman</p>
            <p>Insomnia</p>
          </section>
        </Accordion>
      </div>
    </section>
  );
}
