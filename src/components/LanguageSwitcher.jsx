import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";


const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return isMobile;
};



export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const currentLang = i18n.language || "en";
    const isMobile = useIsMobile();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
        setOpen(false);
    };

    useEffect(() => {
        const savedLang = localStorage.getItem("lng");
        if (savedLang && savedLang !== currentLang) {
            i18n.changeLanguage(savedLang);
        }

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const mobileVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: "easeOut" } },
        exit: { opacity: 0, x: 20, transition: { duration: 0.2, ease: "easeIn" } },
    };

    const desktopVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
        exit: { opacity: 0, y: -10, transition: { duration: 0.15, ease: "easeIn" } },
    };




    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center space-x-2 py-2 text-gray-700 hover:text-orange-500 transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-orange-500 after:bottom-0 after:left-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100"
            >
                <FaGlobe />
                <span className="uppercase">{currentLang}</span>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={isMobile ? mobileVariants : desktopVariants}
                        className={`absolute ${isMobile ? "-right-36 -mt-10" : "md:right-0 md:mt-2"} z-50
                            flex ${isMobile ? "flex-row" : "flex-col"}
                            bg-white border border-gray-200 rounded shadow-lg`}
                    >
                        {["en", "sq"].map((lng) => (
                            <button
                                key={lng}
                                onClick={() => changeLanguage(lng)}
                                className={`px-4 py-2 text-sm whitespace-nowrap ${currentLang === lng ? "font-bold text-orange-500" : "text-gray-700"
                                    } hover:bg-orange-100 transition-all`}
                            >
                                {lng.toUpperCase()}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}