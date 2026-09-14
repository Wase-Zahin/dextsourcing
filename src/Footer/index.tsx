export default function Footer() {
    return (
        <footer id="contact" className="bg-ink text-canvas pt-16 pb-8">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
                    <div>
                        <div className="f-display text-xl font-bold mb-4 flex items-center gap-2.5">
                            <img src="/dextsourcing.jpeg" alt="Dext Sourcing" className="h-8 w-8"/>
                            DEXT SOURCING
                        </div>
                        <p className="text-canvas/50 text-sm leading-relaxed">
                            Sourcing and production for apparel brands that need a factory partner, not just a factory.
                        </p>
                    </div>

                    <div>
                        <h4 className="f-mono text-xs text-canvas/50 tracking-wide mb-5">NAVIGATE</h4>
                        <ul className="space-y-3 text-sm">
                            {["Services", "Process", "Work", "About"].map((l) => (
                                <li key={l}>
                                    <a href={`#${l.toLowerCase()}`}
                                       className="text-canvas/70 hover:text-thread transition-colors">
                                        {l}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="f-mono text-xs text-canvas/50 tracking-wide mb-5">CAPABILITIES</h4>
                        <ul className="space-y-3 text-sm">
                            {["Sourcing", "Development", "Production", "Inspection"].map((l) => (
                                <li key={l}>
                                    <a href="#services" className="text-canvas/70 hover:text-thread transition-colors">
                                        {l}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="f-mono text-xs text-canvas/50 tracking-wide mb-5">CONTACT</h4>
                        <ul className="space-y-3 text-sm text-canvas/70">
                            <li>
                                <a href="mailto:hello@dextsourcing.com" className="hover:text-thread transition-colors">
                                    hello@dextsourcing.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+880 135 533 0355" className="hover:text-thread transition-colors">
                                    +880 135 533 0355
                                </a>
                            </li>
                            <li>
                                House# 340. Road# 15, Block# K,
                                <br/>
                                Banasree, Dhaka, 1219, Bangladesh
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className="border-t border-canvas/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-canvas/40">
                    <p>&copy; {new Date().getFullYear()} Dext Sourcing. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-thread transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-thread transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}