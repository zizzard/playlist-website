import './App.css';
import './Playlist.css';
import React, { useState, useEffect } from 'react';

function Playlist({data, delay, func, index, fadeOutStatus, setPlaylistData, setShowPlaylistData}) {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  function callFunc(){
    setPlaylistData();
    setShowPlaylistData();
    func(index);
  }

  return (
    <>
    {
      display ? (
          <a className={fadeOutStatus ? "playlist fade-out" : "playlist fade-in"} onClick={() => callFunc()}>
            <div className="small-border">
              <img className="playlist-image" src={data.img} />
            </div>
            <div className="playlist-title">
              <div className="small-text-box">{data.title}</div>
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
