'use client';
import { motion } from 'framer-motion';

const timelineData = [
  {
    year: '2018',
    title: 'P.E.C Success',
    description: 'Passed P.E.C with A+ in all subjects',
    type: 'success',
  },
  {
    year: '2022-2023',
    title: 'IT Lab Leadership',
    description: 'IT Lab Incharge at school, leading tech initiatives',
    type: 'success',
  },
  {
    year: '2024',
    title: 'S.S.C Journey',
    description: 'Passed S.S.C, best friend era, life lessons learned',
    type: 'mixed',
  },
  {
    year: '2024-2025',
    title: 'H.S.C Phase',
    description: 'College life challenges, missing home, growing stronger',
    type: 'challenge',
  },
  {
    year: 'Present',
    title: 'Tech Mastery',
    description: 'Linux expert, FydeOS explorer, Custom ROM master',
    type: 'success',
  },
];

export default function Timeline() {
  return (
    <section id="journey" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-16"
        >
          The Ups & Downs Graph of My Journey
        </motion.h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent opacity-20" />
          
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex items-center justify-between mb-8 ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <h3 className="text-xl font-semibold text-accent mb-2">{item.title}</h3>
                <p className="text-text-secondary">{item.description}</p>
              </div>
              <div className="relative flex items-center justify-center w-2/12">
                <div className="w-4 h-4 rounded-full bg-accent" />
                <span className="absolute -top-8 text-sm text-text-secondary">{item.year}</span>
              </div>
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
