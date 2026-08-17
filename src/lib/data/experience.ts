import type { Experience } from '$lib/types';

export const experiences: Experience[] = [
  {
    period: 'March 2024 — Present',
    role: 'Junior Data Engineer',
    company: 'Lately, Everything Needs Analytics (LENA)',
    highlights: [
      'Designed and developed production-grade ELT pipelines using Databricks, PySpark, SQL, dbt, Snowflake, and Matillion, delivering scalable datasets for analytics and operational applications.', 
      'Built an end-to-end Medallion Architecture pipeline from Snowflake to Databricks to Aerospike, implementing Bronze and Silver layers and serving curated data through a high-performance key-value store for downstream systems.',
      'Automated business-critical reporting pipelines, eliminating manual data preparation and enabling reliable scheduled refreshes for dashboards consumed by business stakeholders.',
      'Partnered directly with clients, business stakeholders, and cross-functional teams to translate business requirements into scalable data models, pipeline architectures, and production-ready solutions.',
      'Co-owned production data pipelines from solution design through deployment, contributing to architecture discussions, code reviews, testing, and Git-based release workflows.'
    ],
    skills: ['Python', 'SQL', 'dbt', 'Databricks', 'Snowflake']
  },
  {
    period: 'August 2023 — September 2023',
    role: 'Data Analyst Intern',
    company: 'Asia United Bank',
    highlights: [
      'Prepared and analyzed credit-risk data while automating recurring scorecard consolidation workflows.'
    ],
    skills: ['Python', 'SQL', 'Excel']
  },
  {
    period: 'July 2023 — August 2023',
    role: 'Information Security Intern',
    company: 'Asia United Bank',
    highlights: [
      'Created secure-coding guidance for Java and C applications based on the OWASP ASVS.'
    ],
    skills: ['OWASP ASVS', 'Java', 'C']
  }
];
