import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'AI for Beginners',
      issuer: 'HP LIFE',
      year: '2025',
      color: 'cyan',
    },
    {
      title: 'Introduction to MongoDB',
      issuer: 'MongoDB University',
      color: 'emerald',
    },
    {
      title: 'Introduction to SQL',
      issuer: 'SoloLearn',
      color: 'cyan',
    },
    {
      title: 'Oracle Academy Course',
      issuer: 'Oracle',
      color: 'emerald',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Certifications & <span className="text-cyan-400">Achievements</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`bg-gray-900 p-6 rounded-xl border ${
                cert.color === 'cyan' ? 'border-cyan-400' : 'border-emerald-400'
              } hover:scale-105 transition-all transform`}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`p-4 ${
                    cert.color === 'cyan' ? 'bg-cyan-400/10' : 'bg-emerald-400/10'
                  } rounded-full mb-4`}
                >
                  <Award
                    className={cert.color === 'cyan' ? 'text-cyan-400' : 'text-emerald-400'}
                    size={36}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  {cert.title}
                </h3>
                <p
                  className={`${
                    cert.color === 'cyan' ? 'text-cyan-400' : 'text-emerald-400'
                  } font-medium text-sm mb-1`}
                >
                  {cert.issuer}
                </p>
                {cert.year && (
                  <p className="text-gray-500 text-sm">{cert.year}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
