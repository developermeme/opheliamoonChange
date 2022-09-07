import { useEffect, useState } from "react";

export const useTimer = (endDate: string) => {
  const [timeLeft, setTimeLeft] = useState<any>();
  const [over, setOver] = useState<string>("");

  const calculateTimeLeft = () => {
    var deadline = new Date(endDate).getTime();
    var now = new Date().getTime();
    var difference = deadline - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, "0"),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
          .toString()
          .padStart(2, "0"),
        minutes: Math.floor((difference / 1000 / 60) % 60)
          .toString()
          .padStart(2, "0"),
        seconds: Math.floor((difference / 1000) % 60)
          .toString()
          .padStart(2, "0"),
      };
      setTimeLeft(timeLeft);
    }
    if (difference < 0) {
      setOver("TimesUp !!!");
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      calculateTimeLeft();
    }, 1000);
    return () => clearTimeout(timeout);
  });

  return { timeLeft, over };
};
