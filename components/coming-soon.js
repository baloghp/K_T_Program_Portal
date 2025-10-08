// Coming Soon Placeholder Component
function createComingSoon(sectionName, description, icon = null) {
  const icons = {
    roadmaps: `<svg class="w-16 h-16 mx-auto mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>`,
    quarterly: `<svg class="w-16 h-16 mx-auto mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
    </svg>`,
    meetings: `<svg class="w-16 h-16 mx-auto mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
    </svg>`,
    raid: `<svg class="w-16 h-16 mx-auto mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
    </svg>`,
    vendors: `<svg class="w-16 h-16 mx-auto mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
    </svg>`
  };

  const selectedIcon = icon || icons[sectionName] || `<svg class="w-16 h-16 mx-auto mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>`;

  return `
    <section class="flex flex-col items-center justify-center min-h-[400px] text-center">
      <div class="max-w-md mx-auto">
        ${selectedIcon}
        
        <h2 class="text-3xl font-semibold text-base-content mb-2">${sectionName}</h2>
        <p class="text-base-content/70 mb-6">${description}</p>
        
        <div class="bg-base-200 rounded-lg p-6 mb-6">
          <div class="flex items-center justify-center mb-4">
            <div class="loading loading-spinner loading-md text-primary"></div>
          </div>
          <p class="text-sm text-base-content/60">Coming Soon</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div class="card bg-base-100 shadow-sm">
            <div class="card-body p-4">
              <h4 class="font-semibold text-base-content mb-2">Features in Development</h4>
              <ul class="text-base-content/70 space-y-1">
                <li>• Interactive dashboards</li>
                <li>• Real-time data updates</li>
                <li>• Advanced filtering</li>
                <li>• Export capabilities</li>
              </ul>
            </div>
          </div>
          
          <div class="card bg-base-100 shadow-sm">
            <div class="card-body p-4">
              <h4 class="font-semibold text-base-content mb-2">Expected Timeline</h4>
              <ul class="text-base-content/70 space-y-1">
                <li>• Phase 1: Q1 2025</li>
                <li>• Phase 2: Q2 2025</li>
                <li>• Full Release: Q3 2025</li>
                <li>• Advanced Features: Q4 2025</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="mt-6">
          <button class="btn btn-outline btn-sm" onclick="navigateTo('kpis')">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
            View KPIs Instead
          </button>
        </div>
      </div>
    </section>
  `;
}

// Specific coming soon components for each section
function createRoadmapsComingSoon() {
  return createComingSoon(
    'Roadmaps',
    'Interactive project timelines, Gantt charts, and milestone tracking will be available here.',
    `<svg class="w-16 h-16 mx-auto mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>`
  );
}

function createQuarterlyComingSoon() {
  return createComingSoon(
    'Quarterly Planning',
    'Business Review Process (BRP) and Quarterly Business Review (QBR) tools will be available here.',
    `<svg class="w-16 h-16 mx-auto mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
    </svg>`
  );
}

function createMeetingsComingSoon() {
  return createComingSoon(
    'Meetings & Notes',
    'Meeting management, agenda templates, and collaborative note-taking will be available here.',
    `<svg class="w-16 h-16 mx-auto mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
    </svg>`
  );
}

function createRAIDComingSoon() {
  return createComingSoon(
    'RAID Management',
    'Risks, Assumptions, Issues, and Dependencies tracking will be available here.',
    `<svg class="w-16 h-16 mx-auto mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
    </svg>`
  );
}

function createVendorsComingSoon() {
  return createComingSoon(
    'Vendor Management',
    'Vendor performance tracking, SLA monitoring, and stakeholder management will be available here.',
    `<svg class="w-16 h-16 mx-auto mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
    </svg>`
  );
}

// Export for use in main HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    createComingSoon, 
    createRoadmapsComingSoon, 
    createQuarterlyComingSoon, 
    createMeetingsComingSoon, 
    createRAIDComingSoon, 
    createVendorsComingSoon 
  };
}
