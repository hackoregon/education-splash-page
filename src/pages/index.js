import React from "react";
import { Link } from "gatsby";
import { cx, css } from "emotion";
import {
  PageLayout,
  BarChart,
  CivicStoryCard,
  Logo,
  Nav
} from "@hackoregon/component-library";

import "@hackoregon/component-library/assets/global.styles.css";

import Image from "../components/image";
import SEO from "../components/seo";

const sampleSimpleData = [
  { x: 5, y: 20 },
  { x: 10, y: 30 },
  { x: 15, y: 50 },
  { x: 20, y: 40 },
  { x: 25, y: 40 }
];

const logoWrapper = css`
  position: relative;
  margin: 0;
  padding: 30px 0px 20px;
  width: 160px;
`;

const buttonContainerStatic = css`
  padding-top: 40px;
  align-self: center;
`;

const titleStyle = css`
  font-size: 50px;
  line-height: 1.2;
  font-family: "Rubik", sans-serif;
  letter-spacing: -1px;
  @media (max-width: 640px) {
    font-size: 36px;
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

const initialContentContainer = css`
  padding: 0px 6%;
  margin: 0 auto;
  max-width: 900px;
`;

const buttonStyle = css`
  border: 2px solid #ef495c;
  padding: 10px 20px;
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  color: #ef495c;
  background-color: transparent;
  margin: 10px 0px 40px;

  :hover {
    cursor: pointer;
  }
`;

const buttonDropShadow = css`
  background-color: white;
  border-radius: 2px;
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.2);
`;

const listTitle = css`
  display: block;
  font-family: "Rubik", sans-serif;
  font-size: 35px;
  margin: 40px 0;
  text-align: center;
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

const IndexPage = () => (
  <div className={initialContentContainer}>
    <Nav />
    {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <p>
      No tweaks needed with{" "}
      <a href="https://www.npmjs.com/package/@hackoregon/component-library">
        @hackoregon/component-library
      </a>{" "}
      version 3.0.0! You can even import the global styles and get all the
      styling.
    </p>
    <p>Now go build something great.</p>
    <CivicStoryCard title="Look at this story card!">
      <BarChart
        data={sampleSimpleData}
        title="Look at this chart!"
        subtitle="It doesn't mean anything, but it works!"
      />
    </CivicStoryCard>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}

    <div className={logoWrapper}>
      <Logo />
    </div>
    <p className={listText}>Introduces...</p>
    <div className={titleStyle}>Patterns and Pathways:</div>
    <div className={subtitleStyle}>
      Visualizing Student Outcomes Across Education
    </div>
    <div className={listSubTitle}>Join us</div>
    <div className={buttonContainerStatic}>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdoFKzZyxCAXR7o66nPIoHHcPkIKj7GJDf3j7josZEXq5h3NQ/viewform">
        <button
          className={cx(buttonStyle, buttonDropShadow)}
        >{`Sign Up`}</button>
      </a>
    </div>
  </div>
);

export default IndexPage;
