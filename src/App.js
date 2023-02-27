import './App.css';
import home from "./home.gif";
import Playlist from "./Playlist";
import ImageData from './ImageData';
import { useEffect, useState } from 'react';

function App() {

  const [click, setClick] = useState(false);
  const [launchFade, setLaunchFade] = useState(false);

  const FADE_IN_TIME_MS = 150;

  const playlistList = [
    {
      img: ImageData[0],
      title: "001",
      url: "https://open.spotify.com/playlist/2BAHQGqzcydbR3ASk6z7Ma?si=82747e07ceab420b",
    },
    {
      img: ImageData[1],
      title: "002",
      url: "https://open.spotify.com/playlist/47OWP8aD9W6z9CO7AtTZVk?si=87b12524727c4a22",
    },
    {
      img: ImageData[2],
      title: "003",
      url: "https://open.spotify.com/playlist/3M8b78YPF89NKOulcemX6N?si=62a6566e78bd46ce",
    },
    {
      img: ImageData[3],
      title: "004",
      url: "https://open.spotify.com/playlist/4w8fydGV8kcw1Nx1wS8OPE?si=db9cc8362773412b",
    },
    {
      img: ImageData[4],
      title: "005",
      url: "https://open.spotify.com/playlist/2XV39m2kgT55tftZUBAjBn?si=9c4cf5adf32247da",
    },
    {
      img: ImageData[5],
      title: "006",
      url: "https://open.spotify.com/playlist/2PAjCa0ZsgwnZ6K2W3Fe63?si=b1ee1e9eef0943c2",
    },
    {
      img: ImageData[6],
      title: "007",
      url: "https://open.spotify.com/playlist/0fOzwjmITaRLzP5G5Hz96V?si=44c1ca9d0f8243ca",
    },
    {
      img: ImageData[7],
      title: "008",
      url: "https://open.spotify.com/playlist/0JDJrTWt0PkGikZb88agM2?si=b5b93f3146f34254",
    },
    {
      img: ImageData[8],
      title: "009",
      url: "https://open.spotify.com/playlist/0kfG4bbYaaJtVHbrMylEVl?si=396e00cffce240bd",
    },
    {
      img: ImageData[9],
      title: "010",
      url: "https://open.spotify.com/playlist/0DWejYAA6c3dqJsEqmuENl?si=1f09abb778444791",
    },
    {
      img: ImageData[10],
      title: "011",
      url: "https://open.spotify.com/playlist/2kEnoxV3JrbbiJq0v38aAR?si=6f6c6a40ac074bde",
    },
    {
      img: ImageData[11],
      title: "012",
      url: "https://open.spotify.com/playlist/7n5W14kfhyIMj8J35SRZO2?si=47006199ab1c4d59",
    },
    {
      img: ImageData[12],
      title: "013",
      url: "https://open.spotify.com/playlist/5rIgSLhCEXWpO8KjZPbGMT?si=db85d66be05e4f79",
    },
    {
      img: ImageData[13],
      title: "014",
      url: "https://open.spotify.com/playlist/39ST0XJV49tNS7j9XK4wij?si=9f4b429bdc504fce",
    },
    {
      img: ImageData[14],
      title: "015",
      url: "https://open.spotify.com/playlist/6Rie2jH7yp9QROZKpd36mF?si=664b1d6016bd4a55",
    },
    {
      img: ImageData[15],
      title: "016",
      url: "https://open.spotify.com/playlist/4DdMbK1mO5DRlD8Yf4Owku?si=e0fb209086e34314",
    },
    {
      img: ImageData[16],
      title: "017",
      url: "https://open.spotify.com/playlist/1EWQ9s4l9Cm1N7QRvPUPkG?si=d6124f86d6504b2a",
    },
    {
      img: ImageData[17],
      title: "018",
      url: "https://open.spotify.com/playlist/5GfUWhZQGboVkOrjrFqBud?si=869fa069fbaa4ab8",
    },
    {
      img: ImageData[18],
      title: "019",
      url: "https://open.spotify.com/playlist/3AnVI0cykvdAt2utrJuikH?si=6e291588c6f44710",
    },
    {
      img: ImageData[19],
      title: "020",
      url: "https://open.spotify.com/playlist/4nGb5PjPRwRHu6X2VOnVli?si=0cb17d2aa0a147f0",
    },
    {
      img: ImageData[20],
      title: "021",
      url: "https://open.spotify.com/playlist/7phqJdPTRRh0eQ7JCfTu1c?si=b971bcf3c2664d22",
    },
    {
      img: ImageData[21],
      title: "022",
      url: "https://open.spotify.com/playlist/7LHwyHwtQd7YbHuj0RXh7w?si=7594dfbf3f8c4a92",
    },
  ]

  function toHome(){
    console.log("toHome")
    setLaunchFade(true);
    setTimeout(() => {
      setClick(true);
   }, 1000);
  }

  return (
    <>
      {
      !click ? (
        <div className={launchFade ? "home-app fade-out" : "home-app"} onClick={() => toHome()}>
          <div className="home-container">
            <div className="border">
              <img src={home} className="home-logo" alt="home" />
            </div>
            <div className="home-text">
              <div className="text-box">Click anywhere to continue ...</div>
            </div>
          </div>
        </div>
      
      ) : (
        <div className="playlists">
          {playlistList.map((playlist, index) => {
            return(<Playlist data={playlist} delay={index * FADE_IN_TIME_MS} key={index} />);
          })}
        </div>
      )
      }
    </>
  );
}

export default App;
