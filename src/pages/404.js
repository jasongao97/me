import * as React from "react";

import Seo from "@components/SEO";
import Layout from "@layouts/BaseLayout";

const NotFoundPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Not found" />
      <div className="container py-6">
        <h1 className="text-4xl md:text-5xl 2xl:text-6xl flex flex-col-reverse md:block leading-relaxed text-gray-800 font-black w-full md:text-center whitespace-pre-line">
          Page not found
        </h1>
        <p className="mt-8 text-xl md:text-xl leading-relaxed text-gray-600 w-full md:text-center">
          Sorry, we couldn’t find what you were looking for.
        </p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
