// App.jsx
import { useState, useEffect } from "react";
import "./index.css"; // ← we'll put tailwind + custom styles here

function App() {
  const [showModal, setShowModal] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: "50%", left: "60%" });
  const [noAttempts, setNoAttempts] = useState(0);

  const moveNoButton = () => {
    setNoAttempts((prev) => prev + 1);

    // Make it harder to catch the longer they try
    const maxMove = Math.min(300 + noAttempts * 40, 600);
    const angle = Math.random() * Math.PI * 2;
    const distance = 80 + Math.random() * maxMove;

    const newTop = `calc(50% + ${Math.sin(angle) * distance}px)`;
    const newLeft = `calc(60% + ${Math.cos(angle) * distance}px)`;

    setNoPosition({ top: newTop, left: newLeft });
  };

  const handleYes = () => {
    setShowModal(true);
    // Confetti 🎉
    confetti({
      particleCount: 180,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#ec4899", "#f43f5e", "#d946ef", "#a855f7", "#f472b6"],
    });
  };

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

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-400 via-rose-500 to-purple-600 flex items-center justify-center px-4">
      {/* Floating hearts background */}
      <div id="hearts" className="absolute inset-0 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 text-center max-w-3xl">
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight drop-shadow-2xl animate-pulse-slow title-font">
            Ofure mii,Will you be
            <br />
            my Valentine?
          </h1>

          <p className="mt-6 text-3xl md:text-4xl text-white/90 font-medium">
            My favorite person in the whole universe 🌸
          </p>
        </div>

        {/* <div className="relative h-64 flex items-center justify-center"> */}
        {/* YES button */}
        <button
          onClick={handleYes}
          className="bg-white text-rose-600 font-black text-5xl md:text-6xl px-16 md:px-24 py-10 md:py-14 rounded-3xl shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center gap-5 group relative overflow-hidden"
        >
          <span className="relative z-10">YES!</span>
          <div className="absolute inset-0 bg-gradient-to-r from-rose-200 to-pink-300 opacity-0 group-hover:opacity-30 transition-opacity" />
        </button>

        {/* NO button – moves when you try to click */}
        <button
          onClick={moveNoButton}
          style={{
            position: "absolute",
            top: noPosition.top,
            left: noPosition.left,
            transform: "translate(-50%, -50%)",
          }}
          className="bg-white/90 text-gray-500 font-bold text-3xl px-12 py-6 rounded-3xl shadow-xl border-4 border-white hover:bg-white transition-all duration-300 active:scale-90 select-none"
        >
          No 😢
        </button>
        {/* </div> */}

        <p className="mt-16 text-white/80 text-xl">
          I already know what you're gonna say... but I still want to hear it 💕
        </p>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4 overflow-auto">
          <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl animate-pop-in">
            {/* Header */}
            <div className="bg-gradient-to-r from-pink-500 to-rose-600 py-10 px-10 text-white text-center relative">
              <h2 className="text-5xl md:text-6xl font-bold title-font tracking-tight">
                SHE SAID YESSS!!! 🎉💖
              </h2>
              <p className="mt-3 text-2xl opacity-90">My Valentine forever</p>
            </div>

            {/* Body */}
            <div className="p-8 md:p-12 space-y-8 text-center">
              <div className="text-8xl animate-bounce-slow">💞</div>

              <p className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed">
                You are my safe place, my happy thought, my favorite
                notification, and now officially...
                <span className="text-rose-600 font-bold"> my Valentine</span>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left text-lg">
                <div className="bg-pink-50 p-6 rounded-2xl">
                  <div className="text-pink-600 text-2xl mb-2">Your laugh</div>
                  <div className="text-gray-700">
                    makes bad days disappear instantly
                  </div>
                </div>
                <div className="bg-rose-50 p-6 rounded-2xl">
                  <div className="text-rose-600 text-2xl mb-2">Your hugs</div>
                  <div className="text-gray-700">
                    feel like the best place in the world
                  </div>
                </div>
                <div className="bg-purple-50 p-6 rounded-2xl">
                  <div className="text-purple-600 text-2xl mb-2">
                    Your heart
                  </div>
                  <div className="text-gray-700">
                    is kinder than anyone I've ever met
                  </div>
                </div>
                <div className="bg-fuchsia-50 p-6 rounded-2xl">
                  <div className="text-fuchsia-600 text-2xl mb-2">You</div>
                  <div className="text-gray-700">
                    are simply the best thing that ever happened to me
                  </div>
                </div>
              </div>

              <p className="text-3xl font-bold text-rose-600 pt-6">
                I love you so much more than words ❤️
              </p>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 py-6 px-8 flex justify-between items-center">
              <button
                onClick={() => setShowModal(false)}
                className="px-8 py-3 bg-white border rounded-xl hover:bg-gray-100 transition"
              >
                Close
              </button>
              <button
                onClick={() => {
                  confetti({ particleCount: 120, spread: 70 });
                  alert("Now screenshot this and send it to meee 💕");
                }}
                className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-xl flex items-center gap-2 hover:scale-105 transition"
              >
                <span>Share our moment</span> 📸
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
