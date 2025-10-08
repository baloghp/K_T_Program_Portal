// Quarterly Planning (BRP/QBR) Component
function createQuarterlyPlanning(layer) {
  const title = layer ? `Quarterly Planning — ${layer.charAt(0).toUpperCase() + layer.slice(1)} Layer` : 'Quarterly Planning (BRP/QBR)';
  
  // Mock data for different layers
  const layerData = {
    'program': {
      title: 'Program Level BRP/QBR',
      description: 'Strategic program commitments and value delivery plans',
      teams: [
        {
          name: 'Program Management Office',
          commitments: [
            { item: 'Complete Q1 2025 program review', status: 'completed', value: 'Strategic alignment' },
            { item: 'Launch Q2 2025 planning cycle', status: 'in-progress', value: 'Planning efficiency' },
            { item: 'Deliver executive dashboard', status: 'planned', value: 'Executive visibility' }
          ],
          valueDelivery: [
            { objective: 'Program governance framework', target: 'Q2 2025', confidence: 'high' },
            { objective: 'Stakeholder alignment', target: 'Q2 2025', confidence: 'medium' },
            { objective: 'Resource optimization', target: 'Q3 2025', confidence: 'high' }
          ]
        },
        {
          name: 'Architecture Team',
          commitments: [
            { item: 'Complete platform architecture review', status: 'completed', value: 'Technical foundation' },
            { item: 'Define integration patterns', status: 'in-progress', value: 'System integration' },
            { item: 'Establish security standards', status: 'planned', value: 'Security compliance' }
          ],
          valueDelivery: [
            { objective: 'Platform scalability', target: 'Q2 2025', confidence: 'high' },
            { objective: 'Security framework', target: 'Q2 2025', confidence: 'medium' },
            { objective: 'Integration standards', target: 'Q3 2025', confidence: 'high' }
          ]
        }
      ]
    },
    'stream': {
      title: 'Stream Level BRP/QBR',
      description: 'Stream-specific commitments and delivery plans',
      teams: [
        {
          name: 'Feature Streams Team',
          commitments: [
            { item: 'Deliver Sales/CRM MVP', status: 'completed', value: 'Revenue generation' },
            { item: 'Complete Operations/Booking features', status: 'in-progress', value: 'Operational efficiency' },
            { item: 'Launch Supplier Management module', status: 'planned', value: 'Supplier integration' }
          ],
          valueDelivery: [
            { objective: 'Sales pipeline automation', target: 'Q2 2025', confidence: 'high' },
            { objective: 'Booking process optimization', target: 'Q2 2025', confidence: 'medium' },
            { objective: 'Supplier onboarding', target: 'Q3 2025', confidence: 'high' }
          ]
        },
        {
          name: 'Core Streams Team',
          commitments: [
            { item: 'Platform stability improvements', status: 'completed', value: 'System reliability' },
            { item: 'Data migration completion', status: 'in-progress', value: 'Data integrity' },
            { item: 'Performance optimization', status: 'planned', value: 'System performance' }
          ],
          valueDelivery: [
            { objective: '99.9% uptime target', target: 'Q2 2025', confidence: 'high' },
            { objective: 'Data quality improvement', target: 'Q2 2025', confidence: 'medium' },
            { objective: 'Response time optimization', target: 'Q3 2025', confidence: 'high' }
          ]
        }
      ]
    },
    'country': {
      title: 'Country Level BRP/QBR',
      description: 'Country-specific rollout commitments and delivery plans',
      teams: [
        {
          name: 'Germany Rollout Team',
          commitments: [
            { item: 'Complete pilot phase', status: 'completed', value: 'Market validation' },
            { item: 'Full country deployment', status: 'in-progress', value: 'Market penetration' },
            { item: 'User training completion', status: 'planned', value: 'User adoption' }
          ],
          valueDelivery: [
            { objective: '100% user adoption', target: 'Q2 2025', confidence: 'high' },
            { objective: 'Local compliance', target: 'Q2 2025', confidence: 'medium' },
            { objective: 'Performance targets', target: 'Q3 2025', confidence: 'high' }
          ]
        },
        {
          name: 'France Rollout Team',
          commitments: [
            { item: 'Localization completion', status: 'completed', value: 'Local market fit' },
            { item: 'Stakeholder alignment', status: 'in-progress', value: 'Change management' },
            { item: 'Go-live preparation', status: 'planned', value: 'Successful launch' }
          ],
          valueDelivery: [
            { objective: 'Local market penetration', target: 'Q2 2025', confidence: 'medium' },
            { objective: 'Stakeholder satisfaction', target: 'Q2 2025', confidence: 'high' },
            { objective: 'Operational excellence', target: 'Q3 2025', confidence: 'high' }
          ]
        }
      ]
    },
    'vendor': {
      title: 'Vendor Level BRP/QBR',
      description: 'Vendor partnership commitments and delivery plans',
      teams: [
        {
          name: 'Primary Vendor Partnership',
          commitments: [
            { item: 'SLA compliance review', status: 'completed', value: 'Service quality' },
            { item: 'Performance improvement plan', status: 'in-progress', value: 'Service optimization' },
            { item: 'Innovation roadmap delivery', status: 'planned', value: 'Future capabilities' }
          ],
          valueDelivery: [
            { objective: '95% SLA compliance', target: 'Q2 2025', confidence: 'high' },
            { objective: 'Cost optimization', target: 'Q2 2025', confidence: 'medium' },
            { objective: 'Innovation delivery', target: 'Q3 2025', confidence: 'high' }
          ]
        },
        {
          name: 'Secondary Vendor Partnership',
          commitments: [
            { item: 'Integration completion', status: 'completed', value: 'System integration' },
            { item: 'Quality assurance', status: 'in-progress', value: 'Quality standards' },
            { item: 'Scaling preparation', status: 'planned', value: 'Growth readiness' }
          ],
          valueDelivery: [
            { objective: 'Seamless integration', target: 'Q2 2025', confidence: 'high' },
            { objective: 'Quality standards', target: 'Q2 2025', confidence: 'medium' },
            { objective: 'Scalability readiness', target: 'Q3 2025', confidence: 'high' }
          ]
        }
      ]
    }
  };

  const data = layerData[layer] || layerData['program'];

  return `
    <section class="space-y-6">
      <header>
        <h2 class="text-3xl font-semibold text-base-content mb-2">${title}</h2>
        <p class="text-base-content/70">${data.description}</p>
      </header>

      <!-- Summary Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 class="card-title text-lg">Total Teams</h3>
            <div class="stat">
              <div class="stat-value text-primary">${data.teams.length}</div>
              <div class="stat-desc">Active planning teams</div>
            </div>
          </div>
        </div>
        
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 class="card-title text-lg">Commitments</h3>
            <div class="stat">
              <div class="stat-value text-success">${data.teams.reduce((sum, team) => sum + team.commitments.length, 0)}</div>
              <div class="stat-desc">Total team commitments</div>
            </div>
          </div>
        </div>
        
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 class="card-title text-lg">Value Objectives</h3>
            <div class="stat">
              <div class="stat-value text-info">${data.teams.reduce((sum, team) => sum + team.valueDelivery.length, 0)}</div>
              <div class="stat-desc">Value delivery objectives</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Team Commitments and Value Delivery Plans -->
      ${data.teams.map(team => `
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 class="card-title text-xl mb-6">${team.name}</h3>
            
            <!-- Team Commitments -->
            <div class="mb-8">
              <h4 class="text-lg font-semibold mb-4 text-primary">Team Commitments</h4>
              <div class="space-y-3">
                ${team.commitments.map(commitment => `
                  <div class="flex items-center justify-between p-4 bg-base-200 rounded-lg">
                    <div class="flex-1">
                      <div class="font-medium">${commitment.item}</div>
                      <div class="text-sm text-base-content/70">Value: ${commitment.value}</div>
                    </div>
                    <div class="flex items-center space-x-3">
                      <span class="badge ${commitment.status === 'completed' ? 'badge-success' : commitment.status === 'in-progress' ? 'badge-warning' : 'badge-info'}">
                        ${commitment.status === 'completed' ? 'Completed' : commitment.status === 'in-progress' ? 'In Progress' : 'Planned'}
                      </span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
            
            <!-- Value Delivery Plan -->
            <div>
              <h4 class="text-lg font-semibold mb-4 text-secondary">Value Delivery Plan</h4>
              <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th>Objective</th>
                      <th>Target Date</th>
                      <th>Confidence Level</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${team.valueDelivery.map(objective => `
                      <tr>
                        <td class="font-medium">${objective.objective}</td>
                        <td>${objective.target}</td>
                        <td>
                          <span class="badge ${objective.confidence === 'high' ? 'badge-success' : objective.confidence === 'medium' ? 'badge-warning' : 'badge-error'}">
                            ${objective.confidence.toUpperCase()}
                          </span>
                        </td>
                        <td>
                          <div class="flex items-center space-x-2">
                            <div class="w-3 h-3 rounded-full ${objective.confidence === 'high' ? 'bg-success' : objective.confidence === 'medium' ? 'bg-warning' : 'bg-error'}"></div>
                            <span class="text-sm">${objective.confidence === 'high' ? 'On Track' : objective.confidence === 'medium' ? 'At Risk' : 'Critical'}</span>
                          </div>
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      `).join('')}

      <!-- Cross-Team Dependencies -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-xl mb-4">Cross-Team Dependencies</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-3">
              <h4 class="font-semibold text-primary">Critical Dependencies</h4>
              <div class="space-y-2">
                <div class="flex items-center justify-between p-3 bg-warning/10 rounded-lg">
                  <span class="text-sm">Platform stability → Feature delivery</span>
                  <span class="badge badge-warning">High Impact</span>
                </div>
                <div class="flex items-center justify-between p-3 bg-error/10 rounded-lg">
                  <span class="text-sm">Data migration → Country rollout</span>
                  <span class="badge badge-error">Critical</span>
                </div>
                <div class="flex items-center justify-between p-3 bg-info/10 rounded-lg">
                  <span class="text-sm">Vendor integration → Core features</span>
                  <span class="badge badge-info">Medium Impact</span>
                </div>
              </div>
            </div>
            
            <div class="space-y-3">
              <h4 class="font-semibold text-secondary">Risk Mitigation</h4>
              <div class="space-y-2">
                <div class="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                  <span class="text-sm">Parallel development streams</span>
                  <span class="badge badge-success">Mitigated</span>
                </div>
                <div class="flex items-center justify-between p-3 bg-warning/10 rounded-lg">
                  <span class="text-sm">Resource allocation buffer</span>
                  <span class="badge badge-warning">Monitoring</span>
                </div>
                <div class="flex items-center justify-between p-3 bg-info/10 rounded-lg">
                  <span class="text-sm">Early integration testing</span>
                  <span class="badge badge-info">Planned</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Next Steps -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-xl mb-4">Next Steps & Actions</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold mb-3 text-primary">Immediate Actions (Next 2 Weeks)</h4>
              <ul class="space-y-2 text-sm">
                <li class="flex items-center space-x-2">
                  <div class="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Finalize team resource allocation</span>
                </li>
                <li class="flex items-center space-x-2">
                  <div class="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Schedule dependency resolution meetings</span>
                </li>
                <li class="flex items-center space-x-2">
                  <div class="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Update stakeholder communication plan</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 class="font-semibold mb-3 text-secondary">Quarterly Milestones</h4>
              <ul class="space-y-2 text-sm">
                <li class="flex items-center space-x-2">
                  <div class="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Mid-quarter progress review</span>
                </li>
                <li class="flex items-center space-x-2">
                  <div class="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Value delivery checkpoint</span>
                </li>
                <li class="flex items-center space-x-2">
                  <div class="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Next quarter planning preparation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Export for use in main HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createQuarterlyPlanning };
}
