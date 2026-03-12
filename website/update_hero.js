const fs = require('fs');
const path = require('path');

const targetFile = 'd:\\Antigravity\\Numero UNO\\website\\src\\app\\page.js';
const content = fs.readFileSync(targetFile, 'utf8');
const lines = content.split('\n');

const startIdx = 98; // line 99 is index 98
const endIdx = 309; // line 309 is index 308

const newHeroContent = `        {/* ═══════════════════════════════════════════════════
          HERO SECTION
        ═══════════════════════════════════════════════════ */}
        <section 
          className="relative flex flex-col items-center justify-center px-6 lg:px-12 transition-all w-full"
          style={{
            paddingTop: "clamp(112px, 15vw, 160px)",
            paddingBottom: "clamp(70px, 10vw, 100px)",
            minHeight: "100vh",
            background: \`
              radial-gradient(ellipse 60% 50% at 50% 40%, rgba(59,130,246,0.1) 0%, transparent 65%),
              radial-gradient(ellipse 40% 30% at 50% 60%, rgba(99,102,241,0.06) 0%, transparent 55%),
              #080B12
            \`
          }}
        >
          {/* Noise Overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay"
            style={{
              backgroundImage: \`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")\`
            }} 
          />
          
          <div className="w-full relative z-10 flex flex-col items-center text-center mx-auto" style={{ maxWidth: "780px" }}>
            
            <div className="inline-flex items-center gap-2 bg-blue/10 border border-blue/30 rounded-full px-4 py-1.5 text-[13px] text-blue small-label mx-auto" style={{ marginBottom: "24px" }}>
              <span className="w-1.5 h-1.5 bg-blue rounded-full animate-pulse" />
              Digital Growth Agency · Bangalore
            </div>

            <h1 className="hero-h1 text-[clamp(36px,8vw,52px)] md:text-[clamp(48px,6vw,88px)] font-bold mx-auto w-full" style={{ letterSpacing: "-0.04em", lineHeight: 0.95, maxWidth: "760px", marginBottom: "24px" }}>
              We Grow <span className="text-blue">Bangalore MSMEs</span> with{" "}
              Data-Driven Marketing
            </h1>

            <p className="body-para mx-auto text-[15px] md:text-[clamp(16px,1.8vw,18px)]" style={{ color: "rgba(255,255,255,0.5)", maxWidth: "520px", lineHeight: 1.75, marginBottom: "36px" }}>
              Websites, Social Media, Performance Ads and AI tools designed to
              generate leads and measurable revenue.{" "}
              <span className="text-blue font-semibold">
                Clear pricing. No lock-in. Built for measurable growth.
              </span>
            </p>

            <div className="flex justify-center flex-wrap w-full md:w-auto mx-auto" style={{ gap: "14px", marginBottom: "48px" }}>
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center gap-2 bg-blue text-navy text-[15px] cta-btn px-8 py-4 rounded-xl cta-glow no-underline w-full md:w-auto"
              >
                Get Free Marketing Audit
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-[1.5px] border-border text-white text-[15px] cta-btn px-8 py-4 rounded-xl hover:border-blue/40 hover:bg-blue/5 transition-all no-underline w-full md:w-auto"
              >
                View Services
              </Link>
            </div>

            <div className="flex justify-center flex-wrap mx-auto" style={{ gap: "24px", marginBottom: "56px" }}>
              <div className="flex items-center gap-2 text-[13px] text-white/55">
                <span className="w-1.5 h-1.5 bg-blue rounded-full" />
                17+ Active Clients
              </div>
              <div className="flex items-center gap-2 text-[13px] text-white/55">
                <span className="w-1.5 h-1.5 bg-blue rounded-full" />
                ₹10Cr+ Revenue Generated
              </div>
              <div className="flex items-center gap-2 text-[13px] text-white/55">
                <span className="w-1.5 h-1.5 bg-blue rounded-full" />
                ⭐ 4.9/5 Client Rating
              </div>
            </div>

            <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-center w-full mx-auto relative gap-y-8 md:gap-y-0 text-center">
              {[ 
                { value: "17+", label: "Active Clients" }, 
                { value: "8.2x", label: "Avg ROAS" }, 
                { value: "₹10Cr+", label: "Revenue" }, 
                { value: "4.9/5", label: "Rating" } 
              ].map((m, i) => (
                <div key={i} className={\`flex flex-col items-center flex-1 px-4 md:px-6 \${i !== 3 ? 'md:border-r md:border-white/10' : ''}\`}>
                  <div style={{ fontFamily: "var(--font-heading), system-ui, sans-serif", fontSize: "32px", fontWeight: "700", color: "#3B82F6", lineHeight: 1 }}>
                    {m.value}
                  </div>
                  <div style={{ fontFamily: "var(--font-body), system-ui, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "8px" }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 
          <div className="hidden lg:block mt-8 w-full max-w-4xl mx-auto">
            <div 
              className="p-8"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 0 1px rgba(59,130,246,0.08), 0 24px 64px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.3)",
                borderRadius: "16px"
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm text-muted mb-1 text-left">
                    This Month
                  </div>
                  <div className="text-2xl font-extrabold text-left">
                    Client Results
                  </div>
                </div>
                <div className="bg-blue/15 border border-blue/30 rounded-lg px-3 py-1.5 text-xs text-blue font-semibold">
                  ↑ Live
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
                <div className="rounded-xl p-4 text-left" style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.22)" }}>
                  <div className="text-[11px] text-[#64748B] uppercase small-label mb-1">
                    Avg. ROAS
                  </div>
                  <div className="text-3xl section-h2 text-[#60A5FA]">
                    8.2x
                  </div>
                  <div className="text-[11px] mt-1" style={{ color: "rgba(96,165,250,0.8)" }}>
                    ↑ +34% vs last mo
                  </div>
                </div>
                <div className="rounded-xl p-4 text-left" style={{ background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.22)" }}>
                  <div className="text-[11px] text-[#64748B] uppercase small-label mb-1">
                    Leads Generated
                  </div>
                  <div className="text-3xl section-h2 text-[#818CF8]">
                    1,240
                  </div>
                  <div className="text-[11px] mt-1" style={{ color: "rgba(129,140,248,0.8)" }}>
                    ↑ +61% vs last mo
                  </div>
                </div>
                <div className="rounded-xl p-4 text-left" style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.22)" }}>
                  <div className="text-[11px] text-[#64748B] uppercase small-label mb-1">
                    Revenue Added
                  </div>
                  <div className="text-[28px] metric-num text-[#A78BFA]">
                    ₹48L
                  </div>
                  <div className="text-[11px] mt-1" style={{ color: "rgba(167,139,250,0.8)" }}>
                    across 17 clients
                  </div>
                </div>
                <div className="rounded-xl p-4 text-left" style={{ background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.18)" }}>
                  <div className="text-[11px] text-[#64748B] uppercase small-label mb-1">
                    Cost Per Lead
                  </div>
                  <div className="text-[28px] metric-num text-[#93C5FD]">
                    ₹148
                  </div>
                  <div className="text-[11px] mt-1" style={{ color: "rgba(147,197,253,0.8)" }}>
                    ↓ -63% optimised
                  </div>
                </div>
              </div>

              <div>
                <div className="text-[11px] text-muted uppercase small-label mb-2 text-left">
                  Weekly Leads Trend
                </div>
                <div className="flex items-end gap-1.5 h-[52px]">
                  {[40, 55, 70, 62, 85, 100].map((h, i, arr) => {
                    const isLast = i === arr.length - 1;
                    return (
                      <div
                        key={i}
                        style={{
                          height: \`\${h}%\`,
                          background: isLast 
                            ? "linear-gradient(to top, #2563EB, #60A5FA)" 
                            : "linear-gradient(to top, #1D4ED8, #3B82F6)",
                          borderRadius: "4px 4px 0 0",
                          boxShadow: isLast ? "0 0 12px rgba(59,130,246,0.5)" : "none",
                          flex: 1
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          */}

        </section>`;

const updatedLines = [
  ...lines.slice(0, startIdx),
  newHeroContent,
  ...lines.slice(endIdx)
];

fs.writeFileSync(targetFile, updatedLines.join('\n'));
console.log('File updated successfully.');
