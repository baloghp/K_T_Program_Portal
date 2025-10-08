// Vendor Level KPIs Component
function createVendorKPIs(vendorLabel) {
  const title = vendorLabel ? `Vendor KPIs — ${vendorLabel}` : 'Vendor KPIs';

  const kpis = [
    {
      group: 'Delivery reliability',
      desc: 'Milestone on‑time %, sprint acceptance rate, staffing stability.',
      metrics: [
        { name: 'Milestone On-Time %', value: '87%', trend: 'up', performance: 'warning', color: 'text-warning' },
        { name: 'Sprint Acceptance Rate', value: '92%', trend: 'up', performance: 'good', color: 'text-success' },
        { name: 'Staffing Stability', value: '94%', trend: 'up', performance: 'good', color: 'text-success' }
      ]
    },
    {
      group: 'Quality',
      desc: 'Defect density/severity, rework %, integration test pass rate.',
      metrics: [
        { name: 'Defect Density', value: '2.1 / KLOC', trend: 'down', performance: 'good', color: 'text-success' },
        { name: 'Critical Defects', value: '3', trend: 'down', performance: 'warning', color: 'text-warning' },
        { name: 'Rework %', value: '12%', trend: 'down', performance: 'warning', color: 'text-warning' },
        { name: 'Integration Test Pass Rate', value: '89%', trend: 'up', performance: 'warning', color: 'text-warning' }
      ]
    },
    {
      group: 'Commercial',
      desc: 'Service credits triggered, change request cycle time, forecast accuracy.',
      metrics: [
        { name: 'Service Credits Triggered', value: '2', trend: 'down', performance: 'good', color: 'text-success' },
        { name: 'Change Request Cycle Time', value: '5.2 days', trend: 'down', performance: 'good', color: 'text-success' },
        { name: 'Forecast Accuracy', value: '94%', trend: 'up', performance: 'good', color: 'text-success' }
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
        <p class="text-base-content/70">Vendor performance across delivery, quality, and commercial metrics</p>
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
  module.exports = { createVendorKPIs };
}
