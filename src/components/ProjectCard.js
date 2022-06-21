import * as React from "react";
import { Link } from "gatsby";
import { FiArrowRight } from "react-icons/fi";

const Project = ({
  reverse,
  path,
  title,
  description,
  color,
  bgColor,
  tags,
  children,
}) => {
  return (
    <Link className="group hover-shadow select-none" to={path}>
      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } justify-between md:aspect-[2.4] lg:aspect-[3] overflow-hidden rounded border`}
        style={{
          backgroundColor: bgColor || "#fff",
        }}
      >
        <div className="py-5 px-6 md:py-6 md:px-8 lg:py-7 lg:px-9 flex min-w-min flex-col justify-between text-gray-900">
          <div>
            <h2 className="text-xl font-extrabold group-hover:underline">
              {title}
            </h2>
            <p className="mt-2 text-base text-gray-700">{description}</p>
            <p className="hidden md:flex items-center mt-2 space-x-0.5 text-sm text-gray-500">
              <span>Read more</span>
              <FiArrowRight className="opacity-[0.8] scale-90" />
            </p>
          </div>
          <div className="mt-4 flex flex-wrap-reverse gap-2 md:gap-3">
            {tags.map((tag) => {
              return (
                <span
                  key={tag}
                  style={{
                    background: color,
                  }}
                  className="text-white font-semibold text-xs py-1 px-2 rounded"
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
        {children}
      </div>
    </Link>
  );
};

export default Project;
