import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 opacity-90"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-6 opacity-0 animate-fadeIn">
          <h2 className="text-cyan-400 text-lg md:text-xl font-medium mb-2">
            Hello, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            NAVIN CHOUDHARY
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            Computer Engineering Student
          </p>
          <p className="text-lg text-gray-400">
            Full-Stack Developer | MERN Stack Enthusiast
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8 opacity-0 animate-fadeIn delay-300">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50"
          >
            Get In Touch
          </button>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-gray-100 rounded-lg font-medium transition-all transform hover:scale-105 border border-gray-700"
          >
            View Projects
          </button>
        </div>

        <div className="mt-16 opacity-0 animate-fadeIn delay-500">
          <p className="text-gray-400 mb-4">Based in Pune, India</p>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        <ChevronDown size={32} />
      </button>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
