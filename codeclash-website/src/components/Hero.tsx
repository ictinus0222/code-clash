"use client";
import { motion } from "framer-motion";
import { AnimatedLogo } from "./AnimatedLogo";
import { ArrowRight, Play, Users, Trophy } from "lucide-react";

export function Hero() {
    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden px-6">

            {/* Decorative Background Elements */}
            <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="z-10 w-full max-w-6xl mx-auto flex flex-col items-center"
            >
                <motion.div variants={itemVariants} className="mb-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-sm font-mono text-gray-300">Developer experience conference</span>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-8 w-full max-w-4xl text-center">
                    <AnimatedLogo />
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 w-full max-w-2xl">
                    <div className="flex bg-surface/80 border border-white/10 backdrop-blur-md rounded-2xl p-6 w-full md:w-1/2 relative overflow-hidden group hover:border-primary/50 transition-colors">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-all" />
                        <div>
                            <div className="flex items-center gap-2 text-primary mb-2">
                                <Users className="w-5 h-5" />
                                <span className="font-bold font-display text-lg">Skill Development</span>
                            </div>
                            <p className="text-sm text-gray-300 mt-1 leading-relaxed">Enhance your knowledge of UI/UX concepts, design thinking, and modern web technologies.</p>
                        </div>
                    </div>

                    <div className="flex bg-surface/80 border border-white/10 backdrop-blur-md rounded-2xl p-6 w-full md:w-1/2 relative overflow-hidden group hover:border-accent/50 transition-colors">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent/10 rounded-full blur-xl group-hover:bg-accent/20 transition-all" />
                        <div>
                            <div className="flex items-center gap-2 text-accent mb-2">
                                <Trophy className="w-5 h-5" />
                                <span className="font-bold font-display text-lg">Recognition</span>
                            </div>
                            <p className="text-sm text-gray-300 mt-1 leading-relaxed">Top performers get recognized and valuable experience in competitive UI/UX design.</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md mx-auto">
                    <a
                        href="/register"
                        className="group w-full sm:w-auto relative inline-flex items-center justify-center px-8 py-4 font-bold text-background transition-all duration-300 bg-primary font-display text-lg rounded-full hover:bg-white hover:scale-105 shadow-[0_0_20px_rgba(253,224,71,0.3)] hover:shadow-[0_0_30px_rgba(253,224,71,0.5)]"
                    >
                        Register Now
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                    <button
                        onClick={() => {
                            document.getElementById('rounds')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-surface border border-white/10 font-display text-lg rounded-full hover:bg-white/10 hover:border-white/30"
                    >
                        <Play className="w-5 h-5 mr-2 text-secondary group-hover:scale-110 transition-transform" />
                        Explore Rounds
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}
