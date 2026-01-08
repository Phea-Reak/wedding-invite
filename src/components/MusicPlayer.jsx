import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Music } from 'lucide-react';

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // 1. Define the play attempt function
    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        // If successful, remove the waiting listeners
        cleanupListeners();
      } catch (err) {
        console.log("Autoplay blocked. Waiting for user interaction...");
        setIsPlaying(false);
      }
    };

    // 2. Define the listener for user interaction (click, touch, scroll)
    const handleInteraction = () => {
      playAudio();
    };

    // 3. Helper to remove listeners once music starts
    const cleanupListeners = () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };

    // 4. Try to play immediately on refresh
    playAudio();

    // 5. If blocked, attach listeners to the whole document
    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction); // For mobile
    document.addEventListener('scroll', handleInteraction);     // For scrolling
    document.addEventListener('keydown', handleInteraction);

    // Cleanup on component unmount
    return () => {
      cleanupListeners();
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} src="song.mp3" loop />
      
      <button
        onClick={togglePlay}
        className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-105 animate-bounce-slow"
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? <Pause size={24} /> : <Music size={24} />}
      </button>
    </div>
  );
};