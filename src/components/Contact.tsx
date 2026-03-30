import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'choudharynavin114@gmail.com',
      link: 'mailto:choudharynavin114@gmail.com',
      color: 'cyan',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9356694636',
      link: 'tel:+919356694636',
      color: 'emerald',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, India',
      color: 'cyan',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/naveenc-04',
      color: 'cyan',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/navin-choudhary-676324292',
      color: 'emerald',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get In <span className="text-cyan-400">Touch</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-400 text-lg mb-12">
            I'm currently looking for software development internship opportunities.
            Feel free to reach out if you'd like to discuss potential opportunities or just want to connect!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <div
                  className={`bg-gray-900 p-6 rounded-xl border ${
                    info.color === 'cyan' ? 'border-cyan-400' : 'border-emerald-400'
                  } hover:scale-105 transition-all transform ${info.link ? 'cursor-pointer' : ''}`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`p-4 ${
                        info.color === 'cyan' ? 'bg-cyan-400/10' : 'bg-emerald-400/10'
                      } rounded-full mb-4`}
                    >
                      <Icon
                        className={info.color === 'cyan' ? 'text-cyan-400' : 'text-emerald-400'}
                        size={28}
                      />
                    </div>
                    <h3 className="text-gray-400 text-sm mb-2">{info.label}</h3>
                    <p
                      className={`${
                        info.color === 'cyan' ? 'text-cyan-400' : 'text-emerald-400'
                      } font-medium`}
                    >
                      {info.value}
                    </p>
                  </div>
                </div>
              );

              return info.link ? (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>

          <div className="bg-gray-900 p-8 rounded-xl border border-cyan-400">
            <h3 className="text-2xl font-semibold text-center mb-6 text-gray-100">
              Connect With Me
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-3 px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-all transform hover:scale-105 border ${
                      social.color === 'cyan' ? 'border-cyan-400 text-cyan-400' : 'border-emerald-400 text-emerald-400'
                    }`}
                  >
                    <Icon size={24} />
                    {social.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-gray-700">
        <p className="text-center text-gray-500">
          Built with React, TypeScript, and Tailwind CSS
        </p>
        <p className="text-center text-gray-500 mt-2">
          © 2025 Navin Choudhary. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
