"use client";
import { motion } from "framer-motion";
import { Zap, Code } from "lucide-react";

export function Rounds() {
    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants: any = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section id="rounds" className="relative py-32 px-6 w-full lg:max-w-[1400px] mx-auto flex flex-col items-center">
            {/* Decorative Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full mb-16"
            >
                <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-4xl md:text-5xl font-black font-display text-white tracking-widest uppercase">
                        PURE EXCELLENCE
                    </h2>
                    <div className="hidden md:block h-px flex-grow bg-white/20" />
                </div>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
            >
                {/* Round 1 Card */}
                <motion.div
                    variants={cardVariants}
                    className="group relative flex flex-col p-8 md:p-12 bg-surface/40 hover:bg-surface/80 border-t-4 border-t-primary border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-md"
                >
                    {/* Background Gradient Blob */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-colors" />

                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-4 bg-primary text-background rounded-full shrink-0">
                                    <Zap className="w-8 h-8 font-bold" />
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase block mb-1">STAGE_01</span>
                                    <span className="text-3xl font-black font-display text-white leading-none">ROUND 1</span>
                                </div>
                            </div>

                            <h3 className="text-4xl font-black font-display text-white mb-6 uppercase tracking-tight">MCQ Blitz</h3>
                            <p className="text-lg text-gray-300 leading-relaxed font-light">
                                Answer 10-15 multiple-choice questions on UI/UX concepts, design thinking, typography, color theory, and web technologies.
                            </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                            <span className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded-full text-gray-300">Logic</span>
                            <span className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded-full text-gray-300">Speed</span>
                            <span className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded-full text-gray-300">Fundamentals</span>
                        </div>
                    </div>
                </motion.div>

                {/* Round 2 Card */}
                <motion.div
                    variants={cardVariants}
                    className="group relative flex flex-col p-8 md:p-12 bg-surface/40 hover:bg-surface/80 border-t-4 border-t-accent border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-md"
                >
                    {/* Background Gradient Blob */}
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-[80px] group-hover:bg-accent/30 transition-colors" />

                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-4 bg-accent text-background rounded-full shrink-0">
                                    <Code className="w-8 h-8 font-bold" />
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-mono tracking-[0.2em] text-accent uppercase block mb-1">STAGE_02</span>
                                    <span className="text-3xl font-black font-display text-white leading-none">ROUND 2</span>
                                </div>
                            </div>

                            <h3 className="text-4xl font-black font-display text-white mb-6 uppercase tracking-tight">UI Clone Wars</h3>
                            <p className="text-lg text-gray-300 leading-relaxed font-light">
                                Replicate an existing website interface using Figma and AI tools. Showcase your attention to detail and design accuracy.
                            </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                            <span className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded-full text-gray-300">Design</span>
                            <span className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded-full text-gray-300">Frontend</span>
                            <span className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded-full text-gray-300">Creativity</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
