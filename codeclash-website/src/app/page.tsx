"use client";
import { useState } from "react";
import { Loader } from "@/components/Loader";
import { Hero } from "@/components/Hero";
import { Rounds } from "@/components/Rounds";
import { YourChallenge } from "@/components/YourChallenge";
import { Rules } from "@/components/Rules";
import { Footer } from "@/components/Footer";
import { Background } from "@/components/Background";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="min-h-screen relative w-full overflow-x-hidden">
      <Loader onLoadingComplete={() => setLoading(false)} />

      {!loading && (
        <div className="animate-opacity duration-1000">
          <Background />
          <Hero />
          <Rounds />
          <YourChallenge />
          <Rules />
          <Footer />
        </div>
      )}
    </main>
  );
}
