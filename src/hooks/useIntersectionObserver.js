import { useEffect } from "react";

const observersMap = new Map();

let observer;

function getObserver() {
  if (observer) return observer;

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const callback = observersMap.get(entry.target);
      if (entry.isIntersecting && callback) {
        callback();
        observer.unobserve(entry.target);
        observersMap.delete(entry.target);
      }
    });
  }, {
    threshold: 0.1,
  });

  return observer;
}

export default function useIntersectionObserver(ref, onVisible) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = getObserver();
    observersMap.set(el, onVisible);
    observer.observe(el);

    return () => {
      observer.unobserve(el);
      observersMap.delete(el);
    };
  }, [ref, onVisible]);
}
