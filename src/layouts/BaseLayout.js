import * as React from "react";
import { MDXProvider } from "@mdx-js/react";

import Header from "@components/Header";
import Overlay from "@components/Overlay";
import Footer from "@components/Footer";
import { Vimeo, Video } from "@components/Video";

const Layout = ({ children }) => {
  const [overlayOpen, setOverlayOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col pattern-texture">
      <Header
        overlayOpen={overlayOpen}
        onToggleOverlay={() => setOverlayOpen(!overlayOpen)}
      />
      <Overlay open={overlayOpen} />
      <main
        className="grow flex flex-col items-center justify-center"
        aria-hidden={overlayOpen}
      >
        <MDXProvider components={{ Vimeo, Video }}>{children}</MDXProvider>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
