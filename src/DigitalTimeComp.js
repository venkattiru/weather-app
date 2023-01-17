import React, { useState, useEffect } from 'react';
const DigitalTimeComp = () => {
  const [time, setTime] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });
  return (
    <>
      <p className="time-header">{time}</p>
    </>
  );
};

export default DigitalTimeComp;
