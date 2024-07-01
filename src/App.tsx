import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
function App() {
    return (
        <>
            <Header />
            <main>
                <section id="landing_section">
                    <h1 className="flex justify-center items-center flex-col gap-y-2 font-Roboto uppercase font-extralight">
                        <span className="tracking-[var(--fs-base)] sm:tracking-[var(--fs-md)] md:tracking-[var(--fs-lg)] lg:tracking-[var(--fs-xl)] xl:tracking-[var(--fs-xxl)] text-md sm:text-lg md:text-xl 2xl:text-2xl">
                            kickboxer
                        </span>
                        <span className="text-base sm:text-md md:text-lg 2xl:text-xl">&</span>
                        <span className="font-bold tracking-[var(--fs-sm)] sm:tracking-[var(--fs-base)] md:tracking-[var(--fs-md)] lg:tracking-[var(--fs-lg)] 2xl:tracking-[var(--fs-xl)] text-md sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
                            web developer
                        </span>
                    </h1>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default App;
