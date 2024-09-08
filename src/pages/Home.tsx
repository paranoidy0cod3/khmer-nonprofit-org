import { FaArrowCircleRight } from "react-icons/fa"
import { BlogList, Carausel, CauseList, SearchBar, TeamList, TestimonialCarousel } from "../components"
import { Link } from "react-router-dom"
import { GrAnnounce } from "react-icons/gr";


const Home = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto'>
      {/* carausal */}
      <div>
        <Carausel />
      </div>

        {/* story about us */}
       <div className="flex items-center justify-between my-8 gap-4 flex-wrap md:flex-nowrap ">
        <div className="max-w-lg p-6" style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2017/04/06/06/17/children-2207341_1280.jpg')", backgroundSize: "cover", backgroundPosition: "center"}} >
          <h2 className="text-xl font-bold mb-4 underline text-white">Story About Us</h2>
          <h2 className="text-3xl font-bold mb-4 text-slate-200">Who we are?</h2>
          <p className="text-lg  bg-slate-900 text-white p-4 opacity-50">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis tempora mollitia error, totam rem dolorum. Pariatur excepturi ex dolorem accusamus?Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nihil!  </p>
          <Link to="/about" className="text-slate-900 hover:text-sky-500">  Learn More... <FaArrowCircleRight className="inline ml-4" /></Link>
        </div>

        {/* recent cause */}

        <div className=" p-6" style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2022/08/21/03/48/smile-7400381_1280.jpg')", backgroundSize: "cover", backgroundPosition: "center"}} >
          <h2 className="text-xl font-bold mb-4 underline text-white">Urgent Cause</h2>
          <h2 className="text-3xl font-bold mb-4 text-slate-200">Send Children to School</h2>
          <p className="text-lg  bg-slate-900 text-white p-4 opacity-50">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis tempora mollitia error, totam rem dolorum. Pariatur excepturi ex dolorem accusamus?Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nihil! 
          <Link to="/about" className="text-sky-400 hover:text-sky-500">  Learn More... <FaArrowCircleRight className="inline ml-4" /></Link>
             </p>
          
          <div className="flex justify-between">
            <div className=" flex-1 max-w-[80%]">
              <div className="bg-slate-400  min-h-2 mt-4 flex items-center"> <div className="min-h-2 bg-orange-500 rounded-md w-[80%]"></div></div>
              <h4 className="text-white font-semibold">80% Donated / $ 5,000 To Go</h4>
            </div>
            <Link to={"/donate"} className=" bg-sky-400 hover:bg-sky-500 text-white px-6 py-2 rounded mt-4" >Donate</Link>
          </div>
        </div>

       </div>
      <CauseList />      

    </div>

    {/* fullpage banner with text */}
    <div className="flex my-8 flex-wrap md:flex-nowrap">
    <div className="container mx-auto bg-gray-800 grayscale-50" style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2017/08/05/13/22/people-2583562_1280.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
  
    </div>
    <div className="bg-gray-400 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-4 textw">WE NEED YOUR HELP</h1>
      <h2 className="text-2xl text-center mb-8">LET'S STOP THIS HUNGER AND FULLFILL THEIR HAPPINESS</h2>
      <p className="text-lg text-center mb-8">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus   
    mus. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisisAenean   
    eu leo quam, Pellentesque ornare sem lacinia quam</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">LEARN MORE</button>
      </div>
    </div>
    <div className="container mx-auto max-w-7xl flex gap-4 flex-wrap md:flex-nowrap">
      <div className="md:w-[70%] w-full ">
        <SearchBar />
        <BlogList />
        <TeamList />
      </div>
      <div className="md:w-[30%] w-full">
        {/* announcement card */}
        <div className="bg-orange-400 text-white p-6 rounded-lg shadow-md mt-8">        
          <GrAnnounce  size={150} className="mb-8 text-center mx-auto"/>
          <h2 className="text-2xl font-bold mb-2">We Need You!</h2>
          <h3 className="text-xl font-semibold mb-4">Become a Volunteer</h3>
          <p className="text-lg mb-4">Become a part of our family. Together, we can save many lives and stop this hunger.</p>
          <button className="bg-white text-orange-400 hover:bg-orange-500 transition-all duration-200  px-4 py-2">APPLY NOW!</button>
        </div>
        {/* news letter subscription  */}
        <div className="bg-white p-6 shadow-md my-8">
          <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-4">Get our latest news straight in your inbox</p>  
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-4 py-2" />
            <button className="bg-sky-400 hover:bg-orange-500 text-white px-4 py-2 rounded">SUBSCRIBE</button>
          </div>
        </div>
        {/* video section  */}
        <div className="max-w-sm  overflow-hidden shadow-md mt-16">
          <h2 className="text-2xl font-bold mb-12">Video Campaign</h2>
      <iframe
        title="YouTube Video"
        className="w-full h-64"
        src={`https://www.youtube.com/embed/DzeVhC2Q66o?si=ONhgJGfuitxmzMMg`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen   

      />
      
    </div>
      </div>

    </div>
    <div className="mt-4"><TestimonialCarousel /></div>
    </div>
  )
}

export default Home