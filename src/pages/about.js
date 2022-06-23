import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { FiCode, FiMonitor, FiTool } from "react-icons/fi";

import Seo from "@components/SEO";
import Layout from "@layouts/BaseLayout";

const ListItem = ({ icon, children }) => {
  return (
    <li className="flex items-start space-x-3 text-gray-600 leading-8">
      <span className="my-2 text-gray-500">{icon}</span>
      <p>{children}</p>
    </li>
  );
};

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="About" />
      <section className="container py-6 sm:flex sm:items-start gap-10">
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          className="flex-1 overflow-hidden rounded shadow-lg mb-10"
          style={{ transform: "translateZ(0)" }}
          alt="photo"
        />

        <div className="flex-[2]">
          <div className="space-y-2">
            <h1 className="text-3xl mb-4 leading-snug font-black text-gray-800">
              Designer / Maker /<br></br> Creative Technologist
            </h1>
            <p className="leading-8 text-gray-600">
              Hi, I'm Yifei Gao ( 高亦非 ) and you can call me Jason.
            </p>
            <p className="leading-8 text-gray-600">
              I'm currently a second-year graduate student at{" "}
              <a
                className="link-blue"
                target="_blank"
                rel="noreferrer"
                href="https://tisch.nyu.edu/itp"
              >
                NYU ITP
              </a>{" "}
              where I focus on making playful and fun stuff. Before that, I
              received my bachelor's degree in Computer Science from{" "}
              <a
                className="link-blue"
                target="_blank"
                rel="noreferrer"
                href="https://en.ustb.edu.cn/"
              >
                USTB
              </a>
              .
            </p>
            <p className="leading-8 text-gray-600">
              Since 2017, I have collaborated with Shawn Wang in creating
              several WeChat mini-applications including the{" "}
              <Link className="link-blue" to="/natianyue/">
                Natianyue
              </Link>
              . We aimed to solve daily problems from deciding lunch meals to
              arranging time for group activities.
            </p>
            <p className="leading-9 text-gray-600">
              Being professionally trained as an engineer and self-taught as a
              designer, I build fun product & experience that brings happiness
              to daily life.
            </p>
          </div>

          <a
            href="/YifeiGao_Jun22.pdf"
            className="inline-block mt-4 px-5 py-3 border font-medium rounded-md text-gray-600 bg-white hover:bg-gray-50"
          >
            Resume
          </a>

          <h2 className="mt-8 text-xl font-semibold text-gray-800">Skills</h2>
          <ul className="list-none space-y-1 mt-4">
            <ListItem icon={<FiMonitor />}>
              UI/UX Design / Prototyping / Adobe Creative Suite / Blender
            </ListItem>
            <ListItem icon={<FiCode />}>
              Front-end Web / React / Node.js / Arduino / C++ / Processing
            </ListItem>
            <ListItem icon={<FiTool />}>
              CAD + CAM in Fusion 360 / Woodworking / Soldering
            </ListItem>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "self.jpeg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
