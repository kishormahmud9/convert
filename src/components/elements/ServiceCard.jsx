import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { title, details, icon } = service;
  return (
    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="service-item d-flex flex-column text-center rounded">
        <div className="service-icon flex-shrink-0">
          <span className="fs-2">{icon}</span>
        </div>
        <h5 className="mb-3">{title}</h5>
        <p className="m-0">{details}</p>
        <a className="btn btn-square" href="">
          <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
