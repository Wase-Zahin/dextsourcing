import "../styles/certmarquee.css";

const certifications = [
    {name: "Australian Organic", logo: "/src/assets/certs/20230101062447.png"},
    {name: "bluesign", logo: "/src/assets/certs/20230101062504.png"},
    {name: "BSCI", logo: "/src/assets/certs/20230101062519.png"},
    {name: "Fairtrade International", logo: "/src/assets/certs/20230101062536.png"},
    {name: "Fair Wear", logo: "/src/assets/certs/20230101063043.png"},
    {name: "Global Organic Textile Standard", logo: "/src/assets/certs/20230101063115.png"},
    {name: "Green Seal", logo: "/src/assets/certs/20230101063328.png"},
    {name: "Global Recycled Standard", logo: "/src/assets/certs/20230101063500.png"},
    {name: "ICS", logo: "/src/assets/certs/20230101064330.png"},
    {name: "ISO 9001:2015", logo: "/src/assets/certs/20230101064346.png"},
    {name: "Recycled 100", logo: "/src/assets/certs/20230101064455.png"},
    {name: "Recycling", logo: "/src/assets/certs/20230101064529.png"},
    {name: "Repreve", logo: "/src/assets/certs/20230101064540.png"},
    {name: "Sedex", logo: "/src/assets/certs/20230101064555.png"},
    {name: "Standard 100 by Oeko Tex", logo: "/src/assets/certs/20230101064619.png"},
    {name: "U.S. Green Building Council", logo: "/src/assets/certs/20230101064640.png"},
    {name: "WRAP", logo: "/src/assets/certs/20230101064657.png"},
    {name: "ZDHC", logo: "/src/assets/certs/20230101064709.png"},
    {name: "Reach Compliant", logo: "/src/assets/certs/20230101105903.png"},
    {name: "Responsible Care", logo: "/src/assets/certs/20230101105914.png"},
];

export default function CertMarquee() {
    return (
        <section
            className="cert-logo-section"
            aria-label="Certifications and memberships"
        >
            <div className="cert-logo-track">
                {[0, 1].map((set) => (
                    <div
                        key={set}
                        className="cert-logo-group"
                        aria-hidden={set === 1}
                    >
                        {certifications.map((cert) => (
                            <div className="cert-logo-item" key={cert.name}>
                                <img
                                    src={cert.logo}
                                    alt={set === 0 ? cert.name : ""}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}