"use client";
import { Mail, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Background } from "@/components/Background";
import { Footer } from "@/components/Footer";

export default function Login() {
    return (
        <main className="min-h-screen relative w-full overflow-x-hidden flex flex-col">
            <Background />
            <div className="flex-grow flex items-center justify-center pt-24 pb-12 px-6 relative z-10 w-full max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row w-full gap-16 items-center">

                    {/* Left Side: Info */}
                    <div className="flex-1 text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
                            <span className="text-sm font-mono text-gray-300 uppercase">Welcome Back</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-display text-white mb-6">
                            Continue Your<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Journey</span>
                        </h1>

                        <p className="text-xl text-gray-300 leading-relaxed font-light mb-12 max-w-lg">
                            Login to access your dashboard, view event details, and participate in Code Clash rounds.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="flex-1 p-6 bg-surface/40 border border-white/10 rounded-2xl hover:border-accent/50 transition-colors">
                                <h3 className="text-2xl font-bold font-display text-accent mb-2">Round 1</h3>
                                <p className="text-gray-300 text-sm">MCQ Blitz Challenge</p>
                            </div>
                            <div className="flex-1 p-6 bg-surface/40 border border-white/10 rounded-2xl hover:border-secondary/50 transition-colors">
                                <h3 className="text-2xl font-bold font-display text-secondary mb-2">Round 2</h3>
                                <p className="text-gray-300 text-sm">UI Clone Wars</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="w-full max-w-md lg:w-[450px]">
                        <div className="p-8 bg-surface/80 border border-white/10 backdrop-blur-md rounded-3xl relative overflow-hidden">
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />

                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold font-display text-white mb-2">Welcome Back</h2>
                                <p className="text-gray-400 text-sm mb-8">Enter your credentials to access your account</p>

                                <form className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-white mb-2">Email Address</label>
                                        <div className="relative">
                                            <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                            <input type="email" placeholder="your.email@example.com" className="w-full bg-[#1e1b29] border border-white/10 rounded-xl px-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <label className="block text-sm font-medium text-white">Password</label>
                                            <a href="#" className="text-xs text-accent hover:underline">Forgot Password?</a>
                                        </div>
                                        <div className="relative">
                                            <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                            <input type="password" placeholder="Enter your password" className="w-full bg-[#1e1b29] border border-white/10 rounded-xl px-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors" />
                                        </div>
                                    </div>

                                    <button className="group w-full py-4 text-white font-bold font-display text-lg bg-accent rounded-xl hover:scale-[1.02] shadow-[0_0_20px_rgba(244,114,182,0.2)] transition-all flex items-center justify-center">
                                        Login to Dashboard
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </button>

                                    <p className="text-center text-sm text-gray-400 font-medium">
                                        Don't have an account? <Link href="/register" className="text-accent hover:underline">Sign up here</Link>
                                    </p>

                                    <div className="pt-4">
                                        <div className="relative flex items-center py-2">
                                            <div className="flex-grow border-t border-white/5"></div>
                                            <span className="flex-shrink-0 mx-4 text-gray-500 text-xs text-center border border-white/5 bg-white/5 rounded-full px-4 py-1">Quick Access</span>
                                            <div className="flex-grow border-t border-white/5"></div>
                                        </div>
                                        <div className="flex gap-4 mt-4">
                                            <Link href="/rounds" className="flex-1 py-3 text-center text-sm text-secondary font-medium border border-white/5 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                                                View Rounds
                                            </Link>
                                            <Link href="/rules" className="flex-1 py-3 text-center text-sm text-secondary font-medium border border-white/5 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                                                View Rules
                                            </Link>
                                        </div>
                                    </div>
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
