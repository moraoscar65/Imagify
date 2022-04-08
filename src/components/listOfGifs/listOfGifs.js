import React from "react";
import Gifs from "../../pages/show_gifs/Gifs";
import "./listOfGifs.css";
import Masonry from "react-masonry-css";

export default function ListOfGifs({ gifs }) {
  const breakpoints={
    default:3,
    1000:2,
    500:1
  }
  return (
    <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {gifs.map((singleGif) => (
        <div key={singleGif.id}>
          <Gifs  singleGifs={singleGif} />
        </div>
      ))}
    </Masonry>
  );
}
