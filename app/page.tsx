export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Education Tech
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Gamify Online Course Completion with Smart Rewards
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Track student progress in real-time, create personalized achievement systems and badges, and send AI-driven motivational nudges based on individual learning patterns.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $12/mo
        </a>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🏆</div>
            <h3 className="font-semibold text-white mb-1">Custom Achievements</h3>
            <p className="text-sm text-[#8b949e]">Design badges and milestones tailored to your course structure and student goals.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🤖</div>
            <h3 className="font-semibold text-white mb-1">AI Motivational Nudges</h3>
            <p className="text-sm text-[#8b949e]">Send personalized messages at the right moment based on each learner's behavior.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔗</div>
            <h3 className="font-semibold text-white mb-1">Platform Integrations</h3>
            <p className="text-sm text-[#8b949e]">Connect via webhooks and APIs to Teachable, Thinkific, Kajabi, and more.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited students tracked</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Custom badges &amp; achievements</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> AI motivational messaging</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Webhook &amp; API integrations</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Real-time progress dashboard</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which course platforms do you support?</h3>
            <p className="text-sm text-[#8b949e]">We integrate with Teachable, Thinkific, Kajabi, Podia, and any platform that supports webhooks or REST APIs. Custom integrations are available on request.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the AI personalization work?</h3>
            <p className="text-sm text-[#8b949e]">Our engine analyzes each student's learning pace, completion patterns, and engagement signals to send the right motivational message at the right time — automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. There are no long-term contracts. Cancel your subscription at any time from your billing dashboard with no penalties.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} Course Completion Gamification Engine. All rights reserved.
      </footer>
    </main>
  )
}
