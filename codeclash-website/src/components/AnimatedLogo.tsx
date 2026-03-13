"use client";
import { motion } from "framer-motion";

export function AnimatedLogo() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
        >
            <h1 className="text-7xl md:text-9xl font-black font-display tracking-tight text-white m-0 leading-none">
                CODE<span className="text-primary block md:inline md:ml-4">CLASH</span>
            </h1>

            {/* Decorative accent line matching the vibe */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "anticipate" }}
                className="absolute -bottom-4 left-0 md:left-auto md:right-0 w-32 h-2 bg-accent origin-left md:origin-right rounded-full"
            />
        </motion.div>
    );
}
