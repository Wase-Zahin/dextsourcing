type RulerDividerProps = {
    tone?: "ink" | "canvas";
};

export default function RulerDivider({tone = "ink"}: RulerDividerProps) {
    const ticks = Array.from({length: 41}, (_, i) => i);
    const colorClass = tone === "ink" ? "text-ink/20" : "text-canvas/25";

    return (
        <div className={`w-full ${colorClass}`} aria-hidden="true">
            <svg viewBox="0 0 800 20" preserveAspectRatio="none" className="w-full h-5">
                <line x1="0" y1="10" x2="800" y2="10" stroke="currentColor" strokeWidth="1"/>
                {ticks.map((t) => (
                    <line
                        key={t}
                        x1={t * 20}
                        y1={t % 5 === 0 ? 2 : 6}
                        x2={t * 20}
                        y2="10"
                        stroke="currentColor"
                        strokeWidth="1"
                    />
                ))}
            </svg>
        </div>
    );
}