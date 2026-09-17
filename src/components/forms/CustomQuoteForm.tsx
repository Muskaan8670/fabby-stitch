"use client";

import { useState, useRef } from "react";
import { CATEGORIES } from "@/data/categories";

export interface CustomOrderFormData {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  productCategory: string;
  customizationMethod: string;
  quantity: string;
  targetDate: string;
  message: string;
  file: File | null;
}

export default function CustomQuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<CustomOrderFormData>({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
    productCategory: "",
    customizationMethod: "",
    quantity: "25-49",
    targetDate: "",
    message: "",
    file: null,
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

    // Validate type
    const validExtensions = ["png", "jpg", "jpeg", "pdf", "ai", "eps", "psd", "svg"];
    const ext = selectedFile.name.split(".").pop()?.toLowerCase();
    if (!ext || !validExtensions.includes(ext)) {
      setErrors((prev) => ({
        ...prev,
        file: "Invalid file format. Supported: PNG, JPG, PDF, AI, EPS, PSD, SVG",
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

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.address.trim()) newErrors.address = "Business address is required.";
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.state.trim()) newErrors.state = "State is required.";
    if (!formData.zip.trim()) newErrors.zip = "ZIP code is required.";
    if (!formData.productCategory) newErrors.productCategory = "Please select an apparel category.";
    if (!formData.customizationMethod) newErrors.customizationMethod = "Please select a customization method.";
    if (!formData.message.trim()) newErrors.message = "Please describe your project requirements.";

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

    // Simulate safe client submit transition
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
      companyName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "United States",
      productCategory: "",
      customizationMethod: "",
      quantity: "25-49",
      targetDate: "",
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
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
            Inquiry Registered
          </span>
          <h3 className="text-2xl sm:text-3xl font-light uppercase tracking-tight text-[#121212]">
            Custom Order Request Received<span className="font-semibold text-[#121212]">.</span>
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-[#121212]">{formData.firstName} {formData.lastName}</span>. Your custom apparel inquiry for{" "}
          <span className="font-semibold text-[#121212]">{formData.companyName || "your project"}</span> has been logged. Our New York production studio will review your specifications and contact you within 24 business hours.
        </p>

        <div className="bg-[#FAF9F6] border border-[#E4E4E7] p-4 text-left text-xs space-y-2 max-w-md mx-auto">
          <div className="flex justify-between border-b border-zinc-200 pb-1.5">
            <span className="text-zinc-500 uppercase tracking-wider font-medium">Apparel Category:</span>
            <span className="font-semibold text-zinc-900">{formData.productCategory}</span>
          </div>
          <div className="flex justify-between border-b border-zinc-200 pb-1.5">
            <span className="text-zinc-500 uppercase tracking-wider font-medium">Customization:</span>
            <span className="font-semibold text-zinc-900">{formData.customizationMethod}</span>
          </div>
          <div className="flex justify-between border-b border-zinc-200 pb-1.5">
            <span className="text-zinc-500 uppercase tracking-wider font-medium">Est. Quantity:</span>
            <span className="font-semibold text-zinc-900">{formData.quantity} units</span>
          </div>
          {formData.file && (
            <div className="flex justify-between">
              <span className="text-zinc-500 uppercase tracking-wider font-medium">Attached File:</span>
              <span className="font-semibold text-[#C5A059] truncate max-w-[200px]">{formData.file.name}</span>
            </div>
          )}
        </div>

        <button
          onClick={handleResetForm}
          className="mt-6 inline-flex items-center justify-center px-8 py-3.5 bg-[#121212] text-[#FAF9F6] text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A059] transition-all duration-300 shadow-md"
        >
          Submit Another Request →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white border border-[#E4E4E7] p-6 sm:p-10 space-y-8 shadow-sm">
      <div className="border-b border-[#E4E4E7] pb-4 space-y-1">
        <h3 className="text-xl font-semibold uppercase tracking-tight text-[#121212]">
          Custom Apparel Order Request
        </h3>
        <p className="text-xs text-zinc-500 font-normal">
          Complete the form below to receive direct workshop pricing and production timelines.
        </p>
      </div>

      {/* 1. Contact Information */}
      <div className="space-y-4">
        <h4 className="text-xs uppercase tracking-widest text-[#C5A059] font-bold border-b border-zinc-100 pb-2">
          1. Contact & Business Information
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* First Name */}
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
              placeholder="e.g. Sarah"
              className={`w-full px-4 py-3 bg-[#FAF9F6] border text-sm text-[#121212] focus:outline-none transition-colors ${
                errors.firstName ? "border-red-500 focus:border-red-500" : "border-[#E4E4E7] focus:border-[#121212]"
              }`}
            />
            {errors.firstName && <p className="text-[11px] text-red-500 font-medium">{errors.firstName}</p>}
          </div>

          {/* Last Name */}
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
              placeholder="e.g. Jenkins"
              className={`w-full px-4 py-3 bg-[#FAF9F6] border text-sm text-[#121212] focus:outline-none transition-colors ${
                errors.lastName ? "border-red-500 focus:border-red-500" : "border-[#E4E4E7] focus:border-[#121212]"
              }`}
            />
            {errors.lastName && <p className="text-[11px] text-red-500 font-medium">{errors.lastName}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Company Name */}
          <div className="space-y-1.5">
            <label htmlFor="companyName" className="text-xs uppercase tracking-wider text-[#121212] font-semibold block">
              Company / Organization <span className="text-zinc-400 font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. Empire Tech Co."
              className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#E4E4E7] text-sm text-[#121212] focus:outline-none focus:border-[#121212] transition-colors"
            />
          </div>

          {/* Email Address */}
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
              placeholder="sarah@empiretech.com"
              className={`w-full px-4 py-3 bg-[#FAF9F6] border text-sm text-[#121212] focus:outline-none transition-colors ${
                errors.email ? "border-red-500 focus:border-red-500" : "border-[#E4E4E7] focus:border-[#121212]"
              }`}
            />
            {errors.email && <p className="text-[11px] text-red-500 font-medium">{errors.email}</p>}
          </div>
        </div>

        {/* Phone Number */}
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-xs uppercase tracking-wider text-[#121212] font-semibold block">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(631) 481-0010"
            className={`w-full px-4 py-3 bg-[#FAF9F6] border text-sm text-[#121212] focus:outline-none transition-colors ${
              errors.phone ? "border-red-500 focus:border-red-500" : "border-[#E4E4E7] focus:border-[#121212]"
            }`}
          />
          {errors.phone && <p className="text-[11px] text-red-500 font-medium">{errors.phone}</p>}
        </div>
      </div>

      {/* 2. Address Details */}
      <div className="space-y-4 pt-2">
        <h4 className="text-xs uppercase tracking-widest text-[#C5A059] font-bold border-b border-zinc-100 pb-2">
          2. Delivery & Office Address
        </h4>

        <div className="space-y-1.5">
          <label htmlFor="address" className="text-xs uppercase tracking-wider text-[#121212] font-semibold block">
            Street Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="123 Corporate Blvd, Suite 400"
            className={`w-full px-4 py-3 bg-[#FAF9F6] border text-sm text-[#121212] focus:outline-none transition-colors ${
              errors.address ? "border-red-500 focus:border-red-500" : "border-[#E4E4E7] focus:border-[#121212]"
            }`}
          />
          {errors.address && <p className="text-[11px] text-red-500 font-medium">{errors.address}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="space-y-1.5">
            <label htmlFor="city" className="text-xs uppercase tracking-wider text-[#121212] font-semibold block">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="New York"
              className={`w-full px-4 py-3 bg-[#FAF9F6] border text-sm text-[#121212] focus:outline-none transition-colors ${
                errors.city ? "border-red-500 focus:border-red-500" : "border-[#E4E4E7] focus:border-[#121212]"
              }`}
            />
            {errors.city && <p className="text-[11px] text-red-500 font-medium">{errors.city}</p>}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="state" className="text-xs uppercase tracking-wider text-[#121212] font-semibold block">
              State / Province <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="NY"
              className={`w-full px-4 py-3 bg-[#FAF9F6] border text-sm text-[#121212] focus:outline-none transition-colors ${
                errors.state ? "border-red-500 focus:border-red-500" : "border-[#E4E4E7] focus:border-[#121212]"
              }`}
            />
            {errors.state && <p className="text-[11px] text-red-500 font-medium">{errors.state}</p>}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="zip" className="text-xs uppercase tracking-wider text-[#121212] font-semibold block">
              ZIP / Postal Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              placeholder="10001"
              className={`w-full px-4 py-3 bg-[#FAF9F6] border text-sm text-[#121212] focus:outline-none transition-colors ${
                errors.zip ? "border-red-500 focus:border-red-500" : "border-[#E4E4E7] focus:border-[#121212]"
              }`}
            />
            {errors.zip && <p className="text-[11px] text-red-500 font-medium">{errors.zip}</p>}
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="country" className="text-xs uppercase tracking-wider text-[#121212] font-semibold block">
            Country <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#E4E4E7] text-sm text-[#121212] focus:outline-none focus:border-[#121212] transition-colors"
          />
        </div>
      </div>

      {/* 3. Product & Customization Selection */}
      <div className="space-y-4 pt-2">
        <h4 className="text-xs uppercase tracking-widest text-[#C5A059] font-bold border-b border-zinc-100 pb-2">
          3. Apparel Specifications & Customization
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Product Category Dropdown */}
          <div className="space-y-1.5">
            <label htmlFor="productCategory" className="text-xs uppercase tracking-wider text-[#121212] font-semibold block">
              Apparel / Product Category <span className="text-red-500">*</span>
            </label>
            <select
              id="productCategory"
              name="productCategory"
              value={formData.productCategory}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-[#FAF9F6] border text-sm text-[#121212] focus:outline-none transition-colors ${
                errors.productCategory ? "border-red-500 focus:border-red-500" : "border-[#E4E4E7] focus:border-[#121212]"
              }`}
            >
              <option value="">-- Select Product Category --</option>
              {CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name} ({cat.subtitle})
                </option>
              ))}
              <option value="Mixed / Multiple Apparel">Mixed / Multiple Apparel Types</option>
              <option value="Custom Cut & Sew">Custom Cut & Sew / Private Label</option>
            </select>
            {errors.productCategory && <p className="text-[11px] text-red-500 font-medium">{errors.productCategory}</p>}
          </div>

          {/* Customization Method */}
          <div className="space-y-1.5">
            <label htmlFor="customizationMethod" className="text-xs uppercase tracking-wider text-[#121212] font-semibold block">
              Customization Technique <span className="text-red-500">*</span>
            </label>
            <select
              id="customizationMethod"
              name="customizationMethod"
              value={formData.customizationMethod}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-[#FAF9F6] border text-sm text-[#121212] focus:outline-none transition-colors ${
                errors.customizationMethod ? "border-red-500 focus:border-red-500" : "border-[#E4E4E7] focus:border-[#121212]"
              }`}
            >
              <option value="">-- Select Technique --</option>
              <option value="Direct Embroidery">Direct Flat Embroidery</option>
              <option value="3D Puff Embroidery">3D Raised Puff Embroidery</option>
              <option value="Plastisol Screen Printing">Plastisol Screen Printing</option>
              <option value="High-Density Screen Print">High-Density Screen Printing</option>
              <option value="Heat Transfer / DTF">Direct to Film (DTF) / Heat Transfer</option>
              <option value="Unsure / Recommend Technique">Unsure - Recommend Best Method</option>
            </select>
            {errors.customizationMethod && <p className="text-[11px] text-red-500 font-medium">{errors.customizationMethod}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Estimated Quantity */}
          <div className="space-y-1.5">
            <label htmlFor="quantity" className="text-xs uppercase tracking-wider text-[#121212] font-semibold block">
              Estimated Quantity Needed <span className="text-red-500">*</span>
            </label>
            <select
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#E4E4E7] text-sm text-[#121212] focus:outline-none focus:border-[#121212] transition-colors"
            >
              <option value="1-11">Sample / Small Batch (1-11 units)</option>
              <option value="12-24">12 - 24 units</option>
              <option value="25-49">25 - 49 units</option>
              <option value="50-99">50 - 99 units</option>
              <option value="100-249">100 - 249 units</option>
              <option value="250-499">250 - 499 units</option>
              <option value="500+">500+ Bulk Enterprise Batch</option>
            </select>
          </div>

          {/* Target Delivery Date */}
          <div className="space-y-1.5">
            <label htmlFor="targetDate" className="text-xs uppercase tracking-wider text-[#121212] font-semibold block">
              Target Delivery Date <span className="text-zinc-400 font-normal">(Optional)</span>
            </label>
            <input
              type="date"
              id="targetDate"
              name="targetDate"
              value={formData.targetDate}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#E4E4E7] text-sm text-[#121212] focus:outline-none focus:border-[#121212] transition-colors"
            />
          </div>
        </div>
      </div>

      {/* 4. Project Requirements & Drag and Drop File Upload */}
      <div className="space-y-4 pt-2">
        <h4 className="text-xs uppercase tracking-widest text-[#C5A059] font-bold border-b border-zinc-100 pb-2">
          4. Project Requirements & Logo Artwork
        </h4>

        {/* Textarea Message */}
        <div className="space-y-1.5">
          <label htmlFor="message" className="text-xs uppercase tracking-wider text-[#121212] font-semibold block">
            Project Description & Artwork Placement <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Specify garment colors, placement details (e.g. Left Chest 3.5” logo, Back print), size breakdowns, or custom neck tag requirements..."
            className={`w-full px-4 py-3 bg-[#FAF9F6] border text-sm text-[#121212] focus:outline-none transition-colors resize-none ${
              errors.message ? "border-red-500 focus:border-red-500" : "border-[#E4E4E7] focus:border-[#121212]"
            }`}
          />
          {errors.message && <p className="text-[11px] text-red-500 font-medium">{errors.message}</p>}
        </div>

        {/* Drag & Drop File Upload */}
        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-wider text-[#121212] font-semibold block">
            Attach Vector / Logo Artwork File <span className="text-zinc-400 font-normal">(Optional)</span>
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
            className={`border-2 border-dashed p-6 text-center cursor-pointer transition-all ${
              isDragOver
                ? "border-[#C5A059] bg-[#C5A059]/10 scale-[0.99]"
                : formData.file
                ? "border-emerald-500 bg-emerald-50/50"
                : "border-[#E4E4E7] bg-[#FAF9F6] hover:border-zinc-400"
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
                <svg className="w-8 h-8 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                </svg>
                <div className="space-y-0.5">
                  <span className="text-xs text-zinc-800 font-semibold block">
                    Drag and drop your artwork file here, or <span className="text-[#C5A059] underline">browse</span>
                  </span>
                  <span className="text-[10px] text-zinc-400 block">
                    Supported formats: PNG, JPG, PDF, AI, EPS, PSD, SVG (Max 25MB)
                  </span>
                </div>
              </div>
            )}
          </div>
          {errors.file && <p className="text-[11px] text-red-500 font-medium">{errors.file}</p>}
        </div>
      </div>

      {/* Submit Action */}
      <div className="pt-4 border-t border-[#E4E4E7]">
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
              <span>Processing Inquiry...</span>
            </>
          ) : (
            <span>Submit Custom Order Request →</span>
          )}
        </button>
      </div>
    </form>
  );
}
