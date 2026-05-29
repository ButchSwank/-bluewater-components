# Azure Static Web Apps Deployment Guide — Blue Water Components

**Goal**: Deploy the Next.js marketing site (SONAR AI focused) to Azure Static Web Apps using your existing resource group, then attach `bluewatercomponents.com`.

**Owner**: Vern (primary)  
**Support**: Butch / this repo

---

## Current Status (as of handoff)

- Site is a standard Next.js 14 App Router application.
- GitHub repo: `https://github.com/ButchSwank/-bluewater-components.git`
- The site is already live on Vercel as a **preview-only** environment (no custom domain).
- We are **not** completing the Vercel custom domain setup. Production domain goes straight to Azure.
- Files added for Azure:
  - `staticwebapp.config.json` (security headers + basic overrides)
  - `next.config.mjs` updated with `output: 'standalone'`

---

## Step 1: Create the Azure Static Web App (in existing Resource Group)

1. Go to the Azure Portal → **Create a resource** → search for **Static Web Apps** → **Create**.

2. On the **Basics** tab:
   - **Subscription**: Select the correct subscription.
   - **Resource group**: Choose your **existing** resource group from the dropdown (do not create a new one).
   - **Name**: Something like `bluewater-components` or `bluewater-sonar` (must be globally unique).
   - **Region / Location**: Use the **same location** as your existing resource group / site (this is important for Vern’s preference).
   - **Plan type**: Start with **Free** (you can upgrade later).
   - **Source**: Select **GitHub**.

3. Sign in with GitHub when prompted and authorize Azure Static Web Apps.

4. Select:
   - Organization: `ButchSwank`
   - Repository: `-bluewater-components` (note the leading dash)
   - Branch: `main`

5. Under **Build details**:
   - **Build preset**: Choose **Next.js** (or Custom if the preset doesn’t appear).
   - App location: `/`
   - Output location: `.next` (or leave blank — the `standalone` output handles it)
   - API location: Leave blank for now (we can add Functions later for the contact form)

6. Review + Create.

Azure will automatically commit a GitHub Actions workflow (`.github/workflows/azure-static-web-apps-*.yml`) to the repo.

---

## Step 2: First Deployment

- After creation, go to the new Static Web App resource.
- The first deployment will trigger automatically via GitHub Actions.
- Monitor progress in:
  - Azure Portal → **Deployment** blade, or
  - GitHub repo → **Actions** tab

Once complete, you’ll get a public URL like:
`https://<your-name>.azurestaticapps.net`

Test the site thoroughly (especially the product catalog, modals, and contact form demo).

---

## Step 3: Custom Domain (`bluewatercomponents.com`)

This is the trickiest part because the domain is currently at **GoDaddy**.

GoDaddy has poor support for apex domains (no reliable ALIAS/ANAME/CNAME flattening). Microsoft’s current recommended approaches (as of 2026) are:

### Recommended Options (choose one with Vern)

**Option A – Simplest (Recommended to start)**: Forward apex → www
- Make `www.bluewatercomponents.com` the primary (CNAME to Azure).
- Set up domain forwarding at GoDaddy from the apex to `https://www.bluewatercomponents.com` (301 redirect).

**Option B – Best long-term performance**: Move DNS to Azure DNS
- Keep the domain registered at GoDaddy.
- Delegate nameservers to an Azure DNS zone.
- Full apex + www support with global anycast.

**Option C – Direct apex (not recommended for performance)**
- Use the `stableInboundIP` A record (single region, loses CDN benefits).

**Process for any option**:
1. In the Azure Static Web App → **Custom domains** → **+ Add**.
2. Add `www.bluewatercomponents.com` first.
3. Use **TXT record** validation (Azure will generate a code).
4. Add the TXT record at GoDaddy for `@` or the host Azure specifies.
5. Once validated, add the CNAME record Azure provides.
6. Repeat for the apex if desired (or use forwarding).

After DNS propagates, Azure automatically provisions a free managed SSL certificate.

**Important**: Do **not** add the old Vercel records (216.150.1.1 + the long vercel-dns CNAME). Those were for the previous plan.

---

## Step 4: Post-Deployment Polish (Optional but Recommended)

Once the site is live on the custom domain:

- Decide primary domain (apex vs www) and configure the redirect.
- Review / expand `staticwebapp.config.json` for any additional headers or future protected routes (Entra ID).
- Wire up the Contact Form (currently demo mode):
  - Options: Azure Functions, Logic Apps, Resend, or Formspree.
- Consider adding environment variables in the Azure portal (Configuration → Application settings) if the form or other features need secrets.

---

## Questions for Vern Before Starting

Please reply with:

1. Exact name of the **existing Resource Group** we should use.
2. The **Region / Location** of that resource group (e.g. `eastus`, `centralus`, `westus2`).
3. Which subscription (if there are multiple).
4. Preference on custom domain approach:
   - A) Forward apex → www (easiest)
   - B) Move to Azure DNS (best performance)
   - C) Other / undecided

5. Is the marketing site staying **fully public** for the first launch, or do we need to plan Entra ID / authenticated sections soon?

---

## Useful Links

- Official: [Custom domains with Azure Static Web Apps](https://learn.microsoft.com/en-us/azure/static-web-apps/custom-domain)
- Apex domains with external provider (GoDaddy): [Apex domain documentation](https://learn.microsoft.com/en-us/azure/static-web-apps/apex-domain-external)
- Next.js on Azure Static Web Apps: [Hybrid deployment guide](https://learn.microsoft.com/en-us/azure/static-web-apps/nextjs)

---

Once you have the resource group name + region and your preference on the domain strategy, let me know and I can refine this guide with exact DNS record examples tailored to your situation.

Good luck, Vern — should be a satisfying project after the conference crunch. Happy to jump in for any stuck points (DNS, workflow tweaks, contact form backend, etc.).
