import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Art Institute of Chicago – Artwork Table',
      description: 'Built a React + TypeScript app to display artwork data using server-side pagination. Implemented ID-based persistent row selection across paginated API results. Deployed on Netlify and resolved production build and SPA routing issues.',
      technologies: ['React', 'TypeScript', 'REST API', 'Netlify'],
      github: 'https://github.com/naveenc-04/art-institute',
      color: 'cyan',
    },
    {
      title: 'TaskFlow – Task Manager',
      description: 'Developed a full-stack task management application with RESTful APIs. Implemented task CRUD operations with status-based filtering. Built a responsive React frontend and deployed backend with MongoDB Atlas.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/naveenc-04/TaskFlow-frontend',
      secondaryGithub: 'https://github.com/naveenc-04/TaskFlow-backend',
      color: 'emerald',
    },
    {
      title: 'Expense Tracker',
      description: 'Created an expense tracking application to add, view, and manage daily expenses. Used React hooks for state management and real-time calculation of expense totals. Implemented localStorage to persist user data across browser sessions.',
      technologies: ['React', 'JavaScript', 'LocalStorage'],
      github: 'https://github.com/naveenc-04/expense-tracker-react',
      color: 'cyan',
    },
    {
      title: 'Additional Frontend Projects',
      description: 'Collection of frontend projects including a Calculator, Quiz Game, and Gym & Wellness Landing Page. Built with vanilla JavaScript to strengthen fundamentals and DOM manipulation skills.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      color: 'emerald',
    },
  ];

  const getColorClasses = (color: string) => {
    return color === 'cyan'
      ? 'border-cyan-400 hover:border-cyan-300 group-hover:text-cyan-400'
      : 'border-emerald-400 hover:border-emerald-300 group-hover:text-emerald-400';
  };

  const getTechColorClasses = (color: string) => {
    return color === 'cyan'
      ? 'bg-cyan-400/20 text-cyan-300'
      : 'bg-emerald-400/20 text-emerald-300';
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My <span className="text-cyan-400">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-gray-900 p-6 rounded-xl border ${getColorClasses(project.color)} transition-all transform hover:scale-105 hover:shadow-xl`}
            >
              <h3 className="text-2xl font-semibold mb-3 text-gray-100">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-3 py-1 rounded-lg text-sm font-medium ${getTechColorClasses(project.color)}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-gray-400 hover:${project.color === 'cyan' ? 'text-cyan-400' : 'text-emerald-400'} transition-colors`}
                  >
                    <Github size={20} />
                    <span>
                      {project.secondaryGithub ? 'Frontend' : 'View Code'}
                    </span>
                    <ExternalLink size={16} />
                  </a>
                )}
                {project.secondaryGithub && (
                  <a
                    href={project.secondaryGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-gray-400 hover:${project.color === 'cyan' ? 'text-cyan-400' : 'text-emerald-400'} transition-colors`}
                  >
                    <Github size={20} />
                    <span>Backend</span>
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
