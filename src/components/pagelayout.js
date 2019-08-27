import React from "react";
import { css, cx } from "emotion";

// Need to fix Header to use
// import {
//   Header,
// } from "@hackoregon/component-library";

import BackgroundSection from "../components/background";
import SimplestHeader from "./simplestheader";

// For SimplestHeader
const maxWidth = "700px";
const minWidth = "701px";
const maxHeight = "600px";

const headerMargin = css`
  @media (max-width: ${maxWidth}) {
    margin-top: 54px;
    padding-top: 54px;
  }
  @media (min-width: ${minWidth}) and (min-height: ${maxHeight}) {
    margin-top: 72px;
    padding-top: 72px;
  }
`;

const headerShadow = css`
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.2);
`;

const initialContentContainer = css`
  padding: 0px 6%;
  margin: 40px auto 0px auto;
  max-width: 900px;
  min-height: 100vh;
`;

const routes = [
  { name: "The Collaborative", path: "/the-collaborative" },
  { name: "Our Process", path: "/our-process" },
  { name: "Demo Day 2019", path: "/demo-day-2019" },
  { name: "Join Us", path: "/join-us" }
];

const PageLayout = ({ children }) => (
  <BackgroundSection>
    <div className={headerShadow}>
      <SimplestHeader
        title="Education Data Collaborative"
        menu={routes}
        mainProjectColor="#4D6764"
      />
    </div>
    <div className={cx(initialContentContainer, headerMargin)}>{children}</div>
  </BackgroundSection>
);

export default PageLayout;
