import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Seo from "@components/SEO";
import Layout from "@layouts/BaseLayout";

import repulsorVideo from "@assets/videos/repulsor.mp4";
import sensorBattleVideo from "@assets/videos/sensor-battle.mp4";
import nightAtSchoolVideo from "@assets/videos/chair-dance.mp4";

const Card = ({ path, title, year, tags = [], children }) => {
  return (
    <Link to={path}>
      <div className="group flex flex-col bg-white border box-border rounded hover-shadow">
        <div
          className="aspect-[2] rounded-t overflow-hidden"
          style={{ transform: "translateZ(0)" }}
        >
          {children}
        </div>
        <div className="py-4 px-5">
          <h2 className="font-bold flex justify-between items-center">
            <span className=" group-hover:underline">{title}</span>
            <span className="text-sm text-gray-500">{year}</span>
          </h2>
          <p className="mt-1 text-sm text-gray-500">{tags.join(" / ")}</p>
        </div>
      </div>
    </Link>
  );
};

const ProjectsPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Projects" />
      <div className="container py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          <Card
            path="/time-globe/"
            title="Time Globe"
            year="2021"
            tags={["Fabrication", "Product Design"]}
          >
            <GatsbyImage
              image={data.timeGlobe.childImageSharp.gatsbyImageData}
              className="h-full object-cover"
              alt="Mirror"
            />
          </Card>

          <Card
            path="/solaroid/"
            title="Solaroid"
            year="2021"
            tags={["Pixel", "Energy"]}
          >
            <GatsbyImage
              image={data.solaroid.childImageSharp.gatsbyImageData}
              className="h-full object-cover"
              alt="Mirror"
            />
          </Card>

          <Card
            path="/night-at-school/"
            title="Night At School"
            year="2021"
            tags={["3D Animation"]}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full object-cover"
            >
              <source src={nightAtSchoolVideo} type="video/mp4" />
            </video>
          </Card>

          <Card
            path="/sensor-battle/"
            title="Sensor Battle"
            year="2020"
            tags={["Installation", "Game"]}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full object-cover"
            >
              <source src={sensorBattleVideo} type="video/mp4" />
            </video>
          </Card>

          <Card
            path="/iron-mans-repulsor/"
            title="Iron Man's Repulsor"
            year="2019"
            tags={["E-textile"]}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full object-cover"
            >
              <source src={repulsorVideo} type="video/mp4" />
            </video>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    solaroid: file(relativePath: { eq: "solaroid/solaroid.jpeg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, aspectRatio: 1.5)
      }
    }

    timeGlobe: file(relativePath: { eq: "time-globe/final.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, aspectRatio: 1.5)
      }
    }
  }
`;

export default ProjectsPage;
