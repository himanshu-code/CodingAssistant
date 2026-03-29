'use client';

import { useState } from "react";
import { Header } from "@/components/Header";
import { Tabs } from "@/components/Tabs";
import { Badge } from "@/components/Badge";
import { Input } from "@/components/Input";
import { Accordion } from "@/components/Accordion";
import { MobileNav } from "@/components/MobileNav";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Modal } from "@/components/Modal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-1 w-full max-w-7xl mx-auto pt-28 pb-20 px-8">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Icon name="auto_awesome" className="text-primary" size="xl" fill />
            <span className="text-[11px] uppercase tracking-[0.3em] text-outline">Indigo Syntax Design System</span>
          </div>
          <h1 className="text-6xl font-bold tracking-tight text-on-background mb-4" style={{ letterSpacing: '-0.02em' }}>
            The Obsidian <span className="text-primary">Architect</span>
          </h1>
          <p className="text-on-surface-variant max-w-2xl text-lg font-light leading-relaxed">
            Complete component library with Material Symbols icons, Indigo palette, and the "No-Line" surface layering rule.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* ── Buttons ──────────────────────────────────────────── */}
          <div className="md:col-span-12 bg-surface-container-low rounded-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Icon name="smart_button" className="text-primary" size="md" />
                <h2 className="text-2xl font-semibold text-primary">Buttons</h2>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-outline">All Variants</span>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-outline mb-3">Button Variants</p>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="primary" leadingIcon="rocket_launch">Deploy</Button>
                  <Button variant="primary" loading>Processing</Button>
                  <Button variant="secondary" leadingIcon="fork_right">Fork</Button>
                  <Button variant="tertiary" trailingIcon="chevron_right">View diff</Button>
                  <Button variant="destructive" leadingIcon="delete_forever">Delete branch</Button>
                  <Button variant="primary" leadingIcon="lock" disabled>Protected</Button>
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-outline mb-3">Button Sizes</p>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="primary" size="sm" leadingIcon="add">New file</Button>
                  <Button variant="primary" size="md" leadingIcon="commit">Commit</Button>
                  <Button variant="primary" size="lg" leadingIcon="merge_type">Merge PR</Button>
                </div>
              </div>
            </div>
          </div>

          {/* ── Tabs ─────────────────────────────────────────────── */}
          <div className="md:col-span-8 bg-surface-container-low rounded-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Icon name="tab" className="text-primary" size="md" />
                <h2 className="text-2xl font-semibold text-primary">Content Switchers</h2>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-outline">Tabs</span>
            </div>
            <Tabs
              tabs={[
                { id: 'workspace', label: 'Workspace' },
                { id: 'git', label: 'Git Diff' },
                { id: 'resources', label: 'Resources' },
                { id: 'metrics', label: 'Metrics' },
              ]}
              defaultOpen="workspace"
            />
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-surface-container p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="terminal" className="text-primary" size="md" />
                  <p className="text-sm font-bold">Terminal Preview</p>
                </div>
                <p className="text-on-surface-variant text-xs font-mono opacity-60">npm run architecture:deploy --prod</p>
              </div>
              <div className="bg-surface-container p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="database" className="text-primary" size="md" />
                  <p className="text-sm font-bold">State Registry</p>
                </div>
                <p className="text-on-surface-variant text-xs font-mono opacity-60">Redux: IDLE (v2.4.1)</p>
              </div>
            </div>
          </div>

          {/* ── Badges ───────────────────────────────────────────── */}
          <div className="md:col-span-4 bg-surface-container-high rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="label" className="text-primary" size="md" />
              <h3 className="text-xl font-semibold text-on-surface">Tags & Status</h3>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-outline mb-3">System Priority</p>
                <div className="flex flex-wrap gap-2">
                  <Badge label="CRITICAL" variant="critical" />
                  <Badge label="WARNING" variant="warning" />
                  <Badge label="STABLE" variant="stable" />
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-outline mb-3">Language Tags</p>
                <div className="flex flex-wrap gap-2">
                  <Badge label="TypeScript" variant="language" />
                  <Badge label="Python" variant="outline" />
                  <Badge label="Rust" variant="outline" />
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-outline mb-3">Chips</p>
                <div className="flex flex-wrap gap-2">
                  <Badge label="AI Refactor" variant="chip" />
                  <Badge label="Active" variant="chip" />
                </div>
              </div>
            </div>
          </div>

          {/* ── Inputs ───────────────────────────────────────────── */}
          <div className="md:col-span-6 bg-surface-container rounded-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Icon name="input" className="text-primary" size="md" />
                <h3 className="text-xl font-semibold text-on-surface">Input States</h3>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-outline">Forms</span>
            </div>
            <div className="space-y-6">
              <Input label="Default State" placeholder="Enter service ID..." />
              <Input label="With Icon" icon="search" placeholder="Search components..." />
              <Input label="Error State" placeholder="Obsidian_Node_01" error="Connection refused — check your network." />
            </div>
          </div>

          {/* ── Accordions ───────────────────────────────────────── */}
          <div className="md:col-span-6 bg-surface-container-low rounded-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Icon name="expand_circle_down" className="text-primary" size="md" />
                <h3 className="text-xl font-semibold text-on-surface">Accordions</h3>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-outline">Disclosures</span>
            </div>
            <div className="space-y-3">
              <Accordion title="Expanded View" defaultExpanded>
                Active state uses the primary accent on the left border per the Indigo Syntax spec.
              </Accordion>
              <Accordion title="Configuration Hooks">
                Environment variable mapping settings and hook configuration options.
              </Accordion>
              <Accordion title="Runtime Dependencies">
                Package resolution details and dependency graph visualization.
              </Accordion>
            </div>
          </div>

          {/* ── Modal Demo ───────────────────────────────────────── */}
          <div className="md:col-span-6 bg-surface-container rounded-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Icon name="open_in_new" className="text-primary" size="md" />
                <h3 className="text-xl font-semibold text-on-surface">Modal</h3>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-outline">Overlay</span>
            </div>
            <p className="text-on-surface-variant text-sm mb-6">
              Glassmorphic overlay — 70% surface-dim + 40px blur — with a close icon (<code className="font-mono text-xs text-secondary">close</code>) and primary CTA button.
            </p>
            <Button variant="primary" leadingIcon="open_in_full" onClick={() => setModalOpen(true)}>
              Open Modal
            </Button>
          </div>

          {/* ── Icon Catalogue ───────────────────────────────────── */}
          <div className="md:col-span-6 bg-surface-container-high rounded-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Icon name="category" className="text-primary" size="md" />
                <h3 className="text-xl font-semibold text-on-surface">Material Symbols</h3>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3">
              {[
                'code', 'terminal', 'bug_report', 'merge_type',
                'fork_right', 'commit', 'auto_awesome', 'database',
                'cloud_upload', 'security', 'insights', 'rocket_launch',
              ].map((name) => (
                <div key={name} className="flex flex-col items-center gap-2 p-3 rounded-lg bg-surface-container hover:bg-surface-container-highest transition-colors group cursor-default">
                  <Icon name={name} className="text-outline group-hover:text-primary transition-colors" size="lg" />
                  <span className="text-[8px] uppercase tracking-wider text-outline/60 group-hover:text-outline font-mono text-center leading-tight">{name.replace('_', ' ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── AI Response Block ────────────────────────────────── */}
          <div className="md:col-span-12">
            <div className="border-l-4 border-tertiary bg-surface-variant/40 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Icon name="auto_awesome" className="text-tertiary mt-0.5" size="lg" fill />
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest text-tertiary mb-2 font-medium">AI Response Block</p>
                  <p className="text-on-surface text-sm leading-relaxed">
                    To migrate <code className="font-mono text-secondary bg-surface-container px-1.5 py-0.5 rounded text-xs">UserDashboard</code> to React Server Components, separate data fetching from client interactivity using <code className="font-mono text-secondary bg-surface-container px-1.5 py-0.5 rounded text-xs">async/await</code> at the component level.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Button variant="secondary" size="sm" leadingIcon="content_copy">Copy</Button>
                    <Button variant="tertiary" size="sm" leadingIcon="thumb_up">Helpful</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <MobileNav items={[
        { icon: 'grid_view', label: 'Library', isActive: true },
        { icon: 'history', label: 'Recent' },
        { icon: 'layers', label: 'Assets' },
      ]} />

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Confirm Deployment"
        primaryAction={{ label: 'Deploy to Prod', icon: 'rocket_launch', onClick: () => setModalOpen(false) }}
        secondaryAction={{ label: 'Cancel', onClick: () => setModalOpen(false) }}
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-4 rounded-lg bg-surface-container">
            <Icon name="info" className="text-primary" size="md" />
            <div>
              <p className="text-sm font-semibold text-on-surface mb-0.5">Production environment</p>
              <p className="text-xs text-on-surface-variant">3 services affected · Est. 2 min downtime</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            This will deploy branch <code className="font-mono text-secondary bg-surface-container px-1.5 py-0.5 rounded text-xs">feat/ai-context-v2</code> to production. Runtime checks will run automatically.
          </p>
        </div>
      </Modal>
    </div>
  );
}
