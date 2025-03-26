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

        return `mailto:info@bovillaquads.com?subject=Quad Bike Booking&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className="bg-white text-gray-900 min-h-screen pt-20 pb-12">
            <motion.section
                initial="hidden"
                animate="visible"
                variants={staggerChildren}
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                {/* Header */}
                <motion.h1
                    variants={fadeInUp}
                    className="text-5xl md:text-6xl font-extrabold uppercase text-orange-500 mb-12 text-center tracking-tight"
                >
                    Book Your Adventure
                </motion.h1>

                {/* Form */}
                <motion.div
                    variants={staggerChildren}
                    className="bg-orange-50 p-8 rounded-xl shadow-lg"
                >
                    <form className="space-y-6">
                        {/* Name */}
                        <motion.div variants={fadeInUp}>
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                                <FaUser className="text-orange-500" /> Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-white shadow-sm"
                                placeholder="Your Full Name"
                                required
                            />
                        </motion.div>

                        {/* Email */}
                        <motion.div variants={fadeInUp}>
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                                <FaEnvelope className="text-orange-500" /> Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-white shadow-sm"
                                placeholder="Your Email Address"
                                required
                            />
                        </motion.div>

                        {/* Phone */}
                        <motion.div variants={fadeInUp}>
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                                <FaPhone className="text-orange-500" /> Phone
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-white shadow-sm"
                                placeholder="+355 69 444 5555"
                                required
                            />
                        </motion.div>

                        {/* Date + Time */}
                        <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                                    <FaCalendar className="text-orange-500" /> Date
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={form.date}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-white shadow-sm"
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
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-white shadow-sm"
                                    required
                                />
                            </div>
                        </motion.div>

                        {/* Bikes + Duration */}
                        <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                                    <FaMotorcycle className="text-orange-500" /> Number of Bikes
                                </label>
                                <select
                                    name="bikes"
                                    value={form.bikes}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-white shadow-sm"
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
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-white shadow-sm"
                                >
                                    <option value="1 hour">1 Hour</option>
                                    <option value="2 hours">2 Hours</option>
                                    <option value="Half Day">Half Day</option>
                                    <option value="Full Day">Full Day</option>
                                </select>
                            </div>
                        </motion.div>

                        {/* Note */}
                        <motion.div variants={fadeInUp}>
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                                <FaStickyNote className="text-orange-500" /> Optional Note
                            </label>
                            <textarea
                                name="note"
                                rows="4"
                                value={form.note}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-white shadow-sm"
                                placeholder="Anything we should know? Special requests?"
                            />
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div variants={fadeInUp}>
                            <a
                                href={createMailToLink()}
                                className="block text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-full uppercase text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                Submit Booking
                            </a>
                        </motion.div>
                    </form>
                </motion.div>

                {/* Additional Info */}
                <motion.div
                    variants={fadeInUp}
                    className="mt-10 text-center text-gray-600"
                >
                    <p>
                        After submitting, we’ll confirm your booking via email or WhatsApp. Need help?{" "}
                        <a href="https://wa.me/355694445555" className="text-orange-500 hover:text-orange-400 font-semibold">
                            Chat with us
                        </a>
                        .
                    </p>
                </motion.div>
            </motion.section>
        </div>
    );
}