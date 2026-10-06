import {useEffect} from "react";
import {Route, Routes, useLocation} from "react-router-dom";

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Stats from "./Stats";
import Services from "./Services";
import Compliance from "./Compliance";
import Testimonials from "./Testimonials";
import AtAGlance from "./AtAGlance";
import Footer from "./Footer";

function ScrollToTop() {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function Home() {
    return (
        <>
            <Hero/>
            <About/>
            <Stats/>
            <Services/>
            <Compliance/>
            <Testimonials/>
            <AtAGlance/>
        </>
    );
}

// Temporary page for every route you haven't built yet (/about, /services/r-d ...).
function PagePlaceholder() {
    const {pathname} = useLocation();
    const title = pathname
        .split("/")
        .filter(Boolean)
        .pop()
        ?.replace(/-/g, " ");

    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
            <h1 className="font-['Playfair_Display',serif] text-4xl capitalize text-[#1B4A72] sm:text-5xl">
                {title ?? "Page not found"}
            </h1>
            <p className="mx-auto mt-4 max-w-md text-slate-600">
                This page is not built yet.
            </p>
        </section>
    );
}

export default function App() {
    return (
        <div id="top"
             className="flex min-h-screen flex-col bg-white font-['Manrope',sans-serif] text-[#14212B] antialiased">
            <ScrollToTop/>
            <Navbar/>
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="*" element={<PagePlaceholder/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}