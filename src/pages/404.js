import React from "react";

import { PageLayout } from "@hackoregon/component-library";
import SEO from "../components/seo";

import "@hackoregon/component-library/assets/global.styles.css";

const NotFoundPage = () => (
  <PageLayout
    heroTitle="Civic and Gatsby Starter"
    heroSubtitle="They play nice!"
  >
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </PageLayout>
);

export default NotFoundPage;
