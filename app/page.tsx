import HeroSection from "./component/home/Hero";

export default function Home() {
  return (
    <>
      <div className="relative">
        <HeroSection />
        {/* Add more sections below as needed */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          </div>
        </section>
      </div>
    </>
  );
}
