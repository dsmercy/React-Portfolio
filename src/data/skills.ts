export interface SkillCategory {
  category: string
  icon: string
  skills: string[]
}

const skills: SkillCategory[] = [
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      'C#', '.NET Core', 'ASP.NET Web API', 'Node.js',
      'Python', 'FastAPI', 'TypeScript', 'React.js',
      'Angular', 'Windows Services', 'REST APIs', 'gRPC',
    ],
  },
  {
    category: 'Distributed Systems',
    icon: '🔀',
    skills: [
      'Apache Kafka', 'Azure Event Hub', 'Redis',
      'Consumer Groups', 'Dead-Letter Queues', 'Schema Registry',
      'Idempotency Patterns', 'Event Replay',
    ],
  },
  {
    category: 'API & Auth',
    icon: '🔐',
    skills: [
      'API Gateway (YARP)', 'JWT', 'RBAC', 'ABAC',
      'OAuth 2.0 / OIDC', 'Rate Limiting', 'Dynamic Routing', 'Middleware Pipelines',
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    skills: [
      'AWS', 'Azure', 'GCP', 'Docker',
      'Kubernetes', 'AKS', 'ECS / EKS', 'GitHub Actions',
      'Octopus Deploy', 'Bamboo CI/CD', 'Terraform', 'Linux',
    ],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    skills: [
      'PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB',
      'CockroachDB', 'Cosmos DB', 'SQLite', 'Redis (Cache)',
      'Entity Framework Core', 'Dapper', 'Query Optimisation',
    ],
  },
  {
    category: 'Security & Quality',
    icon: '🛡️',
    skills: [
      'Sonarqube', 'Coverity', 'Twistlock', 'BlackDuck',
      'CVE Remediation', 'Code Review', 'SAST / DAST', 'Dependency Scanning',
    ],
  },
  {
    category: 'Architecture & Practices',
    icon: '🏗️',
    skills: [
      'Microservices', 'Clean Architecture', 'Domain-Driven Design',
      'Event-Driven Design', 'CQRS', 'System Design',
      'Technical Documentation', 'Agile / Scrum',
    ],
  },
]

export default skills
