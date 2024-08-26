import cn from "@/service/clsx";
import Accordion from "../utilities/accordion";
import Element from "../utilities/element";

export default function Skills() {
  const baseClassP: string = "text-white font-extaligth";
  return (
    <section className="flex justify-center mt-5">
      <div className="w-11/12 borde rounded-lg">
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
            <p>PostgresSQL</p>
            <p>MySQL</p>
            <p>Hibernate</p>
            <p>KNext</p>
          </section>
        </Accordion>
        <Accordion title="DevOps & Deployment">
          <section className={cn(baseClassP)}>
            <p>GitHub webhooks</p>
            <p>GitHub</p>
            <p>Git</p>
          </section>
        </Accordion>
        <Accordion title="Tools & Utilities">
          <section className={cn(baseClassP)}>
            <p>Prettier</p>
            <p>ESLint</p>
            <p>Peacok</p>
            <p>Npm</p>
          </section>
        </Accordion>
      </div>
    </section>
  );
}
