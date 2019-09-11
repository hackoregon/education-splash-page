import React from "react";
import { cx, css } from "emotion";
import { Link } from "gatsby";
import {
  Logo,
  PullQuote
} from "@hackoregon/component-library";

import "@hackoregon/component-library/assets/global.styles.css";
import PageLayout from "../components/pagelayout";
import Image from "../components/image";

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

const OurProcess = () => (
  <PageLayout>
    <Logo type="civicStandard" />
    <aside className={listText}>Introduces...</aside>
    <section>
      <h1 className={titleStyle}>Working Backwards from Better Educational Outcomes</h1>
      <h2>A THEORY OF CHANGE</h2>
    </section>
    <div>
      <section className={problemSolutionSection}>
        <div className={problemSolution}>
          <Image fileName="theory-of-change.png"></Image>
          <p>Working with our education subject matter expert, our team of data scientists, engineers and user experience designers used a Theory of Change template to help us focus and clarify our team’s strategy. Creating this Theory of Change helped us realize the need for an Education Data Collaborative to guide the design of tools, ensure high-value data use, and provide a forum for educators and allies to work together on using data to achieve shared goals. </p>
        </div>
      </section>
    </div>
  </PageLayout>
);

export default OurProcess;
