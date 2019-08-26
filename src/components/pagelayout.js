import React from "react";
import { css } from "emotion";

import {
  Header,
} from "@hackoregon/component-library";

import BackgroundSection from "../components/background";

const headerShadow = css`
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.2);
`;

const initialContentContainer = css`
  padding: 0px 6%;
  margin: 40px auto 0px auto;
  max-width: 900px;
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
            <Header
            title="Education Data Collaborative"
            menu={routes}
            mainProjectColor="#4D6764"
            />
        </div>
        <div className={initialContentContainer}>
            {children}
        </div>
    </BackgroundSection>
)

export default PageLayout;