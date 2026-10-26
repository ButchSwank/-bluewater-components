import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const title = "DI-MGMT-82274 Rev A Explained | DMSMS Data You Owe";
const description =
  "DI-MGMT-82274 Rev A (25-FEB-2026): what BOM, case, notification, cost and mitigation data the DMSMS DID requires, and what changed from 2019.";
const canonical = "https://bluewatercomponents.com/di-mgmt-82274-rev-a-explained";

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
  headline: "DI-MGMT-82274 Rev A explained: what DMSMS data you owe",
  description,
  datePublished: "2026-10-21",
  dateModified: "2026-10-26",
  author: { "@type": "Organization", name: "Blue Water Components" },
  publisher: {
    "@type": "Organization",
    name: "Blue Water Components",
    url: "https://bluewatercomponents.com",
  },
  mainEntityOfPage: canonical,
  about: ["DI-MGMT-82274", "DMSMS"],
  citation: "https://quicksearch.dla.mil/qsDocDetails.aspx?ident_number=283245",
};

function Cite({ id }: { id: 1 | 2 | 3 | 4 }) {
  return (
    <sup>
      <a href={`#source-${id}`} className="text-blue-600 hover:underline">
        [{id}]
      </a>
    </sup>
  );
}

export default function DiMgmt82274RevAExplained() {
  return (
    <div className="min-h-screen bg-silver-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <article className="text-[15px] leading-relaxed text-navy-900">
          <h1 className="text-4xl font-semibold tracking-tight mb-3">
            DI-MGMT-82274 Rev A explained: what DMSMS data you owe
          </h1>
          <p className="text-silver-500 mb-8">Blue Water Components · October 21, 2026</p>

          <p>
            DI-MGMT-82274, DMSMS Life Cycle Management Data, is the DoD data item description that defines the tabular DMSMS data a contractor delivers under a CDRL: BOMs, product change and discontinuance notifications, case data, monitored parts lists, and mitigation, cost, and budgeting data. Revision A (25 February 2026) expands Table 1 to 61 data elements and requires CSV delivery.
          </p>
          <p className="mt-3">
            This page walks through what the DID requires, what changed from the 2019 base document, how SD-26 (June 2026) uses it in CDRL templates, and who delivers what. Our company, Blue Water Components, built a DMSMS and obsolescence software tool named SONAR AI, and we wrote this guide for the people who get handed a CDRL that cites 82274 or 82274A.
          </p>

          <h2 className="text-2xl font-semibold tracking-tight mt-10 mb-3">DI-MGMT-82274 at a glance</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Title:</strong> Diminishing Manufacturing Sources and Material Shortages (DMSMS) Life Cycle Management Data.
              <Cite id={1} />
            </li>
            <li>
              <strong>Current revision:</strong> Revision A, 25-FEB-2026, 14 pages. The base document is dated 02-JUL-2019, 11 pages. Both are Distribution Statement A.
              <Cite id={1} />
            </li>
            <li>
              <strong>Preparing activity:</strong> OSD-SO. Project MGMT-2026-002; AMSC 10619. ASSIST lists the next review as due 24-FEB-2031.
              <Cite id={1} />
              <Cite id={2} />
            </li>
            <li>
              <strong>Scope:</strong> &quot;Those activities may require collecting Bill of Materials, DMSMS notifications, DMSMS case data, DMSMS health information, DMSMS cost and budgeting information, and DMSMS case mitigation data…&quot; (Use/relationship).
              <Cite id={2} />
            </li>
            <li>
              <strong>Where to get it:</strong>{" "}
              <a className="text-blue-600 hover:underline" href="https://quicksearch.dla.mil/qsDocDetails.aspx?ident_number=283245" target="_blank" rel="noopener noreferrer">
                ASSIST QuickSearch, DI-MGMT-82274
              </a>
              .
            </li>
          </ul>

          <h2 className="text-2xl font-semibold tracking-tight mt-10 mb-3">What the DID actually requires</h2>
          <p>
            <strong>One table, many deliverables.</strong> The DID defines a single Table 1 of data elements, and each CDRL picks the elements it needs. Use/relationship, paragraph d: &quot;This DID should be tailored in the Contract Data Requirements List (CDRL) to include only the required specific data elements from Table 1.&quot;
            <Cite id={2} />
          </p>
          <p className="mt-3">
            <strong>Format (Requirements, paragraph 3).</strong> The data goes in &quot;tabular format with the Field Names in Table 1 as the column labels,&quot; provided as &quot;an electronically editable, machine-readable, Comma Separated Values (CSV) text file with text fields enclosed in double quotation marks.&quot;
            <Cite id={2} />
          </p>
          <p className="mt-3">
            <strong>Content (paragraph 4).</strong> Blank fields are allowed only for data that &quot;is not available and which are not designated as &apos;Required&apos;&quot; in Table 1. The indentured path to the system level uses &quot;the item/Next Higher Assembly (NHA) method.&quot; Data goes &quot;to the lowest indenture level (component level) for all items, including subcontractor items, which are not commercial items, as defined in 48 CFR 2.101.&quot;
            <Cite id={2} />
          </p>
          <p className="mt-3">
            <strong>&quot;Item&quot; means everything.</strong> Use/relationship, paragraph b: the word item &quot;includes parts, software, materials, chemicals, etc.&quot;
            <Cite id={2} /> Software and firmware are in scope: element 6, Software / Firmware Version, is &quot;Required for all items containing software or firmware.&quot;
            <Cite id={2} />
          </p>
          <p className="mt-3">
            <strong>Table 1 examples.</strong> Elements 1 to 5 identify the item and its source: OEM Item Number, OEM Name, OEM CAGE, UEI (the SAM-issued Unique Entity Identifier, a 12-character alphanumeric field), and Revision Designator. The last block of the table, elements 55 to 61, carries the notification data: Date of Notification, Notification Number, Notification Description, Recommended Replacement Item, Affected System, Last Order Date, and Last Ship Date.
            <Cite id={2} />
          </p>
          <p className="mt-3">
            <strong>Element subsets by data product.</strong> Use/relationship, paragraphs d(1) to d(5), list the Table 1 elements for each use. Both columns are taken from the official DIDs.
            <Cite id={2} />
            <Cite id={4} />
          </p>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th scope="col" className="text-left border-b-2 border-silver-300 p-2">Data product (CDRL subtitle)</th>
                  <th scope="col" className="text-left border-b-2 border-silver-300 p-2">Rev A Table 1 elements</th>
                  <th scope="col" className="text-left border-b-2 border-silver-300 p-2">2019 base (DI-MGMT-82274) elements</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Proactively monitored parts list", "1–6, 8–12, 17–21, 25–32", "1–5, 7–11, 15–19, 24–25"],
                  ["Bill of Materials", "1–33", "1–26"],
                  ["Product change and discontinuance notification", "1–3, 12, 17–21, 52–61", "1–3, 11, 15–19, 44–53"],
                  ["DMSMS case data", "1–21, 24–54", "1–19, 22–46"],
                  ["Case mitigation, cost, and budgeting", "1, 2, 10–13, 17, 26–32, 34–52", "1, 2, 9–12, 15, 24, 25, 27–44"],
                ].map((row) => (
                  <tr key={row[0]}>
                    <th scope="row" className="text-left align-top border-b border-silver-200 p-2 font-semibold">{row[0]}</th>
                    <td className="align-top border-b border-silver-200 p-2">{row[1]}</td>
                    <td className="align-top border-b border-silver-200 p-2">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-3">
            <strong>Health information.</strong> The scope mentions &quot;DMSMS health information,&quot; but the DMSMS Health Assessment Report itself is a separate DID, DI-MGMT-82273 (SD-26 Table 7, Template 10).
            <Cite id={3} />
          </p>

          <h2 className="text-2xl font-semibold tracking-tight mt-10 mb-3">What changed from 2019 to Rev A</h2>
          <p>
            We compared the official 2019 base (DI-MGMT-82274, approved 2 July 2019, 53 Table 1 elements) with Revision A (DI-MGMT-82274A, approved 25 February 2026, 61 elements).
            <Cite id={2} />
            <Cite id={4} /> Apart from the header data (DID number, approval date, AMSC number 10040 vs. 10619, and project number) and the element ranges in Use/relationship d(1)–d(5), the Use/relationship text and Requirements paragraphs 1–4 (including CSV format and subcontractor depth) are word-for-word the same in both. CSV delivery and component-level depth for non-commercial subcontractor items were already required in 2019. The changes are all in Table 1.
          </p>
          <ol className="list-decimal pl-5 mt-3 space-y-3">
            <li>
              <strong>Eight new elements, so everything after element 3 renumbered.</strong> The 2019 table ends at element 53 (&quot;END OF DI-MGMT-82274&quot;); Rev A ends at 61 (&quot;END OF DI-MGMT-82274A&quot;). Every CDRL subset shifted, as the table above shows. A CDRL Block 16 that cites &quot;1–19 and 22–46&quot; against 82274A pulls the wrong fields.
              <Cite id={2} />
              <Cite id={4} />
            </li>
            <li>
              <strong>New identity and maintenance fields.</strong> Element 4, UEI (Unique Entity Identifier, SAM-issued), is Required. Element 15, LRU, asks whether the item is the lowest replaceable unit, required if the system has been provisioned.
              <Cite id={2} />
            </li>
            <li>
              <strong>Altered items are now tracked.</strong> New elements 27 to 31 ask whether an item is an altered item and, if so, for the original item number and the original manufacturer&apos;s CAGE, address, and website.
              <Cite id={2} />
            </li>
            <li>
              <strong>Item Class and Item Type were redefined.</strong> In 2019, Item Class was COTS or NDI and only required for assemblies considered COTS or NDI; Item Type was Component, Assembly, Material, or Software. In Rev A, Item Class (element 26) is COTS, NDI, MOTS, or Custom, required for all items except materials, and Item Type (element 32) is Software, Electronics, Electrical / Electromechanical, Mechanical, or Materials, each with a definition.
              <Cite id={2} />
              <Cite id={4} />
            </li>
            <li>
              <strong>Monitoring Status is Proactive or Reactive</strong> (element 25), replacing Yes or No.
              <Cite id={2} />
              <Cite id={4} />
            </li>
            <li>
              <strong>Alternates flipped direction.</strong> 2019&apos;s &quot;Alternate For&quot; was required if this item is an alternate for another BOM item. Rev A&apos;s &quot;Alternate OEM Item Number&quot; (element 24) lists the alternates for this item, comma-separated if more than one.
              <Cite id={2} />
              <Cite id={4} />
            </li>
            <li>
              <strong>Lead Time was redefined.</strong> 2019: &quot;the time between the manufacturers&apos; receipt of an order … and the delivery of the product.&quot; Rev A (element 36): &quot;the time between the contractor&apos;s order of the item … from the supplier and the receipt of the order.&quot; Still in months.
              <Cite id={2} />
              <Cite id={4} />
            </li>
            <li>
              <strong>Case fields are now plainly Required, and a start date was added.</strong> In 2019, case fields were required &quot;if a Case Number has been assigned&quot; or &quot;if a DMSMS issue has been identified.&quot; Rev A marks Case Status, Case Status Date, Case Description (formerly Case Status Description), Statement of Impact, Impact Date, and the Proposed Mitigation fields as &quot;Required,&quot; adds element 41, Case Start Date, and adds a note that, without a case number, references to a case mean the item itself.
              <Cite id={2} />
              <Cite id={4} />
            </li>
            <li>
              <strong>EOL gets a full date.</strong> 2019 EOL was month/year (mm/yyyy), with January for non-firm estimates. Rev A (element 53) is mm/dd/yyyy, with January 01 for non-firm estimates.
              <Cite id={2} />
              <Cite id={4} />
            </li>
            <li>
              <strong>Smaller wording changes.</strong> Stock on Hand now counts inventory &quot;held … either by or for the contractor&quot; (2019: &quot;owned by the contractor&quot;). Status adds notes defining Researching and Pending Discontinuance. Affected System allows a comma-separated list of systems. Indenture Level asks for a list ordered by indenture level.
              <Cite id={2} />
              <Cite id={4} />
            </li>
          </ol>

          <h2 className="text-2xl font-semibold tracking-tight mt-10 mb-3">How 82274 ties to SD-26 (June 2026) and your CDRLs</h2>
          <p>
            SD-26 is guidance, not a mandate. Its Foreword says, &quot;I urge you to read it thoroughly and use it on all new contracts and modifications to existing contracts&quot; (p. iv).
            <Cite id={3} /> Programs tailor it, and it does not endorse any tool. For the bigger picture, see{" "}
            <Link href="/sd-26-2026-explained" className="text-blue-600 hover:underline">SD-26 (June 2026) explained</Link>.
          </p>
          <p className="mt-3">
            SD-26 Table 7 (p. 53) lists the DMSMS CDRLs and DIDs, and Appendix A has &quot;a CDRL template (which provides illustrative information for creating the CDRL by completing DD Form 1423)&quot; for each.
            <Cite id={3} /> Six of those CDRLs use DI-MGMT-82274:
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-2">
            <li>Template 4: DMSMS Bills of Materials (Requirement 8)</li>
            <li>Template 5: DMSMS Case Data (Requirements 14, 22a, 22c)</li>
            <li>Template 6: DMSMS Change and Discontinuance Notification Data (Requirement 13)</li>
            <li>Template 7: DMSMS Case Mitigation, Cost, and Budgeting Data (Requirement 23)</li>
            <li>Template 8: Proactively Monitored Parts List (Requirement 12)</li>
            <li>Template 9: DMSMS Issue Mitigation Data (Requirement 16)</li>
          </ul>
          <p className="mt-3">Because one DID serves many CDRLs, the Block 3 subtitle is what tells them apart.</p>
          <p className="mt-3">
            <strong>What the Appendix A templates say</strong> (all citing DI-MGMT-82274A):
            <Cite id={3} />
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-2">
            <li><strong>BOM (Figure 6, p. A-5):</strong> elements 1–33. The first submission depends on the phase, for example &quot;EMD—At CDR,&quot; or in sustainment, &quot;60 days from the beginning of the contract.&quot; Updates are due &quot;NLT 60 days after&quot; configuration changes are finalized.</li>
            <li><strong>Case data (Figure 7, p. A-6):</strong> monthly (MTHLY), first at 60DAC; elements 1–21 and 24–54.</li>
            <li><strong>Notifications (Figure 8, p. A-7):</strong> report &quot;within 1 week of discovering the issue&quot;; elements 1–3, 12, 17–21, and 52–61.</li>
            <li><strong>Mitigation, cost, and budgeting (Figure 9, p. A-8):</strong> data used to project resolution costs &quot;for the next federal budget year and for the succeeding 5 years&quot;; first delivery at 180DAC, then annually.</li>
            <li><strong>Proactively monitored parts list (Figure 10, p. A-9):</strong> annually (ANNLY), first at 90DAC.</li>
            <li><strong>Review time:</strong> the BOM, case data, mitigation/cost/budgeting, and PMPL templates (Figures 6, 7, 9, and 10) give the government 30 days to review and the contractor 15 days to incorporate comments (Block 8). Figure 8 (notifications) has no such note. Figure 11 (DMSMS Issue Mitigation Plan, p. A-10) gives the government 1 month to approve or disapprove and the contractor 30 days to resubmit or provide a final copy.</li>
          </ul>
          <p className="mt-3">
            <strong>Ties to the SD-26 requirements we cover elsewhere.</strong> Requirement 12 (p. 15) says the contractor &quot;shall use predictive tools&quot; to forecast and monitor, and the PMPL template delivers those results under 82274A. See our guide to{" "}
            <Link href="/sd-26-predictive-tools-design-health" className="text-blue-600 hover:underline">Requirement 12 predictive tools and design health</Link>
            . On funding (p. 20), Requirements 21, 14, and 23 &quot;provide mechanisms for data which can support the estimation of the amount of funding needed to deal with known and forecasted DMSMS issues,&quot; so 82274 case and cost data feed prefunding decisions.
            <Cite id={3} /> More on that in{" "}
            <Link href="/who-pays-for-dmsms-resolutions" className="text-blue-600 hover:underline">who pays for DMSMS resolutions</Link>.
          </p>
          <p className="mt-3">
            <strong>A practitioner gotcha: element numbers in SD-26 don&apos;t all match Rev A.</strong>
            <Cite id={3} />
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-2">
            <li>Requirement 7, on flow-down (p. 11), still says subcontractor case data uses &quot;data elements 1–19 and 22–46.&quot; Those are the 2019 numbers. Appendix A Figure 7 uses Rev A&apos;s &quot;1–21 and 24–54.&quot;</li>
            <li>Figure 10&apos;s PMPL list (p. A-9) reads &quot;1–6, 8–12, 17–21, 26–32,&quot; while the DID&apos;s own PMPL list is 25–32.</li>
            <li>Reference [17] lists DI-MGMT-82274A with the date July 2, 2019, which is the base document&apos;s date.</li>
          </ul>
          <p className="mt-3">None of this changes what you owe, but it is easy to copy the wrong range. Before the first delivery, reconcile the element ranges in Block 16 against the DID revision cited in Block 4.</p>

          <h2 className="text-2xl font-semibold tracking-tight mt-10 mb-3">Who delivers what</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th scope="col" className="text-left border-b-2 border-silver-300 p-2">Party</th>
                  <th scope="col" className="text-left border-b-2 border-silver-300 p-2">What it does with 82274 data</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="text-left align-top border-b border-silver-200 p-2 font-semibold">Contractor (prime)</th>
                  <td className="align-top border-b border-silver-200 p-2">Prepares and delivers each tailored 82274 CDRL in CSV, to the component level, including non-commercial subcontractor items. Runs the risk analysis behind the PMPL, reports notifications within the CDRL window, maintains case data monthly, and projects resolution costs for the budget year plus 5.</td>
                </tr>
                <tr>
                  <th scope="row" className="text-left align-top border-b border-silver-200 p-2 font-semibold">Subcontractors</th>
                  <td className="align-top border-b border-silver-200 p-2">
                    Through flow-down (SD-26 Requirement 7), provide BOMs &quot;either to the contractor or directly to the government,&quot; provide notification of DMSMS issues &quot;within 1 week of discovery,&quot; and report case resolutions. Case data delivered directly to the government uses 82274 Table 1.
                    <Cite id={3} />
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-left align-top border-b border-silver-200 p-2 font-semibold">Program office (PMO)</th>
                  <td className="align-top border-b border-silver-200 p-2">
                    Tailors the DID in the CDRL: selects elements and completes DD Form 1423 Blocks 3, 4, 10, 12, 13, and 16. Reviews and approves deliverables (Block 8), uses the cost data for budgeting, and, per SD-26, &quot;must provide the necessary programmatic and logistics data, cost factors, and product roadmaps&quot; (p. 20).
                    <Cite id={3} />
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-left align-top border-b border-silver-200 p-2 font-semibold">DMSMS management team (DMT)</th>
                  <td className="align-top border-b border-silver-200 p-2">
                    Government and contractor members work the case data and resolution decisions. SD-26: &quot;Participation in DMT Meetings should be considered a necessity&quot; (p. 20).
                    <Cite id={3} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            One tailoring note: SD-26 says that if the program office is &quot;conducting DMSMS management activities and collecting case data using DI-MGMT-82274A,&quot; some of these reports &quot;may not be needed&quot; (Appendix A, Figures 9 and 10).
            <Cite id={3} />
          </p>

          <h2 className="text-2xl font-semibold tracking-tight mt-10 mb-3">How a BOM-level obsolescence check helps you produce 82274 data</h2>
          <p>Every 82274 deliverable starts with a clean, indentured BOM. The fields teams scramble to fill are the lifecycle and notification ones: Date of Notification, Notification Description, Recommended Replacement Item, Last Order Date, and Last Ship Date (elements 55 to 61).</p>
          <p className="mt-3">SONAR AI flags obsolescence, availability, and allocation risk across electronics and oddball hardware, including mechanical parts and assemblies. That gives your team a prioritized starting point for the PMPL risk analysis, notification reporting, and new case openings. Availability counts too: a lead time that jumps from 6 to 26 weeks is a buy-now-or-wait signal worth surfacing before it becomes a case.</p>
          <p className="mt-3">
            It won&apos;t write your CDRL for you, but it helps you assemble and sanity-check the data and gives your DMT a head start. See how the{" "}
            <Link href="/bom-health-check" className="text-blue-600 hover:underline">free BOM health check</Link> works.
          </p>

          <h2 className="text-2xl font-semibold tracking-tight mt-10 mb-3">Get a free BOM check</h2>
          <p><strong>Get a free BOM check: up to 100 line items, returned within 2 business days.</strong></p>
          <div className="mt-4">
            <Link href="/bom-health-check" className="btn-primary inline-flex items-center justify-center text-white px-5 py-2.5 rounded-lg text-sm font-semibold">
              Send a BOM
            </Link>
          </div>

          <h2 className="text-2xl font-semibold tracking-tight mt-10 mb-3">Frequently asked questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">What is DI-MGMT-82274?</h3>
              <p className="mt-1">The DoD data item description &quot;DMSMS Life Cycle Management Data.&quot; It defines a single Table 1 of data elements that CDRLs tailor to request DMSMS BOMs, monitored parts lists, product change and discontinuance notifications, case data, and case mitigation, cost, and budgeting data. It is Distribution A and available on ASSIST.</p>
            </div>
            <div>
              <h3 className="font-semibold">What is the current revision of DI-MGMT-82274?</h3>
              <p className="mt-1">Revision A (DI-MGMT-82274A), dated 25 February 2026, 14 pages. It replaced the 2 July 2019 base document. ASSIST lists its next review as due 24 February 2031.</p>
            </div>
            <div>
              <h3 className="font-semibold">What changed in DI-MGMT-82274 Rev A?</h3>
              <p className="mt-1">Table 1 grew from 53 to 61 elements, so every CDRL subset was renumbered. New fields include UEI, LRU, Case Start Date, and five altered-item fields. Item Class, Item Type, Monitoring Status, Lead Time, and EOL were redefined. CSV delivery was already required in 2019 and is unchanged.</p>
            </div>
            <div>
              <h3 className="font-semibold">What format does DI-MGMT-82274A require?</h3>
              <p className="mt-1">Paragraph 3 requires tabular data with the Table 1 field names as column labels, delivered as &quot;an electronically editable, machine-readable, Comma Separated Values (CSV) text file with text fields enclosed in double quotation marks.&quot;</p>
            </div>
            <div>
              <h3 className="font-semibold">Which data elements go in a DMSMS BOM CDRL?</h3>
              <p className="mt-1">Under 82274A, elements 1–33, per Use/relationship paragraph d(2), and SD-26 (2026) Appendix A, Figure 6. Under the 2019 base, the BOM range was elements 1–26.</p>
            </div>
            <div>
              <h3 className="font-semibold">Which data elements does DMSMS case data use?</h3>
              <p className="mt-1">Under Rev A, elements 1–21 and 24–54. The 2019 numbering was 1–19 and 22–46, which still appears in SD-26 (2026) Requirement 7. Match the range to the DID revision cited in Block 4 of your DD Form 1423.</p>
            </div>
            <div>
              <h3 className="font-semibold">Does SD-26 require DI-MGMT-82274?</h3>
              <p className="mt-1">No. SD-26 is a DSPO contracting guide, not a mandate. Its Foreword urges programs to use it on new contracts and modifications, and its Table 7 and Appendix A give illustrative CDRL templates that cite 82274A. Your contract&apos;s CDRL is what obligates delivery.</p>
            </div>
            <div>
              <h3 className="font-semibold">Who delivers DI-MGMT-82274 data?</h3>
              <p className="mt-1">The contractor delivers it, including non-commercial subcontractor items down to the component level. Subcontractors provide BOMs, notifications, and resolutions through flow-down. The program office tailors and approves the CDRL, and the DMT uses the case data for resolution and funding decisions.</p>
            </div>
            <div>
              <h3 className="font-semibold">How often is DI-MGMT-82274 data delivered?</h3>
              <p className="mt-1">Whatever the CDRL says. SD-26&apos;s templates suggest case data monthly, notifications within 1 week of discovery, the PMPL annually with the first at 90 DAC, and mitigation, cost, and budgeting data annually with the first at 180 DAC, projecting costs for the budget year plus 5.</p>
            </div>
            <div>
              <h3 className="font-semibold">How can I get a head start on 82274 BOM and notification data?</h3>
              <p className="mt-1">Run a BOM-level obsolescence check. Blue Water Components offers a free SONAR AI BOM check of up to 100 line items, returned within 2 business days.</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold tracking-tight mt-10 mb-3">Sources</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li id="source-1">
              ASSIST QuickSearch, DI-MGMT-82274 document details (DLA):{" "}
              <a className="text-blue-600 hover:underline break-all" href="https://quicksearch.dla.mil/qsDocDetails.aspx?ident_number=283245" target="_blank" rel="noopener noreferrer">
                https://quicksearch.dla.mil/qsDocDetails.aspx?ident_number=283245
              </a>
            </li>
            <li id="source-2">
              DI-MGMT-82274A, DMSMS Life Cycle Management Data (approved 25 February 2026), official PDF from ASSIST:{" "}
              <a className="text-blue-600 hover:underline break-all" href="https://quicksearch.dla.mil/qsDocDetails.aspx?ident_number=283245" target="_blank" rel="noopener noreferrer">
                https://quicksearch.dla.mil/qsDocDetails.aspx?ident_number=283245
              </a>
            </li>
            <li id="source-3">
              SD-26, DMSMS and PM&amp;P Management Contracting Guide (June 2026), DLA ASSIST:{" "}
              <a className="text-blue-600 hover:underline break-all" href="https://quicksearch.dla.mil/qsdocdetails.aspx?ident_number=283456" target="_blank" rel="noopener noreferrer">
                https://quicksearch.dla.mil/qsdocdetails.aspx?ident_number=283456
              </a>
            </li>
            <li id="source-4">DI-MGMT-82274, DMSMS Life Cycle Management Data (approved 2 July 2019; AMSC 10040; project MGMT-2019-012), superseded base revision, official PDF.</li>
          </ol>
          <p className="mt-6 text-sm text-silver-500">
            Not legal or contracting advice; your CDRL governs. DI-MGMT-82274 and SD-26 are DoD and DSPO documents. Blue Water Components is not affiliated with or endorsed by DSPO or the Department of Defense.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
