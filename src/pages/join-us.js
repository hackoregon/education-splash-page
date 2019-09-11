import React from "react";
import { Link } from "gatsby";
import { cx, css } from "emotion";

import PageLayout from "../components/pagelayout";

const typeform = css`
  height: 500px;
  @media (max-width: 640px) {
    height: 460px;
  }
`;

const JoinUs = () => (
  <PageLayout>
    {/* <Link to="/">Go back to the homepage</Link> */}
    <iframe className={typeform} id="typeform-full" width="100%" frameborder="0" src="https://ven386248.typeform.com/to/xniwKJ"></iframe> 
  </PageLayout>
);

export default JoinUs;
