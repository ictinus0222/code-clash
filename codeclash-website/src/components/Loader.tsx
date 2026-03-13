"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { AnimatedLogo } from "./AnimatedLogo";

export function Loader({ onLoadingComplete }: { onLoadingComplete: () => void }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            setTimeout(onLoadingComplete, 800); // give time for exit animation
        }, 2000);
        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, filter: "blur(10px)", scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-background"
                >
                    <AnimatedLogo />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
