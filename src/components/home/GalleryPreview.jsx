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

export default function GalleryPreview() {
    const images = [
        { src: "/images/bovilla1.png", alt: "Bovilla Cliffs", caption: "Rugged Peaks" },
        { src: "/images/trail1.png", alt: "Trail Ride", caption: "Wild Trails" },
        { src: "/images/bovilla2.png", alt: "Quad Action", caption: "Full Throttle" },
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
                className="text-4xl font-bold mb-6 text-center uppercase text-orange-500"
            >
                Epic Trails Await
            </motion.h2>
            <motion.p
                variants={fadeInUp}
                className="text-center text-gray-600 mb-10 max-w-2xl mx-auto"
            >
                Blast through rugged mountains and epic lakeside cliffs. Bovilla’s calling.
            </motion.p>
            <motion.div
                variants={staggerChildren}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10 max-w-6xl mx-auto"
            >
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="relative group"
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="rounded-xl h-72 w-full object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-10 bg-black/40 border-2 border-orange-500/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                            <span className="text-white text-lg font-bold">{img.caption}</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center">
                <Link to="/gallery" className="text-orange-500 hover:text-orange-400 font-bold text-lg">
                    See More Action →
                </Link>
            </motion.div>
        </motion.section>
    );
}