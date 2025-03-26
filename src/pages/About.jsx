import React from "react";
import { motion } from "framer-motion";
import { FaMotorcycle, FaShieldAlt, FaUsers } from "react-icons/fa";
import aboutImage from "/images/quad1.png"; // Replace with your actual image path

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
        <div className="bg-white text-gray-900 min-h-screen pt-20 pb-12">
            <motion.section
                initial="hidden"
                animate="visible"
                variants={staggerChildren}
                className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                {/* Hero Section */}
                <motion.div variants={staggerChildren} className="text-center mb-16">
                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl md:text-6xl font-extrabold uppercase text-orange-500 mb-6 tracking-tight"
                    >
                        About Bovilla Quads
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto"
                    >
                        Your gateway to adrenaline-pumping adventures in the wild heart of Bovilla.
                    </motion.p>
                </motion.div>

                {/* Image & Intro */}
                <motion.div
                    variants={staggerChildren}
                    className="grid md:grid-cols-2 gap-12 mb-16"
                >
                    <motion.div variants={zoomIn} className="relative">
                        <img
                            src={aboutImage}
                            alt="Quad Biking Adventure"
                            className="rounded-xl w-full h-96 object-cover shadow-lg"
                        />
                        <div className="absolute inset-0 bg-orange-500 opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
                    </motion.div>
                    <motion.div variants={staggerChildren} className="space-y-6">
                        <motion.h2
                            variants={fadeInUp}
                            className="text-3xl font-bold text-gray-800"
                        >
                            Who We Are
                        </motion.h2>
                        <motion.p
                            variants={fadeInUp}
                            className="text-lg text-gray-700 leading-relaxed"
                        >
                            Based in Zall Herr, Bovilla Quad Bikes is more than just a ride—it’s a passion for adventure. Since our start, we’ve been tearing up the trails of Bovilla Reservoir, delivering epic experiences to thrill-seekers from around the globe. Our rugged quads and expert guides turn every outing into a story worth telling.
                        </motion.p>
                    </motion.div>
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
                        <motion.div
                            variants={fadeInUp}
                            className="bg-orange-50 p-6 rounded-xl shadow-lg text-center"
                        >
                            <FaMotorcycle className="text-4xl text-orange-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Top-Notch Quads</h3>
                            <p className="text-gray-600">
                                Ride the best machines built for power and precision on any terrain.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            className="bg-orange-50 p-6 rounded-xl shadow-lg text-center"
                        >
                            <FaShieldAlt className="text-4xl text-orange-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Safety First</h3>
                            <p className="text-gray-600">
                                Expert guides and top safety gear ensure every ride is secure and fun.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            className="bg-orange-50 p-6 rounded-xl shadow-lg text-center"
                        >
                            <FaUsers className="text-4xl text-orange-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Group Ready</h3>
                            <p className="text-gray-600">
                                Perfect for solo riders, families, or crews—adventure for all!
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    variants={staggerChildren}
                    className="bg-gradient-to-r from-orange-100 to-white p-10 rounded-xl shadow-lg mb-16"
                >
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl font-bold text-center text-gray-800 mb-8"
                    >
                        Our Legacy
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                        <motion.div variants={fadeInUp}>
                            <p className="text-4xl font-bold text-orange-500">1000+</p>
                            <p className="text-gray-600">Epic Rides Completed</p>
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <p className="text-4xl font-bold text-orange-500">10+</p>
                            <p className="text-gray-600">Years of Adventure</p>
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <p className="text-4xl font-bold text-orange-500">5★</p>
                            <p className="text-gray-600">Average Rider Rating</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div variants={fadeInUp} className="text-center">
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