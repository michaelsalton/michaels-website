import React from 'react';
import { FaArrowDown } from 'react-icons/fa'; // You may need to install the 'react-icons' library

function ScrollArrow({ targetId }) {
  const scrollToSection = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="scroll-arrow" onClick={scrollToSection}>
      <FaArrowDown />
    </div>
  );
}

export default ScrollArrow;
