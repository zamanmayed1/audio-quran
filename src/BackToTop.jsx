import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`${
        isVisible ? "block" : "hidden"
      } fixed bottom-44 right-44 bg-blue-500 text-white p-4 rounded-full shadow-md transition-opacity duration-300 ease-in-out`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTop;
