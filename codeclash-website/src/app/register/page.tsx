"use client";
import { User, Mail, GraduationCap, BookOpen, Lock, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { Background } from "@/components/Background";
import { Footer } from "@/components/Footer";

export default function Register() {
    return (
        <main className="min-h-screen relative w-full overflow-x-hidden flex flex-col">
            <Background />
            <div className="flex-grow flex items-center justify-center pt-24 pb-12 px-6 relative z-10 w-full max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row w-full gap-16 lg:gap-24 items-center">

                    {/* Left Side: Info */}
                    <div className="flex-1 text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
                            <span className="text-sm font-mono text-accent uppercase">Registration</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-display text-white mb-6">
                            Join the<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Competition</span>
                        </h1>

                        <p className="text-xl text-gray-300 leading-relaxed font-light mb-12 max-w-lg">
                            Register for Code Clash and compete with talented students in an exciting UI/UX design challenge.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                                    <Check className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-display text-white">Two Exciting Rounds</h3>
                                    <p className="text-gray-400 mt-1">MCQ Blitz and UI Clone Wars</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                                    <Check className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-display text-white">AI Tools Allowed</h3>
                                    <p className="text-gray-400 mt-1">Use modern AI and design tools</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-1">
                                    <Check className="w-5 h-5 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-display text-white">Recognition & Prizes</h3>
                                    <p className="text-gray-400 mt-1">Top performers get recognized</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="w-full max-w-md lg:w-[450px]">
                        <div className="p-8 bg-surface/80 border border-white/10 backdrop-blur-md rounded-3xl relative overflow-hidden">
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />

                            <div className="relative z-10 text-left">
                                <h2 className="text-3xl font-bold font-display text-white mb-2">Create Account</h2>
                                <p className="text-gray-400 text-sm mb-8">Fill in your details to register for Code Clash</p>

                                <form className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-medium text-white mb-2">Full Name</label>
                                        <div className="relative">
                                            <User className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                            <input type="text" placeholder="Enter your full name" className="w-full bg-[#1e1b29] border border-white/10 rounded-xl px-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-white mb-2">Email Address</label>
                                        <div className="relative">
                                            <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                            <input type="email" placeholder="your.email@example.com" className="w-full bg-[#1e1b29] border border-white/10 rounded-xl px-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-white mb-2">College Name</label>
                                        <div className="relative">
                                            <GraduationCap className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                            <input type="text" placeholder="Enter your college name" className="w-full bg-[#1e1b29] border border-white/10 rounded-xl px-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-white mb-2">Semester</label>
                                        <div className="relative">
                                            <BookOpen className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                            <input type="text" placeholder="Enter your semester" className="w-full bg-[#1e1b29] border border-white/10 rounded-xl px-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-white mb-2">Password</label>
                                        <div className="relative">
                                            <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                            <input type="password" placeholder="Create a password" className="w-full bg-[#1e1b29] border border-white/10 rounded-xl px-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-white mb-2">Confirm Password</label>
                                        <div className="relative">
                                            <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                            <input type="password" placeholder="Confirm your password" className="w-full bg-[#1e1b29] border border-white/10 rounded-xl px-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors" />
                                        </div>
                                    </div>

                                    <div className="pt-2">
                                        <button className="group w-full py-4 text-white font-bold font-display text-lg bg-accent rounded-xl hover:scale-[1.02] shadow-[0_0_20px_rgba(244,114,182,0.2)] transition-all flex items-center justify-center">
                                            Create Account
                                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>

                                    <p className="text-center text-sm text-gray-400 font-medium pt-2">
                                        Already have an account? <Link href="/login" className="text-accent hover:underline">Login here</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </main>
    );
}
