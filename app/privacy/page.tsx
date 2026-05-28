import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-silver-100">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <Link href="/" className="text-sm text-blue-600 hover:underline mb-6 block">&larr; Back to Home</Link>
        
        <h1 className="text-4xl font-semibold tracking-tight mb-3">Privacy &amp; Quality Policy</h1>
        <p className="text-silver-500 mb-10">Last updated: May 2025</p>

        <div className="prose prose-slate max-w-none text-[15px] text-navy-900">
          <h2 className="font-semibold mt-10 mb-3">Our Commitment to Quality</h2>
          <p>Blue Water Components is ISO 9001:2015 certified. All products sold are sourced exclusively from authorized manufacturers and distributors. We maintain full lot traceability on all shipments and perform incoming quality inspection on high-reliability and customer-specified parts.</p>

          <h2 className="font-semibold mt-10 mb-3">Data Privacy</h2>
          <p>We collect only the information necessary to process your orders, provide technical support, and communicate regarding your account. Your contact information will never be sold or shared with third parties for marketing purposes.</p>
          <p className="mt-3">For full details on how we handle your data, contact <a href="mailto:privacy@bluewatercomponents.com" className="text-blue-600">privacy@bluewatercomponents.com</a>.</p>

          <h2 className="font-semibold mt-10 mb-3">Counterfeit Avoidance</h2>
          <p>We maintain strict counterfeit avoidance procedures aligned with AS6081 and DFARS 252.246-7007. Any suspect parts are quarantined immediately and reported.</p>

          <div className="mt-12 pt-8 border-t text-sm text-silver-500">
            Blue Water Components, LLC • 12450 Corporate Blvd, Suite 300, Tampa, FL 33637
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
