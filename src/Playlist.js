import './App.css';
import './Playlist.css';
import React, { useState, useEffect } from 'react';

function Playlist({data, delay}) {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <>
    {
      display ? (
        <a className={"playlist fade-in"} href={data.url} target="_blank" rel="noreferrer">
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
