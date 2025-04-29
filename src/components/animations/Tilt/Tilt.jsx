"use client";

import React, { useRef, useEffect, forwardRef } from "react";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

function Tilt({ children, refTarget, maxTilt = 5, maxShift = 0, className }) {
  const wrapperRef = useRef(null);
  const isTouchDevice = useIsTouchDevice();
  const observerRef = useRef(null);
  const isInView = useRef(false);

  useEffect(() => {
    if (!refTarget?.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        isInView.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );

    observerRef.current.observe(refTarget.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [refTarget]);

  useEffect(() => {
    if (isTouchDevice) return;
    if (!refTarget?.current || !wrapperRef.current) return;

    const container = refTarget.current;
    const tiltElement = wrapperRef.current;

    const handleMouseMove = (e) => {
      if (!isInView.current) return;

      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const offsetX = e.clientX - centerX;
      const offsetY = e.clientY - centerY;

      const percentX = offsetX / (rect.width / 2);
      const percentY = offsetY / (rect.height / 2);

      const rotateX = Math.max(-maxTilt, Math.min(maxTilt, -percentY * maxTilt));
      const rotateY = Math.max(-maxTilt, Math.min(maxTilt, percentX * maxTilt));

      const translateX = Math.max(-maxShift, Math.min(maxShift, percentX * maxShift));
      const translateY = Math.max(-maxShift, Math.min(maxShift, percentY * maxShift));

      tiltElement.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateX(${translateX}px)
        translateY(${translateY}px)
      `;
    };

    const handleMouseLeave = () => {
      if (!isInView.current) return;

      tiltElement.style.transition = "transform 0.3s ease";
      tiltElement.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        translateX(0px)
        translateY(0px)
      `;
      setTimeout(() => {
        if (tiltElement) tiltElement.style.transition = "";
      }, 300);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [refTarget, maxTilt, maxShift, isTouchDevice]);

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{
        display: "inline-block",
        willChange: "transform",
        transition: "transform 0.1s ease-out",
      }}
    >
      {children}
    </div>
  );
}

export default Tilt;
