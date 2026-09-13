import "./styles/warpline.css";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Partners from "./Partners";
import Certifications from "./Certifications";
import RulerDivider from "./RulerDivider";
import MaterialsStrip from "./MaterialsStrip";
import Services from "./Services";
import ProductCategories from "./ProductCategories";
import Process from "./Process";
import CaseStudy from "./CaseStudy";
import Work from "./Work";
import WhyUs from "./WhyUs";
import About from "./About";
import Footer from "./Footer";

export default function App() {
    return (
        <div className="wl-app">
            <Navbar/>
            <main>
                <Hero/>
                <Partners/>
                <Certifications/>
                <div className="bg-canvas py-1">
                    <RulerDivider tone="ink"/>
                </div>
                <MaterialsStrip/>
                <Services/>
                <ProductCategories/>
                <Process/>
                <CaseStudy/>
                <div className="bg-canvas py-1">
                    <RulerDivider tone="ink"/>
                </div>
                <Work/>
                <WhyUs/>
                <div className="bg-ink py-1">
                    <RulerDivider tone="canvas"/>
                </div>
                <About/>
            </main>
            <Footer/>
        </div>
    );
}