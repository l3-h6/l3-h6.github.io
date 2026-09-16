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
            Architect and maintain scalable backend services, stateful workflows, data engineering
            pipelines, Linux &amp; Kubernetes infrastructure, and agentic AI integrations across
            healthcare procurement, ERP, medical equipment servicing, and reporting domains.
          </p>

          <ul
            className={`space-y-2.5 font-sans text-xs sm:text-sm list-none ${
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
                Engineered resilient service order workflows as deterministic state machines with
                strict business validation.
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
                Architected production Agentic AI workflows and multi-agent orchestration pipelines
                with LangChain and autonomous task routing, converting unstructured incoming data
                into validated, idempotent system actions.
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
                Implemented RAG (Retrieval-Augmented Generation) architectures utilizing Vector
                Databases (Pinecone, pgvector) with hybrid semantic search, metadata filtering, and
                contextual re-ranking.
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
                Built an Agentic AI email automation platform (Python, FastAPI, AWS SES,
                EventBridge, S3) that ingests customer/vendor emails, sanitizes prompt injection,
                classifies multi-intents, and executes idempotent domain actions with audit logging.
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
                Designed normalized PostgreSQL schemas spanning 20–25+ relational tables, with
                code-first GraphQL and NestJS microservices.
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
                Architected distributed healthcare data warehouses spanning facilities across
                Europe, America, and Australia with Apache Flink CDC/ETL synchronization.
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
                Configured and managed production Kubernetes (EKS) clusters with Helm charts, HPA
                autoscaling, custom ingress routing, and zero-downtime rolling deployments.
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
                Engineered Linux host environments and container runtimes: tuned cgroups v2, kernel
                sysctl parameters, process isolation, and systemd service daemons for
                high-throughput I/O.
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
                Implemented strict HIPAA-compliant security controls: encryption at rest and in
                transit, comprehensive audit trails, and granular RBAC.
              </span>
            </li>
          </ul>

          <div
            className={`flex flex-wrap gap-1.5 pt-3 border-t-2 ${
              isDarkMode ? 'border-dark-outline-variant' : 'border-stroke-black'
            }`}
          >
            {[
              'AI Agentic Flows',
              'Agent Orchestration',
              'RAG',
              'Vector DB / Pinecone',
              'Node.js',
              'NestJS',
              'TypeScript',
              'GraphQL',
              'PostgreSQL',
              'Python',
              'FastAPI',
              'Apache Flink',
              'Redis',
              'Docker',
              'Kubernetes / EKS',
              'Helm',
              'Linux (cgroups/systemd)',
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
            posts across 50+ municipalities, automating clinical reporting and government health
            data exchange.
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
                Built resilient REST APIs using Node.js and Express.js serving hundreds of healthcare
                practitioners daily.
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
                Engineered automated integration with DHIS2 for automated disease, demographic, and
                clinical data submission to the Ministry of Health.
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
                Designed clinical modules for OPD, IMNCI, Safe Motherhood, Non-Communicable Diseases
                (NCD), and STI tracking with MongoDB aggregation pipelines.
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
                Maintained production Linux hosts, configuring systemd service units, Nginx
                reverse proxies, SSL/TLS termination, and containerized Docker environments with
                GitLab CI.
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
                Instituted database indexing strategies and query execution plan tuning in MongoDB
                and PostgreSQL, eliminating query bottlenecks across clinical record search.
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
              'Systemd',
              'DHIS2',
              'GitLab CI',
              'REST APIs',
              'Aggregation Pipelines',
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                Engineered core features for a B2B vendor management platform, handling supplier
                onboarding, catalog management, inventory dispatch, and tax calculations.
              </p>
            </div>
            <div
              className={`font-mono text-[11px] pt-3 border-t-2 font-medium ${
                isDarkMode
                  ? 'border-dark-outline-variant text-dark-outline'
                  : 'border-stroke-black text-neutral-500'
              }`}
            >
              Next.js &bull; React &bull; TypeScript &bull; Tailwind &bull; REST
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
                Led delivery of 5 full-stack web applications from scratch, maintained 7 client
                platforms, and managed deployments on AWS EC2, RDS, and S3.
              </p>
            </div>
            <div
              className={`font-mono text-[11px] pt-3 border-t-2 font-medium ${
                isDarkMode
                  ? 'border-dark-outline-variant text-dark-outline'
                  : 'border-stroke-black text-neutral-500'
              }`}
            >
              Node.js &bull; Express &bull; MongoDB &bull; AWS (EC2/S3/RDS)
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
                Rigorous foundation in data structures, algorithms, relational database
                management, operating systems, and computer network architecture.
              </p>
            </div>
            <div
              className={`font-mono text-[11px] pt-3 border-t-2 font-medium ${
                isDarkMode
                  ? 'border-dark-outline-variant text-dark-outline'
                  : 'border-stroke-black text-neutral-500'
              }`}
            >
              DSA &bull; Distributed OS &bull; Network Protocols
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
