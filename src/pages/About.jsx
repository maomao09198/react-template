import React from 'react';
import Marqueee from '../components/Marqueee';

// paste your JSON array here directly:
const authors = [
  {
    "id": 1,
    "author": "Joanna Goddard",
    "category": "FOUNDER & EDITOR",
    "content": "In 2007, Joanna began Cup of Jo as a weekend hobby, but then developed it into the award-winning daily website it is today — with a deeply engaged readership, thought-leading essays, and a diverse team of writers, photographers and contributors. In fall 2023, she also launched a weekly newsletter, Big Salad, which became an instant Substack bestseller and now has more than 175,000 subscribers. She has also written for many magazines, including Glamour and New York. Joanna lives with her two chatty boys in Brooklyn.",
    "authorImage": "/public/img/about-author/author-1.jpg",
    "email": "hello@cupofjo.com",
    "insta": "Instagram",
    },

    {
    "id": 2,
    "author": "Maureen Heffernan",
    "category": "PARTNERSHIPS & GROUTH DIRECTER",
    "content": "Shortly after college, Maureen moved to New York to pursue a career in digital marketing, despite her parents’ skepticism that people would ever “buy stuff on the internet.” Since then she has helped grow online sales at companies like L’Oreal and Madewell. Before joining Cup of Jo, she was driving traffic and maximizing ROI on the performance marketing team at J.Crew. Maureen lives in Seattle with her husband and two funny kids. .",
    "authorImage": "/public/img/about-author/author-2.jpg",
    "email": "hello@cupofjo.com",
    "insta": "Instagram",
    },

    {
    "id": 3,
    "author": "Jannelle Sanchez",
    "category": "SENIOR EDITOR",
    "content": "Jannelle has always loved talking to people and hearing their stories. After graduating with a journalism degree, she wrote on the marketing teams of various tech companies. But she always found time to write for her personal blog, which featured personal essays, travel recommendations and life realizations. In November 2021, she began working for Cup of Jo and quickly become an invaluable part of the team. Jannelle lives in the Bay Area with her husband and two children.",
    "authorImage": "/public/img/about-author/author-3.jpg",
    "email": "hello@cupofjo.com",
    "insta": "Instagram",
    },

   {
    "id": 4,
    "author": "Kaitlyn Teer",
    "category": "SENIOR NEWSLETTER EDITOR",
    "content": "Kaitlyn is the newsletter editor for Cup of Jo’s weekly Substack, Big Salad. Her essays on mothering and the climate crisis have appeared in Orion, Catapult, and elsewhere. She has won essay prizes from Fourth Genre and Prairie Schooner. She lives with her spouse and two kids in western Washington, where she enjoys hanging out at the beach and taking family bike rides.",
    "authorImage": "/public/img/about-author/author-4.jpg",
    "email": "hello@cupofjo.com",
    "insta": "Instagram",
    },

    {
    "id": 5,
    "author": "Joanna Goddard",
    "category": "FOUNDER & EDITOR",
    "content": "Christine first picked up a camera at age nine, but it wasn’t until many years after college that she realized that photography was it. She is now a commercial and editorial photographer specializing in lifestyle, portraits and food, with clients such as Pepsi, Shake Shack, The Kitchn and of course, Cup of Jo. Her work has taken her all over the world, as far as India and Uganda. When photographing people, especially women, she loves to draw out their inherent beauty and be at ease. She is always drawn to beautiful light and real connection.",
    "authorImage": "/public/img/about-author/author-5.jpg",
    "email": "hello@cupofjo.com",
    "insta": "Instagram",
    },

    {
    "id": 6,
    "author": "Christine Han",
    "category": "PHOTOGRAPHER",
    "content": "Christine wears many hats when it comes to writing and books. She’s had a 15-year career in book publishing — working as an editor at Doubleday, Hyperion and Simon and Schuster — where she’s published bestselling books such as From Scratch, Surviving the White Gaze and These Ghosts Are Family. In addition to her passion for championing other writers, she’s a novelist, too. Her most recent novel, You Were Always Mine, written with Jo Piazza, came out in 2023. She loves any chance to talk about race, friendship, books and television, preferably while eating French fries. ",
    "authorImage": "/public/img/about-author/author6.avif",
    "email": "hello@cupofjo.com",
    "insta": "Instagram",
    },
  
];

const About = () => {
  return (
    <div>
      <div className="about">
        <div className='bg-blue-700 text-white text-center pt-5 pb-15 px-[6%]'>
          <h3 className='text-2xl'>About Cup of Jo</h3>
          <hr className='mt-[20px] mb-[40px]' />
          <p>Founded in January 2007, Cup of Jo is a daily women’s lifestyle site that covers style, culture, food, travel, relationships and parenting. Known industry wide for its large and deeply engaged readership, Cup of Jo encourages visitors to “come for the blog, stay for the comments.” The site receives over 4 million monthly page views and almost 1 million monthly unique visitors.
          <br />
          <br />
         Cup of Jo regularly donates a percentage of profits to organizations we support, including RAICES, NAACP, NARAL, Greenpeace, Save the Children, Planned Parenthood, the Lilith Fund and The Florence Project. We’re glad you are here. Thank you so much for reading.</p>
        </div>
        <h3 className='text-2xl text-center my-[6%]'>Meet Our Team</h3>
        <div className="author px-[6%] py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {authors.map((author) => (
            <div key={author.id} className=" flex flex-col justify-center items-center  ">
              <img 
                src={author.authorImage} 
                alt={author.author} 
                className=" h-50 w-50 rounded-[100%] "
              />
              <h4 className="text-xl font-bold mb-1">{author.author}</h4>
              <p className="text-sm mb-2">{author.category}</p>
              <p className= "text-base">{author.content}</p>
              <p className=''>Email: <a className='text-blue-500' href="mailto:hello@cupofjo.com">{author.email}</a></p>
               <a className='text-blue-500' href="">{author.insta}</a>
            </div>
          ))}
        </div>

        <Marqueee></Marqueee>

      </div>
    </div>
  );
};

export default About;