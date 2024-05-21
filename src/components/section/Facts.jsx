import { facts } from "@/data/data";
import FactCard from "../elements/FactCard";

const Facts = () => {
  return (
    <div
      className="container-xxl bg-primary fact py-5 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="container py-5 px-lg-5">
        <div className="row g-4">
          {facts.map((fact) => (
            <FactCard key={fact.id} fact={fact} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facts;
