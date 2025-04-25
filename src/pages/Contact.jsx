import React from 'react';
import facebook from "../assets/img/facebook.png"
import insta from "../assets/img/insta.png"
import utube from "../assets/img/utube.png"
import user from "../assets/img/user.png"

const Contact = () => {
    return (
        <div className='flex flex-col items-center px-[6%] py-[3%] '>

        <div className='flex  items-center gap-2'>
             <img className='h-[64px] w-[64px]' src={user} alt="" />
             <div>
                 <h3 className='text-[20px] font-bold'>Jonathon doe</h3>
                 <p className='text-[14px] opacity-50'>Web Developer</p>
             </div>
        </div>
        <div className='opacity-80 text-[18px] mt-5 mb-4 text-center'>
        Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel. Jonathan holds a degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding of the impact technology has on our lives
        </div>

     <div className="flex gap-2">
     <a href="https://www.facebook.com/">  <img className='hover:scale-115 transition-all duration-350 ease-in-out'  src={facebook} alt="" /></a>

     <a href="https://www.instagram.com/"><img className='hover:scale-115 transition-all duration-350 ease-in-out' src={insta} alt="" /></a>

     <a className='hover:scale-115 transition-all duration-350 ease-in-out ' href="https://www.youtube.com/"> <img  src={utube} alt="" /></a>
     
     </div>

     </div>
    );
};

export default Contact;