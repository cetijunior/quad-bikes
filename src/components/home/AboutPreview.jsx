import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRoute, FaUserFriends, FaShieldAlt, FaMedal } from "react-icons/fa";

export default function AboutPreview() {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full">
                    <svg
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-0 right-0 w-64 h-64 text-cyan-50 transform translate-x-1/3 -translate-y-1/3 opacity-70"
                    >
                        <path
                            fill="currentColor"
                            d="M47.1,-57.8C61.3,-46.9,73.5,-32.3,76.7,-15.8C80,0.6,74.3,19,64.2,32.6C54.1,46.2,39.5,55,23.6,62.5C7.7,70,-9.4,76.2,-24.5,72.9C-39.5,69.6,-52.5,56.9,-63.4,41.7C-74.3,26.4,-83.2,8.5,-81.5,-8.4C-79.9,-25.3,-67.7,-41.2,-53,-52.5C-38.2,-63.8,-19.1,-70.5,-1.2,-69.2C16.8,-67.9,33.5,-68.6,47.1,-57.8Z"
                            transform="translate(100 100)"
                        />
                    </svg>

                    <svg
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute bottom-0 left-0 w-96 h-96 text-blue-50 transform -translate-x-1/3 translate-y-1/3 opacity-70"
                    >
                        <path
                            fill="currentColor"
                            d="M32.2,-42.6C44.2,-34.2,58,-27.3,65.2,-16C72.3,-4.7,72.7,11.1,67.6,25.3C62.4,39.5,51.7,52.1,38.5,58.8C25.2,65.5,9.5,66.4,-6.7,65.3C-22.9,64.3,-39.5,61.3,-51.8,52.2C-64.1,43.1,-72.1,27.9,-77.1,10.2C-82,-7.5,-84,-27.7,-74.8,-39.2C-65.6,-50.7,-45.3,-53.5,-29.1,-60.5C-13,-67.4,-0.8,-78.5,6.5,-73.8C13.9,-69.2,20.3,-51,32.2,-42.6Z"
                            transform="translate(100 100)"
                        />
                    </svg>
                </div>
            </div>

            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                        Discover <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text">Bovilla Quads</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Unleashing the thrill of adventure in Albania's most breathtaking landscapes since 2018
                    </p>
                </div>

                <motion.div
                    className="grid md:grid-cols-2 gap-10 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    {/* Left Column - Image Collage */}
                    <motion.div
                        className="relative"
                        variants={itemVariants}
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="rounded-2xl overflow-hidden shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                                    <img
                                        src="/rides/I1.jpg"
                                        alt="ATV adventure"
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                                <div className="rounded-2xl overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                                    <img
                                        src="/rides/I3.jpg"
                                        alt="Trail riding"
                                        className="w-full h-32 object-cover"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4 pt-6">
                                <div className="rounded-2xl overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                                    <img
                                        src="/rides/I2.jpg"
                                        alt="Mountain views"
                                        className="w-full h-32 object-cover"
                                    />
                                </div>
                                <div className="rounded-2xl overflow-hidden shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                                    <img
                                        src="/rides/I4.jpg"
                                        alt="Quad bikes"
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Experience Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-4 rounded-full shadow-lg z-10 transform rotate-12 hover:rotate-0 transition-transform duration-300">
                            <div className="text-center">
                                <span className="block text-3xl font-bold">5+</span>
                                <span className="text-xs uppercase tracking-wider">Years Experience</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <div className="space-y-6">
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                                Your Adventure Awaits
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                At Bovilla Quads, we combine the thrill of ATV riding with the stunning beauty of Albania's mountainous terrain. Founded by adventure enthusiasts, our mission is to provide unforgettable experiences that connect people with nature in ways they never imagined possible.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                From beginners to experienced riders, our expert guides ensure a safe, exciting, and memorable journey through diverse trails, breathtaking landscapes, and hidden gems of the Bovilla region.
                            </p>
                        </motion.div>

                        {/* Features */}
                        <motion.div
                            className="grid grid-cols-2 gap-4 mt-8"
                            variants={itemVariants}
                        >
                            {[
                                { icon: <FaRoute />, title: "Expert Guided Tours", description: "Professional guides with intimate knowledge of local terrain" },
                                { icon: <FaUserFriends />, title: "Small Groups", description: "Personalized experience with groups of max 8 riders" },
                                { icon: <FaShieldAlt />, title: "Safety First", description: "Comprehensive training and top-quality equipment" },
                                { icon: <FaMedal />, title: "Rated #1", description: "Top-rated adventure experience in the Bovilla region" }
                            ].map((feature, index) => (
                                <div key={index} className="flex flex-col items-center text-center p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <div className="text-2xl text-cyan-500 mb-2">{feature.icon}</div>
                                    <h4 className="font-medium text-gray-800 mb-1">{feature.title}</h4>
                                    <p className="text-gray-500 text-sm">{feature.description}</p>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            className="mt-8 flex justify-start"
                            variants={itemVariants}
                        >
                            <Link
                                to="/about"
                                className="inline-flex items-center gap-2 text-cyan-600 font-medium hover:text-blue-700 transition-colors group"
                            >
                                <span>Learn more about our story</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 transform group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Testimonial Preview */}
                <motion.div
                    className="mt-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 shadow-xl relative overflow-hidden"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <svg
                            width="100%"
                            height="100%"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 0L100 0L100 100L0 100Z"
                                fill="white"
                                fillOpacity="0.2"
                            />
                            <path
                                d="M100 0L200 0L200 100L100 100Z"
                                fill="white"
                                fillOpacity="0.1"
                            />
                            <path
                                d="M0 100L100 100L100 200L0 200Z"
                                fill="white"
                                fillOpacity="0.1"
                            />
                            <path
                                d="M100 100L200 100L200 200L100 200Z"
                                fill="white"
                                fillOpacity="0.2"
                            />
                        </svg>
                    </div>

                    <div className="relative z-10 text-center text-white">
                        <div className="text-5xl mb-4">"</div>
                        <p className="text-xl md:text-2xl font-light italic mb-6">
                            The most exhilarating adventure we've had in Albania! The views were breathtaking and our guide made sure we had an unforgettable experience. Can't recommend Bovilla Quads enough!
                        </p>
                        <div className="flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                                <img
                                    src="/api/placeholder/100/100"
                                    alt="Sarah M."
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="ml-3 text-left">
                                <p className="font-semibold">Sarah M.</p>
                                <div className="flex text-yellow-300 text-sm">
                                    {"★★★★★".split("").map((star, i) => (
                                        <span key={i}>{star}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/reviews"
                            className="inline-flex items-center gap-2 mt-6 bg-white text-blue-600 px-6 py-2 rounded-full font-medium text-sm hover:bg-blue-50 transition-colors"
                        >
                            <span>Read all reviews</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}