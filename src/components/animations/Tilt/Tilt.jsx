"use client";

import React, { useRef, useEffect } from "react";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

export default function Tilt({ children, maxTilt = 5, maxShift = 0, className }) {
  const ref = useRef(null);
  const isTouchDevice = useIsTouchDevice();

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      const container = ref.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const offsetX = e.clientX - centerX;
      const offsetY = e.clientY - centerY;

      const percentX = offsetX / (rect.width / 2); // -1 to 1
      const percentY = offsetY / (rect.height / 2);

      const rotateX = Math.max(-maxTilt, Math.min(maxTilt, -percentY * maxTilt));
      const rotateY = Math.max(-maxTilt, Math.min(maxTilt, percentX * maxTilt));

      const translateX = Math.max(-maxShift, Math.min(maxShift, percentX * maxShift));
      const translateY = Math.max(-maxShift, Math.min(maxShift, percentY * maxShift));

      container.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateX(${translateX}px)
        translateY(${translateY}px)
      `;
    };

    const handleMouseLeave = () => {
      const container = ref.current;
      if (container) {
        container.style.transition = "transform 0.3s ease";
        container.style.transform = `
          perspective(1000px)
          rotateX(0deg)
          rotateY(0deg)
          translateX(0px)
          translateY(0px)
        `;
        setTimeout(() => {
          if (container) container.style.transition = "";
        }, 300);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [maxTilt, maxShift, isTouchDevice]);

  return (
    <div
      ref={ref}
      style={{
        display: "inline-block",
        willChange: "transform",
        transition: "transform 0.1s ease-out",
      }}
      className={className}
    >
      {children}
    </div>
  );
}

