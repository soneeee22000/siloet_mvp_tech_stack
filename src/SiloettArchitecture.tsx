import React, { useState } from 'react';
import { Database, Cpu, Globe, CheckCircle, ArrowDown, Search, Zap, Shield, AlertCircle } from 'lucide-react';

type Props = {
  theme: 'light' | 'dark';
};

const SiloettArchitecture: React.FC<Props> = ({ theme }) => {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const [showDataFlow, setShowDataFlow] = useState(false);
  const isDark = theme === 'dark';
  const pageBg = isDark ? 'bg-app-dark text-white' : 'bg-app-light text-slate-900';
  const cardBg = isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-slate-200 text-slate-900';
  const muted = isDark ? 'text-gray-300' : 'text-slate-600';
  const subMuted = isDark ? 'text-gray-200' : 'text-slate-700';

  const layers = [
    {
      id: 'layer5',
      name: 'Layer 5: User Interface',
      color: 'from-blue-500 to-blue-600',
      icon: Globe,
      tech: ['React (Vite/CRA)', 'Frontend Hosting (Vercel / Netlify / CloudFlare)'],
      description: 'Demo interface for canon queries, validation, and script generation',
      responsibilities: ['Script input/output', 'Validation results display', 'Canon search interface'],
      mvpNote: 'Simplified UI for core workflows'
    },
    {
      id: 'layer4',
      name: 'Layer 4: Application Logic',
      color: 'from-purple-500 to-purple-600',
      icon: Cpu,
      tech: ['FastAPI (Python)', 'Backend Hosting (Railway / Render / AWS)'],
      description: 'API endpoints orchestrating RAG and validation workflows',
      responsibilities: ['Request routing', 'Session management', 'Response formatting'],
      mvpNote: 'Manual ingestion approval process'
    },
    {
      id: 'layer3',
      name: 'Layer 3: Validation Engine',
      color: 'from-red-500 to-red-600',
      icon: Shield,
      tech: ['Rule Engine', 'LLM Verification (Claude / GPT-4 / Azure OpenAI)'],
      description: 'Independent validation layer that verifies outputs against canon',
      responsibilities: ['Rule-based validation', 'LLM-based consistency checks', 'Block invalid outputs'],
      isValidation: true,
      mvpNote: 'Basic rules; advanced validation iterative'
    },
    {
      id: 'layer2',
      name: 'Layer 2: Intelligence Engine (RAG)',
      color: 'from-green-500 to-green-600',
      icon: Zap,
      tech: ['LangChain Framework', 'LLM Provider (Claude / GPT-4 / Azure OpenAI)'],
      description: 'RAG pipeline for context retrieval and generation',
      responsibilities: ['Semantic search', 'Context retrieval', 'Response generation with citations'],
      mvpNote: 'Core RAG functionality complete'
    },
    {
      id: 'layer1',
      name: 'Layer 1: Canon Store (Source of Truth)',
      color: 'from-orange-500 to-orange-600',
      icon: Database,
      tech: ['Vector DB (Pinecone / pgvector / Weaviate)', 'PostgreSQL (Metadata & Relations)'],
      description: 'Persistent storage for canon documents — the foundation and moat of SILOETT',
      responsibilities: ['Document embeddings', 'Character/event metadata', 'Timeline data', 'Canonical relationships'],
      isCanon: true,
      mvpNote: 'Fully functional; rule authoring partially manual'
    }
  ];

  const dataFlowSteps = [
    { from: 'User', to: 'UI', label: 'Submit script or query', color: 'blue', bgColor: '#3b82f6' },
    { from: 'UI', to: 'API', label: 'REST API call', color: 'purple', bgColor: '#8b5cf6' },
    { from: 'API', to: 'RAG', label: 'Trigger RAG pipeline', color: 'green', bgColor: '#22c55e' },
    { from: 'RAG', to: 'Canon', label: 'Search embeddings', color: 'orange', bgColor: '#f97316' },
    { from: 'Canon', to: 'RAG', label: 'Return canon docs', color: 'orange', bgColor: '#f97316' },
    { from: 'RAG', to: 'Validation', label: 'Generated response', color: 'green', bgColor: '#22c55e' },
    { from: 'Validation', to: 'Canon', label: 'Check against rules', color: 'red', bgColor: '#ef4444' },
    { from: 'Validation', to: 'API', label: 'Approved output + citations', color: 'red', bgColor: '#ef4444' },
    { from: 'API', to: 'UI', label: 'Format & display', color: 'purple', bgColor: '#8b5cf6' },
    { from: 'UI', to: 'User', label: 'Show results', color: 'blue', bgColor: '#3b82f6' }
  ];

  return (
    <div className={`min-h-screen ${pageBg} p-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>SILOETT Technical Architecture</h1>
          <p className={`${muted} text-lg`}>RAG-Based Narrative Operating System</p>
          <div className="flex gap-4 justify-center mt-6">
            <button
              onClick={() => setShowDataFlow(!showDataFlow)}
              className="px-6 py-2 bg-gradient-to-r from-teal-500 to-orange-500 hover:scale-102 text-white rounded-lg transition-all"
            >
              {showDataFlow ? 'Hide' : 'Show'} Data Flow
            </button>
            <button
              onClick={() => setActiveLayer(null)}
              className={`px-6 py-2 hover:scale-102 rounded-lg transition-all border ${isDark ? 'bg-gray-800 text-gray-200 border-gray-700' : 'bg-slate-100 text-slate-700 border-slate-200'}`}
            >
              Reset View
            </button>
          </div>
        </div>

        {/* Architecture Layers */}
        <div className="space-y-6 mb-12">
          {layers.map((layer, index) => {
            const Icon = layer.icon;
            const isActive = activeLayer === layer.id;

            return (
              <div key={layer.id}>
                <div
                  onClick={() => setActiveLayer(isActive ? null : layer.id)}
                  className={`
                    cursor-pointer transition-all duration-300 rounded-xl p-6 
                    ${isActive ? 'scale-105 shadow-2xl' : 'hover:scale-102 shadow-lg'}
                    ${layer.isCanon ? 'p-8 border-4 border-orange-500 border-opacity-30' : ''}
                    ${cardBg}
                  `}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-500 bg-opacity-10 p-3 rounded-lg border border-teal-500 border-opacity-30">
                      <Icon className={`w-8 h-8 ${isDark ? 'text-teal-300' : 'text-teal-600'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{layer.name}</h3>
                        {layer.isCanon && (
                          <span className={`px-3 py-1 bg-orange-500 bg-opacity-20 text-orange-500 text-xs font-bold rounded-full`}>
                            MOAT
                          </span>
                        )}
                        {layer.isValidation && (
                          <span className={`px-3 py-1 bg-teal-500 bg-opacity-10 ${isDark ? 'text-teal-300' : 'text-teal-600'} text-xs font-bold rounded-full`}>
                            VERIFICATION
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {layer.tech.map((tech, i) => (
                          <span key={i} className={`px-3 py-1 bg-teal-500 bg-opacity-10 border border-teal-500 border-opacity-30 rounded-full text-sm ${isDark ? 'text-teal-300' : 'text-teal-600'}`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className={subMuted}>{layer.description}</p>

                      {isActive && (
                        <div className={`mt-4 pt-4 border-t ${isDark ? 'border-gray-700' : 'border-slate-200'}`}>
                          <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Key Responsibilities:</h4>
                          <ul className="space-y-1 mb-4">
                            {layer.responsibilities.map((resp, i) => (
                              <li key={i} className={`${subMuted} flex items-center gap-2`}>
                                <CheckCircle className={`w-4 h-4 ${isDark ? 'text-teal-300' : 'text-teal-600'}`} />
                                {resp}
                              </li>
                            ))}
                          </ul>
                          <div className={`mt-3 pt-3 border-t ${isDark ? 'border-gray-700' : 'border-slate-200'}`}>
                            <div className="flex items-start gap-2">
                              <AlertCircle className={`w-4 h-4 mt-0.5 ${isDark ? 'text-orange-300' : 'text-orange-500'}`} />
                              <div>
                                <p className={`text-xs font-semibold mb-1 ${isDark ? 'text-orange-300' : 'text-orange-500'}`}>MVP Status:</p>
                                <p className={`text-sm ${subMuted}`}>{layer.mvpNote}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Arrow between layers */}
                {index < layers.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown className={`w-6 h-6 ${isDark ? 'text-gray-500' : 'text-slate-400'}`} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Data Flow Visualization */}
        {showDataFlow && (
          <div className={`rounded-xl p-8 border shadow-lg ${cardBg}`}>
            <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              <Search className={`w-6 h-6 ${isDark ? 'text-teal-300' : 'text-teal-600'}`} />
              Example: Query Data Flow
            </h2>
            <div className="space-y-3">
              {dataFlowSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-4" >
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: step.bgColor }}
                  ></div>
                  <div
                    className={`flex-1 rounded-lg p-4 border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-slate-50 border-slate-200'}`}
                    style={{ borderLeft: `4px solid ${step.bgColor}` }}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`${muted} font-mono text-sm`}>{index + 1}.</span>
                      <span className={`${isDark ? 'text-white' : 'text-slate-900'} font-semibold`}>{step.from}</span>
                      <ArrowDown className={`w-4 h-4 rotate-[-90deg] ${isDark ? 'text-gray-500' : 'text-slate-400'}`} />
                      <span className={`${isDark ? 'text-white' : 'text-slate-900'} font-semibold`}>{step.to}</span>
                    </div>
                    <p className={`${subMuted} text-sm mt-2 ml-8`}>{step.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Example Query */}
            <div className={`mt-8 rounded-lg p-6 border border-teal-500 border-opacity-30 ${isDark ? 'bg-gray-900' : 'bg-slate-50'}`}>
              <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-teal-300' : 'text-teal-600'}`}>Example Query Flow:</h3>
              <div className="space-y-2 text-sm">
                <p className={subMuted}><span className="text-blue-400 font-mono">User Input:</span> "Can Roy use a wheelchair in Season 4?"</p>
                <p className={subMuted}><span className="text-orange-400 font-mono">Canon Retrieval:</span> Retrieves Episode 2.8 script + Character Bible</p>
                <p className={subMuted}><span className={`${isDark ? 'text-teal-300' : 'text-teal-600'} font-mono`}>RAG Generation:</span> "No. Roy stopped using wheelchair after Episode 2.8"</p>
                <p className={subMuted}><span className="text-red-400 font-mono">Validation:</span> Checks against timeline rules + canon consistency</p>
                <p className={subMuted}><span className="text-purple-400 font-mono">Final Output:</span> Approved answer with citation (Source: S02E08, Script page 12, lines 45-47)</p>
              </div>
            </div>
          </div>
        )}

        {/* Technical Advantages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className={`rounded-xl p-6 border shadow-lg ${cardBg}`}>
            <Database className={`w-8 h-8 text-orange-500 mb-3`} />
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Canon as Source of Truth</h3>
            <p className={`${muted} text-sm`}>Canon isn't just context — it's a first-class system that drives all outputs.</p>
          </div>
          <div className={`rounded-xl p-6 border shadow-lg ${cardBg}`}>
            <Shield className="w-8 h-8 text-red-400 mb-3" />
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Generation ≠ Validation</h3>
            <p className={`${muted} text-sm`}>Independent validation layer can block outputs, ensuring canon compliance.</p>
          </div>
          <div className={`rounded-xl p-6 border shadow-lg ${cardBg}`}>
            <CheckCircle className={`w-8 h-8 ${isDark ? 'text-teal-300' : 'text-teal-600'} mb-3`} />
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Full Traceability</h3>
            <p className={`${muted} text-sm`}>Every fact includes source citations with document, page, and line numbers.</p>
          </div>
          <div className={`rounded-xl p-6 border shadow-lg ${cardBg}`}>
            <Globe className="w-8 h-8 text-blue-400 mb-3" />
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Cloud-Agnostic</h3>
            <p className={`${muted} text-sm`}>Architecture supports multiple providers — no vendor lock-in.</p>
          </div>
        </div>

        {/* Strategic Architecture Notes */}
        <div className={`mt-12 rounded-xl p-6 border shadow-lg ${cardBg}`}>
          <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            <AlertCircle className={`w-5 h-5 ${isDark ? 'text-teal-300' : 'text-teal-600'}`} />
            Architectural Principles
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className={`${subMuted} mb-2`}>
                <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Cloud-Agnostic Design:</span> All vendor-specific services are abstracted behind interfaces. We can migrate between providers (Pinecone → pgvector, Claude → GPT-4, Railway → AWS) without architectural changes.
              </p>
            </div>
            <div>
              <p className={`${subMuted} mb-2`}>
                <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>MVP Discipline:</span> Core technical architecture is production-ready. Some operational workflows (ingestion approval, rule authoring) are partially manual for MVP — this enables faster validation and iteration.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p className={muted}>Click any layer to see detailed responsibilities and MVP status • Toggle data flow to see query execution</p>
        </div>
      </div>
    </div>
  );
};

export default SiloettArchitecture;

