import React, { useEffect, useState } from 'react';
import { Rocket, Code, Book, Trophy, User } from 'lucide-react';

function StarField() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            width: Math.random() * 3 + 'px',
            height: Math.random() * 3 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animationDelay: Math.random() * 2 + 's',
          }}
        />
      ))}
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="floating">
          <Rocket size={64} className="text-blue-400 animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <StarField />
      
      {/* Navigation */}
      <nav className="absolute top-0 w-full p-4 flex justify-between items-center z-10 bg-black bg-opacity-50">
        <div className="flex items-center space-x-2">
          <Rocket className="text-blue-400" />
          <span className="font-bold">Space Academy</span>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="nav-item flex items-center gap-2">
            <Code size={18} /> Missions
          </a>
          <a href="#" className="nav-item flex items-center gap-2">
            <Book size={18} /> Learn
          </a>
          <a href="#" className="nav-item flex items-center gap-2">
            <Trophy size={18} /> Achievements
          </a>
          <button className="space-button flex items-center gap-2">
            <User size={18} /> Login
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="pixel-text text-4xl md:text-6xl mb-8 tracking-wider">
          Welcome to
          <br />
          Space Academy
        </h1>
        
        <p className="max-w-2xl text-lg mb-12 text-blue-200">
          Embark on an epic journey through the cosmos of coding. Master programming
          skills through interactive missions, earn achievements, and become a legendary
          code astronaut.
        </p>

        <div className="flex gap-6">
          <button className="space-button flex items-center gap-2">
            <Rocket size={20} />
            Begin Your Journey
          </button>
          <button className="space-button bg-transparent hover:bg-blue-500/20">
            View Missions
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl">
          {[
            {
              icon: <Code size={32} />,
              title: "Interactive Missions",
              description: "Complete coding challenges in our space-themed IDE"
            },
            {
              icon: <Trophy size={32} />,
              title: "Earn Achievements",
              description: "Collect badges and climb the intergalactic leaderboard"
            },
            {
              icon: <Book size={32} />,
              title: "Learn & Grow",
              description: "Master multiple programming languages and technologies"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-blue-900/20 p-6 rounded-lg border border-blue-500/30 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-blue-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;