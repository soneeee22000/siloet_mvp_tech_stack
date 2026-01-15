import React, { useState } from 'react';
import {
  Search,
  FileCheck,
  Sparkles,
  Database,
  AlertCircle,
  CheckCircle,
  XCircle,
  FileText,
  Play,
  Upload,
  ChevronRight,
  Zap
} from 'lucide-react';

type Props = {
  theme: 'light' | 'dark';
};

const SiloettUiMockup: React.FC<Props> = ({ theme }) => {
  const [activeTab, setActiveTab] = useState('search');
  const [selectedExample, setSelectedExample] = useState<number | null>(null);
  const [validationResults, setValidationResults] = useState<any>(null);
  const [generationOutput, setGenerationOutput] = useState<any>(null);
  const [searchResults, setSearchResults] = useState<any>(null);

  const isDark = theme === 'dark';
  const pageBg = isDark ? 'bg-app-dark text-white' : 'bg-app-light text-slate-900';
  const topBar = isDark ? 'bg-slate-900 border-b border-gray-700' : 'bg-white border-b border-slate-200';
  const panelBg = isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-slate-200';
  const subPanelBg = isDark ? 'bg-gray-800 border-gray-700' : 'bg-slate-50 border-slate-200';
  const mutedText = isDark ? 'text-gray-300' : 'text-slate-600';
  const softText = isDark ? 'text-gray-200' : 'text-slate-700';
  const accentText = isDark ? 'text-teal-300' : 'text-teal-600';
  const sidebarHover = isDark ? 'hover:bg-gray-700 hover:text-white' : 'hover:bg-slate-100 hover:text-slate-900';

  const searchExamples = [
    {
      id: 1,
      query: "Can Roy use a wheelchair in Season 4?",
      answer:
        "No. Roy stopped using his wheelchair after Episode 2.8 ('The Dinner Party') when he overcame his leg injury.",
      confidence: 95,
      citations: [
        {
          source: 'Episode 2.8 Script',
          page: 12,
          lines: '45-47',
          text: "Roy stands up from wheelchair, flexes legs. 'I don't need this anymore.'"
        },
        {
          source: 'Character Bible - Roy',
          page: 3,
          section: 'Physical Status',
          text: 'Post-S2E8: Fully mobile, no assistive devices required'
        }
      ]
    },
    {
      id: 2,
      query: "What is Jen's technical knowledge level?",
      answer:
        "Jen has minimal technical knowledge despite being the Relationship Manager of the IT department. She famously doesn't know what IT stands for.",
      confidence: 98,
      citations: [
        {
          source: 'Episode 1.1 Script',
          page: 5,
          lines: '23-25',
          text: 'JEN: What does IT stand for? ROY: Information Technology. JEN: Oh... interesting.'
        },
        {
          source: 'Character Bible - Jen',
          page: 1,
          section: 'Core Traits',
          text: 'Non-technical background, hired for people skills not tech expertise'
        }
      ]
    },
    {
      id: 3,
      query: 'Where is the IT department located?',
      answer: "The IT department is located in the basement of Reynholm Industries' headquarters in London.",
      confidence: 100,
      citations: [
        {
          source: 'World Bible - Locations',
          page: 2,
          section: 'Reynholm Industries',
          text: 'IT Department: Basement level, poorly lit, isolated from main offices'
        },
        {
          source: 'Episode 1.1 Script',
          page: 3,
          lines: '15-17',
          text: "Jen descends stairs into dingy basement. Sign: 'IT Department - Basement Level'"
        }
      ]
    }
  ];

  const validationExample = {
    scriptTitle: "Season 4, Episode 3: 'The New Hire' - Draft v2",
    issues: [
      {
        severity: 'high',
        type: 'Character Inconsistency',
        line: 45,
        issue: 'Script depicts Roy using a wheelchair in Scene 4',
        canon: 'Roy stopped using wheelchair after Episode 2.8',
        citation: 'Episode 2.8 Script, page 12, lines 45-47',
        suggestion: 'Remove wheelchair reference or justify temporary injury'
      },
      {
        severity: 'high',
        type: 'Timeline Conflict',
        line: 78,
        issue: 'Scene dated March 15, 2009, but references an event from Episode 3.6 (aired April 2009)',
        canon: 'Episode 3.6 events occurred after March 15, 2009',
        citation: 'Episode Timeline Database, Season 3 chronology',
        suggestion: 'Change scene date to April 2009 or remove reference to Episode 3.6 events'
      },
      {
        severity: 'medium',
        type: 'World Rule Violation',
        line: 112,
        issue: "Dialogue mentions 'The Internet' as physical device in different location",
        canon: "'The Internet' box is stored in server room per Episode 3.4",
        citation: "Episode 3.4 'The Internet', prop continuity notes",
        suggestion: 'Verify Internet box location or add explanation for movement'
      },
      {
        severity: 'low',
        type: 'Character Voice',
        line: 156,
        issue: "Moss uses casual slang ('That's sick!'), inconsistent with established speech patterns",
        canon: 'Moss speaks formally and literally, rarely uses modern slang',
        citation: 'Character Bible - Moss, Speech Patterns section',
        suggestion: "Revise to match Moss's formal speaking style, e.g., 'That is quite remarkable!'"
      }
    ],
    summary: {
      total: 4,
      high: 2,
      medium: 1,
      low: 1,
      passed: 0
    }
  };

  const generationExample = {
    prompt:
      "Generate a 2-page scene where Roy and Moss discover a mysterious locked door in the basement they've never noticed before. Include their personalities and the office setting.",
    output: `INT. IT DEPARTMENT - BASEMENT - DAY

Roy and Moss sit at their desks, surrounded by the familiar clutter of cables, old monitors, and blinking servers. Roy scrolls through his phone. Moss types methodically.

MOSS
Roy, have you noticed that door?

ROY
(not looking up)
What door?

MOSS
(pointing)
That door. Right there. Behind the filing cabinet.

Roy finally looks up. Between two server racks, partially obscured by a tilted filing cabinet, is a WEATHERED WOODEN DOOR with peeling paint. A heavy padlock hangs from the handle.

ROY
(squinting)
How long has that been there?

MOSS
I don't know. But I walk past it every day and I've never consciously observed it until this moment. It's quite unsettling.

ROY
Maybe it's a cupboard.

MOSS
It has a padlock. Why would a cupboard have a padlock?

ROY
(shrugs)
To keep Jen from eating our biscuits?

Moss stands and approaches the door carefully, as if it might bite. Roy reluctantly follows.

MOSS
There's no signage. No hazard warnings. No identification number. This door violates at least three building safety regulations.

ROY
(trying the padlock)
Locked. Well, mystery solved. It's locked, we can't get in, end of story.

MOSS
But what's behind it?

ROY
Probably just old equipment. Maybe asbestos. Definitely asbestos.

MOSS
(excited)
Or it could be a secret room! Perhaps Denholm Reynholm kept confidential documents down here. Or experimental technology!

ROY
(walking back to desk)
Or it's a cupboard full of mops.

MOSS
I'm going to find the key.

ROY
No, you're not.

MOSS
I'm going to find the key.

END OF SCENE

---

GROUNDING NOTES:
✓ Roy's sarcastic, deflective personality (Character Bible - Roy, p.2)
✓ Moss's literal, rules-focused thinking (Character Bible - Moss, p.1)
✓ Basement setting details: servers, cables, clutter (World Bible - Locations, p.2)
✓ Denholm Reynholm reference appropriate for timeline (Episode Database)
✓ Dialogue patterns match established character voices`,
    citations: [
      'Character Bible - Roy: Personality traits, humor style',
      'Character Bible - Moss: Speech patterns, logical thinking',
      'World Bible - IT Department: Physical layout and details',
      'Episode 1.1-4.6: Character interaction patterns'
    ]
  };

  const runSearchExample = (example: (typeof searchExamples)[number]) => {
    setSelectedExample(example.id);
    setTimeout(() => {
      setSearchResults(example);
    }, 800);
  };

  const runValidation = () => {
    setValidationResults(null);
    setTimeout(() => {
      setValidationResults(validationExample);
    }, 1200);
  };

  const runGeneration = () => {
    setGenerationOutput(null);
    setTimeout(() => {
      setGenerationOutput(generationExample);
    }, 1500);
  };

  return (
    <div className={`min-h-screen ${pageBg}`}>
      {/* Top Navigation Bar */}
      <div className={`${topBar} px-6 py-4`}>
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-orange-500 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>SILOETT</h1>
              <p className={`text-xs ${mutedText}`}>Narrative Operating System</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className={`${subPanelBg} px-4 py-2 rounded-lg border`}>
              <span className={`text-sm ${mutedText}`}>Active Universe:</span>
              <span className={`ml-2 font-semibold ${accentText}`}>The IT Crowd</span>
            </div>
            <div className={`flex items-center gap-2 bg-teal-500 bg-opacity-10 border border-teal-500 px-3 py-2 rounded-lg`}>
              <Database className={`w-4 h-4 ${accentText}`} />
              <span className={`text-sm ${accentText}`}>27 Canon Docs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className={`w-64 ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-slate-200'} border-r min-h-screen p-4`}>
          <nav className="space-y-2">
            <button
              onClick={() => {
                setActiveTab('search');
                setSearchResults(null);
                setSelectedExample(null);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'search'
                  ? 'bg-gradient-to-r from-teal-500 to-orange-500 text-white'
                  : `${softText} ${sidebarHover}`
              }`}
            >
              <Search className="w-5 h-5" />
              <span className="font-medium">Canon Search</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('validate');
                setValidationResults(null);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'validate'
                  ? 'bg-gradient-to-r from-teal-500 to-orange-500 text-white'
                  : `${softText} ${sidebarHover}`
              }`}
            >
              <FileCheck className="w-5 h-5" />
              <span className="font-medium">Script Validation</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('generate');
                setGenerationOutput(null);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'generate'
                  ? 'bg-gradient-to-r from-teal-500 to-orange-500 text-white'
                  : `${softText} ${sidebarHover}`
              }`}
            >
              <Sparkles className="w-5 h-5" />
              <span className="font-medium">Script Generation</span>
            </button>
          </nav>

          <div className={`mt-8 p-4 rounded-lg border ${subPanelBg}`}>
            <h3 className={`text-sm font-semibold mb-2 ${softText}`}>Demo Mode</h3>
            <p className={`text-xs ${mutedText}`}>
              Pre-loaded examples ready to run. Click examples to see SILOETT in action.
            </p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-8">
          {/* Canon Search Tab */}
          {activeTab === 'search' && (
            <div>
              <div className="mb-6">
                <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Canon Search
                </h2>
                <p className={mutedText}>Query your story universe with natural language. Get cited, traceable answers.</p>
              </div>

              <div className="mb-6">
                <div className={`${panelBg} rounded-lg p-4 border`}>
                  <input
                    type="text"
                    placeholder="Ask anything about your canon... (Demo: Click examples below)"
                    className={`w-full bg-transparent text-lg outline-none ${softText}`}
                    disabled
                  />
                </div>
              </div>

              <div className="mb-6">
                <h3 className={`text-sm font-semibold mb-3 ${mutedText}`}>EXAMPLE QUERIES - CLICK TO RUN:</h3>
                <div className="space-y-2">
                  {searchExamples.map((example) => (
                    <button
                      key={example.id}
                      onClick={() => runSearchExample(example)}
                      className={`w-full text-left p-4 rounded-lg border transition-all ${
                        selectedExample === example.id
                          ? 'bg-teal-500 bg-opacity-10 border-teal-500'
                          : `${panelBg} hover:scale-102`
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{example.query}</span>
                        <Play className="w-4 h-4" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {searchResults && (
                <div className={`${panelBg} rounded-lg p-6 animate-fadeIn border`}>
                  <div className="flex items-start gap-4 mb-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className={`text-lg font-semibold ${softText}`}>Answer</h3>
                        <span className="px-2 py-1 bg-green-500 bg-opacity-10 text-green-400 text-xs rounded-lg border border-green-500">
                          {searchResults.confidence}% Confidence
                        </span>
                      </div>
                      <p className={`${softText} leading-relaxed`}>{searchResults.answer}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <h4 className={`text-sm font-semibold mb-3 flex items-center gap-2 ${mutedText}`}>
                      <FileText className="w-4 h-4" />
                      SOURCE CITATIONS
                    </h4>
                    <div className="space-y-3">
                      {searchResults.citations.map((citation: any, idx: number) => (
                        <div key={idx} className={`${subPanelBg} rounded-lg p-4 border`}>
                          <div className="flex items-start justify-between mb-2">
                            <span className={`font-semibold ${accentText}`}>{citation.source}</span>
                            <span className={`text-xs ${mutedText}`}>
                              Page {citation.page}, Lines {citation.lines}
                            </span>
                          </div>
                          <p className={`text-sm ${mutedText} italic`}>"{citation.text}"</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Script Validation Tab */}
          {activeTab === 'validate' && (
            <div>
              <div className="mb-6">
                <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Script Validation
                </h2>
                <p className={mutedText}>Upload or paste a script to check for canon contradictions and inconsistencies.</p>
              </div>

              <div className="mb-6">
                <div className={`${panelBg} border-2 border-dashed rounded-lg p-8 text-center`}>
                  <Upload className={`w-12 h-12 mx-auto mb-3 ${mutedText}`} />
                  <p className={`${mutedText} mb-4`}>Upload script file or paste text</p>
                  <button
                    onClick={runValidation}
                    className="px-6 py-3 bg-gradient-to-r from-teal-500 to-orange-500 rounded-lg font-semibold flex items-center gap-2 mx-auto transition-colors text-white"
                  >
                    <Play className="w-5 h-5" />
                    Run Demo Validation
                  </button>
                </div>
              </div>

              {validationResults && (
                <div className="animate-fadeIn">
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="bg-red-500 bg-opacity-10 border border-red-500 rounded-lg p-4">
                      <div className="text-2xl font-bold text-red-400">{validationResults.summary.high}</div>
                      <div className={`text-sm ${mutedText}`}>High Severity</div>
                    </div>
                    <div className="bg-yellow-500 bg-opacity-10 border border-yellow-500 rounded-lg p-4">
                      <div className="text-2xl font-bold text-yellow-400">{validationResults.summary.medium}</div>
                      <div className={`text-sm ${mutedText}`}>Medium Severity</div>
                    </div>
                    <div className="bg-blue-500 bg-opacity-10 border border-blue-500 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-400">{validationResults.summary.low}</div>
                      <div className={`text-sm ${mutedText}`}>Low Severity</div>
                    </div>
                    <div className={`${subPanelBg} border rounded-lg p-4`}>
                      <div className={`text-2xl font-bold ${softText}`}>{validationResults.summary.total}</div>
                      <div className={`text-sm ${mutedText}`}>Total Issues</div>
                    </div>
                  </div>

                  <div className={`${panelBg} rounded-lg p-4 mb-6 border`}>
                    <h3 className={`font-semibold text-lg ${softText}`}>{validationResults.scriptTitle}</h3>
                  </div>

                  <div className="space-y-4">
                    {validationResults.issues.map((issue: any, idx: number) => (
                      <div
                        key={idx}
                        className={`rounded-lg p-6 border ${panelBg} ${
                          issue.severity === 'high'
                            ? 'border-red-500'
                            : issue.severity === 'medium'
                            ? 'border-yellow-500'
                            : 'border-blue-500'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          {issue.severity === 'high' ? (
                            <XCircle className="w-6 h-6 text-red-400 mt-1" />
                          ) : issue.severity === 'medium' ? (
                            <AlertCircle className="w-6 h-6 text-yellow-400 mt-1" />
                          ) : (
                            <AlertCircle className="w-6 h-6 text-blue-400 mt-1" />
                          )}
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span
                                className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                                  issue.severity === 'high'
                                    ? 'bg-red-500 bg-opacity-20 text-red-400'
                                    : issue.severity === 'medium'
                                    ? 'bg-yellow-500 bg-opacity-10 text-yellow-400'
                                    : 'bg-blue-500 bg-opacity-20 text-blue-400'
                                }`}
                              >
                                {issue.severity.toUpperCase()}
                              </span>
                              <span className={`${mutedText} text-sm`}>Line {issue.line}</span>
                              <span className={`${mutedText}`}>•</span>
                              <span className={`${mutedText} text-sm`}>{issue.type}</span>
                            </div>
                            <p className={`${softText} font-medium mb-2`}>{issue.issue}</p>
                            <div className={`${subPanelBg} rounded-lg p-3 mb-3 border`}>
                              <p className={`text-sm ${mutedText} mb-1`}>
                                <span className="text-red-400 font-semibold">Canon:</span> {issue.canon}
                              </p>
                              <p className={`text-xs ${mutedText} italic`}>{issue.citation}</p>
                            </div>
                            <div className="bg-green-500 bg-opacity-10 border border-green-500 rounded-lg p-3">
                              <p className="text-sm text-green-400">
                                <span className="font-semibold">Suggestion:</span> {issue.suggestion}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Script Generation Tab */}
          {activeTab === 'generate' && (
            <div>
              <div className="mb-6">
                <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Script Generation
                </h2>
                <p className={mutedText}>Describe a scene and generate canon-grounded content with full citations.</p>
              </div>

              <div className="mb-6">
                <div className={`${panelBg} rounded-lg p-4 mb-4 border`}>
                  <textarea
                    placeholder="Describe the scene you want to generate... (Demo: Click button below)"
                    className={`w-full h-24 bg-transparent outline-none ${softText} resize-none`}
                    disabled
                  />
                </div>
                <button
                  onClick={runGeneration}
                  className="px-6 py-3 bg-gradient-to-r from-teal-500 to-orange-500 rounded-lg font-semibold flex items-center gap-2 transition-colors text-white"
                >
                  <Sparkles className="w-5 h-5" />
                  Generate Demo Scene
                </button>
              </div>

              {generationOutput && (
                <div className="animate-fadeIn">
                  <div className="bg-blue-500 bg-opacity-10 border border-blue-500 rounded-lg p-4 mb-6">
                    <p className={`text-sm ${accentText}`}>
                      <span className="font-semibold">Prompt:</span> {generationOutput.prompt}
                    </p>
                  </div>

                  <div className={`${panelBg} rounded-lg p-6 mb-6 border`}>
                    <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${softText}`}>
                      <FileText className="w-5 h-5" />
                      Generated Scene
                    </h3>
                    <div className={`${isDark ? 'bg-gray-900' : 'bg-slate-100'} rounded-lg p-6 font-mono text-sm leading-relaxed whitespace-pre-wrap ${softText}`}>
                      {generationOutput.output}
                    </div>
                  </div>

                  <div className={`${panelBg} rounded-lg p-6 border`}>
                    <h4 className={`text-sm font-semibold mb-3 flex items-center gap-2 ${mutedText}`}>
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      CANON SOURCES USED
                    </h4>
                    <div className="space-y-2">
                      {generationOutput.citations.map((citation: string, idx: number) => (
                        <div key={idx} className={`flex items-center gap-2 text-sm ${mutedText}`}>
                          <ChevronRight className={`w-4 h-4 ${accentText}`} />
                          <span>{citation}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SiloettUiMockup;
