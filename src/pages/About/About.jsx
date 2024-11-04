/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import TechStack from "./TechStack";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/frontendHd.png",
    title: "Frontend(Client-Side)",
    description: "Good experience in Adobe XD, Illustrator, Figma and CorelDraw for UI/UX design, using programming languages and frameworks like JavaScript(React), HTML, CSS(Tailwind/Bootstrap) and Python to developing attractive and responsive websites and applications."
  },
  {
    icon: "/images/backend3d.png",
    title: "Backend(Server-Side) and Database Management(Data)",
    description: "Good at integrating database and API connectivity using Express.js and Django. Also with relational or NoSQL databases like MySQL and MongoDB respectively, I am good at designing and implementing databases to store and manage data."
  },
  {
    icon: "/images/innovation.png",
    title: "Innovation Management, Entrepreneurship and Sustainability",
    description: "Coming from an entreprenurial background, I proceed towards every task given me with an ENTREPRENURIAL MINDSET with high commitment to innovation and sustainability management approach"
  },
  {
    icon: "/images/git3d.png",
    title: "Data Science and Analytics",
    description: "Git"
  }
];


const About = () => {
  const [techStacks , setTechStacks ] = useState([]);
  useEffect(()=> {
    fetch('techStacks.json').then(res => res.json()).then(data => {
      console.log(data)
      setTechStacks(data)
    });
  }, [])
  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">Profile</h2>
    </header>

    <section className="about-text">
      <p>
        Started as an HR Professional in 2011 but later moved into product and graphic design where I cofounded
        RangePacakgaing and Design. After learning and developing competence in the design industy, 
        I transitioned into Computer Programming and Data Science.
      </p>

      <p>
        Now I'm a FullStack Developer with my role involving UI/UX research and design,
        front and backend developement for Web Applications. I always endeavor to collaborate
        effectively to acheiving results whiles at the same time, eager and curious to learn not just 
        for personal improvement but to make impact in every team I find myself. 
      </p>
    </section>


    {/* <!--
      - service
    --> */}

    <section className="service">

      <h3 className="h3 service-title">My Capabilities</h3>

      <ul className="service-list">

      {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - techStacks
    --> */}

    <section className="techStacks">

      <h3 className="h3 techStacks-title">Tech-Stack</h3>

      <ul className="techStacks-list has-scrollbar">

      {techStacks.map((techStack, index) => (
            <TechStack
              key={index}
              name={techStack.name}
              avatar={techStack.avatar}
              avatar1={techStack.avatar1}
              avatar2={techStack.avatar2}
              avatar3={techStack.avatar3}
              techStack={techStack.techStack}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - clients
    --> */}

    <section className="clients">

      <h3 className="h3 clients-title">Clients</h3>

      <ul className="clients-list has-scrollbar">

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-1-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-2-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-3-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-4-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-5-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-6-color.png"alt="client logo"/>
          </a>
        </li>

      </ul>

    </section>

  </article>
  )
}

export default About