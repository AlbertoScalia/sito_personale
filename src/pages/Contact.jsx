import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, PaperPlaneRight } from '@phosphor-icons/react';
import LiquidCard from '../components/ui/LiquidCard';
import emailjs from '@emailjs/browser'; // Aggiungi questa importazione in alto

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const serviceID = 'service_7lo9nij';
        const templateID = 'template_79tdtxs';
        const publicKey = 'UFPDLKi81rCshxD1I';
        const templateParams = {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            current_time: new Date().toLocaleString('it-IT')
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then(() => {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            })
            .catch((error) => {
                console.error('FAILED...', error);
                alert("Oops! Error while sending.");
            })
            .finally(() => {
                setIsSubmitting(false);
                setTimeout(() => setSubmitStatus(null), 5000);
            });
    };

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <main className="pt-40 pb-20 px-6 lg:px-12 w-full mx-auto max-w-7xl min-h-screen">
            <header className="mb-24 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="text-5xl md:text-7xl font-sans font-bold tracking-tighter mb-6"
                >
                    Let's talk about your <span className="text-accent">project</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                    className="text-zinc-400 text-xl font-sans max-w-2xl mx-auto"
                >
                    Let's talk, before the idea expires. I am always open to new collaborations. Fill out the form or write to me: I promise not to reply with a "we'll let you know".
                </motion.p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <motion.section
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                    className="lg:col-span-5 flex flex-col gap-6"
                >
                    <LiquidCard className="p-8 flex items-center gap-6">
                        <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                            <Phone size={24} weight="duotone" />
                        </div>
                        <div>
                            <span className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1">Where you can call me</span>
                            <a href="tel:+393454015800" className="text-lg font-bold font-sans text-white hover:text-accent transition-colors">
                                Number available upon request
                            </a>
                        </div>
                    </LiquidCard>

                    <LiquidCard className="p-8 flex items-center gap-6">
                        <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                            <MapPin size={24} weight="duotone" />
                        </div>
                        <div>
                            <span className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1">Where I live</span>
                            <span className="text-lg font-bold font-sans text-white">
                                Acireale, CT, Italy
                            </span>
                        </div>
                    </LiquidCard>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
                    className="lg:col-span-7"
                >
                    <LiquidCard className="p-8 md:p-12">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-sm font-bold font-sans text-zinc-300">Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="How should I save you?"
                                        className="bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all font-sans"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm font-bold font-sans text-zinc-300">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Where can I write to you?"
                                        className="bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all font-sans"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="subject" className="text-sm font-bold font-sans text-zinc-300">Subject *</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="What do you want to talk about?"
                                    className="bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all font-sans"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-bold font-sans text-zinc-300">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Summarize your idea in three words (if you can)."
                                    className="bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all font-sans resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group w-full relative inline-flex items-center justify-center gap-3 px-8 py-4 font-sans font-bold text-background bg-foreground rounded-xl overflow-hidden transition-all duration-300 hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span className="relative z-10">{isSubmitting ? 'Sending...' : "Let's bring the idea to life"}</span>
                                {!isSubmitting && <PaperPlaneRight size={20} weight="fill" className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                            </button>

                            {submitStatus === 'success' && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-emerald-400 text-sm text-center font-mono mt-2"
                                >
                                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
                                    Message sent successfully!
                                </motion.p>
                            )}
                        </form>
                    </LiquidCard>
                </motion.section>
            </div>
        </main>
    );
}
