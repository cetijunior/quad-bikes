import React from "react";

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white via-blue-50 to-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
                <h1 className="text-4xl font-extrabold text-cyan-600 mb-6">Terms & Conditions</h1>
                <p className="text-gray-700 mb-6">
                    These terms and conditions govern the use of our services at <strong>Moto Rent Bovilla</strong>. By making a booking, you accept these terms.
                </p>

                <h2 className="text-xl font-semibold text-blue-600 mb-2">1. Booking & Confirmation</h2>
                <p className="text-gray-700 mb-4">
                    All bookings are subject to availability. You’ll receive confirmation via email or phone once your request is processed.
                </p>

                <h2 className="text-xl font-semibold text-blue-600 mb-2">2. Payment</h2>
                <p className="text-gray-700 mb-4">
                    Payments are made upon arrival unless arranged in advance. Prices vary depending on tour type and duration.
                </p>

                <h2 className="text-xl font-semibold text-blue-600 mb-2">3. Cancellations</h2>
                <p className="text-gray-700 mb-4">
                    Please notify us at least 24 hours before the tour for cancellations. Late cancellations may incur fees.
                </p>

                <h2 className="text-xl font-semibold text-blue-600 mb-2">4. Safety & Liability</h2>
                <p className="text-gray-700 mb-4">
                    All participants must follow the safety instructions provided. Moto Rent Bovilla is not responsible for injuries resulting from reckless behavior.
                </p>

                <h2 className="text-xl font-semibold text-blue-600 mb-2">5. Weather Conditions</h2>
                <p className="text-gray-700 mb-4">
                    Tours may be rescheduled or canceled due to extreme weather for your safety. We’ll notify you in advance.
                </p>

                <p className="text-gray-600 mt-6 italic">
                    Last updated: {new Date().toLocaleDateString()}
                </p>
            </div>
        </div>
    );
}
