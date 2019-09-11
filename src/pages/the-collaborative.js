import React from "react";
import { cx, css } from "emotion";
import { Link } from "gatsby";
import {
  Logo,
  PullQuote
} from "@hackoregon/component-library";

import "@hackoregon/component-library/assets/global.styles.css";
import PageLayout from "../components/pagelayout";

const buttonContainerStatic = css`
  align-self: center;
  margin-top: 30px;
  margin-left: 30px;
  margin-bottom: 30px;
  a {
    opacity: 1;
  }
`;

const titleStyle = css`
  font-size: 50px;
  line-height: 1.2;
  font-family: "Rubik", sans-serif;
  letter-spacing: -1px;
  color: 4d6764;
  text-transform: uppercase;
  @media (max-width: 640px) {
    font-size: 28px;
    text-align: center;
  }
`;

const subtitleStyle = css`
  font-size: 26px;
  line-height: 1.2;
  font-weight: 300;
  font-family: "Rubik", sans-serif;
  color: #726371;
  @media (max-width: 640px) {
    font-size: 18px;
  }
`;

const linkStyle = css`
  color: #48a98a;
  font-weight: 500px;
`;

const buttonStyle = css`
  border: 0px solid rgb(30, 98, 189);
  border-radius: 1px;
  padding: 10px 20px;
  font-family: "Rubik", sans-serif;
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
  color: white;
  background-color: #48a98a;
  margin: 10px 0px 10px;
  :hover {
    cursor: pointer;
  }
`;

const buttonDropShadow = css`
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.6);
`;

const quoteStyle = css`
  padding: 30px 0px;
  max-width: 900px;

  div {
    margin: 0px;
    text-align: left;
    @media (max-width: 640px) {
      text-align: center;
    }
    max-width: 900px;
  }
  blockquote {
    color: #3b413c;
    font-size: 28px;
    font-weight: 500;
    align-self: left;
    background-color: #d3e9e7;
    display: inline;
    @media (max-width: 640px) {
      font-size: 18px;
    }
  }
`;

const listSubTitle = css`
  display: block;
  font-family: "Rubik", sans-serif;
  font-size: 24px;
  margin: 12px 0;
`;
const listText = css`
  display: block;
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  color: black;
  line-height: 1.5;
`;

const problemSolutionSection = css`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background-color: white;
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.2);
  margin-top: 90px;
  margin-bottom: 30px;
`;

const problemSolution = css`
  padding: 2em;
  max-width: 700px;
  margin: 0 auto;
  p {
    font-size: 22px;
    @media (max-width: 640px) {
      font-size: 18px;
    }
  }
  h2 {
    font-size: 36px;
    font-size: 2.625rem;
    @media (max-width: 640px) {
      font-size: 26px;
    }
  }
  :after {
    background-color: #4d6764;
    content: "";
    display: block;
    pointer-events: all;
    position: absolute;
    right: 0px;
    text-align: center;
    z-index: -1;
    height: 50px;
    width: 100vw;
    transform: rotate(2deg);
    box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.6);
  }
  :before {
    background-color: #3c8d73;
    content: "";
    display: block;
    pointer-events: all;
    position: absolute;
    right: 0px;
    text-align: center;
    z-index: -1;
    top: -15px;
    height: 50px;
    width: 100vw;
    transform: rotate(1deg);
  }
`;

const footerSection = css`
  text-align: center;
  margin-top: 180px;
  padding-bottom: 120px;
`;

const embed = css`
  position: relative;
  padding-bottom: 80%; /* set the aspect ratio here as (height / width) * 100% */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const TheCollaborative = () => (
  <PageLayout>
    <Logo type="civicStandard" />
    <aside className={listText}>Introduces...</aside>
    <section>
      <h1 className={titleStyle}>The Education Data Collaborative:</h1>
      <h2>A new kind of partnership.</h2>
    </section>
    <div>
      <section className={problemSolutionSection}>
        <div className={problemSolution}>
          <h2>Data: The First Step in Change Making</h2>
          <p>Whether we work within schools or as part of the broader ecosystem of parent-teacher associations, and philanthropic, nonprofit, and volunteer organizations, we need data to guide decisions about investing our time and resources.</p>
          <p>This data is typically expensive to gather, often unvalidated (e.g. self-reported), and commonly available only to those who collect or report it. It can even be hard to ask for data when it’s not clear what’s available. At the same time, information – in the form of discrete research, report-card style PDFs, or static websites – is everywhere. The result is that many already resource-thin organizations that could be collaborating around strategies to help kids advance, spend a lot of time in isolation collecting and searching for data.</p>
          <p>In the past decade, we’ve seen solid progress in addressing part of the problem: the emergence of connected longitudinal data systems (LDS). These warehouses and  linked databases contain data that can help us understand how students progress over time. No personally identifiable information (or PII) is shared, yet the data can reveal where interventions are most needed. Because these systems are typically designed for researchers and policy professionals, they are rarely accessible to the educators, parents, and partners – arts, sports, academic enrichment (e.g. STEM), mentoring, and family support programs – that play such important roles in helping young people learn and succeed.</p>
        </div>
      </section>
    </div>
    <div>
      <section className={problemSolutionSection}>
        <div className={problemSolution}>
          <h2>The Need for Ecosystem Platforms and Tools </h2>
          <p>We need open tools for the <em>ecosystem</em> – parents, volunteers, non-profit organizations and the foundations and agencies that support them. These partners can realize significant benefit from the same kind of data policy makers and education leaders hold in their LDS.</p>
          <p>That’s why we’re launching the Education Data Collaborative. Working together, we can build tools that help us use data to improve the design, efficacy, and impact of programs and interventions and find new  way to work with public education systems to achieve great things for kids.</p>
        </div>
      </section>
    </div>
    <div>
      <section className={problemSolutionSection}>
        <div className={problemSolution}>
          <h2>A New Kind of Partnership</h2>
          <div className={quoteStyle}>
            <PullQuote
              quoteText="Public data can help us understand and solve problems. 
              It can help us see new opportunities and improve the way we govern. 
              Public data, used responsibly, can empower. — Stefaan Verhulst Co-Founder, The GovLab"
            />
          </div>
          <p>Data collaboratives, data trusts, and other kinds of multi-sector data partnerships are among the most important civic innovations to emerge in the past decade. The Civic Software Foundation, formerly Hack Oregon, was an early “lab” in this new civic tech space. Since 2013, we’ve worked with hundreds of technology pioneers and dozens of city, county, and state agencies in the Pacific Northwest. We have cultivated a rich network of volunteers⁠– data scientists, programmers, security experts, designers, and analysts⁠ – and honed experience in a range of domains, in particular education.</p>
          <p>As a direct result of our experience, we have realized the need to establish the Education Data Collaborative as an ongoing partnership.</p>
          <p>The Collaborative includes:</p>
          <ul>
            <li><em>Data Stewards</em> ⁠- individuals empowered to facilitate data collaboratives</li>
            <li><em>Domain Experts</em> ⁠- leaders in education systems, data, policy, and guiding federal and state legislation (ESSA, FERPA, etc.)</li>
            <li><em>Technology Professionals</em> - data scientists, programmers, data visualization experts and designers</li>
            <li><em>Civic Tech Leaders</em> - experienced innovators and thought leaders committed to increasing access to and use of high quality public data</li>
            <li><em>Users</em> - ecosystem partners and citizens seeking to contribute to and make better use of existing data to benefit the people they serve.</li>
          </ul>
          <p>Together, partners in the Collaborative will make meaning of the data, identify shared needs, build tools, and grow the community of stewards, stakeholders, and users who can deliver for kids.</p>
        </div>
      </section>
    </div>
    <div>
      <section className={problemSolutionSection}>
        <div className={problemSolution}>
          <h2>Outcomes and Impact</h2>
          <p>We fully anticipate developing tools that stakeholders can use to make decisions that impact the lives of students and their families. </p>
          <p>Our tools and methods are open source and scalable – they can be adopted and adapted in different environments for similar or adjacent data. Our approach promotes civic data literacy, shared data stewardship, and stakeholder participation – essential tools for solving social problems.</p>
          <p>Taken together, these advance evidence-based policy and practice, promise better programs today, and radically improve outcomes over time.</p>
        </div>
      </section>
    </div>
    <section className={footerSection}>
      <h2 className={listSubTitle}>WANT TO CHANGE THE WORLD THROUGH DATA? JOIN US.</h2>
    </section>
  </PageLayout>
);

export default TheCollaborative;
