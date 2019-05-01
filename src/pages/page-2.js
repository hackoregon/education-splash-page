import React from "react";
import { Link } from "gatsby";

import { PageLayout } from "@hackoregon/component-library";
import SEO from "../components/seo";

import "@hackoregon/component-library/assets/global.styles.css";

const SecondPage = () => (
  <PageLayout
    heroTitle="Civic and Gatsby Starter"
    heroSubtitle="They play nice!"
  >
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </PageLayout>
);

export default SecondPage;
