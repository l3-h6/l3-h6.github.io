import type { SectionProps } from '@/types';

export const Experience = (props: SectionProps) => {
  const { isDarkMode } = props;

  return (
    <section id="timeline" className="space-y-6">
      {/* Header */}
      <div
        className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 pb-3 ${
          isDarkMode ? 'border-dark-outline-variant' : 'border-stroke-black'
        }`}
      >
        <div>
          <span
            className={`font-mono text-xs uppercase font-bold ${
              isDarkMode ? 'text-dark-primary' : 'text-accent-cobalt'
            }`}
          >
            [CAREER JOURNEY]
          </span>
          <h2
            className={`font-headline text-2xl sm:text-3xl lg:text-4xl uppercase font-extrabold ${
              isDarkMode ? 'text-dark-on-surface' : 'text-on-surface'
            }`}
          >
            Professional Experience
          </h2>
        </div>
        <p
          className={`font-sans text-xs sm:text-sm max-w-[480px] ${
            isDarkMode ? 'text-dark-outline' : 'text-neutral-500'
          }`}
        >
          5+ years of hands-on software engineering focused on mission-critical healthcare systems,
          distributed data warehouses, containerized infrastructure, Linux internals, and agentic
          AI.
        </p>
      </div>

      <div className="space-y-6">
        {/* ROLE 1: Prithak Creation / Smaitic Labs */}
        <article
          className={`border-2 p-6 space-y-4 transition-all neo-shadow-black ${
            isDarkMode
              ? 'bg-dark-surface border-dark-outline-variant'
              : 'bg-white border-stroke-black'
          }`}
        >
          <div
            className={`flex flex-col md:flex-row md:items-center justify-between gap-2 border-b-2 pb-4 ${
              isDarkMode ? 'border-dark-outline-variant' : 'border-stroke-black'
            }`}
          >
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`w-2.5 h-2.5 flex-shrink-0 ${
                    isDarkMode ? 'bg-dark-primary-container' : 'bg-accent-cobalt'
                  }`}
                ></span>
                <h3
                  className={`font-headline text-lg sm:text-xl font-bold ${
                    isDarkMode ? 'text-dark-on-surface' : 'text-on-surface'
                  }`}
                >
                  Software Engineer — Backend &amp; Systems
                </h3>
              </div>
              <div
                className={`font-mono text-xs mt-1 font-semibold ${
                  isDarkMode ? 'text-dark-primary' : 'text-accent-cobalt'
                }`}
              >
                Prithak Creation / Smaitic Labs Joint Venture
                <span className={`mx-2 ${isDarkMode ? 'text-dark-outline' : 'text-neutral-400'}`}>
                  &bull;
                </span>
                <span
                  className={`font-normal ${
                    isDarkMode ? 'text-dark-on-surface-variant' : 'text-neutral-500'
                  }`}
                >
                  Lead engineering team of 5–6 developers on production healthcare systems
                </span>
              </div>
            </div>
            <span
              className={`px-3 py-1 border font-mono text-xs font-bold self-start md:self-auto ${
                isDarkMode
                  ? 'bg-dark-surface-container border-dark-outline-variant text-dark-outline'
                  : 'bg-surface-container border-stroke-black text-on-surface'
              }`}
            >
              DECEMBER 2024 – PRESENT
            </span>
          </div>

          <p
            className={`font-sans text-sm sm:text-base leading-relaxed ${
              isDarkMode ? 'text-dark-on-surface-variant' : 'text-neutral-600'
            }`}
          >
            Architect scalable healthcare ERP backends, distributed data pipelines, and agentic AI systems for a team of 5–6 engineers.
          </p>

          <ul
            className={`space-y-2 font-sans text-xs sm:text-sm list-none ${
              isDarkMode ? 'text-dark-on-surface-variant' : 'text-neutral-600'
            }`}
          >
            <li className="flex items-start gap-2">
              <span
                className={`font-bold font-mono text-xs mt-0.5 ${
                  isDarkMode ? 'text-dark-primary' : 'text-accent-cobalt'
                }`}
              >
                [+]
              </span>
              <span>
                Architected distributed healthcare platforms, Apache Flink CDC synchronization, and production Kubernetes (EKS) clusters with zero downtime.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span
                className={`font-bold font-mono text-xs mt-0.5 ${
                  isDarkMode ? 'text-dark-primary' : 'text-accent-cobalt'
                }`}
              >
                [+]
              </span>
              <span>
                Built production Agentic AI workflows (LangChain, FastAPI) and RAG pipelines (Pinecone, pgvector) with prompt sanitization and idempotent execution.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span
                className={`font-bold font-mono text-xs mt-0.5 ${
                  isDarkMode ? 'text-dark-primary' : 'text-accent-cobalt'
                }`}
              >
                [+]
              </span>
              <span>
                Engineered deterministic state machines for service orders, normalized PostgreSQL schemas, and HIPAA-compliant RBAC controls.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span
                className={`font-bold font-mono text-xs mt-0.5 ${
                  isDarkMode ? 'text-dark-primary' : 'text-accent-cobalt'
                }`}
              >
                [+]
              </span>
              <span>
                Tuned Linux host environments (cgroups v2, sysctl parameters, systemd daemons) for high-throughput containerized workloads.
              </span>
            </li>
          </ul>

          <div
            className={`flex flex-wrap gap-1.5 pt-3 border-t-2 ${
              isDarkMode ? 'border-dark-outline-variant' : 'border-stroke-black'
            }`}
          >
            {[
              'Agentic AI',
              'LangChain',
              'RAG / Pinecone',
              'Node.js',
              'NestJS',
              'TypeScript',
              'PostgreSQL',
              'Python',
              'FastAPI',
              'Apache Flink',
              'Kubernetes / EKS',
              'Docker',
              'Linux (cgroups/sysctl)',
              'AWS',
              'HIPAA',
            ].map((tech) => (
              <span
                key={tech}
                className={`px-2 py-0.5 border font-mono text-[11px] font-medium ${
                  isDarkMode
                    ? 'border-dark-outline-variant bg-dark-surface-lowest text-dark-outline'
                    : 'border-stroke-black bg-white text-on-surface'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </article>

        {/* ROLE 2: Nagarik Solutions */}
        <article
          className={`border-2 p-6 space-y-4 transition-all neo-shadow-black ${
            isDarkMode
              ? 'bg-dark-surface border-dark-outline-variant'
              : 'bg-white border-stroke-black'
          }`}
        >
          <div
            className={`flex flex-col md:flex-row md:items-center justify-between gap-2 border-b-2 pb-4 ${
              isDarkMode ? 'border-dark-outline-variant' : 'border-stroke-black'
            }`}
          >
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`w-2.5 h-2.5 flex-shrink-0 ${
                    isDarkMode ? 'bg-dark-outline' : 'bg-neutral-600'
                  }`}
                ></span>
                <h3
                  className={`font-headline text-lg sm:text-xl font-bold ${
                    isDarkMode ? 'text-dark-on-surface' : 'text-on-surface'
                  }`}
                >
                  Software Engineer
                </h3>
              </div>
              <div
                className={`font-mono text-xs mt-1 font-semibold ${
                  isDarkMode ? 'text-dark-primary' : 'text-accent-cobalt'
                }`}
              >
                Nagarik Solutions
                <span className={`mx-2 ${isDarkMode ? 'text-dark-outline' : 'text-neutral-400'}`}>
                  &bull;
                </span>
                <span
                  className={`font-normal ${
                    isDarkMode ? 'text-dark-on-surface-variant' : 'text-neutral-500'
                  }`}
                >
                  Led backend team of 4–5 developers across healthcare and government platforms
                </span>
              </div>
            </div>
            <span
              className={`px-3 py-1 border font-mono text-xs font-bold self-start md:self-auto ${
                isDarkMode
                  ? 'bg-dark-surface-container border-dark-outline-variant text-dark-outline'
                  : 'bg-surface-container border-stroke-black text-on-surface'
              }`}
            >
              NOVEMBER 2023 – NOVEMBER 2024
            </span>
          </div>

          <p
            className={`font-sans text-sm sm:text-base leading-relaxed ${
              isDarkMode ? 'text-dark-on-surface-variant' : 'text-neutral-600'
            }`}
          >
            Led backend engineering for national-scale healthcare platforms serving 200+ health
            posts across 50+ municipalities.
          </p>

          <ul
            className={`space-y-2 font-sans text-xs sm:text-sm list-none ${
              isDarkMode ? 'text-dark-on-surface-variant' : 'text-neutral-600'
            }`}
          >
            <li className="flex items-start gap-2">
              <span
                className={`font-bold font-mono text-xs mt-0.5 ${
                  isDarkMode ? 'text-dark-primary' : 'text-accent-cobalt'
                }`}
              >
                [+]
              </span>
              <span>
                Built high-throughput Node.js/Express REST APIs and automated clinical health data exchange with government DHIS2.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span
                className={`font-bold font-mono text-xs mt-0.5 ${
                  isDarkMode ? 'text-dark-primary' : 'text-accent-cobalt'
                }`}
              >
                [+]
              </span>
              <span>
                Designed clinical record modules (OPD, IMNCI, NCD) with optimized MongoDB aggregation pipelines and tuned PostgreSQL indexing.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span
                className={`font-bold font-mono text-xs mt-0.5 ${
                  isDarkMode ? 'text-dark-primary' : 'text-accent-cobalt'
                }`}
              >
                [+]
              </span>
              <span>
                Maintained production Linux hosts, Nginx reverse proxies, Docker containerization, and automated GitLab CI pipelines.
              </span>
            </li>
          </ul>

          <div
            className={`flex flex-wrap gap-1.5 pt-3 border-t-2 ${
              isDarkMode ? 'border-dark-outline-variant' : 'border-stroke-black'
            }`}
          >
            {[
              'Node.js',
              'Express.js',
              'MongoDB',
              'PostgreSQL',
              'Linux',
              'Docker',
              'Nginx',
              'DHIS2',
              'GitLab CI',
              'REST APIs',
            ].map((tech) => (
              <span
                key={tech}
                className={`px-2 py-0.5 border font-mono text-[11px] font-medium ${
                  isDarkMode
                    ? 'border-dark-outline-variant bg-dark-surface-lowest text-dark-outline'
                    : 'border-stroke-black bg-white text-on-surface'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </article>

        {/* SUB TIMELINE GRID (Older Roles & Academics) */}
        {/* SUB TIMELINE GRID (Older Roles & Academics) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Hajurbuwa.com */}
          <div
            className={`border-2 p-5 space-y-3 neo-shadow-black flex flex-col justify-between ${
              isDarkMode
                ? 'bg-dark-surface border-dark-outline-variant'
                : 'bg-white border-stroke-black'
            }`}
          >
            <div className="space-y-2">
              <div
                className={`font-mono text-xs font-bold ${
                  isDarkMode ? 'text-dark-outline' : 'text-neutral-500'
                }`}
              >
                MAR 2023 – MAY 2023
              </div>
              <h4
                className={`font-headline text-base sm:text-lg font-bold ${
                  isDarkMode ? 'text-dark-on-surface' : 'text-on-surface'
                }`}
              >
                Software Engineer
              </h4>
              <div
                className={`font-mono text-xs font-semibold ${
                  isDarkMode ? 'text-dark-primary' : 'text-accent-cobalt'
                }`}
              >
                Hajurbuwa.com // B2B Logistics
              </div>
              <p
                className={`font-sans text-xs leading-relaxed ${
                  isDarkMode ? 'text-dark-on-surface-variant' : 'text-neutral-500'
                }`}
              >
                Engineered B2B vendor onboarding, catalog management, inventory dispatch, and tax calculations.
              </p>
            </div>
            <div
              className={`font-mono text-[11px] pt-3 border-t-2 font-medium ${
                isDarkMode
                  ? 'border-dark-outline-variant text-dark-outline'
                  : 'border-stroke-black text-neutral-500'
              }`}
            >
              Next.js &bull; TypeScript &bull; Tailwind &bull; REST
            </div>
          </div>

          {/* DGS Media */}
          <div
            className={`border-2 p-5 space-y-3 neo-shadow-black flex flex-col justify-between ${
              isDarkMode
                ? 'bg-dark-surface border-dark-outline-variant'
                : 'bg-white border-stroke-black'
            }`}
          >
            <div className="space-y-2">
              <div
                className={`font-mono text-xs font-bold ${
                  isDarkMode ? 'text-dark-outline' : 'text-neutral-500'
                }`}
              >
                AUG 2020 – AUG 2022
              </div>
              <h4
                className={`font-headline text-base sm:text-lg font-bold ${
                  isDarkMode ? 'text-dark-on-surface' : 'text-on-surface'
                }`}
              >
                Software Engineer
              </h4>
              <div
                className={`font-mono text-xs font-semibold ${
                  isDarkMode ? 'text-dark-primary' : 'text-accent-cobalt'
                }`}
              >
                DGS Media // Full-Stack
              </div>
              <p
                className={`font-sans text-xs leading-relaxed ${
                  isDarkMode ? 'text-dark-on-surface-variant' : 'text-neutral-500'
                }`}
              >
                Delivered 5 full-stack web applications and maintained 7 production client platforms on AWS.
              </p>
            </div>
            <div
              className={`font-mono text-[11px] pt-3 border-t-2 font-medium ${
                isDarkMode
                  ? 'border-dark-outline-variant text-dark-outline'
                  : 'border-stroke-black text-neutral-500'
              }`}
            >
              Node.js &bull; Express &bull; MongoDB &bull; AWS
            </div>
          </div>

          {/* AudioBee */}
          <div
            className={`border-2 p-5 space-y-3 neo-shadow-black flex flex-col justify-between ${
              isDarkMode
                ? 'bg-dark-surface border-dark-outline-variant'
                : 'bg-white border-stroke-black'
            }`}
          >
            <div className="space-y-2">
              <div
                className={`font-mono text-xs font-bold ${
                  isDarkMode ? 'text-dark-outline' : 'text-neutral-500'
                }`}
              >
                MAR 2020 – AUG 2020
              </div>
              <h4
                className={`font-headline text-base sm:text-lg font-bold ${
                  isDarkMode ? 'text-dark-on-surface' : 'text-on-surface'
                }`}
              >
                Software Engineer Intern
              </h4>
              <div
                className={`font-mono text-xs font-semibold ${
                  isDarkMode ? 'text-dark-primary' : 'text-accent-cobalt'
                }`}
              >
                AudioBee // Web &amp; Agile
              </div>
              <p
                className={`font-sans text-xs leading-relaxed ${
                  isDarkMode ? 'text-dark-on-surface-variant' : 'text-neutral-500'
                }`}
              >
                Built web pages/UI using HTML, CSS, JS, jQuery; assisted with bug fixes and Agile workflows.
              </p>
            </div>
            <div
              className={`font-mono text-[11px] pt-3 border-t-2 font-medium ${
                isDarkMode
                  ? 'border-dark-outline-variant text-dark-outline'
                  : 'border-stroke-black text-neutral-500'
              }`}
            >
              HTML5 &bull; CSS3 &bull; JS &bull; jQuery &bull; Agile
            </div>
          </div>

          {/* Academics: Tribhuvan University */}
          <div
            className={`border-2 p-5 space-y-3 neo-shadow-black flex flex-col justify-between ${
              isDarkMode
                ? 'bg-dark-surface border-dark-outline-variant'
                : 'bg-white border-stroke-black'
            }`}
          >
            <div className="space-y-2">
              <div
                className={`font-mono text-xs font-bold ${
                  isDarkMode ? 'text-dark-outline' : 'text-neutral-500'
                }`}
              >
                2019 – 2024 // ACADEMICS
              </div>
              <h4
                className={`font-headline text-base sm:text-lg font-bold ${
                  isDarkMode ? 'text-dark-on-surface' : 'text-on-surface'
                }`}
              >
                Bachelor of Computer Applications
              </h4>
              <div
                className={`font-mono text-xs font-semibold ${
                  isDarkMode ? 'text-dark-primary' : 'text-accent-cobalt'
                }`}
              >
                Tribhuvan University &bull; Samriddhi College
              </div>
              <p
                className={`font-sans text-xs leading-relaxed ${
                  isDarkMode ? 'text-dark-on-surface-variant' : 'text-neutral-500'
                }`}
              >
                Rigorous foundation in data structures, algorithms, relational databases, and network architecture.
              </p>
            </div>
            <div
              className={`font-mono text-[11px] pt-3 border-t-2 font-medium ${
                isDarkMode
                  ? 'border-dark-outline-variant text-dark-outline'
                  : 'border-stroke-black text-neutral-500'
              }`}
            >
              DSA &bull; Distributed OS &bull; DBMS &bull; Networks
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
