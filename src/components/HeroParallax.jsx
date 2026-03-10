import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from './ui/MagneticButton';
import { Link } from 'react-router-dom';

export default function HeroParallax() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section
            ref={ref}
            className="relative min-h-[100dvh] w-full overflow-hidden flex items-center justify-center pt-32 pb-12 px-6 lg:px-12"
        >
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Foreground Content */}
                <motion.div
                    style={{ y: textY, opacity }}
                    className="relative z-10 flex flex-col items-start gap-8 order-2 lg:order-1"
                >
                    <div className="flex flex-col">
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
                            className="font-sans font-bold text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-none"
                        >

                            Design Driven,                     <span className="text-accent">Growth Focused</span>
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
                        className="max-w-xl text-lg md:text-xl text-zinc-400 leading-relaxed font-sans"
                    >
                        I'm Alberto. I transform aesthetics into performance by optimizing every pixel for conversion. I constantly seek visual synthesis, because I hate clutter and, above all, serif fonts used without sense.                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.4 }}
                        className="flex flex-wrap gap-4 mt-4"
                    >
                        <Link to="/works">
                            <MagneticButton className="bg-accent text-white hover:bg-[#8b572c]">
                                View projects
                            </MagneticButton>
                        </Link>
                        <Link to="/contact">
                            <MagneticButton className="bg-transparent border border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                                Contact me
                            </MagneticButton>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
                    style={{ opacity }}
                    className="relative w-full flex justify-center lg:justify-end items-center order-1 lg:order-2"
                >
                    <motion.div
                        style={{ y: imageY }}
                        className="relative w-56 lg:w-96"
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}assets/images/logo_sito.webp`}
                            alt="Alberto Scalia"
                            className="w-full h-full object-cover object-[center_30%]"
                        />
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
