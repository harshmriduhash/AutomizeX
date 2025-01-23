"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles"
import HoverButtonHero from "./GoToButton";




export function SparklesPreview() {
    return (
        <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
            <HoverButtonHero />

            <h1 className="md:text-6xl text-3xl lg:text-7xl  relative z-20 text-center   bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-neutral-600 font-sans font-bold">
                Streamline your Workflow <br /> with AutomizeX
            </h1>
            <div className="w-[70rem] h-40 relative mt-1">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-slate-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-slate-500 to-transparent h-[5px] w-3/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent h-px w-1/4" />

                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.7}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
        </div>
    );
}

export function SparklesPreviewDark() {
    return (
        <div className="h-[40rem] relative w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden rounded-md">
            <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                    speed={1}
                />
            </div>
            <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
                Build faster
            </h1>
        </div>
    );
}

export function SparklesPreviewColorful() {
    return (
        <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
            <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                    id="tsparticlescolorful"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#00ff00"
                    speed={0.5}
                />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 relative z-20">
                <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    The Future
                </h1>
                <p className="text-neutral-300 cursor-default text-center">
                    is brighter than you think
                </p>
            </div>
        </div>
    );
}

export { SparklesPreview as SparkleHero, SparklesPreviewDark as SparklesPreviewDarkHero, SparklesPreviewColorful as SparklesPreviewColorfulHero };