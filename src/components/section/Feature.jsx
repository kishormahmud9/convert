import { features } from "@/data/data";
import FeatureCard from "../elements/FeatureCard";

const Feature = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="row g-4">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
