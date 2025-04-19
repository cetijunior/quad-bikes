import React from "react";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white via-blue-50 to-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
                <h1 className="text-4xl font-extrabold text-cyan-600 mb-6">Privacy Policy</h1>
                <p className="text-gray-700 mb-6">
                    At <strong>Moto Rent Bovilla</strong>, we respect your privacy and are committed to protecting the personal data you share with us.
                </p>

                <h2 className="text-xl font-semibold text-blue-600 mb-2">1. Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                    We collect your name, phone number, email, and any additional information you voluntarily provide when you contact us or make a booking.
                </p>

                <h2 className="text-xl font-semibold text-blue-600 mb-2">2. How We Use Your Data</h2>
                <p className="text-gray-700 mb-4">
                    We use this information to manage bookings, respond to inquiries, and improve your experience. We never sell or share your data without consent.
                </p>

                <h2 className="text-xl font-semibold text-blue-600 mb-2">3. Cookies</h2>
                <p className="text-gray-700 mb-4">
                    Our website uses cookies for analytics and performance tracking. You can disable cookies via your browser settings.
                </p>

                <h2 className="text-xl font-semibold text-blue-600 mb-2">4. Your Rights</h2>
                <p className="text-gray-700 mb-4">
                    You may request to view, modify, or delete your personal data at any time by contacting us.
                </p>

                <h2 className="text-xl font-semibold text-blue-600 mb-2">5. Contact</h2>
                <p className="text-gray-700">
                    For privacy-related questions, please contact us at:{" "}
                    <a href="mailto:info@bovillaquads.com" className="text-cyan-600 underline">
                        info@bovillaquads.com
                    </a>
                </p>
            </div>
        </div>
    );
}
