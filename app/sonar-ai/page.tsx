import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { ArrowRight, Target, Zap, Shield, Users, Clock, BarChart3 } from "lucide-react";

export const metadata = {
  title: "SONAR AI | Proactive DMSMS & Obsolescence Intelligence",
  description: "SONAR AI helps obsolescence managers and buyers see supply chain risk early. Real-time lifecycle intelligence built by people who lived the problem. CMMC Level 1 aligned.",
  alternates: {
    canonical: "https://bluewatercomponents.com/sonar-ai",
  },
};

export default function SonarAI() {
  return (
    <div className="min-h-screen bg-silver-100">
      <Navbar />

      {/* HERO */}
      <section className="pt-24 pb-16 bg-navy-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-600/20 text-blue-300 text-xs tracking-[2px] font-medium mb-6">
              FOR OBSOLESCENCE MANAGERS &amp; PROGRAM BUYERS
            </div>
            <h1 className="text-5xl md:text-6xl tracking-[-2px] font-semibold leading-tight mb-6">
              SONAR AI.<br />See the risk before it sees you.
            </h1>
            <p className="text-xl md:text-2xl text-silver-200 max-w-2xl mb-10">
              A focused, proactive research tool that gives you early visibility into obsolescence, allocation, and supply chain risk across your BOMs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.dmsms.ai" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-3 text-lg px-9 py-4 rounded-2xl font-semibold"
              >
                Access SONAR <ArrowRight />
              </a>
              <a 
                href="#service-levels" 
                className="inline-flex items-center justify-center gap-3 border-2 border-white/70 hover:bg-white hover:text-navy-900 transition text-lg px-9 py-4 rounded-2xl font-semibold"
              >
                See Service Options
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* THE DAILY REALITY */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <div className="text-blue-600 text-xs tracking-[3px] font-semibold mb-3">THE REALITY FOR MOST PROGRAMS</div>
          <h2 className="text-3xl md:text-4xl tracking-[-1px] font-semibold mb-6">You’re still finding out too late.</h2>
          <div className="space-y-4 text-lg text-silver-600">
            <p>
              Most teams are still piecing together part status from multiple disconnected tools, spreadsheets, and tribal knowledge. 
              By the time a part shows up as obsolete or allocated, the program is already reacting — scrambling for last-time buys, 
              looking for alternates under pressure, or facing redesigns.
            </p>
            <p>
              Legacy platforms are often built for engineers and buried in complexity. They deliver massive amounts of data, 
              but not always the clear, actionable insight an obsolescence manager or buyer needs to make fast decisions.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT SONAR DELIVERS */}
      <section className="bg-white py-16 border-y border-silver-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-blue-600 text-xs tracking-[3px] font-semibold mb-3">WHAT SONAR AI ACTUALLY DOES</div>
            <h2 className="text-3xl md:text-4xl tracking-[-1px] font-semibold">Focused intelligence. Not another giant database.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <Target className="text-blue-600 mt-1 flex-shrink-0" size={26} />
              <div>
                <div className="font-semibold text-xl mb-2">Lifecycle &amp; Risk Monitoring</div>
                <p className="text-silver-600">Continuous tracking of EOL, NRND, allocation, shortages, single-source exposure, and geopolitical risk across your active BOMs.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Zap className="text-blue-600 mt-1 flex-shrink-0" size={26} />
              <div>
                <div className="font-semibold text-xl mb-2">Real-Time Distributor Intelligence</div>
                <p className="text-silver-600">Direct queries that surface current availability and lead times — not stale batch data from weeks ago.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <BarChart3 className="text-blue-600 mt-1 flex-shrink-0" size={26} />
              <div>
                <div className="font-semibold text-xl mb-2">Prioritized Risk Views</div>
                <p className="text-silver-600">See which parts actually matter to your program so you can focus time and budget where the impact is highest.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users className="text-blue-600 mt-1 flex-shrink-0" size={26} />
              <div>
                <div className="font-semibold text-xl mb-2">Alternate &amp; Cross-Reference Research</div>
                <p className="text-silver-600">Fast, practical recommendations when you need to move off a risky part — without wading through thousands of irrelevant options.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="text-blue-600 mt-1 flex-shrink-0" size={26} />
              <div>
                <div className="font-semibold text-xl mb-2">Proactive Alerts &amp; Case Management</div>
                <p className="text-silver-600">Get notified when risk profiles change. Track mitigation actions in one place instead of scattered emails and spreadsheets.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Shield className="text-blue-600 mt-1 flex-shrink-0" size={26} />
              <div>
                <div className="font-semibold text-xl mb-2">Audit-Ready Reporting</div>
                <p className="text-silver-600">Generate the documentation and traceability defense and aerospace programs increasingly need to demonstrate proactive DMSMS management.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE LEVELS */}
      <section id="service-levels" className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="text-blue-600 text-xs tracking-[3px] font-semibold mb-3">HOW TEAMS WORK WITH SONAR</div>
          <h2 className="text-3xl md:text-4xl tracking-[-1px] font-semibold">Choose the level of support that fits your team.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Ping */}
          <div className="bg-white border border-silver-200 rounded-2xl p-8 flex flex-col">
            <div className="mb-6">
              <div className="text-blue-600 text-sm font-semibold tracking-wider">SELF-SERVICE</div>
              <div className="text-3xl font-semibold mt-1">SONAR Ping</div>
            </div>
            <ul className="space-y-3 text-silver-600 flex-1">
              <li className="flex gap-2">• Monthly review &amp; planning call with your account team</li>
              <li className="flex gap-2">• Automated alerts on tracked parts</li>
              <li className="flex gap-2">• Full platform access</li>
              <li className="flex gap-2">• Self-service research</li>
            </ul>
            <div className="pt-6 mt-auto">
              <a href="https://www.dmsms.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Start with Ping <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Sweep */}
          <div className="bg-white border border-silver-200 rounded-2xl p-8 flex flex-col">
            <div className="mb-6">
              <div className="text-blue-600 text-sm font-semibold tracking-wider">SUPPORTED SERVICE</div>
              <div className="text-3xl font-semibold mt-1">SONAR Sweep</div>
            </div>
            <ul className="space-y-3 text-silver-600 flex-1">
              <li className="flex gap-2">• Bi-weekly reviews with an IIOM-trained specialist</li>
              <li className="flex gap-2">• Pipeline planning &amp; reporting</li>
              <li className="flex gap-2">• Risk prioritization support</li>
              <li className="flex gap-2">• Dedicated point of contact</li>
            </ul>
            <div className="pt-6 mt-auto">
              <a href="https://www.dmsms.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn about Sweep <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* SOS Managed */}
          <div className="bg-white border border-silver-200 rounded-2xl p-8 flex flex-col">
            <div className="mb-6">
              <div className="text-blue-600 text-sm font-semibold tracking-wider">FULLY MANAGED</div>
              <div className="text-3xl font-semibold mt-1">SOS Managed Service</div>
            </div>
            <ul className="space-y-3 text-silver-600 flex-1">
              <li className="flex gap-2">• Bi-weekly reviews with IIOM Trainer + Secondary Market SME</li>
              <li className="flex gap-2">• Obsolescence case management</li>
              <li className="flex gap-2">• Secondary market insights &amp; mitigation options</li>
              <li className="flex gap-2">• Comprehensive reporting and documentation</li>
            </ul>
            <div className="pt-6 mt-auto">
              <a href="#contact" className="text-blue-600 font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Talk to us about Managed <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT'S DIFFERENT */}
      <section className="bg-navy-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <div className="text-blue-400 text-xs tracking-[3px] font-semibold mb-3">WHY TEAMS CHOOSE SONAR</div>
            <h2 className="text-3xl md:text-4xl tracking-[-1px] font-semibold">Built by people who lived the problem.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 text-lg">
            <div>
              <div className="font-semibold mb-2">Focused on Obsolescence Managers</div>
              <p className="text-silver-300">Most legacy tools were built for engineers. SONAR is built for the people who actually own day-to-day risk decisions.</p>
            </div>
            <div>
              <div className="font-semibold mb-2">Real-Time vs. Batch</div>
              <p className="text-silver-300">We query distributors directly instead of relying on stale database snapshots that are weeks or months old.</p>
            </div>
            <div>
              <div className="font-semibold mb-2">High Coverage Without the Noise</div>
              <p className="text-silver-300">We deliver actionable data on the parts that matter to your programs — not thousands of irrelevant results.</p>
            </div>
            <div>
              <div className="font-semibold mb-2">Security &amp; Compliance by Design</div>
              <p className="text-silver-300">CMMC Level 1 and NIST 800-171 aligned architecture. Built to work safely alongside your existing systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl tracking-[-1px] font-semibold mb-4">Ready to get proactive?</h2>
        <p className="text-xl text-silver-600 mb-8 max-w-md mx-auto">Access the platform directly or talk to someone who understands your world.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://www.dmsms.ai" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-3 text-white text-lg px-10 py-4 rounded-2xl font-semibold"
          >
            Access SONAR Now
          </a>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center gap-3 border-2 border-navy-900 hover:bg-navy-900 hover:text-white transition text-lg px-10 py-4 rounded-2xl font-semibold"
          >
            Request a Demo
          </a>
        </div>
        <p className="text-sm text-silver-500 mt-6">No sales call required to explore the platform.</p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-silver-100 py-16 border-t border-silver-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-blue-600 text-xs tracking-[3px] font-semibold mb-3">STILL HAVE QUESTIONS?</div>
            <h2 className="text-3xl font-semibold tracking-tight">Let’s talk about how SONAR fits your programs.</h2>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
