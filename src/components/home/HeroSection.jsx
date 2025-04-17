import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import heroImage from "/rides/I6.jpg";
import { createPortal } from "react-dom";

const imageData = Array.from({ length: 10 }, (_, i) => ({
    id: `I${i + 1}`,
    src: `/rides/I${i + 1}.jpg`,
    height: 400,
}));

const videoData = Array.from({ length: 10 }, (_, i) => ({
    id: `V${i + 1}`,
    src: `/videos/V${i + 1}.mp4`,
    height: 400,
}));

function FullModal({ isOpen, content, onClose }) {
    if (!isOpen) return null;
    return createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999]">
            <div className="relative max-w-full max-h-full p-4">
                <button onClick={onClose} className="absolute top-4 right-4 text-black text-5xl mr-3 font-bold z-10">×</button>
                {content.type === "image" ? (
                    <img src={content.src} alt="Full View" className="max-h-[80vh] max-w-[90vw] object-contain" />
                ) : (
                    <video
                        src={content.src}
                        controls
                        autoPlay
                        muted
                        playsInline
                        className="max-h-[80vh] max-w-[90vw] object-contain"
                    />
                )}
            </div>
        </div>,
        document.body
    );
}

export default function HeroSection() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});

    const openModal = (type, src) => {
        setModalContent({ type, src });
        setModalOpen(true);
    };

    return (
        <section className="relative bg-black text-white overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img src={heroImage} className="w-full h-full object-cover opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-4 mt-10 py-20">
                <h1 className="text-5xl md:text-7xl text-center font-black text-white mb-4">
                    Moto Rent <span className="text-cyan-400">Bovilla</span>
                </h1>
                <p className="text-xl md:text-2xl text-center text-gray-200 max-w-2xl mx-auto mb-10">
                    ATV Tours Through Bovilla's Wildest Trails.<br />
                    <span className="text-cyan-300 font-medium">Adrenaline, views, and mud included.</span>
                </p>

                <div className="flex justify-center mb-12">
                    <Link to="/booking">
                        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-10 py-4 rounded-full text-lg shadow-lg transition-all duration-300">
                            Book Your Ride
                        </button>
                    </Link>
                </div>

                {/* IMAGE Track */}
                <h2 className="text-center text-cyan-400 text-2xl font-bold mb-4">Experience The Trails</h2>

                <div className="overflow-x-auto scrollbar-hide mb-14">
                    <div className="flex gap-4 px-4 md:px-12 pb-4">
                        {imageData.map(({ id, src, height }) => (
                            <div
                                key={id}
                                className="rounded-xl overflow-hidden shadow-lg flex-shrink-0 cursor-pointer"
                                style={{ height: `${height}px`, minWidth: `${height * 0.7}px` }}
                                onClick={() => openModal("image", src)}
                            >
                                <img src={src} className="w-full h-full object-cover transition-transform hover:scale-105" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* VIDEO Track */}
                <h2 className="text-center text-cyan-400 text-2xl font-bold mb-4">Capture The Action</h2>
                <div className="overflow-x-auto scrollbar-hide mb-10">
                    <div className="flex gap-4 px-4 md:px-12 pb-4">
                        {videoData.map(({ id, src, height }) => (
                            <div
                                key={id}
                                className="rounded-xl overflow-hidden shadow-xl flex-shrink-0 relative cursor-pointer"
                                style={{ height: `${height}px`, minWidth: `${height * 0.7}px` }}
                                onClick={() => openModal("video", src)}
                            >
                                <video
                                    src={src}
                                    muted
                                    loop
                                    autoPlay
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll animation under videos */}
                <div className="flex justify-center mb-6">
                    <div className="text-center">
                        <span className="text-sm text-gray-400">Swipe to explore</span>
                        <div className="animate-bounce mt-2 w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2 mx-auto">
                            <div className="w-1 h-2 bg-cyan-400 rounded-full " />
                        </div>
                    </div>
                </div>
            </div>

            {/* Fullscreen Modal */}
            <FullModal isOpen={modalOpen} content={modalContent} onClose={() => setModalOpen(false)} />
        </section>
    );
}
