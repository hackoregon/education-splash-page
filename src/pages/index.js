import React from "react";
import { Link } from "gatsby";
import {
  PageLayout,
  BarChart,
  CivicStoryCard
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

const IndexPage = () => (
  <PageLayout
    heroTitle="Civic and Gatsby Starter"
    heroSubtitle="They play nice!"
  >
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
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
    <Link to="/page-2/">Go to page 2</Link>
  </PageLayout>
);

export default IndexPage;
