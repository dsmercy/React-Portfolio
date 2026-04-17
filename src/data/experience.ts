export interface Role {
  company: string
  title: string
  period: string
  location: string
  bullets: string[]
}

const experience: Role[] = [
  {
    company: 'Concentrix Catalyst',
    title: 'Software Engineer 2',
    period: 'Feb 2022 – Present',
    location: 'Remote',
    bullets: [
      "Led backend development on Honeywell's Connected Plant System — an industrial IoT SaaS platform serving oil & gas, refining, and petrochemical industries across multiple tenants.",
      'Designed and developed microservices and event-driven systems powering core business workflows across multiple product lines.',
      'Maintained and extended the internal API gateway (YARP-based) and Python FastAPI services consumed by downstream teams.',
      'Owned 20+ cross-functional production applications end-to-end — from feature development through CI/CD pipeline management and incident response.',
      'Modernised legacy .NET Framework APIs to .NET 8, cutting cold-start time by 40% and enabling async-first request handling.',
      'Provided production support via proactive Kibana log monitoring, resolving incidents with minimal downtime across multi-tenant environments.',
      'Improved platform security posture by auditing authentication flows, resolving CVEs, and enforcing RBAC at the gateway layer.',
    ],
  },
  {
    company: 'Chetu India Pvt Ltd',
    title: 'Senior Software Developer',
    period: '2020 – 2022',
    location: 'Noida, India',
    bullets: [
      'Built backend services in .NET Core for US-based clients across healthcare, lottery, betting, and e-commerce verticals — delivering projects solo from requirements to AWS production.',
      'Deployed and maintained applications on AWS (EC2, RDS, S3, Lambda) with Infrastructure-as-Code via CloudFormation.',
      'Designed RESTful APIs adhering to OpenAPI standards, reviewed by client architects before release.',
      'Mentored two junior developers and conducted code reviews to enforce clean architecture and coding standards.',
    ],
  },
  {
    company: 'Tekyul Technology',
    title: 'Software Developer',
    period: '2018 – 2020',
    location: 'India',
    bullets: [
      'Built and maintained logistics and fleet-management applications using .NET Framework and ASP.NET MVC.',
      'Developed real-time tracking features integrating third-party GPS and mapping APIs.',
      'Optimised SQL Server queries and stored procedures, cutting report generation time from 12 s to under 2 s — an 83% reduction.',
      'Delivered end-to-end features independently — from requirements gathering through QA and production deployment.',
    ],
  },
]

export default experience
