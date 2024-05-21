import { services } from "@/data/data";
import ServiceCard from "../elements/ServiceCard";

const Services = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <p className="section-title text-secondary justify-content-center">
            <span></span>Our Services<span></span>
          </p>
          <h1 className="text-center mb-5">What Solutions We Provide</h1>
        </div>
        <div className="row g-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
