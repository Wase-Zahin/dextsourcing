import {motion} from "framer-motion";

// Using Simple Icons - these are real SVG logos from https://simpleicons.org/
const logos = [
    {name: "Gucci", slug: "gucci"},
    {name: "Prada", slug: "prada"},
    {name: "Burberry", slug: "burberry"},
    {name: "Versace", slug: "versace"},
    {name: "Armani", slug: "armani"},
    {name: "Dior", slug: "dior"},
    {name: "Chanel", slug: "chanel"},
    {name: "Hermès", slug: "hermes"},
];

export default function TrustMarquee() {
    // Duplicate the array for a seamless loop
    const duplicatedLogos = [...logos, ...logos];

    return (
        <section className="bg-white py-12 md:py-16 border-b border-gray-100 overflow-hidden">
            <p className="text-center text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-gray-400 mb-10">
                Trusted by leading brands worldwide
            </p>
            <div className="relative">
                <motion.div
                    className="flex gap-16 items-center"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {duplicatedLogos.map((logo, index) => (
                        <div
                            key={`${logo.slug}-${index}`}
                            className="flex items-center gap-2 text-gray-300 hover:text-[#C9A96E] transition-colors duration-300 whitespace-nowrap"
                        >
                            <img
                                src={`https://cdn.simpleicons.org/${logo.slug}/C9A96E`}
                                alt={logo.name}
                                className="h-6 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300"
                                onError={(e) => {
                                    // Fallback to text if logo fails to load
                                    (e.target as HTMLImageElement).style.display = "none";
                                }}
                            />
                            <span className="font-semibold tracking-widest text-lg md:text-xl">
                {logo.name.toUpperCase()}
              </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}