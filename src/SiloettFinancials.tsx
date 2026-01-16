import React, { useState } from 'react';
import { DollarSign, TrendingDown, TrendingUp, CheckCircle, Zap, Building } from 'lucide-react';

type Props = {
  theme: 'light' | 'dark';
};

const SiloettFinancials: React.FC<Props> = ({ theme }) => {
  const [selectedView, setSelectedView] = useState('mvp');
  const [comparisonMode, setComparisonMode] = useState(false);

  const isDark = theme === 'dark';
  const pageBg = isDark ? 'bg-app-dark text-white' : 'bg-app-light text-slate-900';
  const cardBg = isDark ? 'bg-gray-800/90 border-gray-600' : 'bg-white border-slate-300';
  const innerCardBg = isDark ? 'bg-gray-900/80' : 'bg-slate-100/80';
  const muted = isDark ? 'text-gray-300' : 'text-slate-600';
  const textPrimary = isDark ? 'text-white' : 'text-slate-900';
  const borderColor = isDark ? 'border-gray-600' : 'border-slate-300';

  const mvpCosts = {
    oneTime: [
      { item: 'Domain Registration (Siloett.AI)', cost: 160, provider: 'Namecheap', period: '2 years', critical: true },
      { item: 'Claude API Credits (Testing)', cost: 150, provider: 'Anthropic', period: 'One-time', critical: true },
      { item: 'Initial Setup & Learning', cost: 0, provider: 'Self', period: 'Time investment', critical: false }
    ],
    monthly: [
      { item: 'Pinecone Vector DB', cost: 0, provider: 'Pinecone', note: 'Free tier (100K vectors)', critical: true },
      { item: 'Railway Backend Hosting', cost: 5, provider: 'Railway', note: 'Starter plan', critical: true },
      { item: 'Vercel Frontend Hosting', cost: 0, provider: 'Vercel', note: 'Hobby tier', critical: true },
      { item: 'PostgreSQL Database', cost: 0, provider: 'Railway', note: 'Included in Railway', critical: true }
    ],
    total3Months: 405
  };

  // Fixed totals as specified
  const monthlySubtotal = 5;
  const monthlyTimes3 = 115;
  const totalMVP = 405;

  const productionCosts = {
    monthly: [
      { item: 'Claude API (Production Usage)', cost: 500, provider: 'Anthropic', usage: '~500K tokens/day', critical: true },
      { item: 'Pinecone Vector DB', cost: 70, provider: 'Pinecone', usage: '1M vectors', critical: true },
      { item: 'Railway Backend (Scaled)', cost: 50, provider: 'Railway', usage: 'Pro plan, auto-scaling', critical: true },
      { item: 'Vercel Pro (Frontend)', cost: 20, provider: 'Vercel', usage: 'Custom domain, analytics', critical: true },
      { item: 'PostgreSQL (Managed)', cost: 25, provider: 'Railway/Supabase', usage: 'Dedicated instance', critical: true },
      { item: 'Development Tools', cost: 40, provider: 'Cursor + v0', usage: 'Ongoing development', critical: false },
      { item: 'Monitoring & Analytics', cost: 0, provider: 'Vercel/Railway', usage: 'Built-in dashboards', critical: false }
    ],
    total: 705
  };

  const competitorComparison = [
    { scenario: 'Traditional Development', cost: 150000, time: '6-9 months', team: '3-4 engineers', notes: 'Full-time salaries, benefits, overhead' },
    { scenario: 'Agency Build', cost: 80000, time: '4-6 months', team: '1 PM + 2 devs', notes: 'Contract agency, fixed scope' },
    { scenario: 'SILOETT (AI-Assisted)', cost: 405, time: '3 months', team: '1 founder', notes: 'AI tools + proven frameworks' },
    { scenario: 'Fine-Tuning Approach', cost: 53000, time: '4-6 months', team: '1 founder + ML consultant', notes: 'Upfront training costs' }
  ];

  const roiCalculation = {
    investmentMVP: 405,
    potentialGrants: [
      { name: 'AI Grant (Nat Friedman)', amount: 250000, probability: 'Medium', type: 'Investment + Credits' },
      { name: 'NSF SBIR Phase 1', amount: 275000, probability: 'Medium', type: 'Non-dilutive grant' },
      { name: 'State Innovation Grant', amount: 50000, probability: 'High', type: 'Non-dilutive grant' }
    ],
    firstYearRevenue: [
      { source: 'Pilot Customer (1 studio)', mrr: 5000, arr: 60000, probability: 'High' },
      { source: 'Early Adopters (3 studios)', mrr: 12000, arr: 144000, probability: 'Medium' }
    ]
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(amount);
  };

  return (
    <div className={`min-h-screen ${pageBg} p-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold ${textPrimary} mb-4`}>SILOETT Financial Analysis</h1>
          <p className={`${muted} text-lg mb-6`}>MVP Cost Breakdown • Production Scaling • ROI Projections</p>
          
          <div className="flex gap-4 justify-center mb-6">
            <button
              onClick={() => setSelectedView('mvp')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedView === 'mvp' 
                  ? 'bg-gradient-to-r from-teal-500 to-orange-500 text-white' 
                  : isDark 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              MVP Costs
            </button>
            <button
              onClick={() => setSelectedView('production')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedView === 'production' 
                  ? 'bg-gradient-to-r from-teal-500 to-orange-500 text-white' 
                  : isDark 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              Production Costs
            </button>
            <button
              onClick={() => setSelectedView('roi')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedView === 'roi' 
                  ? 'bg-gradient-to-r from-teal-500 to-orange-500 text-white' 
                  : isDark 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              ROI Analysis
            </button>
          </div>

          <button
            onClick={() => setComparisonMode(!comparisonMode)}
            className={`px-6 py-2 rounded-lg transition-colors ${
              isDark 
                ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                : 'bg-purple-500 hover:bg-purple-600 text-white'
            }`}
          >
            {comparisonMode ? 'Hide' : 'Show'} Competitor Comparison
          </button>
        </div>

        {/* MVP Costs View */}
        {selectedView === 'mvp' && (
          <div className="space-y-8">
            {/* Summary Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-green-600 rounded-xl p-6 text-white shadow-xl">
                <DollarSign className="w-8 h-8 mb-3" />
                <div className="text-3xl font-bold mb-1">{formatCurrency(totalMVP)}</div>
                <div className="text-sm opacity-90">Total MVP Cost (3 months)</div>
              </div>
              <div className="bg-blue-600 rounded-xl p-6 text-white shadow-xl">
                <TrendingDown className="w-8 h-8 mb-3" />
                <div className="text-3xl font-bold mb-1">{formatCurrency(monthlySubtotal)}</div>
                <div className="text-sm opacity-90">Monthly Operating Cost</div>
              </div>
              <div className="bg-purple-600 rounded-xl p-6 text-white shadow-xl">
                <Zap className="w-8 h-8 mb-3" />
                <div className="text-3xl font-bold mb-1">{formatCurrency(mvpCosts.oneTime.reduce((sum, item) => sum + item.cost, 0))}</div>
                <div className="text-sm opacity-90">One-Time Setup Costs</div>
              </div>
              <div className="bg-orange-500 rounded-xl p-6 text-white shadow-xl">
                <CheckCircle className="w-8 h-8 mb-3" />
                <div className="text-3xl font-bold mb-1">$0</div>
                <div className="text-sm opacity-90">Hidden Fees (None!)</div>
              </div>
            </div>

            {/* One-Time Costs */}
            <div className={`${cardBg} rounded-xl p-6 border shadow-lg`}>
              <h2 className={`text-2xl font-bold ${textPrimary} mb-6`}>One-Time Setup Costs</h2>
              <div className="space-y-3">
                {mvpCosts.oneTime.map((item, idx) => (
                  <div key={idx} className={`flex items-center justify-between ${innerCardBg} rounded-lg p-4 border ${borderColor}`}>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`${textPrimary} font-semibold`}>{item.item}</span>
                        {item.critical && (
                          <span className="px-2 py-0.5 bg-red-500 bg-opacity-20 text-red-400 text-xs rounded border border-red-500">
                            CRITICAL
                          </span>
                        )}
                      </div>
                      <div className={`text-sm ${muted}`}>
                        {item.provider} • {item.period}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-green-400">{formatCurrency(item.cost)}</div>
                  </div>
                ))}
              </div>
              <div className={`mt-4 pt-4 border-t ${borderColor} flex justify-between items-center`}>
                <span className={muted}>Subtotal (One-Time)</span>
                <span className={`text-2xl font-bold ${textPrimary}`}>
                  {formatCurrency(mvpCosts.oneTime.reduce((sum, item) => sum + item.cost, 0))}
                </span>
              </div>
            </div>

            {/* Monthly Costs */}
            <div className={`${cardBg} rounded-xl p-6 border shadow-lg`}>
              <h2 className={`text-2xl font-bold ${textPrimary} mb-6`}>Monthly Operating Costs</h2>
              <div className="space-y-3">
                {mvpCosts.monthly.map((item, idx) => (
                  <div key={idx} className={`flex items-center justify-between ${innerCardBg} rounded-lg p-4 border ${borderColor}`}>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`${textPrimary} font-semibold`}>{item.item}</span>
                        {item.critical && (
                          <span className="px-2 py-0.5 bg-red-500 bg-opacity-20 text-red-400 text-xs rounded border border-red-500">
                            CRITICAL
                          </span>
                        )}
                      </div>
                      <div className={`text-sm ${muted}`}>
                        {item.provider} {item.note && `• ${item.note}`}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-blue-400">
                      {item.cost === 0 ? 'FREE' : `${formatCurrency(item.cost)}/mo`}
                    </div>
                  </div>
                ))}
              </div>
              <div className={`mt-4 pt-4 border-t ${borderColor} flex justify-between items-center`}>
                <span className={muted}>Subtotal (Monthly × 3 months)</span>
                <span className={`text-2xl font-bold ${textPrimary}`}>
                  {formatCurrency(monthlyTimes3)}
                </span>
              </div>
            </div>

            {/* Total Summary */}
            <div className="bg-green-600 rounded-xl p-8 text-white shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Total MVP Investment (3 Months)</h3>
                  <p className="text-white text-opacity-90">
                    From concept to demo-ready product
                  </p>
                </div>
                <div className="text-5xl font-bold">{formatCurrency(totalMVP)}</div>
              </div>
            </div>
          </div>
        )}

        {/* Production Costs View */}
        {selectedView === 'production' && (
          <div className="space-y-8">
            {/* Summary Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-600 rounded-xl p-6 text-white shadow-xl">
                <DollarSign className="w-8 h-8 mb-3" />
                <div className="text-3xl font-bold mb-1">{formatCurrency(productionCosts.total)}</div>
                <div className="text-sm opacity-90">Monthly Operating Cost</div>
              </div>
              <div className="bg-purple-600 rounded-xl p-6 text-white shadow-xl">
                <TrendingUp className="w-8 h-8 mb-3" />
                <div className="text-3xl font-bold mb-1">{formatCurrency(productionCosts.total * 12)}</div>
                <div className="text-sm opacity-90">Annual Operating Cost</div>
              </div>
              <div className="bg-green-600 rounded-xl p-6 text-white shadow-xl">
                <CheckCircle className="w-8 h-8 mb-3" />
                <div className="text-3xl font-bold mb-1">{Math.round((productionCosts.total / 5) * 100) / 100}x</div>
                <div className="text-sm opacity-90">Cost Increase from MVP</div>
              </div>
            </div>

            {/* Production Costs Breakdown */}
            <div className={`${cardBg} rounded-xl p-6 border shadow-lg`}>
              <h2 className={`text-2xl font-bold ${textPrimary} mb-4`}>Post-Funding Production Costs</h2>
              <p className={`${muted} mb-6`}>After securing funding, these are the monthly costs to operate SILOETT at production scale with real customers.</p>
              
              <div className="space-y-3">
                {productionCosts.monthly.map((item, idx) => (
                  <div key={idx} className={`flex items-center justify-between ${innerCardBg} rounded-lg p-4 border ${borderColor}`}>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`${textPrimary} font-semibold`}>{item.item}</span>
                        {item.critical && (
                          <span className="px-2 py-0.5 bg-red-500 bg-opacity-20 text-red-400 text-xs rounded border border-red-500">
                            CRITICAL
                          </span>
                        )}
                      </div>
                      <div className={`text-sm ${muted}`}>
                        {item.provider} • {item.usage}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-blue-400">
                      {item.cost === 0 ? 'FREE' : `${formatCurrency(item.cost)}/mo`}
                    </div>
                  </div>
                ))}
              </div>

              <div className={`mt-6 pt-6 border-t ${borderColor}`}>
                <div className="flex justify-between items-center mb-4">
                  <span className={`${muted} text-lg`}>Total Monthly Cost</span>
                  <span className={`text-3xl font-bold ${textPrimary}`}>{formatCurrency(productionCosts.total)}/mo</span>
                </div>
                <div className="bg-blue-500 bg-opacity-10 border border-blue-500 rounded-lg p-4">
                  <p className="text-blue-300 text-sm">
                    <strong>Note:</strong> These costs scale with usage. Initial production will be lower (~$300-400/mo) and grow as customer base expands.
                  </p>
                </div>
              </div>
            </div>

            {/* Scaling Comparison */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`${cardBg} rounded-xl p-6 border shadow-lg`}>
                <h3 className={`text-xl font-bold ${textPrimary} mb-4`}>MVP Stage (Now)</h3>
                <div className="text-4xl font-bold text-green-400 mb-2">{formatCurrency(45)}/mo</div>
                <ul className={`space-y-2 text-sm ${muted}`}>
                  <li>• Free tier services</li>
                  <li>• 1 test IP (The IT Crowd)</li>
                  <li>• Demo-ready only</li>
                  <li>• AI-assisted development</li>
                </ul>
              </div>
              <div className={`${cardBg} rounded-xl p-6 border shadow-lg`}>
                <h3 className={`text-xl font-bold ${textPrimary} mb-4`}>Production (Post-Funding)</h3>
                <div className="text-4xl font-bold text-blue-400 mb-2">{formatCurrency(productionCosts.total)}/mo</div>
                <ul className={`space-y-2 text-sm ${muted}`}>
                  <li>• Scaled infrastructure</li>
                  <li>• Multiple IPs supported</li>
                  <li>• Real customer workloads</li>
                  <li>• 99.9% uptime SLA</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ROI Analysis View */}
        {selectedView === 'roi' && (
          <div className="space-y-8">
            {/* ROI Summary */}
            <div className="bg-purple-600 rounded-xl p-8 text-white shadow-2xl">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm opacity-80 mb-1">MVP Investment</div>
                  <div className="text-3xl font-bold">{formatCurrency(roiCalculation.investmentMVP)}</div>
                </div>
                <div>
                  <div className="text-sm opacity-80 mb-1">Potential Grant Funding</div>
                  <div className="text-3xl font-bold">{formatCurrency(575000)}</div>
                </div>
                <div>
                  <div className="text-sm opacity-80 mb-1">ROI Multiple</div>
                  <div className="text-3xl font-bold">1,420x</div>
                </div>
              </div>
            </div>

            {/* Grant Opportunities */}
            <div className={`${cardBg} rounded-xl p-6 border shadow-lg`}>
              <h2 className={`text-2xl font-bold ${textPrimary} mb-6`}>Funding Opportunities</h2>
              <div className="space-y-4">
                {roiCalculation.potentialGrants.map((grant, idx) => (
                  <div key={idx} className={`${innerCardBg} rounded-lg p-5 border ${borderColor}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className={`text-xl font-semibold ${textPrimary} mb-1`}>{grant.name}</h3>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded text-xs ${
                            grant.probability === 'High' ? 'bg-green-500 bg-opacity-20 text-green-400' :
                            grant.probability === 'Medium' ? 'bg-yellow-500 bg-opacity-20 text-yellow-400' :
                            'bg-gray-500 bg-opacity-20 text-gray-400'
                          }`}>
                            {grant.probability} Probability
                          </span>
                          <span className={`text-sm ${muted}`}>{grant.type}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-400">{formatCurrency(grant.amount)}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={`mt-6 pt-6 border-t ${borderColor}`}>
                <div className="flex justify-between items-center">
                  <span className={muted}>Total Potential Funding</span>
                  <span className={`text-3xl font-bold ${textPrimary}`}>{formatCurrency(575000)}</span>
                </div>
              </div>
            </div>

            {/* First Year Revenue Potential */}
            <div className={`${cardBg} rounded-xl p-6 border shadow-lg`}>
              <h2 className={`text-2xl font-bold ${textPrimary} mb-6`}>First Year Revenue Potential</h2>
              <div className="space-y-4">
                {roiCalculation.firstYearRevenue.map((revenue, idx) => (
                  <div key={idx} className={`${innerCardBg} rounded-lg p-5 border ${borderColor}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className={`text-lg font-semibold ${textPrimary} mb-1`}>{revenue.source}</h3>
                        <span className={`px-2 py-1 rounded text-xs ${
                          revenue.probability === 'High' ? 'bg-green-500 bg-opacity-20 text-green-400' :
                          'bg-yellow-500 bg-opacity-20 text-yellow-400'
                        }`}>
                          {revenue.probability} Probability
                        </span>
                      </div>
                      <div className="text-right">
                        <div className={`text-sm ${muted} mb-1`}>MRR</div>
                        <div className="text-xl font-bold text-blue-400">{formatCurrency(revenue.mrr)}</div>
                      </div>
                    </div>
                    <div className={`${isDark ? 'bg-gray-800/70 border border-gray-700' : 'bg-slate-200/70 border border-slate-300'} rounded p-3`}>
                      <div className="flex justify-between">
                        <span className={`${muted} text-sm`}>Annual Recurring Revenue</span>
                        <span className={`text-lg font-bold ${textPrimary}`}>{formatCurrency(revenue.arr)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={`mt-6 pt-6 border-t ${borderColor}`}>
                <div className="flex justify-between items-center">
                  <span className={muted}>Conservative Year 1 ARR</span>
                  <span className={`text-3xl font-bold ${textPrimary}`}>{formatCurrency(60000)}</span>
                </div>
              </div>
            </div>

            {/* Break-Even Analysis */}
            <div className="bg-green-500 bg-opacity-10 border-2 border-green-500 rounded-xl p-6 shadow-lg">
              <h3 className={`text-xl font-bold ${textPrimary} mb-4`}>Break-Even Analysis</h3>
              <div className={`space-y-3 ${muted}`}>
                <p>• <strong>MVP Investment:</strong> {formatCurrency(405)} (3 months to build)</p>
                <p>• <strong>Monthly Operating Cost:</strong> {formatCurrency(productionCosts.total)}</p>
                <p>• <strong>Break-even at:</strong> 1 pilot customer paying $5,000/mo</p>
                <p>• <strong>Time to break-even:</strong> ~1 month after first customer</p>
              </div>
              <div className="mt-4 pt-4 border-t border-green-500 border-opacity-30">
                <p className="text-green-300 font-semibold">
                  With just 1 pilot studio, SILOETT becomes cash-flow positive immediately.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Competitor Comparison */}
        {comparisonMode && (
          <div className={`mt-12 ${cardBg} rounded-xl p-8 border shadow-lg animate-fadeIn`}>
            <h2 className={`text-2xl font-bold ${textPrimary} mb-6 flex items-center gap-2`}>
              <Building className="w-6 h-6" />
              Cost Comparison: Different Approaches
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={`border-b ${borderColor}`}>
                    <th className={`text-left py-3 px-4 ${muted} font-semibold`}>Approach</th>
                    <th className={`text-left py-3 px-4 ${muted} font-semibold`}>Total Cost</th>
                    <th className={`text-left py-3 px-4 ${muted} font-semibold`}>Timeline</th>
                    <th className={`text-left py-3 px-4 ${muted} font-semibold`}>Team Size</th>
                    <th className={`text-left py-3 px-4 ${muted} font-semibold`}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {competitorComparison.map((scenario, idx) => (
                    <tr key={idx} className={`border-b ${borderColor} ${scenario.scenario === 'SILOETT (AI-Assisted)' ? 'bg-green-500 bg-opacity-10' : ''}`}>
                      <td className="py-4 px-4">
                        <span className={`font-semibold ${scenario.scenario === 'SILOETT (AI-Assisted)' ? 'text-green-400' : textPrimary}`}>
                          {scenario.scenario}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`text-xl font-bold ${scenario.scenario === 'SILOETT (AI-Assisted)' ? 'text-green-400' : textPrimary}`}>
                          {formatCurrency(scenario.cost)}
                        </span>
                      </td>
                      <td className={`py-4 px-4 ${muted}`}>{scenario.time}</td>
                      <td className={`py-4 px-4 ${muted}`}>{scenario.team}</td>
                      <td className={`py-4 px-4 ${muted} text-sm`}>{scenario.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-green-500 bg-opacity-10 border-2 border-green-500 rounded-lg p-4 shadow-md">
                <h4 className="text-green-400 font-semibold mb-2">SILOETT Advantage</h4>
                <p className={`text-sm ${muted}`}>
                  <strong>370x cheaper</strong> than traditional development, <strong>198x cheaper</strong> than agency build, and <strong>131x cheaper</strong> than fine-tuning approach.
                </p>
              </div>
              <div className="bg-red-500 bg-opacity-10 border-2 border-red-500 rounded-lg p-4 shadow-md">
                <h4 className="text-red-400 font-semibold mb-2">Fine-Tuning Hidden Costs</h4>
                <p className={`text-sm ${muted}`}>
                  {formatCurrency(53000)} upfront + {formatCurrency(8000)} per canon update. RAG updates are instant and free.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Key Insights */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-green-500 bg-opacity-10 border-2 border-green-500 rounded-xl p-6 shadow-lg">
            <TrendingDown className="w-8 h-8 text-green-400 mb-3" />
            <h3 className={`text-lg font-semibold ${textPrimary} mb-2`}>Minimal Upfront Investment</h3>
            <p className={`text-sm ${muted}`}>Just {formatCurrency(405)} to build a complete MVP. No salaries, no overhead, no long-term commitments.</p>
          </div>
          
          <div className="bg-blue-500 bg-opacity-10 border-2 border-blue-500 rounded-xl p-6 shadow-lg">
            <DollarSign className="w-8 h-8 text-blue-400 mb-3" />
            <h3 className={`text-lg font-semibold ${textPrimary} mb-2`}>Predictable Scaling</h3>
            <p className={`text-sm ${muted}`}>Production costs scale linearly with usage. Start at ~{formatCurrency(300)}/mo, grow to ~{formatCurrency(700)}/mo with customers.</p>
          </div>
          
          <div className="bg-purple-500 bg-opacity-10 border-2 border-purple-500 rounded-xl p-6 shadow-lg">
            <TrendingUp className="w-8 h-8 text-purple-400 mb-3" />
            <h3 className={`text-lg font-semibold ${textPrimary} mb-2`}>Exceptional ROI</h3>
            <p className={`text-sm ${muted}`}>1,420x return potential through grants. Break-even with just 1 pilot customer at {formatCurrency(5000)}/mo.</p>
          </div>
        </div>

        {/* Footer Note */}
        <div className={`mt-12 text-center text-sm ${muted}`}>
          <p>Toggle between views to see MVP costs, production scaling, and ROI projections • Click "Show Competitor Comparison" for cost analysis</p>
        </div>
      </div>
    </div>
  );
};

export default SiloettFinancials;
