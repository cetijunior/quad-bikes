import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } },
};

export default function AboutPreview() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="py-20 px-4 md:px-16 bg-gradient-to-r from-white to-orange-50"
        >
            <motion.h2
                variants={fadeInUp}
                className="text-4xl font-bold mb-6 uppercase text-center text-orange-500"
            >
                Why Us?
            </motion.h2>
            <motion.p
                variants={fadeInUp}
                className="max-w-3xl mx-auto text-center text-gray-700 mb-8 text-lg"
            >
                More than just quads—we’re your ticket to adrenaline. Based in Zall Herr, we’ve fueled 1000+ epic rides with top-notch safety and pure fun.
            </motion.p>
            <motion.div
                variants={staggerChildren}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8"
            >
                <motion.div variants={fadeInUp} className="text-center">
                    <p className="text-3xl font-bold text-orange-500">1000+</p>
                    <p className="text-gray-600">Rides Completed</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="text-center">
                    <p className="text-3xl font-bold text-orange-500">5★</p>
                    <p className="text-gray-600">Average Rating</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="text-center">
                    <p className="text-3xl font-bold text-orange-500">10+</p>
                    <p className="text-gray-600">Years of Adventure</p>
                </motion.div>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center">
                <Link to="/about" className="text-orange-500 hover:text-orange-400 font-bold text-lg">
                    Get the Full Story →
                </Link>
            </motion.div>
        </motion.section>
    );
}