export default function CrypLandingPage() {
  const features = [
    {
      title: 'Instant Alerts',
      text: 'Get notified the moment price levels break, momentum shifts, or opportunity shows up.',
      icon: '⚡',
    },
    {
      title: 'AI Market Insight',
      text: 'Understand what matters fast with simplified signal context and market summaries.',
      icon: '🧠',
    },
    {
      title: 'Telegram Native',
      text: 'Everything lands straight in Telegram so you can act fast without opening ten tabs.',
      icon: '📲',
    },
    {
      title: 'Trade Opportunities',
      text: 'Spot possible setups earlier with sharper signal delivery and faster market awareness.',
      icon: '📈',
    },
  ];

  const audience = [
    {
      title: 'Beginners',
      text: 'Start with clean alerts and simple insight instead of overwhelming dashboards.',
    },
    {
      title: 'Busy Traders',
      text: 'Perfect if you want to stay ahead without watching charts all day.',
    },
    {
      title: 'Serious Users',
      text: 'Unlock the full edge with premium alerts, deeper insights, and Pro access.',
    },
  ];

  const steps = [
    'Join the Cryp bot on Telegram',
    'Set alerts and watchlist preferences',
    'Upgrade to Pro for full access at 6 USDT',
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#040714] text-white selection:bg-blue-500/30">
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: .45; transform: scale(1); }
          50% { opacity: .9; transform: scale(1.08); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-fade-up { animation: fadeUp .8s ease-out both; }
        .animate-fade-up-2 { animation: fadeUp 1s ease-out .12s both; }
        .animate-fade-up-3 { animation: fadeUp 1.15s ease-out .22s both; }
        .float-orb { animation: floatY 7s ease-in-out infinite; }
        .pulse-glow { animation: pulseGlow 5s ease-in-out infinite; }
        .marquee-track { animation: marquee 24s linear infinite; }
      `}</style>

      <div className="pointer-events-none fixed inset-0">
        <div className="pulse-glow absolute left-[8%] top-24 h-56 w-56 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="float-orb absolute right-[10%] top-40 h-72 w-72 rounded-full bg-indigo-500/12 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-cyan-500/8 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#040714]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-400/25 bg-gradient-to-br from-blue-500/20 to-indigo-500/10 shadow-lg shadow-blue-500/10">
              <span className="text-lg">⚡</span>
            </div>
            <div>
              <div className="text-xl font-semibold tracking-tight">Cryp</div>
              <div className="text-xs text-white/45">Crypto intelligence on Telegram</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/65 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#how" className="transition hover:text-white">How it works</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
            <a href="#audience" className="transition hover:text-white">Who it&apos;s for</a>
          </nav>

          <a
            href="https://t.me/saffcrypbot"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-blue-400/20 bg-blue-500/90 px-5 py-3 text-sm font-semibold shadow-lg shadow-blue-600/20 transition hover:scale-[1.02] hover:bg-blue-400"
          >
            Join Telegram
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-20 pt-20 md:pb-28 md:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-white/[0.03] px-4 py-2 text-sm text-blue-300">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                Live on Telegram
              </div>

              <h1 className="animate-fade-up-2 mt-7 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Crypto signals with a <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">premium edge</span>.
              </h1>

              <p className="animate-fade-up-3 mt-7 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
                Cryp monitors the market 24/7 and delivers alerts, AI insights, and trade opportunities directly to Telegram. Most traders react too late. Cryp helps you move earlier.
              </p>

              <div className="animate-fade-up-3 mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://t.me/saffcrypbot"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-8 py-4 text-center text-base font-semibold shadow-2xl shadow-blue-600/20 transition hover:-translate-y-0.5 hover:shadow-blue-500/30"
                >
                  Start Free on Telegram
                </a>
                <a
                  href="#pricing"
                  className="rounded-full border border-white/12 bg-white/[0.03] px-8 py-4 text-center text-base font-semibold text-white/90 transition hover:bg-white/[0.06]"
                >
                  View Pro for 6 USDT
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/42">
                <div>Free to start</div>
                <div className="h-1 w-1 rounded-full bg-white/20" />
                <div>Telegram-native</div>
                <div className="h-1 w-1 rounded-full bg-white/20" />
                <div>Premium Pro at 6 USDT</div>
              </div>
            </div>

            <div className="relative animate-fade-up-2">
              <div className="float-orb absolute -left-6 -top-6 h-24 w-24 rounded-full bg-blue-500/12 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <div className="rounded-[1.5rem] border border-white/8 bg-[#060b1f] p-4">
                  <div className="flex items-center justify-between border-b border-white/8 pb-4">
                    <div>
                      <div className="text-sm font-medium text-white/85">Cryp Terminal</div>
                      <div className="mt-1 text-xs text-white/40">Live market signal preview</div>
                    </div>
                    <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                      Online
                    </div>
                  </div>

                  <div className="mt-4 space-y-4">
                    <div className="rounded-2xl border border-blue-400/12 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/55">BTC Alert</span>
                        <span className="text-blue-300">Triggered</span>
                      </div>
                      <div className="mt-3 text-2xl font-semibold">Breakout above resistance</div>
                      <div className="mt-2 text-sm leading-6 text-white/55">Momentum rising, volatility expanding, watch continuation.</div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                        <div className="text-xs uppercase tracking-[0.22em] text-white/35">Sentiment</div>
                        <div className="mt-3 text-3xl font-semibold text-cyan-300">Bullish</div>
                        <div className="mt-2 text-sm text-white/45">AI summary leaning risk-on.</div>
                      </div>
                      <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                        <div className="text-xs uppercase tracking-[0.22em] text-white/35">Pro Access</div>
                        <div className="mt-3 text-3xl font-semibold">6 USDT</div>
                        <div className="mt-2 text-sm text-white/45">Unlock premium signals and full access.</div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                      <div className="flex items-center justify-between text-sm text-white/55">
                        <span>Live feed</span>
                        <span>Telegram</span>
                      </div>
                      <div className="mt-4 space-y-3 text-sm text-white/75">
                        <div className="rounded-xl bg-white/[0.03] px-4 py-3">BTC crossed watch level. Market momentum increasing.</div>
                        <div className="rounded-xl bg-white/[0.03] px-4 py-3">ETH AI note: consolidation nearing decision point.</div>
                        <div className="rounded-xl bg-white/[0.03] px-4 py-3">Signal detected: possible continuation setup on high volume.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl overflow-hidden px-6 pb-10">
            <div className="rounded-full border border-white/8 bg-white/[0.03] py-3">
              <div className="marquee-track flex min-w-max gap-12 px-8 text-sm uppercase tracking-[0.2em] text-white/40">
                {[
                  'Alerts', 'AI Insight', 'Signals', 'Telegram Native', 'Fast Setup', '6 USDT Pro',
                  'Alerts', 'AI Insight', 'Signals', 'Telegram Native', 'Fast Setup', '6 USDT Pro',
                ].map((item, index) => (
                  <span key={`${item}-${index}`}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Features</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Designed to feel fast, sharp, and unfair.</h2>
            <p className="mt-5 text-lg leading-8 text-white/62">
              Cryp is built to reduce noise and surface what matters so you can move with more confidence and less emotion.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((item) => (
              <div
                key={item.title}
                className="group rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.05]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-xl transition group-hover:scale-105">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/60">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how" className="border-y border-white/8 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">How it works</div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">From setup to signal in minutes.</h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-white/62">
                  No complicated dashboard. No learning curve. Join, configure your alerts, and let Cryp do the monitoring for you.
                </p>
              </div>
              <div className="grid gap-4">
                {steps.map((step, index) => (
                  <div key={step} className="rounded-[1.5rem] border border-white/8 bg-[#0b1023] p-6">
                    <div className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">Step {index + 1}</div>
                    <div className="text-2xl font-medium text-white/92">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Pricing</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Simple access. No friction.</h2>
            <p className="mt-5 text-lg leading-8 text-white/62">Start free, then unlock full access with Pro for just 6 USDT.</p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-8 md:p-10">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-white/40">Free</div>
              <div className="mt-4 text-5xl font-semibold">$0</div>
              <p className="mt-4 max-w-md leading-7 text-white/60">Get started with the essentials and see how Cryp fits your workflow.</p>
              <ul className="mt-8 space-y-4 text-white/82">
                <li>• Basic alerts</li>
                <li>• Limited access</li>
                <li>• Standard Telegram experience</li>
                <li>• Fast onboarding</li>
              </ul>
              <a
                href="https://t.me/saffcrypbot"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block rounded-full border border-white/12 px-6 py-3 font-semibold transition hover:bg-white/[0.05]"
              >
                Start Free
              </a>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gradient-to-b from-blue-500/12 via-indigo-500/10 to-cyan-500/10 p-8 shadow-2xl shadow-blue-900/20 md:p-10">
              <div className="absolute right-5 top-5 rounded-full border border-blue-300/25 bg-blue-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                Most Popular
              </div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">Cryp Pro</div>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-5xl font-semibold">6 USDT</span>
                <span className="pb-1 text-white/50">one-time for now</span>
              </div>
              <p className="mt-4 max-w-md leading-7 text-white/72">Unlock premium signals, deeper AI insight, faster alerts, and the full Cryp experience.</p>
              <ul className="mt-8 space-y-4 text-white/90">
                <li>• Premium signals</li>
                <li>• Faster alerts</li>
                <li>• Full access to premium features</li>
                <li>• Better decision support</li>
                <li>• Built for serious users</li>
              </ul>
              <a
                href="https://t.me/+HCrmHvpLg_kzMGY0"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 font-semibold shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5"
              >
                Unlock Pro
              </a>
            </div>
          </div>
        </section>

        <section id="audience" className="border-t border-white/8 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Who it&apos;s for</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Built for traders who want more edge, less noise.</h2>
              <p className="mt-5 text-lg leading-8 text-white/62">
                Whether you are just getting started or already active in the market, Cryp is built to keep you informed and ready.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {audience.map((item) => (
                <div key={item.title} className="rounded-[1.75rem] border border-white/8 bg-[#0b1023] p-8 transition hover:-translate-y-1 hover:border-blue-400/20">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-white/60">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-r from-[#0a1433] via-[#0d1538] to-[#101a43] p-10 text-center shadow-[0_20px_80px_rgba(0,0,0,0.45)] md:p-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_35%)]" />
            <div className="relative">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Ready to start</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Stop reacting late.</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/68">
                Join Cryp today and get the speed, clarity, and signal flow you need directly inside Telegram.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="https://t.me/saffcrypbot"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-8 py-4 font-semibold shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5"
                >
                  Start Free
                </a>
                <a
                  href="https://t.me/+HCrmHvpLg_kzMGY0"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/12 bg-white/[0.03] px-8 py-4 font-semibold transition hover:bg-white/[0.06]"
                >
                  Get Pro for 6 USDT
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
