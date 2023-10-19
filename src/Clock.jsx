import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');
  const toBn = n => n?.replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d])

  const getCurrentTimeAndDate = () => {
    const now = new Date();
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const time = `${toBn(hours)}:${toBn(minutes)}:${toBn(seconds)}`;
    
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear().toString()
    const date = `${toBn(day)}-${toBn(month)}-${toBn(year)}`;
    
    setCurrentDateTime(<p className='bg-[#c2ebbe52] px-10 rounded-md shadow-sm text-center max-w-[410px] mx-auto'> সময় : {time} <br/> তারিখ : {date} </p>);
  };

  useEffect(() => {
    // Call getCurrentTimeAndDate to set the initial time and date
    getCurrentTimeAndDate();
    
    // Update the time and date every second
    const intervalId = setInterval(getCurrentTimeAndDate, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <h1 className=' p-2 text-center text-2xl'>{currentDateTime}</h1>
    </div>
  );
};

export default Clock;
