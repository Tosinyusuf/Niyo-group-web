import React from "react";
import { Link } from "react-router-dom";
import Join from "../../components/home/JoinHome";
import { DetailsContainer, JobContainer } from "./style";

const ContentMarketer = () => {
  return (
    <>
      <JobContainer>
        <div>
          <h1>Content Marketer</h1>
          <p>
            Niyo Group is an award-winning group of technology and <br />{" "}
            innovation companies that exists to economically <br />
            empower black women globally.{" "}
          </p>
        </div>
      </JobContainer>

      <DetailsContainer>
        <h2>Role Purpose 🚀</h2>
        <p>
          We are looking for an experienced Content Marketer to join our team.
          If you love creating high-quality and engaging content and drive
          business success with it, we want you on our team! As a Content
          Marketer, you will be responsible for developing and implementing the
          overall content strategy based on our specific goals and objectives.
          You will also be responsible for inbound marketing strategies to build
          a brand identity and online presence through the creation and
          dissemination of multimedia content online. This involves developing
          content strategies, growing an online community, and tracking that
          community’s growth.
        </p>
      </DetailsContainer>

      <DetailsContainer>
        <h2>Job Overview</h2>
        <ul>
          <li>Contract type: Full-Time</li>
          <li>Starting: Immediately</li>
          <li>Location: Niyo HQ Birmingham (2 days WFH)</li>
          <li>Job title: Content Marketer</li>
          <li>Reporting to: CEO & COO</li>
          <li>Deadline to apply: September 25th, 2022</li>
        </ul>
      </DetailsContainer>

      <DetailsContainer>
        <h2>Duties and Key Responsibilities 🏋🏿 </h2>
        <ul>
          <li>Design content marketing strategies and set short-term goals.</li>
          <li>
            Undertake content marketing initiatives to achieve business targets.
          </li>
          <li>
            Produce high-quality content by collaborating with design and
            writing teams.
          </li>
          <li>
            Create an editorial calendar, delegate tasks, and ensure that
            deadlines are met.
          </li>
          <li>Regularly deliver engaging content.</li>
          <li>Edit, proofread, and improve the content.</li>
          <li>Optimise content considering SEO and Google Analytics.</li>
          <li>Analyse web traffic metrics.</li>

          <li>Ensure a strong web presence on various channels.</li>
          <li>
            Generate ideas to increase customer engagement and grow subscriber
            base.
          </li>
        </ul>
      </DetailsContainer>

      <DetailsContainer>
        <h2>Skills and Qualifications 🎯</h2>
        <ul>
          <li>Proven work experience as a Content marketing manager.</li>
          <li>
            Proficient in MS Office and WordPress or other Content Management
            Software.
          </li>
          <li>Understanding of web publishing requirements.</li>
          <li>
            Experience in producing content for the web specifically, as well as
            channel-specific knowledge (blog, TikTok, Instagram, Twitter, etc.)
          </li>
          <li>Past experience building audiences either online or offline</li>
          <li>
            Ability to predict audience preferences with an editorial mindset.
          </li>
          <li>Hands-on experience with SEO and web traffic metrics.</li>
          <li>Expertise in social media platforms.</li>
          <li>Project management skills and attention to detail.</li>
          <li>Excellent communication and writing skills in English.</li>
          <li>Good time-management skills</li>
          <li>Ability to multitask</li>
          <li>Strong interpersonal and communication skills</li>
          <li>Critical-thinker and problem-solver</li>
        </ul>
      </DetailsContainer>

      <DetailsContainer>
        <h2>Application Process 💭💭</h2>
        <ul>
          <li>Online application</li>
          <li>Test (Case Study) and scenario-based challenge</li>
          <li>Face to face Interview</li>
          <li>References</li>
          <li>Meet the team</li>
        </ul>
      </DetailsContainer>

      <DetailsContainer>
        <h2>Benefits & Compensation🤝</h2>
        <ul>
          <li>
            Work with a super friendly,close-knit,collaborative team and
            actually make a difference to people’s lives
          </li>
          <li>Generous bonus scheme</li>
          <li>28 days holiday + your birthday off</li>
          <li>
            Generous time and budget allocated to relevant professional learning
            and certifications
          </li>
          <li>3% Nest Pension Scheme</li>
          <li>Regular socials… in person and remote</li>
          <li>
            1-1 Coaching to support your wellbeing, personal and professional
            development
          </li>
          <li>
            The opportunity to be at the heart of an exciting and socially
            conscious organisation, and help it scale to truly change people’s
            lives
          </li>
          <li>
            Ability to grow and move up the company very fast depending on your
            commitment.
          </li>
          <li>
            Work in an environment where your voice is heard and see the
            feedback you give develop the organisation
          </li>
          <li>Weekly team wellbeing catch ups and engaging feedback culture</li>
          <li>
            Fantastic rewards for when you become our employee of the month
          </li>
          <li>Generous birthday presents</li>
          <li>Working remotely 2-3 days a week</li>
          <li>Office Snacks</li>
          <li>30% off all Niyo Enterprise products</li>
          <li>Free entry to company and partner events</li>
        </ul>

        <p style={{ marginTop: "40px" }}>
          To apply, kindly click <Link to="">here</Link>
        </p>
      </DetailsContainer>
      <Join />
    </>
  );
};

export default ContentMarketer;
