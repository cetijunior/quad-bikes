import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import heroImage from "/rides/I6.jpg";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Video from "yet-another-react-lightbox/plugins/video";
import { ChevronRight, ChevronLeft, Camera, Play, Calendar } from "lucide-react";

const imageData = Array.from({ length: 10 }, (_, i) => ({
    id: `I${i + 1}`,
    src: `/rides/I${i + 1}.jpg`,
    alt: `ATV Tour Photo ${i + 1}`
}));

const videoData = Array.from({ length: 10 }, (_, i) => ({
    id: `V${i + 1}`,
    type: "video",
    poster: `/rides/I${i + 1}.jpg`, // Using images as video thumbnails
    sources: [
        {
            src: `/videos/V${i + 1}.mp4`,
            type: "video/mp4"
        }
    ]
}));

export default function HeroSection() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [contentType, setContentType] = useState("images"); // "images" or "videos"
    const [isMobile, setIsMobile] = useState(false);

    const imagesTrackRef = useRef(null);
    const videosTrackRef = useRef(null);

    // Check if mobile based on screen width
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();
        window.addEventListener("resize", checkIfMobile);

        return () => window.removeEventListener("resize", checkIfMobile);
    }, []);

    const openImageLightbox = (index) => {
        setContentType("images");
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const openVideoLightbox = (index) => {
        setContentType("videos");
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const scroll = (ref, direction) => {
        if (ref.current) {
            const scrollAmount = direction === "left" ? -300 : 300;
            ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="relative bg-black text-white overflow-hidden">
            {/* Background with parallax effect */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImage}
                    className="w-full h-full object-cover opacity-40"
                    alt="ATV tour background"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-5xl mx-auto">
                    {/* Hero Title with animated text */}
                    <div className="text-center mb-8">
                        <h1 className="text-5xl md:text-7xl font-black mb-2 animate-fade-in">
                            Moto Rent <span className="text-cyan-400">Bovilla</span>
                        </h1>
                        <div className="h-1 w-24 md:w-32 bg-cyan-500 mx-auto mb-4 rounded-full"></div>
                        <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                            ATV Tours Through Bovilla's Wildest Trails.
                            <span className="block text-cyan-300 font-medium mt-1">Adrenaline, views, and mud included.</span>
                        </p>
                    </div>

                    {/* Action Button */}
                    <div className="flex justify-center mb-16">
                        <Link to="/contact" className="group">
                            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 md:px-10 rounded-full text-lg shadow-xl transition-all duration-300 flex items-center gap-2 group-hover:gap-3">
                                <Calendar size={20} />
                                <span>Book Your Ride</span>
                                <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
                            </button>
                        </Link>
                    </div>

                    {/* Image Gallery Section */}
                    <div className="mb-16">
                        <div className="flex justify-between items-center mb-4 px-2">
                            <h2 className="text-2xl font-bold text-cyan-400 flex items-center gap-2">
                                <Camera size={24} className="text-cyan-300" />
                                <span>Experience The Trails</span>
                            </h2>

                            {!isMobile && (
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => scroll(imagesTrackRef, "left")}
                                        className="bg-gray-800/80 hover:bg-cyan-800 p-2 rounded-full transition-colors"
                                        aria-label="Scroll left"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button
                                        onClick={() => scroll(imagesTrackRef, "right")}
                                        className="bg-gray-800/80 hover:bg-cyan-800 p-2 rounded-full transition-colors"
                                        aria-label="Scroll right"
                                    >
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="relative">
                            <div
                                ref={imagesTrackRef}
                                className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar"
                            >
                                {imageData.map((image, index) => (
                                    <div
                                        key={image.id}
                                        className="rounded-xl overflow-hidden shadow-lg flex-shrink-0 snap-start cursor-pointer group"
                                        style={{ minWidth: isMobile ? "85%" : "300px", height: "350px" }}
                                        onClick={() => openImageLightbox(index)}
                                    >
                                        <div className="relative h-full w-full overflow-hidden">
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                                                <span className="text-white font-medium">View Full Image</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Video Gallery Section */}
                    <div className="mb-12">
                        <div className="flex justify-between items-center mb-4 px-2">
                            <h2 className="text-2xl font-bold text-cyan-400 flex items-center gap-2">
                                <Play size={24} className="text-cyan-300" />
                                <span>Capture The Action</span>
                            </h2>

                            {!isMobile && (
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => scroll(videosTrackRef, "left")}
                                        className="bg-gray-800/80 hover:bg-cyan-800 p-2 rounded-full transition-colors"
                                        aria-label="Scroll left"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button
                                        onClick={() => scroll(videosTrackRef, "right")}
                                        className="bg-gray-800/80 hover:bg-cyan-800 p-2 rounded-full transition-colors"
                                        aria-label="Scroll right"
                                    >
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="relative">
                            <div
                                ref={videosTrackRef}
                                className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar"
                            >
                                {videoData.map((video, index) => (
                                    <div
                                        key={video.id}
                                        className="rounded-xl overflow-hidden shadow-xl flex-shrink-0 snap-start cursor-pointer group"
                                        style={{ minWidth: isMobile ? "85%" : "300px", height: "350px" }}
                                        onClick={() => openVideoLightbox(index)}
                                    >
                                        <div className="relative h-full w-full overflow-hidden">
                                            <video
                                                src={video.sources[0].src}
                                                poster={video.poster}
                                                muted
                                                loop
                                                autoPlay
                                                playsInline
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="bg-cyan-500/90 rounded-full p-3">
                                                    <Play size={24} fill="white" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Subtle scroll animation indicator for mobile */}
                    {isMobile && (
                        <div className="flex justify-center mb-4">
                            <div className="text-center">
                                <span className="text-sm text-gray-400">Swipe to explore</span>
                                <div className="animate-bounce mt-2 w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2 mx-auto">
                                    <div className="w-1 h-2 bg-cyan-400 rounded-full" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Lightbox for full-screen viewing */}
            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                index={lightboxIndex}
                slides={contentType === "images" ? imageData : videoData}
                plugins={[Video]}
                controller={{ closeOnBackdropClick: true }}
            />

            {/* Custom CSS for hiding scrollbars but allowing scroll */}
            <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
        </section>
    );
}