import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaCalendar, FaClock, FaMapMarkerAlt, FaCheck } from "react-icons/fa";

export default function BookingForm() {
    return (
        <div className="min-h-screen bg-blue-900 pt-24 py-12 px-4 md:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-10">
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Book Your Adventure</h1>
                    <p className="text-gray-600 mt-3">
                        Select your preferred date, time, and package from quad biking through Albania's landscapes.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Personal Details */}
                    <div className="space-y-6">
                        <h2 className="text-lg font-semibold text-gray-700 flex items-center">
                            <FaUser className="mr-2 text-blue-500" /> Personal Details
                        </h2>

                        <InputField label="Full Name" placeholder="John Smith" icon={FaUser} />
                        <InputField label="Email Address" placeholder="your@email.com" icon={FaEnvelope} />
                        <InputField label="Phone Number" placeholder="+355 69 XXX XXXX" icon={FaPhone} />
                    </div>

                    {/* Tour Selection */}
                    <div className="space-y-6">
                        <h2 className="text-lg font-semibold text-gray-700 flex items-center">
                            <FaMapMarkerAlt className="mr-2 text-blue-500" /> Tour Details
                        </h2>

                        <InputField type="date" label="Date" icon={FaCalendar} />
                        <InputField type="time" label="Time" icon={FaClock} />

                        <div>
                            <label className="text-sm font-medium text-gray-600">Location</label>
                            <select className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 mt-1">
                                <option>Bovilla Lake Trail</option>
                                <option>Mountain Adventure</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <select className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50">
                                <option>1 Quad</option>
                                <option>2 Quads</option>
                                <option>3 Quads</option>
                            </select>
                            <select className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50">
                                <option>1 Hour</option>
                                <option>2 Hours</option>
                                <option>Half Day</option>
                            </select>
                        </div>

                        <textarea
                            rows="3"
                            placeholder="Any special requirements or questions?"
                            className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 mt-2"
                        />
                    </div>
                </div>

                {/* Summary & Inclusions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                    <div className="bg-blue-50 rounded-xl p-6 space-y-2">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Your Selection</h3>
                        <div className="flex justify-between text-sm text-gray-700"><span>Date:</span><span>Thursday, May 23</span></div>
                        <div className="flex justify-between text-sm text-gray-700"><span>Time:</span><span>10:00 AM</span></div>
                        <div className="flex justify-between text-sm text-gray-700"><span>Location:</span><span>Bovilla Lake Trail</span></div>
                        <div className="flex justify-between text-sm text-gray-700"><span>Quads:</span><span>1</span></div>
                        <div className="flex justify-between text-sm text-gray-700"><span>Duration:</span><span>1 Hour</span></div>
                        <div className="flex justify-between text-sm font-bold pt-2 border-t border-blue-100"><span>Estimated Price:</span><span>€45</span></div>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-6 space-y-3">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">What's Included</h3>
                        {[
                            "Professional quad bikes with safety features",
                            "Complete safety gear",
                            "Expert guide with local knowledge",
                            "Brief training session for beginners",
                            "Photo stops at scenic viewpoints"
                        ].map((item, i) => (
                            <p key={i} className="flex items-start text-sm text-gray-700">
                                <FaCheck className="text-green-500 mt-1 mr-2" /> {item}
                            </p>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="flex items-center space-x-2 pt-6">
                    <input type="checkbox" className="h-4 w-4 text-blue-600" />
                    <p className="text-sm text-gray-600">
                        I agree to the <a href="#" className="text-blue-600 underline">terms & conditions</a>
                    </p>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold mt-4 shadow-lg transition">
                    Complete Booking
                </button>
            </div>
        </div>
    );
}

// Input component
const InputField = ({ label, placeholder, icon: Icon, type = "text" }) => (
    <div>
        <label className="text-sm font-medium text-gray-600">{label}</label>
        <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <Icon />
            </div>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
    </div>
);
