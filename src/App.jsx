// App.jsx
import { useState, useEffect } from "react";
import confetti from 'canvas-confetti';
import "./index.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: "50%", left: "70%" });
  const [noAttempts, setNoAttempts] = useState(0);
  const [yesButtonSize, setYesButtonSize] = useState(1);
  // const [showLoveNotes, setShowLoveNotes] = useState(false);
  const [currentNote, setCurrentNote] = useState(0);
  const [showCountdown, setShowCountdown] = useState(false);

  // Love notes that appear randomly
  const loveNotes = [
    "Every moment with you feels like magic Ofure✨",
    "Ofure mii, You make my heart smile 😊",
    "I fall for you more every single day Ife mii💕",
    "You're my favorite hello and hardest goodbye 🌸",
    "With you Ofure, I'm home 🏡",
    "You're the reason I believe in love Ofure💖",
    "My heart beats your name Ofure💓",
    "You're my today and all of my tomorrows 🌅",
    "You are my WIFEEEEEE Ofure",
    "I Love you so much OFURE EDIALE"
  ];

  // Relationship stats (customize these!)
  const relationshipStats = {
    daysTogether: Math.floor((new Date() - new Date('2025-02-12')) / (1000 * 60 * 60 * 24)), // Change start date
    memoriesMade: 1247,
    laughsShared: 9999,
    hugsGiven: 2847,
    "I love you's": 5621
  };



  const moveNoButton = () => {
    setNoAttempts((prev) => prev + 1);

    // Make YES button bigger each time they try to click NO
    setYesButtonSize((prev) => Math.min(prev + 0.15, 2.5));

    const maxMove = Math.min(300 + noAttempts * 40, 600);
    const angle = Math.random() * Math.PI * 2;
    const distance = 80 + Math.random() * maxMove;
    const newTop = `calc(50% + ${Math.sin(angle) * distance}px)`;
    const newLeft = `calc(70% + ${Math.cos(angle) * distance}px)`;
    setNoPosition({ top: newTop, left: newLeft });

    // Show a love note when they try to click NO
    // setShowLoveNotes(true);
    // setCurrentNote(Math.floor(Math.random() * loveNotes.length));
    // setTimeout(() => setShowLoveNotes(false), 4000);
  };

  const handleYes = () => {
    setShowModal(true);

    // Multiple confetti bursts
    const duration = 3000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      confetti({
        particleCount: 3,
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: ["#ec4899", "#f43f5e", "#d946ef", "#a855f7", "#f472b6"]
      });
    }, 50);

    // Open WhatsApp after a short delay
    
  };
const handleYess = ()=>{
  setTimeout(() => {
      const yourPhoneNumber = "2348135390524";
      const message = "I SAID YES baby! 💖 I'll be your every day Valentine! 🥰";
      const whatsappUrl = `https://wa.me/${yourPhoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }, 1500);
}
  // Floating hearts
  useEffect(() => {
    const container = document.getElementById("hearts");
    if (!container) return;

    const createHeart = () => {
      const heart = document.createElement("div");
      heart.className = "heart-float";
      heart.innerHTML = ["❤️", "💗", "💖", "💕", "🩷", "💓"][
        Math.floor(Math.random() * 6)
      ];
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 8 + Math.random() * 18 + "s";
      heart.style.animationDelay = "-" + Math.random() * 20 + "s";
      heart.style.fontSize = 1.2 + Math.random() * 2.5 + "rem";
      heart.style.opacity = 0.4 + Math.random() * 0.6;
      container.appendChild(heart);
      setTimeout(() => heart.remove(), 25000);
    };



    const interval = setInterval(createHeart, 400);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate love notes every 4 seconds
  useEffect(() => {
    const noteInterval = setInterval(() => {
      setCurrentNote((prev) => (prev + 1) % loveNotes.length);
    }, 4000);

    return () => clearInterval(noteInterval);
  }, [loveNotes.length]);

  // Romantic message that changes based on NO attempts
  const getNoButtonText = () => {
    if (noAttempts === 0) return "No 😢";
    if (noAttempts === 1) return "Are you sure? 🥺";
    if (noAttempts === 2) return "Really? 💔";
    if (noAttempts === 3) return "Please? 🙏";
    if (noAttempts === 4) return "Think again? 😭";
    if (noAttempts >= 5) return "I'll keep asking! 💕";
    return "No 😢";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 relative overflow-hidden pt-28">
      {/* Floating hearts background */}
      <div id="hearts" className="fixed inset-0 pointer-events-none z-0" />

      {/* Love note popup */}
      {/* Love note that's always visible - rotating through messages */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4">
        <div className="bg-white/95 backdrop-blur-sm px-8 py-4 rounded-full shadow-2xl border-4 border-pink-300 animate-fade-in">
          <p className="text-lg font-semibold text-pink-600 text-center">
            {loveNotes[currentNote]}
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-center space-y-8 max-w-2xl">
          <div className="space-y-4">
            {/* Sparkle animation on title */}
            <div className="relative inline-block">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
                Ofure mii,
              </h1>
              <div className="absolute -top-4 -right-4 text-4xl animate-spin-slow">✨</div>
              <div className="absolute -bottom-2 -left-4 text-3xl animate-bounce">💖</div>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
              Will you be my Valentine?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-medium">
              My favorite person in the whole universe 🌸
            </p>

            {/* Relationship stats preview */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg inline-block">
              <p className="text-sm text-gray-600 mb-2">Our journey together:</p>
              <div className="flex gap-6 text-center">
                <div>
                  <p className="text-2xl font-bold text-pink-600">{relationshipStats.daysTogether}</p>
                  <p className="text-xs text-gray-500">Days</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-rose-600">{relationshipStats.memoriesMade}</p>
                  <p className="text-xs text-gray-500">Memories</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-600">{relationshipStats.laughsShared}</p>
                  <p className="text-xs text-gray-500">Laughs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Button container */}
          <div className="relative h-80 w-full max-w-xl mx-auto">
            {/* YES button - grows bigger when NO is clicked */}
            <button
              style={{
                transform: `translate(-50%, -50%) scale(${yesButtonSize})`
              }}
              onClick={handleYes}
              className="absolute top-1/2 left-1/2 px-16 py-6 text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl shadow-2xl hover:scale-110 hover:shadow-pink-300 transition-all duration-300 z-10"
            >
              YES! 💕
            </button>

            {/* NO button */}
            <button
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
              onClick={(e) => e.preventDefault()}
              style={{
                position: "absolute",
                top: noPosition.top,
                left: noPosition.left,
                transform: "translate(-50%, -50%)",
                transition: "all 0.3s ease-out",
              }}
              className="px-8 py-4 text-xl font-bold bg-gray-200 text-gray-600 rounded-xl shadow-lg hover:bg-gray-300 transition-colors duration-200 whitespace-nowrap"
            >
              {getNoButtonText()}
            </button>
          </div>

          {/* Footer message */}
          <p className="text-lg text-gray-500 italic mt-8">
            I already know what you're gonna say... but I still want to hear it 💕
          </p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 p-8 text-center relative overflow-hidden">
              {/* Animated hearts in header */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-3xl animate-float-slow"
                    style={{
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.5}s`,
                      opacity: 0.3
                    }}
                  >
                    💖
                  </div>
                ))}
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 relative z-10">
                SHE SAID YESSS!!! 🎉💖
              </h2>
              <p className="text-xl text-white/90 font-medium relative z-10">
                My Valentine forever
              </p>
            </div>

            {/* Body */}
            <div className="p-8 space-y-6">
              <div className="text-center text-6xl mb-6 animate-heartbeat">💞</div>

              <p className="text-xl text-gray-700 leading-relaxed text-center">
                You are my safe place, my happy thought, my favorite
                notification, and now officially...{" "}
                <span className="font-bold text-pink-600">my Valentine</span>
              </p>

              {/* What I love about you section */}
              <div className="space-y-4 bg-pink-50 p-6 rounded-xl">
                <h3 className="text-center font-bold text-2xl text-pink-600 mb-4">
                  What I love about you 💝
                </h3>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💖</span>
                  <p className="text-gray-700">
                    <span className="font-semibold">Your laugh</span> makes bad
                    days disappear instantly
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🤗</span>
                  <p className="text-gray-700">
                    <span className="font-semibold">Your hugs</span> feel like
                    the best place in the world
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💝</span>
                  <p className="text-gray-700">
                    <span className="font-semibold">Your heart</span> is kinder
                    than anyone I've ever met
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✨</span>
                  <p className="text-gray-700">
                    <span className="font-semibold">You</span> are simply the
                    best thing that ever happened to me
                  </p>
                </div>
              </div>

              {/* Our Love Stats */}
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl">
                <h3 className="text-center font-bold text-2xl text-purple-600 mb-4">
                  Our Love by the Numbers 📊
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Object.entries(relationshipStats).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-white rounded-lg shadow">
                      <p className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                        {value.toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">{key}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Love Letter */}
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border-2 border-pink-200">
                <div className="text-center mb-4">
                  <span className="text-4xl">💌</span>
                </div>
                <p className="text-gray-700 leading-relaxed italic text-center">
                  "Every love story is beautiful, but ours is my favorite.
                  You're not just my Valentine today—you're my forever person.
                  Thank you for choosing me, for loving me, and for making
                  every day feel like a celebration. Here's to us, today and always."
                </p>
                <p className="text-right mt-4 font-semibold text-pink-600">
                  - Your forever Valentine 💕
                </p>
              </div>

              <p className="text-2xl text-center font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                I love you so much more than words ❤️
              </p>

              {/* Valentine's Day Promise */}
              <div className="text-center p-4 bg-yellow-50 rounded-lg border-2 border-yellow-200">
                <p className="text-sm text-gray-600">💍 My promise to you:</p>
                <p className="text-base font-medium text-gray-800 mt-2">
                  To love you more each day, to make you smile when you're sad,
                  to be your biggest cheerleader, and to always choose you 💖
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t flex gap-3 justify-center flex-wrap">
              <button
                onClick={() => {
                  setShowCountdown(true);
                  let count = 3;
                  const countInterval = setInterval(() => {
                    if (count > 0) {
                      confetti({
                        particleCount: 50,
                        spread: 60,
                        origin: { y: 0.7 }
                      });
                      count--;
                    } else {
                      clearInterval(countInterval);
                      setShowCountdown(false);
                    }
                  }, 500);
                }}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl flex items-center gap-2 hover:scale-105 transition"
              >
                🎆 Celebrate Again
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="px-8 py-3 bg-white border rounded-xl hover:bg-gray-100 transition"
              >
                Close
              </button>

              <button
                onClick={() => { handleYess();
                  confetti({ particleCount: 120, spread: 70 });
                  alert("Now screenshot this and send it to meee Baby💕")
                }}

                className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-xl flex items-center gap-2 hover:scale-105 transition"
              >
                Share Your answer with me 📸
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;