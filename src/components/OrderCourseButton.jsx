import React from "react";

function OrderCourseButton({ variant = "default", onClick }) {
  const buttonClasses = `order-course-button ${variant}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      Begin vandaag nog! 👍
    </button>
  );
}

export default OrderCourseButton;
