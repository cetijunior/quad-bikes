import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const currentLang = i18n.language || "en";

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

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center space-x-2  py-2 text-gray-700 hover:text-orange-500 transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-orange-500 after:bottom-0 after:left-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100"
            >
                <FaGlobe />
                <span className="uppercase">{currentLang}</span>
            </button>

            {open && (
                <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded shadow-lg z-50">
                    {["en", "sq"].map((lng) => (
                        <button
                            key={lng}
                            onClick={() => changeLanguage(lng)}
                            className={`block px-4 py-2 text-sm text-left w-full hover:bg-orange-100 ${currentLang === lng ? "font-bold text-orange-500" : "text-gray-700"
                                }`}
                        >
                            {lng.toUpperCase()}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
