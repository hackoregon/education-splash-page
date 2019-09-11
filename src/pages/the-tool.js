import React from "react";
import { cx, css } from "emotion";
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

const TheTool = () => (
  <PageLayout>
    <Logo type="civicStandard" />
    <aside className={listText}>Introduces...</aside>
    <section>
      <h1 className={titleStyle}>The Education Data Collaborative</h1>
      <div className={quoteStyle}>
        <PullQuote
          quoteText="We believe in the power of data, value of collaboration, and the
            potential of people. We think we can do better for today’s students.
            That’s why we’re launching a new venture — the Education Data
            Collaborative."
        />
      </div>
      <div className={cx(
        buttonContainerStatic,
        css`
        @media (max-width: 640px) {
          text-align: center; 
          margin-left: 0;
        }
        `
      )}>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdoFKzZyxCAXR7o66nPIoHHcPkIKj7GJDf3j7josZEXq5h3NQ/viewform">
          <button
            className={cx(buttonStyle, buttonDropShadow)}
          >{`Join Us`}</button>
        </a>
      </div>
    </section>
    <div>
      <section className={problemSolutionSection}>
        <div className={problemSolution}>
          <h2>The Problem</h2>
          <p>We all want better educational opportunities for kids.</p>
          <p>
            Knowing where to begin requires good data about what’s working,
            what’s not, and why. That data can be hard to find, and even harder
            to understand.
          </p>
        </div>
      </section>
    </div>
    <div>
      <section className={problemSolutionSection}>
        <div className={problemSolution}>
          <h2>The Solution</h2>
          <h3 className={subtitleStyle}>Data. Technology. People.</h3>
          <p>
            Our team of data scientists, software engineers, and user experience
            designers partner with domain experts to build open source,
            scaleable, interactive tools for educators and their allies, so we
            can work together on solutions to our most important community
            challenges.
          </p>
          <p>That’s what the Education Data Collaborative is all about.</p>
        </div>
      </section>
    </div>
    <div>
      <section className={problemSolutionSection}>
        <div className={problemSolution}>
          <div className={embed}>
            <iframe
              src="//civicplatform.org/cards/is-there-evidence-the-program-worked/embed/visualization"
              frameborder="0"
              allowfullscreen
            />
          </div>
        </div>
      </section>
    </div>
    <section className={footerSection}>
      <div
        className={cx(
          buttonContainerStatic,
          css`
            margin-left: 0;
          `
        )}
      >
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdoFKzZyxCAXR7o66nPIoHHcPkIKj7GJDf3j7josZEXq5h3NQ/viewform">
          <button
            className={cx(buttonStyle, buttonDropShadow)}
          >{`Sign Up`}</button>
        </a>
      </div>
      <h2 className={listSubTitle}>Questions or comments?</h2>
      <a
        className={cx(subtitleStyle, linkStyle)}
        href={`mailto:hello@civicsoftwarefoundation.org`}
      >
        hello@civicsoftwarefoundation.org
      </a>
    </section>
  </PageLayout>
);

export default TheTool;

