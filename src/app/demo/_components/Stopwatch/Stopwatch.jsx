"use client";

import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

export const Stopwatch = forwardRef((props, ref) => {
  const [elapsed, setElapsed] = useState(0); // миллисекунды
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);

  useImperativeHandle(ref, () => ({
    start() {
      if (!running) {
        startTimeRef.current = Date.now() - elapsed;
        setRunning(true);
      }
    },
    stop() {
      if (running) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setRunning(false);
      }
    },
    reset() {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setElapsed(0);
      setRunning(false);
    },
  }));

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setElapsed(Date.now() - startTimeRef.current);
      }, 33); // ~30 FPS
    }

    return () => clearInterval(intervalRef.current);
  }, [running]);

  const totalSeconds = Math.floor(elapsed / 1000);
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
    2,
    "0"
  );
  const secs = String(totalSeconds % 60).padStart(2, "0");
  const millis = String(Math.floor((elapsed % 1000) / 10)).padStart(2, "0");

  return (
    <div
      className="card !bg-transparent backdrop-brightness-50 after:!content-none leading-normal text-4xl sm:text-8xl lg:text-[180px] tabular-nums flex items-center justify-center gap-4"
      style={{
        WebkitTextStroke: "1px var(--color-primary)",
        WebkitTextFillColor: "transparent",
        fontFamily: "sans-serif",
      }}
    >
      <span>{minutes}</span>
      <p>:</p>
      <span>{secs}</span>
      <p>:</p>
      <span>{millis}</span>
    </div>
  );
});
