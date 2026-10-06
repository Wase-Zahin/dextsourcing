import {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {ChevronDown, Mail, Menu, Phone, X} from "lucide-react";

type SubItem = { label: string; to: string };
type NavItem = { label: string; to: string; children?: SubItem[] };

const EMAIL = "info@dextsourcingbd.com";
const PHONE = "+880 1355 330355";

const serviceLinks: SubItem[] = [
    {label: "Research & Development", to: "/services/r-d"},
    {label: "Sample Development", to: "/services/sample-development"},
    {label: "Merchandising", to: "/services/merchandising"},
    {label: "Fabric Sourcing", to: "/services/fabric-sourcing"},
    {label: "Production", to: "/services/production"},
    {label: "QA and QC", to: "/services/qa-and-qc"},
    {label: "Delivery and Shipment", to: "/services/delivery-and-shipment"},
    {label: "Knitting", to: "/services/knitting"},
    {label: "Embroidery", to: "/services/embroidery"},
    {label: "Garment Dyeing & Wash", to: "/services/dying-washing"},
    {label: "Printing", to: "/services/printing"},
    {label: "Trimming & Accessories", to: "/services/trimming-accessories"},
];

const productLinks: SubItem[] = [
    {label: "Woven", to: "/products/woven"},
    {label: "Knit", to: "/products/knit"},
    {label: "Sweater", to: "/products/sweater"},
    {label: "Homewear & Others", to: "/products/homewear-other"},
];

const nav: NavItem[] = [
    {label: "Home", to: "/"},
    {label: "About", to: "/about"},
    {label: "Services", to: "/services", children: serviceLinks},
    {label: "Compliance & Ethics", to: "/compliance-ethics"},
    {label: "Products", to: "/products", children: productLinks},
    {label: "Contact us", to: "/contact"},
];

const topLink =
    "rounded-sm hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white";

const desktopLink = ({isActive}: { isActive: boolean }) =>
    `inline-flex items-center gap-1 px-3 py-2 text-[15px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00707F] ${
        isActive ? "text-[#00707F]" : "text-[#1B4A72] hover:text-[#00707F]"
    }`;

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [sub, setSub] = useState<string | null>(null);

    const close = () => {
        setOpen(false);
        setSub(null);
    };

    return (
        <>
            {/* Top bar */}
            <div className="bg-[#10304D] text-sm text-white/80">
                <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                    <p className="hidden md:block">Your Trusted Manufacturer and Exporter</p>
                    <div className="flex w-full items-center justify-between gap-6 md:w-auto md:justify-end">
                        <a href={`mailto:${EMAIL}`} className={`${topLink} inline-flex items-center gap-2`}>
                            <Mail size={14} aria-hidden/> {EMAIL}
                        </a>
                        <a href={`tel:${PHONE.replace(/\s/g, "")}`}
                           className={`${topLink} inline-flex items-center gap-2`}>
                            <Phone size={14} aria-hidden/> {PHONE}
                        </a>
                        <div className="hidden items-center gap-4 lg:flex">
                            <a href="#" className={topLink}>LinkedIn</a>
                            <a href="#" className={topLink}>Facebook</a>
                            <a href="#" className={topLink}>Instagram</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main nav */}
            <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
                <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <Link to="/" onClick={close} className="flex items-center gap-3 py-2"
                          aria-label="Dext Sourcing home">
                        <img src="/dext-logo.jpeg" alt="" className="h-14 w-auto"/>
                        <span
                            className="font-['Playfair_Display',serif] text-2xl font-bold tracking-tight text-[#1B4A72]">
              Dext <span className="text-[#00707F]">Sourcing</span>
            </span>
                    </Link>

                    {/* Desktop */}
                    <nav className="hidden items-center lg:flex" aria-label="Primary">
                        {nav.map((item) =>
                            item.children ? (
                                <div key={item.label} className="group relative">
                                    <NavLink to={item.to} className={desktopLink}>
                                        {item.label}
                                        <ChevronDown size={14} aria-hidden/>
                                    </NavLink>
                                    <ul className="invisible absolute left-0 top-full min-w-64 border-t-2 border-[#00707F] bg-white py-2 opacity-0 shadow-lg transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                                        {item.children.map((c) => (
                                            <li key={c.to}>
                                                <Link
                                                    to={c.to}
                                                    className="block px-5 py-2.5 text-sm text-[#14212B] hover:bg-[#F2F6F9] hover:text-[#00707F]"
                                                >
                                                    {c.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <NavLink key={item.label} to={item.to} end={item.to === "/"} className={desktopLink}>
                                    {item.label}
                                </NavLink>
                            )
                        )}
                    </nav>

                    {/* Mobile toggle */}
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        className="p-2 text-[#1B4A72] lg:hidden"
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        aria-label={open ? "Close menu" : "Open menu"}
                    >
                        {open ? <X size={26}/> : <Menu size={26}/>}
                    </button>
                </div>

                {/* Mobile menu */}
                {open && (
                    <nav id="mobile-menu"
                         className="max-h-[75vh] overflow-y-auto border-t border-slate-200 bg-white lg:hidden"
                         aria-label="Mobile">
                        <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
                            {nav.map((item) => (
                                <li key={item.label} className="border-b border-slate-100 last:border-0">
                                    {item.children ? (
                                        <>
                                            <button
                                                type="button"
                                                onClick={() => setSub(sub === item.label ? null : item.label)}
                                                aria-expanded={sub === item.label}
                                                className="flex w-full items-center justify-between py-3 text-left font-semibold text-[#1B4A72]"
                                            >
                                                {item.label}
                                                <ChevronDown
                                                    size={18}
                                                    aria-hidden
                                                    className={`transition-transform ${sub === item.label ? "rotate-180" : ""}`}
                                                />
                                            </button>
                                            {sub === item.label && (
                                                <ul className="mb-2 ml-3 border-l-2 border-[#00707F]/30 pl-4">
                                                    <li>
                                                        <Link to={item.to} onClick={close}
                                                              className="block py-2 text-sm font-semibold text-[#00707F]">
                                                            All {item.label.toLowerCase()}
                                                        </Link>
                                                    </li>
                                                    {item.children.map((c) => (
                                                        <li key={c.to}>
                                                            <Link to={c.to} onClick={close}
                                                                  className="block py-2 text-sm text-slate-700">
                                                                {c.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </>
                                    ) : (
                                        <Link to={item.to} onClick={close}
                                              className="block py-3 font-semibold text-[#1B4A72]">
                                            {item.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </header>
        </>
    );
}