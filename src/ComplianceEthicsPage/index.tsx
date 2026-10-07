import {Link} from "react-router-dom";
import {AlertTriangle, ArrowRight, Check, GraduationCap, HeartPulse} from "lucide-react";
import PageHeader from "../components/pageheader.tsx";
import CertMarquee from "../components/certmarquee.tsx";
import {Reveal} from "../components/reveal.tsx";
import {bg} from "../Img/images.tsx";

const major = [
    "Sufficient provision of pure drinking water for the workers as certification of BUET.",
    "Electric shock prevented with the help of an automatic tripping switch system.",
    "Pay Salary of each month on or before 7th day of the following month.",
    "Comply maternity leave according to BEPZA rule and Labor act 2006.",
    "We provide Employer health & safety in priority basis at all time.",
    "Lightening protector with adequate lighting and ventilation.",
    "We do not hire Employee under 18 years.",
    "Work hours are not Excessive.",
    "No forced Employee.",
];

const social = [
    "To uphold the reputation of our Customers, Business Partners & our organization by ensuring ethics, integrity and technical expertise are uncompromisingly practiced in our audit processes.",
    "To enlist the factory our compliance team, at first visit the factory for social compliance audit, if audit passes, then we go for the order placement. In this regards we follow buyers Code of conduct and local law.",
    "We monitor compliance issues of all our enlisted suppliers and vendors on regular basis, announced and unannounced.",
];

const employeesCoc = [
    "Bribery",
    "Disclosure of confidential documents",
    "Misappropriation of assets",
    "Falsification of records",
    "Sexual harassment",
    "Activities of conflicting business interest",
    "Violation of sourcing ZTV(zero tolerance violation) code.",
];

const suppliersCoc = [
    "Child labor",
    "Forced labor",
    "Disciplinary practices",
    "Harassment & Abuse",
    "Legal requirements",
    "Ethical standards",
    "Working hours",
    "Wages & Benefits",
    "Freedom of Association",
    "Discrimination",
    "Unauthorized subcontracting",
    "Building and fire safety",
    "Health, Safety",
    "Environment",
];

const ztv = [
    "Child labor",
    "Forced labor",
    "Discrimination",
    "Harassment and Abuse",
    "Unauthorized subcontracting including Tier 2 operations regardless of brands",
    "Shared building unless approved by Head of Compliance (any other factory owned by different owner located in the same building) or factory located in building which has shops/markets",
    "Factory building approved for residential purposes",
    "Any unethical practice, such as bribery in the form of cash or kind to facilitate any process",
];

const coc = [
    {
        t: "Approved Factory",
        d: "It will be our earnest endeavor to meet all the aspects of our buyers’ code of conduct. We will only work with such factories which are approved by our buyers."
    },
    {
        t: "Child labor",
        d: "Use of Child labor is not tolerated by our code. We do not work with such business partners who employ workers lesser than 15 years of age. Furthermore, no worker shall be younger than the mandatory school going age in the respective countries of operation. If the local law stipulates a higher minimum age than that of 15 years, then a more stringent limit is applicable."
    },
    {t: "Forced labor", d: "We do not work with any factory or organization which engages in forced or bonded labor."},
    {
        t: "Disciplinary practices",
        d: "We expect all our business partners to establish a clear disciplinary action procedure in line with the local law. We do not work with factories consisting of employees, who use abusive language, or practice corporal punishment, in the form of mental or physical abuse or any other coercive practices in any form against the workers."
    },
    {
        t: "Harassment & Abuse",
        d: "We do not work with any factory or organization who engages in any kind of harassment and abuse. It is strongly prohibited and contradicts the buyer Code of conduct, as per our business ethics as well as our local law."
    },
    {
        t: "Legal requirements",
        d: "We expect all our business partners to comply with the local laws applicable to the conduct of their business."
    },
    {
        t: "Ethical standards",
        d: "We make sure to identify and work with such organizations whose ethical standards are not divergent from ours."
    },
    {
        t: "Working hours",
        d: "We prefer to work with business partners who try and meet the 60 hour weekly limit. Whenever the regular work hour limit is exceeded, we expect the workers to be compensated as per the local law for the additional overtime hours. We accept flexibility in scheduling work hours, however we will not use business partners, who on a regular and systematic basis make the employees work more than the 60 hour weekly limit. Also, workers should be given one day off in seven days."
    },
    {
        t: "Wages and Benefits",
        d: "We only work with such business partners who compensate their workers as per the prevailing law and provide all benefits legally due to them."
    },
    {
        t: "Freedom of Association",
        d: "We respect the rights of workers to join an association of their choice and their right to Collective Bargaining. We only work with such business partners who share this same belief and they should ensure that workers who participate or associate with such movements are not discriminated against. No Punitive action should be taken against such workers for being a part of such association or movement as long as they don’t violate any of the local laws."
    },
    {
        t: "Discrimination",
        d: "While being cognizant of cultural, religious and other differences, we firmly believe that workers should be given an opportunity to work, based on their skills only. Caste, Creed, Race etc: shall not be a part of the process used to decide employability."
    },
    {
        t: "Unauthorized Subcontract",
        d: "Unauthorized subcontracting is considered a Zero Tolerance Violation. No vendor shall subcontract any aspect of our production without prior information to and approval from our company. Any violation will result in delisting of such factories."
    },
    {
        t: "Building and fire safety",
        d: "We expect firmly that all our business partners ensure building and fire safety as per the local Law and the buyer’s requirement."
    },
    {
        t: "Health & safety",
        d: "We engage only with such factories who provide their workers a safe and healthy work environment."
    },
    {
        t: "Environment",
        d: "We want all our business partners to ensure that their work process does not affect the environment adversely in any way. It is expected of all our business partners to meet the legal requirement on all environmental aspects and continuously strive to go beyond just meeting the law."
    },
];

const tabs = [
    {id: "vision", label: "Compliance Vision"},
    {id: "zero-tolerance", label: "Zero Tolerance Policy"},
    {id: "code-of-conduct", label: "Code Of Conduct"},
    {id: "csr", label: "CSR"},
];

const h2 = "font-['Playfair_Display',serif] text-3xl font-bold text-[#1B4A72] sm:text-4xl";
const eyebrow = "text-sm font-bold uppercase tracking-[0.2em] text-[#00707F]";

export default function ComplianceEthicsPage() {
    return (
        <>
            <PageHeader
                title="Compliance & Ethics"
                photo={32399705}
                subtitle="We obey all legal and social compliances guided by laws and regulatory bodies as per local government order and global requirements."
                crumbs={[{label: "Compliance & Ethics"}]}
            />

            {/* Sub navigation */}
            <div className="sticky top-[60px] z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
                <ul className="mx-auto flex w-full max-w-7xl gap-1 overflow-x-auto px-4 sm:px-6 lg:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {tabs.map((t) => (
                        <li key={t.id} className="shrink-0">
                            <Link
                                to={`#${t.id}`}
                                className="relative block px-4 py-4 text-sm font-bold text-[#1B4A72] transition-colors after:absolute after:inset-x-4 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#00707F] after:transition-transform hover:text-[#00707F] hover:after:scale-x-100"
                            >
                                {t.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Major issues */}
            <section className="bg-white py-20 lg:py-28">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Reveal className="max-w-3xl">
                        <p className={eyebrow}>Some of our major compliance issues are</p>
                        <h2 className={`mt-4 ${h2}`}>Compliance and Ethics</h2>
                    </Reveal>
                    <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {major.map((m, i) => (
                            <Reveal as="li" key={m} delay={(i % 3) * 90}
                                    className="group flex gap-4 border border-slate-200 bg-[#F2F6F9] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00707F]/50 hover:bg-white hover:shadow-xl">
                                <span
                                    className="font-['Playfair_Display',serif] text-3xl font-bold text-[#00707F]/40 transition-colors group-hover:text-[#00707F]">{i + 1}</span>
                                <span className="font-semibold leading-relaxed text-[#14212B]">{m}</span>
                            </Reveal>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Compliance vision */}
            <section id="vision" className="scroll-mt-36 bg-[#F2F6F9] py-20 lg:py-28">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Reveal className="max-w-3xl">
                        <p className={eyebrow}>Social Compliance</p>
                        <h2 className={`mt-4 ${h2}`}>Compliance Vision</h2>
                    </Reveal>

                    <ul className="mt-10 grid gap-5 lg:grid-cols-3">
                        {social.map((s, i) => (
                            <Reveal as="li" key={i} delay={i * 110}
                                    className="border-t-4 border-[#00707F] bg-white p-7 shadow-sm">
                                <p className="leading-relaxed text-slate-700">{s}</p>
                            </Reveal>
                        ))}
                    </ul>

                    <div className="mt-14 grid gap-10 lg:grid-cols-2">
                        <Reveal dir="left" className="bg-white p-8 shadow-sm">
                            <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-[#1B4A72]">Employees’
                                COC covers</h3>
                            <ol className="mt-6 space-y-3">
                                {employeesCoc.map((e, i) => (
                                    <li key={e} className="flex gap-3 border-b border-slate-100 pb-3 last:border-0">
                                        <span
                                            className="flex h-7 w-7 shrink-0 items-center justify-center bg-[#1B4A72] text-xs font-bold text-white">{i + 1}</span>
                                        <span className="text-slate-700">{e}</span>
                                    </li>
                                ))}
                            </ol>
                        </Reveal>
                        <Reveal dir="right" className="bg-white p-8 shadow-sm">
                            <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-[#1B4A72]">Suppliers’
                                COC covers</h3>
                            <ol className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                                {suppliersCoc.map((e, i) => (
                                    <li key={e} className="flex gap-3">
                                        <span
                                            className="flex h-7 w-7 shrink-0 items-center justify-center bg-[#00707F] text-xs font-bold text-white">{i + 1}</span>
                                        <span className="text-slate-700">{e}</span>
                                    </li>
                                ))}
                            </ol>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Zero tolerance */}
            <section id="zero-tolerance"
                     className="relative scroll-mt-36 overflow-hidden bg-[#10304D] py-20 text-white lg:py-28">
                <div className="absolute inset-0 bg-cover bg-center opacity-20"
                     style={{backgroundImage: bg(31251573, 1600)}} aria-hidden/>
                <div className="dx-weave absolute inset-0" aria-hidden/>
                <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Reveal className="max-w-3xl">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5CC3CF]">Compliance issues to
                            be categorized as ZTV</p>
                        <h2 className="mt-4 font-['Playfair_Display',serif] text-3xl font-bold sm:text-4xl">Zero
                            Tolerance Policy</h2>
                    </Reveal>
                    <ul className="mt-12 grid gap-4 md:grid-cols-2">
                        {ztv.map((z, i) => (
                            <Reveal as="li" key={z} delay={(i % 2) * 100}
                                    className="flex gap-4 border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                                <AlertTriangle size={22} aria-hidden className="mt-0.5 shrink-0 text-[#5CC3CF]"/>
                                <span className="leading-relaxed text-white/90">{z}</span>
                            </Reveal>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Code of conduct */}
            <section id="code-of-conduct" className="scroll-mt-36 bg-white py-20 lg:py-28">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Reveal className="max-w-3xl">
                        <p className={eyebrow}>Dext Sourcing Code of Conduct for Manufacturing Unit</p>
                        <h2 className={`mt-4 ${h2}`}>Code of Conduct</h2>
                        <p className="mt-5 text-lg leading-relaxed text-slate-600">
                            Our code is derived from the values and standards set by our customers. More particularly
                            the Declaration of
                            Human Rights and many of the ILO core conventions and local laws. It is our earnest endeavor
                            to meet all the
                            aspects of our buyers’ code of conduct. We only work with factories which are approved by
                            our buyers.
                        </p>
                    </Reveal>
                    <ul className="mt-12 grid gap-5 md:grid-cols-2">
                        {coc.map((c, i) => (
                            <Reveal as="li" key={c.t} delay={(i % 2) * 90}
                                    className="group border border-slate-200 bg-[#F2F6F9] p-7 transition-all duration-300 hover:border-[#00707F]/50 hover:bg-white hover:shadow-xl">
                                <h3 className="flex items-center gap-3 font-['Playfair_Display',serif] text-xl font-bold text-[#1B4A72]">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-[#00707F] text-white">
                    <Check size={14} aria-hidden/>
                  </span>
                                    {c.t}
                                </h3>
                                <p className="mt-3 leading-relaxed text-slate-600">{c.d}</p>
                            </Reveal>
                        ))}
                    </ul>
                </div>
            </section>

            {/* CSR */}
            <section id="csr" className="scroll-mt-36 bg-[#F2F6F9] py-20 lg:py-28">
                <div
                    className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
                    <Reveal dir="left">
                        <p className={eyebrow}>CSR (Corporate Social Responsibility)</p>
                        <h2 className={`mt-4 ${h2}`}>Doing good beyond the transaction</h2>
                        <div className="mt-6 space-y-4 leading-relaxed text-slate-600">
                            <p>
                                Dext Sourcing prefers and works only with factories who take their social responsibility
                                seriously and puts
                                in effective measures to ensure the betterment of the community and environment around
                                them. This not only
                                boosts our morality but also gives our clients the opportunity to feel that something of
                                greater good comes
                                out of their business with us above the monetary transactions.
                            </p>
                            <p>
                                It is in our code to make sure our business partners are all warry of the wellbeing of
                                their workers and the
                                environment. Our compliance factories have in-house daycare centers, emergency first aid
                                professionals and
                                many other social windows to ensure the workers peace of mind. They are also well
                                equipped with waste
                                disposal equipment and methods to ensure minimal adverse effects to the environment.
                            </p>
                            <p>
                                Besides, we are proud to have developed and supported exceptional charitable initiatives
                                across Bangladesh,
                                ensuring proper education for underprivileged and orphaned children and funds for rural
                                area clinics.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal dir="right" className="space-y-5">
                        <div className="flex gap-5 bg-white p-7 shadow-sm">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#1B4A72] text-white">
                <GraduationCap size={26} aria-hidden/>
              </span>
                            <div>
                                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#1B4A72]">Ensuring
                                    Education for Kids</h3>
                                <p className="mt-2 leading-relaxed text-slate-600">
                                    We feel that since we are at one with the world it is our responsibility to improve
                                    the world. The mission
                                    is to provide underprivileged and orphaned children a quality education which will
                                    give them the skills
                                    they need to provide for themselves and their families in the future, thereby
                                    breaking the vicious cycle
                                    of poverty.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-5 bg-white p-7 shadow-sm">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#00707F] text-white">
                <HeartPulse size={26} aria-hidden/>
              </span>
                            <div>
                                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#1B4A72]">Funds
                                    for Clinic</h3>
                                <p className="mt-2 leading-relaxed text-slate-600">
                                    We are allocating some portion of our funds in clinics which are located in rural
                                    areas. We donate to
                                    these clinics to provide free medical care to impoverished people, including free
                                    consultancy, treatment
                                    and homeopathic medicines to the poorest people.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="bg-white py-16">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h3 className="mb-8 text-center font-['Playfair_Display',serif] text-2xl font-bold text-[#1B4A72]">Certifications &amp; memberships</h3>
                    <CertMarquee/>
                    <div className="mt-12 text-center">
                        <Link
                            to="/contact"
                            className="dx-shine group inline-flex items-center gap-2 bg-[#1B4A72] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#00707F]"
                        >
                            Ask us about our audits
                            <ArrowRight size={16} aria-hidden
                                        className="transition-transform group-hover:translate-x-1"/>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}