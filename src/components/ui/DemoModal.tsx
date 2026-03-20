import { useState } from 'react';
import { X } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  industry?: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  demoDate?: string;
  demoTime?: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function DemoModal({ isOpen, onClose, industry }: DemoModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    demoDate: '',
    demoTime: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required.';
    } else if (!/^[A-Za-z\s'-]+$/.test(formData.firstName)) {
      newErrors.firstName = 'First name must contain letters only.';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required.';
    } else if (!/^[A-Za-z\s'-]+$/.test(formData.lastName)) {
      newErrors.lastName = 'Last name must contain letters only.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^[0-9+\-()\s]{7,20}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid phone number (digits, +, -, spaces only).';
    }

    if (!formData.demoDate) {
      newErrors.demoDate = 'Please select a preferred date.';
    }

    if (!formData.demoTime) {
      newErrors.demoTime = 'Please select a preferred time.';
    }

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Block digits in name fields
    if ((name === 'firstName' || name === 'lastName') && /\d/.test(value)) return;

    // Block non-numeric/allowed chars in phone field
    if (name === 'phone' && /[^0-9+\-()\s]/.test(value)) return;

    setFormData({ ...formData, [name]: value });

    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ve = validate();
    if (Object.keys(ve).length > 0) {
      setErrors(ve);
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('https://formsubmit.co/info@premiumid.net', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          demoDate: formData.demoDate,
          demoTime: formData.demoTime,
          industry: industry
            ? industry.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
            : 'Not specified',
          _subject: `New Demo Request from ${formData.firstName} ${formData.lastName}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (res.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          demoDate: '',
          demoTime: '',
        });
        setErrors({});
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600">We'll be in touch shortly to confirm your demo.</p>
        </div>
      </div>
    );
  }

  // Get today's date in YYYY-MM-DD for the min attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full relative animate-fadeIn max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Get Live Demo</h2>
          {industry && industry !== 'general' && (
            <p className="text-sm text-premium-accent mt-1">
              Demo for {industry.split('-').map(word =>
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </p>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4" noValidate>
          {/* Name row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-premium-accent focus:border-transparent outline-none transition-all ${errors.firstName ? 'border-red-400 bg-red-50' : 'border-gray-300'}`}
                placeholder="John"
              />
              {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-premium-accent focus:border-transparent outline-none transition-all ${errors.lastName ? 'border-red-400 bg-red-50' : 'border-gray-300'}`}
                placeholder="Doe"
              />
              {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Business email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-premium-accent focus:border-transparent outline-none transition-all ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-300'}`}
              placeholder="john.doe@company.com"
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-premium-accent focus:border-transparent outline-none transition-all ${errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-300'}`}
              placeholder="+1 (555) 000-0000"
            />
            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
          </div>

          {/* Date & Time row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="demoDate" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred date *
              </label>
              <input
                type="date"
                id="demoDate"
                name="demoDate"
                min={today}
                value={formData.demoDate}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-premium-accent focus:border-transparent outline-none transition-all ${errors.demoDate ? 'border-red-400 bg-red-50' : 'border-gray-300'}`}
              />
              {errors.demoDate && <p className="text-xs text-red-500 mt-1">{errors.demoDate}</p>}
            </div>
            <div>
              <label htmlFor="demoTime" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred time *
              </label>
              <input
                type="time"
                id="demoTime"
                name="demoTime"
                value={formData.demoTime}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-premium-accent focus:border-transparent outline-none transition-all ${errors.demoTime ? 'border-red-400 bg-red-50' : 'border-gray-300'}`}
              />
              {errors.demoTime && <p className="text-xs text-red-500 mt-1">{errors.demoTime}</p>}
            </div>
          </div>

          {submitStatus === 'error' && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">
                Something went wrong. Please try again or contact us directly.
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-premium-accent hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Request Demo'}
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            By submitting, you agree to our{' '}
            <a href="/privacy" className="text-premium-accent hover:underline">
              Privacy Policy
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
