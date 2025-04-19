import React from "react";
import { motion } from "framer-motion";
import {
    FaInstagram,
    FaFacebookF,
    FaTiktok,
    FaWhatsapp,
    FaCalendarAlt,
    FaEnvelope,
    FaPhoneAlt,
    FaMotorcycle
} from "react-icons/fa";

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } },
};

export default function ContactPreview() {
    const contactMethods = [
        {
            icon: <FaWhatsapp className="text-cyan-500 text-2xl" />,
            text: "WhatsApp",
            href: "https://wa.me/355694445555",
        },
        {
            icon: <FaPhoneAlt className="text-cyan-500 text-2xl" />,
            text: "Call Us",
            href: "tel:+355694445555",
        },
        {
            icon: <FaEnvelope className="text-cyan-500 text-2xl" />,
            text: "Email",
            href: "mailto:info@motorentbovilla.com",
        },
    ];

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="py-20 px-4 md:px-16 bg-white text-gray-700 relative overflow-hidden"
        >
            {/* Background subtle texture */}
            <div className="absolute inset-0 z-0 opacity-5">
                <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-cyan-500 filter blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-blue-600 filter blur-3xl"></div>
            </div>

            <motion.div variants={fadeInUp} className="mx-auto relative z-10">
                <div className="flex justify-center mb-4">
                    <FaMotorcycle className="text-cyan-500 text-3xl" />
                </div>
                <motion.h2
                    variants={fadeInUp}
                    className="text-4xl font-bold text-center mb-6 uppercase text-cyan-500"
                >
                    Ready to Ride?
                </motion.h2>
                <motion.p
                    variants={fadeInUp}
                    className="text-center text-gray-600 mb-12 max-w-xl mx-auto"
                >
                    Adventure awaits! Get in touch with us to book your next thrilling motorcycle experience at Bovilla Reservoir.
                </motion.p>

                {/* Contact Methods */}
                <motion.div
                    variants={fadeInUp}
                    className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 mb-12"
                >
                    {contactMethods.map((method, index) => (
                        <a
                            key={index}
                            href={method.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-50 hover:bg-cyan-50 border border-gray-200 rounded-lg p-6 flex flex-col items-center space-y-4 transition-all duration-300 hover:shadow-lg group"
                        >
                            <div className="transform group-hover:scale-110 transition-transform duration-300">
                                {method.icon}
                            </div>
                            <span className="text-gray-800 font-semibold">{method.text}</span>
                        </a>
                    ))}
                </motion.div>

                {/* Call to Action Buttons */}
                <motion.div
                    variants={fadeInUp}
                    className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
                >
                    <a
                        href="/booking"
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-3 rounded-lg shadow-lg flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-md"
                    >
                        <FaCalendarAlt />
                        <span>Book Your Adventure</span>
                    </a>
                    <a
                        href="/contact"
                        className="bg-white border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-50 font-bold px-8 py-3 rounded-lg shadow-md flex items-center justify-center space-x-2 transition-all duration-300"
                    >
                        <FaEnvelope />
                        <span>Contact Us</span>
                    </a>
                </motion.div>

                {/* Map + Social Icons */}
                <motion.div
                    variants={fadeInUp}
                    className="flex flex-col lg:flex-row items-center justify-center gap-10"
                >
                    {/* Social Icons */}
                    <div className="flex lg:flex-col justify-center items-center gap-6 mb-8 lg:mb-0">
                        {[
                            { href: "https://instagram.com", Icon: FaInstagram },
                            { href: "https://facebook.com", Icon: FaFacebookF },
                            { href: "https://tiktok.com", Icon: FaTiktok },
                        ].map(({ href, Icon }, index) => (
                            <a
                                key={index}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                className="bg-gray-50 p-3 rounded-lg text-cyan-500 transform hover:scale-110 hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-200 shadow-sm"
                            >
                                <Icon className="text-2xl" />
                            </a>
                        ))}
                    </div>

                    {/* Google Map */}
                    <motion.div className="w-full max-w-2xl rounded-xl overflow-hidden shadow-lg border border-gray-200">
                        <iframe
                            title="Bovilla Mini Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.4831043580048!2d19.866340299999997!3d41.4452401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1351cb2a52d90eeb%3A0x4262f3b705a16a34!2sBovilla%20Reservoir!5e1!3m2!1sen!2smt!4v1742914402953!5m2!1sen!2smt"
                            width="100%"
                            height="300"
                            className="w-full"
                            loading="lazy"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}