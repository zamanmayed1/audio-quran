import React, { useEffect, useState } from "react";
import surah from "../surah.json";
import SurahCard from "./SurahCard";
import BackToTop from "./BackToTop";
import Header from "./Header";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [activeCardId, setActiveCardId] = useState(null);

  // Function to handle changes in the search input
  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  // Filter the surah array based on the search input
  const filteredSurah = surah.filter((s) =>
    s.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const [timeOfDay, setTimeOfDay] = useState("morning"); // Default to morning

  useEffect(() => {
    const updateBackground = () => {
      const currentTime = new Date().getHours();
      if (currentTime >= 6 && currentTime < 12) {
        setTimeOfDay("morning");
      } else if (currentTime >= 12 && currentTime < 18) {
        setTimeOfDay("afternoon");
      } else if (currentTime >= 18 && currentTime < 21) {
        setTimeOfDay("evening");
      } else {
        setTimeOfDay("night");
      }
    };

    updateBackground();
    // Update the background every minute
    const interval = setInterval(updateBackground, 60000);

    return () => clearInterval(interval);
  }, []);

  // Function to handle clicking on a SurahCard
  const handleCardClick = (id) => {
    setActiveCardId(id);
  };

  return (
    <div
      className={`app ${timeOfDay} p-4 max-h-[100vh] overflow-y-hidden overflow-x-hidden`}
    >
      {/* Header */}
      <Header helper={{ handleSearchChange, searchInput }} />

      {/* Surah */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5  overflow-y-scroll overflow-x-hidden max-h-[80vh]">
        {filteredSurah.map((s) => (
          <SurahCard
            key={s.id}
            name={s.name}
            id={s.id}
            isActive={activeCardId === s.id}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
