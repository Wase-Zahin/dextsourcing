import {useEffect, useState} from "react";
import {ArrowUp} from "lucide-react";

/** Thin reading-progress bar at the very top, plus a back-to-top button. */
export default function ScrollUI() {
    const [progress, setProgress] = useState(0);
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        let raf = 0;
        const update = () => {
            raf = 0;
            const doc = document.documentElement;
            const max = doc.scrollHeight - window.innerHeight;
            setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
            setShowTop(window.scrollY > 700);
        };
        const onScroll = () => {
            if (!raf) raf = requestAnimationFrame(update);
        };
        update();
        window.addEventListener("scroll", onScroll, {passive: true});
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <>
            <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-1" aria-hidden>
                <div
                    className="h-full origin-left bg-gradient-to-r from-[#00707F] via-[#5CC3CF] to-[#1B4A72]"
                    style={{transform: `scaleX(${progress})`}}
                />
            </div>

            <button
                type="button"
                onClick={() => window.scrollTo({top: 0})}
                aria-label="Back to top"
                className={`fixed bottom-6 right-6 z-[60] flex h-12 w-12 items-center justify-center bg-[#1B4A72] text-white shadow-lg transition-all duration-300 hover:bg-[#00707F] ${
                    showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
                }`}
            >
                <ArrowUp size={20}/>
            </button>
        </>
    );
}