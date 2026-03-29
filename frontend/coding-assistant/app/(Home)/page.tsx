import React from 'react';
import { Icon } from '../../components/Icon';
import Link from 'next/link';

// ─── Sub-components ──────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50" style={{ background: 'rgba(11,19,38,0.85)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(70,69,85,0.15)' }}>
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
        <div className="text-xl font-bold tracking-tighter text-primary">DevMate AI</div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-primary font-semibold border-b-2 border-primary pb-0.5">Features</a>
          <a href="#demo" className="text-[#c7c4d8] hover:text-white transition-colors">Demo</a>
          <a href="#pricing" className="text-[#c7c4d8] hover:text-white transition-colors">Pricing</a>
          <a href="#docs" className="text-[#c7c4d8] hover:text-white transition-colors">Docs</a>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="px-5 py-2 text-sm font-medium text-[#c7c4d8] hover:text-white transition-colors">
            Sign In
          </Link>
          <Link href="/chat" className="px-6 py-2.5 bg-gradient-to-br from-primary to-primary-container text-on-primary text-sm font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-transform">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

function HeroTerminal() {
  return (
    <div className="relative z-10 lg:ml-auto w-full max-w-2xl">
      <div
        className="border border-outline-variant/15 rounded-xl shadow-2xl overflow-hidden p-1"
        style={{ background: 'rgba(45,52,73,0.6)', backdropFilter: 'blur(24px)' }}
      >
        <div className="bg-surface-container-lowest rounded-lg p-6 font-mono text-sm">
          {/* Window chrome dots */}
          <div className="flex items-center gap-2 mb-8 opacity-40">
            <div className="w-3 h-3 rounded-full bg-error" />
            <div className="w-3 h-3 rounded-full bg-tertiary" />
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="ml-4 text-xs text-on-surface-variant">devmate-terminal — zsh</span>
          </div>

          <div className="space-y-6">
            {/* User prompt */}
            <div className="flex gap-4">
              <span className="text-primary-container shrink-0 select-none">❯</span>
              <div className="text-on-surface">Help me refactor this React component to use Tailwind CSS and Framer Motion.</div>
            </div>
            {/* AI response block */}
            <div className="bg-surface-container p-4 rounded-lg border-l-4 border-primary">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="smart_toy" className="text-primary" size="sm" />
                <span className="text-xs font-bold text-primary tracking-widest uppercase">DevMate AI</span>
              </div>
              <div className="text-on-surface-variant leading-relaxed text-xs">
                Refactoring completed. I&apos;ve optimised the{' '}
                <code className="text-primary">Card.tsx</code> component.
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Removed 140 lines of CSS-in-JS</li>
                  <li>Added responsive utility classes</li>
                  <li>Implemented stagger children animations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Glow blob */}
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container-high text-primary text-[10px] font-bold tracking-widest uppercase mb-6 border border-outline-variant/15">
            V2.0 NOW LIVE
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6" style={{ letterSpacing: '-0.02em' }}>
            Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
              AI Developer
            </span>
            {' '}Assistant
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-xl">
            Explain code, debug errors, and generate production-ready UI components in seconds.
            Built for the modern engineer who values precision.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
              Get Started Free
            </button>
            <button
              className="px-8 py-4 font-bold rounded-xl border border-outline-variant/20 text-white hover:bg-surface-container-high/60 active:scale-95 transition-all"
              style={{ background: 'rgba(34,42,61,0.4)', backdropFilter: 'blur(12px)' }}
            >
              Try Demo
            </button>
          </div>
        </div>

        <HeroTerminal />
      </div>
    </section>
  );
}

const features = [
  { icon: 'description', title: 'Code Explanation', desc: 'Complex logic decoded into human-readable narratives in seconds.' },
  { icon: 'bug_report', title: 'Debugging Assistant', desc: 'Trace stack overflows and memory leaks with intelligent agent insight.' },
  { icon: 'grid_view', title: 'UI Generation', desc: 'From prompt to Tailwind. Generate accessible, modular UI kits instantly.' },
  { icon: 'memory', title: 'Smart AI Agents', desc: 'Dedicated agents for backend, frontend, and DevOps orchestration.' },
];

function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Architectural Precision</h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-surface-container p-8 rounded-xl transition-all duration-300 hover:bg-surface-container-high flex flex-col items-start gap-6"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary group-hover:bg-primary-container/30 transition-colors">
                <Icon name={f.icon} size="md" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <section id="demo" className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left copy */}
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-bold text-white mb-6">Designed for Focus</h2>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              The DevMate interface is more than just a chat. It&apos;s a high-performance IDE companion
              that understands context, types, and project structure.
            </p>
            <ul className="space-y-4">
              {['Context-aware repository analysis', 'Multi-file editing workflows', 'Direct git-branch integration'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-primary">
                  <Icon name="check_circle" size="sm" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right mockup */}
          <div className="lg:col-span-8">
            <div
              className="border border-outline-variant/20 rounded-xl shadow-2xl overflow-hidden aspect-video relative"
              style={{ background: 'rgba(45,52,73,0.6)', backdropFilter: 'blur(24px)' }}
            >
              {/* Sidebar */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-surface-container-lowest border-r border-outline-variant/10 flex flex-col items-center py-6 gap-8">
                <Icon name="chat_bubble" className="text-primary" size="md" />
                <Icon name="folder" className="text-outline" size="md" />
                <Icon name="history" className="text-outline" size="md" />
                <div className="mt-auto">
                  <Icon name="settings" className="text-outline" size="md" />
                </div>
              </div>

              {/* Content */}
              <div className="ml-16 h-full flex flex-col">
                <div className="h-12 border-b border-outline-variant/10 flex items-center px-6 justify-between">
                  <span className="text-xs font-bold tracking-widest text-on-surface-variant uppercase">Interactive Workspace</span>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary-container" />
                    <div className="w-2 h-2 rounded-full bg-primary-container opacity-40" />
                  </div>
                </div>

                <div className="flex-grow p-6 overflow-y-auto">
                  <div className="space-y-6 max-w-xl">
                    {/* User message */}
                    <div className="bg-surface-container-high px-4 py-3 rounded-lg rounded-tl-none self-start text-sm text-on-surface max-w-max">
                      Generate a dark-mode card component using Tailwind.
                    </div>

                    {/* AI response */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                          <Icon name="auto_awesome" className="text-on-primary" size="sm" />
                        </div>
                        <span className="text-[10px] font-bold tracking-widest text-primary uppercase">Assistant</span>
                      </div>
                      <div className="bg-surface-container-lowest p-4 rounded-lg border border-primary/20 font-mono text-xs text-secondary leading-relaxed">
                        <span className="text-outline">const </span><span className="text-primary">Card</span> = () =&gt; (<br />
                        &nbsp;&nbsp;&lt;<span className="text-primary-container">div</span> <span className="text-primary">className</span>=&quot;bg-surface p-6 rounded-xl&quot;&gt;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-primary-container">h3</span>&gt;The Digital Curator&lt;/<span className="text-primary-container">h3</span>&gt;<br />
                        &nbsp;&nbsp;&lt;/<span className="text-primary-container">div</span>&gt;<br />
                        );
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input bar */}
                <div className="p-4 border-t border-outline-variant/10">
                  <div className="bg-surface-container-low border border-outline-variant/20 rounded-lg h-12 flex items-center px-4 gap-3">
                    <Icon name="attach_file" className="text-outline" size="sm" />
                    <span className="text-sm text-outline flex-grow">Ask anything or drag code snippets here...</span>
                    <Icon name="send" className="text-primary" size="sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: 'help_outline', label: 'Ask', desc: 'Paste complex code or describe the component you need to build.' },
  { icon: 'cognition', label: 'AI Agent', desc: 'Specialized agents analyze context and architectural patterns.', highlighted: true },
  { icon: 'check_circle', label: 'Result', desc: 'Receive optimized code blocks, refactors, or complete UI components.' },
];

function HowItWorksSection() {
  return (
    <section className="py-24 px-6 bg-surface-container-lowest relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Workflow Accelerated</h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">From idea to implementation in three streamlined steps.</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative">
        {/* Connector line */}
        <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />

        {steps.map((step) => (
          <div key={step.label} className="flex flex-col items-center text-center">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-8 relative z-10 ${step.highlighted
              ? 'bg-surface-container border border-primary/30 shadow-[0_0_30px_rgba(75,77,216,0.2)]'
              : 'bg-surface-container border border-outline-variant/10 shadow-xl'
              }`}>
              <Icon name={step.icon} className="text-primary" size="xl" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">{step.label}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-32 px-6 bg-surface">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-surface-container to-surface-container-lowest rounded-2xl p-12 text-center border border-outline-variant/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full translate-y-1/2 pointer-events-none" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 relative z-10">
          Ready to build faster?
        </h2>
        <p className="text-on-surface-variant text-lg max-w-xl mx-auto mb-12 relative z-10">
          Join 50,000+ developers leveraging AI to skip the boilerplate and ship quality software.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
          <Link href="/login" className="px-10 py-5 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-xl shadow-2xl shadow-primary/30 hover:scale-[1.03] active:scale-95 transition-all">
            Create Free Account
          </Link>
          {/* <button
            className="px-10 py-5 font-bold rounded-xl border border-outline-variant/20 text-white hover:bg-surface-container-high/60 active:scale-95 transition-all"
            style={{ background: 'rgba(34,42,61,0.4)', backdropFilter: 'blur(12px)' }}
          >
            Talk to Sales
          </button> */}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const productLinks = ['Features', 'API', 'Pricing'];
  const resourceLinks = ['Docs', 'Status', 'Changelog'];
  const companyLinks = ['Privacy Policy', 'Terms of Service'];
  const connectLinks = ['Twitter', 'GitHub'];

  return (
    <footer className="w-full py-12 px-6" style={{ background: '#0b1326', borderTop: '1px solid rgba(70,69,85,0.15)' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <div className="text-lg font-bold text-primary mb-4">DevMate AI</div>
          <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
            The intelligence layer for your development stack. Curating the future of engineering.
          </p>
          <div className="mt-8 text-xs text-slate-500">
            © 2026 DevMate AI. Built for the digital curator.
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: 'Product', links: productLinks },
            { label: 'Resources', links: resourceLinks },
            { label: 'Company', links: companyLinks },
            { label: 'Connect', links: connectLinks },
          ].map(({ label, links }) => (
            <div key={label} className="flex flex-col gap-4">
              <span className="text-on-surface text-[10px] font-bold tracking-widest uppercase">{label}</span>
              {links.map((link) => (
                <a key={link} href="#" className="text-slate-500 hover:text-primary transition-colors text-xs">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-on-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </div>
  );
}