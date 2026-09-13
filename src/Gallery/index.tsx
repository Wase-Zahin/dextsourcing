import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";
import {X} from "lucide-react";

const galleryImages = [
    "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1374&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1470&auto=format&fit=crop",
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="bg-white py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span
                        className="text-[#C9A96E] text-xs md:text-sm font-medium tracking-[0.25em] uppercase">Portfolio</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0A1628] mt-4 mb-6 leading-tight">A
                        glimpse into our work</h2>
                </div>
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                    {galleryImages.map((src, i) => (
                        <motion.div
                            key={i}
                            initial={{opacity: 0, scale: 0.95}}
                            whileInView={{opacity: 1, scale: 1}}
                            viewport={{once: true}}
                            transition={{delay: i * 0.05}}
                            className="break-inside-avoid rounded-xl overflow-hidden cursor-pointer group relative"
                            onClick={() => setSelectedImage(src)}
                        >
                            <img src={src} alt={`Gallery ${i + 1}`}
                                 className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"/>
                            <div
                                className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"/>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{scale: 0.8}}
                            animate={{scale: 1}}
                            exit={{scale: 0.8}}
                            className="relative max-w-4xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src={selectedImage} alt="Enlarged view" className="w-full h-auto rounded-lg"/>
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
                            >
                                <X size={20}/>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}