import {useEffect, useRef} from "react";

type CounterProps = {
    value: string;
    duration?: number;
};

export default function Counter({value, duration = 1.8}: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);

    useEffect(() => {
        let startTime: number | null = null;
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            if (ref.current) {
                ref.current.textContent = Math.floor(progress * numericValue).toLocaleString();
            }
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [numericValue, duration]);

    return <span ref={ref}>0</span>;
}