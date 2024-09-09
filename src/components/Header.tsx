import { Link } from "react-router-dom";
import { useState } from "react";
import { TiWorld } from "react-icons/ti";
import { MdOutlinePhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineLeft, AiOutlineClose } from "react-icons/ai";
import { FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";




const menuItems = [
  {
    label: 'About Us',
    link: '/about',
    submenus: [
      { label: 'Mission & Vision', link: '/about' },
      { label: 'Strategic Direction', link: '/about' },
      { label: 'Leadership', link: '/about' },
      { label: 'Team', link: '/about' },
      { label: 'History', link: '/about' },
      { label: 'Contact Us', link: '/contact' },
    ],
  },
  {
    label: 'Our Work',
    link: '/about',
    submenus: [
      { label: 'Education & Work', link: '/our-work' },
      { label: 'Inclusive Governance', link: '/our-work' },
      { label: "Women's Economic Justice", link: '/our-work' },
      { label: 'Climate Justice', link: '/our-work' },
      { label: 'Humanitarian', link: '/' },
      
    ],
  },
  {
    label: 'News & Events',
    link: '/blog',
    submenus: [
      { label: 'Impact Stories', link: '/news-events' },
      { label: 'Latest News', link: '/news-events/1' },
      { label: "Careers", link: '/news-events' },
      { label: 'Videos', link: '/news-events' },
      { label: 'Humanitarian', link: '/news-events' },
      
    ],
  },
  {
    label: 'Partnerships',
    link: '/partnerships',
    submenus: [
      { label: 'Localization', link: '/partnerships' },
      { label: 'Local Partners', link: '/partnerships' },
      { label: "Funding Partners", link: '/partnerships' },
      
      
    ],
  },
  {
    label: 'Resources',
    link: '/resources',
    submenus: [
      { label: 'Publications', link: '/' },
      { label: 'Tools', link: '/' },
      { label: 'Guidelines', link: '/' },
    ],
  },
  
  // Add more menu items here...
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const [submenuTimeout, setSubmenuTimeout] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveMenu(null);
  };

  const openSubMenu = (menu) => {
    setActiveMenu(menu);
  };

  const goBackToMainMenu = () => {
    setActiveMenu(null);
  };

  const handleMouseEnter = (index) => {
    if (submenuTimeout) {
      clearTimeout(submenuTimeout);
      setSubmenuTimeout(null);
    }
    setOpenSubmenuIndex(index);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenSubmenuIndex(null);
    }, 200);
    setSubmenuTimeout(timeout);
  };

  return (
    <header className="bg-sky-400 font-roboto px-4 pt-4">
      <nav className="w-full max-w-7xl mx-auto relative">
        {/* Language and Links */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between text-white flex-wrap gap-2 md:gap-4">
          <div className="flex gap-4">
            <button>English</button>
            <button>Khmer</button>
          </div>
          <div className="flex gap-3 justify-center flex-wrap text-center md:text-left ">
            <Link to="/faq">FAQ</Link> |
            <Link to="/">What We Do</Link> |
            <Link to="/faq">Our Story</Link> |
            <Link to="/faq">Be A Volunteer</Link> |
            <Link to="/faq">Contact Us</Link>
          </div>
          <div className="md:hidden absolute right-4 top-32">
            <button onClick={toggleMenu}>
              <GiHamburgerMenu size={30} />
            </button>
          </div>
        </div>

        {/* Logo and Contact Info */}
        <div className="flex flex-wrap justify-between items-center py-4 text-white">
          <div className="font-bold md:text-2xl">
            <div className="flex items-center">
              <TiWorld size={50} className="inline-block" />
              <span className="ml-2">KHMER ORGANIZATION</span>
            </div>
            <p className="ml-16 mt-[-10px] md:ml-14 text-sm">Because We Care</p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <p>
              <MdOutlinePhone className="inline-block" /> 0123456789
            </p>
            <p>
              <MdEmail className="inline-block" /> email@ourorg.kh
            </p>
          </div>
        </div>

        {/* Search Box */}
        <div className="w-full flex flex-wrap justify-between items-center py-2">
          <div className="w-full md:w-1/2 lg:w-1/3 flex items-center bg-sky-300 rounded h-10 md:order-1 lg:order-none lg:ml-auto md:ml-auto">
            <input
              className="flex-grow h-full px-4 bg-transparent outline-none text-white"
              type="text"
              placeholder="Search here"
            />
            <IoSearchOutline size={20} className="mx-2 text-white" />
          </div>
        </div>

        {/* Hamburger Menu Dropdown */}
        {isMenuOpen && (
          <div
            className={`fixed top-0 right-0 h-full w-[70%] bg-gray-800 bg-opacity-90 text-white z-50 p-4 transform transition-transform duration-300 ease-in-out ${
              activeMenu ? "-translate-x-0" : ""
            }`}
            style={{ transform: `translateX(${isMenuOpen ? "0%" : "100%"})` }}
          >
            <div className="flex justify-between items-center mb-4">
              {!activeMenu && (
                <button onClick={toggleMenu} className="text-white text-lg">
                  <AiOutlineClose size={30} />
                </button>
              )}
            </div>
            {!activeMenu ? (
              <ul className="flex flex-col gap-4">
                {menuItems.map((menuItem, index) => (
                  <li key={index}>
                    <button
                      onClick={() => openSubMenu(menuItem)}
                      className="w-full text-left"
                    >
                      {menuItem.label}
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div>
                <button
                  onClick={goBackToMainMenu}
                  className="flex items-center mb-2 text-left"
                >
                  <AiOutlineLeft size={20} className="inline-block mr-2" />
                  Back
                </button>
                <ul className="flex flex-col gap-4">
                  {activeMenu.submenus.map((submenu, subIndex) => (
                    <li key={subIndex}>
                      <Link to={submenu.link} onClick={toggleMenu}>
                        {submenu.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Grand Menu */}
        <div className="hidden md:flex justify-between bg-slate-600 relative bottom-[-40px] border-b-4 border-b-slate-800 md:flex-wrap md:w-full">
          <div className="flex items-center gap-3 px-4 text-white md:mx-auto md:mt-2">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaYoutube />
          </div>

          <div>
            <ul className="flex flex-wrap justify-center md:justify-between items-center px-4 text-white">
              {menuItems.map((menuItem, index) => (
                <li
                  key={index}
                  className="group relative cursor-pointer py-6 px-4 uppercase font-semibold shrink-0 hover:bg-slate-700 transition-all duration-300 ease-in-out"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {menuItem.label} <IoMdArrowDropdown className="inline-block" />
                  <ul
                    className={`absolute left-0 top-full bg-gray-800 bg-opacity-90 z-50 ${
                      openSubmenuIndex === index ? "block" : "hidden"
                    } text-sm mt-1 w-full shadow-lg transition-all duration-300 ease-in-out`}
                  >
                    {menuItem.submenus.map((submenu, subIndex) => (
                      <li key={subIndex} className="py-2 px-4 hover:bg-slate-600">
                        <Link to={submenu.link}>{submenu.label}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
