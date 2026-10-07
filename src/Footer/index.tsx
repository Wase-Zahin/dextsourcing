import {Link} from "react-router-dom";
import {Mail, MapPin, Phone} from "lucide-react";

const EMAIL = "info@dextsourcingbd.com";
const PHONE = "+880 1355 330355";
const ADDRESS = "House# 340. Road# 15, Block# K, Banasree, Dhaka 1219";

const usefulLinks = [
    {label: "FAQ", to: "/faq"},
    {label: "About Us", to: "/about"},
    {label: "Services", to: "/services"},
    {label: "Contact Us", to: "/contact"},
    {label: "Privacy Policy", to: "/privacy-policy"},
    {label: "Compliance & Ethics", to: "/compliance-ethics"},
];

const products = [
    {label: "Woven", to: "/products/woven"},
    {label: "Knit", to: "/products/knit"},
    {label: "Denim", to: "/products/denim"},
    {label: "Sweater", to: "/products/sweater"},
    {label: "Home Textile & Others", to: "/products/hometextile-other"},
];

const link = "text-white/75 transition-colors hover:text-white";

export default function Footer() {
    return (
        <footer>
            {/* CTA band */}
            <div className="bg-gradient-to-r from-[#00707F] to-[#1B4A72] text-white">
                <div
                    className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-8 px-4 py-14 sm:px-6 md:flex-row md:items-center lg:px-8"
                >
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">
                            For Business Collaboration
                        </p>

                        <h2 className="mt-3 font-['Playfair_Display',serif] text-3xl font-bold sm:text-4xl">
                            Discuss With Our Great Team
                        </h2>

                        <p className="mt-4 text-white/90">
                            Send An Email:{" "}
                            <a
                                href={`mailto:${EMAIL}`}
                                className="font-bold underline underline-offset-4"
                            >
                                {EMAIL}
                            </a>
                        </p>
                    </div>

                    <Link
                        to="/contact"
                        className="bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#1B4A72] transition-colors hover:bg-[#10304D] hover:text-white"
                    >
                        Get involved now!
                    </Link>
                </div>
            </div>

            {/* Main footer */}
            <div className="bg-[#10304D] text-sm">
                <div
                    className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] lg:gap-20 lg:px-8"
                >
                    {/* Brand & Contact */}
                    <div>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-3"
                            aria-label="Dext Sourcing home"
                        >
                            <img
                                src="/dextsourcing.jpeg"
                                alt="Dext Sourcing"
                                className="h-14 w-auto rounded-md object-contain"
                            />

                            <span
                                className="font-['Playfair_Display',serif] text-2xl font-bold tracking-tight text-white">
                                Dext{" "}
                                <span className="text-[#5CC3CF]">
                                    Sourcing
                                </span>
                            </span>
                        </Link>

                        <ul className="mt-7 space-y-4 text-white/75">
                            <li className="flex gap-3">
                                <MapPin
                                    size={18}
                                    className="mt-0.5 shrink-0 text-[#5CC3CF]"
                                    aria-hidden
                                />
                                <span>{ADDRESS}</span>
                            </li>

                            <li className="flex gap-3">
                                <Mail
                                    size={18}
                                    className="mt-0.5 shrink-0 text-[#5CC3CF]"
                                    aria-hidden
                                />
                                <a
                                    href={`mailto:${EMAIL}`}
                                    className={link}
                                >
                                    {EMAIL}
                                </a>
                            </li>

                            <li className="flex gap-3">
                                <Phone
                                    size={18}
                                    className="mt-0.5 shrink-0 text-[#5CC3CF]"
                                    aria-hidden
                                />
                                <a
                                    href={`tel:${PHONE.replace(/\s/g, "")}`}
                                    className={link}
                                >
                                    {PHONE}
                                </a>
                            </li>
                        </ul>

                        <div className="mt-7 flex gap-5">
                            <a href="#" className={link}>
                                LinkedIn
                            </a>
                            <a href="#" className={link}>
                                Facebook
                            </a>
                            <a href="#" className={link}>
                                Instagram
                            </a>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <nav aria-label="Useful links">
                        <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-white">
                            Useful Links
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {usefulLinks.map((l) => (
                                <li key={l.to}>
                                    <Link
                                        to={l.to}
                                        className={link}
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Products */}
                    <nav aria-label="Products">
                        <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-white">
                            Our Products
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {products.map((l) => (
                                <li key={l.to}>
                                    <Link
                                        to={l.to}
                                        className={link}
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10">
                    <div
                        className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-white/60 sm:px-6 md:flex-row lg:px-8"
                    >
                        <p>
                            Copyright © {new Date().getFullYear()} Dext Sourcing
                        </p>

                        <a href="#top" className={link}>
                            Back to top
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}