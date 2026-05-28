"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { ArrowRight, Shield, Target, Zap } from "lucide-react";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Blue Water Components",
  "url": "https://bluewatercomponents.com",
  "logo": "https://bluewatercomponents.com/images/logo.jpg",
  "description": "SONAR AI — a proactive research tool for DMSMS and obsolescence management. Built by aerospace electronics experts with deep real-world supply chain experience. CMMC Level 1 and NIST 800-171 aligned.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12450 Corporate Blvd, Suite 300",
    "addressLocality": "Tampa",
    "addressRegion": "FL",
    "postalCode": "33637",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-813-555-0192",
    "contactType": "sales",
    "email": "sales@bluewatercomponents.com",
    "areaServed": "US"
  }
};

export default function BlueWaterComponents() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />

      {/* HERO SECTION - SONAR AI Focused */}
      <section id="hero" className="relative min-h-[100dvh] flex items-center pt-20 bg-navy-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.jpg" 
            alt="SONAR AI - DMSMS and obsolescence intelligence" 
            className="object-cover w-full h-full opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 pt-16">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-600/20 text-blue-300 text-xs tracking-[2px] font-medium mb-6">
              BUILT FOR AEROSPACE &amp; DEFENSE SUSTAINMENT
            </div>
            
            <h1 className="text-white text-[52px] md:text-[68px] leading-[1.05] font-semibold tracking-[-2.8px] mb-6">
              SONAR AI.<br />Proactive DMSMS Intelligence.
            </h1>
            
            <p className="max-w-xl text-xl md:text-2xl text-silver-200 tracking-tight mb-10">
              A focused research tool that helps obsolescence managers and buyers see risk early — before it becomes a program problem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.dmsms.ai" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-3 text-white text-lg px-9 py-4 rounded-2xl font-semibold group"
              >
                Access SONAR <ArrowRight className="group-hover:translate-x-0.5 transition" />
              </a>
              <a 
                href="#capabilities" 
                className="inline-flex items-center justify-center gap-3 border-2 border-white/70 hover:bg-white hover:text-navy-900 transition text-white text-lg px-9 py-4 rounded-2xl font-semibold"
              >
                See How It Works
              </a>
            </div>

            <div className="flex items-center gap-6 mt-12 text-sm text-white/60">
              <div>CMMC Level 1</div>
              <div>NIST 800-171 Aligned</div>
              <div>Built in the USA</div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <div className="max-w-3xl">
          <div className="text-blue-600 text-xs tracking-[3px] font-semibold mb-3">THE REALITY TODAY</div>
          <h2 className="text-4xl md:text-5xl tracking-[-1.5px] font-semibold mb-6">Most programs are still managing obsolescence reactively.</h2>
          <p className="text-xl text-silver-600 leading-relaxed">
            ERP and PLM systems tell you what was designed. They don&apos;t tell you what&apos;s actually available, at risk, or about to disappear. 
            By the time issues surface, you&apos;re already in crisis mode — facing last-time buys, redesigns, or expensive mitigation.
          </p>
        </div>
      </section>

      {/* INTRODUCING SONAR AI */}
      <section id="capabilities" className="bg-white border-y border-silver-200 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <div className="text-blue-600 text-xs tracking-[3px] font-semibold mb-3">SONAR AI</div>
            <h2 className="text-4xl md:text-5xl tracking-[-1.5px] font-semibold mb-4">A focused intelligence layer for DMSMS and obsolescence.</h2>
            <p className="text-xl text-silver-600">Built specifically for the people who own risk — not just another giant parts database.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="mt-1"><Target className="text-blue-600" size={28} /></div>
              <div>
                <div className="font-semibold text-xl mb-2">See Risk Early</div>
                <p className="text-silver-600">Continuous monitoring of your BOMs for EOL, NRND, allocation, single-source exposure, and geopolitical risk — before it hits your program.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1"><Zap className="text-blue-600" size={28} /></div>
              <div>
                <div className="font-semibold text-xl mb-2">Real Answers, Fast</div>
                <p className="text-silver-600">Real-time distributor queries with high coverage. Far less time spent manually chasing data across disconnected systems.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1"><Shield className="text-blue-600" size={28} /></div>
              <div>
                <div className="font-semibold text-xl mb-2">Built for Defense</div>
                <p className="text-silver-600">CMMC Level 1 and NIST 800-171 aligned. Designed with the security and auditability requirements of aerospace and defense programs in mind.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BLUE WATER - One Honest Paragraph */}
      <section id="why" className="max-w-5xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <div className="text-blue-600 text-xs tracking-[3px] font-semibold mb-3">WHY US</div>
          <h2 className="text-3xl md:text-4xl tracking-[-1px] font-semibold mb-6">We didn&apos;t start as a software company.</h2>
          <div className="text-lg text-silver-600 leading-relaxed space-y-4">
            <p>
              Blue Water Components spent over 15 years as an independent distributor deeply embedded in aerospace and defense electronics sustainment. 
              We lived the daily reality of reactive obsolescence — the late notifications, the emergency sourcing, the incomplete data, and the constant firefighting.
            </p>
            <p>
              That experience is why SONAR AI exists. We built it to give obsolescence managers and buyers the proactive visibility we wished we had when we were on the other side of the table.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST & COMPLIANCE */}
      <section className="bg-silver-100 py-12 border-y border-silver-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="text-sm text-silver-500 tracking-widest font-medium mb-4">BUILT FOR PROGRAMS THAT CAN&apos;T AFFORD SURPRISES</div>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-navy-900 font-medium">
            <div>CMMC Level 1</div>
            <div>NIST 800-171 Aligned</div>
            <div>Supplier Performance Risk System (SPRS)</div>
            <div>Secure Microsoft Environment</div>
            <div>American-Built AI</div>
          </div>
        </div>
      </section>

      {/* ACCESS SONAR - Strong CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl tracking-[-1px] font-semibold mb-4">Ready to see what SONAR can surface on your BOMs?</h2>
        <p className="text-xl text-silver-600 mb-8 max-w-md mx-auto">Direct access to the platform. No sales call required to get started.</p>
        
        <a 
          href="https://www.dmsms.ai" 
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center justify-center gap-3 text-white text-lg px-10 py-4 rounded-2xl font-semibold"
        >
          Access SONAR <ArrowRight />
        </a>
        <p className="text-sm text-silver-500 mt-4">Secure login at www.dmsms.ai</p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-silver-100 py-16 border-t border-silver-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-blue-600 text-xs tracking-[3px] font-semibold mb-3">LET&apos;S TALK</div>
            <h2 className="text-3xl font-semibold tracking-tight">Have questions about SONAR for your program?</h2>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
