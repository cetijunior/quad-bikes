import React, { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { FaMountain, FaBiking, FaCamera, FaPlayCircle } from "react-icons/fa";

const trailImages = [
    { src: "/rides/I1.jpg", alt: "Trail 1", type: "image" },
    { src: "/rides/I2.jpg", alt: "Trail 2", type: "image" },
    { src: "/rides/I3.jpg", alt: "Trail 3", type: "image" },
    { src: "/rides/I6.jpg", alt: "Trail 6", type: "image" },
    { src: "/rides/I8.jpg", alt: "Trail 8", type: "image" },
    { src: "/rides/I9.jpg", alt: "Trail 9", type: "image" },
];

const bovillaMedia = [
    { src: "/videos/V1.mp4", alt: "Bovilla View 1", type: "video" },
    { src: "/videos/V2.mp4", alt: "Bovilla View 2", type: "video" },
    { src: "/videos/V3.mp4", alt: "Bovilla View 3", type: "video" },
];

const quadImages = [
    { src: "/images/I4.jpg", alt: "Quad Bike 1", type: "image" },
    { src: "/images/I5.jpg", alt: "Quad Bike 2", type: "image" },
    { src: "/images/I10.jpg", alt: "Quad Bike 3", type: "image" },
];

const actionVideos = [
    { src: "/videos/V5.mp4", type: "video" },
    { src: "/videos/V6.mp4", type: "video" },
    { src: "/videos/V7.mp4", type: "video" },
    { src: "/videos/V8.mp4", type: "video" },
    { src: "/videos/V10.mp4", type: "video" },
    { src: "/videos/V11.mp4", type: "video" },
    { src: "/videos/V12.mp4", type: "video" },
    { src: "/videos/V13.mp4", type: "video" },
    { src: "/videos/V14.mp4", type: "video" },
    { src: "/videos/V15.mp4", type: "video" },
    { src: "/videos/V16.mp4", type: "video" },
    { src: "/videos/V17.mp4", type: "video" },
    { src: "/videos/V18.mp4", type: "video" },
    { src: "/videos/V19.mp4", type: "video" },
    { src: "/videos/V20.mp4", type: "video" },
    { src: "/videos/V21.mp4", type: "video" },
    { src: "/videos/V22.mp4", type: "video" },
    { src: "/videos/V23.mp4", type: "video" },


];

export default function Gallery() {
    const [open, setOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [lightboxImages, setLightboxImages] = useState([]);
    const [videoModal, setVideoModal] = useState({ open: false, src: "" });

    const openLightbox = (images, index) => {
        const imagesOnly = images.filter((img) => img.type === "image");
        const imageIndex = imagesOnly.findIndex((img) => img === images[index]);
        if (imageIndex >= 0) {
            setLightboxImages(imagesOnly.map(img => ({ src: img.src })));
            setLightboxIndex(imageIndex);
            setOpen(true);
        }
    };

    const openVideoModal = (src) => {
        setVideoModal({ open: true, src });
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const imageVariants = {
        hover: {
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0,0,0,0.3)"
        }
    };

    const renderMediaGrid = (title, Icon, media) => (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            className="relative z-10"
        >
            <div className="flex items-center gap-3 mb-6">
                <Icon className="text-3xl text-cyan-400" />
                <h2 className="text-3xl font-bold text-white">{title}</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {media.map((item, index) => (
                    item.type === "video" ? (
                        <div
                            key={index}
                            onClick={() => openVideoModal(item.src)}
                            className="relative cursor-pointer"
                        >
                            <video
                                src={item.src}
                                muted
                                loop
                                autoPlay
                                playsInline
                                preload="metadata"
                                className="rounded-xl w-full h-64 object-cover shadow-lg border border-white/10 hover:border-cyan-400 transition"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-2xl font-bold opacity-0 hover:opacity-100 transition">
                                ▶
                            </div>
                        </div>
                    ) : (
                        <motion.img
                            key={index}
                            src={item.src}
                            alt={item.alt}
                            variants={imageVariants}
                            whileHover="hover"
                            onClick={() => openLightbox(media, index)}
                            className="rounded-xl shadow-lg object-cover w-full h-64 cursor-pointer border border-white/10 hover:border-cyan-400 transition"
                        />
                    )
                ))}
            </div>
        </motion.div>
    );

    const renderVideoGrid = () => (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            className="relative z-10"
        >
            <div className="flex items-center gap-3 mb-6">
                <FaPlayCircle className="text-3xl text-cyan-400" />
                <h2 className="text-3xl font-bold text-white">Action Videos</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {actionVideos.map((vid, index) => (
                    <div
                        key={index}
                        onClick={() => openVideoModal(vid.src)}
                        className="relative cursor-pointer"
                    >
                        <video
                            src={vid.src}
                            muted
                            loop
                            autoPlay
                            playsInline
                            preload="metadata"
                            className="rounded-xl w-full h-64 object-cover shadow-lg border border-white/10 hover:border-cyan-400 transition"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-2xl font-bold opacity-0 hover:opacity-100 transition">
                            ▶
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );

    return (
        <div className="bg-gradient-to-br from-blue-950 via-black to-blue-900 text-white min-h-screen pt-24 pb-16 px-6">
            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-extrabold text-center mb-8 text-cyan-400 uppercase tracking-tight"
            >
                The Gallery
            </motion.h1>
            <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
                Snapshots and clips from our wildest rides. Trails, views, machines, and moments that define Moto Rent Bovilla.
            </p>

            <div className="space-y-24">
                {renderMediaGrid("Trail Adventures", FaMountain, trailImages)}
                {renderMediaGrid("Bovilla Views", FaCamera, bovillaMedia)}
                {renderMediaGrid("Quad Bikes", FaBiking, quadImages)}
                {renderVideoGrid()}
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={lightboxImages}
                index={lightboxIndex}
            />

            {/* Video Modal */}
            {videoModal.open && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
                    onClick={() => setVideoModal({ open: false, src: "" })}
                >
                    <video
                        src={videoModal.src}
                        controls
                        autoPlay
                        className="max-w-3xl w-full max-h-[80vh] rounded-lg border border-white"
                    />
                </div>
            )}
        </div>
    );
}
