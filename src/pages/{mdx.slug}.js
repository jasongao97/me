import React from "react";
import { graphql } from "gatsby";

import ProjectLayout from "@layouts/ProjectLayout";
import ExperimentLayout from "@layouts/ExperimentLayout";

const PostPage = ({ data }) => {
  return data.mdx.parent.sourceInstanceName === "projects" ? (
    <ProjectLayout mdx={data.mdx} />
  ) : (
    <ExperimentLayout mdx={data.mdx} />
  );
};

export const query = graphql`
  query PostBySlug($slug: String) {
    mdx(slug: { eq: $slug }) {
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
              gatsbyImageData(layout: CONSTRAINED, quality: 80)
            }
          }
          alt
        }
      }
    }
  }
`;

export default PostPage;
