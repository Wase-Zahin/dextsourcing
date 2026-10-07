import {useEffect} from "react";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import "./components/animations.css";

import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollUI from "./components/scrollui";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ServiceDetailPage from "./ServiceDetailPage";
import ProductsPage from "./ProductsPage";
import ProductCategoryPage from "./ProductCategoryPage";
import ComplianceEthicsPage from "./ComplianceEthicsPage";
import Faq from "./Faq";
import PrivacyPolicy from "./PrivacyPolicy";
import NotFoundPage from "./NotFoundPage";
import Contact from "./Contact";

/**
 * Scrolls to the top on every page change, and to the matching section when the
 * URL has a hash (for example "/#services"). Works from any page: the home page
 * mounts first, then we wait for the section element to exist.
 */
function ScrollManager() {
    const {pathname, hash, key} = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo({top: 0, left: 0, behavior: "instant" as ScrollBehavior});
            return;
        }
        const id = decodeURIComponent(hash.slice(1));
        let tries = 0;
        let timer = 0;
        const go = () => {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({behavior: "smooth", block: "start"});
            } else if (tries++ < 30) {
                timer = window.setTimeout(go, 50);
            }
        };
        timer = window.setTimeout(go, 60);
        return () => window.clearTimeout(timer);
    }, [pathname, hash, key]);

    return null;
}

export default function App() {
    const {pathname} = useLocation();

    return (
        <div id="top"
             className="flex min-h-screen flex-col bg-white font-['Manrope',sans-serif] text-[#14212B] antialiased">
            <ScrollManager/>
            <ScrollUI/>
            <Navbar/>

            {/* key makes the page fade in again on every route change */}
            <main key={pathname} className="dx-page flex-1">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/services" element={<Navigate to="/#services" replace/>}/>
                    <Route path="/services/:slug" element={<ServiceDetailPage/>}/>
                    <Route path="/products" element={<ProductsPage/>}/>
                    <Route path="/products/:slug" element={<ProductCategoryPage/>}/>
                    <Route path="/compliance-ethics" element={<ComplianceEthicsPage/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/faq" element={<Faq/>}/>
                    <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </main>

            <Footer/>
        </div>
    );
}