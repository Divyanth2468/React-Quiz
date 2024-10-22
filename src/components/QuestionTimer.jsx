import { useState, useEffect } from "react";

export default function ProgressBar({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemianingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemianingTime((prevTime) => {
        return prevTime - 100;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <progress
      id="question-time"
      value={remainingTime}
      max={timeout}
      className={mode}
    />
  );
}
