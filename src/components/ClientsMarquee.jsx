import { motion } from 'framer-motion';

const clients = [
    { name: "Apogeo Editore", logo: "/sito_personale/assets/images/Logo1.webp" },
    { name: "LetteraVentidue", logo: "/sito_personale/assets/images/Logo2.webp" },
    { name: "Ricca Editore", logo: "/sito_personale/assets/images/Logo3.webp" },
    { name: "Il Pensiero Scientifico", logo: "/sito_personale/assets/images/Logo4.webp" },
    { name: "Flaco Edizioni", logo: "/sito_personale/assets/images/Logo5.webp" },
    { name: "Editori Riuniti", logo: "/sito_personale/assets/images/Logo6.webp" },
    { name: "Scuola del Libro", logo: "/sito_personale/assets/images/Logo7.webp" },
    { name: "Conservatorio Vicenza", logo: "/sito_personale/assets/images/Logo8.webp" },
    { name: "Life Electronics", logo: "/sito_personale/assets/images/Logo9.webp" },
    { name: "Compagnia Aliberti", logo: "/sito_personale/assets/images/Logo10.webp" },
    { name: "lay0ut magazine", logo: "/sito_personale/assets/images/Logo12.webp" },
];

export default function ClientsMarquee() {
    const marqueeItems = [...clients, ...clients];

    return (
        <section className="py-24 overflow-hidden border-y border-white/5 bg-zinc-950/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
                <h2 className="text-sm font-sans font-bold tracking-widest uppercase text-zinc-500 text-center">
                    Who trusted me
                </h2>
            </div>

            <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                    className="flex whitespace-nowrap items-center gap-16 md:gap-24 px-8"
                >
                    {marqueeItems.map((client, idx) => (
                        <div key={idx} className="flex-shrink-0 w-32 md:w-48 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="w-full h-auto object-contain pointer-events-none"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-24 text-center">
                <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tighter mb-6">
                    Do you have a <span className="text-accent">project</span> in mind?
                </h2>
                <p className="text-zinc-400 text-lg mb-8 max-w-lg mx-auto">
                    Let's talk about it together and turn your idea into reality.
                </p>
                <a
                    href="mailto:albscalia@gmail.com"
                    className="inline-flex items-center justify-center px-8 py-4 font-sans font-medium rounded-full bg-foreground text-background hover:bg-zinc-200 transition-colors"
                >
                    Let's start the conversation
                </a>
            </div>
        </section>
    );
}
