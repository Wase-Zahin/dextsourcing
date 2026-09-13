import {motion} from "framer-motion";
import type {ReactNode} from "react";

type RevealProps = {
    children: ReactNode;
    className?: string;
};

/**
 * A single, consistent entrance treatment used only on section headings
 * (never on every card individually) so motion reads as one authored
 * rhythm across the page rather than scattered per-element effects.
 */
export default function Reveal({children, className}: RevealProps) {
    return (
        <motion.div
            className={className}
            initial={{opacity: 0, y: 16}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.4}}
            transition={{duration: 0.5, ease: "easeOut"}}
        >
            {children}
        </motion.div>
    );
}