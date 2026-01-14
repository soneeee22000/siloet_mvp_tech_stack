import React, { useState } from 'react';
import { CheckCircle, XCircle, AlertCircle, TrendingUp, DollarSign, Clock, Shield, Zap, FileText } from 'lucide-react';

const ComparisonMatrix = () => {
  const [selectedApproach, setSelectedApproach] = useState(null);

  const approaches = {
    rag: {
      name: 'RAG (Retrieval-Augmented Generation)',
      subtitle: 'Recommended for SILOETT MVP',
      color: 'green',
      gradient: 'from-green-500 to-green-600'
    },
    finetuning: {
      name: 'Fine-Tuning',
      subtitle: 'Not suitable for MVP',
      color: 'red',
      gradient: 'from-red-500 to-red-600'
    },
    hybrid: {
      name: 'Hybrid (RAG + Fine-Tuning)',
      subtitle: 'Future enhancement (V2)',
      color: 'yellow',
      gradient: 'from-yellow-500 to-yellow-600'
    }
  };

  const dimensions = [
    {
      id: 'freshness',
      name: 'Canon Freshness',
      icon: Zap,
      description: 'How quickly can new canon be incorporated?',
      scores: {
        rag: { status: 'excellent', label: 'Instant', detail: 'Add new documents to vector DB in minutes. No retraining needed.' },
        finetuning: { status: 'poor', label: 'Retrain Needed', detail: 'Requires weeks of retraining every time canon changes. Frozen knowledge.' },
        hybrid: { status: 'medium', label: 'Partial', detail: 'RAG handles new facts, but fine-tuned behavior remains static.' }
      },
      priority: 'critical'
    },
    {
      id: 'traceability',
      name: 'Source Traceability',
      icon: FileText,
      description: 'Can you trace facts back to source documents?',
      scores: {
        rag: { status: 'excellent', label: 'Strong Citations', detail: 'Every fact includes source document, page, and line number.' },
        finetuning: { status: 'poor', label: 'No Citations', detail: 'Knowledge is "baked in" - impossible to trace where facts came from.' },
        hybrid: { status: 'medium', label: 'RAG-Only', detail: 'Only RAG-retrieved facts have citations. Fine-tuned knowledge untraceable.' }
      },
      priority: 'critical'
    },
    {
      id: 'cost',
      name: 'Development Cost',
      icon: DollarSign,
      description: 'Upfront investment required for MVP',
      scores: {
        rag: { status: 'excellent', label: '$250 MVP', detail: 'Tools + API costs only. No GPU training required.' },
        finetuning: { status: 'poor', label: '$50K+ MVP', detail: 'GPU training ($5-10K) + data labeling ($10-20K) + engineering time.' },
        hybrid: { status: 'poor', label: '$60K+ MVP', detail: 'RAG costs + fine-tuning costs + integration complexity.' }
      },
      priority: 'critical'
    },
    {
      id: 'speed',
      name: 'Time to MVP',
      icon: Clock,
      description: 'How long to build working demo?',
      scores: {
        rag: { status: 'excellent', label: '8-12 Weeks', detail: 'Use existing frameworks (LangChain). Build on proven patterns.' },
        finetuning: { status: 'poor', label: '4-6 Months', detail: 'Data prep, training iterations, evaluation, deployment pipeline.' },
        hybrid: { status: 'poor', label: '6+ Months', detail: 'Build both systems + integration layer. High complexity.' }
      },
      priority: 'critical'
    },
    {
      id: 'validation',
      name: 'Validation Capability',
      icon: CheckCircle,
      description: 'Can it detect canon contradictions?',
      scores: {
        rag: { status: 'excellent', label: 'Natural Fit', detail: 'Retrieve conflicting facts, compare them, flag contradictions with sources.' },
        finetuning: { status: 'poor', label: 'Very Difficult', detail: 'Model has no awareness of its own knowledge. Cannot self-validate.' },
        hybrid: { status: 'medium', label: 'RAG-Dependent', detail: 'Validation relies entirely on RAG component. Fine-tuning adds no value here.' }
      },
      priority: 'high'
    },
    {
      id: 'ip-safety',
      name: 'IP Data Safety',
      icon: Shield,
      description: 'Risk of proprietary data leakage',
      scores: {
        rag: { status: 'excellent', label: 'High Security', detail: 'Canon stays in your database. LLM never trained on it. Full control.' },
        finetuning: { status: 'medium', label: 'Medium Risk', detail: 'Canon becomes part of model weights. Harder to delete or audit.' },
        hybrid: { status: 'medium', label: 'Mixed Risk', detail: 'Fine-tuned portion has same IP exposure risks as pure fine-tuning.' }
      },
      priority: 'high'
    },
    {
      id: 'multi-ip',
      name: 'Multi-IP Scalability',
      icon: TrendingUp,
      description: 'Can it handle multiple story universes?',
      scores: {
        rag: { status: 'excellent', label: 'Seamless', detail: 'One model, multiple vector DBs. Switch between IPs instantly.' },
        finetuning: { status: 'poor', label: 'Multiple Models', detail: 'Need separate fine-tuned model per IP. Expensive and complex.' },
        hybrid: { status: 'medium', label: 'Partial', detail: 'One fine-tuned model + multiple RAG DBs. Better than pure fine-tuning.' }
      },
      priority: 'medium'
    }
  ];

  const getStatusIcon = (status) => {
    switch(status) {
      case 'excellent':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'poor':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'medium':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'excellent':
        return 'bg-green-500 bg-opacity-10 border-green-500';
      case 'poor':
        return 'bg-red-500 bg-opacity-10 border-red-500';
      case 'medium':
        return 'bg-yellow-500 bg-opacity-10 border-yellow-500';
      default:
        return 'bg-gray-500 bg-opacity-10 border-gray-500';
    }
  };

  const getPriorityBadge = (priority) => {
    const colors = {
      critical: 'bg-red-500 bg-opacity-20 text-red-300 border-red-500',
      high: 'bg-orange-500 bg-opacity-20 text-orange-300 border-orange-500',
      medium: 'bg-blue-500 bg-opacity-20 text-blue-300 border-blue-500'
    };
    return (
      <span className={`px-2 py-0.5 rounded text-xs border ${colors[priority]}`}>
        {priority.toUpperCase()}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Technical Approach Comparison</h1>
          <p className="text-gray-400 text-lg mb-6">Which AI architecture is right for SILOETT?</p>
          <div className="inline-block bg-gray-800 rounded-lg p-4 border border-gray-700">
            <p className="text-green-400 font-semibold text-lg">
              Conclusion: RAG is the only approach that fits fast-changing IP with validation needs.
            </p>
          </div>
        </div>

        {/* Approach Headers */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="text-white font-semibold">Dimension</div>
          {Object.entries(approaches).map(([key, approach]) => (
            <div
              key={key}
              onClick={() => setSelectedApproach(selectedApproach === key ? null : key)}
              className={`
                cursor-pointer transition-all duration-300 rounded-lg p-4
                ${selectedApproach === key ? 'scale-105 shadow-xl' : 'hover:scale-102'}
                bg-gradient-to-r ${approach.gradient}
              `}
            >
              <h3 className="text-white font-bold text-lg mb-1">{approach.name}</h3>
              <p className="text-white text-opacity-80 text-sm">{approach.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Comparison Matrix */}
        <div className="space-y-4">
          {dimensions.map((dimension) => {
            const Icon = dimension.icon;
            return (
              <div key={dimension.id} className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                <div className="grid grid-cols-4 gap-4 p-4">
                  {/* Dimension Name */}
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5 text-blue-400" />
                      <h3 className="text-white font-semibold">{dimension.name}</h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{dimension.description}</p>
                    {getPriorityBadge(dimension.priority)}
                  </div>

                  {/* RAG Score */}
                  <div className={`rounded-lg p-4 border-2 ${getStatusColor(dimension.scores.rag.status)}`}>
                    <div className="flex items-center gap-2 mb-2">
                      {getStatusIcon(dimension.scores.rag.status)}
                      <span className="text-white font-semibold">{dimension.scores.rag.label}</span>
                    </div>
                    {(selectedApproach === 'rag' || selectedApproach === null) && (
                      <p className="text-gray-300 text-sm">{dimension.scores.rag.detail}</p>
                    )}
                  </div>

                  {/* Fine-tuning Score */}
                  <div className={`rounded-lg p-4 border-2 ${getStatusColor(dimension.scores.finetuning.status)}`}>
                    <div className="flex items-center gap-2 mb-2">
                      {getStatusIcon(dimension.scores.finetuning.status)}
                      <span className="text-white font-semibold">{dimension.scores.finetuning.label}</span>
                    </div>
                    {(selectedApproach === 'finetuning' || selectedApproach === null) && (
                      <p className="text-gray-300 text-sm">{dimension.scores.finetuning.detail}</p>
                    )}
                  </div>

                  {/* Hybrid Score */}
                  <div className={`rounded-lg p-4 border-2 ${getStatusColor(dimension.scores.hybrid.status)}`}>
                    <div className="flex items-center gap-2 mb-2">
                      {getStatusIcon(dimension.scores.hybrid.status)}
                      <span className="text-white font-semibold">{dimension.scores.hybrid.label}</span>
                    </div>
                    {(selectedApproach === 'hybrid' || selectedApproach === null) && (
                      <p className="text-gray-300 text-sm">{dimension.scores.hybrid.detail}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-green-500 bg-opacity-10 border-2 border-green-500 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <h3 className="text-xl font-bold text-white">RAG: Recommended</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>✓ Perfect for fast-changing canon</li>
              <li>✓ Built-in source citations</li>
              <li>✓ Low cost, fast to build</li>
              <li>✓ Natural fit for validation</li>
              <li>✓ MVP-ready in 8-12 weeks</li>
            </ul>
          </div>

          <div className="bg-red-500 bg-opacity-10 border-2 border-red-500 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <XCircle className="w-8 h-8 text-red-400" />
              <h3 className="text-xl font-bold text-white">Fine-Tuning: Not Viable</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>✗ Frozen knowledge at training</li>
              <li>✗ No source traceability</li>
              <li>✗ $50K+ upfront cost</li>
              <li>✗ Cannot self-validate</li>
              <li>✗ 4-6 months to MVP</li>
            </ul>
          </div>

          <div className="bg-yellow-500 bg-opacity-10 border-2 border-yellow-500 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-8 h-8 text-yellow-400" />
              <h3 className="text-xl font-bold text-white">Hybrid: Future V2</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>⚠ Best of both worlds</li>
              <li>⚠ But 2x the complexity</li>
              <li>⚠ $60K+ investment</li>
              <li>⚠ Needs production data first</li>
              <li>⚠ Post-funding enhancement</li>
            </ul>
          </div>
        </div>

        {/* Strategic Roadmap */}
        <div className="mt-12 bg-gray-800 rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Strategic Roadmap</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-green-500 text-white px-3 py-1 rounded font-bold">MVP</div>
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-1">Months 1-3: RAG Only</h3>
                <p className="text-gray-400 text-sm">Prove the concept. Fast, cheap, flexible. Good enough for fundraising demos.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-500 text-white px-3 py-1 rounded font-bold">V1</div>
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-1">Months 4-6: Production RAG</h3>
                <p className="text-gray-400 text-sm">Scale to 100+ documents. Add multi-user features. Collect usage data.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-yellow-500 text-white px-3 py-1 rounded font-bold">V2</div>
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-1">Months 7-12: Hybrid (RAG + Fine-Tuning)</h3>
                <p className="text-gray-400 text-sm">Fine-tune on narrative patterns. Combine with RAG for 10%+ accuracy boost. Requires $50K+ budget.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Click approach headers to focus on specific comparisons • Priority levels indicate importance for MVP success</p>
        </div>
      </div>
    </div>
  );
};

export default ComparisonMatrix;