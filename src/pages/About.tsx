import React from 'react'
import { FeatureCards, TopBanner } from '../components'

import { FaHandsHelping } from 'react-icons/fa';

const About = () => {
  return (
    <div className=''>
      <TopBanner />
      <FeatureCards />
    {/* <FcGlobe size={300} className='inline-block mx-2 text-center' /> */}
    <div className='md:max-w-7xl mx-auto flex justify-between items-center md:flex-nowrap flex-wrap'>
    <div className='md:w-1/2'>
    <img src="https://cdn.pixabay.com/photo/2016/04/02/21/01/earth-1303628_1280.png" alt="" />
    </div>
    <div className='md:w-1/2 p-4'>
      <h2 className='text-4xl font-bold mb-4'>For over a decade</h2>
      <h3 className='text-2xl text-slate-400 mb-4'>We have been saving more than 10,000 lives</h3>
      <p className='text-slate-500 mb-4'> Nullam id dolor id nibh ultricies vehicula ut id elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia.</p>
      <button className='bg-sky-500 text-white px-4 py-2'>Learn More</button>
    </div>
    </div>
    {/* life we save div  */}

    <div>
      <div className='text-center bg-slate-900 text-white text-5xl py-6'>
        <h2>Lives we saved</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4 p-4 bg-slate-300'>
        <div className='text-center py-12 '>
          <h4 className='text-6xl text-slate-700'>3000</h4>
          <h4 className='text-xl text-slate-700 font-bold uppercase'>Siem Reap</h4>
        </div>
        <div className='text-center py-8 '>
          <h4 className='text-6xl text-slate-700'>4000</h4>
          <h4 className='text-xl text-slate-700 font-bold uppercase'>Battambang</h4>
        </div>
        <div className='text-center py-8 '>
          <h4 className='text-6xl text-slate-700'>7000</h4>
          <h4 className='text-xl text-slate-700 font-bold uppercase'>Phnom Penh</h4>
        </div>
        <div className='text-center py-8 '>
          <h4 className='text-6xl text-slate-700'>1000</h4>
          <h4 className='text-xl text-slate-700 font-bold uppercase'>Kampot</h4>
        </div>
      </div>
    </div>
    {/* how we help div */}
    <div className='max-w-7xl mx-auto my-8'>      
      <FaHandsHelping size={40} className='inline-block mr-4'/><h2 className='inline-block font-bold text-2xl'>How we help</h2>
    <hr className='my-4' />
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-4 items-center'>
      <div className='flex gap-4 flex-wrap justify-center  md:flex-nowrap'>
        <div className='w-1/1'>
          <img src="https://cdn.pixabay.com/photo/2022/06/12/02/11/family-7257182_1280.jpg" alt="" />
        </div>
        <div>
          <h3 className='text-xl font-semibold mb-4'>Reunit Children With Family</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolor quaerat consequuntur vitae, doloremque ipsa in. Voluptate laudantium nam ipsa.</p>
        </div>
      </div>
      <div className='flex gap-4 flex-wrap justify-center  md:flex-nowrap'>
        <div className='w-1/1'>
          <img src="https://cdn.pixabay.com/photo/2020/07/01/19/11/duck-5360663_1280.jpg" alt="" />
        </div>
        <div>
          <h3 className='text-xl font-semibold mb-4'>Provide Food</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolor quaerat consequuntur vitae, doloremque ipsa in. Voluptate laudantium nam ipsa.</p>
        </div>
      </div>
      <div className='flex gap-4 flex-wrap justify-center  md:flex-nowrap'>
        <div className='w-1/1'>
          <img src="https://cdn.pixabay.com/photo/2020/11/10/21/00/boy-5731001_1280.jpg" alt="" />
        </div>
        <div>
          <h3 className='text-xl font-semibold mb-4'>Provide Knowledge</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolor quaerat consequuntur vitae, doloremque ipsa in. Voluptate laudantium nam ipsa.</p>
        </div>
      </div>
      <div className='flex gap-4 flex-wrap justify-center  md:flex-nowrap'>
        <div className='w-1/1'>
          <img src="https://cdn.pixabay.com/photo/2016/10/18/08/52/blood-pressure-monitor-1749577_1280.jpg" alt="" />
        </div>
        <div>
          <h3 className='text-xl font-semibold mb-4'>Health Is Matter</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolor quaerat consequuntur vitae, doloremque ipsa in. Voluptate laudantium nam ipsa.</p>
        </div>
      </div>
    </div>
    </div>
    {/* fullpage donate banner div */}
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
    </div>
  )
}

export default About