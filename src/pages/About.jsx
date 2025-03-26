import React from "react";
import { motion } from "framer-motion";
import { FaMotorcycle, FaShieldAlt, FaUsers } from "react-icons/fa";
import aboutImage from "/images/group.png"; // Replace with your actual image path

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } },
};

const zoomIn = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function About() {
    return (
        <div className="bg-gradient-to-br from-orange-50 to-white text-gray-900 min-h-screen pt-20 pb-12">
            <motion.section
                initial="hidden"
                animate="visible"
                variants={staggerChildren}
                className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                {/* Hero Section */}
                <motion.div
                    variants={staggerChildren}
                    className="bg-white rounded-xl shadow-lg overflow-hidden mb-16"
                >
                    <div className="grid md:grid-cols-2 items-center">
                        <motion.div
                            variants={fadeInUp}
                            className="p-12 space-y-6"
                        >
                            <h1 className="text-5xl md:text-6xl font-extrabold uppercase text-orange-500 tracking-tight">
                                Bovilla Quads
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Unleash your adventurous spirit in the wild heart of Bovilla. We're not just a quad bike rental—we're your passport to adrenaline-fueled memories that will last a lifetime.
                            </p>
                            <div>
                                <a
                                    href="/booking"
                                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-full uppercase tracking-wide shadow-lg transform hover:scale-105 transition-all duration-300"
                                >
                                    Start Your Adventure
                                </a>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={zoomIn}
                            className="relative group"
                        >
                            <img
                                src={aboutImage}
                                alt="Quad Biking Adventure"
                                className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Why Choose Us */}
                <motion.div variants={staggerChildren} className="mb-16">
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl font-bold text-center text-orange-500 mb-10 uppercase"
                    >
                        Why Choose Us?
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FaMotorcycle,
                                title: "Top-Notch Quads",
                                description: "Ride the best machines built for power and precision on any terrain."
                            },
                            {
                                icon: FaShieldAlt,
                                title: "Safety First",
                                description: "Expert guides and top safety gear ensure every ride is secure and fun."
                            },
                            {
                                icon: FaUsers,
                                title: "Group Ready",
                                description: "Perfect for solo riders, families, or crews—adventure for all!"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="bg-white p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:translate-y-[-10px] group"
                            >
                                <item.icon className="text-4xl text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    variants={staggerChildren}
                    className="bg-gradient-to-r from-orange-100 to-white p-18 rounded-xl shadow-lg mb-16 hover:shadow-xl transition-shadow duration-300"
                >
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl font-bold text-center text-gray-800 mb-8"
                    >
                        Our Legacy
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                        {[
                            { number: "1000+", label: "Epic Rides Completed" },
                            { number: "10+", label: "Years of Adventure" },
                            { number: "5★", label: "Average Rider Rating" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="group"
                            >
                                <p className="text-4xl font-bold text-orange-500 group-hover:scale-110 transition-transform duration-300">
                                    {stat.number}
                                </p>
                                <p className="text-gray-600 group-hover:text-orange-500 transition-colors duration-300">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    variants={fadeInUp}
                    className="text-center"
                >
                    <a
                        href="/booking"
                        className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-full uppercase text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                        Book Your Ride Today
                    </a>
                </motion.div>
            </motion.section>
        </div>
    );
}