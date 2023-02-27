import './App.css';
import home from "./home.gif";
import Playlist from "./Playlist";
import ImageData from './ImageData';
import { useEffect, useState } from 'react';

function App() {

  const [click, setClick] = useState(false);
  const [launchFade, setLaunchFade] = useState(false);
  const [launchPlaylist, setLaunchPlaylist] = useState(-1);

  const [fadeOutStatus001, setFadeOutStatus001] = useState(false);
  const [fadeOutStatus002, setFadeOutStatus002] = useState(false);
  const [fadeOutStatus003, setFadeOutStatus003] = useState(false);
  const [fadeOutStatus004, setFadeOutStatus004] = useState(false);
  const [fadeOutStatus005, setFadeOutStatus005] = useState(false);
  const [fadeOutStatus006, setFadeOutStatus006] = useState(false);
  const [fadeOutStatus007, setFadeOutStatus007] = useState(false);
  const [fadeOutStatus008, setFadeOutStatus008] = useState(false);
  const [fadeOutStatus009, setFadeOutStatus009] = useState(false);
  const [fadeOutStatus010, setFadeOutStatus010] = useState(false);
  const [fadeOutStatus011, setFadeOutStatus011] = useState(false);
  const [fadeOutStatus012, setFadeOutStatus012] = useState(false);
  const [fadeOutStatus013, setFadeOutStatus013] = useState(false);
  const [fadeOutStatus014, setFadeOutStatus014] = useState(false);
  const [fadeOutStatus015, setFadeOutStatus015] = useState(false);
  const [fadeOutStatus016, setFadeOutStatus016] = useState(false);
  const [fadeOutStatus017, setFadeOutStatus017] = useState(false);
  const [fadeOutStatus018, setFadeOutStatus018] = useState(false);
  const [fadeOutStatus019, setFadeOutStatus019] = useState(false);
  const [fadeOutStatus020, setFadeOutStatus020] = useState(false);
  const [fadeOutStatus021, setFadeOutStatus021] = useState(false);
  const [fadeOutStatus022, setFadeOutStatus022] = useState(false);

  const FADE_IN_TIME_MS = 10;

  function getFadeOutStatus(index){
    switch(index) {
      case 1:
        return fadeOutStatus001;
      case 2:
        return fadeOutStatus002;
      case 3:
        return fadeOutStatus003;
      case 4:
        return fadeOutStatus004;
      case 5:
        return fadeOutStatus005;
      case 6:
        return fadeOutStatus006;
      case 7:
        return fadeOutStatus007;
      case 8:
        return fadeOutStatus008;
      case 9:
        return fadeOutStatus009;
      case 10:
        return fadeOutStatus010;
      case 11:
        return fadeOutStatus011;
      case 12:
        return fadeOutStatus012;
      case 13:
        return fadeOutStatus013;
      case 14:
        return fadeOutStatus014;
      case 15:
        return fadeOutStatus015;
      case 16:
        return fadeOutStatus016;
      case 17:
        return fadeOutStatus017;
      case 18:
        return fadeOutStatus018;
      case 19:
        return fadeOutStatus019;
      case 20:
        return fadeOutStatus020;
      case 21:
        return fadeOutStatus021;
      case 22:
        return fadeOutStatus022;
    }
  }

  function setFadeOutStatus(index, value){
    switch(index) {
      case 1:
        setFadeOutStatus001(value);
        break;
      case 2:
        setFadeOutStatus002(value);
        break;
      case 3:
        setFadeOutStatus003(value);
        break;
      case 4:
        setFadeOutStatus004(value);
        break;
      case 5:
        setFadeOutStatus005(value);
        break;
      case 6:
        setFadeOutStatus006(value);
        break;
      case 7:
        setFadeOutStatus007(value);
        break;
      case 8:
        setFadeOutStatus008(value);
        break;
      case 9:
        setFadeOutStatus009(value);
        break;
      case 10:
        setFadeOutStatus010(value);
        break;
      case 11:
        setFadeOutStatus011(value);
        break;
      case 12:
        setFadeOutStatus012(value);
        break;
      case 13:
        setFadeOutStatus013(value);
        break;
      case 14:
        setFadeOutStatus014(value);
        break;
      case 15:
        setFadeOutStatus015(value);
        break;
      case 16:
        setFadeOutStatus016(value);
        break;
      case 17:
        setFadeOutStatus017(value);
        break;
      case 18:
        setFadeOutStatus018(value);
        break;
      case 19:
        setFadeOutStatus019(value);
        break;
      case 20:
        setFadeOutStatus020(value);
        break;
      case 21:
        setFadeOutStatus021(value);
        break;
      case 22:
        setFadeOutStatus022(value);
        break;
    }
  }  

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

  useEffect(() => {
    if(launchPlaylist === -2){ //close
      for(let i = 1; i <= 22; i++){
        if(i === launchPlaylist) continue;
        setFadeOutStatus(i, false);
      }
    }else if(launchPlaylist === -1){ //startup
      return;
    }else{ //open
      for(let i = 1; i <= 22; i++){ 
        if(i === launchPlaylist) continue;
        setFadeOutStatus(i, true);
      }
    }
  }, [launchPlaylist])

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
            return(
              <Playlist key={index}
                        data={playlist} 
                        delay={index * FADE_IN_TIME_MS} 
                        func={
                          index + 1 === launchPlaylist ? 
                            () => setLaunchPlaylist(-2) :
                            (getFadeOutStatus(index + 1) ? 
                              () => {} :
                              () => setLaunchPlaylist(index + 1)
                            )
                        } 
                        fadeOutStatus={getFadeOutStatus(index + 1)}
                        currentDisplay={index + 1 === launchPlaylist}
              />
            );
          })}
        </div>
      )
    }
  </>
  );
}

export default App;
