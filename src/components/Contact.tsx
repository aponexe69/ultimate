'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Here you would integrate with your preferred form handling service
    // For now, we'll just simulate a submission
    setTimeout(() => {
      setFormStatus('sent');
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Does My Story Resonate with You?
          </h2>
          <p className="text-text-secondary text-lg">
            If my life&apos;s ups and downs connect with your story, reach out — let&apos;s talk tech, life, and dreams.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto"
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-text-primary mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary focus:outline-none focus:border-accent"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-text-primary mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary focus:outline-none focus:border-accent"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-text-primary mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary focus:outline-none focus:border-accent resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={formStatus !== 'idle'}
              className="w-full px-8 py-4 bg-accent text-primary rounded-lg font-medium hover:bg-opacity-90 transition-all disabled:opacity-50"
            >
              {formStatus === 'idle' && 'Send Message'}
              {formStatus === 'sending' && 'Sending...'}
              {formStatus === 'sent' && 'Message Sent!'}
              {formStatus === 'error' && 'Error - Try Again'}
            </button>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-text-primary mb-4">
            Connect With Me
          </h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/asadujjamanapon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            {/* Add more social links as needed */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
