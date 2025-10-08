// Meetings & Notes Component per layer with tabbed meetings
// Enhanced with detailed quarterly planning summaries and variance analysis

// Small helper for trend badges
function getTrendBadge(trend, label) {
  const map = {
    up: { cls: 'badge-success', icon: '↗' },
    down: { cls: 'badge-error', icon: '↘' },
    stable: { cls: 'badge-info', icon: '→' }
  };
  const t = map[trend] || map.stable;
  return `<span class="badge ${t.cls} badge-sm">${t.icon} ${label}</span>`;
}

// Helper for variance analysis
function getVarianceBadge(planned, actual, type = 'completion') {
  const variance = actual - planned;
  const percentage = Math.round((variance / planned) * 100);
  
  if (type === 'completion') {
    if (percentage >= 0) return `<span class="badge badge-success">+${percentage}%</span>`;
    if (percentage >= -10) return `<span class="badge badge-warning">${percentage}%</span>`;
    return `<span class="badge badge-error">${percentage}%</span>`;
  } else {
    if (Math.abs(percentage) <= 5) return `<span class="badge badge-success">±${Math.abs(percentage)}%</span>`;
    if (Math.abs(percentage) <= 15) return `<span class="badge badge-warning">±${Math.abs(percentage)}%</span>`;
    return `<span class="badge badge-error">±${Math.abs(percentage)}%</span>`;
  }
}

function programMeetings() {
  return `
    <div role="tablist" class="tabs tabs-bordered">
      <input type="radio" name="program-meetings" role="tab" class="tab" aria-label="Program Board" checked />
      <div role="tabpanel" class="tab-content p-4">
        <div class="space-y-6">
          <!-- Executive RAG with Enhanced Metrics -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Executive RAG Status</h3>
              <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div class="stat bg-base-200 rounded-lg p-4">
                  <div class="stat-title">Schedule</div>
                  <div class="stat-value text-success">G</div>
                  <div class="stat-desc">On track ${getTrendBadge('up','improving')}</div>
                  <div class="text-xs mt-2">SPI: 1.02 ${getVarianceBadge(100, 102, 'budget')}</div>
                </div>
                <div class="stat bg-base-200 rounded-lg p-4">
                  <div class="stat-title">Scope</div>
                  <div class="stat-value text-warning">A</div>
                  <div class="stat-desc">Minor growth ${getTrendBadge('stable','stable')}</div>
                  <div class="text-xs mt-2">+5% scope creep</div>
                </div>
                <div class="stat bg-base-200 rounded-lg p-4">
                  <div class="stat-title">Budget</div>
                  <div class="stat-value text-success">G</div>
                  <div class="stat-desc">CPI 1.06 ${getTrendBadge('up','CPI')}</div>
                  <div class="text-xs mt-2">€340k under budget</div>
                </div>
                <div class="stat bg-base-200 rounded-lg p-4">
                  <div class="stat-title">Risk</div>
                  <div class="stat-value text-warning">A</div>
                  <div class="stat-desc">2 open criticals</div>
                  <div class="text-xs mt-2">3 mitigated this month</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Quarterly Planning Summary -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Q1 2025 Planning Summary</h3>
              <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="space-y-4">
                  <h4 class="font-semibold text-primary">Team Commitments</h4>
                  <div class="space-y-2">
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">Total Planned</span>
                      <span class="font-semibold">24</span>
                    </div>
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">Completed</span>
                      <span class="font-semibold text-success">18 ${getVarianceBadge(24, 18, 'completion')}</span>
                    </div>
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">In Progress</span>
                      <span class="font-semibold text-warning">4</span>
                    </div>
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">At Risk</span>
                      <span class="font-semibold text-error">2</span>
                    </div>
                  </div>
                </div>
                
                <div class="space-y-4">
                  <h4 class="font-semibold text-secondary">Value Delivery</h4>
                  <div class="space-y-2">
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">Objectives</span>
                      <span class="font-semibold">12</span>
                    </div>
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">On Track</span>
                      <span class="font-semibold text-success">8</span>
                    </div>
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">At Risk</span>
                      <span class="font-semibold text-warning">3</span>
                    </div>
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">Delayed</span>
                      <span class="font-semibold text-error">1</span>
                    </div>
                  </div>
                </div>
                
                <div class="space-y-4">
                  <h4 class="font-semibold text-accent">Unplanned Items</h4>
                  <div class="space-y-2">
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">New Requests</span>
                      <span class="font-semibold text-info">6</span>
                    </div>
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">Scope Changes</span>
                      <span class="font-semibold text-warning">3</span>
                    </div>
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">Emergency Fixes</span>
                      <span class="font-semibold text-error">2</span>
                    </div>
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">Regulatory</span>
                      <span class="font-semibold text-info">1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Stream-Level Summary -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Stream Performance Summary</h3>
              <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th>Stream</th>
                      <th>Commitments</th>
                      <th>Completed</th>
                      <th>Variance</th>
                      <th>Velocity</th>
                      <th>Quality</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="font-semibold">Feature Streams</td>
                      <td>8</td>
                      <td>6</td>
                      <td>${getVarianceBadge(8, 6, 'completion')}</td>
                      <td>142 pts</td>
                      <td>92%</td>
                      <td><span class="badge badge-success">On Track</span></td>
                    </tr>
                    <tr>
                      <td class="font-semibold">Core Streams</td>
                      <td>6</td>
                      <td>4</td>
                      <td>${getVarianceBadge(6, 4, 'completion')}</td>
                      <td>128 pts</td>
                      <td>88%</td>
                      <td><span class="badge badge-warning">At Risk</span></td>
                    </tr>
                    <tr>
                      <td class="font-semibold">Specialized</td>
                      <td>4</td>
                      <td>3</td>
                      <td>${getVarianceBadge(4, 3, 'completion')}</td>
                      <td>95 pts</td>
                      <td>95%</td>
                      <td><span class="badge badge-success">On Track</span></td>
                    </tr>
                    <tr>
                      <td class="font-semibold">Enabler</td>
                      <td>6</td>
                      <td>5</td>
                      <td>${getVarianceBadge(6, 5, 'completion')}</td>
                      <td>78 pts</td>
                      <td>90%</td>
                      <td><span class="badge badge-info">Stable</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Benefits & Budget Analysis -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="card bg-base-100 shadow-xl">
              <div class="card-body">
                <h3 class="card-title">Benefits Realization</h3>
                <div class="space-y-4">
                  <div class="stat bg-base-200 rounded-lg p-4">
                    <div class="stat-title">Planned Benefits</div>
                    <div class="stat-value text-primary">€2.1M</div>
                    <div class="stat-desc">Q1 2025 target</div>
                  </div>
                  <div class="stat bg-base-200 rounded-lg p-4">
                    <div class="stat-title">Realized Benefits</div>
                    <div class="stat-value text-success">€1.8M</div>
                    <div class="stat-desc">${getVarianceBadge(2100000, 1800000, 'completion')} variance</div>
                  </div>
                  <div class="stat bg-base-200 rounded-lg p-4">
                    <div class="stat-title">Run-rate Savings</div>
                    <div class="stat-value text-info">€1.2M</div>
                    <div class="stat-desc">Annualized ${getTrendBadge('up','trend')}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="card bg-base-100 shadow-xl">
              <div class="card-body">
                <h3 class="card-title">Budget Analysis</h3>
                <div class="space-y-4">
                  <div class="stat bg-base-200 rounded-lg p-4">
                    <div class="stat-title">Planned Budget</div>
                    <div class="stat-value text-primary">€8.0M</div>
                    <div class="stat-desc">Q1 2025 allocation</div>
                  </div>
                  <div class="stat bg-base-200 rounded-lg p-4">
                    <div class="stat-title">Actual Spend</div>
                    <div class="stat-value text-info">€7.6M</div>
                    <div class="stat-desc">${getVarianceBadge(8000000, 7600000, 'budget')} variance</div>
                  </div>
                  <div class="stat bg-base-200 rounded-lg p-4">
                    <div class="stat-title">Forecast EAC</div>
                    <div class="stat-value text-success">€7.8M</div>
                    <div class="stat-desc">CPI adjusted ${getTrendBadge('down','improving')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Major Risks & Decisions -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="card bg-base-100 shadow-xl">
              <div class="card-body">
                <h3 class="card-title">Major Risks</h3>
                <div class="space-y-3">
                  <div class="alert alert-warning">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg>
                    <div>
                      <h4 class="font-bold">Vendor Capacity</h4>
                      <div class="text-xs">Cutover wave 2 — mitigation: add buffer squad</div>
                    </div>
                  </div>
                  <div class="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <div>
                      <h4 class="font-bold">Regulatory Change</h4>
                      <div class="text-xs">DE privacy — mitigation: design review</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="card bg-base-100 shadow-xl">
              <div class="card-body">
                <h3 class="card-title">Decisions / Approvals</h3>
                <div class="overflow-x-auto">
                  <table class="table table-zebra">
                    <thead><tr><th>ID</th><th>Decision</th><th>Status</th><th>Date</th></tr></thead>
                    <tbody>
                      <tr><td>DEC-101</td><td>Approve language rollout plan</td><td><span class="badge badge-success">Approved</span></td><td>2025-01-16</td></tr>
                      <tr><td>DEC-102</td><td>Increase QA budget by €80k</td><td><span class="badge badge-warning">Pending</span></td><td>-</td></tr>
                      <tr><td>DEC-103</td><td>Vendor contract extension</td><td><span class="badge badge-success">Approved</span></td><td>2025-01-18</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <input type="radio" name="program-meetings" role="tab" class="tab" aria-label="QBR" />
      <div role="tabpanel" class="tab-content p-4">
        <div class="space-y-6">
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">QBR Focus Areas</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 class="font-semibold mb-3 text-primary">Re-baseline Activities</h4>
                  <ul class="space-y-2 text-sm">
                    <li class="flex items-center space-x-2">
                      <div class="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Roadmap scope & milestone review</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Capacity planning alignment</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Budget reallocation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-semibold mb-3 text-secondary">Value Delivery</h4>
                  <ul class="space-y-2 text-sm">
                    <li class="flex items-center space-x-2">
                      <div class="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Benefits realization tracking</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Upcoming wave cutovers</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Stakeholder alignment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="card bg-base-100 shadow-xl">
              <div class="card-body">
                <h3 class="card-title">Roadmap Re-baseline</h3>
                <div class="space-y-3">
                  <div class="stat bg-base-200 rounded-lg p-4">
                    <div class="stat-title">Version</div>
                    <div class="stat-value text-primary">2025.Q1</div>
                    <div class="stat-desc">Latest baseline</div>
                  </div>
                  <div class="stat bg-base-200 rounded-lg p-4">
                    <div class="stat-title">New Milestones</div>
                    <div class="stat-value text-info">+3</div>
                    <div class="stat-desc">Added this quarter</div>
                  </div>
                  <div class="stat bg-base-200 rounded-lg p-4">
                    <div class="stat-title">Scope Changes</div>
                    <div class="stat-value text-warning">+5%</div>
                    <div class="stat-desc">Growth from baseline</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="card bg-base-100 shadow-xl">
              <div class="card-body">
                <h3 class="card-title">Capacity Plan</h3>
                <div class="space-y-3">
                  <div class="stat bg-base-200 rounded-lg p-4">
                    <div class="stat-title">Active Teams</div>
                    <div class="stat-value text-primary">11</div>
                    <div class="stat-desc">+1 vendor squad</div>
                  </div>
                  <div class="stat bg-base-200 rounded-lg p-4">
                    <div class="stat-title">Total Capacity</div>
                    <div class="stat-value text-info">445 pts</div>
                    <div class="stat-desc">Per PI velocity</div>
                  </div>
                  <div class="stat bg-base-200 rounded-lg p-4">
                    <div class="stat-title">Utilization</div>
                    <div class="stat-value text-success">92%</div>
                    <div class="stat-desc">Current utilization</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="card bg-base-100 shadow-xl">
              <div class="card-body">
                <h3 class="card-title">Benefits Tracking</h3>
                <div class="space-y-3">
                  <div class="stat bg-base-200 rounded-lg p-4">
                    <div class="stat-title">Realized</div>
                    <div class="stat-value text-success">€0.9M</div>
                    <div class="stat-desc">To date</div>
                  </div>
                  <div class="stat bg-base-200 rounded-lg p-4">
                    <div class="stat-title">Forecast</div>
                    <div class="stat-value text-primary">€2.1M</div>
                    <div class="stat-desc">Q1 target</div>
                  </div>
                  <div class="stat bg-base-200 rounded-lg p-4">
                    <div class="stat-title">Variance</div>
                    <div class="stat-value text-warning">-14%</div>
                    <div class="stat-desc">Behind target</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function streamMeetings() {
  return `
    <div role="tablist" class="tabs tabs-bordered">
      <input type="radio" name="stream-meetings" role="tab" class="tab" aria-label="Stream Steering" checked />
      <div role="tabpanel" class="tab-content p-4">
        <div class="space-y-6">
          <!-- Stream Performance Metrics -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Stream Performance Dashboard</h3>
              <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div class="stat bg-base-200 rounded-lg p-4">
                  <div class="stat-title">Scope Variance</div>
                  <div class="stat-value text-primary">+5%</div>
                  <div class="stat-desc">since last PI ${getVarianceBadge(100, 105, 'budget')}</div>
                </div>
                <div class="stat bg-base-200 rounded-lg p-4">
                  <div class="stat-title">CPI</div>
                  <div class="stat-value text-success">1.05</div>
                  <div class="stat-desc">${getTrendBadge('up','good')} performance</div>
                </div>
                <div class="stat bg-base-200 rounded-lg p-4">
                  <div class="stat-title">SPI</div>
                  <div class="stat-value text-warning">0.96</div>
                  <div class="stat-desc">${getTrendBadge('down','watch')} schedule</div>
                </div>
                <div class="stat bg-base-200 rounded-lg p-4">
                  <div class="stat-title">Velocity</div>
                  <div class="stat-value text-info">142</div>
                  <div class="stat-desc">pts / PI ${getTrendBadge('up','trend')}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Burn-up Chart -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Stream Burn-up Chart</h3>
              <div class="mb-4">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-sm font-medium">Progress Tracking (Story Points)</span>
                  <div class="flex space-x-4 text-xs">
                    <div class="flex items-center space-x-1">
                      <div class="w-3 h-3 bg-primary rounded"></div>
                      <span>Planned</span>
                    </div>
                    <div class="flex items-center space-x-1">
                      <div class="w-3 h-3 bg-success rounded"></div>
                      <span>Completed</span>
                    </div>
                    <div class="flex items-center space-x-1">
                      <div class="w-3 h-3 bg-warning rounded"></div>
                      <span>Scope Changes</span>
                    </div>
                  </div>
                </div>
                
                <!-- Burn-up Chart Container -->
                <div class="relative bg-base-200 rounded-lg p-4 h-80">
                  <svg viewBox="0 0 800 280" class="w-full h-full">
                    <!-- Grid lines -->
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    
                    <!-- Y-axis labels -->
                    <text x="15" y="25" class="text-xs fill-base-content/70">200</text>
                    <text x="15" y="65" class="text-xs fill-base-content/70">150</text>
                    <text x="15" y="105" class="text-xs fill-base-content/70">100</text>
                    <text x="15" y="145" class="text-xs fill-base-content/70">50</text>
                    <text x="15" y="185" class="text-xs fill-base-content/70">0</text>
                    
                    <!-- X-axis labels -->
                    <text x="60" y="205" class="text-xs fill-base-content/70">Week 1</text>
                    <text x="160" y="205" class="text-xs fill-base-content/70">Week 2</text>
                    <text x="260" y="205" class="text-xs fill-base-content/70">Week 3</text>
                    <text x="360" y="205" class="text-xs fill-base-content/70">Week 4</text>
                    <text x="460" y="205" class="text-xs fill-base-content/70">Week 5</text>
                    <text x="560" y="205" class="text-xs fill-base-content/70">Week 6</text>
                    <text x="660" y="205" class="text-xs fill-base-content/70">Week 7</text>
                    <text x="760" y="205" class="text-xs fill-base-content/70">Week 8</text>
                    
                    <!-- Planned scope line (blue dashed) -->
                    <polyline points="50,40 150,40 250,40 350,40 450,40 550,40 650,40 750,40" 
                              fill="none" stroke="#3b82f6" stroke-width="3" stroke-dasharray="8,4"/>
                    
                    <!-- Total scope line (yellow dotted) - includes scope changes -->
                    <polyline points="50,40 150,45 250,50 350,55 450,60 550,65 650,70 750,75" 
                              fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,4"/>
                    
                    <!-- Completed work line (green solid) -->
                    <polyline points="50,200 150,180 250,160 350,140 450,120 550,100 650,85 750,75" 
                              fill="none" stroke="#10b981" stroke-width="4"/>
                    
                    <!-- Data points for completed work (green circles) -->
                    <circle cx="50" cy="200" r="5" fill="#10b981" stroke="white" stroke-width="2"/>
                    <circle cx="150" cy="180" r="5" fill="#10b981" stroke="white" stroke-width="2"/>
                    <circle cx="250" cy="160" r="5" fill="#10b981" stroke="white" stroke-width="2"/>
                    <circle cx="350" cy="140" r="5" fill="#10b981" stroke="white" stroke-width="2"/>
                    <circle cx="450" cy="120" r="5" fill="#10b981" stroke="white" stroke-width="2"/>
                    <circle cx="550" cy="100" r="5" fill="#10b981" stroke="white" stroke-width="2"/>
                    <circle cx="650" cy="85" r="5" fill="#10b981" stroke="white" stroke-width="2"/>
                    <circle cx="750" cy="75" r="5" fill="#10b981" stroke="white" stroke-width="2"/>
                    
                    <!-- Current week indicator (red vertical line) -->
                    <line x1="550" y1="20" x2="550" y2="200" stroke="#ef4444" stroke-width="3" stroke-dasharray="4,4"/>
                    <text x="555" y="15" class="text-xs fill-red-600 font-bold">Current</text>
                    
                    <!-- Value labels on completed work points -->
                    <text x="45" y="195" class="text-xs fill-base-content/80">0</text>
                    <text x="140" y="175" class="text-xs fill-base-content/80">20</text>
                    <text x="240" y="155" class="text-xs fill-base-content/80">40</text>
                    <text x="340" y="135" class="text-xs fill-base-content/80">60</text>
                    <text x="440" y="115" class="text-xs fill-base-content/80">80</text>
                    <text x="540" y="95" class="text-xs fill-base-content/80">100</text>
                    <text x="640" y="80" class="text-xs fill-base-content/80">115</text>
                    <text x="740" y="70" class="text-xs fill-base-content/80">125</text>
                  </svg>
                </div>
                
                <!-- Chart Summary -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                  <div class="stat bg-base-200 rounded-lg p-3">
                    <div class="stat-title text-xs">Planned Scope</div>
                    <div class="stat-value text-primary text-lg">160 pts</div>
                    <div class="stat-desc text-xs">Original target</div>
                  </div>
                  <div class="stat bg-base-200 rounded-lg p-3">
                    <div class="stat-title text-xs">Completed</div>
                    <div class="stat-value text-success text-lg">125 pts</div>
                    <div class="stat-desc text-xs">78% of planned</div>
                  </div>
                  <div class="stat bg-base-200 rounded-lg p-3">
                    <div class="stat-title text-xs">Scope Changes</div>
                    <div class="stat-value text-warning text-lg">+35 pts</div>
                    <div class="stat-desc text-xs">+22% growth</div>
                  </div>
                  <div class="stat bg-base-200 rounded-lg p-3">
                    <div class="stat-title text-xs">Remaining</div>
                    <div class="stat-value text-info text-lg">70 pts</div>
                    <div class="stat-desc text-xs">2 weeks left</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Quarterly Planning Summary -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Q1 2025 Stream Planning Summary</h3>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="space-y-4">
                  <h4 class="font-semibold text-primary">Feature Streams</h4>
                  <div class="space-y-2">
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">Planned Features</span>
                      <span class="font-semibold">12</span>
                    </div>
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">Delivered</span>
                      <span class="font-semibold text-success">9 ${getVarianceBadge(12, 9, 'completion')}</span>
                    </div>
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">In Progress</span>
                      <span class="font-semibold text-warning">2</span>
                    </div>
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">At Risk</span>
                      <span class="font-semibold text-error">1</span>
                    </div>
                  </div>
                </div>
                
                <div class="space-y-4">
                  <h4 class="font-semibold text-secondary">Core Streams</h4>
                  <div class="space-y-2">
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">Platform Tasks</span>
                      <span class="font-semibold">8</span>
                    </div>
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">Completed</span>
                      <span class="font-semibold text-success">6 ${getVarianceBadge(8, 6, 'completion')}</span>
                    </div>
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">In Progress</span>
                      <span class="font-semibold text-warning">1</span>
                    </div>
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">Blocked</span>
                      <span class="font-semibold text-error">1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Stream-Specific Commitments -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Stream Commitments & Variance</h3>
              <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th>Stream</th>
                      <th>Planned</th>
                      <th>Completed</th>
                      <th>Variance</th>
                      <th>Velocity</th>
                      <th>Quality</th>
                      <th>Unplanned</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="font-semibold">Feature Streams</td>
                      <td>12</td>
                      <td>9</td>
                      <td>${getVarianceBadge(12, 9, 'completion')}</td>
                      <td>142 pts</td>
                      <td>92%</td>
                      <td><span class="badge badge-info">3 new</span></td>
                    </tr>
                    <tr>
                      <td class="font-semibold">Core Streams</td>
                      <td>8</td>
                      <td>6</td>
                      <td>${getVarianceBadge(8, 6, 'completion')}</td>
                      <td>128 pts</td>
                      <td>88%</td>
                      <td><span class="badge badge-warning">2 emergency</span></td>
                    </tr>
                    <tr>
                      <td class="font-semibold">Specialized</td>
                      <td>6</td>
                      <td>5</td>
                      <td>${getVarianceBadge(6, 5, 'completion')}</td>
                      <td>95 pts</td>
                      <td>95%</td>
                      <td><span class="badge badge-success">1 scope</span></td>
                    </tr>
                    <tr>
                      <td class="font-semibold">Enabler</td>
                      <td>4</td>
                      <td>3</td>
                      <td>${getVarianceBadge(4, 3, 'completion')}</td>
                      <td>78 pts</td>
                      <td>90%</td>
                      <td><span class="badge badge-info">1 regulatory</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- RAID Review -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">RAID Review</h3>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 class="font-semibold mb-3 text-primary">Risks</h4>
                  <div class="space-y-2">
                    <div class="alert alert-warning">
                      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg>
                      <div>
                        <h4 class="font-bold">Performance Test Environment</h4>
                        <div class="text-xs">2 weeks behind — mitigation: parallel setup</div>
                      </div>
                    </div>
                    <div class="alert alert-error">
                      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <div>
                        <h4 class="font-bold">API Rate Limiting</h4>
                        <div class="text-xs">Integration failures — mitigation: increase limits</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-semibold mb-3 text-secondary">Issues</h4>
                  <div class="space-y-2">
                    <div class="alert alert-warning">
                      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg>
                      <div>
                        <h4 class="font-bold">Data Sync Delays</h4>
                        <div class="text-xs">Real-time sync issues — resolution: optimize queries</div>
                      </div>
                    </div>
                    <div class="alert alert-info">
                      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <div>
                        <h4 class="font-bold">Scope Creep</h4>
                        <div class="text-xs">+5% scope growth — monitoring required</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Dependency Review -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Dependency Review</h3>
              <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th>Dependency</th>
                      <th>Provider</th>
                      <th>Consumer</th>
                      <th>Due Date</th>
                      <th>Status</th>
                      <th>Blocker</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="font-semibold">Pricing API v2</td>
                      <td>Core Platform</td>
                      <td>Feature Streams</td>
                      <td>2025-02-15</td>
                      <td><span class="badge badge-warning">At Risk</span></td>
                      <td>Performance issues</td>
                      <td><span class="badge badge-primary">Escalate</span></td>
                    </tr>
                    <tr>
                      <td class="font-semibold">Telemetry Schema</td>
                      <td>Observability</td>
                      <td>All Streams</td>
                      <td>2025-02-28</td>
                      <td><span class="badge badge-success">On Track</span></td>
                      <td>None</td>
                      <td><span class="badge badge-success">Monitor</span></td>
                    </tr>
                    <tr>
                      <td class="font-semibold">Auth Service</td>
                      <td>Core Platform</td>
                      <td>Specialized</td>
                      <td>2025-03-01</td>
                      <td><span class="badge badge-info">Planned</span></td>
                      <td>Design pending</td>
                      <td><span class="badge badge-info">Plan</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Decision Log -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Decision Log</h3>
              <div class="space-y-4">
                <div class="border-l-4 border-primary pl-4">
                  <div class="flex justify-between items-start">
                    <div>
                      <h4 class="font-semibold">Scope Trade-off Decision</h4>
                      <p class="text-sm text-base-content/70">Defer pricing engine advanced features to Q2</p>
                    </div>
                    <div class="text-right">
                      <div class="badge badge-primary">Approved</div>
                      <div class="text-xs text-base-content/50">2025-01-20</div>
                    </div>
                  </div>
                </div>
                
                <div class="border-l-4 border-warning pl-4">
                  <div class="flex justify-between items-start">
                    <div>
                      <h4 class="font-semibold">Velocity Adjustment</h4>
                      <p class="text-sm text-base-content/70">Reduce velocity target by 10% for Q1</p>
                    </div>
                    <div class="text-right">
                      <div class="badge badge-warning">Pending</div>
                      <div class="text-xs text-base-content/50">2025-01-22</div>
                    </div>
                  </div>
                </div>
                
                <div class="border-l-4 border-success pl-4">
                  <div class="flex justify-between items-start">
                    <div>
                      <h4 class="font-semibold">Resource Allocation</h4>
                      <p class="text-sm text-base-content/70">Add 2 developers to Core Streams</p>
                    </div>
                    <div class="text-right">
                      <div class="badge badge-success">Approved</div>
                      <div class="text-xs text-base-content/50">2025-01-18</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <input type="radio" name="stream-meetings" role="tab" class="tab" aria-label="Vendor Sync" />
      <div role="tabpanel" class="tab-content p-4">
        <div class="space-y-6">
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Vendor Performance Summary</h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="stat bg-base-200 rounded-lg p-4">
                  <div class="stat-title">Reliability</div>
                  <div class="stat-value text-success">92%</div>
                  <div class="stat-desc">on-time sprints ${getTrendBadge('up','improving')}</div>
                </div>
                <div class="stat bg-base-200 rounded-lg p-4">
                  <div class="stat-title">Quality</div>
                  <div class="stat-value text-warning">87%</div>
                  <div class="stat-desc">defect escape ↓ ${getTrendBadge('down','improving')}</div>
                </div>
                <div class="stat bg-base-200 rounded-lg p-4">
                  <div class="stat-title">Staffing</div>
                  <div class="stat-value text-info">Stable</div>
                  <div class="stat-desc">0 churn ${getTrendBadge('stable','stable')}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Vendor Commitments vs Delivery</h3>
              <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th>Vendor</th>
                      <th>Planned</th>
                      <th>Delivered</th>
                      <th>Variance</th>
                      <th>Quality</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="font-semibold">TechCorp Solutions</td>
                      <td>8 sprints</td>
                      <td>7 sprints</td>
                      <td>${getVarianceBadge(8, 7, 'completion')}</td>
                      <td>85%</td>
                      <td><span class="badge badge-warning">At Risk</span></td>
                    </tr>
                    <tr>
                      <td class="font-semibold">DataFlow Inc</td>
                      <td>6 sprints</td>
                      <td>6 sprints</td>
                      <td>${getVarianceBadge(6, 6, 'completion')}</td>
                      <td>92%</td>
                      <td><span class="badge badge-success">On Track</span></td>
                    </tr>
                    <tr>
                      <td class="font-semibold">CloudTech Ltd</td>
                      <td>4 sprints</td>
                      <td>3 sprints</td>
                      <td>${getVarianceBadge(4, 3, 'completion')}</td>
                      <td>78%</td>
                      <td><span class="badge badge-error">Behind</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Vendor RAID Review -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Vendor RAID Review</h3>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 class="font-semibold mb-3 text-primary">Vendor Risks</h4>
                  <div class="space-y-2">
                    <div class="alert alert-warning">
                      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg>
                      <div>
                        <h4 class="font-bold">TechCorp Staff Turnover</h4>
                        <div class="text-xs">High turnover risk — mitigation: retention bonus</div>
                      </div>
                    </div>
                    <div class="alert alert-error">
                      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <div>
                        <h4 class="font-bold">CloudTech Quality Issues</h4>
                        <div class="text-xs">Defect rate increasing — mitigation: QA review</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-semibold mb-3 text-secondary">Vendor Issues</h4>
                  <div class="space-y-2">
                    <div class="alert alert-warning">
                      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg>
                      <div>
                        <h4 class="font-bold">Communication Breakdown</h4>
                        <div class="text-xs">Poor status reporting — resolution: daily standups</div>
                      </div>
                    </div>
                    <div class="alert alert-info">
                      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <div>
                        <h4 class="font-bold">Scope Creep</h4>
                        <div class="text-xs">+15% scope growth — monitoring required</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Vendor Dependencies -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Vendor Dependencies</h3>
              <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th>Dependency</th>
                      <th>Vendor</th>
                      <th>Internal Team</th>
                      <th>Due Date</th>
                      <th>Status</th>
                      <th>Blocker</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="font-semibold">API Documentation</td>
                      <td>TechCorp Solutions</td>
                      <td>Integration Team</td>
                      <td>2025-02-10</td>
                      <td><span class="badge badge-warning">At Risk</span></td>
                      <td>Version conflicts</td>
                      <td><span class="badge badge-primary">Escalate</span></td>
                    </tr>
                    <tr>
                      <td class="font-semibold">Test Data</td>
                      <td>DataFlow Inc</td>
                      <td>QA Team</td>
                      <td>2025-02-15</td>
                      <td><span class="badge badge-success">On Track</span></td>
                      <td>None</td>
                      <td><span class="badge badge-success">Monitor</span></td>
                    </tr>
                    <tr>
                      <td class="font-semibold">Infrastructure Access</td>
                      <td>CloudTech Ltd</td>
                      <td>DevOps Team</td>
                      <td>2025-02-20</td>
                      <td><span class="badge badge-error">Blocked</span></td>
                      <td>Security clearance</td>
                      <td><span class="badge badge-error">Urgent</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Vendor Decision Log -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Vendor Decision Log</h3>
              <div class="space-y-4">
                <div class="border-l-4 border-primary pl-4">
                  <div class="flex justify-between items-start">
                    <div>
                      <h4 class="font-semibold">TechCorp Contract Extension</h4>
                      <p class="text-sm text-base-content/70">Extend contract by 6 months with performance clauses</p>
                    </div>
                    <div class="text-right">
                      <div class="badge badge-primary">Approved</div>
                      <div class="text-xs text-base-content/50">2025-01-15</div>
                    </div>
                  </div>
                </div>
                
                <div class="border-l-4 border-warning pl-4">
                  <div class="flex justify-between items-start">
                    <div>
                      <h4 class="font-semibold">CloudTech Performance Review</h4>
                      <p class="text-sm text-base-content/70">30-day improvement plan with quality gates</p>
                    </div>
                    <div class="text-right">
                      <div class="badge badge-warning">In Progress</div>
                      <div class="text-xs text-base-content/50">2025-01-18</div>
                    </div>
                  </div>
                </div>
                
                <div class="border-l-4 border-success pl-4">
                  <div class="flex justify-between items-start">
                    <div>
                      <h4 class="font-semibold">DataFlow SLA Adjustment</h4>
                      <p class="text-sm text-base-content/70">Increase SLA targets to 95% on-time delivery</p>
                    </div>
                    <div class="text-right">
                      <div class="badge badge-success">Approved</div>
                      <div class="text-xs text-base-content/50">2025-01-12</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <input type="radio" name="stream-meetings" role="tab" class="tab" aria-label="Dependency Forum" />
      <div role="tabpanel" class="tab-content p-4">
        <div class="space-y-6">
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Cross-stream Dependencies</h3>
              <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Description</th>
                      <th>Needed From</th>
                      <th>Needed By</th>
                      <th>Due Date</th>
                      <th>Status</th>
                      <th>Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>DEP-21</td>
                      <td>Pricing API v2</td>
                      <td>Core Platform</td>
                      <td>Feature Streams</td>
                      <td>2025-02-15</td>
                      <td><span class="badge badge-warning">At Risk</span></td>
                      <td><span class="badge badge-error">High</span></td>
                    </tr>
                    <tr>
                      <td>DEP-33</td>
                      <td>Telemetry schema</td>
                      <td>Observability</td>
                      <td>All Streams</td>
                      <td>2025-02-28</td>
                      <td><span class="badge badge-success">On Track</span></td>
                      <td><span class="badge badge-warning">Medium</span></td>
                    </tr>
                    <tr>
                      <td>DEP-45</td>
                      <td>Authentication service</td>
                      <td>Core Platform</td>
                      <td>Specialized</td>
                      <td>2025-03-01</td>
                      <td><span class="badge badge-info">Planned</span></td>
                      <td><span class="badge badge-info">Low</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Dependency Risk Analysis</h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="stat bg-error/10 rounded-lg p-4">
                  <div class="stat-title">Critical Dependencies</div>
                  <div class="stat-value text-error">2</div>
                  <div class="stat-desc">At risk of delay</div>
                </div>
                <div class="stat bg-warning/10 rounded-lg p-4">
                  <div class="stat-title">Medium Risk</div>
                  <div class="stat-value text-warning">3</div>
                  <div class="stat-desc">Require monitoring</div>
                </div>
                <div class="stat bg-success/10 rounded-lg p-4">
                  <div class="stat-title">On Track</div>
                  <div class="stat-value text-success">5</div>
                  <div class="stat-desc">Proceeding as planned</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Cross-Team Commitments -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Cross-Team Commitments</h3>
              <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th>Team</th>
                      <th>Commitment</th>
                      <th>Dependent Team</th>
                      <th>Due Date</th>
                      <th>Status</th>
                      <th>Progress</th>
                      <th>Risk Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="font-semibold">Core Platform</td>
                      <td>Deliver Pricing API v2</td>
                      <td>Feature Streams</td>
                      <td>2025-02-15</td>
                      <td><span class="badge badge-warning">At Risk</span></td>
                      <td>75%</td>
                      <td><span class="badge badge-error">High</span></td>
                    </tr>
                    <tr>
                      <td class="font-semibold">Observability</td>
                      <td>Telemetry schema v1.2</td>
                      <td>All Streams</td>
                      <td>2025-02-28</td>
                      <td><span class="badge badge-success">On Track</span></td>
                      <td>90%</td>
                      <td><span class="badge badge-success">Low</span></td>
                    </tr>
                    <tr>
                      <td class="font-semibold">Data & Migration</td>
                      <td>Data model v3.0</td>
                      <td>Specialized Streams</td>
                      <td>2025-03-01</td>
                      <td><span class="badge badge-info">Planned</span></td>
                      <td>25%</td>
                      <td><span class="badge badge-warning">Medium</span></td>
                    </tr>
                    <tr>
                      <td class="font-semibold">Test & Release</td>
                      <td>CI/CD pipeline v2.1</td>
                      <td>Core Platform</td>
                      <td>2025-02-20</td>
                      <td><span class="badge badge-success">On Track</span></td>
                      <td>85%</td>
                      <td><span class="badge badge-success">Low</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Team Performance Summary -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Team Performance Summary</h3>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="space-y-4">
                  <h4 class="font-semibold text-primary">Commitment Delivery</h4>
                  <div class="space-y-2">
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">Total Commitments</span>
                      <span class="font-semibold">12</span>
                    </div>
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">Completed</span>
                      <span class="font-semibold text-success">8 ${getVarianceBadge(12, 8, 'completion')}</span>
                    </div>
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">In Progress</span>
                      <span class="font-semibold text-warning">3</span>
                    </div>
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">At Risk</span>
                      <span class="font-semibold text-error">1</span>
                    </div>
                  </div>
                </div>
                
                <div class="space-y-4">
                  <h4 class="font-semibold text-secondary">Dependency Health</h4>
                  <div class="space-y-2">
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">On Time Delivery</span>
                      <span class="font-semibold text-success">83%</span>
                    </div>
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">Quality Score</span>
                      <span class="font-semibold text-info">91%</span>
                    </div>
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">Communication</span>
                      <span class="font-semibold text-success">95%</span>
                    </div>
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">Escalations</span>
                      <span class="font-semibold text-warning">2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Dependency Forum Decision Log -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Dependency Forum Decision Log</h3>
              <div class="space-y-4">
                <div class="border-l-4 border-primary pl-4">
                  <div class="flex justify-between items-start">
                    <div>
                      <h4 class="font-semibold">Pricing API Priority Escalation</h4>
                      <p class="text-sm text-base-content/70">Escalate Core Platform pricing API to critical priority</p>
                      <div class="text-xs text-base-content/50 mt-1">
                        <strong>Impact:</strong> Feature Streams blocked • <strong>Owner:</strong> Core Platform Lead
                      </div>
                    </div>
                    <div class="text-right">
                      <div class="badge badge-primary">Approved</div>
                      <div class="text-xs text-base-content/50">2025-01-20</div>
                    </div>
                  </div>
                </div>
                
                <div class="border-l-4 border-warning pl-4">
                  <div class="flex justify-between items-start">
                    <div>
                      <h4 class="font-semibold">Telemetry Schema Standardization</h4>
                      <p class="text-sm text-base-content/70">Standardize telemetry schema across all streams</p>
                      <div class="text-xs text-base-content/50 mt-1">
                        <strong>Impact:</strong> All streams benefit • <strong>Owner:</strong> Observability Team
                      </div>
                    </div>
                    <div class="text-right">
                      <div class="badge badge-warning">In Progress</div>
                      <div class="text-xs text-base-content/50">2025-01-22</div>
                    </div>
                  </div>
                </div>
                
                <div class="border-l-4 border-success pl-4">
                  <div class="flex justify-between items-start">
                    <div>
                      <h4 class="font-semibold">Cross-Team Communication Protocol</h4>
                      <p class="text-sm text-base-content/70">Establish daily dependency sync meetings</p>
                      <div class="text-xs text-base-content/50 mt-1">
                        <strong>Impact:</strong> Improved coordination • <strong>Owner:</strong> Program Manager
                      </div>
                    </div>
                    <div class="text-right">
                      <div class="badge badge-success">Implemented</div>
                      <div class="text-xs text-base-content/50">2025-01-15</div>
                    </div>
                  </div>
                </div>
                
                <div class="border-l-4 border-info pl-4">
                  <div class="flex justify-between items-start">
                    <div>
                      <h4 class="font-semibold">Data Model Version Alignment</h4>
                      <p class="text-sm text-base-content/70">Align data model versions across streams</p>
                      <div class="text-xs text-base-content/50 mt-1">
                        <strong>Impact:</strong> Specialized streams • <strong>Owner:</strong> Data Team
                      </div>
                    </div>
                    <div class="text-right">
                      <div class="badge badge-info">Planned</div>
                      <div class="text-xs text-base-content/50">2025-01-25</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Escalation Matrix -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Escalation Matrix</h3>
              <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th>Dependency</th>
                      <th>Provider Team</th>
                      <th>Consumer Team</th>
                      <th>Escalation Level</th>
                      <th>Next Action</th>
                      <th>Due Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="font-semibold">Pricing API v2</td>
                      <td>Core Platform</td>
                      <td>Feature Streams</td>
                      <td><span class="badge badge-error">Level 3</span></td>
                      <td>Executive escalation</td>
                      <td>2025-01-25</td>
                    </tr>
                    <tr>
                      <td class="font-semibold">Telemetry Schema</td>
                      <td>Observability</td>
                      <td>All Streams</td>
                      <td><span class="badge badge-success">Level 1</span></td>
                      <td>Monitor progress</td>
                      <td>2025-02-28</td>
                    </tr>
                    <tr>
                      <td class="font-semibold">Auth Service</td>
                      <td>Core Platform</td>
                      <td>Specialized</td>
                      <td><span class="badge badge-warning">Level 2</span></td>
                      <td>Team lead escalation</td>
                      <td>2025-02-01</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function countryMeetings() {
  return `
    <div role="tablist" class="tabs tabs-bordered">
      <input type="radio" name="country-meetings" role="tab" class="tab" aria-label="Country Steering" checked />
      <div role="tabpanel" class="tab-content p-4">
        <div class="space-y-6">
          <!-- Country Performance Overview -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div class="stat bg-base-100 shadow">
              <div class="stat-title">Readiness Score</div>
              <div class="stat-value text-success">88%</div>
              <div class="stat-desc">Gate ≥90% ${getVarianceBadge(90, 88, 'completion')}</div>
            </div>
            <div class="stat bg-base-100 shadow">
              <div class="stat-title">Go-live Stability</div>
              <div class="stat-value text-success">98.3%</div>
              <div class="stat-desc">booking success ${getTrendBadge('up','good')}</div>
            </div>
            <div class="stat bg-base-100 shadow">
              <div class="stat-title">Adoption by Role</div>
              <div class="stat-value text-info">76%</div>
              <div class="stat-desc">60-day active ${getTrendBadge('up','trend')}</div>
            </div>
            <div class="stat bg-base-100 shadow">
              <div class="stat-title">Financial Close</div>
              <div class="stat-value text-warning">92%</div>
              <div class="stat-desc">success rate ${getTrendBadge('down','watch')}</div>
            </div>
          </div>

          <!-- Timeline Review -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Country Rollout Timeline Review</h3>
              <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th>Phase</th>
                      <th>Milestone</th>
                      <th>Planned Date</th>
                      <th>Actual Date</th>
                      <th>Status</th>
                      <th>Variance</th>
                      <th>Risk Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="font-semibold">Pre-Launch</td>
                      <td>Infrastructure Setup</td>
                      <td>2025-01-15</td>
                      <td>2025-01-18</td>
                      <td><span class="badge badge-warning">Delayed</span></td>
                      <td>+3 days</td>
                      <td><span class="badge badge-warning">Medium</span></td>
                    </tr>
                    <tr>
                      <td class="font-semibold">Pre-Launch</td>
                      <td>User Training</td>
                      <td>2025-01-20</td>
                      <td>2025-01-22</td>
                      <td><span class="badge badge-warning">Delayed</span></td>
                      <td>+2 days</td>
                      <td><span class="badge badge-success">Low</span></td>
                    </tr>
                    <tr>
                      <td class="font-semibold">Launch</td>
                      <td>Go-Live</td>
                      <td>2025-02-01</td>
                      <td>2025-02-01</td>
                      <td><span class="badge badge-success">On Time</span></td>
                      <td>0 days</td>
                      <td><span class="badge badge-success">Low</span></td>
                    </tr>
                    <tr>
                      <td class="font-semibold">Post-Launch</td>
                      <td>Stabilization</td>
                      <td>2025-02-15</td>
                      <td>2025-02-12</td>
                      <td><span class="badge badge-success">Early</span></td>
                      <td>-3 days</td>
                      <td><span class="badge badge-success">Low</span></td>
                    </tr>
                    <tr>
                      <td class="font-semibold">Post-Launch</td>
                      <td>Full Adoption</td>
                      <td>2025-03-01</td>
                      <td>TBD</td>
                      <td><span class="badge badge-info">Planned</span></td>
                      <td>TBD</td>
                      <td><span class="badge badge-warning">Medium</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Milestone Review -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Milestone Review</h3>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="space-y-4">
                  <h4 class="font-semibold text-primary">Critical Milestones</h4>
                  <div class="space-y-3">
                    <div class="flex justify-between items-center p-3 bg-success/10 rounded-lg border-l-4 border-success">
                      <div>
                        <div class="font-semibold">Go-Live Success</div>
                        <div class="text-sm text-base-content/70">98.3% system availability</div>
                      </div>
                      <div class="text-right">
                        <div class="badge badge-success">Achieved</div>
                        <div class="text-xs text-base-content/50">2025-02-01</div>
                      </div>
                    </div>
                    
                    <div class="flex justify-between items-center p-3 bg-warning/10 rounded-lg border-l-4 border-warning">
                      <div>
                        <div class="font-semibold">User Training Completion</div>
                        <div class="text-sm text-base-content/70">85% of users trained</div>
                      </div>
                      <div class="text-right">
                        <div class="badge badge-warning">At Risk</div>
                        <div class="text-xs text-base-content/50">2025-02-15</div>
                      </div>
                    </div>
                    
                    <div class="flex justify-between items-center p-3 bg-info/10 rounded-lg border-l-4 border-info">
                      <div>
                        <div class="font-semibold">Financial Integration</div>
                        <div class="text-sm text-base-content/70">92% close success rate</div>
                      </div>
                      <div class="text-right">
                        <div class="badge badge-info">In Progress</div>
                        <div class="text-xs text-base-content/50">2025-02-28</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="space-y-4">
                  <h4 class="font-semibold text-secondary">Performance Metrics</h4>
                  <div class="space-y-3">
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">System Uptime</span>
                      <span class="font-semibold text-success">98.3%</span>
                    </div>
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">User Adoption</span>
                      <span class="font-semibold text-info">76%</span>
                    </div>
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">Training Completion</span>
                      <span class="font-semibold text-warning">85%</span>
                    </div>
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">Support Tickets</span>
                      <span class="font-semibold text-success">12</span>
                    </div>
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">Critical Issues</span>
                      <span class="font-semibold text-error">2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Country RAID Review -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Country RAID Review</h3>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 class="font-semibold mb-3 text-primary">Country Risks</h4>
                  <div class="space-y-2">
                    <div class="alert alert-warning">
                      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg>
                      <div>
                        <h4 class="font-bold">Training Completion Risk</h4>
                        <div class="text-xs">15% users still need training — mitigation: extended support</div>
                      </div>
                    </div>
                    <div class="alert alert-error">
                      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <div>
                        <h4 class="font-bold">Regulatory Compliance</h4>
                        <div class="text-xs">Local data protection requirements — mitigation: legal review</div>
                      </div>
                    </div>
                    <div class="alert alert-info">
                      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <div>
                        <h4 class="font-bold">Localization Issues</h4>
                        <div class="text-xs">Currency and language support — monitoring required</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-semibold mb-3 text-secondary">Country Issues</h4>
                  <div class="space-y-2">
                    <div class="alert alert-warning">
                      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg>
                      <div>
                        <h4 class="font-bold">Payment Integration</h4>
                        <div class="text-xs">Local payment gateway delays — resolution: alternative provider</div>
                      </div>
                    </div>
                    <div class="alert alert-info">
                      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <div>
                        <h4 class="font-bold">User Support</h4>
                        <div class="text-xs">Increased support tickets — resolution: additional training</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Country Decision Log -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Country Decision Log</h3>
              <div class="space-y-4">
                <div class="border-l-4 border-primary pl-4">
                  <div class="flex justify-between items-start">
                    <div>
                      <h4 class="font-semibold">Go-Live Date Confirmation</h4>
                      <p class="text-sm text-base-content/70">Proceed with February 1st go-live despite training delays</p>
                      <div class="text-xs text-base-content/50 mt-1">
                        <strong>Impact:</strong> 15% users need post-launch training • <strong>Owner:</strong> Country Manager
                      </div>
                    </div>
                    <div class="text-right">
                      <div class="badge badge-primary">Approved</div>
                      <div class="text-xs text-base-content/50">2025-01-28</div>
                    </div>
                  </div>
                </div>
                
                <div class="border-l-4 border-warning pl-4">
                  <div class="flex justify-between items-start">
                    <div>
                      <h4 class="font-semibold">Payment Gateway Selection</h4>
                      <p class="text-sm text-base-content/70">Switch to alternative payment provider due to delays</p>
                      <div class="text-xs text-base-content/50 mt-1">
                        <strong>Impact:</strong> 2-week integration delay • <strong>Owner:</strong> Technical Lead
                      </div>
                    </div>
                    <div class="text-right">
                      <div class="badge badge-warning">In Progress</div>
                      <div class="text-xs text-base-content/50">2025-01-30</div>
                    </div>
                  </div>
                </div>
                
                <div class="border-l-4 border-success pl-4">
                  <div class="flex justify-between items-start">
                    <div>
                      <h4 class="font-semibold">Extended Support Period</h4>
                      <p class="text-sm text-base-content/70">Provide 30-day extended support for user adoption</p>
                      <div class="text-xs text-base-content/50 mt-1">
                        <strong>Impact:</strong> Additional support resources • <strong>Owner:</strong> Support Manager
                      </div>
                    </div>
                    <div class="text-right">
                      <div class="badge badge-success">Implemented</div>
                      <div class="text-xs text-base-content/50">2025-02-01</div>
                    </div>
                  </div>
                </div>
                
                <div class="border-l-4 border-info pl-4">
                  <div class="flex justify-between items-start">
                    <div>
                      <h4 class="font-semibold">Regulatory Compliance Review</h4>
                      <p class="text-sm text-base-content/70">Conduct legal review of data protection requirements</p>
                      <div class="text-xs text-base-content/50 mt-1">
                        <strong>Impact:</strong> Legal team involvement • <strong>Owner:</strong> Legal Counsel
                      </div>
                    </div>
                    <div class="text-right">
                      <div class="badge badge-info">Planned</div>
                      <div class="text-xs text-base-content/50">2025-02-05</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Action Notes -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Action Notes</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li>Confirm country cutover runbook completion</li>
                <li>Training completion catch-up plan implementation</li>
                <li>Payment gateway integration timeline review</li>
                <li>Extended support resource allocation</li>
                <li>Regulatory compliance assessment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function vendorMeetings() {
  return `
    <div role="tablist" class="tabs tabs-bordered">
      <input type="radio" name="vendor-meetings" role="tab" class="tab" aria-label="Alignment Meeting" checked />
      <div role="tabpanel" class="tab-content p-4">
        <div class="space-y-6">
          <!-- Vendor Performance Overview -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div class="stat bg-base-100 shadow">
              <div class="stat-title">On-time Delivery</div>
              <div class="stat-value text-success">93%</div>
              <div class="stat-desc">${getTrendBadge('up','good')} performance</div>
            </div>
            <div class="stat bg-base-100 shadow">
              <div class="stat-title">Change Failure Rate</div>
              <div class="stat-value text-warning">7%</div>
              <div class="stat-desc">${getTrendBadge('down','watch')} quality</div>
            </div>
            <div class="stat bg-base-100 shadow">
              <div class="stat-title">Forecast Accuracy</div>
              <div class="stat-value text-info">94%</div>
              <div class="stat-desc">${getTrendBadge('up','trend')} planning</div>
            </div>
            <div class="stat bg-base-100 shadow">
              <div class="stat-title">SLA Credits</div>
              <div class="stat-value text-success">0</div>
              <div class="stat-desc">${getTrendBadge('stable','good')} compliance</div>
            </div>
          </div>

          <!-- Vendor Plan Review -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Vendor Plan Review</h3>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="space-y-4">
                  <h4 class="font-semibold text-primary">Q1 2025 Objectives</h4>
                  <div class="space-y-3">
                    <div class="flex justify-between items-center p-3 bg-success/10 rounded-lg border-l-4 border-success">
                      <div>
                        <div class="font-semibold">API Integration Delivery</div>
                        <div class="text-sm text-base-content/70">Core platform integration</div>
                      </div>
                      <div class="text-right">
                        <div class="badge badge-success">On Track</div>
                        <div class="text-xs text-base-content/50">2025-02-15</div>
                      </div>
                    </div>
                    
                    <div class="flex justify-between items-center p-3 bg-warning/10 rounded-lg border-l-4 border-warning">
                      <div>
                        <div class="font-semibold">Quality Gate Improvements</div>
                        <div class="text-sm text-base-content/70">Reduce failure rate to <5%</div>
                      </div>
                      <div class="text-right">
                        <div class="badge badge-warning">At Risk</div>
                        <div class="text-xs text-base-content/50">2025-03-01</div>
                      </div>
                    </div>
                    
                    <div class="flex justify-between items-center p-3 bg-info/10 rounded-lg border-l-4 border-info">
                      <div>
                        <div class="font-semibold">Team Capacity Planning</div>
                        <div class="text-sm text-base-content/70">Staff augmentation plan</div>
                      </div>
                      <div class="text-right">
                        <div class="badge badge-info">In Progress</div>
                        <div class="text-xs text-base-content/50">2025-02-28</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="space-y-4">
                  <h4 class="font-semibold text-secondary">Performance Metrics</h4>
                  <div class="space-y-3">
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">Delivery Reliability</span>
                      <span class="font-semibold text-success">93%</span>
                    </div>
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">Quality Score</span>
                      <span class="font-semibold text-warning">93%</span>
                    </div>
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">Resource Utilization</span>
                      <span class="font-semibold text-info">87%</span>
                    </div>
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">SLA Compliance</span>
                      <span class="font-semibold text-success">100%</span>
                    </div>
                    <div class="flex justify-between items-center p-2 bg-base-200 rounded">
                      <span class="text-sm">Escalations</span>
                      <span class="font-semibold text-error">3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Vendor RAID Review -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Vendor RAID Review</h3>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 class="font-semibold mb-3 text-primary">Vendor Risks</h4>
                  <div class="space-y-2">
                    <div class="alert alert-warning">
                      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg>
                      <div>
                        <h4 class="font-bold">Resource Availability</h4>
                        <div class="text-xs">Key developer leaving — mitigation: knowledge transfer</div>
                      </div>
                    </div>
                    <div class="alert alert-error">
                      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <div>
                        <h4 class="font-bold">Quality Standards</h4>
                        <div class="text-xs">7% failure rate above target — mitigation: process review</div>
                      </div>
                    </div>
                    <div class="alert alert-info">
                      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <div>
                        <h4 class="font-bold">Scope Creep</h4>
                        <div class="text-xs">Additional requirements — monitoring required</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-semibold mb-3 text-secondary">Vendor Issues</h4>
                  <div class="space-y-2">
                    <div class="alert alert-warning">
                      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg>
                      <div>
                        <h4 class="font-bold">Communication Gaps</h4>
                        <div class="text-xs">Status reporting delays — resolution: daily standups</div>
                      </div>
                    </div>
                    <div class="alert alert-info">
                      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <div>
                        <h4 class="font-bold">Technical Debt</h4>
                        <div class="text-xs">Legacy code maintenance — resolution: refactoring plan</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Vendor Decision Log -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Vendor Decision Log</h3>
              <div class="space-y-4">
                <div class="border-l-4 border-primary pl-4">
                  <div class="flex justify-between items-start">
                    <div>
                      <h4 class="font-semibold">Contract Extension Approval</h4>
                      <p class="text-sm text-base-content/70">Extend vendor contract for 6 months with performance clauses</p>
                      <div class="text-xs text-base-content/50 mt-1">
                        <strong>Impact:</strong> $2M additional spend • <strong>Owner:</strong> Procurement Manager
                      </div>
                    </div>
                    <div class="text-right">
                      <div class="badge badge-primary">Approved</div>
                      <div class="text-xs text-base-content/50">2025-01-15</div>
                    </div>
                  </div>
                </div>
                
                <div class="border-l-4 border-warning pl-4">
                  <div class="flex justify-between items-start">
                    <div>
                      <h4 class="font-semibold">Quality Improvement Plan</h4>
                      <p class="text-sm text-base-content/70">Implement 30-day quality improvement program</p>
                      <div class="text-xs text-base-content/50 mt-1">
                        <strong>Impact:</strong> Process changes required • <strong>Owner:</strong> Vendor Lead
                      </div>
                    </div>
                    <div class="text-right">
                      <div class="badge badge-warning">In Progress</div>
                      <div class="text-xs text-base-content/50">2025-01-20</div>
                    </div>
                  </div>
                </div>
                
                <div class="border-l-4 border-success pl-4">
                  <div class="flex justify-between items-start">
                    <div>
                      <h4 class="font-semibold">Resource Augmentation</h4>
                      <p class="text-sm text-base-content/70">Add 2 senior developers to vendor team</p>
                      <div class="text-xs text-base-content/50 mt-1">
                        <strong>Impact:</strong> +40% capacity • <strong>Owner:</strong> Vendor Manager
                      </div>
                    </div>
                    <div class="text-right">
                      <div class="badge badge-success">Implemented</div>
                      <div class="text-xs text-base-content/50">2025-01-25</div>
                    </div>
                  </div>
                </div>
                
                <div class="border-l-4 border-info pl-4">
                  <div class="flex justify-between items-start">
                    <div>
                      <h4 class="font-semibold">SLA Adjustment</h4>
                      <p class="text-sm text-base-content/70">Increase SLA targets to 95% on-time delivery</p>
                      <div class="text-xs text-base-content/50 mt-1">
                        <strong>Impact:</strong> Higher performance standards • <strong>Owner:</strong> Contract Manager
                      </div>
                    </div>
                    <div class="text-right">
                      <div class="badge badge-info">Planned</div>
                      <div class="text-xs text-base-content/50">2025-02-01</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Vendor Agenda -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Meeting Agenda</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li>Quarter objectives alignment review</li>
                <li>Quality improvement action plan</li>
                <li>Capacity and staffing plan discussion</li>
                <li>Performance metrics review</li>
                <li>Risk mitigation strategies</li>
                <li>Next quarter planning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function createMeetings(layer) {
  const header = `
    <header>
      <h2 class="text-3xl font-semibold text-base-content mb-2">Meetings & Notes — ${layer.charAt(0).toUpperCase() + layer.slice(1)}</h2>
      <p class="text-base-content/70">Mock agendas, metrics and decision logs for this layer.</p>
    </header>
  `;
  let body = '';
  switch (layer) {
    case 'stream':
      body = streamMeetings();
      break;
    case 'country':
      body = countryMeetings();
      break;
    case 'vendor':
      body = vendorMeetings();
      break;
    default:
      body = programMeetings();
  }
  return `<section class="space-y-6">${header}${body}</section>`;
}

// Export for use in main HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createMeetings };
}


