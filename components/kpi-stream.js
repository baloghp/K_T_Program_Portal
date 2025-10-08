// Stream Level KPIs Component (common across streams)
function createStreamKPIs(streamLabel) {
  const title = streamLabel ? `Stream KPIs — ${streamLabel}` : 'Stream KPIs';
  
  // Stream-specific KPIs based on selection
  const streamSpecificKPIs = getStreamSpecificKPIs(streamLabel);
  
  // Mock EVM data based on research with trends
  const evmData = {
    pv: { value: 250000, trend: 'stable' },  // Planned Value
    ev: { value: 255000, trend: 'up' },      // Earned Value  
    ac: { value: 220000, trend: 'down' },     // Actual Cost
    cpi: { value: 1.16, trend: 'up' },       // Cost Performance Index
    spi: { value: 1.02, trend: 'up' }        // Schedule Performance Index
  };
  
  // Mock software development metrics with trends
  const devMetrics = {
    releasePredictability: { value: 87, trend: 'up' },      // Percentage of releases on time
    escapedDefectRate: { value: 2.3, trend: 'down' },        // Defects per 1000 lines of code
    leadTime: { value: 8.5, trend: 'down' },               // Days from commit to production
    cycleTime: { value: 3.2, trend: 'down' },              // Days from start to finish
    throughput: { value: 12, trend: 'up' },                 // Features per sprint
    wip: { value: 4, trend: 'stable' }                     // Work in progress items
  };
  
  // SAFe Flow Framework metrics with trends
  const flowMetrics = {
    flowDistribution: {
      newFeatures: { value: 45, trend: 'up' },           // Percentage of new business features
      enablerWork: { value: 25, trend: 'stable' },       // Percentage of enabler work
      defectResolution: { value: 20, trend: 'down' },    // Percentage of defect resolution
      riskMitigation: { value: 10, trend: 'stable' }    // Percentage of risk mitigation
    },
    flowVelocity: { value: 15.2, trend: 'up' },          // Items completed per time period
    flowTime: { value: 12.3, trend: 'down' },           // Days from start to completion
    flowLoad: { value: 6, trend: 'down' },              // Items currently in progress
    flowEfficiency: { value: 78, trend: 'up' },         // Percentage of active vs wait time
    flowPredictability: { value: 89, trend: 'up' }      // Percentage of planned vs delivered
  };
  
  // Helper function to get trend icon and color
  function getTrendIndicator(trend, performance = 'good') {
    const baseColors = {
      'good': { up: 'text-success', down: 'text-success', stable: 'text-info' },
      'warning': { up: 'text-warning', down: 'text-warning', stable: 'text-warning' },
      'critical': { up: 'text-error', down: 'text-error', stable: 'text-error' },
      'info': { up: 'text-info', down: 'text-info', stable: 'text-info' }
    };
    
    const colors = baseColors[performance] || baseColors['good'];
    
    switch(trend) {
      case 'up':
        return { icon: '↗', color: colors.up, label: performance === 'critical' ? 'Critical' : performance === 'warning' ? 'Warning' : 'Improving' };
      case 'down':
        return { icon: '↘', color: colors.down, label: performance === 'critical' ? 'Critical' : performance === 'warning' ? 'Warning' : 'Improving' };
      case 'stable':
        return { icon: '→', color: colors.stable, label: performance === 'critical' ? 'Critical' : performance === 'warning' ? 'Warning' : 'Stable' };
      default:
        return { icon: '→', color: 'text-base-content', label: 'Unknown' };
    }
  }
  
  // Function to get stream-specific KPIs
  function getStreamSpecificKPIs(streamLabel) {
    const streamKPIs = {
      'Feature Streams': {
        title: 'Feature Streams KPIs',
        sections: [
          {
            name: 'Sales/CRM',
            metrics: [
              { name: 'Quote Turnaround Time', value: '2.3 days', trend: 'down', color: 'text-success', desc: 'Average time to generate quotes', performance: 'good' },
              { name: 'Win Rate', value: '68%', trend: 'up', color: 'text-warning', desc: 'Percentage of quotes converted to wins', performance: 'warning' },
              { name: 'Pipeline Data Completeness', value: '92%', trend: 'up', color: 'text-success', desc: 'Quality of pipeline data', performance: 'good' }
            ]
          },
          {
            name: 'Operations/Booking',
            metrics: [
              { name: 'Itinerary Build Time', value: '4.2 hours', trend: 'down', color: 'text-success', desc: 'Average time to build itineraries', performance: 'good' },
              { name: 'On-Time Dispatch Rate', value: '94%', trend: 'up', color: 'text-success', desc: 'Percentage of dispatches on time', performance: 'good' },
              { name: 'Booking Success %', value: '89%', trend: 'up', color: 'text-info', desc: 'Successful booking completion rate', performance: 'info' }
            ]
          },
          {
            name: 'Supplier Management',
            metrics: [
              { name: 'Rate Load SLA Adherence', value: '96%', trend: 'up', color: 'text-success', desc: 'Adherence to rate loading SLAs', performance: 'good' },
              { name: 'Confirmation SLA Hit Rate', value: '91%', trend: 'up', color: 'text-warning', desc: 'Supplier confirmation response rate', performance: 'warning' },
              { name: 'Supplier SLA Breaches', value: '3', trend: 'down', color: 'text-error', desc: 'Number of SLA breaches this month', performance: 'critical' }
            ]
          },
          {
            name: 'Finance Integration',
            metrics: [
              { name: 'Straight-Through Posting Rate', value: '87%', trend: 'up', color: 'text-success', desc: 'Automated posting without manual intervention', performance: 'good' },
              { name: 'Reconciliation Variance', value: '€2,340', trend: 'down', color: 'text-warning', desc: 'Monthly reconciliation variance amount', performance: 'warning' },
              { name: 'Time to Close', value: '3.2 days', trend: 'down', color: 'text-info', desc: 'Average time to close monthly books', performance: 'info' }
            ]
          }
        ]
      },
      'Core Streams': {
        title: 'Core Streams KPIs',
        sections: [
          {
            name: 'Core Platform',
            metrics: [
              { name: 'Platform Uptime', value: '99.95%', trend: 'up', color: 'text-success', desc: 'Availability across core services', performance: 'good' },
              { name: 'API Latency', value: '180 ms', trend: 'down', color: 'text-warning', desc: 'P50 end-to-end latency', performance: 'warning' },
              { name: 'Time-to-First-Deploy (New Teams)', value: '3.5 days', trend: 'down', color: 'text-error', desc: 'From repo provisioned to first prod deploy', performance: 'critical' },
              { name: 'Onboarding NPS', value: '62', trend: 'up', color: 'text-info', desc: 'New team onboarding satisfaction', performance: 'info' }
            ]
          },
          {
            name: 'Data & Migration',
            metrics: [
              { name: 'Data Quality (DQ) Scorecards', value: '93%', trend: 'up', color: 'text-success', desc: 'Completeness, accuracy, timeliness composite' },
              { name: 'Migration Variance', value: '1.8%', trend: 'down', color: 'text-success', desc: 'Delta vs. expected migrated records' },
              { name: 'D+1 Reconciliation Defects', value: '4', trend: 'down', color: 'text-success', desc: 'Defects detected next business day' }
            ]
          },
          {
            name: 'Test & Release',
            metrics: [
              { name: 'Automated Test Coverage', value: '72%', trend: 'up', color: 'text-warning', desc: 'Line/branch coverage across services', performance: 'warning' },
              { name: 'CI/CD Lead Time', value: '45 min', trend: 'down', color: 'text-success', desc: 'Commit to deploy to production', performance: 'good' },
              { name: 'Change Failure Rate', value: '8%', trend: 'down', color: 'text-error', desc: 'Deployments causing incidents/rollbacks', performance: 'critical' },
              { name: 'MTTR', value: '1.6 h', trend: 'down', color: 'text-info', desc: 'Mean time to restore service', performance: 'info' }
            ]
          },
          {
            name: 'Observability',
            metrics: [
              { name: 'SLO Attainment', value: '98.4%', trend: 'up', color: 'text-success', desc: 'Compliance against stated SLOs' },
              { name: 'Alert Fatigue Index', value: '1.7 alerts/dev/day', trend: 'down', color: 'text-success', desc: 'Noisy pages that impact focus' },
              { name: 'MTTD / MTTR', value: '5m / 42m', trend: 'down', color: 'text-success', desc: 'Mean time to detect / restore' },
              { name: 'Incident Backlog Age', value: '3.2 days', trend: 'down', color: 'text-success', desc: 'Average age of open incidents' }
            ]
          },
          {
            name: 'Legacy Transition',
            metrics: [
              { name: 'Cutover Success', value: '96%', trend: 'up', color: 'text-success', desc: 'Cutovers completed without rollback' },
              { name: 'Rollback MTTR', value: '22 min', trend: 'down', color: 'text-success', desc: 'Time to recover on failed cutover' },
              { name: 'Archival Completeness', value: '88%', trend: 'up', color: 'text-success', desc: 'Legacy data archived as per policy' },
              { name: 'Annualized Opex Saved', value: '€420k', trend: 'up', color: 'text-success', desc: 'Run-cost reduction from decommissioning' }
            ]
          }
        ]
      },
      'Specialized Streams': {
        title: 'Specialized Streams KPIs',
        sections: [
          {
            name: 'Process Optimization & Automation',
            metrics: [
              { name: 'Automation Rate', value: '78%', trend: 'up', color: 'text-success', desc: 'Share of steps executed without manual touch' },
              { name: 'Touch Time Reduction', value: '42%', trend: 'up', color: 'text-success', desc: 'Reduction vs. baseline manual handling time' },
              { name: 'ROI Realized vs Forecast', value: '1.12x', trend: 'up', color: 'text-success', desc: 'Realized benefits relative to business case' }
            ]
          },
          {
            name: 'Pricing / Rules Engine',
            metrics: [
              { name: 'Price Accuracy vs Policy', value: '97.4%', trend: 'up', color: 'text-success', desc: 'Adherence to pricing policies across scenarios' },
              { name: 'Time to Publish Rules', value: '18 min', trend: 'down', color: 'text-success', desc: 'Change lead time from approval to production' },
              { name: 'Margin Uplift Attribution', value: '+2.1 pp', trend: 'up', color: 'text-success', desc: 'Incremental margin credited to rules engine' }
            ]
          },
          {
            name: 'Reconciliation Engine',
            metrics: [
              { name: 'Match Rate', value: '96%', trend: 'up', color: 'text-success', desc: 'Auto-matched transactions without exception' },
              { name: 'Exception Aging', value: '1.9 days', trend: 'down', color: 'text-success', desc: 'Average age of unresolved exceptions' },
              { name: 'Audit Findings', value: '0', trend: 'down', color: 'text-success', desc: 'Material audit issues in the last quarter' }
            ]
          },
          {
            name: 'AI Services + ML/LLM Ops',
            metrics: [
              { name: 'Model Eval Scores', value: 'F1=0.87', trend: 'up', color: 'text-success', desc: 'Primary evaluation metric across models' },
              { name: 'Inference Latency / Cost', value: '120 ms / €0.0012', trend: 'down', color: 'text-success', desc: 'Median latency and cost per request' },
              { name: 'Drift Incidents', value: '1 / qtr', trend: 'down', color: 'text-success', desc: 'Concept/data drift incidents per quarter' },
              { name: 'Human-in-Loop Approval Rate', value: '93%', trend: 'up', color: 'text-success', desc: 'Approvals on sampled HITL reviews' }
            ]
          }
        ]
      },
      'Enabler Streams': {
        title: 'Enabler Streams KPIs',
        metrics: [
          { name: 'Straight-Through Posting Rate', value: '87%', trend: 'up', color: 'text-success', desc: 'Automated posting without manual intervention' },
          { name: 'Reconciliation Variance', value: '€2,340', trend: 'down', color: 'text-success', desc: 'Monthly reconciliation variance amount' },
          { name: 'Time to Close', value: '3.2 days', trend: 'down', color: 'text-success', desc: 'Average time to close monthly books' }
        ]
      }
    };
    
    return streamKPIs[streamLabel] || null;
  }
  
  return `
    <section class="space-y-6">
      <header>
        <h2 class="text-3xl font-semibold text-base-content mb-2">${title}</h2>
        <p class="text-base-content/70">Comprehensive stream performance metrics</p>
      </header>
      
      ${streamSpecificKPIs ? `
      <!-- Stream-Specific KPIs -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-xl mb-4">${streamSpecificKPIs.title}</h3>
          ${streamSpecificKPIs.sections ? `
            ${streamSpecificKPIs.sections.map(section => `
              <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-primary">${section.name}</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  ${section.metrics.map(metric => `
                    <div class="stat bg-base-200 rounded-lg p-4">
                      <div class="stat-title flex items-center justify-between">
                        <span>${metric.name}</span>
                        <span class="badge badge-outline ${getTrendIndicator(metric.trend, metric.performance || 'good').color}">
                          ${getTrendIndicator(metric.trend, metric.performance || 'good').icon} ${getTrendIndicator(metric.trend, metric.performance || 'good').label}
                        </span>
                      </div>
                      <div class="stat-value ${metric.color}">${metric.value}</div>
                      <div class="stat-desc">${metric.desc}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          ` : `
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              ${streamSpecificKPIs.metrics.map(metric => `
                <div class="stat bg-base-200 rounded-lg p-4">
                  <div class="stat-title flex items-center justify-between">
                    <span>${metric.name}</span>
                    <span class="badge badge-outline ${getTrendIndicator(metric.trend).color}">
                      ${getTrendIndicator(metric.trend).icon} ${getTrendIndicator(metric.trend).label}
                    </span>
                  </div>
                  <div class="stat-value ${metric.color}">${metric.value}</div>
                  <div class="stat-desc">${metric.desc}</div>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      </div>
      ` : ''}

      <!-- Delivery KPIs -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-xl mb-4">Delivery KPIs</h3>
          
          <!-- EVM Metrics -->
          <div class="mb-6">
            <h4 class="text-lg font-semibold mb-3">Earned Value Management</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div class="stat bg-base-200 rounded-lg p-4">
                <div class="stat-title flex items-center justify-between">
                  <span>Planned Value (PV)</span>
                  <span class="badge badge-outline ${getTrendIndicator(evmData.pv.trend).color}">
                    ${getTrendIndicator(evmData.pv.trend).icon} ${getTrendIndicator(evmData.pv.trend).label}
                  </span>
                </div>
                <div class="stat-value text-primary">€${evmData.pv.value.toLocaleString()}</div>
                <div class="stat-desc">Budgeted cost of work scheduled</div>
              </div>
              
              <div class="stat bg-base-200 rounded-lg p-4">
                <div class="stat-title flex items-center justify-between">
                  <span>Earned Value (EV)</span>
                  <span class="badge badge-outline ${getTrendIndicator(evmData.ev.trend).color}">
                    ${getTrendIndicator(evmData.ev.trend).icon} ${getTrendIndicator(evmData.ev.trend).label}
                  </span>
                </div>
                <div class="stat-value text-success">€${evmData.ev.value.toLocaleString()}</div>
                <div class="stat-desc">Budgeted cost of work performed</div>
              </div>
              
              <div class="stat bg-base-200 rounded-lg p-4">
                <div class="stat-title flex items-center justify-between">
                  <span>Actual Cost (AC)</span>
                  <span class="badge badge-outline ${getTrendIndicator(evmData.ac.trend).color}">
                    ${getTrendIndicator(evmData.ac.trend).icon} ${getTrendIndicator(evmData.ac.trend).label}
                  </span>
                </div>
                <div class="stat-value text-info">€${evmData.ac.value.toLocaleString()}</div>
                <div class="stat-desc">Actual cost of work performed</div>
              </div>
              
              <div class="stat bg-base-200 rounded-lg p-4">
                <div class="stat-title flex items-center justify-between">
                  <span>Cost Performance Index</span>
                  <span class="badge badge-outline ${getTrendIndicator(evmData.cpi.trend).color}">
                    ${getTrendIndicator(evmData.cpi.trend).icon} ${getTrendIndicator(evmData.cpi.trend).label}
                  </span>
                </div>
                <div class="stat-value text-success">${evmData.cpi.value}</div>
                <div class="stat-desc">${evmData.cpi.value > 1 ? 'Under budget' : 'Over budget'}</div>
              </div>
              
              <div class="stat bg-base-200 rounded-lg p-4">
                <div class="stat-title flex items-center justify-between">
                  <span>Schedule Performance Index</span>
                  <span class="badge badge-outline ${getTrendIndicator(evmData.spi.trend).color}">
                    ${getTrendIndicator(evmData.spi.trend).icon} ${getTrendIndicator(evmData.spi.trend).label}
                  </span>
                </div>
                <div class="stat-value text-success">${evmData.spi.value}</div>
                <div class="stat-desc">${evmData.spi.value > 1 ? 'Ahead of schedule' : 'Behind schedule'}</div>
              </div>
              
              <div class="stat bg-base-200 rounded-lg p-4">
                <div class="stat-title flex items-center justify-between">
                  <span>Cost Variance</span>
                  <span class="badge badge-outline text-success">
                    ↗ Improving
                  </span>
                </div>
                <div class="stat-value text-success">€${(evmData.ev.value - evmData.ac.value).toLocaleString()}</div>
                <div class="stat-desc">${(evmData.ev.value - evmData.ac.value) > 0 ? 'Under budget' : 'Over budget'}</div>
              </div>
            </div>
          </div>
          
          <!-- Software Development Metrics -->
          <div>
            <h4 class="text-lg font-semibold mb-3">Software Development Metrics</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="stat bg-base-200 rounded-lg p-4">
                <div class="stat-title flex items-center justify-between">
                  <span>Release Predictability</span>
                  <span class="badge badge-outline ${getTrendIndicator(devMetrics.releasePredictability.trend).color}">
                    ${getTrendIndicator(devMetrics.releasePredictability.trend).icon} ${getTrendIndicator(devMetrics.releasePredictability.trend).label}
                  </span>
                </div>
                <div class="stat-value text-success">${devMetrics.releasePredictability.value}%</div>
                <div class="stat-desc">Releases delivered on time</div>
              </div>
              
              <div class="stat bg-base-200 rounded-lg p-4">
                <div class="stat-title flex items-center justify-between">
                  <span>Escaped Defect Rate</span>
                  <span class="badge badge-outline ${getTrendIndicator(devMetrics.escapedDefectRate.trend).color}">
                    ${getTrendIndicator(devMetrics.escapedDefectRate.trend).icon} ${getTrendIndicator(devMetrics.escapedDefectRate.trend).label}
                  </span>
                </div>
                <div class="stat-value text-warning">${devMetrics.escapedDefectRate.value}</div>
                <div class="stat-desc">Defects per 1000 LOC</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- SAFe Flow Framework Metrics -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-xl mb-4">Flow Framework Metrics</h3>
          
          <!-- Flow Distribution -->
          <div class="mb-6">
            <h4 class="text-lg font-semibold mb-3">1. Flow Distribution</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="stat bg-base-200 rounded-lg p-4">
                <div class="stat-title flex items-center justify-between">
                  <span>New Features</span>
                  <span class="badge badge-outline ${getTrendIndicator(flowMetrics.flowDistribution.newFeatures.trend).color}">
                    ${getTrendIndicator(flowMetrics.flowDistribution.newFeatures.trend).icon} ${getTrendIndicator(flowMetrics.flowDistribution.newFeatures.trend).label}
                  </span>
                </div>
                <div class="stat-value text-success">${flowMetrics.flowDistribution.newFeatures.value}%</div>
                <div class="stat-desc">Business features</div>
              </div>
              
              <div class="stat bg-base-200 rounded-lg p-4">
                <div class="stat-title flex items-center justify-between">
                  <span>Enabler Work</span>
                  <span class="badge badge-outline ${getTrendIndicator(flowMetrics.flowDistribution.enablerWork.trend).color}">
                    ${getTrendIndicator(flowMetrics.flowDistribution.enablerWork.trend).icon} ${getTrendIndicator(flowMetrics.flowDistribution.enablerWork.trend).label}
                  </span>
                </div>
                <div class="stat-value text-info">${flowMetrics.flowDistribution.enablerWork.value}%</div>
                <div class="stat-desc">Technical enablers</div>
              </div>
              
              <div class="stat bg-base-200 rounded-lg p-4">
                <div class="stat-title flex items-center justify-between">
                  <span>Defect Resolution</span>
                  <span class="badge badge-outline ${getTrendIndicator(flowMetrics.flowDistribution.defectResolution.trend).color}">
                    ${getTrendIndicator(flowMetrics.flowDistribution.defectResolution.trend).icon} ${getTrendIndicator(flowMetrics.flowDistribution.defectResolution.trend).label}
                  </span>
                </div>
                <div class="stat-value text-warning">${flowMetrics.flowDistribution.defectResolution.value}%</div>
                <div class="stat-desc">Bug fixes</div>
              </div>
              
              <div class="stat bg-base-200 rounded-lg p-4">
                <div class="stat-title flex items-center justify-between">
                  <span>Risk Mitigation</span>
                  <span class="badge badge-outline ${getTrendIndicator(flowMetrics.flowDistribution.riskMitigation.trend).color}">
                    ${getTrendIndicator(flowMetrics.flowDistribution.riskMitigation.trend).icon} ${getTrendIndicator(flowMetrics.flowDistribution.riskMitigation.trend).label}
                  </span>
                </div>
                <div class="stat-value text-primary">${flowMetrics.flowDistribution.riskMitigation.value}%</div>
                <div class="stat-desc">Risk reduction</div>
              </div>
            </div>
          </div>
          
          <!-- Core Flow Metrics -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="stat bg-base-200 rounded-lg p-4">
              <div class="stat-title flex items-center justify-between">
                <span>Flow Velocity</span>
                <span class="badge badge-outline ${getTrendIndicator(flowMetrics.flowVelocity.trend).color}">
                  ${getTrendIndicator(flowMetrics.flowVelocity.trend).icon} ${getTrendIndicator(flowMetrics.flowVelocity.trend).label}
                </span>
              </div>
              <div class="stat-value text-success">${flowMetrics.flowVelocity.value}</div>
              <div class="stat-desc">Items completed per period</div>
            </div>
            
            <div class="stat bg-base-200 rounded-lg p-4">
              <div class="stat-title flex items-center justify-between">
                <span>Flow Time</span>
                <span class="badge badge-outline ${getTrendIndicator(flowMetrics.flowTime.trend).color}">
                  ${getTrendIndicator(flowMetrics.flowTime.trend).icon} ${getTrendIndicator(flowMetrics.flowTime.trend).label}
                </span>
              </div>
              <div class="stat-value text-primary">${flowMetrics.flowTime.value} days</div>
              <div class="stat-desc">Start to completion</div>
            </div>
            
            <div class="stat bg-base-200 rounded-lg p-4">
              <div class="stat-title flex items-center justify-between">
                <span>Flow Load</span>
                <span class="badge badge-outline ${getTrendIndicator(flowMetrics.flowLoad.trend).color}">
                  ${getTrendIndicator(flowMetrics.flowLoad.trend).icon} ${getTrendIndicator(flowMetrics.flowLoad.trend).label}
                </span>
              </div>
              <div class="stat-value text-warning">${flowMetrics.flowLoad.value}</div>
              <div class="stat-desc">Items in progress</div>
            </div>
            
            <div class="stat bg-base-200 rounded-lg p-4">
              <div class="stat-title flex items-center justify-between">
                <span>Flow Efficiency</span>
                <span class="badge badge-outline ${getTrendIndicator(flowMetrics.flowEfficiency.trend).color}">
                  ${getTrendIndicator(flowMetrics.flowEfficiency.trend).icon} ${getTrendIndicator(flowMetrics.flowEfficiency.trend).label}
                </span>
              </div>
              <div class="stat-value text-success">${flowMetrics.flowEfficiency.value}%</div>
              <div class="stat-desc">Active vs wait time</div>
            </div>
            
            <div class="stat bg-base-200 rounded-lg p-4">
              <div class="stat-title flex items-center justify-between">
                <span>Flow Predictability</span>
                <span class="badge badge-outline ${getTrendIndicator(flowMetrics.flowPredictability.trend).color}">
                  ${getTrendIndicator(flowMetrics.flowPredictability.trend).icon} ${getTrendIndicator(flowMetrics.flowPredictability.trend).label}
                </span>
              </div>
              <div class="stat-value text-success">${flowMetrics.flowPredictability.value}%</div>
              <div class="stat-desc">Planned vs delivered</div>
            </div>
            
            <div class="stat bg-base-200 rounded-lg p-4">
              <div class="stat-title flex items-center justify-between">
                <span>Lead Time</span>
                <span class="badge badge-outline ${getTrendIndicator(devMetrics.leadTime.trend).color}">
                  ${getTrendIndicator(devMetrics.leadTime.trend).icon} ${getTrendIndicator(devMetrics.leadTime.trend).label}
                </span>
              </div>
              <div class="stat-value text-primary">${devMetrics.leadTime.value} days</div>
              <div class="stat-desc">Commit to production</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Export for use in main HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createStreamKPIs };
}


