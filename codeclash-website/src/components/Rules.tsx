"use client";
import { motion } from "framer-motion";
import { Terminal, Circle, ChevronRight } from "lucide-react";

export function Rules() {
    const rules = [
        { title: "Time Limit Compliance", desc: "Participants must complete all tasks within the given time limit for each round." },
        { title: "AI Tools Allowed", desc: "Use of AI tools and assistants is permitted and encouraged to enhance your design workflow." },
        { title: "No Plagiarism", desc: "Plagiarized designs will lead to immediate disqualification. All work must be original." },
        { title: "Design Explanation", desc: "Participants must be able to explain their design decisions and process during evaluation." },
        { title: "Bring Your Laptop", desc: "Participants must bring their own laptop with necessary software installed (Figma, etc.)." },
        { title: "File Submission", desc: "Design files or prototype links must be submitted before the deadline." },
        { title: "Demonstrate Functionality", desc: "Participants must demonstrate all interactive and functional elements of their design." },
        { title: "Judges' Decision Final", desc: "The decision of the judges will be final and binding. No appeals will be entertained." }
    ];

    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants: any = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section id="rules" className="relative py-32 px-6 w-full lg:max-w-[1200px] mx-auto flex flex-col items-center">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full flex-col flex items-center mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-black font-display text-white tracking-widest uppercase mb-4 text-center">
                    RULES & REGULATIONS
                </h2>
                <p className="text-secondary font-mono tracking-widest text-sm text-center">
                    Execute instructions to proceed without errors.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="w-full relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(56,189,248,0.1)] bg-[#0d1520] font-mono"
            >
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#162032] border-b border-white/5">
                    <div className="flex items-center gap-2">
                        <Circle className="w-3 h-3 fill-[#ff5f56] text-[#ff5f56]" />
                        <Circle className="w-3 h-3 fill-[#ffbd2e] text-[#ffbd2e]" />
                        <Circle className="w-3 h-3 fill-[#27c93f] text-[#27c93f]" />
                    </div>
                    <div className="text-xs text-gray-400 flex items-center gap-2">
                        <Terminal className="w-3 h-3" />
                        <span>rules.sh — bash — 80x24</span>
                    </div>
                    <div className="w-12" /> {/* Spacer for centering */}
                </div>

                {/* Terminal Body */}
                <div className="p-6 md:p-10 text-sm md:text-base leading-relaxed text-[#38BDF8] relative z-10">
                    <div className="mb-8 opacity-80">
                        <p>Last login: {new Date().toLocaleDateString()} on ttys001</p>
                        <p className="text-[#F472B6]">CodeClash OS [Version 10.0.1]</p>
                        <p>(c) CodeClash Corporation. All rights reserved.</p>
                    </div>

                    <div className="flex mb-6">
                        <span className="text-[#4ade80] mr-2">user@codeclash:~ $</span>
                        <span className="text-white">cat rules.md</span>
                    </div>

                    <div className="pl-0 md:pl-4 space-y-8">
                        {rules.map((rule, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex flex-col group"
                            >
                                <div className="flex items-center mb-1 text-[#FDE047]">
                                    <ChevronRight className="w-4 h-4 mr-1 opacity-70" />
                                    <span className="font-bold tracking-wider">RULE_{String(index + 1).padStart(2, '0')}: {rule.title.toUpperCase()}</span>
                                </div>
                                <div className="pl-6 text-[#94a3b8] font-light">
                                    <span className="text-white/20 mr-4">|</span>
                                    {rule.desc}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="flex mt-8"
                    >
                        <span className="text-[#4ade80] mr-2">user@codeclash:~ $</span>
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="w-2.5 h-5 bg-white inline-block relative top-1"
                        />
                    </motion.div>
                </div>

                {/* Glossy Reflection Effect */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/5 to-transparent h-1/2" />
                <div className="absolute -top-[50%] -left-[10%] w-[120%] h-full bg-gradient-to-br from-white/5 via-transparent to-transparent -rotate-12 pointer-events-none blur-3xl" />
            </motion.div>
        </section>
    );
}
