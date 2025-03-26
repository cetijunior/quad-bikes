import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaCalendar, FaClock, FaMotorcycle, FaHourglassHalf, FaStickyNote } from "react-icons/fa";

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } },
};

export default function Booking() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        bikes: "1",
        duration: "1 hour",
        note: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const createMailToLink = () => {
        const body = `
Booking Request:

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Date: ${form.date}
Time: ${form.time}
Number of Bikes: ${form.bikes}
Duration: ${form.duration}
Note: ${form.note || "N/A"}
    `.trim();

        return `mailto:bsncetijunior@gmail.com?subject=Quad Bike Booking&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className="bg-gradient-to-br from-orange-50 to-white mt-10 min-h-screen py-16">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerChildren}
                className="container mx-auto px-4 max-w-5xl"
            >
                {/* Header Section */}
                <motion.div
                    variants={fadeInUp}
                    className="text-center mb-12 bg-white rounded-xl shadow-lg p-8"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold uppercase text-orange-500 tracking-tight">
                        Book Your Adventure
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Embark on an exhilarating quad bike experience. Fill out the details below and get ready for an unforgettable ride!
                    </p>
                </motion.div>

                {/* Form Section */}
                <motion.div
                    variants={staggerChildren}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {/* Form Details Column */}
                    <motion.div
                        variants={fadeInUp}
                        className="bg-white rounded-xl shadow-lg p-8 space-y-6"
                    >
                        <form className="space-y-6">
                            {/* Personal Information Section */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-orange-500 border-b pb-2">
                                    Personal Details
                                </h2>
                                <motion.div variants={fadeInUp}>
                                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                                        <FaUser className="text-orange-500" /> Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-gray-50 shadow-sm"
                                        placeholder="Your Full Name"
                                        required
                                    />
                                </motion.div>

                                <motion.div variants={fadeInUp}>
                                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                                        <FaEnvelope className="text-orange-500" /> Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-gray-50 shadow-sm"
                                        placeholder="Your Email Address"
                                        required
                                    />
                                </motion.div>

                                <motion.div variants={fadeInUp}>
                                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                                        <FaPhone className="text-orange-500" /> Phone
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-gray-50 shadow-sm"
                                        placeholder="+355 69 444 5555"
                                        required
                                    />
                                </motion.div>
                            </div>

                            {/* Booking Details Section */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-orange-500 border-b pb-2">
                                    Booking Information
                                </h2>
                                <motion.div
                                    variants={fadeInUp}
                                    className="grid sm:grid-cols-2 gap-4"
                                >
                                    <div>
                                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                                            <FaCalendar className="text-orange-500" /> Date
                                        </label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={form.date}
                                            onChange={handleChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-gray-50 shadow-sm"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                                            <FaClock className="text-orange-500" /> Time
                                        </label>
                                        <input
                                            type="time"
                                            name="time"
                                            value={form.time}
                                            onChange={handleChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-gray-50 shadow-sm"
                                            required
                                        />
                                    </div>
                                </motion.div>

                                <motion.div
                                    variants={fadeInUp}
                                    className="grid sm:grid-cols-2 gap-4"
                                >
                                    <div>
                                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                                            <FaMotorcycle className="text-orange-500" /> Number of Bikes
                                        </label>
                                        <select
                                            name="bikes"
                                            value={form.bikes}
                                            onChange={handleChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-gray-50 shadow-sm"
                                        >
                                            {[1, 2, 3, 4, 5].map((n) => (
                                                <option key={n} value={n}>
                                                    {n} {n === 1 ? "Bike" : "Bikes"}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                                            <FaHourglassHalf className="text-orange-500" /> Duration
                                        </label>
                                        <select
                                            name="duration"
                                            value={form.duration}
                                            onChange={handleChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-gray-50 shadow-sm"
                                        >
                                            <option value="1 hour">1 Hour</option>
                                            <option value="2 hours">2 Hours</option>
                                            <option value="Half Day">Half Day</option>
                                            <option value="Full Day">Full Day</option>
                                        </select>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Additional Notes Section */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-orange-500 border-b pb-2">
                                    Additional Information
                                </h2>
                                <motion.div variants={fadeInUp}>
                                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                                        <FaStickyNote className="text-orange-500" /> Optional Note
                                    </label>
                                    <textarea
                                        name="note"
                                        rows="4"
                                        value={form.note}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-gray-50 shadow-sm"
                                        placeholder="Anything we should know? Special requests?"
                                    />
                                </motion.div>
                            </div>
                        </form>
                    </motion.div>

                    {/* Booking Information Sidebar */}
                    <motion.div
                        variants={fadeInUp}
                        className="lg:col-span-1"
                    >
                        <motion.div
                            variants={fadeInUp}
                            className="bg-white sticky top-20 rounded-xl shadow-lg p-8 flex flex-col justify-between max-h-[90vh] overflow-auto"
                        >
                            <div>
                                <h2 className="text-3xl font-bold text-orange-500 mb-6">
                                    Booking Details
                                </h2>
                                <div className="space-y-4 text-gray-700">
                                    <div className="bg-orange-50 p-4 rounded-lg">
                                        <h3 className="font-semibold text-orange-600 mb-2">
                                            What to Expect
                                        </h3>
                                        <ul className="list-disc list-inside text-sm">
                                            <li>Professional quad bikes</li>
                                            <li>Safety equipment provided</li>
                                            <li>Guided tours available</li>
                                            <li>Suitable for all experience levels</li>
                                        </ul>
                                    </div>

                                    <div className="bg-orange-50 p-4 rounded-lg">
                                        <h3 className="font-semibold text-orange-600 mb-2">
                                            Booking Confirmation
                                        </h3>
                                        <p className="text-sm">
                                            After submitting, we'll confirm your booking via email or WhatsApp within 24 hours.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <motion.div variants={fadeInUp} className="mt-6">
                                <a
                                    href={createMailToLink()}
                                    className="block text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-full uppercase text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
                                >
                                    Submit Booking
                                </a>
                                <p className="text-center text-sm text-gray-500 mt-4">
                                    Need help? <a href="https://wa.me/355694445555" className="text-orange-500 hover:text-orange-400 font-semibold">Chat with us</a>
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                </motion.div>
            </motion.div>
        </div>
    );
}