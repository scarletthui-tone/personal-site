import { graphql, useStaticQuery } from 'gatsby';

export const useProjects = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PROJECT_QUERY {
      allMarkdownRemark(
        filter: {frontmatter: {templateKey: {eq: "project-page"}}},
        sort: {fields: frontmatter___order, order: DESC}
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              type
              name
              company
              developmentTime
              desc
              techStack
              weight
              url
              coverImage {
                effect
                coverColor
                logo {
                  width
                  alt
                  image {
                    publicURL
                    extension
                    childImageSharp {
                      fluid(maxWidth: 2048, quality: 90) {
                        ...GatsbyImageSharpFluid_noBase64
                      }
                    }
                  }
                }
                imageArr {
                  alt
                  image {
                    publicURL
                    extension
                    childImageSharp {
                      fluid(maxWidth: 2048, quality: 90) {
                        ...GatsbyImageSharpFluid_noBase64
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return allMarkdownRemark.edges.map(edge => (
    {
      id: edge.node.id,
      slug: edge.node.slug,
      ...edge.node.frontmatter,
    }
  ));
};
