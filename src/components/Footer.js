import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FiInstagram, FiDribbble, FiGithub } from "react-icons/fi";

const ExLink = ({ link, children }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="p-1 transition-opacity opacity-60 hover:opacity-100"
    >
      {children}
    </a>
  );
};

const Footer = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  );

  return (
    <footer className="container py-6 flex items-center justify-center space-x-3">
      <span className="text-gray-500">
        © {new Date().getFullYear()} {site.siteMetadata.author}.{" "}
        <a
          rel="license"
          href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
          className="hover:underline inline-block"
        >
          Some rights reserved.
        </a>
      </span>

      <div className="flex items-center space-x-1 text-lg text-gray-600">
        <ExLink link="https://www.instagram.com/jasongao97">
          <FiInstagram title="Instagram" />
        </ExLink>

        <ExLink link="https://dribbble.com/jasongao97">
          <FiDribbble title="Dribbble" />
        </ExLink>

        <ExLink link="https://github.com/jasongao97">
          <FiGithub title="Github" />
        </ExLink>
      </div>
    </footer>
  );
};

export default Footer;
