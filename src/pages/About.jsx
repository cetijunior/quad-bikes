import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FaRoute,
    FaUserFriends,
    FaShieldAlt,
    FaMedal,
    FaCalendarCheck,
    FaLeaf,
    FaMapMarkerAlt,
    FaUsers
} from "react-icons/fa";
import GroupPromo from "../components/home/GroupPromo";

export default function AboutPage() {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const teamMembers = [
        {
            name: "Arben Gjoka",
            role: "Founder / Guide",
            bio: "Born and raised near Bovilla, Arben leads every ride with a mix of chill and local wisdom."
        },
        {
            name: "Elira Hoxha",
            role: "Bookings & Support",
            bio: "She keeps things smooth behind the scenes — from WhatsApp messages to group bookings."
        },
        {
            name: "Dritan Kelmendi",
            role: "Mechanic",
            bio: "Dritan’s the guy who makes sure every quad is ready to ride. Loves engines and espresso."
        }
    ];


    const milestones = [
        {
            year: "2023",
            title: "The Idea",
            description: "The first spark — turning weekend rides into something we could share with others."
        },
        {
            year: "2024",
            title: "Planning & Trails",
            description: "Mapped out safe routes, built our base, and started collecting feedback from test riders."
        },
        {
            year: "2025",
            title: "The First Season",
            description: "Launched official tours, built our site, and started welcoming adventurers from Albania and beyond."
        }
    ];


    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 bg-gradient-to-b from-blue-800 to-cyan-600 text-white overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <svg
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-0 right-0 w-96 h-96 text-white opacity-10"
                    >
                        <path
                            fill="currentColor"
                            d="M47.1,-57.8C61.3,-46.9,73.5,-32.3,76.7,-15.8C80,0.6,74.3,19,64.2,32.6C54.1,46.2,39.5,55,23.6,62.5C7.7,70,-9.4,76.2,-24.5,72.9C-39.5,69.6,-52.5,56.9,-63.4,41.7C-74.3,26.4,-83.2,8.5,-81.5,-8.4C-79.9,-25.3,-67.7,-41.2,-53,-52.5C-38.2,-63.8,-19.1,-70.5,-1.2,-69.2C16.8,-67.9,33.5,-68.6,47.1,-57.8Z"
                            transform="translate(100 100)"
                        />
                    </svg>
                </div>

                <div className="container mx-auto px-4 relative mt-16 z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Our <span className="bg-white text-blue-600 px-2">Story</span>
                        </h1>
                        <p className="text-xl opacity-90 mb-10 leading-relaxed">
                            We started with a love for nature and engines — and built MotoRent Bovilla to give people a real taste of Albania's raw beauty, one ride at a time.
                        </p>

                    </div>

                    <motion.div
                        className="relative mt-12 mx-auto"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="justify-center flex items-center rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/rides/I3.jpg"
                                alt="Bovilla Quads Adventures"
                                className="lg:w-3/4 md:w-full sm:w-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-white text-blue-600 p-4 rounded-lg shadow-xl">
                            <div className="text-center">
                                <span className="block text-3xl font-bold">2023</span>
                                <span className="text-sm uppercase tracking-wider">Est.</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="grid md:grid-cols-2 gap-16 items-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants}>
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">
                                The Bovilla Quads <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text">Journey</span>
                            </h2>
                            <div className="space-y-6 text-gray-600">
                                <p className="leading-relaxed">
                                    What started as weekend rides with friends became a passion project to share our home with others. Bovilla Quads began with a few bikes, a deep respect for our land, and a dream to offer real outdoor experiences — guided by locals who know these trails better than anyone.
                                </p>
                                <p className="leading-relaxed">
                                    In 2018, we guided our first official tour through the foothills surrounding Lake Bovilla. The breathtaking reactions from our guests confirmed what we already knew - these landscapes deserved to be experienced in a way traditional tourism couldn't provide.
                                </p>
                                <p className="leading-relaxed">
                                    Today, we're steadily growing with a small but well-maintained fleet and a tight-knit crew of experienced locals, mechanics, and guides who genuinely love what we do.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="space-y-8"
                            variants={itemVariants}
                        >
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Milestones</h3>
                            <div className="relative">
                                {/* Timeline Line */}
                                <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-cyan-500 to-blue-600"></div>

                                {/* Timeline Items */}
                                <div className="space-y-12">
                                    {milestones.map((milestone, index) => (
                                        <div key={index} className="flex items-start">
                                            <div className="flex-shrink-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-white h-16 w-16 rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                                                {milestone.year}
                                            </div>
                                            <div className="ml-6 pt-1">
                                                <h4 className="text-xl font-semibold text-gray-800 mb-2">{milestone.title}</h4>
                                                <p className="text-gray-600">{milestone.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">
                            Our <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text">Values</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            The principles that guide every adventure, decision, and interaction at Bovilla Quads
                        </p>
                    </div>

                    <motion.div
                        className="grid md:grid-cols-4 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        {[
                            {
                                icon: <FaUserFriends />,
                                title: "Community Connection",
                                description: "We work closely with local communities, ensuring our adventures benefit the regions we explore."
                            },
                            {
                                icon: <FaLeaf />,
                                title: "Environmental Stewardship",
                                description: "We follow strict environmentally friendly practices and promote respect for nature."
                            },
                            {
                                icon: <FaShieldAlt />,
                                title: "Safety Excellence",
                                description: "We never compromise on safety, providing thorough training and top-quality equipment."
                            },
                            {
                                icon: <FaUsers />,
                                title: "Inclusive Adventure",
                                description: "We believe adventure is for everyone, regardless of experience level."
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                                variants={itemVariants}
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-2xl">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-800">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* What Sets Us Apart */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">
                            What Sets Us <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text">Apart</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Discover why adventurers consistently choose Bovilla Quads for their Albanian explorations
                        </p>
                    </div>

                    <motion.div
                        className="grid md:grid-cols-2 gap-16 items-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        {/* Left Column - Image Grid */}
                        <motion.div
                            className="grid grid-cols-2 gap-6"
                            variants={itemVariants}
                        >
                            <div className="space-y-6">
                                <div className="rounded-2xl overflow-hidden shadow-lg h-48">
                                    <img
                                        src="/rides/I2.jpg"
                                        alt="Mountain trails"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                                    <img
                                        src="/rides/I3.jpg"
                                        alt="Group adventures"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="space-y-6 pt-12">
                                <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                                    <img
                                        src="/rides/I4.jpg"
                                        alt="Scenic views"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="rounded-2xl overflow-hidden shadow-lg h-48">
                                    <img
                                        src="/rides/I9.jpg"
                                        alt="Equipment"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column - Features */}
                        <motion.div variants={itemVariants}>
                            <div className="space-y-8">
                                {[
                                    {
                                        icon: <FaMapMarkerAlt />,
                                        title: "Exclusive Access",
                                        description: "Our local connections allow us to access some trails which are rarely visited — but they’ve been part of our backyard since we were kids."
                                    },
                                    {
                                        icon: <FaCalendarCheck />,
                                        title: "Flexible Experiences",
                                        description: "From 2-hour scenic rides to multi-day expeditions, we customize experiences to match your adventure appetite."
                                    },
                                    {
                                        icon: <FaRoute />,
                                        title: "Local Expertise",
                                        description: "Our guides are born and raised in the region, providing authentic insights into local culture and history."
                                    },
                                    {
                                        icon: <FaMedal />,
                                        title: "Quality Equipment",
                                        description: "We invest in premium vehicles and regularly update our fleet to ensure reliability and comfort."
                                    }
                                ].map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-5"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center text-xl">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                                            <p className="text-gray-600">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>


            {/* CTA Section */}
            <GroupPromo />

            {/* Team Section */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">
                            Meet Our <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text">Team</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            The passionate adventurers who make your Bovilla experience unforgettable
                        </p>
                    </div>

                    <motion.div
                        className="grid md:grid-cols-4 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                                variants={itemVariants}
                            >
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-1 text-gray-800">{member.name}</h3>
                                    <p className="text-cyan-600 font-medium text-sm mb-4">{member.role}</p>
                                    <p className="text-gray-600 text-sm">{member.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>


            {/* Testimonials Section */}
            {/* <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">
                            What Our <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text">Adventurers Say</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Hear from those who've experienced the thrill of Bovilla Quads
                        </p>
                    </div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        {[
                            {
                                text: "The most exhilarating adventure we've had in Albania! The views were breathtaking and our guide made sure we had an unforgettable experience.",
                                name: "Sarah M.",
                                location: "United Kingdom",
                                image: "/api/placeholder/100/100"
                            },
                            {
                                text: "As an experienced quad rider, I was impressed by both the quality of the equipment and the challenging trails they took us on. A perfect balance of thrill and safety.",
                                name: "Marco D.",
                                location: "Italy",
                                image: "/api/placeholder/100/100"
                            },
                            {
                                text: "I was nervous as a first-timer, but the team was patient and supportive. By the end of the tour, I felt confident and had the time of my life!",
                                name: "Ana L.",
                                location: "United States",
                                image: "/api/placeholder/100/100"
                            }
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                variants={itemVariants}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-500">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <p className="font-semibold text-gray-800">{testimonial.name}</p>
                                        <p className="text-gray-500 text-sm">{testimonial.location}</p>
                                    </div>
                                </div>
                                <div className="flex text-yellow-400 mb-4">
                                    {"★★★★★".split("").map((star, i) => (
                                        <span key={i}>{star}</span>
                                    ))}
                                </div>
                                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="text-center mt-12">
                        <Link
                            to="/reviews"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:from-cyan-600 hover:to-blue-700 transition-colors shadow-lg"
                        >
                            <span>Read All Reviews</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section> */}
        </div>
    );
}