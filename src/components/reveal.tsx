import {type CSSProperties, type ElementType, type ReactNode, useEffect, useRef, useState} from "react";

/** True once the element has scrolled into view (fires once). */
export function useInView<T extends Element>(threshold = 0.15) {
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (typeof IntersectionObserver === "undefined") {
            setInView(true);
            return;
        }
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    io.disconnect();
                }
            },
            {threshold, rootMargin: "0px 0px -6% 0px"}
        );
        io.observe(el);
        return () => io.disconnect();
    }, [threshold]);

    return {ref, inView};
}

type RevealProps = {
    children: ReactNode;
    delay?: number;
    dir?: "up" | "left" | "right" | "zoom";
    as?: ElementType;
    className?: string;
};

/** Fades and slides its children in when they scroll into view. */
export function Reveal({children, delay = 0, dir = "up", as, className = ""}: RevealProps) {
    const Tag = (as ?? "div") as ElementType;
    const {ref, inView} = useInView<HTMLElement>();
    return (
        <Tag
            ref={ref}
            data-dir={dir}
            style={{"--dx-delay": `${delay}ms`} as CSSProperties}
            className={`dx-reveal ${inView ? "is-in" : ""} ${className}`}
        >
            {children}
        </Tag>
    );
}

/** Counts up to a value like "40+", "5000" or "1M" the first time it is visible. */
export function CountUp({value, duration = 1700}: { value: string; duration?: number }) {
    const match = value.match(/^(\d+)(.*)$/);
    const target = match ? parseInt(match[1], 10) : 0;
    const suffix = match ? match[2] : "";
    const {ref, inView} = useInView<HTMLSpanElement>(0.4);
    const [n, setN] = useState(0);

    useEffect(() => {
        if (!inView || !match) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setN(target);
            return;
        }
        let raf = 0;
        const start = performance.now();
        const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            setN(Math.round(target * (1 - Math.pow(1 - t, 3))));
            if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);

    if (!match) return <span>{value}</span>;
    return (
        <span ref={ref}>
      {n.toLocaleString("en-US")}
            {suffix}
    </span>
    );
}