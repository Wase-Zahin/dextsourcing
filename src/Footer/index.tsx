import {Link} from "react-router-dom";
import {Mail, MapPin, Phone} from "lucide-react";
import {px} from "../Img/images.tsx";

const EMAIL = "info@dextsourcingbd.com";
const PHONE = "+880 1XXX-XXXXXX"; // TODO: replace
const ADDRESS = "Head Office: Dhaka, Bangladesh"; // TODO: replace

const usefulLinks = [
    {label: "FAQ", to: "/faq"},
    {label: "About Us", to: "/about"},
    {label: "Services", to: "/services"},
    {label: "Contact Us", to: "/contact"},
    {label: "Privacy Policy", to: "/privacy-policy"},
    {label: "Blog", to: "/blog"},
    {label: "Compliance & Ethics", to: "/compliance-ethics"},
];

const products = [
    {label: "Woven", to: "/products/woven"},
    {label: "Knit", to: "/products/knit"},
    {label: "Sweater", to: "/products/sweater"},
    {label: "Homewear & Others", to: "/products/homewear-other"},
];

const posts = [
    {
        title: "Increasing productivity of Denim items",
        photo: 32641555,
        to: "/blog/increasing-productivity-of-denim-items"
    },
    {
        title: "Women empowerment through RMG industry",
        photo: 31031142,
        to: "/blog/women-empowerment-through-rmg-industry"
    },
    {title: "Recycling impacts in RMG industry", photo: 17609847, to: "/blog/recycling-impacts-in-rmg-industry"},
    {
        title: "Scope of jobs for graduates in the RMG industry",
        photo: 4622203,
        to: "/blog/scope-of-jobs-for-graduates-in-the-rmg-industry"
    },
];

const link = "text-white/75 transition-colors hover:text-white";

export default function Footer() {
    return (
        <footer>
            {/* CTA band */}
            <div className="bg-gradient-to-r from-[#00707F] to-[#1B4A72] text-white">
                <div
                    className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-8 px-4 py-14 sm:px-6 md:flex-row md:items-center lg:px-8">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">For Business
                            Collaboration</p>
                        <h2 className="mt-3 font-['Playfair_Display',serif] text-3xl font-bold sm:text-4xl">
                            Discuss With Our Great Team
                        </h2>
                        <p className="mt-4 text-white/90">
                            Send An Email:{" "}
                            <a href={`mailto:${EMAIL}`} className="font-bold underline underline-offset-4">
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
                    className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
                    <div>
                        <Link to="/" className="inline-flex items-center gap-3 bg-white px-4 py-2"
                              aria-label="Dext Sourcing home">
                            <img src="/dext-logo.jpeg" alt="" className="h-12 w-auto"/>
                            <span className="font-['Playfair_Display',serif] text-xl font-bold text-[#1B4A72]">
                Dext <span className="text-[#00707F]">Sourcing</span>
              </span>
                        </Link>
                        <ul className="mt-6 space-y-4 text-white/75">
                            <li className="flex gap-3">
                                <MapPin size={18} className="mt-0.5 shrink-0 text-[#5CC3CF]" aria-hidden/>
                                <span>{ADDRESS}</span>
                            </li>
                            <li className="flex gap-3">
                                <Mail size={18} className="mt-0.5 shrink-0 text-[#5CC3CF]" aria-hidden/>
                                <a href={`mailto:${EMAIL}`} className={link}>{EMAIL}</a>
                            </li>
                            <li className="flex gap-3">
                                <Phone size={18} className="mt-0.5 shrink-0 text-[#5CC3CF]" aria-hidden/>
                                <a href={`tel:${PHONE.replace(/\s/g, "")}`} className={link}>{PHONE}</a>
                            </li>
                        </ul>
                        <div className="mt-6 flex gap-5">
                            <a href="#" className={link}>LinkedIn</a>
                            <a href="#" className={link}>Facebook</a>
                            <a href="#" className={link}>Instagram</a>
                        </div>
                    </div>

                    <nav aria-label="Useful links">
                        <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-white">Useful Links</h3>
                        <ul className="mt-5 space-y-3">
                            {usefulLinks.map((l) => (
                                <li key={l.to}><Link to={l.to} className={link}>{l.label}</Link></li>
                            ))}
                        </ul>
                    </nav>

                    <nav aria-label="Products">
                        <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-white">Our Products</h3>
                        <ul className="mt-5 space-y-3">
                            {products.map((l) => (
                                <li key={l.to}><Link to={l.to} className={link}>{l.label}</Link></li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-white">Recent Posts</h3>
                        <ul className="mt-5 space-y-4">
                            {posts.map((p) => (
                                <li key={p.to}>
                                    <Link to={p.to} className="group flex items-center gap-3">
                                        <img
                                            src={px(p.photo, 160)}
                                            alt=""
                                            loading="lazy"
                                            className="h-14 w-14 shrink-0 bg-[#1B4A72] object-cover"
                                        />
                                        <span
                                            className="text-white/75 transition-colors group-hover:text-white">{p.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10">
                    <div
                        className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-white/60 sm:px-6 md:flex-row lg:px-8">
                        <p>Copyright © {new Date().getFullYear()} Dext Sourcing</p>
                        <a href="#top" className={link}>Back to top</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}