import "./styles/upgrade.css";
import logo from "./assets/dext-logo.jpeg";

const CONTACT_EMAIL = "info@dextsourcing.com";

const changes = [
    {
        title: "Clearer sourcing services",
        text: "Sourcing, sampling, production follow-up and quality control, explained in one place.",
    },
    {
        title: "Easier product enquiries",
        text: "Tell us what you need and get to the right person faster.",
    },
    {
        title: "A stronger showcase",
        text: "Better presentation of our partners, materials and finished work.",
    },
];

export default function App() {
    return (
        <div className="up">
            <section className="up-mark" aria-label="Dext Sourcing">
                <img className="up-logo" src={logo} alt="Dext Sourcing logo"/>
            </section>

            <main className="up-body">
                <p className="up-status">
                    <span className="up-dot" aria-hidden="true"/>
                    Website upgrade in progress
                </p>

                <h1>We're building a better Dext Sourcing website.</h1>

                <p className="up-lead">
                    Our website is getting a full upgrade so it's easier to see what we do and
                    to work with us. Our team is still fully available for sourcing and
                    production enquiries in the meantime.
                </p>

                <ul className="up-list">
                    {changes.map((c) => (
                        <li key={c.title}>
                            <strong>{c.title}</strong>
                            <span>{c.text}</span>
                        </li>
                    ))}
                </ul>

                <div className="up-cta">
                    <a className="up-btn" href={`mailto:${CONTACT_EMAIL}`}>
                        Email our team
                    </a>
                    <span>{CONTACT_EMAIL}</span>
                </div>

                <p className="up-foot">© {new Date().getFullYear()} Dext Sourcing</p>
            </main>
        </div>
    );
}