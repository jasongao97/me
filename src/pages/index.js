import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { FiArrowRight } from "react-icons/fi";

import Seo from "@components/SEO";
import Layout from "@layouts/BaseLayout";
import ProjectCard from "@components/ProjectCard";

const IndexPage = ({ data }) => {
  const projects = data.allFile.edges.map((edge) => {
    const { slug, frontmatter } = edge.node.childMdx;
    return { frontmatter, path: `/${slug.replace("/", "")}/` };
  });
  const natianyue = projects[1];

  return (
    <Layout>
      <Seo />
      <div className="container py-16">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl 2xl:text-4xl flex flex-col-reverse md:block leading-relaxed text-gray-800 font-black w-full md:w-auto whitespace-pre-line">
            Hi, my name is Jason{" "}
            <span role="img" aria-label="Waving Hand" className="inline-block">
              👋
            </span>
          </h1>
          <p className="mt-3 md:mt-5 text-xl md:text-xl leading-relaxed text-gray-600">
            I'm a <b>Creative Technologist</b> based in Brooklyn, NY.
          </p>
        </div>

        {/* Projects */}

        <div className="grid mt-16 gap-y-10">
          {/* Hanger */}
          <ProjectCard
            reverse={true}
            path={projects[0].path}
            title={projects[0].frontmatter.title}
            description={projects[0].frontmatter.description}
            tags={["Absurd Hotel", "Fabrication", "CNC", "Mechanics"]}
            color="#46bdd8"
          >
            <div className="py-6 px-8 md:max-w-[65%] md:-translate-x-2 md:-rotate-[25deg] self-center">
              <GatsbyImage
                image={
                  projects[0].frontmatter.thumbnail.image.childImageSharp
                    .gatsbyImageData
                }
                className="transition-transform duration-300 transform motion-safe:md:group-hover:scale-[1.01] -translate-x-1 motion-safe:md:group-hover:translate-x-0"
                alt={projects[0].frontmatter.thumbnail.alt}
              />
            </div>
          </ProjectCard>

          {/* Natianyue */}
          <ProjectCard
            path={natianyue.path}
            title={natianyue.frontmatter.title}
            description={natianyue.frontmatter.description}
            tags={["Web Development", "UI/UX", "100,000+ Users"]}
            color="#3abb6a"
          >
            <div className="py-6 px-8 md:py-12 md:px-16 md:max-w-[75%]">
              <GatsbyImage
                image={
                  natianyue.frontmatter.thumbnail.image.childImageSharp
                    .gatsbyImageData
                }
                className="drop-shadow-lg transition-transform duration-300 transform motion-safe:md:group-hover:scale-[1.02] motion-safe:md:group-hover:rotate-1"
                alt={natianyue.frontmatter.thumbnail.alt}
              />
            </div>
          </ProjectCard>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <div className="inline-flex rounded-md">
            <Link
              to="/projects/"
              className="inline-flex items-center justify-center px-5 py-3 border font-medium rounded-md text-gray-600 bg-white hover:bg-gray-50"
            >
              <span>More projects</span>
              <FiArrowRight className="ml-1 scale-90" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query AllProjects {
    allFile(
      filter: {
        sourceInstanceName: { eq: "projects" }
        extension: { regex: "/md/" }
      }
      sort: { fields: childMdx___frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          childMdx {
            slug
            frontmatter {
              title
              description
              date(formatString: "YYYY")
              thumbnail {
                image {
                  childImageSharp {
                    gatsbyImageData(placeholder: TRACED_SVG)
                  }
                }
                alt
              }
              categories
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
