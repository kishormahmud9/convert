"use client";
import Image from "next/image";
import aboutImage from "@/assets/img/about.png";
import Skill from "../elements/Skill";
import { skills } from "@/data/data";

const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <p className="section-title text-secondary">
              About Us<span></span>
            </p>
            <h1 className="mb-5">
              #1 Digital solution with 10 years of experience
            </h1>
            <p className="mb-4">
              Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
              labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem
              sit clita duo justo eirmod magna dolore erat amet
            </p>
            {skills.map((skill) => (
              <Skill key={skill.id} skill={skill} />
            ))}
            <a
              href=""
              className="btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3"
            >
              Read More
            </a>
          </div>
          <div className="col-lg-6">
            <Image
              src={aboutImage}
              className="img-fluid wow zoomIn"
              alt={"About Us"}
              data-wow-delay="0.5s"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
