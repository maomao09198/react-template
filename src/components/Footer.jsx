import React from "react";
import icon from "../assets/img/icon.png"


import { EnvelopeIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  const showAlert = () => {
    alert("Subscribed!");
  };

  return (
    <footer className=" footer-theme px-12">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h2 className="text-lg font-bold mb-4">About</h2>
          <p className="mb-4 text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tempora minima
            aliquam laboriosam quo officia ea laborum nemo, quisquam vel, labore, mollitia
            magni nam natus.
          </p>
          <div className="mb-2 flex items-center gap-2">
            <h4 className="font-semibold">Email:</h4>
            <a href="mailto:jshikder116@gmail.com" className="text-blue-400 hover:underline">
            info@jstemplate.net
            </a>
          </div>
          <div className="flex items-center gap-2">
            <h4 className="font-semibold">Phone:</h4>
            <a href="tel:01881176704" className="text-blue-400 hover:underline">
            880 123 456 789
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-bold mb-4">Quick Link</h2>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Blog", "Archive", "Author", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-blue-400">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Category</h2>
            <ul className="space-y-2 text-sm">
              {["Lifestyle", "Technology", "Travel", "Business", "Economy", "Sports"].map(
                (cat) => (
                  <li key={cat}>
                    <a href="#" className="hover:text-blue-400">
                      {cat}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Column 3 */}
        <div className="mail-box p-4 rounded">
          <h3 className="text-lg font-bold mb-2">Weekly Newsletter</h3>
          <p className="text-sm  mb-4">Get Blog Articles and Offers Via Email</p>
          <div className="relative w-full mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 pr-10 rounded  border border-gray-700 placeholder-gray-400  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <EnvelopeIcon className="w-5 h-5 text-gray-400 absolute right-3 top-3.5" />
          </div>
          <button
            onClick={showAlert}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Subscribe
          </button>
        </div>
      </div>
       <hr></hr>
      {/* Footer Bottom */}
      <div className=" p-4  mt-5">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <a href="/index.html">
              <img src={icon} alt="Footer Logo" className="w-10 h-10" />
            </a>
            <div>
            <p className='flex text-[18px]'>Meta<h3 className='font-bold'>Blog</h3>
           </p>

              <p className="text-sm text-gray-400">© JS Template 2023. All Rights Reserved.</p>
            </div>
          </div>
          <div className="flex flex-wrap space-x-6 text-sm">
            <a href="#" className="hover:text-blue-400">
              Terms of Use
            </a>
            <a href="#" className="hover:text-blue-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
