import Header from "../components/header";
import Footer from "../components/footer";
import { Videos } from "../data";
import { useState } from "react";
import { Link } from "react-router-dom";


function FrontPage(): JSX.Element {
  const device: boolean = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false);
  const [activeVideo, setActiveVideo] = useState('1');
  const [isMute, setMute] = useState(false);
  const handleChangeVideo = (next: string) => {
    document.getElementById("video-" + activeVideo)?.pause();
    document.getElementById("video-" + next)?.play();
    setActiveVideo(next);
  };
  return (
    <>
      <Header />
      <section className="main__wrap" style={(device) ? {height: '700px'} : {height: '900px'}}>
        <div className="main">
        <div className="container" style={(device) ? {maxHeight: '500px'} : {minHeight: '800px', minWidth: '450px'}}>
            <input type="radio" name="slider" id="item-1" onClick={() => handleChangeVideo('1')} defaultChecked/>
            <input type="radio" name="slider" id="item-2" onClick={() => handleChangeVideo('2')}/>
            <input type="radio" name="slider" id="item-3" onClick={() => handleChangeVideo('3')}/>
            <input type="checkbox" role="switch" id="mute-button" onClick={() => setMute(!isMute)}/>
            <div className="cards" >
              {Videos.map((video) => (
                <label className="card" key={video.id} htmlFor={"item-"+video.id} id={"video-label-"+video.id}>
                  <div className="video__mask">
                    <video id={'video-' + video.id} autoPlay={video.id == '1'} preload={video.id == '1' ? 'auto' : 'metadata'} muted={isMute} height={"100%"} width={"100%"}>
                      <source src={video.src} />
                    </video>
                    <label className="mute" htmlFor="mute-button">
                      <div className="img__mute" 
                        style={(video.id == activeVideo) 
                          ? {opacity: '1', backgroundColor: '#ECEFF1', borderRadius: '15px'} 
                          : {opacity: '0', backgroundColor: 'none'}
                        }
                      >
                        <img  src={(isMute) ? "img/mute-icon-on.svg" : "img/mute-icon-off.svg"} width="16px" />
                      </div>
                    </label>
                  </div>
                </label>
              ))}
            </div>
            <div className="button">
              <div className="upper-part">
                <div className="info-area" id="test">
                  {Videos.map((video) => (
                    <Link to={video.link} key={video.id} className="video-info" id={"video-info-" + video.id}>
                      <div className="title">{video.description}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default FrontPage;