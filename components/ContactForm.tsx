"use client";

import React, { useState } from "react";
import { Mail } from "lucide-react";
import { companyInfo } from "@/lib/data";

interface FormState {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  message: "",
};

function buildMailto(form: FormState): string {
  const subject = `Quote request from ${form.name}`;
  const body = [
    `Name: ${form.name}`,
    `Company: ${form.company}`,
    `Email: ${form.email}`,
    form.phone ? `Phone: ${form.phone}` : null,
    `Service: ${form.service}`,
    "",
    form.message,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  return `mailto:${companyInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [mailPrompted, setMailPrompted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setMailPrompted(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No server endpoint is configured. Hand the draft to the visitor's email app.
    // The site does not receive or store this submission.
    setMailPrompted(true);
    const href = buildMailto(form);
    // Let the "not received" status paint before the mail client takes over.
    window.setTimeout(() => {
      window.location.href = href;
    }, 0);
  };

  return (
    <form
      onSubmit={handleSubmit}
      action={`mailto:${companyInfo.email}`}
      method="post"
      encType="text/plain"
      className="bg-white border border-silver-200 rounded-3xl p-8 md:p-10"
    >
      <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-navy-900" role="status">
        <p className="font-semibold">This form is not connected yet.</p>
        <p className="mt-1 text-silver-500">
          Nothing you type here is sent to Blue Water. Use the button to open your email app, or write directly to{" "}
          <a href={`mailto:${companyInfo.email}`} className="text-blue-600 underline">
            {companyInfo.email}
          </a>
          . We only receive the message after you send that email.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-navy-900">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="form-input w-full rounded-xl px-5 py-3 text-base bg-silver-50 focus:bg-white"
            placeholder="Alex Rivera"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2 text-navy-900">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            required
            value={form.company}
            onChange={handleChange}
            className="form-input w-full rounded-xl px-5 py-3 text-base bg-silver-50 focus:bg-white"
            placeholder="Aether Systems"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5 mt-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-navy-900">Work Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="form-input w-full rounded-xl px-5 py-3 text-base bg-silver-50 focus:bg-white"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2 text-navy-900">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="form-input w-full rounded-xl px-5 py-3 text-base bg-silver-50 focus:bg-white"
            placeholder="(813) 555-0144"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="service" className="block text-sm font-medium mb-2 text-navy-900">Service of Interest</label>
        <select
          id="service"
          name="service"
          required
          value={form.service}
          onChange={handleChange}
          className="form-input w-full rounded-xl px-5 py-3 text-base bg-silver-50 focus:bg-white appearance-none"
        >
          <option value="">Select a service...</option>
          <option value="Electronics Distribution">Electronics Distribution</option>
          <option value="Design Win Support">Design Win Support</option>
          <option value="Supply Chain Solutions">Supply Chain Solutions</option>
          <option value="Value-Added Services">Value-Added Services (Kitting / Programming)</option>
          <option value="Other">Other / General Inquiry</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-navy-900">Project Details or Requirements</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="form-input w-full rounded-2xl px-5 py-4 text-base bg-silver-50 focus:bg-white resize-y min-h-[120px]"
          placeholder="Please describe your current project, target quantities, or specific components you are looking for..."
        />
      </div>

      <button
        type="submit"
        className="btn-primary mt-7 w-full md:w-auto px-10 py-4 rounded-2xl text-white font-semibold flex items-center justify-center gap-3"
      >
        Email this request
        <Mail size={18} />
      </button>

      {mailPrompted && (
        <p className="text-sm text-navy-900 mt-4" role="status">
          Your email app should open with this draft. This website did not receive it. Send the email to deliver it to {companyInfo.email}.
        </p>
      )}

      <p className="text-xs text-silver-400 mt-5">
        The website does not store this form. If you send the email, we use it only to respond to your inquiry.
      </p>
    </form>
  );
}
