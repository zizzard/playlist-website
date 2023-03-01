import "./App.css";
import "./Playlist.css";
import React, { useState, useEffect } from "react";

function Playlist({
  data,
  delay,
  func,
  funcType,
  fadeOutStatus,
  setPlaylistData,
  setShowPlaylistData,
}) {
  const [display, setDisplay] = useState(false);
  const [hover, setHover] = useState(false);
  const [hoverImage, showHoverImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    const DURATION_MS = 500;

    if (hover) {
      const timer = setTimeout(() => {
        showHoverImage(hover);
      }, DURATION_MS);
      return () => clearTimeout(timer);
    } else {
      showHoverImage(hover);
    }
  }, [hover]);

  function callFunc() {
    switch (funcType) {
      case "hidePlaylist":
        setPlaylistData();
        setShowPlaylistData();
        func();
        break;
      case "showPlaylist":
        setPlaylistData();
        setShowPlaylistData();
        func();
        break;
      default:
        break;
    }
  }

  return (
    <>
      {display ? (
        <a
          className={
            fadeOutStatus ? "playlist fade-out" : "playlist playlist-fade-in"
          }
          onClick={() => callFunc()}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div className="playlist-container">
            {hoverImage ? (
              <img
                className={
                  hover ? "playlist-image-top-hover" : "playlist-image-top"
                }
                src={data.img}
                alt=""
              />
            ) : (
              <></>
            )}
            <img className="playlist-image" src={data.img} alt="" />
            <div className="playlist-title">
              <div className="small-text-box">{data.title}</div>
              <div className="text-box-bg"></div>
            </div>
          </div>
        </a>
      ) : (
        <a className={"playlist"}></a>
      )}
    </>
  );
}

export default Playlist;
