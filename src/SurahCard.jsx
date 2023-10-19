import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaBackward, FaForward } from "react-icons/fa";

const SurahCard =  ({ name, id, isActive, onClick, setActiveCardId }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioDuration, setAudioDuration] = useState(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
      setActiveCardId(id)
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 5; // Go back 5 seconds
  };

  const skipForward = () => {
    audioRef.current.currentTime += 5; // Skip forward 5 seconds
  };

  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", () => {
      setAudioCurrentTime(audioRef.current.currentTime);
    });

    audioRef.current.addEventListener("loadedmetadata", () => {
      setAudioDuration(audioRef.current.duration);
    });
  }, []);

  if (isPlaying) {
    if (Math.floor(audioCurrentTime) === Math.floor(audioDuration)) {
      // make it like after complete surah 001, next play 002 then 003 ,,,,,,continue 114 and then again 001
    }
  }
  const toBn = n => n?.replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d])
  return (
    <div
      className={`relative cursor-pointer  text-black overflow-clip ${
        isActive ? " bg-green-700 text-white rounded-2xl border border-white" : "bg-glass-cs"
      }`}
      onClick={() => onClick(id)}
    >
      <div className="flex justify-between items-center w-full p-4 rounded-md">
        <div className="flex gap-3 items-center justify-center">
          <div className="-ml-6 bg-green-600 border border-white text-white min-w-[55px] min-h-[50px]  font-bold  rounded-e-full flex items-center justify-center">
            <span className="text-xl">{toBn(parseInt(id, 10).toString())}</span>
          </div>
          <h1 className="text-xl ">{name}</h1>
        </div>
        <div>
          <audio
            ref={audioRef}
            src={`https://server12.mp3quran.net/hkm/${id}.mp3`}
            onEnded={handleAudioEnded}
          />
          <div className="flex gap-2">
            <button
              className="text-red-500 w-8 h-8 text-center flex justify-center items-center rounded-full border shadow-md bg-white"
              onClick={skipBackward}
            >
              <FaBackward />
            </button>
            <button
              className="text-red-500 w-8 h-8 text-center flex justify-center items-center rounded-full border shadow-md bg-white"
              onClick={togglePlay}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button
              className=" text-red-500 w-8 h-8 text-center flex justify-center items-center rounded-full border shadow-md bg-white"
              onClick={skipForward}
            >
              <FaForward />
            </button>
          </div>
        </div>
      </div>
      <div
        className="h-2 bg-white rounded-full absolute bottom-0 left-0"
        style={{ width: `${(audioCurrentTime / audioDuration) * 100}%` }}
      />
    </div>
  );
};

export default SurahCard;
