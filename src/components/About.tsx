import { Code2, Database, Laptop } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About <span className="text-cyan-400">Me</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              I'm a third-year Computer Engineering student with hands-on experience in building
              full-stack and frontend web applications using the <span className="text-cyan-400 font-semibold">MERN stack</span> and{' '}
              <span className="text-cyan-400 font-semibold">React</span>.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              I've worked on projects like a task management system and a React-based expense tracker,
              where I focused on API development, frontend-backend integration, and writing clean,
              maintainable code.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              I enjoy learning by building, debugging real problems, and improving my solutions through
              iteration. Currently exploring software development internship opportunities where I can
              contribute to real projects and continue learning from experienced engineers.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-cyan-400 font-semibold">Location:</span>
                Pune, India
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-cyan-400 font-semibold">Status:</span>
                Available for Internships
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-cyan-400 transition-all transform hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-400/10 rounded-lg">
                  <Code2 className="text-cyan-400" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">Full-Stack Development</h3>
                  <p className="text-gray-400">
                    Building end-to-end web applications with React, Node.js, Express, and MongoDB
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-emerald-400 transition-all transform hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-400/10 rounded-lg">
                  <Database className="text-emerald-400" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">API Development</h3>
                  <p className="text-gray-400">
                    Designing and implementing RESTful APIs with proper authentication and data validation
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-cyan-400 transition-all transform hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-400/10 rounded-lg">
                  <Laptop className="text-cyan-400" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">Problem Solving</h3>
                  <p className="text-gray-400">
                    Strong foundation in DSA, OOP concepts, and system design principles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
