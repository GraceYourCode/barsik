import background from "../assets/details-background.svg";
import illustration1 from "../assets/illustration-one.svg";
import illustration2 from "../assets/illustration-two.svg";
import arrow from "../assets/arrow.svg";

const Details = () => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="bg-blue bg-cover py-8 sm:py-20 2xl:py-32 flex flex-col gap-20 items-center"
    >
      <h1 className="uppercase font-bold text-2xl text-center text-green font-montserrat">
        How does it work?
      </h1>

      <main className="flex flex-col max-md:gap-12 px-8 md:px-10 lg:px-20 xl:px-40 2xl:px-40 relative">
        <img
          src={arrow}
          alt="arrow image"
          className="max-sm:hidden absolute top-1/2 left-1/3 max-md:translate-x-1/2 md:left-1/2 -translate-y-1/2 md:-translate-y-1/3 w-20 lg:w-24 xl:w-32 2xl:w-44"
        />
        <section className="flex max-sm:flex-col justify-between items-center">
          <img
            src={illustration1}
            alt="image illustrating how barsik works(1)"
            className="w-64 md:w-80 lg:w-[420px] xl:w-[520px] 2xl:w-[700px]"
          />

          <aside className="font-montserrat sm:w-2/5 md:w-1/3 text-white sm:-translate-y-8 flex flex-col gap-y-6">
            <h1 className="text-7xl lg:text-8xl 2xl:text-[200px] font-extrabold bg-gradient-to-b from-teal to-green bg-clip-text text-transparent max-sm:text-center">
              1
            </h1>
            <p className="tracking-wider text lg:text-xl 2xl:text-3xl">
              In every table, <span>11 people</span> send the same amount of
              BARSIK to the <span>“10x BARSIK”</span> app.
            </p>
          </aside>
        </section>

        <section className="flex max-sm:flex-col max-sm:items-center justify-between">
          <aside className="font-montserrat text-white flex flex-col gap-y-6 max-sm:w-full max-md:w-1/2 order-last">
            <h1 className="text-6xl lg:text-8xl 2xl:text-[200px] font-extrabold bg-gradient-to-b from-teal to-green bg-clip-text text-transparent max-sm:text-center">
              2
            </h1>
            <main className="tracking-wider flex flex-col gap-y-3 2xl:gap-y-6 lg:text-xl 2xl:text-3xl">
              The app then choses one winner at random.
              <p className="text">
                <span>10/11</span> of the pot goes to the winner. <br />
                <span>10x</span> their initial investments.
              </p>
              <p className="text">
                <span>1/11</span> is burnt
              </p>
            </main>
          </aside>

          <img
            src={illustration2}
            alt="image illustrating how barsik works(2)"
            className="w-44 md:w-64 xl:w-72 2xl:w-[430px]"
          />
        </section>
      </main>
    </div>
  );
};

export default Details;
