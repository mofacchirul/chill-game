import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
          <img src="https://i.ibb.co.com/Mk1FYjv6/logo.webp" className='w-28 lg:w-60 '  alt="" />
          </div>
          <p className="text-sm leading-relaxed text-gray-300">
            It long estabhed fact that reader will distracted the readable content looking using readable.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#"><FaFacebookF className="bg-[#2D2B4F]  p-2 rounded-full text-4xl hover:text-sky-500" /></a>
            <a href="#"><FaInstagram className="bg-[#2D2B4F]  p-2 rounded-full text-4xl hover:text-pink-500" /></a>
            <a href="#"><FaYoutube className="bg-[#2D2B4F]  p-2 rounded-full text-4xl hover:text-red-500" /></a>
            <a href="#"><FaTwitter className="bg-[#2D2B4F]  p-2 rounded-full text-4xl hover:text-sky-400" /></a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-3">CONTACT</h3>
          <p className="text-sm text-purple-400">Location:</p>
          <p className="text-sm text-gray-300 mb-3">136 Harding Ave Wheeling, West Virginia</p>
          <p className="text-sm text-purple-400">Phone:</p>
          <p className="text-sm text-gray-300">00 (62) 632 867 4497</p>
        </div>

        {/* Today's Winners */}
        <div>
          <h3 className="text-xl font-semibold mb-3">TODAY’S WINNERS</h3>
          <div className="grid grid-cols-3 gap-3">
            <img src="https://i.ibb.co.com/Tq4cwY9r/upcoming-game-thumb1.webp" alt="Winner 1" className="h-12 w-12" />
            <img src="https://i.ibb.co.com/6RhfMgL9/upcoming-game-thumb3.webp" alt="Winner 2" className="h-12 w-12" />
            <img src="https://i.ibb.co.com/pt0LtKs/upcoming-game-thumb2.webp" alt="Winner 3" className="h-12 w-12" />
            <img src="https://i.ibb.co.com/PvjM3NKg/upcoming-game-thumb4.webp" alt="Winner 4" className="h-12 w-12" />
            <img src="https://i.ibb.co.com/Wp2B1qZC/upcoming-game-thumb5.webp" alt="Winner 5" className="h-12 w-12" />
            <img src="https://i.ibb.co.com/C3rsV3tP/upcoming-game-thumb6.webp" alt="Winner 6" className="h-12 w-12" />
          </div>
        </div>

        {/* Content */}
        <div>
          <h3 className="text-xl font-semibold mb-3">CONTENT</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>Copywriting</li>
            <li>Social Media</li>
            <li>Interactive Media</li>
            <li>Motion Design</li>
            <li>Illustration</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
