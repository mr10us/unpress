"use client";

import React, { useRef, useEffect } from "react";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

function Tilt({ children, refTarget, maxTilt = 5, maxShift = 0, className }) {
  const wrapperRef = useRef(null);
  const isTouchDevice = useIsTouchDevice();
  const observerRef = useRef(null);
  const isInView = useRef(false);
  const animationFrameRef = useRef(null);
  const coordsRef = useRef({ x: 0, y: 0, hasMoved: false });

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
      observerRef.current?.disconnect();
    };
  }, [refTarget]);

  useEffect(() => {
    if (isTouchDevice) return;
    if (!refTarget?.current || !wrapperRef.current) return;

    const container = refTarget.current;
    const tiltElement = wrapperRef.current;

    const update = () => {
      if (!isInView.current) {
        animationFrameRef.current = requestAnimationFrame(update);
        return;
      }

      const { x, y, hasMoved } = coordsRef.current;

      if (hasMoved) {
        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const offsetX = x - centerX;
        const offsetY = y - centerY;

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
          translate3d(${translateX}px, ${translateY}px, 0px)
        `;
        coordsRef.current.hasMoved = false;
      }

      animationFrameRef.current = requestAnimationFrame(update);
    };

    const handleMouseMove = (e) => {
      coordsRef.current.x = e.clientX;
      coordsRef.current.y = e.clientY;
      coordsRef.current.hasMoved = true;
    };

    const handleMouseLeave = () => {
      tiltElement.style.transition = "transform 0.3s ease";
      tiltElement.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        translate3d(0px, 0px, 0px)
      `;
      setTimeout(() => {
        if (tiltElement) tiltElement.style.transition = "";
      }, 300);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    animationFrameRef.current = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
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
