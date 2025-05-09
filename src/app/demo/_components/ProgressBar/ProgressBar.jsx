import { useEffect, useState } from "react";

const stages = ["searching", "gathering", "fact checking", "generation"];

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      const increment = Math.random() * 10 + 5;
      current = Math.min(current + increment, 100);
      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
      }
    }, 500 + Math.random() * 500);

    return () => clearInterval(interval);
  }, []);

  const stageThreshold = 100 / (stages.length - 1);

  return (
    <div className="max-w-xl mx-auto my-4 pb-10 w-full">
      <div className="grid items-center pb-3">
        <div
          className="progress-bar"
          style={{ "--progress": `${progress}%` }}
        ></div>

        <div className="flex justify-between row-start-1 col-start-1">
          {stages.map((label, index) => {
            const threshold = stageThreshold * index;
            const isActive = progress >= threshold;

            return (
              <div
                key={label}
                className={`w-fit progress-dot relative ${isActive ? "active" : ""}`}
              >
                <div className="w-10 h-10 bg-background mx-auto rounded-full text-lg text-white flex items-center"></div>
                <span className="absolute capitalize -bottom-7 text-gray-100 text-xs left-1/2 -translate-x-1/2 whitespace-nowrap">
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
