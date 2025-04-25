import React from "react";
import user from "../assets/img/user.png"
import heroImg from "../assets/img/heroImg.png"
import heroImg2 from "../assets/img/heroImg2.png"
const HeroTravelSection = () => {
  return (
    <div className="px-16">
      {/* Hero Card */}
      <div className="container  px-4 py-10">
      <button className="bg-blue-600 text-white px-4 py-2 mb-4 rounded hover:bg-blue-700">
      <a href="/">Tecnology</a>
            </button>
        <h2 className="text-2xl font-bold mb-4">
          The Impact of Technology on the Workplace: <br />How Technology is Changing
        </h2>
        <div className="flex items-center space-x-4">
          <img
            src={user}
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <p className="text-gray-500">Tracey Wilson</p>
          <p className="text-gray-500 text-sm">August 20, 2022</p>
        </div>
      </div>

      {/* Hero Image Section */}
      <section className="w-full py-">
        <div className="container mx-auto">
          <img
            src={heroImg}
            alt="Hero Background"
            className="w-full rounded-lg"
          />
        </div>
      </section>

      {/* Travel Article Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="prose max-w-none ">
          <p className="mb-4">Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.</p>
          <p>One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</p>
          <h3 className="text-2xl font-bold mb-4 mt-4">Research Your Destination</h3>
          <p className="mb-4">Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.</p>
          <h3  className="text-2xl font-bold mb-4 mt-4">Plan Your Itinerary</h3>
          <p className="mb-4">While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.</p>
          <p>Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.</p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="ad-bg py-8">
        <div className="container mx-auto text-center">
          <p className="italic text-lg max-w-2xl mx-auto">
            “ Traveling can expose you to new environments and potential health <br />
            risks, so it's crucial to take precautions to stay safe and healthy. ”
          </p>
        </div>
      </section>

      {/* Second Hero Section */}
      <section className="w-full py-8">
        <div className="container mx-auto">
          <img
            src={heroImg2}
            alt="Hero Background 2"
            className="w-full rounded-lg"
          />
        </div>
      </section>

      {/* Advertisement Section */}
      <section className="ad-bg py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold">Lorem, ipsum dolor.</h2>
          <p className=" mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nam?
          </p>
          <a href="/Advertisement" target="_blank">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              View More
            </button>
          </a>
        </div>
      </section>

      {/* Final Travel Tips Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="prose max-w-none ">
          <h3  className="text-2xl font-bold mb-4 mt-4">Pack Lightly and Smartly</h3>
          <p>Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles.</p>

          <h3  className="text-2xl font-bold mb-4 mt-4">Stay Safe and Healthy</h3>
          <p>Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. This includes researching any required vaccinations or medications, staying hydrated, washing your hands frequently, and using sunscreen and insect repellent. It's also essential to keep your valuables safe and secure and to be aware of your surroundings at all times.</p>

          <h3  className="text-2xl font-bold mb-4 mt-4">Immerse Yourself in the Local Culture</h3>
          <p >One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</p>

          <h3  className="text-2xl font-bold mb-4 mt-4">Capture Memories</h3>
          <p>Finally, don't forget to capture memories of your journey. Whether it's through photographs, journaling, or souvenirs, preserving the moments and experiences of your travels can bring joy and nostalgia for years to come. However, it's also essential to be present in the moment and not let technology distract you from the beauty of your surroundings.</p>

          <h3  className="text-2xl font-bold mb-4 mt-4">Conclusion:</h3>
          <p>Traveling is an art form that requires a blend of planning, preparation, and spontaneity. By following these tips and tricks, you can make the most of your journey and create memories that last a lifetime. So pack your bags, embrace the adventure, and enjoy the ride.</p>
        </div>
      </section>
    </div>
  );
};

export default HeroTravelSection;
