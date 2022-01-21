import * as React from "react";

const TableOfContents = ({ toc }) => {
  return (
    <div className="hidden md:block min-w-[16rem] shrink-0 sticky top-8 p-6 rounded border bg-white mr-10">
      <ul className="space-y-4">
        {toc.items.map((item) => {
          return item.items ? (
            <li key={item.title}>
              <p className="font-semibold">
                <a className="hover:underline" href={item.url}>
                  {item.title}
                </a>
              </p>
              <ul className="mt-4 space-y-2">
                {item.items.map((item) => {
                  return (
                    <li
                      key={item.title}
                      className="list-[circle] list-inside text-sm"
                    >
                      <a className="hover:underline" href={item.url}>
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
          ) : (
            <li key={item.title} className="font-semibold">
              <a className="hover:underline" href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TableOfContents;
