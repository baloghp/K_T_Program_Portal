// Budget Management Component
// Provides budget plans and EVM analysis for each layer

function createBudget(layer) {
  const header = `
    <header>
      <h2 class="text-3xl font-semibold text-base-content mb-2">Budget Management — ${layer.charAt(0).toUpperCase() + layer.slice(1)}</h2>
      <p class="text-base-content/70 mb-6">Budget planning, tracking, and Earned Value Management analysis</p>
    </header>
  `;

  switch(layer) {
    case 'program':
      return header + programBudget();
    case 'stream':
      return header + streamBudget();
    case 'country':
      return header + countryBudget();
    case 'vendor':
      return header + vendorBudget();
    default:
      return header + programBudget();
  }
}

function programBudget() {
  return `
    <div class="space-y-6">
      <!-- Program Budget Overview -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="stat bg-base-100 shadow">
          <div class="stat-title">Total Budget</div>
          <div class="stat-value text-primary">$15.2M</div>
          <div class="stat-desc">Annual program budget</div>
        </div>
        <div class="stat bg-base-100 shadow">
          <div class="stat-title">Spent</div>
          <div class="stat-value text-success">$8.7M</div>
          <div class="stat-desc">57% of budget</div>
        </div>
        <div class="stat bg-base-100 shadow">
          <div class="stat-title">Committed</div>
          <div class="stat-value text-warning">$4.1M</div>
          <div class="stat-desc">27% committed</div>
        </div>
        <div class="stat bg-base-100 shadow">
          <div class="stat-title">Remaining</div>
          <div class="stat-value text-info">$2.4M</div>
          <div class="stat-desc">16% available</div>
        </div>
      </div>

      <!-- EVM Chart -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">Earned Value Management (EVM) Chart</h3>
          <div class="mb-4">
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm font-medium">Project Performance Over Time (Millions $)</span>
              <div class="flex space-x-4 text-xs">
                <div class="flex items-center space-x-1">
                  <div class="w-3 h-3 bg-primary rounded"></div>
                  <span>PV - Planned Value</span>
                </div>
                <div class="flex items-center space-x-1">
                  <div class="w-3 h-3 bg-success rounded"></div>
                  <span>EV - Earned Value</span>
                </div>
                <div class="flex items-center space-x-1">
                  <div class="w-3 h-3 bg-warning rounded"></div>
                  <span>AC - Actual Cost</span>
                </div>
              </div>
            </div>
            
            <!-- EVM Chart Container -->
            <div class="relative bg-base-200 rounded-lg p-4 h-80">
              <svg viewBox="0 0 800 300" class="w-full h-full">
                <!-- Grid lines -->
                <defs>
                  <pattern id="evmGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#evmGrid)" />
                
                <!-- Y-axis labels -->
                <text x="15" y="25" class="text-xs fill-base-content/70">$16M</text>
                <text x="15" y="65" class="text-xs fill-base-content/70">$12M</text>
                <text x="15" y="105" class="text-xs fill-base-content/70">$8M</text>
                <text x="15" y="145" class="text-xs fill-base-content/70">$4M</text>
                <text x="15" y="185" class="text-xs fill-base-content/70">$0M</text>
                
                <!-- X-axis labels -->
                <text x="60" y="210" class="text-xs fill-base-content/70">Q1</text>
                <text x="160" y="210" class="text-xs fill-base-content/70">Q2</text>
                <text x="260" y="210" class="text-xs fill-base-content/70">Q3</text>
                <text x="360" y="210" class="text-xs fill-base-content/70">Q4</text>
                <text x="460" y="210" class="text-xs fill-base-content/70">Q5</text>
                <text x="560" y="210" class="text-xs fill-base-content/70">Q6</text>
                <text x="660" y="210" class="text-xs fill-base-content/70">Q7</text>
                <text x="760" y="210" class="text-xs fill-base-content/70">Q8</text>
                
                <!-- Planned Value line (blue) -->
                <polyline points="50,200 150,180 250,160 350,140 450,120 550,100 650,80 750,60" 
                          fill="none" stroke="#3b82f6" stroke-width="4"/>
                
                <!-- Earned Value line (green) -->
                <polyline points="50,200 150,185 250,170 350,155 450,140 550,125 650,110 750,95" 
                          fill="none" stroke="#10b981" stroke-width="4"/>
                
                <!-- Actual Cost line (orange) -->
                <polyline points="50,200 150,190 250,180 350,170 450,160 550,150 650,140 750,130" 
                          fill="none" stroke="#f59e0b" stroke-width="4"/>
                
                <!-- Data points -->
                <circle cx="50" cy="200" r="4" fill="#3b82f6"/>
                <circle cx="150" cy="180" r="4" fill="#3b82f6"/>
                <circle cx="250" cy="160" r="4" fill="#3b82f6"/>
                <circle cx="350" cy="140" r="4" fill="#3b82f6"/>
                <circle cx="450" cy="120" r="4" fill="#3b82f6"/>
                <circle cx="550" cy="100" r="4" fill="#3b82f6"/>
                <circle cx="650" cy="80" r="4" fill="#3b82f6"/>
                <circle cx="750" cy="60" r="4" fill="#3b82f6"/>
                
                <!-- Current point indicator -->
                <line x1="550" y1="50" x2="550" y2="200" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
                <text x="555" y="45" class="text-xs fill-red-600 font-bold">Current</text>
                
                <!-- Value labels at current point -->
                <text x="560" y="105" class="text-xs fill-primary font-bold">PV: $10M</text>
                <text x="560" y="130" class="text-xs fill-success font-bold">EV: $8.7M</text>
                <text x="560" y="155" class="text-xs fill-warning font-bold">AC: $9.1M</text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- EVM Analysis -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">Earned Value Management (EVM) Analysis</h3>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="space-y-4">
              <h4 class="font-semibold text-primary">Core EVM Metrics</h4>
              <div class="space-y-3">
                <div class="flex justify-between items-center p-3 bg-base-200 rounded">
                  <span class="text-sm font-medium">Planned Value (PV)<br><span class="text-xs text-base-content/60">Budgeted cost of work scheduled</span></span>
                  <span class="font-semibold text-primary">$9.2M</span>
                </div>
                <div class="flex justify-between items-center p-3 bg-base-200 rounded">
                  <span class="text-sm font-medium">Earned Value (EV)<br><span class="text-xs text-base-content/60">Budgeted cost of work performed</span></span>
                  <span class="font-semibold text-success">$8.7M</span>
                </div>
                <div class="flex justify-between items-center p-3 bg-base-200 rounded">
                  <span class="text-sm font-medium">Actual Cost (AC)<br><span class="text-xs text-base-content/60">Actual cost of work performed</span></span>
                  <span class="font-semibold text-warning">$9.1M</span>
                </div>
              </div>
            </div>
            
            <div class="space-y-4">
              <h4 class="font-semibold text-secondary">Performance Indexes</h4>
              <div class="space-y-3">
                <div class="flex justify-between items-center p-3 bg-base-200 rounded">
                  <span class="text-sm font-medium">CPI - Cost Performance Index<br><span class="text-xs text-base-content/60">EV ÷ AC (efficiency ratio)</span></span>
                  <span class="font-semibold text-success">0.96</span>
                </div>
                <div class="flex justify-between items-center p-3 bg-base-200 rounded">
                  <span class="text-sm font-medium">SPI - Schedule Performance Index<br><span class="text-xs text-base-content/60">EV ÷ PV (schedule efficiency)</span></span>
                  <span class="font-semibold text-warning">0.95</span>
                </div>
                <div class="flex justify-between items-center p-3 bg-base-200 rounded">
                  <span class="text-sm font-medium">EAC - Estimate at Completion<br><span class="text-xs text-base-content/60">Forecasted total project cost</span></span>
                  <span class="font-semibold text-info">$15.8M</span>
                </div>
              </div>
            </div>
            
            <div class="space-y-4">
              <h4 class="font-semibold text-accent">Variance Analysis</h4>
              <div class="space-y-3">
                <div class="flex justify-between items-center p-3 bg-base-200 rounded">
                  <span class="text-sm font-medium">CV - Cost Variance<br><span class="text-xs text-base-content/60">EV - AC (budget performance)</span></span>
                  <span class="font-semibold text-error">-$0.4M</span>
                </div>
                <div class="flex justify-between items-center p-3 bg-base-200 rounded">
                  <span class="text-sm font-medium">SV - Schedule Variance<br><span class="text-xs text-base-content/60">EV - PV (schedule performance)</span></span>
                  <span class="font-semibold text-error">-$0.5M</span>
                </div>
                <div class="flex justify-between items-center p-3 bg-base-200 rounded">
                  <span class="text-sm font-medium">VAC - Variance at Completion<br><span class="text-xs text-base-content/60">BAC - EAC (total variance)</span></span>
                  <span class="font-semibold text-error">-$0.6M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- EVM Glossary -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">Earned Value Management (EVM) Glossary</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <h4 class="font-semibold text-primary">Core EVM Terms</h4>
              <div class="space-y-3">
                <div class="p-3 bg-base-200 rounded">
                  <div class="font-semibold text-primary">PV - Planned Value</div>
                  <div class="text-sm text-base-content/70">The authorized budget assigned to scheduled work up to a specific point in time. Also known as Budgeted Cost of Work Scheduled (BCWS).</div>
                </div>
                <div class="p-3 bg-base-200 rounded">
                  <div class="font-semibold text-success">EV - Earned Value</div>
                  <div class="text-sm text-base-content/70">The value of work actually performed up to a specific point in time, expressed in terms of the approved budget. Also known as Budgeted Cost of Work Performed (BCWP).</div>
                </div>
                <div class="p-3 bg-base-200 rounded">
                  <div class="font-semibold text-warning">AC - Actual Cost</div>
                  <div class="text-sm text-base-content/70">The realized cost incurred for the work performed up to a specific point in time. Also known as Actual Cost of Work Performed (ACWP).</div>
                </div>
                <div class="p-3 bg-base-200 rounded">
                  <div class="font-semibold text-info">BAC - Budget at Completion</div>
                  <div class="text-sm text-base-content/70">The total budget allocated for the project. This is the original approved budget for the entire project.</div>
                </div>
              </div>
            </div>
            
            <div class="space-y-4">
              <h4 class="font-semibold text-secondary">Performance Metrics</h4>
              <div class="space-y-3">
                <div class="p-3 bg-base-200 rounded">
                  <div class="font-semibold text-primary">CPI - Cost Performance Index</div>
                  <div class="text-sm text-base-content/70">EV ÷ AC. Measures cost efficiency. Values > 1.0 indicate under budget, < 1.0 indicate over budget.</div>
                </div>
                <div class="p-3 bg-base-200 rounded">
                  <div class="font-semibold text-success">SPI - Schedule Performance Index</div>
                  <div class="text-sm text-base-content/70">EV ÷ PV. Measures schedule efficiency. Values > 1.0 indicate ahead of schedule, < 1.0 indicate behind schedule.</div>
                </div>
                <div class="p-3 bg-base-200 rounded">
                  <div class="font-semibold text-warning">EAC - Estimate at Completion</div>
                  <div class="text-sm text-base-content/70">Forecasted total project cost based on current performance trends. EAC = BAC ÷ CPI (simplified formula).</div>
                </div>
                <div class="p-3 bg-base-200 rounded">
                  <div class="font-semibold text-info">ETC - Estimate to Complete</div>
                  <div class="text-sm text-base-content/70">Estimated cost to complete the remaining work. ETC = EAC - AC.</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-6">
            <h4 class="font-semibold text-accent mb-4">Variance Analysis</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="p-3 bg-base-200 rounded">
                <div class="font-semibold text-error">CV - Cost Variance</div>
                <div class="text-sm text-base-content/70">EV - AC. Negative values indicate over budget, positive values indicate under budget.</div>
              </div>
              <div class="p-3 bg-base-200 rounded">
                <div class="font-semibold text-warning">SV - Schedule Variance</div>
                <div class="text-sm text-base-content/70">EV - PV. Negative values indicate behind schedule, positive values indicate ahead of schedule.</div>
              </div>
              <div class="p-3 bg-base-200 rounded">
                <div class="font-semibold text-info">VAC - Variance at Completion</div>
                <div class="text-sm text-base-content/70">BAC - EAC. Forecasted variance at project completion. Negative values indicate over budget.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Budget Breakdown Chart -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">Budget Breakdown by Stream</h3>
          <div class="h-64">
            <canvas id="budgetChart"></canvas>
          </div>
        </div>
      </div>

      <!-- Budget Timeline -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">Budget Timeline</h3>
          <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Quarter</th>
                  <th>Planned</th>
                  <th>Actual</th>
                  <th>Variance</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="font-semibold">Q1 2024</td>
                  <td>$3.8M</td>
                  <td>$3.9M</td>
                  <td class="text-error">+$0.1M</td>
                  <td><span class="badge badge-warning">Over Budget</span></td>
                </tr>
                <tr>
                  <td class="font-semibold">Q2 2024</td>
                  <td>$3.8M</td>
                  <td>$3.7M</td>
                  <td class="text-success">-$0.1M</td>
                  <td><span class="badge badge-success">Under Budget</span></td>
                </tr>
                <tr>
                  <td class="font-semibold">Q3 2024</td>
                  <td>$3.8M</td>
                  <td>$4.1M</td>
                  <td class="text-error">+$0.3M</td>
                  <td><span class="badge badge-error">Over Budget</span></td>
                </tr>
                <tr>
                  <td class="font-semibold">Q4 2024</td>
                  <td>$3.8M</td>
                  <td>$3.8M</td>
                  <td class="text-info">$0.0M</td>
                  <td><span class="badge badge-success">On Budget</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `;
}

function streamBudget() {
  return `
    <div class="space-y-6">
      <!-- Stream Budget Overview -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="stat bg-base-100 shadow">
          <div class="stat-title">Stream Budget</div>
          <div class="stat-value text-primary">$4.2M</div>
          <div class="stat-desc">Annual stream budget</div>
        </div>
        <div class="stat bg-base-100 shadow">
          <div class="stat-title">Spent</div>
          <div class="stat-value text-success">$2.1M</div>
          <div class="stat-desc">50% of budget</div>
        </div>
        <div class="stat bg-base-100 shadow">
          <div class="stat-title">Committed</div>
          <div class="stat-value text-warning">$1.8M</div>
          <div class="stat-desc">43% committed</div>
        </div>
        <div class="stat bg-base-100 shadow">
          <div class="stat-title">Remaining</div>
          <div class="stat-value text-info">$0.3M</div>
          <div class="stat-desc">7% available</div>
        </div>
      </div>

      <!-- Stream EVM Analysis -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">Stream EVM Analysis</h3>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="space-y-4">
              <h4 class="font-semibold text-primary">EVM Metrics</h4>
              <div class="space-y-3">
                <div class="flex justify-between items-center p-3 bg-base-200 rounded">
                  <span class="text-sm font-medium">Planned Value (PV)</span>
                  <span class="font-semibold text-primary">$2.5M</span>
                </div>
                <div class="flex justify-between items-center p-3 bg-base-200 rounded">
                  <span class="text-sm font-medium">Earned Value (EV)</span>
                  <span class="font-semibold text-success">$2.1M</span>
                </div>
                <div class="flex justify-between items-center p-3 bg-base-200 rounded">
                  <span class="text-sm font-medium">Actual Cost (AC)</span>
                  <span class="font-semibold text-warning">$2.3M</span>
                </div>
              </div>
            </div>
            
            <div class="space-y-4">
              <h4 class="font-semibold text-secondary">Performance Indexes</h4>
              <div class="space-y-3">
                <div class="flex justify-between items-center p-3 bg-base-200 rounded">
                  <span class="text-sm font-medium">CPI</span>
                  <span class="font-semibold text-success">0.91</span>
                </div>
                <div class="flex justify-between items-center p-3 bg-base-200 rounded">
                  <span class="text-sm font-medium">SPI</span>
                  <span class="font-semibold text-warning">0.84</span>
                </div>
                <div class="flex justify-between items-center p-3 bg-base-200 rounded">
                  <span class="text-sm font-medium">EAC</span>
                  <span class="font-semibold text-info">$4.6M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stream Budget Breakdown -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">Stream Budget Breakdown</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <h4 class="font-semibold text-primary">Resource Allocation</h4>
              <div class="space-y-2">
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">Development Team</span>
                  <span class="font-semibold">$1.8M (43%)</span>
                </div>
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">Infrastructure</span>
                  <span class="font-semibold">$0.8M (19%)</span>
                </div>
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">Testing & QA</span>
                  <span class="font-semibold">$0.6M (14%)</span>
                </div>
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">Tools & Licenses</span>
                  <span class="font-semibold">$0.4M (10%)</span>
                </div>
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">Training</span>
                  <span class="font-semibold">$0.2M (5%)</span>
                </div>
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">Contingency</span>
                  <span class="font-semibold">$0.4M (9%)</span>
                </div>
              </div>
            </div>
            
            <div class="space-y-4">
              <h4 class="font-semibold text-secondary">Monthly Burn Rate</h4>
              <div class="space-y-2">
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">Planned Monthly</span>
                  <span class="font-semibold text-primary">$350K</span>
                </div>
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">Actual Monthly</span>
                  <span class="font-semibold text-warning">$383K</span>
                </div>
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">Variance</span>
                  <span class="font-semibold text-error">+$33K</span>
                </div>
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">Runway</span>
                  <span class="font-semibold text-info">8 months</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function countryBudget() {
  return `
    <div class="space-y-6">
      <!-- Country Budget Overview -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="stat bg-base-100 shadow">
          <div class="stat-title">Country Budget</div>
          <div class="stat-value text-primary">$2.8M</div>
          <div class="stat-desc">Rollout budget</div>
        </div>
        <div class="stat bg-base-100 shadow">
          <div class="stat-title">Spent</div>
          <div class="stat-value text-success">$1.9M</div>
          <div class="stat-desc">68% of budget</div>
        </div>
        <div class="stat bg-base-100 shadow">
          <div class="stat-title">Committed</div>
          <div class="stat-value text-warning">$0.7M</div>
          <div class="stat-desc">25% committed</div>
        </div>
        <div class="stat bg-base-100 shadow">
          <div class="stat-title">Remaining</div>
          <div class="stat-value text-info">$0.2M</div>
          <div class="stat-desc">7% available</div>
        </div>
      </div>

      <!-- Country EVM Analysis -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">Country EVM Analysis</h3>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="space-y-4">
              <h4 class="font-semibold text-primary">EVM Metrics</h4>
              <div class="space-y-3">
                <div class="flex justify-between items-center p-3 bg-base-200 rounded">
                  <span class="text-sm font-medium">Planned Value (PV)</span>
                  <span class="font-semibold text-primary">$2.1M</span>
                </div>
                <div class="flex justify-between items-center p-3 bg-base-200 rounded">
                  <span class="text-sm font-medium">Earned Value (EV)</span>
                  <span class="font-semibold text-success">$1.9M</span>
                </div>
                <div class="flex justify-between items-center p-3 bg-base-200 rounded">
                  <span class="text-sm font-medium">Actual Cost (AC)</span>
                  <span class="font-semibold text-warning">$2.0M</span>
                </div>
              </div>
            </div>
            
            <div class="space-y-4">
              <h4 class="font-semibold text-secondary">Performance Indexes</h4>
              <div class="space-y-3">
                <div class="flex justify-between items-center p-3 bg-base-200 rounded">
                  <span class="text-sm font-medium">CPI</span>
                  <span class="font-semibold text-success">0.95</span>
                </div>
                <div class="flex justify-between items-center p-3 bg-base-200 rounded">
                  <span class="text-sm font-medium">SPI</span>
                  <span class="font-semibold text-warning">0.90</span>
                </div>
                <div class="flex justify-between items-center p-3 bg-base-200 rounded">
                  <span class="text-sm font-medium">EAC</span>
                  <span class="font-semibold text-info">$2.9M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Country Budget Breakdown -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">Country Budget Breakdown</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <h4 class="font-semibold text-primary">Cost Categories</h4>
              <div class="space-y-2">
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">Localization</span>
                  <span class="font-semibold">$0.8M (29%)</span>
                </div>
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">Infrastructure</span>
                  <span class="font-semibold">$0.6M (21%)</span>
                </div>
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">Training</span>
                  <span class="font-semibold">$0.4M (14%)</span>
                </div>
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">Support</span>
                  <span class="font-semibold">$0.3M (11%)</span>
                </div>
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">Compliance</span>
                  <span class="font-semibold">$0.2M (7%)</span>
                </div>
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">Contingency</span>
                  <span class="font-semibold">$0.5M (18%)</span>
                </div>
              </div>
            </div>
            
            <div class="space-y-4">
              <h4 class="font-semibold text-secondary">Timeline Analysis</h4>
              <div class="space-y-2">
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">Pre-Launch</span>
                  <span class="font-semibold text-primary">$1.2M</span>
                </div>
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">Launch</span>
                  <span class="font-semibold text-success">$0.8M</span>
                </div>
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">Post-Launch</span>
                  <span class="font-semibold text-info">$0.8M</span>
                </div>
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">Total</span>
                  <span class="font-semibold text-primary">$2.8M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function vendorBudget() {
  return `
    <div class="space-y-6">
      <!-- Vendor Budget Overview -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="stat bg-base-100 shadow">
          <div class="stat-title">Vendor Budget</div>
          <div class="stat-value text-primary">$3.2M</div>
          <div class="stat-desc">Annual vendor spend</div>
        </div>
        <div class="stat bg-base-100 shadow">
          <div class="stat-title">Spent</div>
          <div class="stat-value text-success">$1.8M</div>
          <div class="stat-desc">56% of budget</div>
        </div>
        <div class="stat bg-base-100 shadow">
          <div class="stat-title">Committed</div>
          <div class="stat-value text-warning">$1.2M</div>
          <div class="stat-desc">38% committed</div>
        </div>
        <div class="stat bg-base-100 shadow">
          <div class="stat-title">Remaining</div>
          <div class="stat-value text-info">$0.2M</div>
          <div class="stat-desc">6% available</div>
        </div>
      </div>

      <!-- Vendor EVM Analysis -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">Vendor EVM Analysis</h3>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="space-y-4">
              <h4 class="font-semibold text-primary">EVM Metrics</h4>
              <div class="space-y-3">
                <div class="flex justify-between items-center p-3 bg-base-200 rounded">
                  <span class="text-sm font-medium">Planned Value (PV)</span>
                  <span class="font-semibold text-primary">$2.0M</span>
                </div>
                <div class="flex justify-between items-center p-3 bg-base-200 rounded">
                  <span class="text-sm font-medium">Earned Value (EV)</span>
                  <span class="font-semibold text-success">$1.8M</span>
                </div>
                <div class="flex justify-between items-center p-3 bg-base-200 rounded">
                  <span class="text-sm font-medium">Actual Cost (AC)</span>
                  <span class="font-semibold text-warning">$1.9M</span>
                </div>
              </div>
            </div>
            
            <div class="space-y-4">
              <h4 class="font-semibold text-secondary">Performance Indexes</h4>
              <div class="space-y-3">
                <div class="flex justify-between items-center p-3 bg-base-200 rounded">
                  <span class="text-sm font-medium">CPI</span>
                  <span class="font-semibold text-success">0.95</span>
                </div>
                <div class="flex justify-between items-center p-3 bg-base-200 rounded">
                  <span class="text-sm font-medium">SPI</span>
                  <span class="font-semibold text-warning">0.90</span>
                </div>
                <div class="flex justify-between items-center p-3 bg-base-200 rounded">
                  <span class="text-sm font-medium">EAC</span>
                  <span class="font-semibold text-info">$3.4M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Vendor Budget Breakdown -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">Vendor Budget Breakdown</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <h4 class="font-semibold text-primary">Vendor Categories</h4>
              <div class="space-y-2">
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">Development Services</span>
                  <span class="font-semibold">$1.8M (56%)</span>
                </div>
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">Infrastructure</span>
                  <span class="font-semibold">$0.6M (19%)</span>
                </div>
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">Support & Maintenance</span>
                  <span class="font-semibold">$0.4M (13%)</span>
                </div>
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">Tools & Licenses</span>
                  <span class="font-semibold">$0.2M (6%)</span>
                </div>
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">Training</span>
                  <span class="font-semibold">$0.1M (3%)</span>
                </div>
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">Contingency</span>
                  <span class="font-semibold">$0.1M (3%)</span>
                </div>
              </div>
            </div>
            
            <div class="space-y-4">
              <h4 class="font-semibold text-secondary">Vendor Performance</h4>
              <div class="space-y-2">
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">On-time Delivery</span>
                  <span class="font-semibold text-success">93%</span>
                </div>
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">Quality Score</span>
                  <span class="font-semibold text-warning">87%</span>
                </div>
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">Cost Efficiency</span>
                  <span class="font-semibold text-success">95%</span>
                </div>
                <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                  <span class="text-sm">SLA Compliance</span>
                  <span class="font-semibold text-success">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
