const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'C++'],
      color: 'cyan',
    },
    {
      title: 'Web Technologies',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      color: 'emerald',
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'MySQL'],
      color: 'cyan',
    },
    {
      title: 'Core Concepts',
      skills: ['Data Structures and Algorithms', 'OOP', 'DBMS', 'Operating Systems'],
      color: 'emerald',
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma'],
      color: 'cyan',
    },
    {
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Time Management', 'Adaptability', 'Team Collaboration'],
      color: 'emerald',
    },
  ];

  const languages = ['English', 'Hindi', 'Marathi'];

  const getColorClasses = (color: string) => {
    return color === 'cyan'
      ? 'border-cyan-400 hover:bg-cyan-400/10'
      : 'border-emerald-400 hover:bg-emerald-400/10';
  };

  const getSkillColorClasses = (color: string) => {
    return color === 'cyan'
      ? 'bg-cyan-400/20 text-cyan-300 border-cyan-400/50'
      : 'bg-emerald-400/20 text-emerald-300 border-emerald-400/50';
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My <span className="text-cyan-400">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-gray-800 p-6 rounded-xl border ${getColorClasses(category.color)} transition-all`}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-100">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-4 py-2 rounded-lg border ${getSkillColorClasses(category.color)} font-medium transition-all transform hover:scale-105`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 p-6 rounded-xl border border-cyan-400 hover:bg-cyan-400/10 transition-all max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-gray-100 text-center">
            Languages
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {languages.map((language, index) => (
              <span
                key={index}
                className="px-6 py-2 rounded-lg bg-cyan-400/20 text-cyan-300 border border-cyan-400/50 font-medium transition-all transform hover:scale-105"
              >
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
