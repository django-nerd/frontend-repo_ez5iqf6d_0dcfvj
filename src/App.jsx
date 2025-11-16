import { useMemo, useState } from 'react'
import Crown from './components/icons/Crown'
import JesterHat from './components/icons/JesterHat'
import Scepter from './components/icons/Scepter'
import Mask from './components/icons/Mask'
import { Spade, Heart, Diamond, Club } from './components/icons/Suits'
import Bell from './components/icons/Bell'
import Starburst from './components/icons/Starburst'
import Lock from './components/icons/Lock'
import Hourglass from './components/icons/Hourglass'

// Royal Joker Design Tokens
const TOKENS = {
  colors: {
    gold: '#D4AF37',
    ivory: '#F6F2EA',
    ebony: '#0B0B0F',
    crimson: '#8B1E2D',
    purple: '#4B2A7B',
    sapphire: '#163A6B',
    emerald: '#0E8F76',
  },
  radii: [8, 12, 16, 24, 32],
  spacing: [4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
}

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <Crown className="w-6 h-6" />
        <h2 className="text-xl font-semibold tracking-wide text-[var(--ivory)]">{title}</h2>
      </div>
      <div className="bg-[rgba(246,242,234,0.06)]/60 backdrop-blur-sm border border-white/10 rounded-xl p-4">
        {children}
      </div>
    </section>
  )
}

function TokenSwatch({ name, value }) {
  const contrastOnIvory = useMemo(() => name !== 'ivory', [name])
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="w-20 h-12 rounded-md border border-white/10" style={{ background: value }} />
      <div className="text-xs text-[var(--ivory)]/80">{name} {value}</div>
      <div className="text-[10px] text-[var(--ivory)]/60">AA on ivory: {contrastOnIvory ? 'check' : '—'}</div>
    </div>
  )
}

function RJButton({
  children,
  variant = 'primary',
  size = 'md',
  state = 'default',
  icon: Icon,
  disabled,
  onClick,
}) {
  const base = 'inline-flex items-center justify-center font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ebony)] transition-all select-none';
  const sizes = {
    sm: 'h-10 min-w-[44px] text-sm px-4 rounded-md',
    md: 'h-12 min-w-[44px] text-base px-5 rounded-lg',
    lg: 'h-14 min-w-[44px] text-lg px-6 rounded-xl',
  }
  const variants = {
    primary: `text-[var(--ebony)] bg-[var(--gold)] hover:brightness-110 active:brightness-95 shadow-[0_6px_20px_rgba(212,175,55,0.35)] disabled:opacity-60 disabled:cursor-not-allowed`,
    secondary: `text-[var(--ivory)] border border-white/15 bg-white/5 hover:bg-white/10 active:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed`,
    danger: `text-[var(--ivory)] bg-[var(--crimson)]/90 hover:bg-[var(--crimson)] active:bg-[var(--crimson)]/80 disabled:opacity-50 disabled:cursor-not-allowed`,
  }

  const isLoading = state === 'loading'
  const isDisabled = disabled || state === 'disabled' || isLoading

  return (
    <button
      type="button"
      className={[base, sizes[size], variants[variant]].join(' ')}
      aria-disabled={isDisabled}
      disabled={isDisabled}
      onClick={onClick}
    >
      {isLoading && (
        <span className="mr-2 inline-flex">
          <Hourglass className="w-4 h-4 animate-pulse" />
        </span>
      )}
      {Icon && !isLoading && <Icon className="w-4 h-4 mr-2" />}
      {children}
    </button>
  )
}

function RJInput({ label, placeholder = '', disabled = false }) {
  return (
    <label className="flex flex-col gap-1 w-full">
      <span className="text-xs text-[var(--ivory)]/70">{label}</span>
      <input
        className="h-12 px-4 rounded-lg bg-white/5 border border-white/15 text-[var(--ivory)] placeholder:text-[var(--ivory)]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sapphire)]"
        placeholder={placeholder}
        disabled={disabled}
      />
    </label>
  )
}

function RJToggle({ checked, onChange }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`w-14 h-8 rounded-full p-1 transition-colors ${
        checked ? 'bg-[var(--emerald)]' : 'bg-white/10'
      } focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sapphire)]`}
    >
      <div className={`w-6 h-6 rounded-full bg-[var(--ivory)] shadow transition-transform ${
        checked ? 'translate-x-6' : 'translate-x-0'
      }`} />
    </button>
  )
}

function RJProgress({ value }) {
  return (
    <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
      <div
        className="h-full bg-[var(--gold)] shadow-[0_0_16px_rgba(212,175,55,0.5)]"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  )
}

function RJTabs({ tabs, value, onChange }) {
  return (
    <div className="inline-flex bg-white/5 border border-white/10 rounded-xl p-1">
      {tabs.map((t) => (
        <button
          key={t}
          className={`px-4 h-10 rounded-lg text-sm transition-all ${
            value === t
              ? 'bg-[var(--gold)] text-[var(--ebony)] shadow'
              : 'text-[var(--ivory)]/80 hover:bg-white/10'
          }`}
          onClick={() => onChange(t)}
        >
          {t}
        </button>
      ))}
    </div>
  )
}

function IconGrid() {
  const icons = [
    { name: 'Crown', C: Crown },
    { name: 'JesterHat', C: JesterHat },
    { name: 'Scepter', C: Scepter },
    { name: 'Mask', C: Mask },
    { name: 'Spade', C: Spade },
    { name: 'Heart', C: Heart },
    { name: 'Diamond', C: Diamond },
    { name: 'Club', C: Club },
    { name: 'Bell', C: Bell },
    { name: 'Starburst', C: Starburst },
    { name: 'Lock', C: Lock },
    { name: 'Hourglass', C: Hourglass },
  ]
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {icons.map(({ name, C }) => (
        <div key={name} className="flex flex-col items-center gap-2 p-3 rounded-lg border border-white/10 bg-white/5">
          <C className="w-9 h-9" />
          <span className="text-xs text-[var(--ivory)]/70">{name}</span>
        </div>
      ))}
    </div>
  )
}

export default function App() {
  const [tab, setTab] = useState('Buttons')
  const [toggle, setToggle] = useState(true)
  const [progress, setProgress] = useState(42)
  const [showModal, setShowModal] = useState(false)
  const [toast, setToast] = useState(null)

  // Expose CSS variables for tokens
  const rootStyle = {
    ['--gold']: TOKENS.colors.gold,
    ['--ivory']: TOKENS.colors.ivory,
    ['--ebony']: TOKENS.colors.ebony,
    ['--crimson']: TOKENS.colors.crimson,
    ['--purple']: TOKENS.colors.purple,
    ['--sapphire']: TOKENS.colors.sapphire,
    ['--emerald']: TOKENS.colors.emerald,
  }

  return (
    <div style={rootStyle} className="min-h-screen bg-[var(--ebony)] text-[var(--ivory)]">
      {/* Velvet/Gilded header */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-gradient-to-r from-[rgba(75,42,123,0.35)] via-[rgba(11,11,15,0.8)] to-[rgba(139,30,45,0.35)] backdrop-blur supports-[backdrop-filter]:backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Crown className="w-7 h-7" />
            <div className="leading-none">
              <div className="font-black tracking-wide">Royal Joker</div>
              <div className="text-xs text-[var(--ivory)]/70">Design System Preview</div>
            </div>
          </div>
          <RJTabs tabs={["Tokens","Icons","Buttons","Inputs","Cards"]} value={tab} onChange={setTab} />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {tab === 'Tokens' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Section title="Brand Colors">
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                {Object.entries(TOKENS.colors).map(([name, value]) => (
                  <TokenSwatch key={name} name={name} value={value} />
                ))}
              </div>
            </Section>
            <Section title="Typography">
              <div className="space-y-2">
                <div className="text-4xl font-serif tracking-tight">H1 – Royal Display Serif</div>
                <div className="text-2xl font-serif tracking-tight">H2 – Royal Display Serif</div>
                <div className="text-xl font-semibold">H3 – UI Sans</div>
                <div className="text-base">Body – Geometric Sans text sample across the velvet stage.</div>
                <div className="text-sm uppercase tracking-widest text-[var(--ivory)]/70">Overline – Small caps</div>
                <div className="text-xs text-[var(--ivory)]/70">Caption – Fine print for tooltips and labels.</div>
              </div>
            </Section>
            <Section title="Radii & Spacing">
              <div className="flex flex-wrap gap-4 items-end">
                {TOKENS.radii.map((r) => (
                  <div key={r} className="flex flex-col items-center gap-2">
                    <div className="w-20 h-12 bg-white/5 border border-white/10" style={{ borderRadius: r }} />
                    <span className="text-xs text-[var(--ivory)]/70">{r}px</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3 items-center">
                {TOKENS.spacing.map((s) => (
                  <div key={s} className="flex flex-col items-center gap-2">
                    <div className="h-1 bg-[var(--gold)]" style={{ width: s }} />
                    <span className="text-xs text-[var(--ivory)]/70">{s}</span>
                  </div>
                ))}
              </div>
            </Section>
            <Section title="Effects">
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-xl p-6 border border-white/10 bg-gradient-to-br from-[rgba(212,175,55,0.08)] to-transparent shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
                  <div className="text-sm mb-2">Glow/Gold</div>
                  <div className="w-full h-3 rounded-full bg-[var(--gold)] shadow-[0_0_24px_rgba(212,175,55,0.6)]" />
                </div>
                <div className="rounded-xl p-6 border border-white/10 bg-gradient-to-br from-[rgba(22,58,107,0.18)] to-transparent shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
                  <div className="text-sm mb-2">Glow/Sapphire</div>
                  <div className="w-full h-3 rounded-full bg-[var(--sapphire)] shadow-[0_0_24px_rgba(22,58,107,0.6)]" />
                </div>
              </div>
            </Section>
          </div>
        )}

        {tab === 'Icons' && (
          <Section title="Custom Vector Icons">
            <IconGrid />
          </Section>
        )}

        {tab === 'Buttons' && (
          <Section title="Buttons & Icon Buttons">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="text-sm text-[var(--ivory)]/80">Primary</div>
                <div className="flex flex-wrap gap-3">
                  <RJButton icon={Starburst}>Play</RJButton>
                  <RJButton icon={Bell} state="loading">Loading</RJButton>
                  <RJButton icon={Lock} state="disabled">Locked</RJButton>
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-sm text-[var(--ivory)]/80">Secondary</div>
                <div className="flex flex-wrap gap-3">
                  <RJButton variant="secondary" icon={Scepter}>Details</RJButton>
                  <RJButton variant="secondary" size="lg" icon={JesterHat}>Big CTA</RJButton>
                  <RJButton variant="secondary" size="sm">Small</RJButton>
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-sm text-[var(--ivory)]/80">Danger</div>
                <div className="flex flex-wrap gap-3">
                  <RJButton variant="danger" icon={Hourglass}>Timeout</RJButton>
                  <RJButton variant="danger" state="disabled">Disabled</RJButton>
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-sm text-[var(--ivory)]/80">Icon Buttons</div>
                <div className="flex flex-wrap gap-3">
                  {[Crown, JesterHat, Spade, Heart, Diamond, Club].map((I, idx) => (
                    <button key={idx} aria-label="icon" className="w-11 h-11 min-w-[44px] inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sapphire)]">
                      <I className="w-5 h-5" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        )}

        {tab === 'Inputs' && (
          <Section title="Inputs, Toggles, Progress">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <RJInput label="Username" placeholder="Enter handle" />
                <RJInput label="Password" placeholder="••••••••" />
                <div className="flex items-center gap-3">
                  <RJToggle checked={toggle} onChange={setToggle} />
                  <span className="text-sm text-[var(--ivory)]/80">Allow notifications</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-sm text-[var(--ivory)]/70">Progress</div>
                <RJProgress value={progress} />
                <div className="flex gap-2">
                  <RJButton variant="secondary" onClick={() => setProgress((p) => Math.max(0, p - 10))}>-10%</RJButton>
                  <RJButton onClick={() => setProgress((p) => Math.min(100, p + 10))}>+10%</RJButton>
                </div>
              </div>
            </div>
          </Section>
        )}

        {tab === 'Cards' && (
          <Section title="Cards & Overlays">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["Slots – Golden Reels","Black Diamond","Joker’s Vault"].map((title, idx) => (
                <div key={title} className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
                  <div className="h-28 bg-gradient-to-br from-[rgba(212,175,55,0.18)] via-[rgba(75,42,123,0.22)] to-[rgba(139,30,45,0.18)] relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {idx === 0 && <Starburst className="w-10 h-10" />}
                      {idx === 1 && <Diamond className="w-10 h-10" />}
                      {idx === 2 && <JesterHat className="w-10 h-10" />}
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{title}</h3>
                      <span className="text-xs text-[var(--ivory)]/70">Slots</span>
                    </div>
                    <RJProgress value={idx === 0 ? 72 : idx === 1 ? 35 : 90} />
                    <div className="flex items-center gap-2">
                      <RJButton size="sm" icon={Starburst}>Play</RJButton>
                      <RJButton size="sm" variant="secondary" icon={Scepter} onClick={() => setShowModal(true)}>Details</RJButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal & Toast demo */}
            <div className="mt-6 flex items-center gap-3">
              <RJButton icon={Crown} onClick={() => setShowModal(true)}>Open Modal</RJButton>
              <RJButton variant="secondary" icon={Bell} onClick={() => setToast('Mission complete! +250 coins')}>Show Toast</RJButton>
            </div>

            {showModal && (
              <div className="fixed inset-0 z-30 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/60" onClick={() => setShowModal(false)} />
                <div className="relative z-10 w-[min(520px,92vw)] rounded-2xl border border-white/15 bg-[rgba(11,11,15,0.9)] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
                  <div className="flex items-center gap-3 mb-3">
                    <Crown className="w-6 h-6" />
                    <h3 className="text-lg font-semibold">Big Win Rules</h3>
                  </div>
                  <p className="text-sm text-[var(--ivory)]/80 mb-4">Spin the gilded reels and align three crowns to trigger the Royal Jackpot. Wilds substitute all symbols. Max bet increases reward multiplier.</p>
                  <div className="flex items-center justify-end gap-3">
                    <RJButton variant="secondary" onClick={() => setShowModal(false)}>Close</RJButton>
                    <RJButton icon={Starburst}>Spin</RJButton>
                  </div>
                </div>
              </div>
            )}

            {toast && (
              <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30">
                <div className="flex items-center gap-3 rounded-xl px-4 py-3 bg-[rgba(22,58,107,0.95)] text-[var(--ivory)] shadow-[0_10px_40px_rgba(22,58,107,0.45)] border border-white/10">
                  <Bell className="w-5 h-5" />
                  <span className="text-sm">{toast}</span>
                  <button onClick={() => setToast(null)} className="ml-2 text-xs opacity-80 hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] rounded">Dismiss</button>
                </div>
              </div>
            )}
          </Section>
        )}
      </main>

      <footer className="py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 text-xs text-[var(--ivory)]/60">
          Royal Joker Design System • Accessible focus states • 44×44 hit targets • WCAG AA contrast-aware tokens
        </div>
      </footer>
    </div>
  )
}
