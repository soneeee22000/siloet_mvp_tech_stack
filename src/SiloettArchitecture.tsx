import React, { useState } from 'react';
import { Database, Cpu, Globe, FileText, CheckCircle, ArrowDown, Search, Zap } from 'lucide-react';

const SiloettArchitecture: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const [showDataFlow, setShowDataFlow] = useState(false);

  const layers = [
    {
      id: 'layer4',
      name: 'Layer 4: User Interface',
      color: 'from-blue-500 to-blue-600',
      icon: Globe,
      tech: ['React (Vite/CRA)', 'Vercel Deployment'],
      description: 'Demo interface for canon queries, validation, and script generation',
      responsibilities: ['Script input/output', 'Validation results display', 'Canon search interface']
    },
    {
      id: 'layer3',
      name: 'Layer 3: Application Logic',
      color: 'from-purple-500 to-purple-600',
      icon: Cpu,
      tech: ['FastAPI (Python)', 'Railway Deployment'],
      description: 'API endpoints orchestrating RAG and validation workflows',
      responsibilities: ['Request routing', 'Session management', 'Response formatting']
    },
    {
      id: 'layer2',
      name: 'Layer 2: Intelligence Engines',
      color: 'from-green-500 to-green-600',
      icon: Zap,
      tech: ['LangChain Framework', 'Claude Sonnet 4 API', 'Validation Logic'],
      description: 'RAG pipeline and validation systems working in parallel',
      responsibilities: ['RAG retrieval & generation', 'Rule-based validation', 'LLM-based consistency checks']
    },
    {
      id: 'layer1',
      name: 'Layer 1: Canon Knowledge Store',
      color: 'from-orange-500 to-orange-600',
      icon: Database,
      tech: ['Pinecone (Vector DB)', 'PostgreSQL (Metadata)'],
      description: 'Persistent storage for canon documents and structured relationships',
      responsibilities: ['Document embeddings', 'Character/event metadata', 'Timeline data']
    }
  ];

  const dataFlowSteps = [
    { from: 'User', to: 'UI', label: 'Submit script or query', color: 'blue', bgColor: '#3b82f6' },
    { from: 'UI', to: 'API', label: 'REST API call', color: 'purple', bgColor: '#8b5cf6' },
    { from: 'API', to: 'RAG', label: 'Trigger RAG pipeline', color: 'green', bgColor: '#22c55e' },
    { from: 'RAG', to: 'DB', label: 'Search embeddings', color: 'orange', bgColor: '#f97316' },
    { from: 'DB', to: 'RAG', label: 'Return canon docs', color: 'orange', bgColor: '#f97316' },
    { from: 'RAG', to: 'API', label: 'Generated response + citations', color: 'green', bgColor: '#22c55e' },
    { from: 'API', to: 'UI', label: 'Format & display', color: 'purple', bgColor: '#8b5cf6' },
    { from: 'UI', to: 'User', label: 'Show results', color: 'blue', bgColor: '#3b82f6' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">SILOETT Technical Architecture</h1>
          <p className="text-gray-400 text-lg">RAG-Based Narrative Operating System</p>
          <div className="flex gap-4 justify-center mt-6">
            <button
              onClick={() => setShowDataFlow(!showDataFlow)}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              {showDataFlow ? 'Hide' : 'Show'} Data Flow
            </button>
            <button
              onClick={() => setActiveLayer(null)}
              className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
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
                    bg-gradient-to-r ${layer.color}
                  `}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{layer.name}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {layer.tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm text-white">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="text-white text-opacity-90">{layer.description}</p>

                      {isActive && (
                        <div className="mt-4 pt-4 border-t border-white border-opacity-20">
                          <h4 className="text-lg font-semibold text-white mb-2">Key Responsibilities:</h4>
                          <ul className="space-y-1">
                            {layer.responsibilities.map((resp, i) => (
                              <li key={i} className="text-white text-opacity-90 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Arrow between layers */}
                {index < layers.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown className="w-6 h-6 text-gray-500" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Data Flow Visualization */}
        {showDataFlow && (
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Search className="w-6 h-6" />
              Example: Query Data Flow
            </h2>
            <div className="space-y-3">
              {dataFlowSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-4" >
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: step.bgColor }}
                  ></div>
                  <div className="flex-1 bg-gray-700 rounded-lg p-4" style={{ 
                    borderLeft: `4px solid ${step.bgColor}`,
                    backgroundColor: 'rgba(55, 65, 81, 0.8)'
                  }}>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400 font-mono text-sm">{index + 1}.</span>
                      <span className="text-white font-semibold">{step.from}</span>
                      <ArrowDown className="w-4 h-4 text-gray-500 rotate-[-90deg]" />
                      <span className="text-white font-semibold">{step.to}</span>
                    </div>
                    <p className="text-gray-300 text-sm mt-2 ml-8">{step.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Example Query */}
            <div className="mt-8 bg-gray-900 rounded-lg p-6 border border-green-500 border-opacity-30">
              <h3 className="text-lg font-semibold text-green-400 mb-3">Example Query Flow:</h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-300"><span className="text-blue-400 font-mono">User Input:</span> "Can Roy use a wheelchair in Season 4?"</p>
                <p className="text-gray-300"><span className="text-orange-400 font-mono">Vector Search:</span> Retrieves Episode 2.8 script + Character Bible</p>
                <p className="text-gray-300"><span className="text-green-400 font-mono">RAG Output:</span> "No. Roy stopped using wheelchair after Episode 2.8"</p>
                <p className="text-gray-300"><span className="text-purple-400 font-mono">Citation:</span> (Source: S02E08, Script page 12, lines 45-47)</p>
              </div>
            </div>
          </div>
        )}

        {/* Technical Advantages */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <FileText className="w-8 h-8 text-blue-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Always Current</h3>
            <p className="text-gray-400 text-sm">Canon updates instantly without retraining. Just update the database.</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Full Traceability</h3>
            <p className="text-gray-400 text-sm">Every fact includes source citations with document, page, and line numbers.</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <Zap className="w-8 h-8 text-yellow-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Hybrid Validation</h3>
            <p className="text-gray-400 text-sm">Rule-based for speed + LLM-based for nuanced consistency checks.</p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Click any layer to see detailed responsibilities • Toggle data flow to see query execution</p>
        </div>
      </div>
    </div>
  );
};

export default SiloettArchitecture;

