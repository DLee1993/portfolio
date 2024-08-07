"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Showcase from "./components/Showcase";
import Link from "next/link";
gsap.registerPlugin(useGSAP);

export default function Page() {
    const container = useRef(null);

    useGSAP(
        () => {
            gsap.to("section", { opacity: 1, y: 0, stagger: 0.05 });
        },
        { scope: container }
    );

    return (
        <section ref={container} className="flex flex-col items-center gap-y-20">
            <section className="flex justify-center items-center min-h-[30vh] sm:min-h-[45vh] opacity-0 translate-y-10">
                <h1 className="max-w-md md:max-w-lg lg:max-w-2xl flex flex-col justify-center items-center md:items-end gap-y-4">
                    <span className="tracking-tighter text-xl md:text-2xl lg:text-3xl text-center">
                        I build accessible, modern web apps to help streamline the needs of people
                        and businesses.
                    </span>
                    <span className="text-csFadedWhite text-xs">
                        Frontend Developer based in South Wales, UK.
                    </span>
                </h1>
            </section>
            <section className="opacity-0 translate-y-10 w-full">
                <Showcase />
            </section>
            <Link
                href="https://github.com/DLee1993"
                target="_blank"
                className="py-1 px-2 text-sm w-fit bg-white text-csBlack rounded-md border-2 border-csWhite hover:bg-csBlack hover:text-csWhite transition-colors"
            >
                View all
            </Link>
        </section>
    );
}
