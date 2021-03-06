import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

const IndexPage = ({ data }) => {
  const {
    hero, experience, email, linkedIn,
  } = data.markdownRemark.frontmatter;
  return (
    <>
      <SEO pageTitle="Home" />
      <Hero {...hero} />
      <Projects />
      <Experience {...experience} />
      <Contact email={email} linkedIn={linkedIn} />
    </>
  );
};

export default IndexPage;

// ********************************* Data graphql *********************************
export const pageQuery = graphql`
  query HomePageWithId($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        subheading
        description
        hero {
          name
          title
          desc
          typerArr
        }
        experience {
          desc
        }
      }
    }
  }
`;
