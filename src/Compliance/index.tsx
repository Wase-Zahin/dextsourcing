import {Link} from "react-router-dom";
import {Check} from "lucide-react";
import {bg} from "../Img/images.tsx";

const items = [
    "Pure Drinking Water",
    "Electric Shock Prevention",
    "Salary On-Time",
    "Maternity Leave",
    "Health and Safety",
    "Lighting and Ventilation",
    "No Child Labor",
    "Working hour",
];

export default function Compliance() {
    return (
        <section className="relative overflow-hidden bg-[#10304D] py-20 text-white lg:py-28">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{backgroundImage: bg(32399705, 1920)}}
                aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#10304D]/95 via-[#10304D]/85 to-[#1B4A72]/70"
                 aria-hidden/>

            <div
                className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
                <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">Compliance and Ethics</p>
                    <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#5CC3CF]">Dext Sourcing</p>
                    <h2 className="mt-3 font-['Playfair_Display',serif] text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                        Obey all legal &amp; social compliance guided by laws
                    </h2>
                    <p className="mt-6 max-w-xl leading-relaxed text-white/80">
                        We do obey all legal &amp; social compliance guided by laws and regulatory bodies as per local
                        government order &amp; global requirements. Some of our major compliance issues are:
                    </p>
                    <Link
                        to="/compliance-ethics"
                        className="mt-8 inline-block bg-[#00707F] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[#1B4A72]"
                    >
                        Read more about compliance &amp; ethics
                    </Link>
                </div>

                <ul className="grid content-center gap-4 sm:grid-cols-2">
                    {items.map((item) => (
                        <li key={item}
                            className="flex items-center gap-4 border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-sm">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#00707F]">
                <Check size={18} aria-hidden/>
              </span>
                            <span className="font-semibold">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}