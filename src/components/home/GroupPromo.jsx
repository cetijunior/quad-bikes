import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import groupImage from "/images/group.png"; // Assuming you have this image

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } },
};

export default function GroupPromo() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="py-20 px-4 md:px-16 bg-gradient-to-r from-white via-orange-100 to-white text-center relative"
        >
            <div className="absolute inset-0 opacity-10">
                <img src={groupImage} alt="Group Ride" className="w-full h-full object-cover" />
            </div>
            <motion.h2
                variants={fadeInUp}
                className="text-4xl font-bold mb-6 uppercase text-orange-500 relative z-10"
            >
                Group Vibes
            </motion.h2>
            <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-700 max-w-2xl mx-auto mb-8 relative z-10"
            >
                Roar through Bovilla with your squad or fam. Epic rides, epic memories.
            </motion.p>
            <motion.div variants={fadeInUp} className="relative z-10">
                <Link to="/booking">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-full uppercase text-lg shadow-xl hover:scale-105 transition-all duration-300">
                        Book the Crew Now →
                    </button>
                </Link>
            </motion.div>
        </motion.section>
    );
}