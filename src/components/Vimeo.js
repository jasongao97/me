import * as React from "react";

const Dot = ({ style }) => {
  return (
    <span className="h-5 w-5 rounded-full bg-gray-500" style={style}></span>
  );
};

const Vimeo = ({ id, caption }) => {
  const [display, setDisplay] = React.useState(false);

  return (
    <figure className="py-4">
      <div className="relative rounded overflow-hidden shadow-lg aspect-video">
        <div className="absolute inset-0 w-full h-full bg-gray-300 flex gap-4 justify-center items-center">
          <Dot
            style={{
              animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) 0s infinite",
            }}
          />
          <Dot
            style={{
              animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) 0.2s infinite",
            }}
          />
          <Dot
            style={{
              animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) 0.4s infinite",
            }}
          />
        </div>
        <iframe
          className={`absolute transition-opacity duration-300 inset-0 w-full h-full ${
            display ? "opacity-100" : "opacity-0"
          }`}
          title={`vimeo-${id}`}
          width="100%"
          src={`https://player.vimeo.com/video/${id}?color=5d93ff&portrait=0`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          onLoad={() => setDisplay(true)}
        />
      </div>
      {caption && <figcaption className="text-center">{caption}</figcaption>}
    </figure>
  );
};

export default Vimeo;
