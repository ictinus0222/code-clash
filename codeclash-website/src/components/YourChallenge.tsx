"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function YourChallenge() {
    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section id="challenge" className="relative py-24 px-6 w-full lg:max-w-[1200px] mx-auto flex flex-col items-center">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full flex-col flex items-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-black font-display text-white tracking-widest uppercase mb-4 text-center">
                    YOUR CHALLENGE
                </h2>
                <p className="text-secondary font-mono tracking-widest text-sm text-center max-w-2xl">
                    Target acquired. Clone the reference UI and enhance the experience.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="w-full flex flex-col items-center"
            >
                <motion.div
                    variants={itemVariants}
                    className="relative w-full max-w-5xl rounded-3xl overflow-hidden border border-white/20 shadow-[0_0_80px_rgba(56,189,248,0.2)] bg-surface p-2"
                >
                    {/* Faux Browser Window Header */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1625] rounded-t-2xl border-b border-white/5 w-full">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                        <div className="mx-auto bg-white/5 rounded-md px-4 py-1 text-xs text-gray-400 font-mono flex-grow max-w-md text-center">
                            localhost:3000/target-ui
                        </div>
                    </div>

                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-b-xl bg-[#0d1520]">
                        <Image
                            src="/reference.png"
                            alt="Reference UI to Clone"
                            fill
                            className="object-cover object-top"
                            unoptimized
                        />
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mt-12 text-center max-w-3xl">
                    <p className="text-gray-300 text-lg leading-relaxed font-light">
                        In <span className="text-accent font-bold">Round 2</span>, participants must faithfully recreate the frontend design shown above using their framework of choice. Points are awarded for pixel perfection, responsiveness, and any <span className="text-secondary italic">creative improvements</span> made to the user experience.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}
