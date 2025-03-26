import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FaBiking,
    FaUsers,
    FaSun,
    FaStar,
    FaMapMarkedAlt,
    FaImage
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
            title: "Duo Package",
            desc: "2 Bikes for 1 Hour + Guide",
            price: "€40",
            icon: FaBiking,
            features: [
                "1-Hour Adventure",
                "Professional Guide",
                "Beginner Friendly"
            ]
        },
        {
            title: "Family Adventure",
            desc: "4 Bikes for 2 Hours + Free GoPro",
            price: "€90",
            bestValue: true,
            icon: FaUsers,
            features: [
                "2-Hour Experience",
                "Free GoPro Rental",
                "Group Discount"
            ]
        },
        {
            title: "Sunset Ride",
            desc: "Evening Ride + Drone Shots",
            price: "€60",
            icon: FaSun,
            features: [
                "Scenic Evening Route",
                "Professional Drone Footage",
                "Unique Photo Package"
            ]
        },
    ];

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="py-20 px-4 md:px-16 bg-gray-50"
        >
            <motion.h2
                variants={fadeInUp}
                className="text-4xl font-bold mb-12 text-center uppercase text-orange-500 flex justify-center items-center"
            >
                <FaMapMarkedAlt className="mr-4 text-3xl" />
                Ride Deals
            </motion.h2>
            <motion.div
                variants={staggerChildren}
                className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
                {deals.map((deal, index) => {
                    const DealIcon = deal.icon;
                    return (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                        >
                            {deal.bestValue && (
                                <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                                    Best Value
                                </span>
                            )}

                            <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                            <div className="flex items-center mb-4">
                                <DealIcon className="text-4xl text-orange-500 mr-4" />
                                <h3 className="text-2xl font-bold text-gray-800">{deal.title}</h3>
                            </div>

                            <p className="text-gray-600 mb-4 italic">{deal.desc}</p>

                            <div className="mb-4">
                                {deal.features.map((feature, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center text-gray-700 mb-2"
                                    >
                                        <FaStar className="text-orange-400 mr-2 text-sm" />
                                        <span className="text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-between items-center mt-6">
                                <p className="text-3xl font-bold text-orange-500">{deal.price}</p>
                                <Link to="/booking">
                                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm uppercase transition-colors">
                                        Book Now
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>

            <motion.div
                variants={fadeInUp}
                className="text-center mt-12 group"
            >
                <Link to="/booking">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-full uppercase shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto space-x-3">
                        <span>Snag a Deal</span>
                        <span className="group-hover:translate-x-2 transition-transform">→</span>
                    </button>
                </Link>
            </motion.div>
        </motion.section>
    );
}