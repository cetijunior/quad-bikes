import React from "react";
import HeroSection from "../components/home/HeroSection";
import GalleryPreview from "../components/home/GalleryPreview";
import AboutPreview from "../components/home/AboutPreview";
import ReviewsPreview from "../components/home/ReviewsPreview";
import DealsSection from "../components/home/DealsSection";
import GroupPromo from "../components/home/GroupPromo";
import ContactPreview from "../components/home/ContactPreview";


export default function Home() {
    return (
        <div className="bg-white text-gray-900 overflow-hidden">
            <HeroSection />
            <GalleryPreview />
            <AboutPreview />
            {/* <ReviewsPreview /> */}
            <DealsSection />
            <GroupPromo />
            <ContactPreview />
        </div>
    );
}