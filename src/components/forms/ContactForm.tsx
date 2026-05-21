"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "aesthetics",
    message: "",
    hipaaConsent: false
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.hipaaConsent) return;

    setStatus("submitting");

    // Simulate secure API endpoint call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "aesthetics",
        message: "",
        hipaaConsent: false
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gold/15 relative overflow-hidden">
      {status === "success" ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={36} />
          </div>
          <h3 className="font-serif text-2xl font-bold text-primary-dark">Inquiry Received</h3>
          <p className="text-sm text-slate max-w-sm mx-auto leading-relaxed">
            Thank you for reaching out to GT Clinic. Our concierge team will review your request and contact you shortly.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 font-sans text-xs tracking-wider uppercase font-semibold text-gold hover:text-gold-dark transition-colors duration-200 cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1">
            <h3 className="font-serif text-xl font-bold text-primary-dark">Schedule Consultation</h3>
            <p className="text-xs text-slate/85">
              Submit your inquiry below, and Dr. Farooqui's care team will reach out.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="space-y-1">
              <label htmlFor="name" className="text-xs uppercase tracking-wider font-semibold text-primary-dark">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-beige/80 focus:border-gold outline-none text-sm transition-all duration-200"
                placeholder="Eleanor Vance"
              />
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <label htmlFor="phone" className="text-xs uppercase tracking-wider font-semibold text-primary-dark">
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-beige/80 focus:border-gold outline-none text-sm transition-all duration-200"
                placeholder="(856) 555-0199"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label htmlFor="email" className="text-xs uppercase tracking-wider font-semibold text-primary-dark">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-beige/80 focus:border-gold outline-none text-sm transition-all duration-200"
              placeholder="eleanor@example.com"
            />
          </div>

          {/* Inquiry Type */}
          <div className="space-y-1">
            <label htmlFor="inquiryType" className="text-xs uppercase tracking-wider font-semibold text-primary-dark">
              Interest / Care Area *
            </label>
            <select
              id="inquiryType"
              value={formData.inquiryType}
              onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-beige/80 focus:border-gold outline-none text-sm bg-white transition-all duration-200"
            >
              <option value="aesthetics">Aesthetic Medicine (Botox, Fillers, Skin Rejuvenation)</option>
              <option value="functional">Functional Medicine & Gut Health</option>
              <option value="regenerative">Regenerative Therapies & Hair Restoration</option>
              <option value="weight">Metabolic & Weight Optimization</option>
              <option value="concierge">Concierge Longevity Programs</option>
            </select>
          </div>

          {/* Message */}
          <div className="space-y-1">
            <label htmlFor="message" className="text-xs uppercase tracking-wider font-semibold text-primary-dark">
              General Message *
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-beige/80 focus:border-gold outline-none text-sm transition-all duration-200 resize-none"
              placeholder="Please share your general scheduling availability or cosmetic goals. Please do not submit medical histories."
            />
          </div>

          {/* HIPAA Consent Checkbox */}
          <div className="flex items-start gap-3 bg-beige/30 p-4 rounded-xl border border-beige/50">
            <input
              id="hipaaConsent"
              type="checkbox"
              required
              checked={formData.hipaaConsent}
              onChange={(e) => setFormData({ ...formData, hipaaConsent: e.target.checked })}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-gold focus:ring-gold cursor-pointer"
            />
            <label htmlFor="hipaaConsent" className="text-[11px] leading-relaxed text-slate/90 select-none">
              <span className="font-semibold text-primary-dark">HIPAA & Privacy Acknowledgement:</span> * I understand that this form is for scheduling and general cosmetic questions. I will not include sensitive private medical histories. I authorize GT Clinic to contact me at the numbers/emails provided.
            </label>
          </div>

          {status === "error" && (
            <div className="flex items-center gap-2 text-rose-600 bg-rose-50 border border-rose-200 p-3 rounded-xl text-xs">
              <AlertCircle size={16} />
              <span>An error occurred. Please try calling the clinic directly.</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "submitting" || !formData.hipaaConsent}
            className="w-full py-4 bg-primary-dark hover:bg-gold text-primary-light hover:text-primary-dark font-sans text-xs tracking-widest uppercase font-bold rounded-xl border border-primary-dark hover:border-gold transition-all duration-300 shadow-md flex items-center justify-center gap-2 disabled:cursor-not-allowed cursor-pointer"
          >
            {status === "submitting" ? (
              <span>Sending inquiry...</span>
            ) : (
              <>
                <Send size={14} />
                <span>Submit Inquiry</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
