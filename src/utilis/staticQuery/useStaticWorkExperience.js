import { graphql, useStaticQuery } from 'gatsby';

export const useStaticWorkExperience = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query WORK_QUERY {
      allMarkdownRemark(
        filter: {frontmatter: {type: {eq: "work-experience"}}},
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
              company
              period
              jobTitle
              desc
              companyColor
            }
          }
        }
      }
    }
  `);

  return allMarkdownRemark.edges.map(edge => (
    {
      id: edge.node.id,
      ...edge.node.frontmatter,
    }
  ));
};
