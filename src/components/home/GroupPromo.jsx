import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import groupImage from "/rides/group.jpg";

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
            className="relative py-20 px-4 md:px-16 bg-gradient-to-br from-[#D7F6FF] via-white to-[#F0FBFF] overflow-hidden text-white"
        >
            {/* Background Image Layer */}
            <div className="absolute inset-0">
                <img src={groupImage} alt="Group Adventure" className="w-full h-full object-cover object-center opacity-290" />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <motion.h2
                    variants={fadeInUp}
                    className="text-4xl md:text-5xl font-extrabold uppercase mb-6 tracking-tight text-cyan-400 drop-shadow-md"
                >
                    Group Rides, Big Thrills
                </motion.h2>

                <motion.p
                    variants={fadeInUp}
                    className="text-lg md:text-xl mb-10 max-w-xl mx-auto text-white/90"
                >
                    Whether it's your squad, family trip, birthday, or bachelor weekend — we bring the wild trails, stunning views, and unforgettable group moments.
                </motion.p>

                <motion.div variants={fadeInUp}>
                    <Link to="/contact">
                        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 text-white font-bold px-10 py-4 rounded-full uppercase text-base md:text-lg shadow-xl hover:scale-105 transition-all duration-300">
                            Book Your Group Ride →
                        </button>
                    </Link>
                </motion.div>
            </div>
        </motion.section>
    );
}
