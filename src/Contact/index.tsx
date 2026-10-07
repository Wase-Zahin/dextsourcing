import {type ChangeEvent, type FormEvent, useState} from "react";
import {CheckCircle2, Clock, Mail, MapPin, Phone, Send} from "lucide-react";
import PageHeader from "../components/pageheader.tsx";
import {Reveal} from "../components/reveal.tsx";
import {SITE} from "../components/site.ts";

type Fields = { name: string; email: string; phone: string; company: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = {name: "", email: "", phone: "", company: "", subject: "", message: ""};

const info = [
    {icon: MapPin, label: "Head office", value: SITE.address, href: undefined as string | undefined},
    {icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}`},
    {icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, "")}`},
    {icon: Clock, label: "Hours", value: "Always Open", href: undefined},
];

function validate(v: Fields): Errors {
    const e: Errors = {};
    if (!v.name.trim()) e.name = "Please tell us your name.";
    if (!v.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "That email does not look right.";
    if (!v.message.trim()) e.message = "Please write a short message.";
    else if (v.message.trim().length < 10) e.message = "Please add a little more detail.";
    return e;
}

const input =
    "mt-2 w-full border bg-white px-4 py-3.5 text-[#14212B] outline-none transition-colors placeholder:text-slate-400 focus:border-[#00707F] focus:ring-2 focus:ring-[#00707F]/20";

export default function Contact() {
    const [values, setValues] = useState<Fields>(empty);
    const [errors, setErrors] = useState<Errors>({});
    const [sent, setSent] = useState(false);

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setValues((v) => ({...v, [name]: value}));
        if (errors[name as keyof Fields]) setErrors((er) => ({...er, [name]: undefined}));
    };

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const found = validate(values);
        setErrors(found);
        if (Object.keys(found).length) return;

        // No backend yet: open the visitor's email app with the message filled in.
        // TODO: replace with a call to your form service or API.
        const body = [
            `Name: ${values.name}`,
            `Email: ${values.email}`,
            `Phone: ${values.phone || "-"}`,
            `Company: ${values.company || "-"}`,
            "",
            values.message,
        ].join("\n");
        const subject = values.subject.trim() || "Website inquiry";
        window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setSent(true);
        setValues(empty);
    };

    const field = (key: keyof Fields) => ({
        name: key,
        value: values[key],
        onChange,
        "aria-invalid": errors[key] ? true : undefined,
        "aria-describedby": errors[key] ? `${key}-error` : undefined,
    });

    const err = (key: keyof Fields) =>
        errors[key] ? (
            <span id={`${key}-error`} role="alert" className="mt-1.5 block text-sm font-medium text-red-600">
        {errors[key]}
      </span>
        ) : null;

    return (
        <>
            <PageHeader
                title="Contact Us"
                photo={31251577}
                subtitle="Send us a tech pack, a sketch or just a question. A real person from our team will reply."
                crumbs={[{label: "Contact us"}]}
            />

            <section className="bg-white py-20 lg:py-28">
                <div
                    className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[2fr_3fr] lg:gap-16 lg:px-8">
                    {/* Info */}
                    <Reveal dir="left">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#00707F]">For Business
                            Collaboration</p>
                        <h2 className="mt-4 font-['Playfair_Display',serif] text-3xl font-bold leading-tight text-[#1B4A72] sm:text-4xl">
                            Discuss With Our Great Team
                        </h2>
                        <ul className="mt-10 space-y-4">
                            {info.map(({icon: Icon, label, value, href}) => (
                                <li key={label}
                                    className="group flex items-center gap-5 border border-slate-200 bg-[#F2F6F9] p-5 transition-all duration-300 hover:border-[#00707F]/50 hover:bg-white hover:shadow-lg">
                  <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#1B4A72] text-white transition-colors group-hover:bg-[#00707F]">
                    <Icon size={22} aria-hidden/>
                  </span>
                                    <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">{label}</span>
                                        {href ? (
                                            <a href={href}
                                               className="font-semibold text-[#14212B] transition-colors hover:text-[#00707F]">
                                                {value}
                                            </a>
                                        ) : (
                                            <span className="font-semibold text-[#14212B]">{value}</span>
                                        )}
                  </span>
                                </li>
                            ))}
                        </ul>
                    </Reveal>

                    {/* Form */}
                    <Reveal dir="right">
                        <form onSubmit={onSubmit} noValidate
                              className="border border-slate-200 bg-white p-6 shadow-xl sm:p-10">
                            <h2 className="font-['Playfair_Display',serif] text-2xl font-bold text-[#1B4A72]">Send us a
                                message</h2>

                            {sent && (
                                <p role="status"
                                   className="mt-5 flex items-start gap-3 border-l-4 border-[#00707F] bg-[#E3F1F2] p-4 text-[#10304D]">
                                    <CheckCircle2 size={20} aria-hidden className="mt-0.5 shrink-0 text-[#00707F]"/>
                                    Your email app should have opened with your message ready to send. If it did not,
                                    write to us at {SITE.email}.
                                </p>
                            )}

                            <div className="mt-6 grid gap-5 sm:grid-cols-2">
                                <label className="block text-sm font-bold text-[#1B4A72]">
                                    Your name *
                                    <input type="text" autoComplete="name"
                                           className={`${input} ${errors.name ? "border-red-500" : "border-slate-300"}`} {...field("name")} />
                                    {err("name")}
                                </label>
                                <label className="block text-sm font-bold text-[#1B4A72]">
                                    Email *
                                    <input type="email" autoComplete="email"
                                           className={`${input} ${errors.email ? "border-red-500" : "border-slate-300"}`} {...field("email")} />
                                    {err("email")}
                                </label>
                                <label className="block text-sm font-bold text-[#1B4A72]">
                                    Phone
                                    <input type="tel" autoComplete="tel"
                                           className={`${input} border-slate-300`} {...field("phone")} />
                                </label>
                                <label className="block text-sm font-bold text-[#1B4A72]">
                                    Company
                                    <input type="text" autoComplete="organization"
                                           className={`${input} border-slate-300`} {...field("company")} />
                                </label>
                                <label className="block text-sm font-bold text-[#1B4A72] sm:col-span-2">
                                    Subject
                                    <input type="text" className={`${input} border-slate-300`} {...field("subject")} />
                                </label>
                                <label className="block text-sm font-bold text-[#1B4A72] sm:col-span-2">
                                    Message *
                                    <textarea rows={6}
                                              className={`${input} resize-y ${errors.message ? "border-red-500" : "border-slate-300"}`} {...field("message")} />
                                    {err("message")}
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="dx-shine group mt-8 inline-flex items-center gap-3 bg-[#00707F] px-9 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#1B4A72]"
                            >
                                Send message
                                <Send size={16} aria-hidden
                                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5"/>
                            </button>
                        </form>
                    </Reveal>
                </div>
            </section>

            {/* Map */}
            <section className="bg-[#F2F6F9]">
                <iframe
                    title="Dext Sourcing office location"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`}
                    className="block h-[420px] w-full border-0 grayscale transition-[filter] duration-500 hover:grayscale-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </section>
        </>
    );
}