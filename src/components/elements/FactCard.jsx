"use client";

import CountUp from "react-countup";

const FactCard = ({ fact }) => {
  const { title, count, icon } = fact;
  return (
    <div
      className="col-md-6 col-lg-3 text-center wow fadeIn"
      data-wow-delay="0.1s"
    >
      <span className="fs-1 text-secondary mb-3">{icon}</span>
      <h1 className="text-white mb-2">
        <CountUp start={0} end={count} duration={5} separator="," />
      </h1>
      <p className="text-white mb-0">{title}</p>
    </div>
  );
};

export default FactCard;
