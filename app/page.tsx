export default function CrypLandingPage() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-xl font-bold text-blue-400">⚡</div>
            <div>
              <div className="text-xl font-semibold tracking-tight">Cryp</div>
              <div className="text-xs text-white/50">Crypto Intelligence on Telegram</div>
            </div>
          </div>

          <nav className="hidden gap-8 text-sm text-white/70 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
            <a href="#audience" className="transition hover:text-white">Who It&apos;s For</a>
          </nav>

          <a
            href="https://t.me/saffcrypbot"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
          >
            Join Telegram
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.20),transparent_35%),radial-gradient(circle_at_bottom,rgba(99,102,241,0.18),transparent_30%)]" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                Live on Telegram
              </div>
              <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                Trade with <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">clarity</span>, not emotion.
              </h1>
              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/70 md:text-2xl">
                Cryp monitors the crypto market 24/7 and alerts you before the move happens. Get real-time price alerts, AI insights, market snapshots, and trade opportunities directly on Telegram.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="https://t.me/saffcrypbot"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-blue-600 px-8 py-4 text-base font-semibold shadow-xl shadow-blue-600/20 transition hover:bg-blue-500"
                >
                  Start Free on Telegram
                </a>
                <a
                  href="#features"
                  className="rounded-full border border-white/15 px-8 py-4 text-base font-semibold text-white/85 transition hover:border-white/30 hover:bg-white/5"
                >
                  See Features
                </a>
              </div>

              <div className="mt-8 text-sm text-white/45">Built for beginners. Powerful enough for serious traders.</div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Features</div>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">Everything you need to stay ahead of the market.</h2>
            <p className="mt-5 text-lg text-white/65">
              No endless chart watching. No reacting late. Cryp gives you the information that matters in one simple Telegram experience.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: 'Real-Time Alerts',
                text: 'Set price alerts and get notified instantly when the market moves.',
              },
              {
                title: 'AI Market Insights',
                text: 'Quick, digestible coin insights without spending hours researching.',
              },
              {
                title: 'News + Summaries',
                text: 'Stay updated with the biggest crypto news, simplified into useful takeaways.',
              },
              {
                title: 'Signals & Opportunities',
                text: 'Spot trade setups and momentum faster with premium market intelligence.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/20">
                <div className="mb-4 text-2xl">⚡</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/65">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="grid gap-8 md:grid-cols-4">
              {[
                'Never miss a breakout',
                'Trade with data, not emotion',
                'Save hours of research',
                'Stay ahead of market moves',
              ].map((text) => (
                <div key={text} className="rounded-2xl border border-white/10 bg-[#0b1124] p-6 text-center text-lg font-medium text-white/85">
                  {text}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Pricing</div>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">Start free. Upgrade when you&apos;re ready.</h2>
            <p className="mt-5 text-lg text-white/65">Use Cryp for free, or unlock the full experience with Cryp Pro.</p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">Free</div>
              <h3 className="mt-3 text-3xl font-bold">R0</h3>
              <p className="mt-3 text-white/60">Perfect for trying Cryp and exploring the basics.</p>
              <ul className="mt-8 space-y-4 text-white/80">
                <li>• Up to 2 alerts</li>
                <li>• Basic market tools</li>
                <li>• Standard features</li>
                <li>• Instant access on Telegram</li>
              </ul>
              <a
                href="https://t.me/saffcrypbot"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block rounded-full border border-white/15 px-6 py-3 font-semibold transition hover:bg-white/5"
              >
                Start Free
              </a>
            </div>

            <div className="relative rounded-3xl border border-blue-500/30 bg-gradient-to-b from-blue-500/10 to-indigo-500/10 p-8 shadow-2xl shadow-blue-900/20">
              <div className="absolute right-6 top-6 rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                Most Popular
              </div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Cryp Pro</div>
              <h3 className="mt-3 text-3xl font-bold">R99<span className="text-lg font-medium text-white/55">/month</span></h3>
              <p className="mt-3 text-white/75">Serious traders use Pro.</p>
              <ul className="mt-8 space-y-4 text-white/90">
                <li>• Unlimited alerts</li>
                <li>• Premium signals</li>
                <li>• Advanced analysis</li>
                <li>• Faster updates</li>
                <li>• Full access to premium features</li>
              </ul>
              <a
                href="https://t.me/+HCrmHvpLg_kzMGY0"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block rounded-full bg-blue-600 px-6 py-3 font-semibold shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
              >
                Explore Pro
              </a>
            </div>
          </div>
        </section>

        <section id="audience" className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Who it&apos;s for</div>
              <h2 className="mt-4 text-3xl font-bold md:text-5xl">Built for traders who want an edge.</h2>
              <p className="mt-5 text-lg text-white/65">
                Whether you&apos;re new to crypto or already deep in the market, Cryp helps you move faster and with more confidence.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: 'Beginners',
                  text: 'Simple tools and fast insights without the overwhelm.',
                },
                {
                  title: 'Busy Traders',
                  text: 'Perfect if you do not have time to stare at charts all day.',
                },
                {
                  title: 'Serious Users',
                  text: 'Unlock more power, more speed, and more opportunity with Pro.',
                },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-[#0b1124] p-8">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-white/65">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-blue-600/15 to-indigo-600/15 p-10 text-center shadow-2xl shadow-black/20 md:p-14">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Get started</div>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">Stop reacting. Start anticipating.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">
              Join Cryp and get smarter crypto alerts, insights, and signals delivered straight to Telegram.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://t.me/saffcrypbot"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-blue-600 px-8 py-4 font-semibold shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
              >
                Start Free
              </a>
              <a
                href="https://t.me/+HCrmHvpLg_kzMGY0"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-8 py-4 font-semibold transition hover:bg-white/5"
              >
                View Pro
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
