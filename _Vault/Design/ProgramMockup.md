Here is a concise PRD for an offline, client-only Program Management Portal mockup implemented in pure HTML/CSS/JavaScript. It specifies scope, personas, IA, data models, interactions, and sample UI behaviors so a single-page app can be prototyped without a backend.

Product requirements document (PRD)
Product name
- Program Management Portal (offline mockup)

Goal
- Provide an executive-ready, interactive mockup to demonstrate program structure, KPI tracking, roadmaps, quarterly planning (BRP/QBR), governance cadences, RAID management, and vendor performance—entirely in the browser with no server dependencies.

Non-goals
- Real-time collaboration, authentication, external integrations, persistence beyond browser storage, and sophisticated charting beyond basic JS-rendered visuals.

Personas
- Executive sponsor: scans program KPIs, decisions, risks, vendor scorecards.
- Program manager: maintains roadmap, EVM rollups, RAID, meeting agendas.
- Stream lead: updates stream KPIs, sprint plans, RAID at stream level.
- PMO analyst: prepares QBR/BRP packs, exports summaries.

Technical constraints
- Single HTML file + modular JS/CSS; no build tools required.
- No external network calls; optional local assets only.
- Persistence via localStorage with JSON export/import.
- Responsive layout (desktop-first, usable on tablet).

Information architecture (navigation)
- Top nav tabs:
  0. Program Structure
  1. KPIs
  2. Roadmaps
  3. Quarterly Planning (BRP/QBR)
  4. Meetings & Notes
  5. RAID
  6. Vendors

- Left sidebar filter:
  - Level: Program / Stream / Team / Country
  - Stream: Sales, Operations, Supplier, Finance Integration
  - Timeframe: Q1–Q8 (24 months)
  - Country: dropdown multi-select

- Main canvas area:
  - Dynamic content per tab with cards, tables, mini-charts (SVG/Canvas), and editors.

Data model (in-memory JSON, persisted to localStorage)
- program
  - name, investment, startDate, endDate, goals[]
- streams[]
  - id, name, owner, level (“Program/Stream/Team”), countries[]
- teams[]
  - id, name, streamId, country, velocityHistory[]
- kpis[]
  - id, level, ownerId (program/stream/team id), name, unit, baseline, target, current, trend[], lastUpdated
- evm[]
  - ownerId, pv, ev, ac, cpi, spi, history[]
- roadmapItems[]
  - id, level, ownerId, title, type (“Phase/Milestone/Feature/Bundle/Migration”), start, end, status, dependencies[], riskLinkIds[]
- quarterPlans[]
  - quarter, sprints[ {name, start, end, goals[]} ], preparation {brpAgenda[], qbrAgenda[], readinessChecklist[]}
- meetings[]
  - id, type (“QBR/BRP/CCB/Steering”), date, attendees[], agenda[], notes, decisions[], actions[]
- raid[]
  - risks[], assumptions[], issues[], dependencies[] with common fields: id, title, owner, impact, probability, rag, due, status, mitigation, links[]
- vendors[]
  - id, name, contacts[], services[], sla {availability, responseSLA}, kpis[ {name, target, current, trend[]} ], stakeholdersMap[ {name, role, relationship} ]
- settings
  - streams, countries, role labels, color palette
- storageMeta
  - version, lastSaved

Key interactions and features
0) Program Structure
- Visual org: tiles for Program Board, Streams (Sales/Operations/Supplier/Finance Integration), Cross-cutting (Data, Integration, Quality, Security, Legacy Transition), Enablement (Change, PMO, Compliance).
- Click any tile to open its summary drawer (owner, KPIs, open risks, roadmap highlights).
- “Export JSON” and “Import JSON” buttons for persistence.

1) KPIs (Program / Stream / Team)
- KPI grid with inline edit (baseline, target, current); sparkline trend using Canvas.
- Toggle “View: Outcome vs Delivery”: Outcome shows business KPIs (quote-to-book time, booking success, adoption, reconciliation); Delivery shows EVM (CPI/SPI), flow (lead/cycle/throughput), and quality (escaped defects).
- Threshold coloring (e.g., CPI/SPI < 0.9 → red); compute CPI/SPI from EV/AC/PV fields.

2) Roadmaps (Program / Stream / Team; Country overlays)
- Horizontal swimlane Gantt (SVG) with lanes: Program Phases, System Rollouts, Migrations, Feature Rollouts, Feature Bundles.
- Country filter overlays (80/20 standard vs local adaptation: color-coding segments).
- Click an item to edit dates, dependencies; dependency arrows drawn in SVG.
- “Generate Sample Roadmap” to prefill 24-month plan for demo.

3) Quarterly Planning (BRP/QBR)
- Quarter selector (Q1–Q8) with sprint tiles (2–3 sprints/quarter).
- BRP section: cross-stream dependency matrix and capacity allocation sliders per stream.
- QBR pack generator: compiles KPI snapshots, EVM rollups, risks > threshold, decisions required; renders a printable summary section.
- Readiness checklist toggle (country rollouts): training, supplier connectivity, migration dry-run, performance SLO; gate indicator (pass/fail).

4) Meetings & Notes
- Templates:
  - QBR agenda: outcomes, EVM trends, benefits burn-up, funding shifts, decisions.
  - BRP agenda: goals by stream, dependencies, cutover dates, capacity plan.
  - CCB agenda: change requests with impact matrix (cost/schedule/benefit/RAID).
- Rich text area (contenteditable) + decision/action capture (simple lists).
- Link notes to roadmap items, KPIs, or risks (creates backlinks).

5) RAID (Program / Stream)
- Tabbed table (Risks/Assumptions/Issues/Dependencies) with RAG and sorting.
- Trigger rules: CPI/SPI < 0.9, adoption miss >10%, SLO breach >5%, recon variance > threshold automatically propose risk cards (client-side rule evaluation).
- “Escalate” marks items for Program Board and adds to next QBR agenda.

6) Vendors
- Vendor card per partner with service scope, SLAs, staffing commitments.
- KPI scorecard: on-time milestones, sprint acceptance, defect density, responsiveness; trend mini-charts.
- Stakeholder map matrix (power/interest) as a quadrant; draggable chips for stakeholders.
- “Add service credit” and “Flag escalation” toggles (visual only).

AI placeholders (non-functional stubs for mockup)
- Buttons that “simulate” results:
  - “Suggest KPI targets” fills targets based on baselines.
  - “Draft QBR pack” pre-populates agendas and decisions.
  - “Cluster risks” groups RAID items by theme.
  - “Summarize meeting notes” condenses contenteditable text.
- Tooltips clarify these are mock outputs.

Sample computed metrics (client-side)
- CPI = EV / AC
- SPI = EV / PV
- Adoption index = weighted average of feature usage by role and country
- Benefits burn-up = cumulative realized benefits vs planned (inputs via KPI editor)

Visual components
- Cards, grids, tabs, accordions; minimal CSS variables for theme.
- Charts: simple Canvas/SVG sparklines, bar charts for KPI trends, Gantt-like timelines.
- Color palette: RAG (green/orange/red), neutral greys, accent blues.

Persistence and templates
- Every section supports “Export JSON” and “Import JSON.”
- “Load Demo Data” instantly bootstraps a realistic program with streams, KPIs, roadmap, and RAID entries for presentation.

Accessibility and usability
- Keyboard navigation for tab switching and table editing.
- High-contrast mode toggle.
- Tooltips on KPI formulas and governance thresholds.

Security
- No external calls; data stays in the browser.
- Clear “Not production—demo only” banner.

Sample file structure
- index.html: markup and containers for tabs, drawers, modals.
- styles.css: layout, components, color variables.
- app.js: state store (in-memory), router (hash-based), renderers per tab, localStorage sync.
- components/
  - charts.js (sparklines, bars, Gantt)
  - tables.js (editable grids)
  - dialogs.js (modals, pickers)
  - export.js (JSON import/export)
  - demoData.js (seed dataset)

Starter HTML skeleton (abbreviated)
- Use this as a base to begin implementation.

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Program Management Portal (Mockup)</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>/* styles.css placeholder: tabs, cards, grids, RAG colors */</style>
</head>
<body>
  <header>
    <h1>Program Management Portal</h1>
    <nav id="top-nav">
      <button data-tab="structure">Program Structure</button>
      <button data-tab="kpis">KPIs</button>
      <button data-tab="roadmaps">Roadmaps</button>
      <button data-tab="quarterly">BRP/QBR</button>
      <button data-tab="meetings">Meetings & Notes</button>
      <button data-tab="raid">RAID</button>
      <button data-tab="vendors">Vendors</button>
    </nav>
  </header>

  <aside id="filters">
    <label>Level
      <select id="levelFilter">
        <option>Program</option>
        <option>Stream</option>
        <option>Team</option>
        <option>Country</option>
      </select>
    </label>
    <label>Stream
      <select id="streamFilter" multiple></select>
    </label>
    <label>Timeframe
      <select id="quarterFilter"></select>
    </label>
    <label>Country
      <select id="countryFilter" multiple></select>
    </label>
    <div class="persistence">
      <button id="loadDemo">Load Demo Data</button>
      <button id="exportJson">Export JSON</button>
      <input id="importJson" type="file" accept=".json">
    </div>
  </aside>

  <main id="app"></main>

  <footer>
    <small>Offline mockup — no backend, data stored in browser.</small>
  </footer>

  <script>
    // app.js placeholder
    const state = { program:{}, streams:[], teams:[], kpis:[], evm:[], roadmapItems:[], quarterPlans:[], meetings:[], raid:{risks:[],assumptions:[],issues:[],dependencies:[]}, vendors:[], settings:{}, storageMeta:{} };

    function render(tab){ /* switch(tab) render different views into #app */ }
    function save(){ localStorage.setItem('pmp-state', JSON.stringify(state)); }
    function load(){ const s = localStorage.getItem('pmp-state'); if(s){ Object.assign(state, JSON.parse(s)); } }
    function init(){
      load();
      document.querySelectorAll('#top-nav button').forEach(b=>b.addEventListener('click',()=>render(b.dataset.tab)));
      document.getElementById('loadDemo').onclick = ()=>{ Object.assign(state, getDemoData()); save(); render('structure'); };
      document.getElementById('exportJson').onclick = ()=>{ const blob = new Blob([JSON.stringify(state,null,2)], {type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='program-portal.json'; a.click(); };
      document.getElementById('importJson').onchange = (e)=>{ const file=e.target.files; if(!file) return; const r=new FileReader(); r.onload=()=>{ Object.assign(state, JSON.parse(r.result)); save(); render('structure'); }; r.readAsText(file); };
      render('structure');
    }
    window.addEventListener('DOMContentLoaded', init);

    // Utility examples
    function calcCPI(ev, ac){ return ac>0 ? (ev/ac) : 0; }
    function calcSPI(ev, pv){ return pv>0 ? (ev/pv) : 0; }
    function getDemoData(){ return {
      program:{ name:'Enterprise Operations Platform', investment:10000000, startDate:'2025-01-01', endDate:'2026-12-31', goals:['Revenue per staff ↑','Quote-to-book time ↓'] },
      streams:[ {id:'sales',name:'Sales/CRM',owner:'VP Sales'}, {id:'ops',name:'Operations/Booking',owner:'VP Ops'}, {id:'supp',name:'Supplier Mgmt',owner:'Head Supplier'}, {id:'fin',name:'Finance Integration',owner:'Finance Lead'} ],
      teams:[ {id:'team-ops-1',name:'Ops Core',streamId:'ops',country:'DE'} ],
      kpis:[ {id:'k1',level:'Program',ownerId:'program',name:'Quote-to-book (days)',unit:'days',baseline:12,target:8,current:10,trend:} ],
      evm:[ {ownerId:'ops',pv:100,ev:90,ac:95,cpi:0.95,spi:0.9,history:[{q:'Q1',cpi:0.92,spi:0.88},{q:'Q2',cpi:0.95,spi:0.9}]} ],
      roadmapItems:[ {id:'r1',level:'Program',ownerId:'program',title:'Pilot Go-Live',type:'Milestone',start:'2025-09-01',end:'2025-09-01',status:'Planned',dependencies:[]} ],
      quarterPlans:[ {quarter:'Q1',sprints:[{name:'S1',start:'2025-01-01',end:'2025-01-14',goals:['Ops MVP']},{name:'S2',start:'2025-01-15',end:'2025-01-28',goals:['Supplier Portal']}], preparation:{brpAgenda:['Goals','Dependencies','Capacity'], qbrAgenda:['Outcomes','EVM','Benefits'], readinessChecklist:['Training','Supplier connectivity']} } ],
      meetings:[ {id:'m1',type:'QBR',date:'2025-03-31',attendees:['CTO','PMO'],agenda:['Outcomes','Risks'],notes:'...',decisions:['Reallocate budget'],actions:['Ops add headcount']} ],
      raid:{ risks:[{id:'risk1',title:'Performance SLO breach',owner:'SRE',impact:'High',probability:'Med',rag:'Amber',due:'2025-02-15',status:'Open',mitigation:'Perf harness',links:['r1']}], assumptions:[], issues:[], dependencies:[] },
      vendors:[ {id:'v1',name:'SI Partner A',contacts:[{name:'Alice',role:'PM'}],services:['Integration'],sla:{availability:'99.9%',responseSLA:'4h'},kpis:[{name:'On-time milestones',target:95,current:92,trend:}],stakeholdersMap:[{name:'John',role:'CTO',relationship:'Sponsor'}] } ],
      settings:{ countries:['DE','FR','JP','SG'], palette:{primary:'#0b6',danger:'#d33'} },
      storageMeta:{ version:'0.1', lastSaved: new Date().toISOString() }
    }; }
  </script>
</body>
</html>

Acceptance criteria (demo-ready)
- Loads without a server in a modern browser.
- Navigating tabs renders corresponding views with demo data.
- KPI edits, roadmap item changes, RAID entries persist in localStorage.
- EVM and KPI thresholds color correctly; QBR pack generates a printable summary section.
- Export/import JSON works; “Load Demo Data” resets the app state.

Future enhancements (out of scope for mockup)
- CSV importers for KPI and RAID.
- Drag-and-drop Gantt editing, more sophisticated charts.
- Role-based views and print-ready slide exports.

This PRD gives enough structure to build a functional offline prototype in a few hours, while demonstrating governance rigor (EVM, QBR/BRP), execution visibility (roadmaps), and control (RAID, vendor KPIs) without any backend.