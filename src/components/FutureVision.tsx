'use client';
import { motion } from 'framer-motion';

const dreams = [
  {
    icon: '🚀',
    title: 'Tech Innovation',
    description: 'Build groundbreaking tech websites and applications'
  },
  {
    icon: '🐧',
    title: 'Linux Mastery',
    description: 'Master Linux ecosystems and FydeOS customization'
  },
  {
    icon: '📱',
    title: 'Custom ROM Development',
    description: 'Develop Custom ROMs for global communities'
  },
  {
    icon: '💡',
    title: 'Global Tech Impact',
    description: 'Become a global tech innovator, starting from Sarishabari'
  },
  {
    icon: '🌟',
    title: 'Personal Growth',
    description: 'Transform personal struggles into fuel for success'
  }
];

export default function FutureVision() {
  return (
    <section id="vision" className="py-20 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-16"
        >
          From Sarishabari to the Tech World
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dreams.map((dream, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl backdrop-blur-lg bg-white/5 border border-white/10 hover:border-accent/50 transition-colors group"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                {dream.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {dream.title}
              </h3>
              <p className="text-text-secondary">
                {dream.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Every step of my journey, from the streets of Sarishabari to the digital
            frontiers, fuels my passion to create innovative solutions and inspire
            others to dream big, regardless of where they start.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
