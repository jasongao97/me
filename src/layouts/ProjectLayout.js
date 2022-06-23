import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { FiCalendar, FiBox, FiUsers, FiActivity } from "react-icons/fi";

import Seo from "@components/SEO";
import Gallery from "@components/Gallery";
import Layout from "@layouts/BaseLayout";
import TableOfContents from "@components/TableOfContents";

const ProjectLayout = ({ mdx, photos }) => {
  const {
    body,
    tableOfContents,
    frontmatter: {
      title,
      date,
      startDate,
      description,
      categories,
      team,
      role,
      illustration,
    },
  } = mdx;

  return (
    <Layout>
      <Seo title={title} />
      <div className="container py-6">
        <section className="flex flex-col md:flex-row gap-y-10 gap-x-12 justify-between items-center mt-4 mb-16">
          <div className="self-stretch flex-1 flex flex-col justify-between py-2">
            <div>
              <h1 className="text-5xl font-black text-gray-800">{title}</h1>
              <p className="text-xl text-gray-500 mt-3">{description}</p>
            </div>

            <div className="flex flex-col justify-between space-y-4 text-gray-800 mt-8">
              <div className="space-y-1">
                <p className="flex items-center text-base text-gray-500">
                  <FiCalendar className="mr-1" />
                  Timeline
                </p>
                <p>
                  {startDate && `${startDate} - `}
                  {date}
                </p>
              </div>
              <div className="space-y-1">
                <p className="flex items-center text-base text-gray-500">
                  <FiBox className="mr-1" />
                  Categories
                </p>
                <p>{categories.join(", ")}</p>
              </div>
              {team && (
                <div className="space-y-1">
                  <p className="flex items-center text-base text-gray-500">
                    <FiUsers className="mr-1" />
                    Teammates
                  </p>
                  <p>{team}</p>
                </div>
              )}
              {role && (
                <div className="space-y-1">
                  <p className="flex items-center text-base text-gray-500">
                    <FiActivity className="mr-1" />
                    My Role
                  </p>
                  <p>{role}</p>
                </div>
              )}
            </div>
          </div>
          <GatsbyImage
            image={illustration.image.childImageSharp.gatsbyImageData}
            alt={illustration.alt}
            className="flex-1 rounded drop-shadow-lg overflow-hidden"
            style={{ transform: "translateZ(0)" }}
          />
        </section>

        {/* main */}
        <div className="w-full flex justify-between items-start">
          <TableOfContents toc={tableOfContents} />
          <div className="prose prose-blue max-w-none">
            <MDXRenderer>{body}</MDXRenderer>
            {photos.length > 0 && <Gallery photos={photos} />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectLayout;
