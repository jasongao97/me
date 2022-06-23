import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Gallery = ({ photos }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4" id="gallery">
      {photos.map((photo, index) => {
        const image = photo.node.childImageSharp.gatsbyImageData;
        return (
          <div
            className="aspect-[4/3] rounded overflow-hidden flex justify-center items-center"
            key={index}
          >
            <Zoom
              wrapStyle={{
                objectFit: "cover",
              }}
            >
              <GatsbyImage image={image} className="h-full" alt="Mirror" />
            </Zoom>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
