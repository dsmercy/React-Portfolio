import SectionWrapper from '../components/SectionWrapper'
import Badge from '../components/Badge'

const EXPERTISE = [
  'Microservices Architecture',
  'Event-Driven Systems (Kafka)',
  'API Gateway & Service Routing',
  'JWT / RBAC / ABAC',
  '.NET Core / ASP.NET Web API',
  'CI/CD & Cloud-Native Deployments',
  'Distributed Caching (Redis)',
  'System Design',
]

const STATS = [
  { value: '7+',  label: 'Years of backend experience' },
  { value: '20+', label: 'Applications managed'        },
  { value: '3',   label: 'Companies & domains served'  },
]

export default function About() {
  return (
    <SectionWrapper id="about">
      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-4">
        About me
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* ── Left column: bio ──────────────────────────── */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] leading-tight">
            Building reliable systems that{' '}
            <span className="text-[var(--color-accent-light)]">scale under pressure</span>
          </h2>

          <div className="flex flex-col gap-4 text-[var(--color-text-secondary)] leading-relaxed">
            <p>
              I'm a Senior Backend Engineer with 7+ years of experience designing and
              building scalable, distributed systems. My stack centres on .NET Core and
              cloud-native technologies — with deep hands-on work in microservices,
              event-driven architecture, and API gateway patterns. 
            </p>
            <p>
              I've led modernisation of legacy APIs to .NET 8, owned 20+ production
              applications across Honeywell's Connected Plant System and SaaS products,
              and built event-driven pipelines on Kafka and Azure Event Hub that process
              millions of messages reliably. Security is a first-class concern in
              everything I ship — from RBAC/ABAC policy engines to JWT auth flows.
            </p>
            <p>
              Outside of engineering I enjoy diving into distributed systems papers,
              tinkering with home-lab infrastructure, and mentoring developers who are
              growing into backend work.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-2">
            {STATS.map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-[var(--color-text-primary)]">
                  {value}
                </span>
                <span className="text-xs text-[var(--color-text-muted)] leading-snug">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column: expertise badges ───────────────── */}
        <div className="flex flex-col gap-6">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-4">
              Core expertise
            </p>
            <div className="flex flex-wrap gap-2">
              {EXPERTISE.map((skill) => (
                <Badge key={skill} label={skill} variant="accent" />
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
              Currently exploring
            </p>
            <div className="flex flex-col gap-2 text-sm text-[var(--color-text-secondary)]">
              {[
                '⚡ Kubernetes advanced scheduling & service mesh (Istio)',
                '🔷 .NET Aspire for cloud-native orchestration',
                '⚡ Event sourcing & CQRS at scale',
              ].map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  )
}
