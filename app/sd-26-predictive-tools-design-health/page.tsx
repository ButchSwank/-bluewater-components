import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const title = "SD-26 Predictive Tools & Design Health: How to Comply";
const description =
  "What SD-26 (2026) asks of contractors for predictive DMSMS monitoring and design health in source selection, and how to show compliance in your proposal.";
const canonical = "https://bluewatercomponents.com/sd-26-predictive-tools-design-health";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: "article",
    siteName: "Blue Water Components",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to meet SD-26's predictive-tools and design-health requirements",
  description,
  datePublished: "2026-10-19",
  dateModified: "2026-10-26",
  author: { "@type": "Organization", name: "Blue Water Components" },
  publisher: {
    "@type": "Organization",
    name: "Blue Water Components",
    url: "https://bluewatercomponents.com",
  },
  mainEntityOfPage: canonical,
  about: ["SD-26", "DMSMS"],
  citation: "https://quicksearch.dla.mil/qsdocdetails.aspx?ident_number=283456",
};

export default function Sd26PredictiveToolsDesignHealth() {
  return (
    <div className="min-h-screen bg-silver-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <article className="text-[15px] leading-relaxed text-navy-900">
          <h1 className="text-4xl font-semibold tracking-tight mb-3">
            How to meet SD-26&apos;s predictive-tools and design-health requirements
          </h1>
          <p className="text-silver-500 mb-8">Blue Water Components · October 19, 2026</p>

          <p>
            SD-26 is the Defense Standardization Program Office&apos;s (DSPO) guidebook of illustrative DMSMS contract language, updated in June 2026. It is guidance, not a mandate. But when your contract includes its language, you may be required to monitor parts with predictive tools, and your proposal may be rated on the DMSMS health of your design.
          </p>
          <p className="mt-3">
            This page is for DMSMS leads, proposal and capture teams, and program managers who have found SD-26 language in an RFP or statement of work. It explains what the two requirements say, how to comply, and how to show design health in a proposal. All quotations are from SD-26 (June 2026), with printed page numbers, available from the{" "}
            <a className="text-blue-600 hover:underline" href="https://quicksearch.dla.mil/qsdocdetails.aspx?ident_number=283456" target="_blank" rel="noopener noreferrer">
              DLA ASSIST document index
            </a>
            .
          </p>

          <h2 className="text-2xl font-semibold tracking-tight mt-10 mb-3">What SD-26 is (and isn&apos;t)</h2>
          <p>
            SD-26, the DMSMS and PM&amp;P Management Contracting Guide, gives program offices example contract requirements they can adapt. It says plainly that the wording is meant to be adapted: the illustrative requirements &quot;should be tailored to complement the program office&apos;s Acquisition Strategy&quot; and &quot;Not every requirement in Tables 1.1–1.6 and Tables 2.1–2.4 is applicable in all circumstances&quot; (Sec. 1, p. 2).
          </p>
          <p className="mt-3">
            DSPO does push for wide use. The Foreword says: &quot;I urge you to read it thoroughly and use it on all new contracts and modifications to existing contracts&quot; (p. iv). That is a strong recommendation, not a requirement. The practical point: read your RFP, SOW, and CDRLs for the actual language. Don&apos;t assume a requirement applies because it appears in SD-26, and don&apos;t assume it doesn&apos;t.
          </p>

          <h2 className="text-2xl font-semibold tracking-tight mt-10 mb-3">Requirement 12: the predictive-tools monitoring requirement</h2>
          <p>
            Requirement 12, Monitoring activities, sits in Table 1.3 with an &quot;At PDR and thereafter&quot; timeframe (p. 15). SD-26 notes that monitoring should be required when the contractor and its subcontractors are expected to be responsible for DMSMS management activities. When it is in your contract, it has three parts:
          </p>
          <ol className="list-decimal pl-5 mt-3 space-y-2">
            <li>
              Risk analysis. Analyze all items to decide which are proactively monitored and which are handled reactively, &quot;based upon criteria like that described in IEC 62402 Edition 2.0 2019-05 sections 9.1 and 9.3&quot; (p. 15).
            </li>
            <li>
              Submit the results to the government for approval through a CDRL using{" "}
              <Link href="/di-mgmt-82274-rev-a-explained" className="text-blue-600 hover:underline">
                DI-MGMT-82274 Rev A: what DMSMS data you owe
              </Link>
              .
            </li>
            <li>
              Monitor. &quot;The contractor shall use predictive tools, component life cycle curves, and other methods to proactively forecast and monitor the items identified by the risk analysis above for DMSMS issues&quot; (p. 15).
            </li>
          </ol>
          <p className="mt-3">
            SD-26 does not name a tool or vendor. It asks for predictive tools and methods that cover the items your risk analysis selects. How you meet that is up to you, as long as the method is defensible and documented.
          </p>

          <h2 className="text-2xl font-semibold tracking-tight mt-10 mb-3">How to comply, step by step</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Collect indentured bills of materials, including subcontractor BOMs for items that are not commercial products.</li>
            <li>Run a risk screen on every item: lifecycle status and projected end of life, and, as part of the program&apos;s own supply chain review, how many approved sources each item has and any lead-time pressure.</li>
            <li>
              Build the proactively monitored parts list from that screen, document your criteria against IEC 62402 sections 9.1 and 9.3, and submit it per{" "}
              <Link href="/di-mgmt-82274-rev-a-explained" className="text-blue-600 hover:underline">
                DI-MGMT-82274 Rev A: what DMSMS data you owe
              </Link>
              .
            </li>
            <li>Set up ongoing forecasting and alerts for the monitored items. If your contract also includes Requirement 13, issue notifications are due within 1 week of discovery (p. 15), so your monitoring has to surface changes quickly.</li>
            <li>Keep records of the analysis, alerts, and resolutions so the DMSMS management team (DMT) can review them.</li>
          </ol>
          <p className="mt-3">
            Where SONAR fits:{" "}
            <a className="text-blue-600 hover:underline" href="https://www.dmsms.ai" target="_blank" rel="noopener noreferrer">
              SONAR AI
            </a>{" "}
            screens BOMs for lifecycle and end-of-life status, flags parts with less than 5 years of projected life, and produces a monitored-parts list. Those outputs are inputs to your DI-MGMT-82274 deliverables and your ongoing monitoring. They don&apos;t replace your own analysis or the government&apos;s approval.
          </p>

          <h2 className="text-2xl font-semibold tracking-tight mt-10 mb-3">Design health is now a source selection factor</h2>
          <p>
            SD-26&apos;s source selection language (Table 1.1, p. 8) goes beyond the management plan. It says proposals &quot;shall be evaluated on the DMSMS management approach, the adequacy of planning for mitigating DMSMS risks, and the DMSMS health of designs proposed for use in the end item,&quot; and that proposals &quot;whose designs have superior health will receive more favorable ratings.&quot;
          </p>
          <p className="mt-3">
            It also defines what good looks like: &quot;Healthy DMSMS designs should have minimal items with life cycles ending in less than 5 years and mitigation plans in place for the items with short life cycles.&quot; And it describes a proactive approach as one that &quot;includes predictive forecasting strategies; item list screening to the lowest level; item list monitoring&quot; along with case tracking and subcontractor management (p. 8). For more on measuring DMSMS health, SD-26 points to SD-22, the DoD DMSMS Guidebook.
          </p>

          <h2 className="text-2xl font-semibold tracking-tight mt-10 mb-3">How to show design health in your proposal</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Run a BOM health check before you bid (Blue Water offers a free check of up to 100 line items, with results within 2 business days), while there is still time to change the design or plan mitigations.</li>
            <li>Report the number and share of items with less than 5 years of projected life, and explain how you got the figures.</li>
            <li>Attach or summarize mitigation plans for each short-life item: last-time buy, alternate or form-fit-function replacement, redesign, or another resolution.</li>
            <li>Describe your monitoring method (tools, data sources, refresh cadence, and how alerts reach the DMT) in the DMSMS management plan section.</li>
            <li>Show the screening went to the lowest level of the BOM, including subcontractor items.</li>
          </ul>

          <div className="mt-8 rounded-2xl border border-silver-200 bg-white p-6">
            <h3 className="text-xl font-semibold mb-2">Free BOM check: up to 100 line items, results within 2 business days</h3>
            <p>
              Send us a BOM (up to 100 line items) and within 2 business days we&apos;ll show you, at no cost, each part&apos;s lifecycle and end-of-life status, which parts have less than 5 years of projected life, and which items belong on your monitored list.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <Link href="/bom-health-check" className="btn-primary inline-flex items-center justify-center text-white px-5 py-2.5 rounded-lg text-sm font-semibold">
                Send a BOM for your free check
              </Link>
              <a href="https://www.dmsms.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-navy-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-navy-900 hover:text-white transition">
                Access SONAR
              </a>
            </div>
            <p className="mt-4">
              Want the details first? See{" "}
              <Link href="/bom-health-check" className="text-blue-600 hover:underline">how the free pre-bid BOM health check works</Link>{" "}
              and <Link href="/insights" className="text-blue-600 hover:underline">SONAR Insights research</Link>.
            </p>
          </div>

          <h2 className="text-2xl font-semibold tracking-tight mt-10 mb-3">Related: technology roadmaps and who pays</h2>
          <p>
            The 2026 revision adds a provision for obtaining technology roadmaps (Requirement 18): it asks for a technology roadmap delivered under DI-MISC-80508B that &quot;will cover a rolling 10-year planning horizon over the life of the contract&quot; (p. 18). Who funds DMSMS resolutions depends on which of Requirements 22a, 22b, or 22c your contract uses (pp. 20–22). Check your contract&apos;s funding language before you price mitigations.
          </p>

          <h2 className="text-2xl font-semibold tracking-tight mt-10 mb-3">Frequently asked questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Is SD-26 mandatory?</h3>
              <p className="mt-1">No. SD-26 is DSPO guidance with illustrative contract language that program offices tailor. It becomes binding only when its language is written into your contract.</p>
            </div>
            <div>
              <h3 className="font-semibold">Does SD-26 require predictive tools for BOM monitoring?</h3>
              <p className="mt-1">When your contract includes Requirement 12, yes: &quot;The contractor shall use predictive tools, component life cycle curves, and other methods&quot; to monitor risk-selected items (SD-26 2026, p. 15).</p>
            </div>
            <div>
              <h3 className="font-semibold">Does SD-26 name a specific DMSMS tool?</h3>
              <p className="mt-1">No. It requires predictive tools and methods, not a particular product.</p>
            </div>
            <div>
              <h3 className="font-semibold">What is &quot;DMSMS design health&quot; in SD-26?</h3>
              <p className="mt-1">It is a source selection factor. Healthy designs &quot;should have minimal items with life cycles ending in less than 5 years and mitigation plans in place&quot; for short-life items (p. 8).</p>
            </div>
            <div>
              <h3 className="font-semibold">Which data item covers the monitored parts list?</h3>
              <p className="mt-1">
                <Link href="/di-mgmt-82274-rev-a-explained" className="text-blue-600 hover:underline">
                  DI-MGMT-82274 Rev A: what DMSMS data you owe
                </Link>{" "}
                (p. 15).
              </p>
            </div>
            <div>
              <h3 className="font-semibold">What is the latest version of SD-26?</h3>
              <p className="mt-1">The June 2026 edition of SD-26, the DMSMS and PM&amp;P Management Contracting Guide from DSPO, listed in the DLA ASSIST document index.</p>
            </div>
            <div>
              <h3 className="font-semibold">Who pays to resolve DMSMS issues under SD-26?</h3>
              <p className="mt-1">It depends on which option (22a, 22b, or 22c) the contract uses.</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold tracking-tight mt-10 mb-3">Related resources</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><Link href="/sd-26-2026-explained" className="text-blue-600 hover:underline">SD-26 (2026) explained</Link></li>
            <li><Link href="/who-pays-for-dmsms-resolutions" className="text-blue-600 hover:underline">Who pays for DMSMS resolutions?</Link></li>
            <li><Link href="/bom-health-check" className="text-blue-600 hover:underline">Free pre-bid BOM health check</Link></li>
            <li><Link href="/govini-air-vs-sonar-which-dmsms-tool-fits-which-job" className="text-blue-600 hover:underline">Air (Govini) and SONAR AI: which DMSMS tool fits which job?</Link></li>
            <li>
              <Link href="/di-mgmt-82274-rev-a-explained" className="text-blue-600 hover:underline">
                DI-MGMT-82274 Rev A: what DMSMS data you owe
              </Link>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold tracking-tight mt-10 mb-3">Sources</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <a className="text-blue-600 hover:underline" href="https://quicksearch.dla.mil/qsdocdetails.aspx?ident_number=283456" target="_blank" rel="noopener noreferrer">
                SD-26, DMSMS and PM&amp;P Management Contracting Guide (June 2026), DLA ASSIST
              </a>
            </li>
            <li>SD-22, DoD Diminishing Manufacturing Sources and Material Shortages Guidebook (referenced by SD-26)</li>
            <li>IEC 62402 Edition 2.0 (2019-05), Obsolescence Management</li>
          </ul>
          <p className="mt-6 text-sm text-silver-500">
            SD-26 is DSPO guidance. Blue Water Components is not affiliated with or endorsed by DSPO or the Department of Defense.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
