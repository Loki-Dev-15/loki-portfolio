import "./WorkflowPipeline.css";

const STAGES = [
  { id: "request", label: "Request", note: "Business raises a request" },
  { id: "review", label: "Review", note: "Role-based validation" },
  { id: "approve", label: "Approve", note: "Multi-level sign-off" },
  { id: "audit", label: "Audit", note: "Immutable trail logged" },
  { id: "deploy", label: "Deploy", note: "Live on IIS, zero downtime" },
];

/**
 * The signature visual of the page: the exact shape of the approval
 * workflows the resume describes (Capex/Revex, Credit Note, Margin, WeCare),
 * rendered as a live, animated pipeline rather than an abstract graphic.
 */
export default function WorkflowPipeline() {
  const n = STAGES.length;

  return (
    <div className="pipeline" role="img" aria-label="Software delivery pipeline: request, review, approve, audit, deploy">
      <svg
        className="pipeline-svg"
        viewBox={`0 0 ${100 * (n - 1) + 100} 60`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          x1="30"
          y1="30"
          x2={100 * (n - 1) + 70}
          y2="30"
          className="pipeline-track"
        />
        <line
          x1="30"
          y1="30"
          x2={100 * (n - 1) + 70}
          y2="30"
          className="pipeline-flow"
        />
        {STAGES.map((s, i) => (
          <circle key={s.id} cx={30 + i * 100} cy="30" r="7" className="pipeline-node" />
        ))}
        <circle r="4" className="pipeline-dot">
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            path={`M30,30 L${30 + (n - 1) * 100},30`}
          />
        </circle>
      </svg>

      <div className="pipeline-labels">
        {STAGES.map((s) => (
          <div className="pipeline-stage" key={s.id}>
            <span className="pipeline-stage-label mono">{s.label}</span>
            <span className="pipeline-stage-note">{s.note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
