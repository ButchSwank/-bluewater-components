import { companyInfo } from "@/lib/data";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-silver-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-x-8 gap-y-12 pb-12 border-b border-white/10">
          {/* Company Info */}
          <div className="md:col-span-5">
            <div className="mb-6">
              <img 
                src="/images/logo-dark.png" 
                alt="Blue Water Components" 
                className="h-8 w-auto" 
              />
            </div>
            <p className="text-silver-400 max-w-sm text-[15px] leading-relaxed">
              Florida&apos;s trusted electronics distributor and manufacturing services partner. 
              Delivering precision components and expert support since 2009.
            </p>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h4 className="font-semibold text-white mb-5 tracking-wide text-sm uppercase">Contact</h4>
            <ul className="space-y-3.5 text-[15px]">
              <li className="flex gap-3 text-silver-300">
                <MapPin className="mt-1 flex-shrink-0" size={17} />
                <span className="whitespace-pre-line">{companyInfo.address}</span>
              </li>
              <li>
                <a href={`tel:${companyInfo.phone.replace(/\D/g, '')}`} className="flex gap-3 hover:text-white transition-colors text-silver-300">
                  <Phone className="mt-0.5 flex-shrink-0" size={17} />
                  {companyInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${companyInfo.email}`} className="flex gap-3 hover:text-white transition-colors text-silver-300">
                  <Mail className="mt-0.5 flex-shrink-0" size={17} />
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex gap-3 text-silver-300">
                <Clock className="mt-0.5 flex-shrink-0" size={17} />
                <span>{companyInfo.hours}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-white mb-5 tracking-wide text-sm uppercase">Quick Links</h4>
            <nav className="flex flex-col gap-3 text-[15px] text-silver-300">
              <a href="/sonar-ai" className="hover:text-white transition-colors">SONAR AI</a>
              <a href="https://www.dmsms.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Access SONAR</a>
              <a href="#why" className="hover:text-white transition-colors">Why Blue Water</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              <a href="/privacy" className="hover:text-white transition-colors">Privacy &amp; Compliance</a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-y-3 text-sm text-silver-400">
          <div>
            © {currentYear} Blue Water Components, LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>CMMC Level 1</span>
            <span className="hidden md:inline">•</span>
            <span>NIST 800-171 Aligned</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
