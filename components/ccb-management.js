// Change Control Board (CCB) Management Component
// Comprehensive change management for all organizational levels

// Program Level CCB Dashboard
function createProgramCCB() {
  const programCCBData = {
    summary: {
      totalChanges: 24,
      pendingChanges: 8,
      approvedChanges: 12,
      rejectedChanges: 4,
      criticalChanges: 3,
      overdueChanges: 2
    },
    changeRequests: [
      {
        id: 'CCB-001',
        title: 'Enhanced Security Protocol Implementation',
        description: 'Implement additional encryption layers for data transmission across all systems',
        requestedBy: 'Security Team',
        submissionDate: '2025-01-10',
        impactAssessment: 'High',
        priority: 'Critical',
        status: 'Approved',
        decisionDate: '2025-01-15',
        approvedBy: 'Program Director',
        estimatedCost: '€45,000',
        estimatedTimeline: '6 weeks',
        comments: 'Approved with additional budget allocation. Implementation to begin Q2 2025.',
        affectedAreas: ['Core Platform', 'Data Migration', 'API Gateway']
      },
      {
        id: 'CCB-002',
        title: 'CRM Integration Scope Expansion',
        description: 'Extend CRM integration to include additional customer touchpoints and analytics',
        requestedBy: 'Business Team',
        submissionDate: '2025-01-12',
        impactAssessment: 'Medium',
        priority: 'High',
        status: 'Pending',
        decisionDate: null,
        approvedBy: null,
        estimatedCost: '€28,000',
        estimatedTimeline: '4 weeks',
        comments: 'Under review by technical team for feasibility assessment.',
        affectedAreas: ['Sales/CRM Stream', 'Analytics Platform']
      },
      {
        id: 'CCB-003',
        title: 'Legacy System Decommissioning Timeline',
        description: 'Accelerate legacy system decommissioning by 3 months',
        requestedBy: 'Operations Team',
        submissionDate: '2025-01-08',
        impactAssessment: 'High',
        priority: 'Medium',
        status: 'Rejected',
        decisionDate: '2025-01-14',
        approvedBy: 'Program Director',
        estimatedCost: '€15,000',
        estimatedTimeline: '3 months',
        comments: 'Rejected due to insufficient testing time and potential data migration risks.',
        affectedAreas: ['Legacy Transition', 'Data Migration']
      },
      {
        id: 'CCB-004',
        title: 'Multi-Language Support Implementation',
        description: 'Add support for German, French, and Japanese languages in the platform',
        requestedBy: 'Country Teams',
        submissionDate: '2025-01-14',
        impactAssessment: 'Medium',
        priority: 'High',
        status: 'Approved',
        decisionDate: '2025-01-16',
        approvedBy: 'Program Director',
        estimatedCost: '€35,000',
        estimatedTimeline: '8 weeks',
        comments: 'Approved with phased rollout approach. Priority given to German market.',
        affectedAreas: ['UI/UX', 'Localization', 'Content Management']
      }
    ],
    ccbMembers: [
      { name: 'Program Director', role: 'Chair', department: 'Program Management' },
      { name: 'Technical Lead', role: 'Technical Reviewer', department: 'Engineering' },
      { name: 'Business Analyst', role: 'Business Impact Assessor', department: 'Business' },
      { name: 'Quality Manager', role: 'Quality Reviewer', department: 'Quality Assurance' },
      { name: 'Finance Director', role: 'Financial Reviewer', department: 'Finance' }
    ]
  };

  return `
    <section class="space-y-6">
      <header>
        <h2 class="text-3xl font-semibold text-base-content mb-2">Program Change Control Board</h2>
        <p class="text-base-content/70">Comprehensive change management and decision tracking across all program components.</p>
      </header>

      <!-- CCB Summary Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="stat bg-base-100 shadow-lg rounded-lg">
          <div class="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <div class="stat-title">Total Changes</div>
          <div class="stat-value text-primary">${programCCBData.summary.totalChanges}</div>
          <div class="stat-desc">${programCCBData.summary.criticalChanges} critical</div>
        </div>

        <div class="stat bg-base-100 shadow-lg rounded-lg">
          <div class="stat-figure text-warning">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="stat-title">Pending Review</div>
          <div class="stat-value text-warning">${programCCBData.summary.pendingChanges}</div>
          <div class="stat-desc">${programCCBData.summary.overdueChanges} overdue</div>
        </div>

        <div class="stat bg-base-100 shadow-lg rounded-lg">
          <div class="stat-figure text-success">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="stat-title">Approved</div>
          <div class="stat-value text-success">${programCCBData.summary.approvedChanges}</div>
          <div class="stat-desc">Ready for implementation</div>
        </div>

        <div class="stat bg-base-100 shadow-lg rounded-lg">
          <div class="stat-figure text-error">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="stat-title">Rejected</div>
          <div class="stat-value text-error">${programCCBData.summary.rejectedChanges}</div>
          <div class="stat-desc">Not approved</div>
        </div>
      </div>

      <!-- CCB Members -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-xl mb-4">CCB Members</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${programCCBData.ccbMembers.map(member => `
              <div class="card bg-base-200 shadow-sm">
                <div class="card-body p-4">
                  <h4 class="card-title text-sm">${member.name}</h4>
                  <p class="text-xs text-base-content/70">${member.role}</p>
                  <p class="text-xs text-primary">${member.department}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Change Requests Log -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-xl mb-4">Change Requests Log</h3>
          <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Requested By</th>
                  <th>Impact</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Decision Date</th>
                  <th>Cost</th>
                  <th>Timeline</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${programCCBData.changeRequests.map(change => `
                  <tr>
                    <td><span class="badge badge-outline">${change.id}</span></td>
                    <td>
                      <div>
                        <div class="font-semibold">${change.title}</div>
                        <div class="text-sm text-base-content/70">${change.description}</div>
                        <div class="text-xs text-info mt-1">
                          Affects: ${change.affectedAreas.join(', ')}
                        </div>
                      </div>
                    </td>
                    <td>${change.requestedBy}</td>
                    <td>
                      <span class="badge ${change.impactAssessment === 'High' ? 'badge-error' : change.impactAssessment === 'Medium' ? 'badge-warning' : 'badge-info'}">
                        ${change.impactAssessment}
                      </span>
                    </td>
                    <td>
                      <span class="badge ${change.priority === 'Critical' ? 'badge-error' : change.priority === 'High' ? 'badge-warning' : 'badge-info'}">
                        ${change.priority}
                      </span>
                    </td>
                    <td>
                      <span class="badge ${change.status === 'Approved' ? 'badge-success' : change.status === 'Rejected' ? 'badge-error' : 'badge-warning'}">
                        ${change.status}
                      </span>
                    </td>
                    <td>${change.decisionDate || 'Pending'}</td>
                    <td>${change.estimatedCost}</td>
                    <td>${change.estimatedTimeline}</td>
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

      <!-- Change Impact Analysis -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-xl mb-4">Change Impact Analysis</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="stat bg-warning/10 rounded-lg p-4">
              <div class="stat-title">Scope Impact</div>
              <div class="stat-value text-warning">+15%</div>
              <div class="stat-desc">Increase in project scope</div>
            </div>
            <div class="stat bg-error/10 rounded-lg p-4">
              <div class="stat-title">Budget Impact</div>
              <div class="stat-value text-error">+€123,000</div>
              <div class="stat-desc">Additional budget required</div>
            </div>
            <div class="stat bg-info/10 rounded-lg p-4">
              <div class="stat-title">Timeline Impact</div>
              <div class="stat-value text-info">+8 weeks</div>
              <div class="stat-desc">Extension to project timeline</div>
            </div>
            <div class="stat bg-success/10 rounded-lg p-4">
              <div class="stat-title">Risk Mitigation</div>
              <div class="stat-value text-success">-3</div>
              <div class="stat-desc">Risks mitigated through changes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Stream Level CCB Dashboard
function createStreamCCB() {
  const streamCCBData = {
    summary: {
      totalChanges: 18,
      pendingChanges: 5,
      approvedChanges: 10,
      rejectedChanges: 3,
      technicalChanges: 12,
      processChanges: 6
    },
    changeRequests: [
      {
        id: 'SCCB-001',
        title: 'API Rate Limiting Adjustment',
        description: 'Increase API rate limits to support higher transaction volumes',
        requestedBy: 'Core Stream Team',
        submissionDate: '2025-01-11',
        impactAssessment: 'Medium',
        priority: 'High',
        status: 'Approved',
        decisionDate: '2025-01-16',
        approvedBy: 'Stream Lead',
        estimatedCost: '€8,000',
        estimatedTimeline: '2 weeks',
        comments: 'Approved with performance monitoring requirements.',
        affectedAreas: ['API Gateway', 'Core Platform'],
        stream: 'Core Streams'
      },
      {
        id: 'SCCB-002',
        title: 'Development Environment Upgrade',
        description: 'Upgrade development tools and libraries to latest versions',
        requestedBy: 'Development Team',
        submissionDate: '2025-01-13',
        impactAssessment: 'Low',
        priority: 'Medium',
        status: 'Pending',
        decisionDate: null,
        approvedBy: null,
        estimatedCost: '€5,000',
        estimatedTimeline: '1 week',
        comments: 'Under technical review for compatibility assessment.',
        affectedAreas: ['Development Environment', 'CI/CD Pipeline'],
        stream: 'Feature Streams'
      }
    ]
  };

  return `
    <section class="space-y-6">
      <header>
        <h2 class="text-3xl font-semibold text-base-content mb-2">Stream Change Control Board</h2>
        <p class="text-base-content/70">Technical change management and decision tracking for development streams.</p>
      </header>

      <!-- Stream CCB Summary -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="stat bg-base-100 shadow-lg rounded-lg">
          <div class="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <div class="stat-title">Stream Changes</div>
          <div class="stat-value text-primary">${streamCCBData.summary.totalChanges}</div>
          <div class="stat-desc">${streamCCBData.summary.technicalChanges} technical</div>
        </div>

        <div class="stat bg-base-100 shadow-lg rounded-lg">
          <div class="stat-figure text-warning">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="stat-title">Pending Review</div>
          <div class="stat-value text-warning">${streamCCBData.summary.pendingChanges}</div>
          <div class="stat-desc">Technical assessment</div>
        </div>

        <div class="stat bg-base-100 shadow-lg rounded-lg">
          <div class="stat-figure text-success">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="stat-title">Approved</div>
          <div class="stat-value text-success">${streamCCBData.summary.approvedChanges}</div>
          <div class="stat-desc">Ready for implementation</div>
        </div>
      </div>

      <!-- Stream Change Requests -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-xl mb-4">Stream Change Requests</h3>
          <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Stream</th>
                  <th>Impact</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Cost</th>
                  <th>Timeline</th>
                </tr>
              </thead>
              <tbody>
                ${streamCCBData.changeRequests.map(change => `
                  <tr>
                    <td><span class="badge badge-outline">${change.id}</span></td>
                    <td>
                      <div>
                        <div class="font-semibold">${change.title}</div>
                        <div class="text-sm text-base-content/70">${change.description}</div>
                        <div class="text-xs text-info mt-1">
                          Affects: ${change.affectedAreas.join(', ')}
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="badge badge-info">${change.stream}</span>
                    </td>
                    <td>
                      <span class="badge ${change.impactAssessment === 'High' ? 'badge-error' : change.impactAssessment === 'Medium' ? 'badge-warning' : 'badge-info'}">
                        ${change.impactAssessment}
                      </span>
                    </td>
                    <td>
                      <span class="badge ${change.priority === 'Critical' ? 'badge-error' : change.priority === 'High' ? 'badge-warning' : 'badge-info'}">
                        ${change.priority}
                      </span>
                    </td>
                    <td>
                      <span class="badge ${change.status === 'Approved' ? 'badge-success' : change.status === 'Rejected' ? 'badge-error' : 'badge-warning'}">
                        ${change.status}
                      </span>
                    </td>
                    <td>${change.estimatedCost}</td>
                    <td>${change.estimatedTimeline}</td>
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

// Country Level CCB Dashboard
function createCountryCCB() {
  const countryCCBData = {
    summary: {
      totalChanges: 12,
      pendingChanges: 4,
      approvedChanges: 6,
      rejectedChanges: 2,
      localizationChanges: 8,
      regulatoryChanges: 4
    },
    changeRequests: [
      {
        id: 'CCCB-001',
        title: 'Local Payment Gateway Integration',
        description: 'Integrate with local payment systems for German market',
        requestedBy: 'Germany Team',
        submissionDate: '2025-01-09',
        impactAssessment: 'High',
        priority: 'Critical',
        status: 'Approved',
        decisionDate: '2025-01-14',
        approvedBy: 'Country Manager',
        estimatedCost: '€25,000',
        estimatedTimeline: '6 weeks',
        comments: 'Approved with priority for German market launch.',
        affectedAreas: ['Payment Processing', 'Localization'],
        country: 'Germany'
      },
      {
        id: 'CCCB-002',
        title: 'Data Privacy Compliance Update',
        description: 'Update data handling procedures to comply with local privacy laws',
        requestedBy: 'Compliance Team',
        submissionDate: '2025-01-15',
        impactAssessment: 'Medium',
        priority: 'High',
        status: 'Pending',
        decisionDate: null,
        approvedBy: null,
        estimatedCost: '€15,000',
        estimatedTimeline: '4 weeks',
        comments: 'Under legal review for compliance requirements.',
        affectedAreas: ['Data Processing', 'Privacy Controls'],
        country: 'France'
      }
    ]
  };

  return `
    <section class="space-y-6">
      <header>
        <h2 class="text-3xl font-semibold text-base-content mb-2">Country Change Control Board</h2>
        <p class="text-base-content/70">Country-specific change management for regional rollouts and localizations.</p>
      </header>

      <!-- Country CCB Summary -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="stat bg-base-100 shadow-lg rounded-lg">
          <div class="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <div class="stat-title">Country Changes</div>
          <div class="stat-value text-primary">${countryCCBData.summary.totalChanges}</div>
          <div class="stat-desc">${countryCCBData.summary.localizationChanges} localization</div>
        </div>

        <div class="stat bg-base-100 shadow-lg rounded-lg">
          <div class="stat-figure text-warning">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="stat-title">Pending Review</div>
          <div class="stat-value text-warning">${countryCCBData.summary.pendingChanges}</div>
          <div class="stat-desc">Country-specific assessment</div>
        </div>

        <div class="stat bg-base-100 shadow-lg rounded-lg">
          <div class="stat-figure text-success">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="stat-title">Approved</div>
          <div class="stat-value text-success">${countryCCBData.summary.approvedChanges}</div>
          <div class="stat-desc">Ready for implementation</div>
        </div>
      </div>

      <!-- Country Change Requests -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-xl mb-4">Country Change Requests</h3>
          <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Country</th>
                  <th>Impact</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Cost</th>
                  <th>Timeline</th>
                </tr>
              </thead>
              <tbody>
                ${countryCCBData.changeRequests.map(change => `
                  <tr>
                    <td><span class="badge badge-outline">${change.id}</span></td>
                    <td>
                      <div>
                        <div class="font-semibold">${change.title}</div>
                        <div class="text-sm text-base-content/70">${change.description}</div>
                        <div class="text-xs text-info mt-1">
                          Affects: ${change.affectedAreas.join(', ')}
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="badge badge-info">${change.country}</span>
                    </td>
                    <td>
                      <span class="badge ${change.impactAssessment === 'High' ? 'badge-error' : change.impactAssessment === 'Medium' ? 'badge-warning' : 'badge-info'}">
                        ${change.impactAssessment}
                      </span>
                    </td>
                    <td>
                      <span class="badge ${change.priority === 'Critical' ? 'badge-error' : change.priority === 'High' ? 'badge-warning' : 'badge-info'}">
                        ${change.priority}
                      </span>
                    </td>
                    <td>
                      <span class="badge ${change.status === 'Approved' ? 'badge-success' : change.status === 'Rejected' ? 'badge-error' : 'badge-warning'}">
                        ${change.status}
                      </span>
                    </td>
                    <td>${change.estimatedCost}</td>
                    <td>${change.estimatedTimeline}</td>
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

// Vendor Level CCB Dashboard
function createVendorCCB() {
  const vendorCCBData = {
    summary: {
      totalChanges: 8,
      pendingChanges: 3,
      approvedChanges: 4,
      rejectedChanges: 1,
      contractChanges: 5,
      scopeChanges: 3
    },
    changeRequests: [
      {
        id: 'VCCB-001',
        title: 'Vendor Contract Extension',
        description: 'Extend vendor contract by 6 months for additional support',
        requestedBy: 'Vendor Manager',
        submissionDate: '2025-01-07',
        impactAssessment: 'Medium',
        priority: 'High',
        status: 'Approved',
        decisionDate: '2025-01-12',
        approvedBy: 'Procurement Director',
        estimatedCost: '€120,000',
        estimatedTimeline: 'Immediate',
        comments: 'Approved with updated SLA requirements.',
        affectedAreas: ['Vendor Management', 'Support Services'],
        vendor: 'TechCorp Solutions'
      },
      {
        id: 'VCCB-002',
        title: 'Vendor Scope Expansion',
        description: 'Expand vendor scope to include additional development tasks',
        requestedBy: 'Project Manager',
        submissionDate: '2025-01-13',
        impactAssessment: 'High',
        priority: 'Medium',
        status: 'Pending',
        decisionDate: null,
        approvedBy: null,
        estimatedCost: '€75,000',
        estimatedTimeline: '2 weeks',
        comments: 'Under procurement review for budget approval.',
        affectedAreas: ['Development Services', 'Project Scope'],
        vendor: 'DataFlow Inc'
      }
    ]
  };

  return `
    <section class="space-y-6">
      <header>
        <h2 class="text-3xl font-semibold text-base-content mb-2">Vendor Change Control Board</h2>
        <p class="text-base-content/70">Vendor-specific change management for external partner relationships and contracts.</p>
      </header>

      <!-- Vendor CCB Summary -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="stat bg-base-100 shadow-lg rounded-lg">
          <div class="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <div class="stat-title">Vendor Changes</div>
          <div class="stat-value text-primary">${vendorCCBData.summary.totalChanges}</div>
          <div class="stat-desc">${vendorCCBData.summary.contractChanges} contract</div>
        </div>

        <div class="stat bg-base-100 shadow-lg rounded-lg">
          <div class="stat-figure text-warning">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="stat-title">Pending Review</div>
          <div class="stat-value text-warning">${vendorCCBData.summary.pendingChanges}</div>
          <div class="stat-desc">Procurement assessment</div>
        </div>

        <div class="stat bg-base-100 shadow-lg rounded-lg">
          <div class="stat-figure text-success">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="stat-title">Approved</div>
          <div class="stat-value text-success">${vendorCCBData.summary.approvedChanges}</div>
          <div class="stat-desc">Ready for implementation</div>
        </div>
      </div>

      <!-- Vendor Change Requests -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-xl mb-4">Vendor Change Requests</h3>
          <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Vendor</th>
                  <th>Impact</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Cost</th>
                  <th>Timeline</th>
                </tr>
              </thead>
              <tbody>
                ${vendorCCBData.changeRequests.map(change => `
                  <tr>
                    <td><span class="badge badge-outline">${change.id}</span></td>
                    <td>
                      <div>
                        <div class="font-semibold">${change.title}</div>
                        <div class="text-sm text-base-content/70">${change.description}</div>
                        <div class="text-xs text-info mt-1">
                          Affects: ${change.affectedAreas.join(', ')}
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="badge badge-info">${change.vendor}</span>
                    </td>
                    <td>
                      <span class="badge ${change.impactAssessment === 'High' ? 'badge-error' : change.impactAssessment === 'Medium' ? 'badge-warning' : 'badge-info'}">
                        ${change.impactAssessment}
                      </span>
                    </td>
                    <td>
                      <span class="badge ${change.priority === 'Critical' ? 'badge-error' : change.priority === 'High' ? 'badge-warning' : 'badge-info'}">
                        ${change.priority}
                      </span>
                    </td>
                    <td>
                      <span class="badge ${change.status === 'Approved' ? 'badge-success' : change.status === 'Rejected' ? 'badge-error' : 'badge-warning'}">
                        ${change.status}
                      </span>
                    </td>
                    <td>${change.estimatedCost}</td>
                    <td>${change.estimatedTimeline}</td>
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

// Main CCB function that routes to appropriate level
function createCCBManagement(layer = 'program') {
  switch(layer) {
    case 'stream':
      return createStreamCCB();
    case 'country':
      return createCountryCCB();
    case 'vendor':
      return createVendorCCB();
    default:
      return createProgramCCB();
  }
}

// Export for use in main HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createCCBManagement };
}
