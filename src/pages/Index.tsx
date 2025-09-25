import { Slideshow } from '@/components/Slideshow';
import { Gallery } from '@/components/Gallery';

const Index = () => {
  return (
    <div className="min-h-screen relative z-10">
      {/* Header */}
      <header className="pt-8 pb-4">
        <h1 className="portfolio-title">Amana Kinver</h1>
      </header>

      {/* Slideshow Section */}
      <section className="mb-16">
        <Slideshow />
      </section>

      {/* Personal Description */}
      <section className="mb-16">
        <p className="portfolio-description">
          Add your personal description here, e.g., "I'm Amana Kinver, a photographer specializing in urban landscapes."
        </p>
      </section>

      {/* Gallery Section */}
      <section className="pb-16">
        <Gallery />
      </section>
    </div>
  );
};

export default Index;
