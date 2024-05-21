import React from "react";

const FeatureCard = ({ feature }) => {
  const { title, description, icon } = feature;
  return (
    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
      <div className="feature-item bg-light rounded text-center p-4">
        <span className="fs-1 text-primary mb-4">{icon}</span>
        <h5 className="mb-3">{title}</h5>
        <p className="m-0">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
