import React, { useState, useEffect } from 'react';

const Livetime = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return <p>{currentTime}</p>;
};

export default Livetime;
