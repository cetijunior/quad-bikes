import React, { useState, useEffect } from "react";
import {
    User, Mail, Phone, Calendar, Clock, MapPin, Check,
    ChevronRight, ChevronLeft, Shield, CreditCard, Camera,
    Users, Clock2, AlertCircle, Info
} from "lucide-react";

// Background image - you'll need to add this to your project
const bgImage = "/rides/I6.jpg";


export default function BookingForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        location: "Bovilla Lake Trail",
        quads: "1 Quad",
        duration: "1 Hour",
        specialRequests: "",
        agreeToTerms: false
    });

    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    // Estimate price based on selections
    const calculatePrice = () => {
        const quadCount = parseInt(formData.quads.split(" ")[0]);
        let durationMultiplier = 1;

        if (formData.duration === "2 Hours") durationMultiplier = 1.8;
        else if (formData.duration === "Half Day") durationMultiplier = 3;

        const basePrice = 45;
        return (basePrice * quadCount * durationMultiplier).toFixed(0);
    };

    // Validate current step before proceeding
    const validateStep = (step) => {
        const newErrors = {};

        if (step === 1) {
            if (!formData.fullName.trim()) newErrors.fullName = "Name is required";
            if (!formData.email.trim()) newErrors.email = "Email is required";
            else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
            if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
        }

        if (step === 2) {
            if (!formData.date) newErrors.date = "Date is required";
            if (!formData.time) newErrors.time = "Time is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    // Navigate between steps
    const nextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(prev => Math.min(prev + 1, 4));
        }
    };

    const prevStep = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
    };

    // Final submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.agreeToTerms) {
            setErrors({ ...errors, terms: "You must agree to the terms and conditions" });
            return;
        }

        const dataToSend = {
            ...formData,
            totalPrice: calculatePrice()
        };

        fetch('/api/sendBooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSend)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Server Response:", data);
                setCurrentStep(4);
            })
            .catch(err => {
                console.error("Failed to submit booking:", err);
                alert("Something went wrong. Please try again.");
            });
    };


    // Set the selected date to today by default on component mount
    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setFormData(prev => ({
            ...prev,
            date: today
        }));
    }, []);

    // Progress indicator
    const ProgressBar = () => {
        const steps = [
            { num: 1, title: "Personal Details" },
            { num: 2, title: "Tour Selection" },
            { num: 3, title: "Review" },
            { num: 4, title: "Confirmation" }
        ];

        return (
            <div className="mb-8">
                <div className="flex justify-between items-center">
                    {steps.map((step) => (
                        <div key={step.num} className="flex flex-col items-center">
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                  ${currentStep >= step.num ? 'bg-cyan-600 text-white' : 'bg-gray-200 text-gray-500'}`}
                            >
                                {currentStep > step.num ? <Check size={16} /> : step.num}
                            </div>
                            <span className={`text-xs mt-1 ${currentStep >= step.num ? 'text-cyan-600 font-medium' : 'text-gray-500'}`}>
                                {step.title}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-2 h-1 bg-gray-200 rounded-full">
                    <div
                        className="h-full bg-cyan-600 rounded-full transition-all duration-300"
                        style={{ width: `${(currentStep - 1) * 33.33}%` }}
                    />
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen pt-32 bg-black px-4 relative">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img src={bgImage} alt="ATV Tour" className="w-full h-full object-cover opacity-20" />
                <div className="absolute inset-0 opacity-10 bg-gradient-to-b from-cyan-900/90 to-blue-900/90" />
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-10 relative z-10">
                <div className="text-center mb-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Book Your ATV Adventure</h1>
                    <p className="text-gray-600 mt-2">
                        Experience the thrill of quad biking through Albania's stunning landscapes
                    </p>
                </div>

                <ProgressBar />

                <form onSubmit={handleSubmit}>
                    {/* Step 1: Personal Details */}
                    {currentStep === 1 && (
                        <div className="space-y-6 animate-fadeIn">
                            <h2 className="text-xl font-semibold text-gray-700 flex items-center mb-4">
                                <User className="mr-2 text-cyan-600" /> Personal Information
                            </h2>

                            <InputField
                                label="Full Name"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="John Smith"
                                icon={User}
                                error={errors.fullName}
                            />

                            <InputField
                                label="Email Address"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                icon={Mail}
                                error={errors.email}
                            />

                            <InputField
                                label="Phone Number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+355 69 XXX XXXX"
                                icon={Phone}
                                error={errors.phone}
                            />

                            <div className="bg-blue-50 p-4 rounded-lg flex items-start mt-4">
                                <Info size={20} className="text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                                <p className="text-sm text-gray-700">
                                    We'll send booking confirmation and tour details to your email and phone. Your information is kept private and secure.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Tour Selection */}
                    {currentStep === 2 && (
                        <div className="space-y-6 animate-fadeIn">
                            <h2 className="text-xl font-semibold text-gray-700 flex items-center mb-4">
                                <MapPin className="mr-2 text-cyan-600" /> Tour Details
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputField
                                    type="date"
                                    label="Date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    icon={Calendar}
                                    error={errors.date}
                                    min={new Date().toISOString().split('T')[0]}
                                />

                                <InputField
                                    type="time"
                                    label="Time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    icon={Clock}
                                    error={errors.time}
                                    helpText="Tours start at 9AM-4PM"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <SelectField
                                    label="Location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    icon={MapPin}
                                    options={[
                                        "Bovilla Lake Trail",
                                        "Mountain Adventure",
                                        "Coastal Route",
                                        "Forest Explorer"
                                    ]}
                                />

                                <div className="grid grid-cols-2 gap-4">
                                    <SelectField
                                        label="Number of Quads"
                                        name="quads"
                                        value={formData.quads}
                                        onChange={handleChange}
                                        icon={Users}
                                        options={[
                                            "1 Quad",
                                            "2 Quads",
                                            "3 Quads",
                                            "4 Quads"
                                        ]}
                                    />

                                    <SelectField
                                        label="Duration"
                                        name="duration"
                                        value={formData.duration}
                                        onChange={handleChange}
                                        icon={Clock2}
                                        options={[
                                            "1 Hour",
                                            "2 Hours",
                                            "Half Day"
                                        ]}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-600">Special Requests</label>
                                <textarea
                                    name="specialRequests"
                                    value={formData.specialRequests}
                                    onChange={handleChange}
                                    rows="3"
                                    placeholder="Any special requirements or questions?"
                                    className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 mt-2"
                                />
                            </div>

                            <div className="bg-amber-50 p-4 rounded-lg flex items-start">
                                <AlertCircle size={20} className="text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                                <p className="text-sm text-gray-700">
                                    Please note that bookings are subject to weather conditions. We'll contact you if any changes are needed.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Review Details */}
                    {currentStep === 3 && (
                        <div className="animate-fadeIn">
                            <h2 className="text-xl font-semibold text-gray-700 flex items-center mb-6">
                                <Check className="mr-2 text-cyan-600" /> Review Your Booking
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Summary */}
                                <div className="bg-cyan-50 rounded-xl p-6 space-y-4">
                                    <h3 className="text-lg font-semibold text-gray-800 border-b border-cyan-100 pb-2">
                                        Your Selection
                                    </h3>
                                    <div className="space-y-3">
                                        <SummaryItem icon={User} label="Name" value={formData.fullName} />
                                        <SummaryItem icon={Mail} label="Email" value={formData.email} />
                                        <SummaryItem icon={Phone} label="Phone" value={formData.phone} />
                                        <SummaryItem icon={Calendar} label="Date" value={formData.date} formatDate />
                                        <SummaryItem icon={Clock} label="Time" value={formData.time} formatTime />
                                        <SummaryItem icon={MapPin} label="Location" value={formData.location} />
                                        <SummaryItem icon={Users} label="Quads" value={formData.quads} />
                                        <SummaryItem icon={Clock2} label="Duration" value={formData.duration} />
                                    </div>
                                    <div className="pt-3 border-t border-cyan-200 mt-2">
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold text-lg text-gray-700">Total Price:</span>
                                            <span className="text-2xl font-bold text-cyan-700">€{calculatePrice()}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Prices include all equipment and guidance</p>
                                    </div>
                                </div>

                                {/* What's Included */}
                                <div className="space-y-6">
                                    <div className="bg-gray-50 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                                            What's Included
                                        </h3>
                                        <div className="space-y-3">
                                            {[
                                                "Professional quad bikes with safety features",
                                                "Complete safety gear (helmet, gloves)",
                                                "Expert guide with local knowledge",
                                                "Brief training session for beginners",
                                                "Photo stops at scenic viewpoints",
                                                "Bottled water"
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-start">
                                                    <Check className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                                                    <span className="text-gray-700">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                            Cancelation Policy
                                        </h3>
                                        <p className="text-gray-700 text-sm">
                                            Free cancellation up to 24 hours before your tour.
                                            Less than 24 hours notice will result in a 50% charge.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2 mt-8">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    name="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-cyan-600 rounded"
                                />
                                <label htmlFor="terms" className="text-gray-600">
                                    I agree to the <a href="#" className="text-cyan-600 hover:underline">terms & conditions</a>
                                </label>
                            </div>
                            {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms}</p>}
                        </div>
                    )}

                    {/* Step 4: Confirmation */}
                    {currentStep === 4 && (
                        <div className="text-center py-6 space-y-6 animate-fadeIn">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                <Check size={40} className="text-green-600" />
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">Booking Successful!</h2>
                                <p className="text-gray-600 mt-2">
                                    We've sent a confirmation email to {formData.email}
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6 max-w-md mx-auto mt-6">
                                <h3 className="font-semibold text-gray-800 mb-2">Booking Reference</h3>
                                <p className="text-2xl font-mono bg-gray-100 py-2 rounded">ATV-{Math.random().toString(36).substring(2, 8).toUpperCase()}</p>
                                <p className="text-sm text-gray-500 mt-2">
                                    Please save this reference for your records
                                </p>
                            </div>

                            <div className="space-y-4 mt-8">
                                <p className="text-gray-700">Need help with your booking?</p>
                                <div className="flex justify-center gap-4">
                                    <a href="tel:+35569XXXXXXX" className="flex items-center text-cyan-600 hover:text-cyan-700">
                                        <Phone size={16} className="mr-1" /> Call Us
                                    </a>
                                    <a href="mailto:info@motorentbovilla.com" className="flex items-center text-cyan-600 hover:text-cyan-700">
                                        <Mail size={16} className="mr-1" /> Email Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className={`flex justify-between mt-10 ${currentStep === 4 ? 'hidden' : ''}`}>
                        {currentStep > 1 ? (
                            <button
                                type="button"
                                onClick={prevStep}
                                className="flex items-center px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                            >
                                <ChevronLeft size={18} className="mr-1" /> Back
                            </button>
                        ) : (
                            <div></div> // Empty div to maintain flex justification
                        )}

                        {currentStep < 3 ? (
                            <button
                                type="button"
                                onClick={nextStep}
                                className="flex items-center px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors"
                            >
                                Continue <ChevronRight size={18} className="ml-1" />
                            </button>
                        ) : currentStep === 3 ? (
                            <button
                                type="submit"
                                className="flex items-center px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors"
                            >
                                Complete Booking <ChevronRight size={18} className="ml-1" />
                            </button>
                        ) : null}
                    </div>

                    {/* Return to homepage button on confirmation */}
                    {currentStep === 4 && (
                        <div className="text-center mt-6">
                            <a
                                href="/"
                                className="inline-flex items-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors"
                            >
                                Return to Homepage
                            </a>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

// Input Field Component with error handling
const InputField = ({ label, name, value, onChange, placeholder, icon: Icon, type = "text", error, helpText, min }) => (
    <div>
        <label className="text-sm font-medium text-gray-600">{label}</label>
        <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <Icon size={18} />
            </div>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                min={min}
                className={`w-full pl-10 pr-3 py-3 border ${error ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-gray-50'} rounded-lg focus:ring-cyan-500 focus:border-cyan-500 transition-colors`}
            />
        </div>
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        {helpText && <p className="text-gray-500 text-xs mt-1">{helpText}</p>}
    </div>
);

// Select Field Component
const SelectField = ({ label, name, value, onChange, icon: Icon, options }) => (
    <div>
        <label className="text-sm font-medium text-gray-600">{label}</label>
        <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <Icon size={18} />
            </div>
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-cyan-500 focus:border-cyan-500 appearance-none"
            >
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronRight size={18} className="text-gray-400 transform rotate-90" />
            </div>
        </div>
    </div>
);

// Summary Item Component
const SummaryItem = ({ icon: Icon, label, value, formatDate, formatTime }) => {
    let displayValue = value;

    if (formatDate && value) {
        const date = new Date(value);
        displayValue = date.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        });
    }

    if (formatTime && value) {
        const [hours, minutes] = value.split(':');
        const time = new Date();
        time.setHours(parseInt(hours));
        time.setMinutes(parseInt(minutes));
        displayValue = time.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
    }

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-700">
                <Icon size={16} className="text-cyan-600 mr-2" />
                <span>{label}:</span>
            </div>
            <span className="font-medium">{displayValue}</span>
        </div>
    );
};