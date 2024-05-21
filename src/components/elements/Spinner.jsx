"use client";
import { reuleaux } from "ldrs";
import React, { useEffect, useState } from "react";

reuleaux.register();

const Spinner = () => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 1000); // Adjust the timeout as needed

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    showSpinner && (
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <l-reuleaux
          size="100"
          stroke="7"
          stroke-length="0.2"
          bg-opacity="0.2"
          speed="1.5"
          color="#6222cc"
        ></l-reuleaux>
      </div>
    )
  );
};

export default Spinner;
