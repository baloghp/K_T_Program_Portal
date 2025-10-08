// Country Level KPIs Component
function createCountryKPIs(countryLabel) {
  const title = countryLabel ? `Country KPIs — ${countryLabel}` : 'Country KPIs';

  const kpis = [
    {
      group: 'Readiness score',
      desc: 'Training completion, data reconciliation dry‑run pass, supplier connectivity, performance SLOs met; gate ≥90%.',
      metrics: [
        { name: 'Training Completion', value: '88%', trend: 'up', performance: 'warning', color: 'text-warning' },
        { name: 'Reconciliation Dry‑Run Pass', value: '94%', trend: 'up', performance: 'good', color: 'text-success' },
        { name: 'Supplier Connectivity', value: '91%', trend: 'up', performance: 'good', color: 'text-success' },
        { name: 'Performance SLOs Met', value: '89%', trend: 'up', performance: 'warning', color: 'text-warning' }
      ]
    },
    {
      group: 'Go‑live stability',
      desc: 'Booking success rate, supplier confirmation latency, incident rate during hypercare.',
      metrics: [
        { name: 'Booking Success Rate', value: '93%', trend: 'up', performance: 'good', color: 'text-success' },
        { name: 'Supplier Confirmation Latency', value: '2.4s', trend: 'down', performance: 'good', color: 'text-success' },
        { name: 'Hypercare Incident Rate', value: '0.7 / day', trend: 'down', performance: 'warning', color: 'text-warning' }
      ]
    },
    {
      group: 'Adoption by role',
      desc: '% of in‑scope users active on key features within 30/60/90 days.',
      metrics: [
        { name: '30‑Day Adoption', value: '64%', trend: 'up', performance: 'warning', color: 'text-warning' },
        { name: '60‑Day Adoption', value: '78%', trend: 'up', performance: 'good', color: 'text-success' },
        { name: '90‑Day Adoption', value: '86%', trend: 'up', performance: 'good', color: 'text-success' }
      ]
    },
    {
      group: 'Financial close success',
      desc: 'Month‑end reconciliation accuracy and time to close on new system.',
      metrics: [
        { name: 'Reconciliation Accuracy', value: '97.2%', trend: 'up', performance: 'good', color: 'text-success' },
        { name: 'Time to Close', value: '2.9 days', trend: 'down', performance: 'info', color: 'text-info' }
      ]
    },
    {
      group: 'Decommission value',
      desc: 'Legacy license/infra savings realized vs. plan per country.',
      metrics: [
        { name: 'Savings Realized vs Plan', value: '1.05x', trend: 'up', performance: 'good', color: 'text-success' },
        { name: 'Legacy Systems Retired', value: '7', trend: 'up', performance: 'good', color: 'text-success' }
      ]
    }
  ];

  function badge(metric) {
    const globalRef = (typeof window !== 'undefined') ? window : globalThis;
    const hasTrend = typeof globalRef.getTrendIndicator === 'function' ? globalRef.getTrendIndicator : null;
    const t = hasTrend ? hasTrend(metric.trend, metric.performance || 'good') : { icon: '→', color: 'text-info', label: 'Stable' };
    return `<span class="badge badge-outline ${t.color}">${t.icon} ${t.label}</span>`;
  }

  return `
    <section class="space-y-6">
      <header>
        <h2 class="text-3xl font-semibold text-base-content mb-2">${title}</h2>
        <p class="text-base-content/70">Country readiness, stability, adoption and value KPIs</p>
      </header>

      ${kpis.map(group => `
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <div class="flex items-center justify-between mb-2">
              <h3 class="card-title text-xl">${group.group}</h3>
              <span class="text-sm text-base-content/60">${group.desc}</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              ${group.metrics.map(m => `
                <div class="stat bg-base-200 rounded-lg p-4">
                  <div class="stat-title flex items-center justify-between">
                    <span>${m.name}</span>
                    ${badge(m)}
                  </div>
                  <div class="stat-value ${m.color}">${m.value}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `).join('')}
    </section>
  `;
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createCountryKPIs };
}
