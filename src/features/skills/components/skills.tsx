import {
  Server,
  Terminal,
  Database,
  Cloud,
  Cpu,
  Shield,
  Wrench,
  Layers,
} from 'lucide-react';
import type { SectionProps } from '@/types';

interface SkillCard {
  code: string;
  title: string;
  icon: typeof Server;
  description: string;
  skills: { name: string; primary?: boolean }[];
}

const skillCards: SkillCard[] = [
  {
    code: '[SYS.ARCH]',
    title: 'Backend & Systems Architecture',
    icon: Server,
    description:
      'Production API services, state-machine driven lifecycles, and microservice orchestration.',
    skills: [
      { name: 'Node.js' },
      { name: 'NestJS' },
      { name: 'Express.js' },
      { name: 'FastAPI (Python)' },
      { name: 'GraphQL (Code-First)' },
      { name: 'RESTful APIs' },
      { name: 'State Machines' },
      { name: 'Microservices' },
    ],
  },
  {
    code: '[SYS.LANG]',
    title: 'Programming Languages',
    icon: Terminal,
    description: 'Production battle-tested execution runtimes and systems exploration.',
    skills: [
      { name: 'TypeScript (Primary)', primary: true },
      { name: 'Python' },
      { name: 'SQL' },
      { name: 'JavaScript' },
      { name: 'Go (Systems Learning)' },
      { name: 'PHP' },
    ],
  },
  {
    code: '[DATA.ENG]',
    title: 'Databases & Data Engineering',
    icon: Database,
    description:
      'High-volume transactional schemas, stream processing, and multi-region synchronization.',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'Prisma ORM' },
      { name: 'Raw SQL Optimization' },
      { name: 'Redis (Caching/Queues)' },
      { name: 'MongoDB & Aggregations' },
      { name: 'MySQL' },
      { name: 'Apache Flink (CDC/ETL)' },
      { name: 'Distributed Warehousing' },
    ],
  },
  {
    code: '[INFRA.OPS]',
    title: 'Cloud, Infra & Linux Systems',
    icon: Cloud,
    description:
      'Container orchestration, Linux host engineering, and automated delivery pipelines.',
    skills: [
      { name: 'Kubernetes / EKS (Pod Scheduling, CNI, HPA)', primary: true },
      { name: 'Helm Charts & Manifests' },
      { name: 'Linux Internals (cgroups v2, systemd)' },
      { name: 'Docker & OCI Containers' },
      { name: 'AWS (EC2, S3, RDS, SES, EventBridge, EKS)' },
      { name: 'Jenkins & GitLab CI/CD' },
      { name: 'Reverse Proxies & Ingress (Nginx)' },
      { name: 'Zero-Downtime Rollouts' },
    ],
  },
  {
    code: '[AGENTIC.AI]',
    title: 'Agentic AI & Vector Systems',
    icon: Cpu,
    description:
      'Agent orchestration, RAG pipelines, and deterministic guardrails turning text into validated actions.',
    skills: [
      { name: 'Agent Orchestration (Multi-Agent)', primary: true },
      { name: 'RAG (Retrieval-Augmented Generation)', primary: true },
      { name: 'Vector DBs (Pinecone, pgvector)' },
      { name: 'Agentic AI Workflows' },
      { name: 'Deterministic Guardrails & Audits' },
      { name: 'Tool & API Execution' },
      { name: 'Prompt Injection Defense' },
      { name: 'LangChain / LangGraph' },
      { name: 'Multi-Intent Classification' },
      { name: 'Local LLMs (Ollama)' },
    ],
  },
  {
    code: '[COMPLIANCE]',
    title: 'Healthcare & Compliance',
    icon: Shield,
    description: 'Specialized engineering controls for clinical and regulatory environments.',
    skills: [
      { name: 'HIPAA Security Controls' },
      { name: 'Audit Trail Architecture' },
      { name: 'Field-Level Encryption' },
      { name: 'Role-Based Access (RBAC)' },
      { name: 'DHIS2 Government Integration' },
      { name: 'SLA Breach Monitoring' },
    ],
  },
  {
    code: '[DEV.ENV]',
    title: 'Developer Tools & Environment',
    icon: Wrench,
    description: 'Daily instrumentations and systems diagnostics.',
    skills: [
      { name: 'Linux (Arch, Debian)' },
      { name: 'NeoVim' },
      { name: 'Git & Monorepos' },
      { name: 'Docker Compose' },
      { name: 'AWS CLI' },
      { name: 'Postman / Insomnia' },
      { name: 'pnpm / Corepack' },
    ],
  },
  {
    code: '[FRONTEND.SEC]',
    title: 'Frontend & Interfaces (Secondary)',
    icon: Layers,
    description: 'Complementary frontend development for internal tooling and dashboards.',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'ShadCN / UI' },
      { name: 'Recharts' },
      { name: 'jQuery' },
    ],
  },
];

export const Skills = (props: SectionProps) => {
  const { isDarkMode } = props;

  return (
    <section id="architecture" className="space-y-6">
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
            [TECHNICAL ARSENAL]
          </span>
          <h2
            className={`font-headline text-2xl sm:text-3xl lg:text-4xl uppercase font-extrabold ${
              isDarkMode ? 'text-dark-on-surface' : 'text-on-surface'
            }`}
          >
            Skills &amp; Architecture Matrix
          </h2>
        </div>
        <p
          className={`font-sans text-xs sm:text-sm max-w-[440px] ${
            isDarkMode ? 'text-dark-outline' : 'text-neutral-500'
          }`}
        >
          Organized by engineering domain, emphasizing backend platforms, distributed data,
          container infrastructure, and verifiable AI workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.code}
              className={`border-2 p-5 space-y-3 neo-shadow-black transition-all flex flex-col justify-between ${
                isDarkMode
                  ? 'bg-dark-surface border-dark-outline-variant hover:border-dark-on-surface'
                  : 'bg-white border-stroke-black hover:bg-surface-container-low'
              }`}
            >
              <div className="space-y-2">
                <div
                  className={`font-mono text-xs flex items-center justify-between font-bold ${
                    isDarkMode ? 'text-dark-primary' : 'text-accent-cobalt'
                  }`}
                >
                  <span>{card.code}</span>
                  <Icon
                    className={`w-4 h-4 ${
                      isDarkMode ? 'text-dark-primary' : 'text-accent-cobalt'
                    }`}
                  />
                </div>
                <h3
                  className={`font-headline text-base sm:text-lg font-bold ${
                    isDarkMode ? 'text-dark-on-surface' : 'text-on-surface'
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`font-sans text-xs leading-relaxed ${
                    isDarkMode ? 'text-dark-outline' : 'text-neutral-500'
                  }`}
                >
                  {card.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {card.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-2 py-0.5 font-mono text-[11px] font-medium ${
                      skill.primary
                        ? isDarkMode
                          ? 'border border-dark-primary-container bg-dark-surface-container text-dark-primary font-bold'
                          : 'border-2 border-accent-cobalt text-accent-cobalt bg-blue-50 font-bold'
                        : isDarkMode
                        ? 'border border-dark-outline-variant bg-dark-surface-container text-dark-on-surface'
                        : 'border border-stroke-black text-on-surface bg-surface-container'
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
