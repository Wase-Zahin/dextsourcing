import {Link} from "react-router-dom";
import {ChevronRight} from "lucide-react";
import {bg} from "../Img/images.tsx";

type Crumb = { label: string; to?: string };

type Props = {
    title: string;
    photo: number;
    subtitle?: string;
    crumbs?: Crumb[];
};

/** Banner used at the top of every inner page. */
export default function PageHeader({title, photo, subtitle, crumbs = []}: Props) {
    return (
        <section className="relative overflow-hidden bg-[#10304D] text-white">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: bg(photo, 1920)}}
                 aria-hidden/>
            <div className="absolute inset-0 bg-gradient-to-r from-[#10304D]/95 via-[#10304D]/80 to-[#1B4A72]/55"
                 aria-hidden/>
            <div className="dx-weave absolute inset-0" aria-hidden/>

            <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
                <nav aria-label="Breadcrumb" className="dx-rise text-sm text-white/75">
                    <ol className="flex flex-wrap items-center gap-1.5">
                        <li>
                            <Link to="/" className="transition-colors hover:text-white">
                                Home
                            </Link>
                        </li>
                        {crumbs.map((c) => (
                            <li key={c.label} className="flex items-center gap-1.5">
                                <ChevronRight size={14} aria-hidden/>
                                {c.to ? (
                                    <Link to={c.to} className="transition-colors hover:text-white">
                                        {c.label}
                                    </Link>
                                ) : (
                                    <span aria-current="page" className="text-white">
                    {c.label}
                  </span>
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>

                <h1
                    className="dx-rise mt-5 max-w-3xl font-['Playfair_Display',serif] text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl"
                    style={{"--dx-delay": "120ms"} as React.CSSProperties}
                >
                    {title}
                </h1>
                {subtitle && (
                    <p
                        className="dx-rise mt-5 max-w-2xl text-lg leading-relaxed text-white/80"
                        style={{"--dx-delay": "240ms"} as React.CSSProperties}
                    >
                        {subtitle}
                    </p>
                )}
                <div
                    className="dx-rise mt-8 h-1 w-24 bg-gradient-to-r from-[#00707F] to-[#5CC3CF]"
                    style={{"--dx-delay": "340ms"} as React.CSSProperties}
                    aria-hidden
                />
            </div>
        </section>
    );
}