import './App.css';
import './Playlist.css';
import React, { useState, useEffect } from 'react';

function Playlist({data, delay, func, index, fadeOutStatus}) {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);



  function callFunc(){
    // setPlaylistData(data);
    func(index);
  }

  return (
    <>
    {
      display ? (
        fadeOutStatus ? (
          <a className={"playlist fade-out"} onClick={() => callFunc()}>
            <div className="small-border">
              <img className="playlist-image" src={data.img} />
            </div>
            <div className="playlist-title">
              <div className="small-text-box">{data.title}</div>
            </div>
          </a>
        ) : (
          <a className={"playlist fade-in"} onClick={() => callFunc()}>
            <div className="small-border">
              <img className="playlist-image" src={data.img} />
            </div>
            <div className="playlist-title">
              <div className="small-text-box">{data.title}</div>
            </div>
          </a>
        )
      ) : (
         <a className={"playlist"}></a>
      )
    }
    </>
  );
}

export default Playlist;
