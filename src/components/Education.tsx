import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering',
      field: 'Computer Engineering',
      institution: 'Pimpri Chinchwad College of Engineering and Research',
      duration: '2023 - 2027',
      color: 'cyan',
    },
    {
      degree: 'Higher Secondary Certificate',
      field: 'HSC',
      institution: 'Shri Mhalsakant Vidyalaya, Pune, India',
      duration: '2021 - 2023',
      percentage: '88.67%',
      color: 'emerald',
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-cyan-400">Education</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mb-12"></div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 to-emerald-400 hidden md:block"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 md:text-right" style={{ textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                  {index % 2 === 0 && (
                    <div className="bg-gray-800 p-6 rounded-xl border border-cyan-400 hover:border-cyan-300 transition-all transform hover:scale-105">
                      <div className="flex items-start gap-3 justify-end">
                        <div className="text-right flex-1">
                          <h3 className="text-2xl font-semibold text-gray-100 mb-2">
                            {edu.degree}
                          </h3>
                          <p className="text-cyan-400 font-medium mb-2">{edu.field}</p>
                          <p className="text-gray-400 mb-2">{edu.institution}</p>
                          <p className="text-gray-500 text-sm">{edu.duration}</p>
                          {edu.percentage && (
                            <p className="text-cyan-400 font-semibold mt-2">
                              Percentage: {edu.percentage}
                            </p>
                          )}
                        </div>
                        <div className="p-3 bg-cyan-400/10 rounded-lg">
                          <GraduationCap className="text-cyan-400" size={32} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative z-10 flex items-center justify-center">
                  <div className={`w-6 h-6 rounded-full border-4 ${
                    edu.color === 'cyan' ? 'bg-cyan-400 border-cyan-300' : 'bg-emerald-400 border-emerald-300'
                  } shadow-lg`}></div>
                </div>

                <div className="flex-1" style={{ textAlign: index % 2 === 0 ? 'left' : 'right' }}>
                  {index % 2 !== 0 && (
                    <div className="bg-gray-800 p-6 rounded-xl border border-emerald-400 hover:border-emerald-300 transition-all transform hover:scale-105">
                      <div className="flex items-start gap-3 justify-end flex-row-reverse">
                        <div className="text-right flex-1">
                          <h3 className="text-2xl font-semibold text-gray-100 mb-2">
                            {edu.degree}
                          </h3>
                          <p className="text-emerald-400 font-medium mb-2">{edu.field}</p>
                          <p className="text-gray-400 mb-2">{edu.institution}</p>
                          <p className="text-gray-500 text-sm">{edu.duration}</p>
                          {edu.percentage && (
                            <p className="text-emerald-400 font-semibold mt-2">
                              Percentage: {edu.percentage}
                            </p>
                          )}
                        </div>
                        <div className="p-3 bg-emerald-400/10 rounded-lg">
                          <GraduationCap className="text-emerald-400" size={32} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden mt-8 space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`bg-gray-800 p-6 rounded-xl border ${
                edu.color === 'cyan' ? 'border-cyan-400' : 'border-emerald-400'
              } hover:scale-105 transition-all`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-3 ${
                  edu.color === 'cyan' ? 'bg-cyan-400/10' : 'bg-emerald-400/10'
                } rounded-lg`}>
                  <GraduationCap className={edu.color === 'cyan' ? 'text-cyan-400' : 'text-emerald-400'} size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-100 mb-2">
                    {edu.degree}
                  </h3>
                  <p className={`${edu.color === 'cyan' ? 'text-cyan-400' : 'text-emerald-400'} font-medium mb-2`}>
                    {edu.field}
                  </p>
                  <p className="text-gray-400 mb-2">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.duration}</p>
                  {edu.percentage && (
                    <p className={`${edu.color === 'cyan' ? 'text-cyan-400' : 'text-emerald-400'} font-semibold mt-2`}>
                      Percentage: {edu.percentage}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
