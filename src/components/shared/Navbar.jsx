"use client";
import { useEffect, useState } from "react";
import PillButton from "../elements/PillButton";
import Logo from "../elements/Logo";
import { navData } from "@/data/data";

const Navbar = () => {
  console.log(navData);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container-xxl position-relative p-0">
      <nav
        className={`navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 ${
          isSticky ? "sticky-top shadow-sm" : ""
        }`}
      >
        <a href="" className="navbar-brand p-0">
          <Logo />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto py-0">
            {navData.map((nav) => (
              <a
                key={nav.id}
                href={nav.link}
                className="nav-item nav-link text-capitalize"
              >
                {nav.title}
              </a>
            ))}
          </div>
          <PillButton>Get Started</PillButton>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
