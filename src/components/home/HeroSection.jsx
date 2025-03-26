import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Masonry from "../../components/Mansory"; // Adjust path
import heroImage from "/images/group.png";
import { FaArrowDown } from "react-icons/fa";

// Sample image data (replace with real quad images)
const imageData = [
    { id: 1, image: "/images/bovilla2.png", height: 300 },
    { id: 2, image: "/images/group.png", height: 400 },
    { id: 3, image: "/images/trail1.png", height: 250 },
    { id: 4, image: "/images/trail2.png", height: 350 },
    { id: 5, image: "/images/bovilla1.png", height: 300 },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerChildren = {
    visible: { transition: { staggerChildren: 0.3 } },
};

const zoomIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function HeroSection() {
    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="relative min-h-screen flex flex-col justify-center text-center px-4 bg-gradient-to-b from-orange-200 via-orange-100 to-white overflow-hidden"
        >
            {/* Background Layer */}
            <div className="absolute inset-0">
                <img
                    src={heroImage}
                    alt="Bovilla Quad Adventure"
                    className="w-full h-full object-cover opacity-60 scale-110 animate-pulse"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
            </div>

            {/* Foreground Text */}
            <div className="z-10 max-w-5xl mx-auto px-4 py-24">
                <motion.h1
                    variants={zoomIn}
                    className="text-6xl md:text-8xl font-extrabold uppercase mb-6 tracking-tight text-orange-500 drop-shadow-2xl leading-tight"
                >
                    <span className="block text-white">Bovilla</span>
                    <span className="text-orange-500">Quad Bikes</span>
                </motion.h1>
                <motion.p
                    variants={fadeInUp}
                    className="text-2xl md:text-3xl mb-10 font-semibold text-white italic tracking-wide max-w-2xl mx-auto"
                >
                    Rip through wild trails. Feel the rush. Adventure starts here.
                </motion.p>
                <motion.div variants={fadeInUp}>
                    <Link to="/booking">
                        <button className="relative bg-orange-500 hover:bg-orange-600 text-white font-bold px-12 py-5 rounded-full uppercase text-xl shadow-2xl transform hover:scale-110 transition-all duration-300 overflow-hidden group">
                            <span className="relative z-10">Book Your Ride</span>
                            <span className="absolute inset-0 bg-orange-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
                        </button>
                    </Link>
                </motion.div>
            </div>

            {/* 🔥 Masonry Visual Grid Below Hero
            <div className="z-10 px-4 pb-16">
                <Masonry data={imageData} />
            </div> */}

            <motion.div
                variants={fadeInUp}
                className="flex justify-center mb-10 text-white animate-bounce z-10"
            >
                <FaArrowDown className="text-2xl" />
            </motion.div>
        </motion.section>
    );
}
