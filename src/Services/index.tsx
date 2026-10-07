import {Link} from "react-router-dom";
import {bg} from "../Img/images.tsx";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";

import "swiper/css";

const services = [
    {
        slug: "fabric-sourcing",
        title: "Fabric Sourcing",
        photo: 36296433,
        text: "Tested fabrics from trusted mills, matched to your quality and price targets.",
    },
    {
        slug: "r-d",
        title: "Research & Development",
        photo: 17710255,
        text: "We study trends and fabrics so your product is ready before the season starts.",
    },
    {
        slug: "sample-development",
        title: "Sample Development",
        photo: 4622203,
        text: "We always give extra priority to samples that match your tech pack the first time.",
    },
    {
        slug: "merchandising",
        title: "Merchandising",
        photo: 27893058,
        text: "Our main concern is your order, followed from costing to shipment by one merchandiser.",
    },
    {
        slug: "production",
        title: "Production",
        photo: 31031120,
        text: "Orders placed with compliant factories and tracked closely every day.",
    },
    {
        slug: "qa-and-qc",
        title: "QA and QC",
        photo: 31251573,
        text: "A team of experienced inspectors checks inline and final quality to your AQL.",
    },
    {
        slug: "delivery-and-shipment",
        title: "Delivery and Shipment",
        photo: 3057960,
        text: "Proper packing and on-time goods delivery to your forwarder or port.",
    },
    {
        slug: "knitting",
        title: "Knitting",
        photo: 31251581,
        text: "Knitting factories equipped for jersey, rib, fleece and sweater panels.",
    },
    {
        slug: "embroidery",
        title: "Embroidery",
        photo: 29107942,
        text: "Logos and artwork stitched with consistent quality across every piece.",
    },
    {
        slug: "dying-washing",
        title: "Garment Dyeing & Wash",
        photo: 37270879,
        text: "Dyeing and wash finishes tested for color fastness and feel.",
    },
    {
        slug: "printing",
        title: "Printing",
        photo: 17609847,
        text: "Screen, digital and pigment printing matched to your approved artwork.",
    },
    {
        slug: "trimming-accessories",
        title: "Trimming & Accessories",
        photo: 35285958,
        text: "Labels, buttons, zippers and packaging sourced together with the garment.",
    },
];

export default function Services() {
    return (
        <section className="bg-[#F2F6F9] py-20 lg:py-28">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Section Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#00707F]">
                        Development, Production &amp; Delivery
                    </p>

                    <h2 className="mt-4 font-['Playfair_Display',serif] text-3xl font-bold leading-tight text-[#1B4A72] sm:text-4xl lg:text-5xl">
                        Dext Sourcing Ensures the Best Production From Every Angle
                    </h2>

                    <p className="mt-5 leading-relaxed text-slate-600">
                        Dext Sourcing is the largest peer-to-peer comparison initiative in the textile industry. It
                        tracks the apparel material and home textile sector’s progress.
                    </p>
                </div>

                {/* Services Slider */}
                <div className="mt-14">
                    <Swiper
                        modules={[Autoplay]}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed={800}
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                        className="services-swiper"
                    >
                        {services.map((s) => (
                            <SwiperSlide key={s.slug} className="h-auto">
                                <li className="group h-full list-none overflow-hidden bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">

                                    <Link
                                        to={`/services/${s.slug}`}
                                        className="block h-full"
                                    >
                                        {/* Image */}
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <div
                                                className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                                                style={{
                                                    backgroundImage: bg(s.photo, 800),
                                                }}
                                                role="img"
                                                aria-label={s.title}
                                            />

                                            <div
                                                className="absolute inset-0 bg-gradient-to-t from-[#10304D]/70 to-transparent"/>

                                            <h3 className="absolute inset-x-0 bottom-0 p-5 font-['Playfair_Display',serif] text-xl font-bold text-white">
                                                {s.title}
                                            </h3>
                                        </div>

                                        {/* Description */}
                                        <div
                                            className="border-b-4 border-transparent p-5 transition-colors duration-300 group-hover:border-[#00707F]">
                                            <p className="text-sm leading-relaxed text-slate-600">
                                                {s.text}
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    );
}