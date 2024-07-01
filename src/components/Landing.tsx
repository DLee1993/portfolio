export const Landing = () => {
    return (
        <section
            id="landing_section"
            className="relative min-h-screen overflow-x-hidden flex justify-center items-center"
        >
            <section className="w-full flex flex-col justify-between items-start gap-y-14">
                <h1 className="w-full flex justify-center items-center flex-col gap-y-4 font-Roboto uppercase font-light">
                    <span className="indent-[var(--fs-base)] tracking-[var(--fs-base)] sm:indent-[var(--fs-lg)] sm:tracking-[var(--fs-lg)] md:indent-[var(--fs-xl)] md:tracking-[var(--fs-xl)] lg:indent-[var(--fs-xxxl)] lg:tracking-[var(--fs-xxxxl)] xl:indent-[var(--fs-xxxxl)] xl:tracking-[var(--fs-xxxl)] text-lg sm:text-lg 2xl:text-xl">
                        kickboxer
                    </span>
                    <span className="text-base sm:text-md md:text-lg 2xl:text-xl">&</span>
                    <span className="font-bold leading-none indent-[0.4em] tracking-[0.4em] sm:indent-[var(--fs-md)] sm:tracking-[var(--fs-md)] md:indent-[var(--fs-lg)] md:tracking-[var(--fs-lg)] lg:indent-[var(--fs-lg)] lg:tracking-[var(--fs-lg)] 2xl:indent-[var(--fs-xl)] 2xl:tracking-[var(--fs-xl)] text-lg sm:text-lg md:text-xl lg:text-3xl">
                        web developer
                    </span>
                </h1>
                <section className="text-sm mx-auto lg:mx-0">
                    <p className="font-light w-full max-w-md text-center lg:text-left">
                        I enjoy building accessible, modern web apps to help streamline the needs of
                        people and businesses
                    </p>
                    <a
                        href="#contact"
                        className="relative mx-auto lg:mx-0 text-base-white bg-base-black border-[1px] border-base-white rounded-full w-28 h-10 grid place-content-center mt-10 overflow-hidden group"
                    >
                        <span className="w-full h-full absolute top-0 left-0 grid place-content-center group-hover:-top-full transition-all duration-500 ease-in-out">
                            Let&apos;s talk
                        </span>
                        <span className="w-full h-full absolute top-full left-0 grid place-content-center group-hover:top-0 transition-all duration-500 ease-in-out">
                            Let&apos;s talk
                        </span>
                    </a>
                </section>
            </section>
            <section
                id="projects_snapshot"
                className="absolute top-0 -right-28 -z-10 flex gap-x-5 opacity-25 h-full"
            >
                <div className="bg-faded-white w-80 h-full rounded-md"></div>
                <div className="bg-faded-white w-[450px] h-full rounded-md"></div>
                <div className="bg-faded-white w-80 h-full rounded-md"></div>
            </section>
        </section>
    );
};
