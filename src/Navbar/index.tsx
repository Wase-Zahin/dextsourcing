import {useState} from "react";
import {Menu, X} from "lucide-react";

const links = [
    {label: "Services", href: "#services"},
    {label: "Process", href: "#process"},
    {label: "Work", href: "#work"},
    {label: "About", href: "#about"},
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-canvas border-b border-ink/10">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
                <a href="#" className="f-display text-xl font-bold tracking-tight text-ink flex items-center gap-1.5">
                    WARPLINE
                    <span className="w-1.5 h-1.5 bg-thread inline-block rounded-full"/>
                </a>

                <nav className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm text-ink/70 hover:text-thread transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="text-sm font-semibold bg-ink text-canvas px-5 py-2.5 rounded-sm hover:bg-thread transition-colors"
                    >
                        Request a quote
                    </a>
                </nav>

                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden p-2 text-ink"
                    aria-label="Toggle menu"
                >
                    {open ? <X size={22}/> : <Menu size={22}/>}
                </button>
            </div>

            {open && (
                <div className="md:hidden border-t border-ink/10 bg-canvas px-6 py-5 space-y-4">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="block text-ink/80 text-base"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setOpen(false)}
                        className="block text-center bg-ink text-canvas px-5 py-3 rounded-sm font-semibold"
                    >
                        Request a quote
                    </a>
                </div>
            )}
        </header>
    );
}