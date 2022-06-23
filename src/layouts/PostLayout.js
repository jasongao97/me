import React from "react";
import { graphql } from "gatsby";

import ProjectLayout from "@layouts/ProjectLayout";
import ExperimentLayout from "@layouts/ExperimentLayout";

const PostLayout = ({ data }) => {
  // handle projects & experiments
  return data.mdx.parent.sourceInstanceName === "projects" ? (
    <ProjectLayout mdx={data.mdx} photos={data.photos.edges} />
  ) : (
    <ExperimentLayout mdx={data.mdx} photos={data.photos.edges} />
  );
};

export const query = graphql`
  query PostBySlug($id: String!, $galleryDir: String!) {
    photos: allFile(
      filter: { relativeDirectory: { eq: $galleryDir } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
    }
    mdx(id: { eq: $id }) {
      parent {
        ... on File {
          sourceInstanceName
        }
      }
      slug
      body
      tableOfContents
      frontmatter {
        date(formatString: "MMM, YYYY")
        startDate(formatString: "MMM, YYYY")
        title
        categories
        role
        team
        description
        illustration {
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
          alt
        }
      }
    }
  }
`;

export default PostLayout;
