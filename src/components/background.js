import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { css } from "emotion";

import BackgroundImage from "gatsby-background-image";

const backgroundStyle = css`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  min-height: 100%;
  background-attachment: fixed;
`;

const BackgroundSection = ({children}) => (
  <StaticQuery
    query={graphql`
      query {
        backgroundTest: file(relativePath: { eq: "seafoam.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.backgroundTest.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag="section"
          className={backgroundStyle}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          {children}
        </BackgroundImage>
      );
    }}
  />
);

export default BackgroundSection;
