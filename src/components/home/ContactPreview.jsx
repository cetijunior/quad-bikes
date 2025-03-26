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
            icon: <FaWhatsapp className="text-green-500 text-2xl" />,
            text: "WhatsApp",
            href: "https://wa.me/355694445555",
        },
        {
            icon: <FaPhoneAlt className="text-orange-500 text-2xl" />,
            text: "Call Us",
            href: "tel:+355694445555",
        },
        {
            icon: <FaEnvelope className="text-orange-500 text-2xl" />,
            text: "Email",
            href: "mailto:info@quadadventures.com",
        },
    ];

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="py-20 px-4 md:px-16 bg-white"
        >
            <motion.div variants={fadeInUp} className="mx-auto">
                <motion.h2
                    variants={fadeInUp}
                    className="text-4xl font-bold text-center mb-6 uppercase text-orange-600"
                >
                    Ready to Roll?
                </motion.h2>
                <motion.p
                    variants={fadeInUp}
                    className="text-center text-gray-700 mb-12 max-w-xl mx-auto"
                >
                    Adventure awaits! Get in touch with us to book your next thrilling Quad experience at Bovilla Reservoir.
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
                            className="bg-gray-50 hover:bg-orange-50 border border-orange-100 rounded-lg p-6 flex flex-col items-center space-y-4 transition-all duration-300 hover:shadow-md"
                        >
                            {method.icon}
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
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-full shadow-lg flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105"
                    >
                        <FaCalendarAlt />
                        <span>Book Your Adventure</span>
                    </a>
                    <a
                        href="/contact"
                        className="bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-bold px-8 py-3 rounded-full shadow-md flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105"
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
                    <div className="flex lg:flex-col justify-center items-center gap-6 text-orange-500 mb-8 lg:mb-0">
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
                                className="transform hover:scale-110 hover:text-orange-600 transition-all duration-200"
                            >
                                <Icon className="text-3xl" />
                            </a>
                        ))}
                    </div>

                    {/* Google Map */}
                    <motion.iframe
                        title="Bovilla Mini Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.4831043580048!2d19.866340299999997!3d41.4452401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1351cb2a52d90eeb%3A0x4262f3b705a16a34!2sBovilla%20Reservoir!5e1!3m2!1sen!2smt!4v1742914402953!5m2!1sen!2smt"
                        width="100%"
                        height="300"
                        className="rounded-xl w-full shadow-lg mx-auto block"
                        loading="lazy"
                    />
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
