import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../utils/cn';

export default function Navbar({ navBackground }) {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path) => location.pathname === path;
    const closeMenu = () => setIsOpen(false);

    return (
        <div className="fixed top-6 left-0 right-0 z-[9999] flex justify-center px-4 pointer-events-none">
            <motion.nav
                layout
                // Transizione identica sia in entrata che in uscita per coerenza
                transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 30,
                    mass: 1
                }}
                className={cn(
                    'pointer-events-auto border border-white/10 flex flex-col items-center overflow-hidden',
                    isOpen
                        ? 'w-full max-w-[300px] rounded-[2.5rem] bg-black/95 p-6 shadow-2xl'
                        : cn(
                            'rounded-full px-6 py-2 shadow-lg min-w-max',
                            navBackground ? 'bg-black/80 backdrop-blur-xl' : 'bg-black/20 backdrop-blur-md'
                        )
                )}
            >
                <motion.div layout="position" className="flex items-center justify-between w-full gap-8 h-10">
                    <Link to="/" onClick={closeMenu} className="text-white font-bold text-lg tracking-tighter whitespace-nowrap shrink-0">
                        alberto scalia
                    </Link>

                    <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <Link to="/works" className={cn("transition-colors", isActive('/works') ? "text-white" : "text-zinc-400 hover:text-white")}>Works</Link>
                        <Link to="/bio" className={cn("transition-colors", isActive('/bio') ? "text-white" : "text-zinc-400 hover:text-white")}>Bio</Link>
                        <Link to="/contact" className={cn("transition-colors", isActive('/contact') ? "text-white" : "text-zinc-400 hover:text-white")}>Contact</Link>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none shrink-0"
                    >
                        <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} className="block w-6 h-[2px] bg-white rounded-full" />
                        <motion.span animate={{ opacity: isOpen ? 0 : 1 }} className="block w-6 h-[2px] bg-white rounded-full" />
                        <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} className="block w-6 h-[2px] bg-white rounded-full" />
                    </button>
                </motion.div>

                <AnimatePresence mode="wait">
                    {isOpen && (
                        <motion.div
                            key="mobile-menu"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{
                                opacity: 0,
                                y: -20,
                                transition: { duration: 0.2 } // Sparisce prima che la pillola si chiuda
                            }}
                            className="md:hidden flex flex-col w-full gap-5 pt-8 pb-4 items-center text-center"
                        >
                            {/* Ridotto il text-3xl a text-2xl per un look più pulito */}
                            <Link to="/works" onClick={closeMenu} className="text-white text-2xl font-medium tracking-tight">Works</Link>
                            <Link to="/bio" onClick={closeMenu} className="text-white text-2xl font-medium tracking-tight">Bio</Link>
                            <Link to="/contact" onClick={closeMenu} className="text-white text-2xl font-medium tracking-tight">Contact</Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
}