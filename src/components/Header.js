import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { FiExternalLink } from "react-icons/fi";

import Hamburger from "@components/HamburgerButton";

const linkClass =
  "relative px-1 py-1 flex items-center space-x-1 before:absolute before:inset-0 before:w-4 before:mx-auto before:border-t-2 before:border-gray-600 before:opacity-0 before:transition-opacity hover:before:opacity-40 focus:before:opacity-40";

const Header = ({ overlayOpen, onToggleOverlay }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            navigationLinks {
              label
              path
            }
          }
        }
      }
    `
  );

  return (
    <header className="z-20 bg-white border-b">
      <nav className="container py-6 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-logo font-semibold text-gray-800">JASON GAO</h1>
        </Link>
        <ul className="hidden sm:flex space-x-6 md:space-x-10 text-lg text-gray-600">
          {data.site.siteMetadata.navigationLinks.map(({ label, path }) => {
            return (
              <li key={label}>
                {path.match(/^https?:\/\/[^\s$.?#].[^\s]*$/) ? (
                  <a
                    href={path}
                    target="_blank"
                    rel="noreferrer"
                    className={linkClass}
                  >
                    <span>{label}</span>
                    <FiExternalLink className="text-sm text-gray-500" />
                  </a>
                ) : (
                  <Link
                    to={path}
                    className={linkClass}
                    activeClassName="before:opacity-100 hover:before:opacity-100 focus:before:opacity-100"
                  >
                    <span>{label}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        <button
          className="sm:hidden"
          onClick={onToggleOverlay}
          aria-label={overlayOpen ? "Close Menu" : "Open Menu"}
        >
          <Hamburger active={overlayOpen} />
        </button>
      </nav>
    </header>
  );
};

export default Header;
