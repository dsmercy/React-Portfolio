export interface Project {
  icon: string
  title: string
  description: string
  tech: string[]
  highlights: string[]
  github: string
  live?: string
}

const projects: Project[] = [
  {
    icon: '🔐',
    title: 'Enterprise RBAC / ABAC Platform',
    description:
      'Multi-tenant authorization platform with a policy engine, permission evaluation pipeline, and full audit logging. Designed to handle complex role hierarchies and attribute-based rules across isolated tenants.',
    tech: ['.NET Core', 'C#', 'PostgreSQL', 'Redis', 'JWT', 'Docker'],
    highlights: [
      'Policy engine evaluates RBAC and ABAC rules with sub-5 ms p99 latency via Redis caching — supporting 15+ production tenants',
      'Multi-tenant design enforces data isolation at the permission layer — no cross-tenant leakage',
      'Full audit trail logs every permission check with actor, resource, and decision outcome',
      'Gateway hardened against CVEs via Sonarqube, Coverity, and Twistlock scanning integrated into the CI/CD pipeline',
    ],
    github: 'https://github.com/dsmercy/rbac-platform',
  },
  {
    icon: '🚦',
    title: 'API Gateway (YARP-based)',
    description:
      "Reverse-proxy API gateway built on Microsoft's YARP library, with dynamic route configuration, centralised JWT authentication, rate limiting, and request/response middleware pipelines.",
    tech: ['.NET Core', 'YARP', 'JWT', 'Redis', 'Docker', 'C#'],
    highlights: [
      'Dynamic routing table loaded at runtime — zero-downtime route updates without redeployment',
      'Centralised auth middleware validates JWTs once at the gateway, eliminating per-service duplication',
      'Token-bucket rate limiter protects downstream services from traffic spikes',
      'Request correlation IDs and structured logging piped to centralised observability stack',
    ],
    github: 'https://github.com/dsmercy/yarp-api-gateway',
  },
  {
    icon: '🔀',
    title: 'Kafka Distributed Systems Playground',
    description:
      'Hands-on reference implementation of production Kafka patterns: consumer groups, dead-letter queues, idempotency, event replay, and distributed tracing integrated with a schema registry.',
    tech: ['Apache Kafka', '.NET Core', 'C#', 'Schema Registry', 'Docker', 'OpenTelemetry'],
    highlights: [
      'Consumer group rebalancing demo shows partition reassignment under load without message loss',
      'DLQ pattern routes poison messages to a dead-letter topic with retry metadata attached',
      'Idempotency layer deduplicates at-least-once deliveries using Redis atomic operations',
      "OpenTelemetry traces span producers and consumers for end-to-end distributed tracing — modelled on production patterns from Honeywell's industrial analytics platform",
    ],
    github: 'https://github.com/dsmercy/kafka-distributed-playground',
  },
  {
    icon: '🛒',
    title: 'E-Commerce Platform (Modular Monolith)',
    description:
      'Full-featured e-commerce backend built as a modular monolith with Clean Architecture. Covers product catalogue, cart, orders, search, caching, and secure authentication — ready to extract into microservices.',
    tech: ['.NET Core', 'C#', 'PostgreSQL', 'Redis', 'Elasticsearch', 'JWT', 'Docker'],
    highlights: [
      'Module boundaries enforced via internal assemblies — each domain owns its own data and API surface',
      'Redis cache layer reduces DB read load by ~60% on high-traffic product catalogue endpoints',
      'Full-text product search powered by Elasticsearch with relevance tuning and filters',
      'JWT + refresh-token auth with secure cookie rotation and sliding session expiry',
    ],
    github: 'https://github.com/dsmercy/ecommerce-modular-monolith',
  },
]

export default projects
