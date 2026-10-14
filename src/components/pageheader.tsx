import {Link} from "react-router-dom";
import {ChevronRight} from "lucide-react";

type Crumb = {
    label: string;
    to?: string;
};

type Props = {
    title: string;
    photo: string;
    subtitle?: string;
    crumbs?: Crumb[];
};

/** Banner used at the top of every inner page. */
export default function PageHeader({
                                       title,
                                       photo,
                                       subtitle,
                                       crumbs = [],
                                   }: Props) {
    return (
        <section className="relative isolate overflow-hidden bg-[#10304D] text-white">
            {/* Background image */}
            <div
                className="absolute inset-0 -z-20 bg-cover bg-center"
                style={{backgroundImage: `url("${photo}")`}}
                aria-hidden="true"
            />

            {/* Dark overlay for readable text */}
            <div
                className="absolute inset-0 -z-10 bg-gradient-to-r from-[#10304D]/85 via-[#10304D]/70 to-[#1B4A72]/40"
                aria-hidden="true"
            />

            <div
                className="dx-weave pointer-events-none absolute inset-0 -z-10"
                aria-hidden="true"
            />

            <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
                <nav
                    aria-label="Breadcrumb"
                    className="dx-rise text-sm text-white/75"
                >
                    <ol className="flex flex-wrap items-center gap-1.5">
                        <li>
                            <Link
                                to="/"
                                className="transition-colors hover:text-white"
                            >
                                Home
                            </Link>
                        </li>

                        {crumbs.map((crumb) => (
                            <li
                                key={crumb.label}
                                className="flex items-center gap-1.5"
                            >
                                <ChevronRight size={14} aria-hidden="true"/>

                                {crumb.to ? (
                                    <Link
                                        to={crumb.to}
                                        className="transition-colors hover:text-white"
                                    >
                                        {crumb.label}
                                    </Link>
                                ) : (
                                    <span
                                        aria-current="page"
                                        className="text-white"
                                    >
                                        {crumb.label}
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
                        className="dx-rise mt-5 max-w-2xl text-lg leading-relaxed text-white/90"
                        style={{"--dx-delay": "240ms"} as React.CSSProperties}
                    >
                        {subtitle}
                    </p>
                )}

                <div
                    className="dx-rise mt-8 h-1 w-24 bg-gradient-to-r from-[#00707F] to-[#5CC3CF]"
                    style={{"--dx-delay": "340ms"} as React.CSSProperties}
                    aria-hidden="true"
                />
            </div>
        </section>
    );
}