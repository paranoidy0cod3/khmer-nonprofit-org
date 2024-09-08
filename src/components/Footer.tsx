import { FaFacebookF, FaHeart, FaLinkedinIn, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import { MdAddHomeWork } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { TiWorld } from "react-icons/ti";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div>
      <div className="bg-slate-800 px-16 py-8 flex justify-between items-center flex-wrap gap-4">
      {/* contact informations  */}
      <div className="text-white flex flex-col">
        <h2 className="font-semibold mb-4">Contact Information</h2>
        <div><FaPhone className="inline-block mr-2" /> <span className="text-slate-300">+855 12 345 678</span></div>
        <div><MdEmail className="inline-block mr-2" /> <span className="text-slate-300">5kR0T@example.com</span></div>
        <div><MdAddHomeWork className="inline-block mr-2" /> <span className="text-slate-300">4 Street, Sisophon, Cambodia</span></div>
        {/* Social Links */}
        <div className="flex items-center gap-3  text-white  md:mt-4">
            <FaFacebookF />
            <FaTwitter  />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
      </div>
      {/* recent posts  */}
      <div className="text-white flex flex-col">
        <h2 className="font-semibold mb-4">Recent Posts</h2>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <div><IoIosArrowForward className="inline-block mr-2" /></div>
            <div className="text-slate-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div> 
          </div>
          <div className="flex gap-2">
            <div><IoIosArrowForward className="inline-block mr-2" /></div>
            <div className="text-slate-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>
          <div className="flex gap-2">
            <div><IoIosArrowForward className="inline-block mr-2" /></div>
            <div className="text-slate-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>
        </div>
    </div>
    {/* latest works image grid  */}
    <div className="text-white flex flex-col">
      <h2 className="font-semibold mb-4">Latest Works</h2>
      <div className="grid grid-cols-3 gap-4">
        <img src="https://picsum.photos/60" alt="work" />
        <img src="https://picsum.photos/61" alt="work" />
        <img src="https://picsum.photos/62" alt="work" />
        <img src="https://picsum.photos/63" alt="work" />
        <img src="https://picsum.photos/64" alt="work" />
        <img src="https://picsum.photos/65" alt="work" />
      </div>
    </div>
    {/* footer logo  */}
    <div className="text-white">
    <div className="font-bold md:text-2xl">
            <div className="flex items-center">
              <TiWorld size={50} className="inline-block" />
              <span className="ml-2">KHMER ORGANIZATION</span>
            </div>
            <p className="ml-16 mt-[-10px] md:ml-14 text-sm">Because We Care</p>
          </div>
          <p> www.ourorg.kh always open for you.</p>
          <p>we always make your life easier</p>
          <p>we are dedicated team for your success. </p>
    </div>
    </div>
    <div className="bg-slate-900 text-slate-300 text-center py-4 px-1"><p>Copyright © 2024.</p> 
    <p>made with love <FaHeart color="red" className="inline-block ml-2" />{" "} in Sisophon</p>
    <div className="flex gap-3 justify-center flex-wrap text-center md:text-left ">
            <Link to="/faq">FAQ</Link> |
            <Link to="/">What We Do</Link> |
            <Link to="/faq">Our Story</Link> |
            <Link to="/faq">Be A Volunteer</Link> |
            <Link to="/faq">Contact Us</Link>
          </div>
     </div>
    </div>
  )
}

export default Footer