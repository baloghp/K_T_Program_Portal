// Roadmaps Component
function createProgramRoadmap() {
  return `
    <section class="space-y-6">
      <header>
        <h2 class="text-3xl font-semibold text-base-content mb-2">Program Roadmap</h2>
        <p class="text-base-content/70">Strategic program phases and milestones</p>
      </header>
      
      <!-- Program Roadmap Timeline -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-xl mb-6">Program Phases Timeline</h3>
          
          <!-- Timeline Container -->
          <div class="relative">
            <!-- Timeline Line -->
            <div class="absolute left-8 top-0 bottom-0 w-1 bg-primary/20"></div>
            
            <!-- Phase 1: Foundations -->
            <div class="relative flex items-start mb-8">
              <div class="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-content font-bold text-lg z-10">
                1
              </div>
              <div class="ml-6 flex-1">
                <div class="bg-base-200 rounded-lg p-6">
                  <div class="flex items-center justify-between mb-3">
                    <h4 class="text-xl font-semibold text-primary">Foundations</h4>
                    <span class="badge badge-primary">Months 1-6</span>
                  </div>
                  <p class="text-base-content/80 mb-4">
                    Main goal is to establish the Program foundations including the program structure, governance, technical delivery and prove continuous delivery capability.
                  </p>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-2">
                      <h5 class="font-semibold text-base-content">Key Deliverables:</h5>
                      <ul class="text-sm text-base-content/70 space-y-1">
                        <li>• Program structure & governance</li>
                        <li>• Technical delivery framework</li>
                        <li>• Continuous delivery capability</li>
                        <li>• Core platform foundations</li>
                      </ul>
                    </div>
                    <div class="space-y-2">
                      <h5 class="font-semibold text-base-content">Success Criteria:</h5>
                      <ul class="text-sm text-base-content/70 space-y-1">
                        <li>• Governance model established</li>
                        <li>• CI/CD pipeline operational</li>
                        <li>• Core services deployed</li>
                        <li>• Team onboarding complete</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Phase 2: Country Pilots -->
            <div class="relative flex items-start mb-8">
              <div class="flex-shrink-0 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-secondary-content font-bold text-lg z-10">
                2
              </div>
              <div class="ml-6 flex-1">
                <div class="bg-base-200 rounded-lg p-6">
                  <div class="flex items-center justify-between mb-3">
                    <h4 class="text-xl font-semibold text-secondary">Country Pilots</h4>
                    <span class="badge badge-secondary">Months 7-12</span>
                  </div>
                  <p class="text-base-content/80 mb-4">
                    Try to roll out MVP features to selected pilot countries. Learn the rollout and the GTM pains and gain experience. Continue evolving the products from MVP by adding more features.
                  </p>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-2">
                      <h5 class="font-semibold text-base-content">Key Deliverables:</h5>
                      <ul class="text-sm text-base-content/70 space-y-1">
                        <li>• MVP features deployed</li>
                        <li>• Pilot country rollouts</li>
                        <li>• GTM process validation</li>
                        <li>• Feature evolution roadmap</li>
                      </ul>
                    </div>
                    <div class="space-y-2">
                      <h5 class="font-semibold text-base-content">Success Criteria:</h5>
                      <ul class="text-sm text-base-content/70 space-y-1">
                        <li>• 2-3 pilot countries live</li>
                        <li>• User adoption metrics</li>
                        <li>• GTM process documented</li>
                        <li>• Feedback loop established</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Phase 3: GTM Waves 1-N -->
            <div class="relative flex items-start mb-8">
              <div class="flex-shrink-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-accent-content font-bold text-lg z-10">
                3
              </div>
              <div class="ml-6 flex-1">
                <div class="bg-base-200 rounded-lg p-6">
                  <div class="flex items-center justify-between mb-3">
                    <h4 class="text-xl font-semibold text-accent">GTM Waves 1-N</h4>
                    <span class="badge badge-accent">Months 13-20</span>
                  </div>
                  <p class="text-base-content/80 mb-4">
                    Continue feature development and continuous value delivery for existing countries. Plan rolling wave GTM with established working base features to the rest of the countries.
                  </p>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-2">
                      <h5 class="font-semibold text-base-content">Key Deliverables:</h5>
                      <ul class="text-sm text-base-content/70 space-y-1">
                        <li>• Rolling wave deployments</li>
                        <li>• Feature development scaling</li>
                        <li>• Country-specific customizations</li>
                        <li>• Performance optimization</li>
                      </ul>
                    </div>
                    <div class="space-y-2">
                      <h5 class="font-semibold text-base-content">Success Criteria:</h5>
                      <ul class="text-sm text-base-content/70 space-y-1">
                        <li>• 70% of countries deployed</li>
                        <li>• Consistent delivery cadence</li>
                        <li>• Performance targets met</li>
                        <li>• User satisfaction maintained</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Phase 4: Global Stabilization -->
            <div class="relative flex items-start mb-8">
              <div class="flex-shrink-0 w-16 h-16 bg-warning rounded-full flex items-center justify-center text-warning-content font-bold text-lg z-10">
                4
              </div>
              <div class="ml-6 flex-1">
                <div class="bg-base-200 rounded-lg p-6">
                  <div class="flex items-center justify-between mb-3">
                    <h4 class="text-xl font-semibold text-warning">Global Stabilization</h4>
                    <span class="badge badge-warning">Months 18-22</span>
                  </div>
                  <p class="text-base-content/80 mb-4">
                    Finalize the product rollouts to all countries. Establish repeatable cadence of continuous delivery based on country product needs on the new platform. EOL, decommissioning or hibernating the legacy platforms completely.
                  </p>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-2">
                      <h5 class="font-semibold text-base-content">Key Deliverables:</h5>
                      <ul class="text-sm text-base-content/70 space-y-1">
                        <li>• 100% country coverage</li>
                        <li>• Legacy platform decommissioning</li>
                        <li>• Continuous delivery cadence</li>
                        <li>• Platform stabilization</li>
                      </ul>
                    </div>
                    <div class="space-y-2">
                      <h5 class="font-semibold text-base-content">Success Criteria:</h5>
                      <ul class="text-sm text-base-content/70 space-y-1">
                        <li>• All countries live</li>
                        <li>• Legacy systems retired</li>
                        <li>• Stable operations</li>
                        <li>• Cost optimization achieved</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Phase 5: Optimization -->
            <div class="relative flex items-start">
              <div class="flex-shrink-0 w-16 h-16 bg-success rounded-full flex items-center justify-center text-success-content font-bold text-lg z-10">
                5
              </div>
              <div class="ml-6 flex-1">
                <div class="bg-base-200 rounded-lg p-6">
                  <div class="flex items-center justify-between mb-3">
                    <h4 class="text-xl font-semibold text-success">Optimization</h4>
                    <span class="badge badge-success">Months 21-24</span>
                  </div>
                  <p class="text-base-content/80 mb-4">
                    Finalize the platform development, finalize the change management. Release program resources or plan for enhancements.
                  </p>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-2">
                      <h5 class="font-semibold text-base-content">Key Deliverables:</h5>
                      <ul class="text-sm text-base-content/70 space-y-1">
                        <li>• Platform optimization</li>
                        <li>• Change management completion</li>
                        <li>• Resource transition planning</li>
                        <li>• Enhancement roadmap</li>
                      </ul>
                    </div>
                    <div class="space-y-2">
                      <h5 class="font-semibold text-base-content">Success Criteria:</h5>
                      <ul class="text-sm text-base-content/70 space-y-1">
                        <li>• Platform fully optimized</li>
                        <li>• Change management complete</li>
                        <li>• Resources transitioned</li>
                        <li>• Future roadmap defined</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Current Status Overview -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 class="card-title text-lg">Current Phase</h3>
            <div class="stat">
              <div class="stat-value text-primary">Foundations</div>
              <div class="stat-desc">Month 3 of 6</div>
            </div>
            <div class="mt-4">
              <div class="w-full bg-base-200 rounded-full h-2">
                <div class="bg-primary h-2 rounded-full" style="width: 50%"></div>
              </div>
              <div class="text-sm text-base-content/70 mt-2">50% Complete</div>
            </div>
          </div>
        </div>
        
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 class="card-title text-lg">Next Milestone</h3>
            <div class="stat">
              <div class="stat-value text-secondary">CI/CD Pipeline</div>
              <div class="stat-desc">Due in 2 weeks</div>
            </div>
            <div class="mt-4">
              <div class="badge badge-outline">High Priority</div>
            </div>
          </div>
        </div>
        
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 class="card-title text-lg">Program Health</h3>
            <div class="stat">
              <div class="stat-value text-success">On Track</div>
              <div class="stat-desc">All milestones met</div>
            </div>
            <div class="mt-4">
              <div class="flex space-x-2">
                <div class="badge badge-success">Schedule</div>
                <div class="badge badge-success">Budget</div>
                <div class="badge badge-warning">Scope</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Layer-specific Roadmaps with Mermaid
function createLayerRoadmap(layer) {
  const layerConfig = {
    'stream': {
      title: 'Stream Development Roadmap',
      description: 'Timeline for stream development and feature delivery',
      mermaidFile: 'components/roadmap-stream.mmd'
    },
    'country': {
      title: 'Country Rollout Roadmap', 
      description: 'Country-by-country deployment timeline',
      mermaidFile: 'components/roadmap-country.mmd'
    },
    'vendor': {
      title: 'Vendor Engagement Roadmap',
      description: 'Vendor onboarding and delivery timeline',
      mermaidFile: 'components/roadmap-vendor.mmd'
    }
  };

  const config = layerConfig[layer] || layerConfig['stream'];
  
  // Keep a data attribute so the mounting function knows which file to load
  return `
    <section class="space-y-6" data-mermaid-source="${config.mermaidFile}">
      <header>
        <h2 class="text-3xl font-semibold text-base-content mb-2">${config.title}</h2>
        <p class="text-base-content/70">${config.description}</p>
      </header>
      
      <!-- Mermaid Diagram Container -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-xl mb-4">Timeline</h3>
          <div id="mermaid-diagram" class="w-full overflow-x-auto">
            <!-- The mermaid source goes into this <pre> element -->
            <pre id="mermaid-source" class="mermaid"></pre>
          </div>
        </div>
      </div>
      
     
    </section>
  `;
}

// Mounting function that must be called after the HTML is inserted into the DOM
async function mountLayerRoadmap(layer) {
  try {
    // Determine file path from layer
    const layerToFile = {
      'stream': 'components/roadmap-stream.mmd',
      'country': 'components/roadmap-country.mmd',
      'vendor': 'components/roadmap-vendor.mmd'
    };
    const filePath = layerToFile[layer] || layerToFile['stream'];

    const srcEl = document.getElementById('mermaid-source');
    if (!srcEl) return;

    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const mermaidCode = await response.text();

    // Place the raw mermaid code into the element so Mermaid can pick it up
    srcEl.textContent = mermaidCode;

    if (typeof mermaid !== 'undefined') {
      // Initialize once; subsequent calls are no-ops
      mermaid.initialize({
        startOnLoad: false,
        theme: 'base',
        themeVariables: {
          primaryColor: '#3b82f6',
          primaryTextColor: '#1f2937',
          primaryBorderColor: '#1e40af',
          lineColor: '#6b7280',
          sectionBkgColor: '#f9fafb',
          altSectionBkgColor: '#ffffff',
          gridColor: '#e5e7eb',
          secondaryColor: '#10b981',
          tertiaryColor: '#f59e0b'
        }
      });
      // Ask Mermaid to (re)render this node
      // Prefer run in Mermaid v10
      if (typeof mermaid.run === 'function') {
        await mermaid.run({ querySelector: '#mermaid-source' });
      } else if (typeof mermaid.init === 'function') {
        mermaid.init(undefined, srcEl);
      }
    } else {
      const container = document.getElementById('mermaid-diagram');
      if (container) {
        container.innerHTML = '<div class="text-center py-8"><p class="text-error">Mermaid.js not loaded.</p></div>';
      }
    }
  } catch (e) {
    const container = document.getElementById('mermaid-diagram');
    if (container) {
      container.innerHTML = '<div class="text-center py-8"><p class="text-error">Failed to load roadmap diagram.</p></div>';
    }
    // eslint-disable-next-line no-console
    console.error('mountLayerRoadmap error', e);
  }
}

// Export for use in main HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createProgramRoadmap, createLayerRoadmap, mountLayerRoadmap };
}
