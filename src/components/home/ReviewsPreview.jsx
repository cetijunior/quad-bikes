import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } },
};

export default function ReviewsPreview() {
    const reviews = [
        { quote: "An unreal adventure—views and staff were top-tier!", author: "Emily R.", rating: 5 },
        { quote: "Best day ever with the crew. Bovilla’s insane on a quad.", author: "Marco L.", rating: 5 },
    ];

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="py-20 px-4 md:px-16 bg-white"
        >
            <motion.h2
                variants={fadeInUp}
                className="text-4xl font-bold mb-8 text-center uppercase text-orange-500"
            >
                Riders Speak
            </motion.h2>
            <motion.div
                variants={staggerChildren}
                className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            >
                {reviews.map((review, index) => (
                    <motion.div
                        key={index}
                        variants={fadeInUp}
                        whileHover={{ rotate: 1, scale: 1.02 }}
                        className="bg-orange-50 p-6 rounded-xl shadow-lg transition-all duration-300"
                    >
                        <div className="flex justify-end mb-2">
                            {Array(review.rating)
                                .fill()
                                .map((_, i) => (
                                    <FaStar key={i} className="text-orange-500" />
                                ))}
                        </div>
                        <p className="italic text-gray-700 text-lg">“{review.quote}”</p>
                        <p className="mt-4 text-orange-500 font-bold text-right">– {review.author}</p>
                    </motion.div>
                ))}
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center mt-10">
                <Link to="/reviews" className="text-orange-500 hover:text-orange-400 font-bold text-lg">
                    More Reviews →
                </Link>
            </motion.div>
        </motion.section>
    );
}