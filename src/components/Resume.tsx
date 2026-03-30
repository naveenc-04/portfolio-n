import { Download, FileText, Eye } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/My_final_Resume.pdf';
    link.download = 'Navin_Choudhary_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open('/My_final_Resume.pdf', '_blank');
  };

  return (
    <section id="resume" className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My <span className="text-cyan-400">Resume</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mb-12"></div>

        <div className="bg-gray-800 rounded-xl p-8 md:p-12 border border-cyan-400 hover:border-cyan-300 transition-all">
          <div className="flex flex-col items-center text-center">
            <div className="p-6 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 rounded-full mb-6">
              <FileText className="text-cyan-400" size={64} />
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-4">
              Download My Resume
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl">
              Get a comprehensive overview of my education, skills, projects, and certifications.
              Perfect for recruiters and hiring managers looking to learn more about my experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleDownload}
                className="flex items-center gap-3 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50"
              >
                <Download size={24} />
                Download Resume
              </button>
              <button
                onClick={handleView}
                className="flex items-center gap-3 px-8 py-4 bg-gray-700 hover:bg-gray-600 text-gray-100 rounded-lg font-medium transition-all transform hover:scale-105 border border-gray-600"
              >
                <Eye size={24} />
                View Resume
              </button>
            </div>

            <p className="text-gray-500 text-sm mt-6">
              PDF format • Updated March 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
