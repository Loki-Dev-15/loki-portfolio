import "./SystemsTicker.css";

// A finance-ledger-style ticker tape: real systems in production, real numbers,
// scrolling continuously like a trading floor board. Ties to the domain instead
// of an abstract flow diagram.
const ENTRIES = [
  { name: "CAPEX / REVEX", metric: "50% FASTER APPROVALS" },
  { name: "CREDIT NOTE AUTOMATION", metric: "40+ ACTIVE USERS" },
  { name: "MARGIN AUTOMATION", metric: "100+ USERS · PAN-INDIA" },
  { name: "TIMESHEET SYSTEM", metric: "40% FASTER TURNAROUND" },
  { name: "WECARE API", metric: "AES-GCM ENCRYPTED" },
];

function TickerRow({ ariaHidden = false }) {
  return (
    <div className="ticker-row" aria-hidden={ariaHidden}>
      {ENTRIES.map((e) => (
        <span className="ticker-entry" key={e.name}>
          <span className="ticker-dot" />
          <span className="ticker-name mono">{e.name}</span>
          <span className="ticker-metric mono">{e.metric}</span>
        </span>
      ))}
    </div>
  );
}

export default function SystemsTicker() {
  return (
    <div className="ticker" role="img" aria-label="Live production systems and their impact metrics">
      <span className="ticker-label mono">LIVE IN PRODUCTION</span>
      <div className="ticker-viewport">
        <div className="ticker-track">
          <TickerRow />
          <TickerRow ariaHidden />
        </div>
      </div>
    </div>
  );
}
