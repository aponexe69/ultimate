'use client';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import Gallery from '@/components/Gallery';
import FutureVision from '@/components/FutureVision';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-primary">
      <Hero />
      <Timeline />
      <Gallery />
      <FutureVision />
      <Contact />
    </main>
  );
}
