import {Link} from "react-router-dom";
import PageHeader from "../components/pageheader.tsx";
import {Reveal} from "../components/reveal.tsx";
import {SITE} from "../components/site.ts";

// NOTE: this is a general template. Have it reviewed against the laws that apply to your business.
const sections = [
    {
        id: "information",
        title: "Information we collect",
        body: [
            "We collect the information you give us directly, such as your name, email address, phone number, company name and the message you send through our contact form or by email.",
            "Like most websites, we may also collect basic technical information automatically, such as your browser type, device, pages visited and approximate location, to understand how the site is used.",
        ],
    },
    {
        id: "use",
        title: "How we use your information",
        body: [
            "We use your information to reply to your inquiries, prepare quotations, manage orders and communicate about our services. We also use anonymous usage data to improve the website.",
            "We do not sell your personal information.",
        ],
    },
    {
        id: "sharing",
        title: "Sharing your information",
        body: [
            "We share information only when it is needed to serve you, for example with partner factories, logistics providers or professional advisers who are bound to keep it confidential, or when the law requires it.",
        ],
    },
    {
        id: "cookies",
        title: "Cookies",
        body: [
            "This website may use cookies and similar technologies to remember preferences and measure traffic. You can block or delete cookies in your browser settings, although some parts of the site may then work less smoothly.",
        ],
    },
    {
        id: "retention",
        title: "How long we keep information",
        body: [
            "We keep business correspondence and order records only as long as needed for the purposes above, or as long as the law requires.",
        ],
    },
    {
        id: "security",
        title: "Security",
        body: [
            "We take reasonable technical and organizational steps to protect your information. No method of transmission over the internet is completely secure, so we cannot guarantee absolute security.",
        ],
    },
    {
        id: "rights",
        title: "Your choices and rights",
        body: [
            "You can ask us to access, correct or delete the personal information we hold about you, or to stop contacting you, by writing to us at the address below.",
        ],
    },
    {
        id: "changes",
        title: "Changes to this policy",
        body: ["We may update this policy from time to time. The date at the top shows when it was last changed."],
    },
];

export default function PrivacyPolicy() {
    return (
        <>
            <PageHeader
                title="Privacy Policy"
                photo={31251573}
                subtitle="How Dext Sourcing collects, uses and protects your information."
                crumbs={[{label: "Privacy Policy"}]}
            />

            <section className="bg-white py-16 lg:py-24">
                <div
                    className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[260px_1fr] lg:gap-16 lg:px-8">
                    <aside className="lg:sticky lg:top-28 lg:self-start">
                        <nav aria-label="On this page" className="border border-slate-200 bg-[#F2F6F9] p-6">
                            <h2 className="font-['Playfair_Display',serif] text-lg font-bold text-[#1B4A72]">On this
                                page</h2>
                            <ul className="mt-4 space-y-1">
                                {sections.map((s, i) => (
                                    <li key={s.id}>
                                        <Link
                                            to={`#${s.id}`}
                                            className="block border-l-2 border-transparent py-1.5 pl-3 text-sm font-medium text-slate-700 transition-all hover:border-[#00707F] hover:pl-4 hover:text-[#00707F]"
                                        >
                                            {i + 1}. {s.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </aside>

                    <article className="max-w-3xl">
                        <p className="text-sm font-semibold text-slate-500">Last updated: October 2026</p>
                        <p className="mt-4 text-lg leading-relaxed text-slate-600">
                            Your privacy matters to us. This policy explains what information Dext Sourcing collects
                            through this website and
                            what we do with it.
                        </p>

                        {sections.map((s, i) => (
                            <Reveal key={s.id} className="scroll-mt-32">
                                <section id={s.id} className="scroll-mt-32 pt-10">
                                    <h2 className="flex items-baseline gap-3 font-['Playfair_Display',serif] text-2xl font-bold text-[#1B4A72]">
                                        <span className="text-[#00707F]">{i + 1}.</span>
                                        {s.title}
                                    </h2>
                                    <div className="mt-4 space-y-3 leading-relaxed text-slate-600">
                                        {s.body.map((p, j) => (
                                            <p key={j}>{p}</p>
                                        ))}
                                    </div>
                                </section>
                            </Reveal>
                        ))}

                        <div className="mt-14 border-l-4 border-[#00707F] bg-[#F2F6F9] p-6">
                            <h2 className="font-['Playfair_Display',serif] text-xl font-bold text-[#1B4A72]">Contact us
                                about privacy</h2>
                            <p className="mt-2 text-slate-600">
                                Email{" "}
                                <a href={`mailto:${SITE.email}`}
                                   className="font-bold text-[#00707F] underline underline-offset-4">
                                    {SITE.email}
                                </a>{" "}
                                or write to Dext Sourcing, {SITE.address}.
                            </p>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}