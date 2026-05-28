"use client";

import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

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

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - Replace with real endpoint (Formspree, Resend, etc.)
    await new Promise((resolve) => setTimeout(resolve, 850));

    // In production: 
    // await fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: JSON.stringify(form), headers: { 'Content-Type': 'application/json' } })
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after showing success
    setTimeout(() => {
      setForm(initialForm);
      setSubmitted(false);
    }, 3200);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-silver-200 rounded-3xl p-12 text-center">
        <div className="mx-auto w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={34} />
        </div>
        <h3 className="text-2xl font-semibold tracking-tight mb-3">Thank you, {form.name.split(" ")[0] || "there"}.</h3>
        <p className="text-silver-500 text-lg max-w-xs mx-auto">
          Your quote request has been received. A member of our team will contact you within 4 business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-silver-200 rounded-3xl p-8 md:p-10">
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
        disabled={isSubmitting}
        className="btn-primary mt-7 w-full md:w-auto px-10 py-4 rounded-2xl text-white font-semibold flex items-center justify-center gap-3 disabled:opacity-80 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting Request..." : "Submit Quote Request"}
        {!isSubmitting && <Send size={18} />}
      </button>

      <p className="text-xs text-silver-400 mt-5">
        We respect your privacy. Your information will only be used to respond to your inquiry. Typical response time is under 4 hours during business days.
      </p>
    </form>
  );
}
