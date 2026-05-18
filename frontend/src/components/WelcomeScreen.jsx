/**
 * components/WelcomeScreen.jsx
 * Shown before the user sends any message — full hero with feature grid.
 */

import { Sparkles, Zap, Code2, FileText, Brain } from 'lucide-react'

const FEATURES = [
  { icon: <Code2 size={16} />, label: 'Code generation', desc: 'Any language, any framework' },
  { icon: <FileText size={16} />, label: 'Writing & editing', desc: 'Essays, emails, summaries' },
  { icon: <Brain size={16} />, label: 'Research & analysis', desc: 'Deep dives on any topic' },
  { icon: <Zap size={16} />, label: 'Instant answers', desc: 'Fast, accurate, up-to-date' },
]

export default function WelcomeScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-10 animate-fade-in">
      {/* Hero icon */}
      <div className="relative mb-6">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-nexus-500 to-nexus-800 flex items-center justify-center shadow-glow-md">
          <Sparkles size={36} className="text-white" />
        </div>
        <div className="absolute inset-0 rounded-3xl bg-nexus-500/20 blur-2xl -z-10" />
      </div>

      <h1 className="font-display text-3xl font-semibold text-white mb-2 text-center">
        How can I help you?
      </h1>
      <p className="text-slate-500 text-sm text-center max-w-xs">
        Powered by LLaMA 3 via Groq · Ultra-fast · Free
      </p>

      {/* Feature cards */}
      <div className="grid grid-cols-2 gap-3 mt-10 w-full max-w-sm">
        {FEATURES.map(({ icon, label, desc }) => (
          <div
            key={label}
            className="bg-surface-2 border border-slate-800 rounded-xl p-3.5 hover:border-nexus-800 transition-colors"
          >
            <div className="text-nexus-400 mb-2">{icon}</div>
            <p className="text-slate-200 text-xs font-medium">{label}</p>
            <p className="text-slate-600 text-xs mt-0.5">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
