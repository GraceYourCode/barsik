import TopHeader from "./TopHeader";
import heroBg from "../assets/hero-background.svg";
import barsik from "../assets/barsik.svg";
import curvyLine from "../assets/curvy-line.svg";
import dolphin from "../assets/barsik-dolphin.svg";
import whale from "../assets/barsik-whale.svg";
import shrimp from "../assets/barsik-shrimp.svg";
import Table from "./BarsikTable";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${heroBg})` }}
      className="bg-darker-blue bg-cover flex flex-col gap-y-6 sm:gap-y-12 max-sm:pb-6"
    >
      <TopHeader />

      <header className="flex max-sm:flex-col justify-center items-center">
        <img src={barsik} alt="image of the barsik" className="w-52 lg:w-64 xl:w-72 2xl:w-[600px]" />
        <aside className="flex flex-col items-center sm:-translate-y-8">
          <h1 className="font-nanum text-green text-7xl lg:text-9xl 2xl:text-[200px] flex items-center">
            <span className="bg-gradient-to-r from-teal to-green bg-clip-text text-transparent text-9xl md:text-[150px] xl:text-[200px] 2xl:text-[300px]">
              10X
            </span>
            Barsik
          </h1>
          <p className="font-montserrat text-xl lg:text-2xl 2xl:text-4xl text-white -translate-y-10">
            The easiest way to{" "}
            <span className="text-green font-semibold">10X</span> your Barsik
          </p>
        </aside>
      </header>

      <main className="flex flex-col items-center gap-y-3 max-sm:px-4">
        <h1 className="text-2xl 2xl:text-3xl text-white font-bold font-montserrat text-center tracking-widest">
          Choose your <span className="text-green">BARSIK</span> table
        </h1>
        <img
          src={curvyLine}
          alt="a curvy line serving as decoration"
          className="w-56 2xl:w-96"
        />
       <Table image={dolphin} name="Dolphin"cssClass="sm:translate-y-5 2xl:translate-y-8" number={1e4}/>

        <section className="flex max-sm:flex-col gap-12 sm:gap-64 lg:gap-80 2xl:gap-[550px] mt-9 sm:-translate-y-12 2xl:-translate-y-20">
          <Table image={shrimp} name="Shrimp" number={1e3}/>
          <Table image={whale} name="Whale" number={1e5}/>
        </section>
      </main>
    </div>
  );
};

export default Hero;
