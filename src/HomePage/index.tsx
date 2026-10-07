import Hero from "../Hero";
import About from "../About";
import Stats from "../Stats";
import Services from "../Services";
import Compliance from "../Compliance";
import AtAGlance from "../AtAGlance";

export default function HomePage() {
    return (
        <>
            <h1 className="sr-only">Dext Sourcing: apparel buying hub, manufacturer and exporter</h1>
            <Hero/>
            <About/>
            <Stats/>
            <Services/>
            <Compliance/>
            {/*<Testimonials/>*/}
            <AtAGlance/>
        </>
    );
}