import heroCapex from "../assets/images/project-capex.jpg";
import heroCredit from "../assets/images/project-credit.jpg";
import heroTimesheet from "../assets/images/project-timesheet.jpg";

export const projects = [
  {
    slug: "wecare-api",
    entry: "001",
    name: "Secure Integration Platform (WeCare API)",
    duration: "2026 — Present",
    status: "In production",
    image: null,
    description:
      "A secure ASP.NET Core 8 API using AES-GCM encryption for sensitive data transmission and multi-client authentication, built for cross-platform (Python ↔ C#) compatibility.",
    impact:
      "Delivered a production-grade encrypted API layer safeguarding sensitive financial data in transit, with structured logging that shortened incident diagnosis time.",
    contributions: [
      "Designed AES-GCM encryption scheme with matching implementations in C# and Python for cross-platform compatibility.",
      "Built multi-client authentication and authorization for external service consumers.",
      "Implemented structured, client-based logging with Serilog for faster production diagnostics.",
      "Owned the release lifecycle end-to-end, deploying to IIS alongside legacy systems with zero downtime.",
    ],
    tags: [".NET 8", "C#", "SQL Server", "ADO.NET", "Serilog", "REST API", "AES-GCM", "IIS"],
  },
  {
    slug: "capex-revex",
    entry: "002",
    name: "Capex / Revex Management System",
    duration: "2024 — 2026",
    status: "Live · ~40 finance users",
    image: heroCapex,
    description:
      "A multi-tiered capital and revenue expenditure approval platform with full audit trails and real-time visibility, replacing a manual, spreadsheet-based approval process.",
    impact:
      "Cut approval processing time by roughly 50% and gave finance approvers a structured, auditable request system with faster data review via grid-based views.",
    contributions: [
      "Designed the database schema and stored procedures powering multi-level approvals and audit logging.",
      "Built reusable lookup modules and admin-configurable screens to speed up new feature delivery.",
      "Designed grid-based data views with JQGrid for high-volume expenditure records.",
      "Improved transaction performance by roughly 30% through query tuning.",
    ],
    tags: [".NET 8", "ADO.NET", "SQL Server 2022", "jQuery", "JQGrid", "Enterprise Workflow"],
  },
  {
    slug: "timesheet-system",
    entry: "003",
    name: "Timesheet Management System",
    duration: "2023 — 2024",
    status: "Live · org-wide rollout",
    image: heroTimesheet,
    description:
      "An organization-wide employee task-tracking and approval system with OE lookup, unlock requests, admin dashboards, and role-based approvals.",
    impact:
      "Automated timesheet submission and approval, reducing manual tracking effort and cutting approval turnaround time by roughly 40%.",
    contributions: [
      "Implemented an OE lookup modal with server-side validation.",
      "Created reporting endpoints and optimized underlying queries for real-time visibility.",
      "Added permissioned actions and full audit trails for admin operations.",
    ],
    tags: ["ASP.NET", "jQuery", "JQGrid", "SQL Server 2022", "ADO.NET"],
  },
  {
    slug: "credit-note-automation",
    entry: "004",
    name: "Credit Note Automation System",
    duration: "2023 — Present",
    status: "Live · ~40 users",
    image: heroCredit,
    description:
      "An automated finance approval workflow for credit notes with role-based access, audit trails, and compliance-focused validation.",
    impact:
      "Automated the end-to-end credit note generation and approval process — cutting manual effort by roughly 50%, minimizing billing errors, and accelerating reconciliation.",
    contributions: [
      "Developed the approval engine and stakeholder notifications.",
      "Integrated the workflow with existing ERP modules.",
      "Built audit and reporting features for compliance visibility.",
    ],
    tags: ["ASP.NET", "jQuery", "SQL Server", "SSRS", "ADO.NET"],
  },
  {
    slug: "margin-automation",
    entry: "005",
    name: "Margin Summary Automation System",
    duration: "2021 — 2024",
    status: "Live · 100+ users, pan-India",
    image: null,
    description:
      "A financial automation system for cost estimation and cash-flow management, scaled across a pan-India, multi-region rollout to streamline multi-step approval workflows.",
    impact:
      "Automated margin calculation and reporting, improving profitability-tracking accuracy and enabling faster, data-driven pricing decisions.",
    contributions: [
      "Designed automated margin-calculation logic using backend business rules.",
      "Integrated cost, billing, and revenue data sources for accurate margin computation.",
      "Optimized SQL queries to improve margin-report performance.",
      "Built role-based views to control access to sensitive financial data.",
    ],
    tags: ["ASP.NET", "jQuery", "SQL Server 2017", "ADO.NET", "Workflow Engine"],
  },
];
