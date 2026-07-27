// Tech stack data — grouped exactly as in the resume's "Technical Skills" section.
// icon: component from react-icons, color: brand-ish accent used only for the icon glyph.

import {
  SiDotnet,
  SiSharp,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiJquery,
  SiBootstrap,
  SiGit,
  SiSwagger,
  SiPostman,
  SiGithubcopilot,
  SiClaude,
} from "react-icons/si";
import { TbDatabase, TbServer2, TbBrandVisualStudio, TbApi, TbShieldLock, TbFileText } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { FaRobot } from "react-icons/fa6";

export const techGroups = [
  {
    label: "Languages & Frameworks",
    items: [
      { name: "C#", icon: SiSharp },
      { name: "ASP.NET Core Web API", icon: SiDotnet },
      { name: "ASP.NET Core MVC", icon: SiDotnet },
      { name: "ADO.NET / EF Core", icon: TbDatabase },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
    ],
  },
  {
    label: "Front-End",
    items: [
      { name: "jQuery", icon: SiJquery },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "JQGrid", icon: TbDatabase },
      { name: "Materialize", icon: SiCss },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "SQL Server 2008–2022", icon: TbDatabase },
      { name: "T-SQL", icon: TbDatabase },
      { name: "Stored Procedures", icon: TbServer2 },
      { name: "Triggers & Views", icon: TbServer2 },
    ],
  },
  {
    label: "Tools & Platforms",
    items: [
      { name: "Visual Studio 2022", icon: TbBrandVisualStudio },
      { name: "VS Code", icon: VscVscode },
      { name: "Postman", icon: SiPostman },
      { name: "Swagger", icon: SiSwagger },
      { name: "IIS", icon: TbServer2 },
      { name: "Git", icon: SiGit },
      { name: "Serilog", icon: TbServer2 },
    ],
  },
  {
    label: "AI-Assisted Development",
    items: [
      { name: "GitHub Copilot", icon: SiGithubcopilot },
      { name: "ChatGPT", icon: FaRobot },
      { name: "Claude AI", icon: SiClaude },
    ],
  },
];

// Flat lookup used anywhere a short tech label needs an icon (e.g. Experience tags).
// Matched by substring so labels like ".NET Core / ASP.NET" resolve sensibly.
const ICON_LOOKUP = [
  { match: /\.net|asp\.net/i, icon: SiDotnet },
  { match: /c#/i, icon: SiSharp },
  { match: /ado\.net|ef core|entity/i, icon: TbDatabase },
  { match: /sql server|t-sql|database/i, icon: TbDatabase },
  { match: /web api|rest/i, icon: TbApi },
  { match: /aes|encrypt|security/i, icon: TbShieldLock },
  { match: /serilog|log/i, icon: TbFileText },
  { match: /iis|server/i, icon: TbServer2 },
  { match: /jquery/i, icon: SiJquery },
  { match: /javascript|js/i, icon: SiJavascript },
  { match: /html/i, icon: SiHtml5 },
  { match: /css/i, icon: SiCss },
  { match: /bootstrap/i, icon: SiBootstrap },
  { match: /git/i, icon: SiGit },
  { match: /swagger/i, icon: SiSwagger },
  { match: /postman/i, icon: SiPostman },
  { match: /copilot/i, icon: SiGithubcopilot },
  { match: /claude/i, icon: SiClaude },
  { match: /visual studio|vs2022|vs2019/i, icon: TbBrandVisualStudio },
  { match: /workflow|enterprise/i, icon: TbFileText },
];

export function getTechIcon(label) {
  const found = ICON_LOOKUP.find((entry) => entry.match.test(label));
  return found ? found.icon : null;
}
