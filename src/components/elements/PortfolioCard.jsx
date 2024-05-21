import Image from "next/image";
import React from "react";

const PortfolioCard = ({ portfolio }) => {
  const { title, category, image } = portfolio;
  return (
    <div
      className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="rounded overflow-hidden">
        <div className="position-relative overflow-hidden">
          <Image src={image} alt="portfolio-1" className="img-fluid w-100" />
          <div className="portfolio-overlay">
            <a
              className="btn btn-square btn-outline-light mx-1"
              href="img/portfolio-1.jpg"
              data-lightbox="portfolio"
            >
              <i className="fa fa-eye"></i>
            </a>
            <a className="btn btn-square btn-outline-light mx-1" href="">
              <i className="fa fa-link"></i>
            </a>
          </div>
        </div>
        <div className="bg-light p-4">
          <p className="text-primary fw-medium mb-2">{category}</p>
          <h5 className="lh-base mb-0">{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
