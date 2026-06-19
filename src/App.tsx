import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  Download,
  Newspaper,
} from 'lucide-react';
import { useEffect } from 'react';
import { resumeData } from './Data';

export default function App() {
  useEffect(() => {
    document.title = 'Shanny_Wu_Resume';
  }, []);
  return (
    <div className="min-h-screen bg-zinc-100 font-sans text-zinc-900 py-10 px-4 sm:px-8 print:bg-white print:py-0 print:px-0 print:text-[13px]">
      <div className="max-w-[210mm] min-h-[297mm] mx-auto bg-white shadow-xl px-10 py-16 sm:px-16 sm:py-20 lg:px-20 lg:py-20 print:shadow-none print:px-4 print:py-4">
        {/* Header */}
        <header className="border-b-2 border-black pb-8 mb-8 print:pb-4 print:mb-4">
          <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight text-black mb-2 print:text-3xl print:mb-1">
            {resumeData.name}
          </h1>
          <h2 className="text-xl text-zinc-600 font-medium tracking-wide mb-5 print:text-lg print:mb-2">
            {resumeData.title}
          </h2>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-600 font-mono">
            <a
              href={`mailto:${resumeData.email}`}
              className="flex items-center gap-1.5 hover:text-black transition-colors"
            >
              <Mail className="w-4 h-4" />
              {resumeData.email}
            </a>
            <span className="hidden sm:inline text-zinc-300">|</span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4" />
              {resumeData.phone}
            </span>
            <span className="hidden sm:inline text-zinc-300">|</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {resumeData.location}
            </span>
            <br />
            <a
              href={`https://${resumeData.linkedin}`}
              className="flex items-center gap-1.5 hover:text-black transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              {resumeData.linkedin}
            </a>
            <span className="hidden sm:inline text-zinc-300">|</span>
            <a
              href={`https://${resumeData.github}`}
              className="flex items-center gap-1.5 hover:text-black transition-colors"
            >
              <Github className="w-4 h-4" />
              {resumeData.github}
            </a>
            <span className="hidden sm:inline text-zinc-300">|</span>
            <a
              href={`https://${resumeData.blog}`}
              className="flex items-center gap-1.5 hover:text-black transition-colors"
            >
              <Newspaper className="w-4 h-4" />
              {resumeData.blog}
            </a>
          </div>
        </header>

        <main className="space-y-10 print:space-y-5">
          {/* Summary */}
          <section>
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4 pb-2 border-b border-zinc-200 print:pb-1">
              Summary
            </h3>
            <p className="text-zinc-800 leading-relaxed text-sm print:leading-normal">
              {resumeData.summary}
            </p>
          </section>

          {/* Experience */}
          <section>
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-6 pb-2 border-b border-zinc--200 print:pb-1">
              Experience
            </h3>

            <div className="space-y-8 print:space-y-3">
              {resumeData.experience.map((job, index) => (
                <div key={index}>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                    <h4 className="text-lg font-bold text-black print:text-base">
                      {job.company}
                    </h4>
                    <span className="font-mono text-sm text-zinc-500 print:text-[12px]">
                      {job.date}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-zinc-600 mb-3 print:mb-1">
                    {job.title} &bull; {job.location}
                  </div>
                  <ul className="list-outside list-disc ml-5 space-y-2 text-zinc-800 text-sm marker:text-zinc-400 print:space-y-0.5 print:leading-snug">
                    {job.bullets.map((bullet, idx) => (
                      <li key={idx} className="pl-1">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-6 pb-2 border-b border-zinc-200  print:pb-1">
              Selected Projects
            </h3>
            <div className="space-y-6 print:space-y-3">
              {resumeData.projects.map((project, index) => (
                <div key={index}>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-base font-bold text-black border-b border-black print:text-sm">
                      {project.name}
                    </h4>
                    <a
                      href={project.link}
                      className="text-zinc-400 hover:text-black transition-colors"
                    >
                      <Globe className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="text-sm text-zinc-800 mb-2 print:mb-0 print:leading-snug">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education & Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 print:gap-6">
            {/* Skills */}
            <section>
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4 pb-2 border-b border-zinc-200  print:pb-1">
                Technical Skills
              </h3>
              <div className="space-y-3 text-sm text-zinc-800 print:space-y-1">
                <div className="grid grid-cols-[100px_1fr] items-start gap-2">
                  <span className="font-bold text-black">Languages</span>
                  <span>{resumeData.skills[0].items}</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] items-start gap-2">
                  <span className="font-bold text-black">Frameworks</span>
                  <span>{resumeData.skills[1].items}</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] items-start gap-2">
                  <span className="font-bold text-black">Tools</span>
                  <span>{resumeData.skills[2].items}</span>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4 pb-2 border-b border-zinc-200">
                Education
              </h3>
              <div>
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="mb-4 print:mb-2">
                    <h4 className="font-bold text-black text-base print:text-sm">
                      {edu.school}
                    </h4>
                    <p className="text-sm text-zinc-800">{edu.degree}</p>
                    <p className="font-mono text-sm text-zinc-500 mt-1 print:mt-0 print:text-[12px]">
                      {edu.date}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Floating Action Button (dev only) */}
      <div className="fixed bottom-8 right-8 flex gap-4 print:hidden">
        <button
          onClick={() => window.print()}
          className="bg-black text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 text-sm font-medium hover:-translate-y-1 transition-transform"
        >
          <Download className="w-4 h-4" /> Save as PDF
        </button>
      </div>
    </div>
  );
}
