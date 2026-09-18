"use client";

import { useState, useRef } from "react";

export interface CustomOrderFormData {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  email: string;
  phone: string;
  message: string;
  file: File | null;
}

export default function CustomOrderForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<CustomOrderFormData>({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    email: "",
    phone: "",
    message: "",
    file: null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

  const handleFileSelect = (selectedFile: File | null) => {
    if (!selectedFile) return;

    // Validate size (max 25MB)
    const MAX_SIZE_MB = 25;
    if (selectedFile.size > MAX_SIZE_MB * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        file: `File size exceeds the ${MAX_SIZE_MB}MB limit.`,
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, file: selectedFile }));
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy.file;
      return copy;
    });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = "Required";
    if (!formData.lastName.trim()) newErrors.lastName = "Required";
    if (!formData.address.trim()) newErrors.address = "Required";
    if (!formData.email.trim()) {
      newErrors.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Required";
    if (!formData.message.trim()) newErrors.message = "Required";
    if (formData.message.trim().length > 200) newErrors.message = "200-character limit exceeded";
    if (!formData.file) newErrors.file = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      // Scroll smoothly to first error
      const firstErrorKey = Object.keys(errors)[0];
      if (firstErrorKey) {
        document.getElementById(firstErrorKey)?.focus();
      }
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFormData({
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      email: "",
      phone: "",
      message: "",
      file: null,
    });
    setErrors({});
  };

  if (submitted) {
    return (
      <div className="bg-white border border-[#E4E4E7] p-8 sm:p-14 text-center space-y-6 shadow-xl max-w-2xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center mx-auto text-2xl font-bold border border-[#C5A059]/30">
          ✓
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-light uppercase tracking-tight text-[#121212]">
            Submission Successful<span className="font-semibold text-[#121212]">.</span>
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
          Thank you. Your inquiry has been sent to our team. We will review your specs and be in contact shortly.
        </p>

        <button
          onClick={handleResetForm}
          className="mt-6 inline-flex items-center justify-center px-8 py-3.5 bg-[#121212] text-[#FAF9F6] text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A059] transition-all duration-300 shadow-md"
        >
          Submit Another →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full space-y-6">
      
      {/* Name Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-1.5">
          <label htmlFor="firstName" className="text-xs uppercase tracking-wider text-[#121212] font-semibold block">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white border text-sm text-[#121212] focus:outline-none transition-colors ${
              errors.firstName ? "border-red-500 focus:border-red-500" : "border-[#E4E4E7] focus:border-[#121212]"
            }`}
          />
          {errors.firstName && <p className="text-[11px] text-red-500 font-medium">{errors.firstName}</p>}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="lastName" className="text-xs uppercase tracking-wider text-[#121212] font-semibold block">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white border text-sm text-[#121212] focus:outline-none transition-colors ${
              errors.lastName ? "border-red-500 focus:border-red-500" : "border-[#E4E4E7] focus:border-[#121212]"
            }`}
          />
          {errors.lastName && <p className="text-[11px] text-red-500 font-medium">{errors.lastName}</p>}
        </div>
      </div>

      {/* Address */}
      <div className="space-y-1.5">
        <label htmlFor="address" className="text-xs uppercase tracking-wider text-[#121212] font-semibold block">
          Office / Business Address <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-white border text-sm text-[#121212] focus:outline-none transition-colors ${
            errors.address ? "border-red-500 focus:border-red-500" : "border-[#E4E4E7] focus:border-[#121212]"
          }`}
        />
        {errors.address && <p className="text-[11px] text-red-500 font-medium">{errors.address}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-1.5">
          <label htmlFor="city" className="text-xs uppercase tracking-wider text-[#121212] font-semibold block">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-[#E4E4E7] text-sm text-[#121212] focus:outline-none focus:border-[#121212] transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="state" className="text-xs uppercase tracking-wider text-[#121212] font-semibold block">
            State/Province
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-[#E4E4E7] text-sm text-[#121212] focus:outline-none focus:border-[#121212] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-1.5">
          <label htmlFor="zip" className="text-xs uppercase tracking-wider text-[#121212] font-semibold block">
            ZIP / Postal Code
          </label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-[#E4E4E7] text-sm text-[#121212] focus:outline-none focus:border-[#121212] transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="country" className="text-xs uppercase tracking-wider text-[#121212] font-semibold block">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-[#E4E4E7] text-sm text-[#121212] focus:outline-none focus:border-[#121212] transition-colors"
          />
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
            className={`w-full px-4 py-3 bg-white border text-sm text-[#121212] focus:outline-none transition-colors ${
              errors.email ? "border-red-500 focus:border-red-500" : "border-[#E4E4E7] focus:border-[#121212]"
            }`}
          />
          {errors.email && <p className="text-[11px] text-red-500 font-medium">{errors.email}</p>}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-xs uppercase tracking-wider text-[#121212] font-semibold block">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white border text-sm text-[#121212] focus:outline-none transition-colors ${
              errors.phone ? "border-red-500 focus:border-red-500" : "border-[#E4E4E7] focus:border-[#121212]"
            }`}
          />
          {errors.phone && <p className="text-[11px] text-red-500 font-medium">{errors.phone}</p>}
        </div>
      </div>

      {/* Message Area */}
      <div className="space-y-1.5">
        <div className="flex justify-between">
          <label htmlFor="message" className="text-xs uppercase tracking-wider text-[#121212] font-semibold block">
            Text <span className="text-red-500">*</span>
          </label>
          <span className={`text-[10px] ${formData.message.length > 200 ? 'text-red-500' : 'text-zinc-400'}`}>
            {formData.message.length} / 200
          </span>
        </div>
        <textarea
          id="message"
          name="message"
          rows={3}
          maxLength={200}
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-white border text-sm text-[#121212] focus:outline-none transition-colors resize-none ${
            errors.message ? "border-red-500 focus:border-red-500" : "border-[#E4E4E7] focus:border-[#121212]"
          }`}
        />
        {errors.message && <p className="text-[11px] text-red-500 font-medium">{errors.message}</p>}
      </div>

      {/* File Upload */}
      <div className="space-y-1.5">
        <label className="text-xs uppercase tracking-wider text-[#121212] font-semibold block">
          Upload file <span className="text-red-500">*</span>
        </label>
        
        <input
          ref={fileInputRef}
          type="file"
          id="fileInput"
          accept=".png,.jpg,.jpeg,.pdf,.ai,.eps,.psd,.svg"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              handleFileSelect(e.target.files[0]);
            }
          }}
          className="hidden"
        />

        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border border-dashed p-6 text-center cursor-pointer transition-all ${
            isDragOver
              ? "border-[#C5A059] bg-[#C5A059]/5 scale-[0.99]"
              : formData.file
              ? "border-emerald-500 bg-emerald-50/50"
              : errors.file
              ? "border-red-500 bg-red-50"
              : "border-[#E4E4E7] bg-white hover:border-zinc-400"
          }`}
        >
          {formData.file ? (
            <div className="flex items-center justify-between gap-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs uppercase">
                  {formData.file.name.split(".").pop()}
                </div>
                <div>
                  <span className="text-xs font-semibold text-zinc-900 block truncate max-w-[240px] sm:max-w-xs">
                    {formData.file.name}
                  </span>
                  <span className="text-[10px] text-zinc-500">
                    {(formData.file.size / (1024 * 1024)).toFixed(2)} MB
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setFormData((prev) => ({ ...prev, file: null }));
                }}
                className="px-3 py-1.5 bg-red-100 text-red-700 text-[10px] font-semibold uppercase tracking-wider hover:bg-red-200 transition-colors"
              >
                ✕ Remove
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="space-y-0.5">
                <span className="text-xs text-zinc-800 font-semibold block">
                  Drag and Drop (or) <span className="text-[#C5A059] underline">Choose Files</span>
                </span>
              </div>
            </div>
          )}
        </div>
        {errors.file && <p className="text-[11px] text-red-500 font-medium">{errors.file}</p>}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-3.5 bg-[#121212] text-[#FAF9F6] text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A059] disabled:opacity-60 transition-all duration-300 shadow-md"
        >
          {isSubmitting ? (
            <span>Submitting...</span>
          ) : (
            <span>Submit</span>
          )}
        </button>
      </div>
    </form>
  );
}
