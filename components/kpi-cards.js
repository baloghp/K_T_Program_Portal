// Program Level KPIs Component
function createKPICards() {
  return `
    <section class="space-y-6">
      <header>
        <h2 class="text-3xl font-semibold text-base-content mb-2">KPIs Dashboard</h2>
        <p class="text-base-content/70">Key Performance Indicators by selected layer and filters</p>
      </header>
      <h3 class="text-2xl font-bold text-base-content mb-6">Program Level KPIs</h3>
      
      <!-- KPI Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- Revenue per staff KPI -->
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <div class="flex items-center justify-between mb-4">
              <h4 class="card-title text-lg">Revenue per Staff</h4>
              <div class="badge badge-success">On Track</div>
            </div>
            <div class="stat">
              <div class="stat-value text-rag-green">€45,200</div>
              <div class="stat-desc">Target: €42,000</div>
            </div>
            <div class="mt-4">
              <div class="text-sm text-base-content/70 mb-2">Definition: Total revenue ÷ FTE</div>
              <div class="text-xs text-base-content/60">Target: Uplift by wave and 12 months post-global</div>
            </div>
            <div class="card-actions justify-end mt-4">
              <div class="text-xs text-base-content/50">Last updated: 2 days ago</div>
            </div>
          </div>
        </div>

        <!-- Quote-to-cash cycle time KPI -->
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <div class="flex items-center justify-between mb-4">
              <h4 class="card-title text-lg">Quote-to-Cash Cycle</h4>
              <div class="badge badge-warning">Needs Attention</div>
            </div>
            <div class="stat">
              <div class="stat-value text-rag-amber">12 days</div>
              <div class="stat-desc">Target: 8 days</div>
            </div>
            <div class="mt-4">
              <div class="text-sm text-base-content/70 mb-2">Definition: Average days from first inquiry to invoice</div>
              <div class="text-xs text-base-content/60">Target: Reduction vs baseline</div>
            </div>
            <div class="card-actions justify-end mt-4">
              <div class="text-xs text-base-content/50">Last updated: 1 day ago</div>
            </div>
          </div>
        </div>

        <!-- Adoption index KPI -->
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <div class="flex items-center justify-between mb-4">
              <h4 class="card-title text-lg">Adoption Index</h4>
              <div class="badge badge-success">Good</div>
            </div>
            <div class="stat">
              <div class="stat-value text-rag-green">78%</div>
              <div class="stat-desc">Threshold: 75%</div>
            </div>
            <div class="mt-4">
              <div class="text-sm text-base-content/70 mb-2">Definition: Weighted feature adoption across roles/countries</div>
              <div class="text-xs text-base-content/60">Threshold for go/no-go to next wave</div>
            </div>
            <div class="card-actions justify-end mt-4">
              <div class="text-xs text-base-content/50">Last updated: 3 days ago</div>
            </div>
          </div>
        </div>

        <!-- Customer satisfaction KPI -->
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <div class="flex items-center justify-between mb-4">
              <h4 class="card-title text-lg">Customer Satisfaction</h4>
              <div class="badge badge-success">Excellent</div>
            </div>
            <div class="stat">
              <div class="stat-value text-rag-green">8.4</div>
              <div class="stat-desc">Target: 8.0</div>
            </div>
            <div class="mt-4">
              <div class="text-sm text-base-content/70 mb-2">Measurement: Post-booking and post-event surveys</div>
              <div class="text-xs text-base-content/60">Target: Uplift by region</div>
            </div>
            <div class="card-actions justify-end mt-4">
              <div class="text-xs text-base-content/50">Last updated: 5 days ago</div>
            </div>
          </div>
        </div>

        <!-- Benefits realization KPI -->
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <div class="flex items-center justify-between mb-4">
              <h4 class="card-title text-lg">Benefits Realization</h4>
              <div class="badge badge-info">In Progress</div>
            </div>
            <div class="stat">
              <div class="stat-value text-primary">€2.1M</div>
              <div class="stat-desc">Target: €3.5M</div>
            </div>
            <div class="mt-4">
              <div class="text-sm text-base-content/70 mb-2">Measurement: Cumulative net benefits vs business case</div>
              <div class="text-xs text-base-content/60">Benefit burn-up against investment</div>
            </div>
            <div class="card-actions justify-end mt-4">
              <div class="text-xs text-base-content/50">Last updated: 1 week ago</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}

// Export for use in main HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createKPICards };
}
