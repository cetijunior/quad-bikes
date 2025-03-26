import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FaCamera,
    FaMountain,
    FaBiking
} from "react-icons/fa";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";


// Sample Images
const trailImages = [
    { src: "/images/trail1.png", alt: "Trail 1" },
    { src: "/images/trail2.png", alt: "Trail 2" },
];

const bovillaImages = [
    { src: "/images/bovilla1.png", alt: "Bovilla 1" },
    { src: "/images/bovilla2.png", alt: "Bovilla 2" },
];

const quadImages = [
    { src: "/images/quad1.png", alt: "Quad 1" },
    { src: "/images/quad2.png", alt: "Quad 2" },
];

export default function Gallery() {
    const [open, setOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [lightboxImages, setLightboxImages] = useState([]);

    const openLightbox = (images, index) => {
        setLightboxImages(images.map(img => ({ src: img.src })));
        setLightboxIndex(index);
        setOpen(true);
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hover: {
            scale: 1.05,
            boxShadow: "0 10px 15px rgba(0,0,0,0.2)"
        }
    };

    const renderImageGrid = (title, Icon, images) => (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
            <div className="col-span-full flex items-center text-orange-600 mb-4">
                <Icon className="mr-3 text-2xl" />
                <h2 className="text-2xl font-semibold">{title}</h2>
            </div>
            {images.map((img, index) => (
                <motion.img
                    key={index}
                    src={img.src}
                    alt={img.alt}
                    variants={imageVariants}
                    whileHover="hover"
                    onClick={() => openLightbox(images, index)}
                    className="rounded-lg shadow-md object-cover w-full h-64 cursor-pointer transition-transform"
                />
            ))}
        </motion.div>
    );

    return (
        <div className="bg-white mt-20 text-gray-900 min-h-screen p-6">
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-8 text-center uppercase text-orange-600"
            >
                Gallery
            </motion.h1>
            <p className="text-center text-gray-700 mb-8 max-w-xl mx-auto">
                A glimpse into the raw beauty of Bovilla Reservoir and the terrain you'll conquer on our Quad Adventures.
            </p>

            <div className="flex flex-col space-y-20">
                {renderImageGrid("Trail Adventures", FaMountain, trailImages)}
                {renderImageGrid("Bovilla Reservoir", FaCamera, bovillaImages)}
                {renderImageGrid("Quad Bikes", FaBiking, quadImages)}
            </div>

            {/* Lightbox Component */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={lightboxImages}
                index={lightboxIndex}
            />
        </div>
    );
}
