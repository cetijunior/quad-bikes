import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FaBiking,
    FaUsers,
    FaSun,
    FaStar,
    FaMapMarkedAlt,
    FaInfoCircle,
    FaMoneyBillWave
} from "react-icons/fa";

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } },
};

export default function DealsSection() {
    const deals = [
        {
            title: "Duo Ride",
            desc: "2 Individual Bikes – 1 Hour Ride with Guide",
            icon: FaBiking,
            features: ["Protective Gear", "Beginner Friendly", "Off-Road Trails"],
        },
        {
            title: "Family Ride",
            desc: "4 Bikes – 2 Hour Ride + GoPro Included",
            bestValue: true,
            icon: FaUsers,
            features: ["Extended Trails", "Group Discount", "Free GoPro Recording"],
        },
        {
            title: "Sunset Ride",
            desc: "Golden Hour Ride with Drone Footage",
            icon: FaSun,
            features: ["Evening Schedule", "Professional Drone Footage", "Romantic Views"],
        },
    ];

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="py-20 px-6 md:px-16 bg-gradient-to-b from-blue-900 via-black to-black text-white"
        >
            <motion.h2
                variants={fadeInUp}
                className="text-4xl font-bold mb-12 text-center uppercase text-cyan-600 flex justify-center items-center"
            >
                <FaMapMarkedAlt className="mr-4 text-3xl" />
                Ride Packages
            </motion.h2>

            <motion.div
                variants={staggerChildren}
                className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
                {deals.map((deal, index) => {
                    const Icon = deal.icon;
                    return (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group border border-blue-100"
                        >
                            {deal.bestValue && (
                                <span className="absolute top-0 right-0 bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                                    Best Value
                                </span>
                            )}

                            <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                            <div className="flex items-center mb-4">
                                <Icon className="text-4xl text-cyan-600 mr-4" />
                                <h3 className="text-2xl font-bold text-gray-800">{deal.title}</h3>
                            </div>

                            <p className="text-gray-600 mb-4 italic">{deal.desc}</p>

                            <div className="mb-4">
                                {deal.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center text-gray-700 mb-2">
                                        <FaStar className="text-cyan-400 mr-2 text-sm" />
                                        <span className="text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-between items-center mt-6">
                                <p className="text-2xl font-bold text-cyan-600">€50 / Rider</p>
                                <Link to="/booking">
                                    <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-full text-sm uppercase transition-colors">
                                        Book Now
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Age & Disclaimer Info */}
            <motion.div
                variants={fadeInUp}
                className="mt-16 max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 space-y-6 border border-blue-100"
            >
                <div className="flex items-center text-cyan-600 text-lg font-bold mb-2">
                    <FaInfoCircle className="mr-2" />
                    Age Requirements
                </div>
                <ul className="text-gray-700 space-y-2 text-sm pl-4 list-disc">
                    <li><strong>Kids:</strong> 7–14 (Must ride with adult supervision)</li>
                    <li><strong>Teens:</strong> 15–17 (Guardian signature required)</li>
                    <li><strong>Adults:</strong> 18+ (Solo ride eligible)</li>
                </ul>

                <div className="flex items-center text-cyan-600 text-lg font-bold mt-6 mb-2">
                    <FaMoneyBillWave className="mr-2" />
                    Booking & Payment Notes
                </div>
                <ul className="text-gray-700 space-y-2 text-sm pl-4 list-disc">
                    <li>Booking must be made in advance</li>
                    <li>Pickup point is private – shared **after confirmation** only</li>
                    <li>Do **not** drive to the site uninvited – no direct entry allowed</li>
                    <li>No deposit needed – **Cash payment on location**</li>
                    <li>Walk-ins are not accepted</li>
                </ul>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeInUp} className="text-center mt-12 group">
                <Link to="/booking">
                    <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold px-10 py-4 rounded-full uppercase shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto space-x-3">
                        <span>Book Your Adventure</span>
                        <span className="group-hover:translate-x-2 transition-transform">→</span>
                    </button>
                </Link>
            </motion.div>
        </motion.section>
    );
}
