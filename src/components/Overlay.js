import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { FiExternalLink } from "react-icons/fi";

const Overlay = ({ open }) => {
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

  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    let timer = setTimeout(
      () => {
        setDisplay(open);
      },
      open ? 0 : 300
    );
    if (open) {
      document.ontouchmove = function (e) {
        e.preventDefault();
      };
    } else {
      document.ontouchmove = function (e) {
        return true;
      };
    }

    return () => {
      clearTimeout(timer);
    };
  }, [open]);

  return (
    <div
      className={`fixed sm:hidden inset-0 h-0 z-10 overflow-hidden bg-white/95 transition-opacity flex flex-col justify-center ${
        open ? "opacity-100" : "opacity-0"
      } ${display && "min-h-full backdrop-blur"}`}
      aria-hidden={!open}
    >
      <ul className="px-6 space-y-8 text-3xl text-gray-600">
        {/* <li>
          <Link
            to="/"
            className="block"
            activeClassName="text-gray-800 font-semibold"
          >
            <span>Home</span>
          </Link>
        </li> */}
        {data.site.siteMetadata.navigationLinks.map(({ label, path }) => {
          return (
            <li key={label}>
              {path.match(/^https?:\/\/[^\s$.?#].[^\s]*$/) ? (
                <a
                  href={path}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center"
                >
                  <span>{label}</span>
                  <FiExternalLink className="ml-2 text-2xl text-gray-600" />
                </a>
              ) : (
                <Link
                  to={path}
                  className="block"
                  activeClassName="text-gray-800 font-semibold"
                >
                  <span>{label}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Overlay;
