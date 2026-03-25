import React, { useEffect, useRef, useState } from "react";

const FadeIn = ({
  children,
  delay = 0,
  duration = 500,
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Animate once
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0)"
          : "translateY(20px)",
        transition: `all ${duration}ms ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;