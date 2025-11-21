import React from "react";
import TechLogo from "./ui/TechLogo";

const TECH_LIST = [
    "Python",
    "Django",
    "React.js",
    "AWS",
    "Docker",
    "PostgreSQL",
    "Git",
    "Tailwind CSS",
];

export default function TechMarquee() {
    return (
        <div className="w-full border-y border-slate-800 bg-slate-900/30 py-10 overflow-hidden backdrop-blur-sm relative">
            <p className="text-center text-sm text-slate-500 mb-8 uppercase tracking-[0.2em] font-semibold">
                Powering Next-Gen Apps With
            </p>

            {/* Marquee container */}
            <div className="relative w-full overflow-hidden">
                <div className="flex gap-16 animate-marquee whitespace-nowrap hover:[animation-play-state:paused] opacity-60 hover:opacity-100 transition-opacity duration-500">

                    {/* First Loop */}
                    {TECH_LIST.map((tech, idx) => (
                        <TechLogo
                            key={`${tech}-${idx}`}
                            name={tech}
                            className="w-12 h-12 md:w-14 md:h-14 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-pointer"
                        />
                    ))}

                    {/* Duplicate for seamless loop */}
                    {TECH_LIST.map((tech, idx) => (
                        <TechLogo
                            key={`${tech}-clone-${idx}`}
                            name={tech}
                            className="w-12 h-12 md:w-14 md:h-14 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-pointer"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
