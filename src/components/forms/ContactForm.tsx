"use client";

import { useState } from "react";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject) {
      newErrors.subject = "Please select an inquiry topic.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message content is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate safe client submit transition
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "General Inquiry",
      message: "",
    });
    setErrors({});
  };

  if (submitted) {
    return (
      <div className="bg-white border border-[#E4E4E7] p-8 sm:p-12 text-center space-y-6 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center mx-auto text-2xl font-bold border border-[#C5A059]/30">
          ✓
        </div>
        <div className="space-y-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
            Message Sent
          </span>
          <h3 className="text-2xl font-light uppercase tracking-tight text-[#121212]">
            Thank You for Contacting Us<span className="font-semibold text-[#121212]">.</span>
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-[#121212]">{formData.name}</span>. We have received your inquiry regarding <span className="font-semibold text-[#121212]">{formData.subject}</span>. Our New York support team will respond to <span className="text-[#C5A059] font-medium">{formData.email}</span> within 24 business hours.
        </p>

        <button
          onClick={handleReset}
          className="mt-4 inline-flex items-center justify-center px-8 py-3.5 bg-[#121212] text-[#FAF9F6] text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A059] transition-all duration-300 shadow-md"
        >
          Send Another Message →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white border border-[#E4E4E7] p-6 sm:p-10 space-y-6 shadow-sm">
      <div className="border-b border-[#E4E4E7] pb-4 space-y-1">
        <h3 className="text-xl font-semibold uppercase tracking-tight text-[#121212]">
          Send Us a Direct Message
        </h3>
        <p className="text-xs text-zinc-500">
          Have a question or request? Fill out the form below and we will get back to you shortly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs uppercase tracking-wider text-[#121212] font-semibold block">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
            className={`w-full px-4 py-3 bg-[#FAF9F6] border text-sm text-[#121212] focus:outline-none transition-colors ${
              errors.name ? "border-red-500 focus:border-red-500" : "border-[#E4E4E7] focus:border-[#121212]"
            }`}
          />
          {errors.name && <p className="text-[11px] text-red-500 font-medium">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs uppercase tracking-wider text-[#121212] font-semibold block">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={`w-full px-4 py-3 bg-[#FAF9F6] border text-sm text-[#121212] focus:outline-none transition-colors ${
              errors.email ? "border-red-500 focus:border-red-500" : "border-[#E4E4E7] focus:border-[#121212]"
            }`}
          />
          {errors.email && <p className="text-[11px] text-red-500 font-medium">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Phone */}
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-xs uppercase tracking-wider text-[#121212] font-semibold block">
            Phone Number <span className="text-zinc-400 font-normal">(Optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(631) 481-0010"
            className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#E4E4E7] text-sm text-[#121212] focus:outline-none focus:border-[#121212] transition-colors"
          />
        </div>

        {/* Topic / Subject */}
        <div className="space-y-1.5">
          <label htmlFor="subject" className="text-xs uppercase tracking-wider text-[#121212] font-semibold block">
            Inquiry Topic <span className="text-red-500">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-[#FAF9F6] border text-sm text-[#121212] focus:outline-none transition-colors ${
              errors.subject ? "border-red-500 focus:border-red-500" : "border-[#E4E4E7] focus:border-[#121212]"
            }`}
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Retail Order Status">Retail Order Status</option>
            <option value="Custom Apparel Quote">Custom Apparel Quote</option>
            <option value="Bulk Wholesale Request">Bulk Wholesale Request</option>
            <option value="Press & Partnership">Press & Partnership</option>
          </select>
          {errors.subject && <p className="text-[11px] text-red-500 font-medium">{errors.subject}</p>}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-xs uppercase tracking-wider text-[#121212] font-semibold block">
          Message / Details <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we assist you today?"
          className={`w-full px-4 py-3 bg-[#FAF9F6] border text-sm text-[#121212] focus:outline-none transition-colors resize-none ${
            errors.message ? "border-red-500 focus:border-red-500" : "border-[#E4E4E7] focus:border-[#121212]"
          }`}
        />
        {errors.message && <p className="text-[11px] text-red-500 font-medium">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#121212] text-[#FAF9F6] text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A059] disabled:opacity-60 transition-all duration-300 shadow-md"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Sending Message...</span>
            </>
          ) : (
            <span>Send Message →</span>
          )}
        </button>
      </div>
    </form>
  );
}
