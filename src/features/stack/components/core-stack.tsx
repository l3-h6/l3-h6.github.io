import type { SectionProps } from '@/types';

interface StackItem {
  name: string;
  role: string;
  dotColor: string;
}

const stackItems: StackItem[] = [
  { name: 'TypeScript', role: 'Node / NestJS', dotColor: 'bg-accent-cobalt' },
  { name: 'Python', role: 'FastAPI / Agent AI', dotColor: 'bg-accent-electric' },
  { name: 'Agent Orchestration', role: 'Multi-Agent / LangChain', dotColor: 'bg-purple-600' },
  { name: 'Vector DB / Pinecone', role: 'RAG / Embeddings', dotColor: 'bg-emerald-600' },
  { name: 'Kubernetes / K8s', role: 'EKS / Helm / HPA', dotColor: 'bg-accent-cobalt' },
  { name: 'Linux Internals', role: 'cgroups / systemd', dotColor: 'bg-neutral-700' },
  { name: 'PostgreSQL', role: 'ACID / pgvector', dotColor: 'bg-neutral-800' },
  { name: 'Redis', role: 'Cluster / Cache', dotColor: 'bg-red-600' },
  { name: 'Docker', role: 'OCI Containers', dotColor: 'bg-blue-700' },
  { name: 'AWS', role: 'SES / S3 / RDS / EKS', dotColor: 'bg-orange-600' },
  { name: 'Apache Flink', role: 'Stream CDC/ETL', dotColor: 'bg-accent-cobalt' },
  { name: 'Kafka / EventBridge', role: 'Pub/Sub Streams', dotColor: 'bg-sky-600' },
];

export const CoreStack = (props: SectionProps) => {
  const { isDarkMode } = props;

  return (
    <section
      id="stack"
      className={`border-2 p-6 neo-shadow-black space-y-4 ${
        isDarkMode
          ? 'bg-dark-surface border-dark-outline-variant'
          : 'bg-white border-stroke-black'
      }`}
    >
      <div
        className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 pb-3 ${
          isDarkMode ? 'border-dark-outline-variant' : 'border-stroke-black'
        }`}
      >
        <div>
          <span
            className={`font-mono text-xs uppercase tracking-widest font-bold ${
              isDarkMode ? 'text-dark-primary' : 'text-accent-cobalt'
            }`}
          >
            [INFRASTRUCTURE RUNTIME]
          </span>
          <h3
            className={`font-headline text-lg sm:text-xl uppercase font-bold ${
              isDarkMode ? 'text-dark-on-surface' : 'text-on-surface'
            }`}
          >
            Core Stack &amp; Binary Primitives
          </h3>
        </div>
        <div
          className={`font-mono text-xs font-bold ${
            isDarkMode ? 'text-dark-outline' : 'text-neutral-500'
          }`}
        >
          PROD DEPLOYED &bull; ZERO DRIFT
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {stackItems.map((item) => (
          <div
            key={item.name}
            className={`p-3 border-2 flex items-center gap-3 transition-colors ${
              isDarkMode
                ? 'bg-dark-surface-lowest border-dark-outline-variant hover:border-dark-on-surface'
                : 'bg-surface-container-lowest border-stroke-black hover:bg-surface-container'
            }`}
          >
            <span
              className={`w-3 h-3 ${item.dotColor} border ${
                isDarkMode ? 'border-dark-outline-variant' : 'border-stroke-black'
              } flex-shrink-0`}
            ></span>
            <div className="min-w-0">
              <div
                className={`font-mono text-xs font-bold truncate ${
                  isDarkMode ? 'text-dark-on-surface' : 'text-on-surface'
                }`}
              >
                {item.name}
              </div>
              <div
                className={`font-mono text-[10px] truncate ${
                  isDarkMode ? 'text-dark-outline' : 'text-neutral-500'
                }`}
              >
                {item.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
