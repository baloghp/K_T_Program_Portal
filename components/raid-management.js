// RAID Management Component
// Comprehensive RAID (Risks, Assumptions, Issues, Dependencies) management for all levels

// Program Level RAID Dashboard
function createProgramRAID() {
  const programRAIDData = {
    summary: {
      totalRisks: 12,
      totalAssumptions: 8,
      totalIssues: 5,
      totalDependencies: 15,
      criticalItems: 7,
      overdueItems: 3
    },
    risks: [
      {
        id: 'R001',
        title: 'Key Vendor Resource Unavailability',
        description: 'Critical vendor team members may become unavailable during Q2 2025',
        impact: 'High',
        probability: 'Medium',
        status: 'Open',
        owner: 'Vendor Manager',
        dueDate: '2025-03-15',
        mitigation: 'Identify backup resources and cross-train team members',
        lastUpdated: '2025-01-15'
      },
      {
        id: 'R002',
        title: 'Regulatory Compliance Changes',
        description: 'Potential changes in data protection regulations affecting multiple countries',
        impact: 'High',
        probability: 'Low',
        status: 'Mitigated',
        owner: 'Legal Team',
        dueDate: '2025-02-28',
        mitigation: 'Regular monitoring of regulatory updates and proactive compliance review',
        lastUpdated: '2025-01-10'
      },
      {
        id: 'R003',
        title: 'Integration Complexity',
        description: 'Legacy system integration may be more complex than anticipated',
        impact: 'Medium',
        probability: 'High',
        status: 'Open',
        owner: 'Technical Lead',
        dueDate: '2025-04-01',
        mitigation: 'Conduct detailed technical assessment and create detailed integration plan',
        lastUpdated: '2025-01-12'
      }
    ],
    assumptions: [
      {
        id: 'A001',
        title: 'Stable Vendor Team',
        description: 'Vendor team composition will remain stable throughout the project',
        status: 'Validated',
        owner: 'Program Manager',
        validationDate: '2025-01-20',
        lastUpdated: '2025-01-15'
      },
      {
        id: 'A002',
        title: 'Budget Approval',
        description: 'Additional budget will be approved for scope changes',
        status: 'Pending',
        owner: 'Finance Director',
        validationDate: '2025-02-15',
        lastUpdated: '2025-01-10'
      }
    ],
    issues: [
      {
        id: 'I001',
        title: 'Performance Testing Environment Delays',
        description: 'Performance testing environment setup is 2 weeks behind schedule',
        severity: 'High',
        status: 'Open',
        owner: 'Infrastructure Team',
        dueDate: '2025-02-01',
        resolution: 'Escalated to infrastructure vendor for expedited setup',
        lastUpdated: '2025-01-14'
      },
      {
        id: 'I002',
        title: 'Data Migration Quality Issues',
        description: 'Data quality issues discovered during migration testing',
        severity: 'Medium',
        status: 'In Progress',
        owner: 'Data Team',
        dueDate: '2025-01-30',
        resolution: 'Implementing data cleansing scripts and validation rules',
        lastUpdated: '2025-01-16'
      }
    ],
    dependencies: [
      {
        id: 'D001',
        title: 'Infrastructure Provisioning',
        description: 'Cloud infrastructure must be provisioned before development can begin',
        type: 'External',
        status: 'On Track',
        owner: 'Infrastructure Team',
        dueDate: '2025-02-15',
        blocker: 'None',
        lastUpdated: '2025-01-15'
      },
      {
        id: 'D002',
        title: 'Regulatory Approval',
        description: 'Data processing approval required from regulatory bodies',
        type: 'External',
        status: 'At Risk',
        owner: 'Compliance Team',
        dueDate: '2025-03-01',
        blocker: 'Documentation review pending',
        lastUpdated: '2025-01-12'
      }
    ]
  };

  return `
    <section class="space-y-6">
      <header>
        <h2 class="text-3xl font-semibold text-base-content mb-2">Program RAID Management</h2>
        <p class="text-base-content/70">Comprehensive risk, assumption, issue, and dependency tracking across all program components.</p>
      </header>

      <!-- Summary Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="stat bg-base-100 shadow-lg rounded-lg">
          <div class="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
          </div>
          <div class="stat-title">Total Risks</div>
          <div class="stat-value text-warning">${programRAIDData.summary.totalRisks}</div>
          <div class="stat-desc">${programRAIDData.summary.criticalItems} critical</div>
        </div>

        <div class="stat bg-base-100 shadow-lg rounded-lg">
          <div class="stat-figure text-info">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="stat-title">Assumptions</div>
          <div class="stat-value text-info">${programRAIDData.summary.totalAssumptions}</div>
          <div class="stat-desc">${programRAIDData.summary.totalAssumptions - 2} pending validation</div>
        </div>

        <div class="stat bg-base-100 shadow-lg rounded-lg">
          <div class="stat-figure text-error">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="stat-title">Active Issues</div>
          <div class="stat-value text-error">${programRAIDData.summary.totalIssues}</div>
          <div class="stat-desc">${programRAIDData.summary.overdueItems} overdue</div>
        </div>

        <div class="stat bg-base-100 shadow-lg rounded-lg">
          <div class="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
            </svg>
          </div>
          <div class="stat-title">Dependencies</div>
          <div class="stat-value text-primary">${programRAIDData.summary.totalDependencies}</div>
          <div class="stat-desc">${programRAIDData.summary.totalDependencies - 3} on track</div>
        </div>
      </div>

      <!-- Risk Management -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
            Risk Management
          </h3>
          <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Risk</th>
                  <th>Impact</th>
                  <th>Probability</th>
                  <th>Status</th>
                  <th>Owner</th>
                  <th>Due Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${programRAIDData.risks.map(risk => `
                  <tr>
                    <td><span class="badge badge-outline">${risk.id}</span></td>
                    <td>
                      <div>
                        <div class="font-semibold">${risk.title}</div>
                        <div class="text-sm text-base-content/70">${risk.description}</div>
                      </div>
                    </td>
                    <td>
                      <span class="badge ${risk.impact === 'High' ? 'badge-error' : risk.impact === 'Medium' ? 'badge-warning' : 'badge-info'}">
                        ${risk.impact}
                      </span>
                    </td>
                    <td>
                      <span class="badge ${risk.probability === 'High' ? 'badge-error' : risk.probability === 'Medium' ? 'badge-warning' : 'badge-info'}">
                        ${risk.probability}
                      </span>
                    </td>
                    <td>
                      <span class="badge ${risk.status === 'Open' ? 'badge-error' : risk.status === 'Mitigated' ? 'badge-success' : 'badge-warning'}">
                        ${risk.status}
                      </span>
                    </td>
                    <td>${risk.owner}</td>
                    <td>${risk.dueDate}</td>
                    <td>
                      <button class="btn btn-ghost btn-xs">View</button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Issues Management -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Issue Management
          </h3>
          <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Issue</th>
                  <th>Severity</th>
                  <th>Status</th>
                  <th>Owner</th>
                  <th>Due Date</th>
                  <th>Resolution</th>
                </tr>
              </thead>
              <tbody>
                ${programRAIDData.issues.map(issue => `
                  <tr>
                    <td><span class="badge badge-outline">${issue.id}</span></td>
                    <td>
                      <div>
                        <div class="font-semibold">${issue.title}</div>
                        <div class="text-sm text-base-content/70">${issue.description}</div>
                      </div>
                    </td>
                    <td>
                      <span class="badge ${issue.severity === 'High' ? 'badge-error' : 'badge-warning'}">
                        ${issue.severity}
                      </span>
                    </td>
                    <td>
                      <span class="badge ${issue.status === 'Open' ? 'badge-error' : issue.status === 'In Progress' ? 'badge-warning' : 'badge-success'}">
                        ${issue.status}
                      </span>
                    </td>
                    <td>${issue.owner}</td>
                    <td>${issue.dueDate}</td>
                    <td>
                      <div class="text-sm">${issue.resolution}</div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Dependencies Management -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
            </svg>
            Dependency Management
          </h3>
          <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Dependency</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Owner</th>
                  <th>Due Date</th>
                  <th>Blocker</th>
                </tr>
              </thead>
              <tbody>
                ${programRAIDData.dependencies.map(dep => `
                  <tr>
                    <td><span class="badge badge-outline">${dep.id}</span></td>
                    <td>
                      <div>
                        <div class="font-semibold">${dep.title}</div>
                        <div class="text-sm text-base-content/70">${dep.description}</div>
                      </div>
                    </td>
                    <td>
                      <span class="badge ${dep.type === 'External' ? 'badge-warning' : 'badge-info'}">
                        ${dep.type}
                      </span>
                    </td>
                    <td>
                      <span class="badge ${dep.status === 'On Track' ? 'badge-success' : dep.status === 'At Risk' ? 'badge-warning' : 'badge-error'}">
                        ${dep.status}
                      </span>
                    </td>
                    <td>${dep.owner}</td>
                    <td>${dep.dueDate}</td>
                    <td>
                      <span class="text-sm ${dep.blocker === 'None' ? 'text-success' : 'text-warning'}">
                        ${dep.blocker}
                      </span>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Assumptions Management -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Assumption Management
          </h3>
          <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Assumption</th>
                  <th>Status</th>
                  <th>Owner</th>
                  <th>Validation Date</th>
                  <th>Last Updated</th>
                </tr>
              </thead>
              <tbody>
                ${programRAIDData.assumptions.map(assumption => `
                  <tr>
                    <td><span class="badge badge-outline">${assumption.id}</span></td>
                    <td>
                      <div>
                        <div class="font-semibold">${assumption.title}</div>
                        <div class="text-sm text-base-content/70">${assumption.description}</div>
                      </div>
                    </td>
                    <td>
                      <span class="badge ${assumption.status === 'Validated' ? 'badge-success' : assumption.status === 'Pending' ? 'badge-warning' : 'badge-error'}">
                        ${assumption.status}
                      </span>
                    </td>
                    <td>${assumption.owner}</td>
                    <td>${assumption.validationDate}</td>
                    <td>${assumption.lastUpdated}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Country Level RAID Dashboard
function createCountryRAID() {
  const countryRAIDData = {
    summary: {
      totalRisks: 8,
      totalIssues: 3,
      totalDependencies: 6,
      criticalItems: 2,
      countrySpecific: true
    },
    risks: [
      {
        id: 'CR001',
        title: 'Local Regulatory Compliance',
        description: 'Country-specific data protection requirements',
        impact: 'High',
        probability: 'Medium',
        status: 'Open',
        owner: 'Country Legal Team',
        dueDate: '2025-02-28',
        country: 'Germany'
      },
      {
        id: 'CR002',
        title: 'Localization Requirements',
        description: 'UI/UX localization for local language requirements',
        impact: 'Medium',
        probability: 'High',
        status: 'In Progress',
        owner: 'Localization Team',
        dueDate: '2025-03-15',
        country: 'France'
      }
    ],
    issues: [
      {
        id: 'CI001',
        title: 'Local Payment Gateway Integration',
        description: 'Integration with local payment systems is delayed',
        severity: 'High',
        status: 'Open',
        owner: 'Integration Team',
        dueDate: '2025-02-15',
        country: 'Japan'
      }
    ],
    dependencies: [
      {
        id: 'CD001',
        title: 'Local Infrastructure Setup',
        description: 'Country-specific cloud infrastructure provisioning',
        type: 'External',
        status: 'On Track',
        owner: 'Infrastructure Team',
        dueDate: '2025-03-01',
        country: 'Singapore'
      }
    ]
  };

  return `
    <section class="space-y-6">
      <header>
        <h2 class="text-3xl font-semibold text-base-content mb-2">Country RAID Management</h2>
        <p class="text-base-content/70">Country-specific risks, issues, and dependencies for regional rollouts.</p>
      </header>

      <!-- Country Summary -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="stat bg-base-100 shadow-lg rounded-lg">
          <div class="stat-figure text-warning">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
          </div>
          <div class="stat-title">Country Risks</div>
          <div class="stat-value text-warning">${countryRAIDData.summary.totalRisks}</div>
          <div class="stat-desc">${countryRAIDData.summary.criticalItems} critical</div>
        </div>

        <div class="stat bg-base-100 shadow-lg rounded-lg">
          <div class="stat-figure text-error">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="stat-title">Active Issues</div>
          <div class="stat-value text-error">${countryRAIDData.summary.totalIssues}</div>
          <div class="stat-desc">Country-specific</div>
        </div>

        <div class="stat bg-base-100 shadow-lg rounded-lg">
          <div class="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
            </svg>
          </div>
          <div class="stat-title">Dependencies</div>
          <div class="stat-value text-primary">${countryRAIDData.summary.totalDependencies}</div>
          <div class="stat-desc">Regional dependencies</div>
        </div>
      </div>

      <!-- Country Risk Heatmap -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-xl mb-4">Country Risk Heatmap</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="card bg-warning/10 border border-warning/20">
              <div class="card-body p-4">
                <h4 class="card-title text-sm">Germany</h4>
                <div class="text-2xl font-bold text-warning">3</div>
                <div class="text-xs">High Risk</div>
              </div>
            </div>
            <div class="card bg-error/10 border border-error/20">
              <div class="card-body p-4">
                <h4 class="card-title text-sm">Japan</h4>
                <div class="text-2xl font-bold text-error">2</div>
                <div class="text-xs">Critical</div>
              </div>
            </div>
            <div class="card bg-info/10 border border-info/20">
              <div class="card-body p-4">
                <h4 class="card-title text-sm">France</h4>
                <div class="text-2xl font-bold text-info">1</div>
                <div class="text-xs">Medium Risk</div>
              </div>
            </div>
            <div class="card bg-success/10 border border-success/20">
              <div class="card-body p-4">
                <h4 class="card-title text-sm">Singapore</h4>
                <div class="text-2xl font-bold text-success">0</div>
                <div class="text-xs">Low Risk</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Country-Specific RAID Items -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-xl mb-4">Country-Specific RAID Items</h3>
          <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Item</th>
                  <th>Country</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Owner</th>
                  <th>Due Date</th>
                </tr>
              </thead>
              <tbody>
                ${[...countryRAIDData.risks, ...countryRAIDData.issues, ...countryRAIDData.dependencies].map(item => `
                  <tr>
                    <td><span class="badge badge-outline">${item.id}</span></td>
                    <td>
                      <div>
                        <div class="font-semibold">${item.title}</div>
                        <div class="text-sm text-base-content/70">${item.description}</div>
                      </div>
                    </td>
                    <td>
                      <span class="badge badge-info">${item.country}</span>
                    </td>
                    <td>
                      <span class="badge ${item.id.startsWith('CR') ? 'badge-warning' : item.id.startsWith('CI') ? 'badge-error' : 'badge-primary'}">
                        ${item.id.startsWith('CR') ? 'Risk' : item.id.startsWith('CI') ? 'Issue' : 'Dependency'}
                      </span>
                    </td>
                    <td>
                      <span class="badge ${item.status === 'Open' ? 'badge-error' : item.status === 'In Progress' ? 'badge-warning' : item.status === 'On Track' ? 'badge-success' : 'badge-info'}">
                        ${item.status}
                      </span>
                    </td>
                    <td>${item.owner}</td>
                    <td>${item.dueDate}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Vendor Level RAID Dashboard
function createVendorRAID() {
  const vendorRAIDData = {
    summary: {
      totalRisks: 6,
      totalIssues: 4,
      totalDependencies: 8,
      vendorPerformance: 'Good',
      criticalItems: 1
    },
    risks: [
      {
        id: 'VR001',
        title: 'Vendor Resource Turnover',
        description: 'High turnover rate in vendor development team',
        impact: 'High',
        probability: 'Medium',
        status: 'Open',
        owner: 'Vendor Manager',
        dueDate: '2025-02-15',
        vendor: 'TechCorp Solutions'
      },
      {
        id: 'VR002',
        title: 'Vendor Delivery Delays',
        description: 'Potential delays in vendor deliverables',
        impact: 'Medium',
        probability: 'High',
        status: 'Mitigated',
        owner: 'Program Manager',
        dueDate: '2025-03-01',
        vendor: 'DataFlow Inc'
      }
    ],
    issues: [
      {
        id: 'VI001',
        title: 'Quality Standards Non-Compliance',
        description: 'Vendor deliverables not meeting quality standards',
        severity: 'High',
        status: 'Open',
        owner: 'Quality Manager',
        dueDate: '2025-02-20',
        vendor: 'TechCorp Solutions'
      },
      {
        id: 'VI002',
        title: 'Communication Breakdown',
        description: 'Poor communication affecting project progress',
        severity: 'Medium',
        status: 'In Progress',
        owner: 'Vendor Manager',
        dueDate: '2025-02-10',
        vendor: 'DataFlow Inc'
      }
    ],
    dependencies: [
      {
        id: 'VD001',
        title: 'Vendor Infrastructure Access',
        description: 'Access to vendor development environments',
        type: 'External',
        status: 'On Track',
        owner: 'Infrastructure Team',
        dueDate: '2025-02-28',
        vendor: 'TechCorp Solutions'
      },
      {
        id: 'VD002',
        title: 'Vendor License Approval',
        description: 'Approval for vendor software licenses',
        type: 'External',
        status: 'At Risk',
        owner: 'Procurement Team',
        dueDate: '2025-03-15',
        vendor: 'DataFlow Inc'
      }
    ]
  };

  return `
    <section class="space-y-6">
      <header>
        <h2 class="text-3xl font-semibold text-base-content mb-2">Vendor RAID Management</h2>
        <p class="text-base-content/70">Vendor-specific risks, issues, and dependencies for external partner management.</p>
      </header>

      <!-- Vendor Performance Summary -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="stat bg-base-100 shadow-lg rounded-lg">
          <div class="stat-figure text-warning">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
          </div>
          <div class="stat-title">Vendor Risks</div>
          <div class="stat-value text-warning">${vendorRAIDData.summary.totalRisks}</div>
          <div class="stat-desc">${vendorRAIDData.summary.criticalItems} critical</div>
        </div>

        <div class="stat bg-base-100 shadow-lg rounded-lg">
          <div class="stat-figure text-error">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="stat-title">Active Issues</div>
          <div class="stat-value text-error">${vendorRAIDData.summary.totalIssues}</div>
          <div class="stat-desc">Vendor-related</div>
        </div>

        <div class="stat bg-base-100 shadow-lg rounded-lg">
          <div class="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
            </svg>
          </div>
          <div class="stat-title">Dependencies</div>
          <div class="stat-value text-primary">${vendorRAIDData.summary.totalDependencies}</div>
          <div class="stat-desc">Vendor dependencies</div>
        </div>

        <div class="stat bg-base-100 shadow-lg rounded-lg">
          <div class="stat-figure text-success">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="stat-title">Performance</div>
          <div class="stat-value text-success">${vendorRAIDData.summary.vendorPerformance}</div>
          <div class="stat-desc">Overall rating</div>
        </div>
      </div>

      <!-- Vendor Performance Matrix -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-xl mb-4">Vendor Performance Matrix</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="card bg-warning/10 border border-warning/20">
              <div class="card-body">
                <h4 class="card-title text-lg">TechCorp Solutions</h4>
                <div class="space-y-2">
                  <div class="flex justify-between">
                    <span>Delivery Reliability:</span>
                    <span class="badge badge-warning">75%</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Quality Score:</span>
                    <span class="badge badge-error">60%</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Communication:</span>
                    <span class="badge badge-warning">70%</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Active Issues:</span>
                    <span class="text-error font-bold">3</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="card bg-success/10 border border-success/20">
              <div class="card-body">
                <h4 class="card-title text-lg">DataFlow Inc</h4>
                <div class="space-y-2">
                  <div class="flex justify-between">
                    <span>Delivery Reliability:</span>
                    <span class="badge badge-success">95%</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Quality Score:</span>
                    <span class="badge badge-success">90%</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Communication:</span>
                    <span class="badge badge-success">85%</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Active Issues:</span>
                    <span class="text-success font-bold">1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Vendor-Specific RAID Items -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-xl mb-4">Vendor-Specific RAID Items</h3>
          <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Item</th>
                  <th>Vendor</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Owner</th>
                  <th>Due Date</th>
                </tr>
              </thead>
              <tbody>
                ${[...vendorRAIDData.risks, ...vendorRAIDData.issues, ...vendorRAIDData.dependencies].map(item => `
                  <tr>
                    <td><span class="badge badge-outline">${item.id}</span></td>
                    <td>
                      <div>
                        <div class="font-semibold">${item.title}</div>
                        <div class="text-sm text-base-content/70">${item.description}</div>
                      </div>
                    </td>
                    <td>
                      <span class="badge badge-info">${item.vendor}</span>
                    </td>
                    <td>
                      <span class="badge ${item.id.startsWith('VR') ? 'badge-warning' : item.id.startsWith('VI') ? 'badge-error' : 'badge-primary'}">
                        ${item.id.startsWith('VR') ? 'Risk' : item.id.startsWith('VI') ? 'Issue' : 'Dependency'}
                      </span>
                    </td>
                    <td>
                      <span class="badge ${item.status === 'Open' ? 'badge-error' : item.status === 'In Progress' ? 'badge-warning' : item.status === 'On Track' ? 'badge-success' : 'badge-info'}">
                        ${item.status}
                      </span>
                    </td>
                    <td>${item.owner}</td>
                    <td>${item.dueDate}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Stream Level RAID Dashboard
function createStreamRAID() {
  const streamRAIDData = {
    summary: {
      totalRisks: 10,
      totalIssues: 6,
      totalDependencies: 12,
      streamSpecific: true,
      criticalItems: 4
    },
    risks: [
      {
        id: 'SR001',
        title: 'Technical Architecture Complexity',
        description: 'Integration complexity between stream components',
        impact: 'High',
        probability: 'Medium',
        status: 'Open',
        owner: 'Stream Lead',
        dueDate: '2025-03-01',
        stream: 'Core Streams'
      },
      {
        id: 'SR002',
        title: 'Performance Requirements',
        description: 'Meeting performance SLAs for high-traffic scenarios',
        impact: 'Medium',
        probability: 'High',
        status: 'In Progress',
        owner: 'Performance Team',
        dueDate: '2025-02-28',
        stream: 'Feature Streams'
      }
    ],
    issues: [
      {
        id: 'SI001',
        title: 'API Rate Limiting',
        description: 'API rate limits causing integration failures',
        severity: 'High',
        status: 'Open',
        owner: 'Integration Team',
        dueDate: '2025-02-15',
        stream: 'Core Streams'
      },
      {
        id: 'SI002',
        title: 'Data Synchronization Delays',
        description: 'Real-time data sync issues between systems',
        severity: 'Medium',
        status: 'In Progress',
        owner: 'Data Team',
        dueDate: '2025-02-20',
        stream: 'Feature Streams'
      }
    ],
    dependencies: [
      {
        id: 'SD001',
        title: 'Infrastructure Scaling',
        description: 'Auto-scaling infrastructure for stream workloads',
        type: 'Internal',
        status: 'On Track',
        owner: 'Infrastructure Team',
        dueDate: '2025-03-15',
        stream: 'Core Streams'
      },
      {
        id: 'SD002',
        title: 'Third-party API Access',
        description: 'Access to external APIs for stream functionality',
        type: 'External',
        status: 'At Risk',
        owner: 'Integration Team',
        dueDate: '2025-02-28',
        stream: 'Feature Streams'
      }
    ]
  };

  return `
    <section class="space-y-6">
      <header>
        <h2 class="text-3xl font-semibold text-base-content mb-2">Stream RAID Management</h2>
        <p class="text-base-content/70">Stream-specific risks, issues, and dependencies for technical delivery streams.</p>
      </header>

      <!-- Stream Summary -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="stat bg-base-100 shadow-lg rounded-lg">
          <div class="stat-figure text-warning">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
          </div>
          <div class="stat-title">Stream Risks</div>
          <div class="stat-value text-warning">${streamRAIDData.summary.totalRisks}</div>
          <div class="stat-desc">${streamRAIDData.summary.criticalItems} critical</div>
        </div>

        <div class="stat bg-base-100 shadow-lg rounded-lg">
          <div class="stat-figure text-error">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="stat-title">Active Issues</div>
          <div class="stat-value text-error">${streamRAIDData.summary.totalIssues}</div>
          <div class="stat-desc">Stream-specific</div>
        </div>

        <div class="stat bg-base-100 shadow-lg rounded-lg">
          <div class="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
            </svg>
          </div>
          <div class="stat-title">Dependencies</div>
          <div class="stat-value text-primary">${streamRAIDData.summary.totalDependencies}</div>
          <div class="stat-desc">Technical dependencies</div>
        </div>

        <div class="stat bg-base-100 shadow-lg rounded-lg">
          <div class="stat-figure text-info">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="stat-title">Stream Health</div>
          <div class="stat-value text-info">Good</div>
          <div class="stat-desc">Overall status</div>
        </div>
      </div>

      <!-- Stream Risk Matrix -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-xl mb-4">Stream Risk Matrix</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="card bg-error/10 border border-error/20">
              <div class="card-body p-4">
                <h4 class="card-title text-sm">Core Streams</h4>
                <div class="text-2xl font-bold text-error">4</div>
                <div class="text-xs">High Risk</div>
              </div>
            </div>
            <div class="card bg-warning/10 border border-warning/20">
              <div class="card-body p-4">
                <h4 class="card-title text-sm">Feature Streams</h4>
                <div class="text-2xl font-bold text-warning">3</div>
                <div class="text-xs">Medium Risk</div>
              </div>
            </div>
            <div class="card bg-info/10 border border-info/20">
              <div class="card-body p-4">
                <h4 class="card-title text-sm">Specialized</h4>
                <div class="text-2xl font-bold text-info">2</div>
                <div class="text-xs">Low Risk</div>
              </div>
            </div>
            <div class="card bg-success/10 border border-success/20">
              <div class="card-body p-4">
                <h4 class="card-title text-sm">Enabler</h4>
                <div class="text-2xl font-bold text-success">1</div>
                <div class="text-xs">Minimal Risk</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stream-Specific RAID Items -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-xl mb-4">Stream-Specific RAID Items</h3>
          <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Item</th>
                  <th>Stream</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Owner</th>
                  <th>Due Date</th>
                </tr>
              </thead>
              <tbody>
                ${[...streamRAIDData.risks, ...streamRAIDData.issues, ...streamRAIDData.dependencies].map(item => `
                  <tr>
                    <td><span class="badge badge-outline">${item.id}</span></td>
                    <td>
                      <div>
                        <div class="font-semibold">${item.title}</div>
                        <div class="text-sm text-base-content/70">${item.description}</div>
                      </div>
                    </td>
                    <td>
                      <span class="badge badge-info">${item.stream}</span>
                    </td>
                    <td>
                      <span class="badge ${item.id.startsWith('SR') ? 'badge-warning' : item.id.startsWith('SI') ? 'badge-error' : 'badge-primary'}">
                        ${item.id.startsWith('SR') ? 'Risk' : item.id.startsWith('SI') ? 'Issue' : 'Dependency'}
                      </span>
                    </td>
                    <td>
                      <span class="badge ${item.status === 'Open' ? 'badge-error' : item.status === 'In Progress' ? 'badge-warning' : item.status === 'On Track' ? 'badge-success' : 'badge-info'}">
                        ${item.status}
                      </span>
                    </td>
                    <td>${item.owner}</td>
                    <td>${item.dueDate}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Main RAID function that routes to appropriate level
function createRAIDManagement(layer = 'program') {
  switch(layer) {
    case 'stream':
      return createStreamRAID();
    case 'country':
      return createCountryRAID();
    case 'vendor':
      return createVendorRAID();
    default:
      return createProgramRAID();
  }
}

// Export for use in main HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createRAIDManagement };
}
