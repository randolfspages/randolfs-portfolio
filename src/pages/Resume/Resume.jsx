import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader, faBookmark } from '@fortawesome/free-solid-svg-icons'
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
          <FontAwesomeIcon icon={faBookOpenReader} />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Technical Universität, Berlin-Germany"
            date="2018 — 2022"
            description="MSc. Innovation Management Entrepreneurship and Sustainability."
          />
          <TimelineItem
            title="Hasso Plattner Institut, Potsdam-Germany"
            date="2022, 2023"
            description="Web Technologies (Backbone of Emerging Digital World) and Data Science"
          />
          <TimelineItem
            title="University of Ghana"
            date="2005— 2009"
            description="Psychology and linguistics."
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
          <FontAwesomeIcon icon={faBookmark} />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Instructor/Frontend Developer @ Code for Africa"
            date="2022 — Present"
            description="Provides computer programming support to clients in the form of technical and teaching services."
          />
          <TimelineItem
            title="Study and Work @ StudierendenWerk, Berlin"
            date="2019 — 2022"
            description="Office administration and facility management support."
          />
          <TimelineItem
            title="Market Research Analyst @ Global Warehouse Limited, Ghana"
            date="2016 — 2018"
            description="Developed appropriate strategies and operational
            measures by analysing the market based on customers' needs, 
            trends and competition in the market. Conducted market research customer research to consolidate market from variety of sources."
          />
          <TimelineItem
            title="Human Resource Officer @ Global Talent Masters Limited, Ghana"
            date="2012— 2015"
            description="I was incharge of managing about 500 casual workers working for Fast Moving Consumable Goods companies. Conducted employee report analysisto identify trends for planning and scaling production. Also ensured adequate and proper records on employees' data for both internal and external use."
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Web Application Development(Fullstack)" value={80} />
          <SkillItem title="UI/UX Design and Research" value={70} />
          <SkillItem title="Graphic Design" value={80} />
          <SkillItem title="Data Anaylsis (with Python)" value={70} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
