import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { companyInfo } from "@/lib/data";

export default function NotFoundContent() {
  return (
    <div className="min-h-screen bg-silver-100">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <p className="text-blue-600 text-xs tracking-[3px] font-semibold mb-3">404</p>
        <h1 className="text-4xl font-semibold tracking-tight mb-4">Page not found</h1>
        <p className="text-silver-500 text-lg mb-8">
          That address is not on this site. Head back home, or email{" "}
          <a href={`mailto:${companyInfo.email}`} className="text-blue-600 underline">
            {companyInfo.email}
          </a>
          .
        </p>
        <Link href="/" className="text-blue-600 hover:underline">
          Back to home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
