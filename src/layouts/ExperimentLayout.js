import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Seo from "@components/SEO";
import Layout from "@layouts/BaseLayout";

const ExperimentLayout = ({ mdx }) => {
  const {
    body,
    frontmatter: { title, date, description },
  } = mdx;

  return (
    <Layout>
      <Seo title={title} />
      <div className="container py-6">
        <section className="py-8 flex flex-col md:items-center">
          <h1 className="text-5xl font-black text-gray-800">{title}</h1>
          <p className="text-lg font-bold text-gray-500 mt-4">{date}</p>
          <p className="text-lg text-gray-500 mt-4">{description}</p>
        </section>
        <div className="mx-auto prose prose-blue py-8">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  );
};

export default ExperimentLayout;
