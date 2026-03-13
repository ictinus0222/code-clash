"use client";
import { ArrowRight, Github, Twitter, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative border-t-2 border-primary bg-surface/50 pt-16 pb-8 px-6 z-20 mt-32">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
                <div className="text-center md:text-left">
                    <h2 className="text-4xl font-black font-display tracking-tight text-white mb-4">
                        CODE<span className="text-primary">CLASH</span>
                    </h2>
                    <p className="text-gray-400 max-w-sm">
                        Pushing the boundaries of design and engineering. See you at the arena.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-6">
                    <a
                        href="https://forms.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-background transition-all duration-300 bg-primary font-display text-lg rounded-full hover:bg-white hover:scale-105 shadow-[0_0_20px_rgba(253,224,71,0.2)]"
                    >
                        Secure Your Spot
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                    <div className="flex gap-4 text-gray-400">
                        <a href="#" className="hover:text-primary transition-colors p-2 bg-white/5 rounded-full"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-accent transition-colors p-2 bg-white/5 rounded-full"><Instagram className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-secondary transition-colors p-2 bg-white/5 rounded-full"><Github className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>
            <div className="max-w-[1400px] mx-auto mt-16 pt-8 border-t border-white/10 text-center text-gray-500 font-mono text-xs flex flex-col md:flex-row justify-between items-center gap-4">
                <p>SYSTEM.COPYRIGHT &copy; {new Date().getFullYear()} CODECLASH</p>
                <p>INITIATED WITH NEXT.JS & TEXTILWIND</p>
            </div>
        </footer>
    );
}
