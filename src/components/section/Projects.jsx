import portfolio1 from "@/assets/img/portfolio-1.jpg";
import portfolio2 from "@/assets/img/portfolio-2.jpg";
import portfolio3 from "@/assets/img/portfolio-3.jpg";
import portfolio4 from "@/assets/img/portfolio-4.jpg";
import portfolio5 from "@/assets/img/portfolio-5.jpg";
import portfolio6 from "@/assets/img/portfolio-6.jpg";
import { portfolios } from "@/data/data";
import Image from "next/image";
import PortfolioCard from "../elements/PortfolioCard";

const Projects = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <p className="section-title text-secondary justify-content-center">
            <span></span>Our Projects<span></span>
          </p>
          <h1 className="text-center mb-5">Recently Completed Projects</h1>
        </div>
        <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
          <div className="col-12 text-center">
            <ul className="list-inline mb-5" id="portfolio-flters">
              <li className="mx-2 active" data-filter="*">
                All
              </li>
              <li className="mx-2" data-filter=".first">
                Web Design
              </li>
              <li className="mx-2" data-filter=".second">
                Graphic Design
              </li>
            </ul>
          </div>
        </div>
        <div className="row g-4 portfolio-container">
          {portfolios.map((portfolio) => (
            <PortfolioCard key={portfolio.id} portfolio={portfolio} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
