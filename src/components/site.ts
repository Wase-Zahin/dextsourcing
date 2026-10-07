export const SITE = {
    name: "Dext Sourcing",
    email: "info@dextsourcingbd.com",
    phone: "+880 1355 330355",
    address: "House# 340. Road# 15, Block# K, Banasree, Dhaka 1219",
    mapQuery: "Dhaka, Bangladesh",
};

export type ListBlock = { title: string; ordered?: boolean; items: string[] };
export type Service = {
    slug: string;
    title: string;
    subtitle: string;
    photo: number;
    short: string;
    paragraphs: string[];
    lists: ListBlock[];
};

export const services: Service[] = [
    {
        slug: "r-d",
        title: "Research & Development",
        subtitle: "Ideas that become products",
        photo: 17710255,
        short: "We study trends and fabrics so your product is ready before the season starts.",
        paragraphs: [
            "Our R&D team studies market trends, fabrics, trims and construction methods so we can suggest better, more cost-effective and more durable ways to make your styles.",
            "We work from your tech pack, sketch or reference sample, and test alternatives before anything goes into bulk production.",
        ],
        lists: [
            {
                title: "What we do",
                items: [
                    "Trend and fabric research for every season",
                    "Fabric, wash and trim testing before sampling",
                    "Cost engineering without lowering quality",
                    "Pattern and fit improvement",
                    "Development of new constructions and finishes",
                ],
            },
        ],
    },
    {
        slug: "sample-development",
        title: "Sample Development",
        subtitle: "Right the first time",
        photo: 4622203,
        short: "We always give extra priority to samples that match your tech pack the first time.",
        paragraphs: [
            "We always give extra priority to sample development, because a good sample is the quickest way to build trust and avoid mistakes in bulk production.",
            "To start a development sample we need your actual sample, or a sketch and measurement chart. Our price quotation should be accepted first, then we begin sampling.",
        ],
        lists: [
            {
                title: "Samples we make",
                items: [
                    "Proto and development samples",
                    "Fit samples",
                    "Size-set samples",
                    "Pre-production (PP) samples",
                    "Salesman and photo samples",
                ],
            },
        ],
    },
    {
        slug: "merchandising",
        title: "Merchandising",
        subtitle: "One contact from costing to shipment",
        photo: 27893058,
        short: "Our main concern is your order, followed from costing to shipment by one merchandiser.",
        paragraphs: [
            "In Dext Sourcing, our main concern is keeping every order on track. Your dedicated merchandiser is your single point of contact from the first quotation to the last shipment.",
            "Prices are quoted by size ratio (S, M, L, XL, XXL and so on) and are basically FOB. We need a clear tech pack (spec sheet, sketch, ratio, color details with quantity) or one master sample to quote.",
        ],
        lists: [
            {
                title: "What your merchandiser handles",
                items: [
                    "Costing and quotation",
                    "Order planning and time-and-action calendar",
                    "Fabric and trims booking",
                    "Sample and lab-dip approvals",
                    "Regular, honest production status updates",
                ],
            },
        ],
    },
    {
        slug: "fabric-sourcing",
        title: "Fabric Sourcing",
        subtitle: "The right fabric at the right price",
        photo: 36296433,
        short: "Tested fabrics from trusted mills, matched to your quality and price targets.",
        paragraphs: [
            "To ensure the best quality fabrics, we source from trusted mills and from our own knitting and weaving partners, and we test every fabric before it reaches the cutting table.",
            "We do not keep fabric stock. On receiving the order and the letter of credit, we make fabrics as per your order. For cheaper or promotional items, we can use stock fabric on request.",
        ],
        lists: [
            {
                title: "What we source",
                items: [
                    "Woven, denim, knit and jersey fabrics",
                    "Pantone and swatch color matching",
                    "Lab dips and strike-offs",
                    "Fabric testing for shrinkage, color fastness and GSM",
                    "Imported fabric options for special requirements",
                ],
            },
        ],
    },
    {
        slug: "production",
        title: "Production",
        subtitle: "Experienced & Dedicated Production Team",
        photo: 31031120,
        short: "Orders placed with compliant factories and tracked closely every day.",
        paragraphs: [
            "Dext Sourcing has more than 14 factories under its belt for productions of various RMG products; which are all compliance factories. We comprise of multiple and separate factories for our knit, woven, denim & sweater productions, so there is close to no chance of orders overlapping.",
            "For maximum efficiency these factories employ only experienced workers and are always wary and prompt about worker welfare. As we have always believed in women empowerment, we can proudly say that almost 70% of all the workers in all our factories combined are women.",
            "International compliance codes and national compliances are strictly maintained throughout the whole process of manufacturing of our RMG products. As our client’s satisfaction is a matter of importance to us, we leave no stones unturned in the fact of quality and we make sure our footprint on the market is eco-friendly.",
        ],
        lists: [
            {
                title: "Production processes",
                ordered: true,
                items: [
                    "Firstly the PP sample is approved by the buyer.",
                    "Patterns are finalized.",
                    "The whole process of production is planned out.",
                    "Desired fabric is manufactured or sourced.",
                    "The fabric is dyed, washed and other chemical treatments are carried out as per order instructions.",
                    "Accessories and trims are manufactured or sourced as per client’s requirement.",
                    "The fabric is cut out to the measurements of the finalized patterns.",
                    "Printing process is carried out.",
                    "Garment sewing and additions of the accessories are done.",
                    "The final ready products are checked and packed as per buyer’s requirements.",
                    "The consignment is shipped to the buyer’s desired country port either by ship/air.",
                ],
            },
            {
                title: "Quality check steps",
                ordered: true,
                items: [
                    "An order is deemed to be active only after the PP sample is approved by the buyer.",
                    "Quality of the yarns used is checked by our professionals.",
                    "Knitting/weaving process is monitored and each roll of fabric is individually checked through digital infrared check-tables.",
                    "After dyeing and washing procedures, the fabric rolls are checked again for defects.",
                    "Accessories are checked both manually and automatically after production by our quality control team.",
                    "After pattern cutting, quality check is carried out by QCs.",
                    "In-line QC is carried out.",
                    "Pre-final inspection is performed.",
                    "Only after the pre-final inspection is carried out the goods are ready for the final inspection.",
                    "After the final inspection is done, if only we are certain that all the client’s requirements have been carried out to the point, only then we let the shipment to go through.",
                ],
            },
        ],
    },
    {
        slug: "qa-and-qc",
        title: "QA and QC",
        subtitle: "Quality checked at every stage",
        photo: 31251573,
        short: "A team of experienced inspectors checks inline and final quality to your AQL.",
        paragraphs: [
            "Dext Sourcing has a team of experienced quality professionals who inspect your order at every stage, from yarn to finished product.",
            "We maintain systems and control measures from yarn to finished products in accordance to the MIL-STD-105E along with AATC, ASTM and ISO codes and standards to deliver flawless garments. Our strong and dedicated quality teams strictly maintain our quality manual.",
        ],
        lists: [
            {
                title: "Inspection stages",
                items: [
                    "Yarn and fabric inspection",
                    "Inline QC during sewing",
                    "Pre-final inspection",
                    "Final inspection to the 2.5 AQL standard",
                    "Packing and container loading check",
                ],
            },
        ],
    },
    {
        slug: "delivery-and-shipment",
        title: "Delivery and Shipment",
        subtitle: "Packed properly. Delivered on time.",
        photo: 3057960,
        short: "Proper packing and on-time goods delivery to your forwarder or port.",
        paragraphs: [
            "Proper packing and on-time goods delivery are part of our promise. We are flexible to custom pack to any extent; we only need your specifications.",
            "Delivery terms are FOB Chittagong sea port or Hazrat Shahjalal International Airport. Timing terms are based on the date of reception of your L/C, not from the order confirmation date.",
        ],
        lists: [
            {
                title: "What we handle",
                items: [
                    "Packing to your specification",
                    "Export documentation, including GSP/EBA support for EU and US buyers",
                    "Booking and shipment by sea or air",
                    "Shipment status updates until handover",
                ],
            },
        ],
    },
    {
        slug: "knitting",
        title: "Knitting",
        subtitle: "Fabric and panels, made in-house",
        photo: 31251581,
        short: "Knitting factories equipped for jersey, rib, fleece and sweater panels.",
        paragraphs: [
            "Our knitting factories are equipped with modern machines for jersey, rib, interlock, fleece and sweater panels, so we control fabric quality from the very first step.",
            "Because we use separate factories for knit, woven, denim and sweater production, orders never compete for the same capacity.",
        ],
        lists: [
            {
                title: "Capabilities",
                items: [
                    "Single jersey, rib, interlock, pique and fleece",
                    "Yarn-dyed stripes and jacquard",
                    "Flat-knit sweater panels",
                    "Yarn quality checks before knitting",
                    "Digital fabric inspection of every roll",
                ],
            },
        ],
    },
    {
        slug: "embroidery",
        title: "Embroidery",
        subtitle: "Detail that holds up in the wash",
        photo: 29107942,
        short: "Logos and artwork stitched with consistent quality across every piece.",
        paragraphs: [
            "We provide our clients with all kinds of embroidery, from small chest logos to all-over designs, stitched with consistent quality across every piece in the order.",
            "Every design is digitized and sample-approved before bulk, so the final result matches the artwork you signed off.",
        ],
        lists: [
            {
                title: "Embroidery types",
                items: ["Flat and 3D puff embroidery", "Appliqué and patches", "Placement and all-over designs", "Thread matching to Pantone references"],
            },
        ],
    },
    {
        slug: "dying-washing",
        title: "Garment Dyeing & Wash",
        subtitle: "Exact shades and the right hand-feel",
        photo: 37270879,
        short: "Dyeing and wash finishes tested for color fastness and feel.",
        paragraphs: [
            "To ensure the best quality and exact shades, we run dyeing and wash trials against your swatch or Pantone number before bulk production starts.",
            "Our wash partners follow ZDHC-aligned chemistry and treat their water, so your garments look right and your supply chain stays clean.",
        ],
        lists: [
            {
                title: "Finishes",
                items: ["Garment dyeing and pigment dyeing", "Enzyme, stone and acid wash", "Denim wash and distressing", "Color fastness and shrinkage testing"],
            },
        ],
    },
    {
        slug: "printing",
        title: "Printing",
        subtitle: "Artwork reproduced faithfully",
        photo: 17609847,
        short: "Screen, digital and pigment printing matched to your approved artwork.",
        paragraphs: [
            "Our printing facilities are capable of handling a wide range of techniques and placements, from simple one-color prints to detailed all-over artwork.",
            "Color is checked against your approved strike-off at the start of every run and again during production.",
        ],
        lists: [
            {
                title: "Printing methods",
                items: ["Screen and rubber printing", "Digital printing", "Pigment and discharge printing", "Foil and special-effect prints"],
            },
        ],
    },
    {
        slug: "trimming-accessories",
        title: "Trimming & Accessories",
        subtitle: "Every small part, sourced with the garment",
        photo: 35285958,
        short: "Labels, buttons, zippers and packaging sourced together with the garment.",
        paragraphs: [
            "All our accessories and trims are sourced or made to your specification, tested, and approved before they reach the sewing line.",
            "Handling trims together with the garment means fewer delays and one team responsible for everything that ships in the carton.",
        ],
        lists: [
            {
                title: "What we supply",
                items: ["Labels, hang tags and care labels", "Buttons, zippers and snaps", "Threads, elastics and drawcords", "Polybags, cartons and packaging"],
            },
        ],
    },
];

export const getService = (slug?: string) => services.find((s) => s.slug === slug);

export type Product = {
    slug: string;
    title: string;
    photo: number;
    tagline: string;
    intro: string;
    items: string[];
    leadTime: string;
};

export const products: Product[] = [
    {
        slug: "woven",
        title: "Woven",
        photo: 28735221,
        tagline: "Shirts, trousers, denim and outerwear",
        intro:
            "Our woven and denim factories produce everything from crisp cotton shirts to heavy denim jackets, with separate lines for each so styles never compete for capacity.",
        items: ["Shirts and blouses", "Trousers and chinos", "Denim jeans and jackets", "Shorts and skirts", "Dresses", "Jackets and outerwear", "Uniforms and workwear"],
        leadTime: "80-90 days after L/C or T/T receipt. Imported-fabric orders take about 120 days.",
    },
    {
        slug: "knit",
        title: "Knit",
        photo: 31251577,
        tagline: "T-shirts, polos, hoodies and activewear",
        intro:
            "Knitwear is our fastest-moving category. We control the process from yarn to finished garment, and repeat orders can be shortened significantly.",
        items: ["T-shirts", "Polo shirts", "Tank tops", "Hoodies and sweatshirts", "Joggers and leggings", "Kids wear", "Activewear"],
        leadTime: "60-70 days after L/C or T/T receipt. Repeat orders can be optimized to 30-40 days.",
    },
    {
        slug: "sweater",
        title: "Sweater",
        photo: 17609847,
        tagline: "Pullovers, cardigans and fine-gauge knits",
        intro:
            "Our sweater factories handle flat-knit and fully-fashioned garments in a wide range of gauges, yarns and stitch patterns.",
        items: ["Pullovers", "Cardigans", "Vests", "Cable-knit and jacquard sweaters", "Knitted hats, scarves and gloves"],
        leadTime: "110-120 days after L/C or T/T receipt, depending on yarn, quantity and colors.",
    },
    {
        slug: "homewear-other",
        title: "Homewear & Others",
        photo: 37270879,
        tagline: "Loungewear, home textiles, jute and leather",
        intro:
            "Beyond core apparel, we work on homewear, home textiles, jute and leather goods through specialized partner factories.",
        items: ["Pajama sets and robes", "Loungewear", "Bed sheets and pillow cases", "Table napkins", "All kinds of towels", "Jute goods", "Leather goods"],
        leadTime: "Home textiles 80-90 days. Leather goods 90-100 days after L/C or T/T receipt.",
    },
];

export const getProduct = (slug?: string) => products.find((p) => p.slug === slug);

export const certifications = [
    "ZDHC", "WRAP", "U.S. Green Building Council", "Standard 100 by Oeko Tex", "Sedex", "Repreve", "Recycling",
    "Reach Compliant", "Recycled 100", "Responsible Care", "ISO 9001:2015", "ICS", "GRS", "Green Seal",
    "Global Organic Textile Standard", "Fair Wear", "Fairtrade International", "BSCI", "Bluesign", "AOL", "Accord",
];

export const faqs = [
    {
        q: "Does your company work on all types of garments?",
        a: ["Yes, Our Company works on all types of Woven garments, Denim Garments, knitwear garments, Sweater, Jute and leather Items."]
    },
    {
        q: "What’s Your Minimum Order Quantity (MOQ)?",
        a: ["Short Quantity is always slightly Costly, although our Minimum Order Quantity 2000/3000 pieces per style/color based on Fabric quality & Garments Item."]
    },
    {
        q: "What are the requirements for a quotation?",
        a: ["We need clear tech pack details (speck sheet, sketch, ratio, color details with quantity) or one piece master sample."]
    },
    {
        q: "How prices are generally quoted?",
        a: ["Prices are generally quoted according to size ratio such as S, M, XL, XXL etc. Our prices are basically FOB."]
    },
    {
        q: "What are the requirements to produce a sample?",
        a: ["First our price Quotation should be accepted by buyers then we can start making samples. We need actual samples or sketch & measurement chart to produce development sample."]
    },
    {
        q: "Do you maintain any stocks in fabrics?",
        a: ["We do not maintain any stocks, on receiving of order as well as letter of credit we makes fabrics as per buyers order. On buyers request for cheaper or promotional items we agree to use stock fabric for such specific request."]
    },
    {
        q: "Do you follow our color sheds/ Pantone?",
        a: ["Yes, we are capable to follow any possible color for your items. You can send a color swatch or refer to a pantone number."]
    },
    {
        q: "Can you design on our behalf?",
        a: ["Yes, we have designer to make any design by ourselves. But, we always prefer tech file or development file from buyer side."]
    },
    {
        q: "Can you custom pack if requested?",
        a: ["Yes, we are flexible to customize at any extent. We need your specifications for that."]
    },
    {
        q: "Do you have quality assurance plan and personnel in order to produce quality products?",
        a: [
            "Dext Sourcing owns a quality plan, compliant to international quality code/ standards. We believe in maintaining systems and control measures from yarn to finished products stage in accordance to the MIL-STD-105E along with AATC, ASTM and ISO codes and standards to deliver flawless garments. We also have strong & dedicated quality teams who strictly maintain our quality manual.",
        ],
    },
    {
        q: "What is the normal Shipment Period?",
        a: [
            "Knitwear Lead time: 60-70 days from the date of L/C or T/T receipt in our Bank. However, it all depends on quantity, number of color, approval of lab-dip; space available in the factory etc. lead time can be optimized for repeat order to 30-40 days.",
            "Woven Apparel Lead time: 80-90 days upon receipt of L/C or T/T in our Bank. For the imported fabric production lead time should be 120 days.",
            "Sweater Apparel Lead time: 110-120 days upon receipt of L/C or T/T in our Bank.",
            "Home Textiles Lead time: 80-90 days upon receipt of L/C or T/T in our Bank.",
            "Leather Goods Lead time: 90-100 days upon receipt of L/C or T/T in our Bank.",
        ],
    },
    {
        q: "What are delivery terms?",
        a: ["FOB Chittagong sea port or Hazrat Shahjalal International Airport. Timing terms are based on the date of reception of your L/C, not from order confirmation date."]
    },
    {
        q: "What is your payment Options?",
        a: ["Our payment terms are through irrevocable & transferable letter of credit (L/C) At sight payable. Or Telegraphic Transfer payment (T/T). If T/T payment, then we will be needed some portion in advance and rest of the portion after final inspection."]
    },
    {
        q: "How should I prepare my L/C (letter of credit)?",
        a: ["We usually request clients to open L/C in our favor after order confirmation. Make sure that your L/C reaches us on time which may affect production process."]
    },
    {q: "Does your company work with leather goods?", a: ["Yes. Our company works on all kinds of leather goods."]},
    {
        q: "What kind of home textile you are doing?",
        a: ["We are doing bed sheet, pillow case, Table napkins & all kinds of towel."]
    },
];

export type Post = {
    slug: string;
    title: string;
    date: string; // ISO
    photo: number;
    excerpt: string;
    body: string[];
};

export const posts: Post[] = [
    {
        slug: "increasing-productivity-of-denim-items",
        title: "Increasing productivity of Denim items",
        date: "2026-09-30",
        photo: 32641555,
        excerpt: "Denim is demanding to make. These are the line-balancing, machine and training habits that raise output without hurting quality.",
        body: [
            "Denim is one of the most demanding categories in apparel. Heavy fabric, multiple wash steps and tight construction standards mean that small delays add up quickly across a production line.",
            "The biggest gains usually come from line balancing. When every operation on the line takes roughly the same time, work flows without piling up, and operators spend less time waiting. Regular time studies help spot the slowest operation so it can be split or supported with a better machine attachment.",
            "Machine readiness matters just as much. Correct needles for heavy fabric, well-maintained feed mechanisms and the right folders and guides reduce rework and thread breaks. Short, regular training sessions for operators keep skills sharp on difficult seams such as waistbands and back pockets.",
            "Finally, early approval of washes and fits prevents the most expensive kind of delay: changes after cutting has started. Good planning up front is the cheapest productivity tool there is.",
        ],
    },
    {
        slug: "women-empowerment-through-rmg-industry",
        title: "Women empowerment through RMG industry",
        date: "2026-09-28",
        photo: 31031142,
        excerpt: "The ready-made garment sector has opened paid work, skills and independence to millions of women in Bangladesh.",
        body: [
            "The ready-made garment (RMG) sector has been one of the biggest drivers of paid work for women in Bangladesh. For many, a factory job was the first chance to earn an independent income.",
            "Regular wages bring more say in household decisions, better access to healthcare and education for children, and savings that families can build on. Skills training, from machine operation to supervision, also opens a path to higher-paid roles.",
            "Responsible factories support this with safe workplaces, on-time wages, maternity benefits and in-house daycare. These are the same points we check when we audit a factory before placing any order.",
        ],
    },
    {
        slug: "recycling-impacts-in-rmg-industry",
        title: "Recycling impacts in RMG industry",
        date: "2026-09-26",
        photo: 17609847,
        excerpt: "Fabric offcuts, recycled yarns and water reuse are changing how modern garment factories think about waste.",
        body: [
            "Garment production creates fabric offcuts, packaging waste and wastewater. Recycling turns a large share of that waste back into value instead of landfill.",
            "Cutting waste can be sold or reprocessed into recycled yarn, fillings or new fabric. Factories that use certified recycled content, such as GRS or Recycled 100, can also give brands a verifiable story for their sustainability reporting.",
            "Water treatment and reuse are just as important. Modern effluent treatment plants let washing and dyeing units reuse a large part of their water, which lowers cost and environmental impact together.",
        ],
    },
    {
        slug: "scope-of-jobs-for-graduates-in-the-rmg-industry",
        title: "Scope of jobs for graduates in the RMG industry",
        date: "2026-09-24",
        photo: 4622203,
        excerpt: "From merchandising to compliance and IT, the garment industry offers many graduate career paths.",
        body: [
            "The garment industry is not only about the factory floor. Graduates from many backgrounds find careers in merchandising, product development, quality assurance, compliance, supply chain, finance and IT.",
            "Merchandisers are the link between buyer and factory, so communication and negotiation skills are valued. Textile and fashion graduates move into product development and technical roles, while business graduates often join sourcing, costing and planning teams.",
            "Compliance and sustainability are growing areas too. Buyers increasingly expect audited, certified supply chains, which creates steady demand for people who understand both the rules and the factory reality.",
        ],
    },
    {
        slug: "overview-of-apparel-industry-in-bangladesh",
        title: "Overview of the apparel industry in Bangladesh",
        date: "2026-09-20",
        photo: 31030995,
        excerpt: "Why global brands source from Bangladesh, and what makes the industry competitive.",
        body: [
            "Big and small apparel brands from all over the world have their work done in Bangladesh. The country is the world’s second-largest garment exporter, with a dense network of mills, factories and service providers.",
            "Skilled workforce: the industry benefits from a large pool of skilled and semi-skilled workers who are experienced in garment production.",
            "Ethical compliance: the industry has made significant progress in improving compliance with international labor standards, such as workplace safety and worker rights.",
            "Sustainable initiatives: there is a growing focus on sustainability, with many manufacturers adopting eco-friendly practices and certifications such as LEED and GOTS. The country is also home to a very large number of LEED-certified green garment factories.",
        ],
    },
    {
        slug: "health-and-safety-compliance-in-the-readymade-garment-sector",
        title: "Health and safety compliance in the readymade garment sector",
        date: "2026-09-16",
        photo: 31031033,
        excerpt: "Practices and observations on keeping garment workers safe in Bangladesh.",
        body: [
            "Health and safety compliance in the readymade garment sector has been a major concern in recent years. The 2013 Rana Plaza collapse brought worldwide attention to unsafe working conditions and weak enforcement.",
            "In response, the government strengthened the legal framework, and initiatives such as the Accord on Fire and Building Safety and the Alliance for Bangladesh Worker Safety inspected thousands of factories. The Department of Inspection for Factories and Establishments is responsible for inspecting workplaces.",
            "Building safety has been a particular focus, and the national building code has been revised to include improved safety measures. For buyers, the practical lesson is simple: only work with factories that have been audited and keep their corrective actions up to date.",
        ],
    },
];

export const getPost = (slug?: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
    new Date(iso + "T00:00:00").toLocaleDateString("en-US", {month: "short", day: "numeric", year: "numeric"});