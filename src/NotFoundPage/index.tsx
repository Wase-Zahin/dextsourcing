import {Link} from "react-router-dom";
import {ArrowRight} from "lucide-react";

export default function NotFoundPage() {
    return (
        <section className="dx-weave-light relative overflow-hidden bg-[#F2F6F9] py-28 lg:py-40">
            <p
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-['Playfair_Display',serif] text-[18rem] font-bold leading-none text-[#1B4A72]/[0.06] sm:text-[26rem]"
                aria-hidden
            >
                404
            </p>
            <div className="relative mx-auto max-w-2xl px-4 text-center">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#00707F]">Page not found</p>
                <h1 className="mt-4 font-['Playfair_Display',serif] text-4xl font-bold text-[#1B4A72] sm:text-5xl">
                    This page is not built yet.
                </h1>
                <p className="mt-5 text-lg leading-relaxed text-slate-600">
                    The page you are looking for does not exist or has moved. Let’s get you back on track.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <Link
                        to="/"
                        className="dx-shine group inline-flex items-center gap-2 bg-[#1B4A72] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#00707F]"
                    >
                        Back to home
                        <ArrowRight size={16} aria-hidden className="transition-transform group-hover:translate-x-1"/>
                    </Link>
                    <Link
                        to="/contact"
                        className="inline-flex items-center border border-[#1B4A72] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#1B4A72] transition-colors hover:bg-[#1B4A72] hover:text-white"
                    >
                        Contact us
                    </Link>
                </div>
            </div>
        </section>
    );
}