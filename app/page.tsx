import HeroSection from "./component/home/Hero";

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden w-full md:overflow-auto">
        <HeroSection />
      </div>
    </>
  );
}
