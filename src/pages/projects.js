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
      <div className="flex flex-col p-4 bg-white border rounded hover-shadow">
        <div className="aspect-[3/2]">{children}</div>
        <h2 className="mt-3 font-bold flex justify-between items-center">
          <span>{title}</span>
          <span className="text-sm text-gray-500">{year}</span>
        </h2>
        <p className="mt-1 text-sm text-gray-500">{tags.join(" / ")}</p>
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
              className="h-full object-cover rounded"
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
              className="h-full object-cover rounded"
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
              className="h-full object-cover rounded"
            >
              <source src={sensorBattleVideo} type="video/mp4" />
            </video>
          </Card>

          <Card
            path="/music-meal/"
            title="Music Meal"
            year="2019"
            tags={["E-textile", "Music"]}
          >
            <GatsbyImage
              image={data.musicMeal.childImageSharp.gatsbyImageData}
              className="h-full object-cover rounded"
              alt="Mirror"
            />
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
              className="h-full object-cover rounded"
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
    musicMeal: file(relativePath: { eq: "music-meal/exhibition.jpeg" }) {
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
