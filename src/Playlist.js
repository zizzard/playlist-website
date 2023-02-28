import './App.css';
import './Playlist.css';
import React, { useState, useEffect } from 'react';

function Playlist({data, delay, func, funcType, index, fadeOutStatus, setPlaylistData, setShowPlaylistData}) {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  function callFunc(){
    switch(funcType) {
      case "hidePlaylist":
        setPlaylistData();
        setShowPlaylistData();
        func();
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
    {
      display ? (
          <a className={fadeOutStatus ? "playlist fade-out" : "playlist playlist-fade-in"} onClick={() => callFunc()}>
            <div className="playlist-title">
              <div className="small-text-box">{data.title}</div>
            </div>
            <div className="small-border">
              <img className="playlist-image" src={data.img} />
            </div>
          </a>
      ) : (
         <a className={"playlist"}></a>
      )
    }
    </>
  );
}

export default Playlist;
