import team1 from "@/assets/img/team-1.jpg";
import team2 from "@/assets/img/team-2.jpg";
import team3 from "@/assets/img/team-3.jpg";
import Image from "next/image";

const Team = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <p className="section-title text-secondary justify-content-center">
            <span></span>Our Team<span></span>
          </p>
          <h1 className="text-center mb-5">Our Team Members</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item bg-light rounded">
              <div className="text-center border-bottom p-4">
                <Image
                  src={team1}
                  alt="team"
                  className="img-fluid rounded-circle mb-4"
                />
                <h5>John Doe</h5>
                <span>CEO & Founder</span>
              </div>
              <div className="d-flex justify-content-center p-4">
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item bg-light rounded">
              <div className="text-center border-bottom p-4">
                <Image
                  src={team2}
                  alt="team"
                  className="img-fluid rounded-circle mb-4"
                />
                <h5>Jessica Brown</h5>
                <span>Web Designer</span>
              </div>
              <div className="d-flex justify-content-center p-4">
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item bg-light rounded">
              <div className="text-center border-bottom p-4">
                <Image
                  src={team3}
                  alt="team"
                  className="img-fluid rounded-circle mb-4"
                />
                <h5>Tony Johnson</h5>
                <span>SEO Expert</span>
              </div>
              <div className="d-flex justify-content-center p-4">
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
