'use client';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-primary to-secondary">
      {/* Animated floating neon background blob */}
      <motion.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-teal-400/30 blur-3xl rounded-full z-0"
        initial={{ scale: 0.8, opacity: 0.7 }}
        animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-10" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 z-10"
      >
        <div className="flex justify-center">
          {/* Glassmorphic card */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 w-full max-w-2xl mx-auto glass-card">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold text-text-primary mb-6 drop-shadow-neon"
              >
                I&apos;m Asadujjaman Apon
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-text-secondary mb-8"
              >
                <TypeAnimation
                  sequence={[
                    'Tech Enthusiast',
                    1000,
                    'Linux Explorer',
                    1000,
                    'Custom ROM Expert',
                    1000,
                    'C++ Programmer',
                    1000,
                    'Real-life Dreamer',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex justify-center gap-4"
              >
                <a
                  href="#journey"
                  className="px-6 py-3 bg-accent text-primary rounded-full font-medium hover:bg-opacity-90 transition-all shadow-lg shadow-accent/30"
                >
                  Explore My Story
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-accent text-accent rounded-full font-medium hover:bg-accent hover:text-primary transition-all shadow-lg shadow-accent/20"
                >
                  Get in Touch
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
