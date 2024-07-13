import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import barsik from '/barsik.svg'
import background from '../assets/footer-background.svg'

const Footer = () => {
  return (
    <div className="bg-darkest-blue py-8 sm:py-20 flex flex-col items-center gap-y-6 bg-cover" style={{backgroundImage: `url(${background})`}}>
      <header className="text-white uppercase text-2xl font-bold text-center">
        follow us
      </header>
      <main className="*:w-12 *:h-12 sm:*:w-16 sm:*:h-16 flex gap-6 sm:gap-12 *:rounded-full *:flex *:justify-center *:items-center text-2xl sm:text-4xl text-white">
        <span className="bg-light-blue">
          <FaTelegramPlane />
        </span>
        <span className="bg-gradient-to-r from-dark-gray to-[#000000]">
          <FaXTwitter />
        </span>
        <span className="bg-gradient-to-r from-teal to-green">
        <img src={barsik} alt="barsik logo" className="w-6 sm:w-10" />
        </span>
      </main>
    </div>
  );
};

export default Footer;
