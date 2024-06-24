import Header from "../components/header";
import Footer from "../components/footer";
import { Videos } from "../data";
import { useState } from "react";
import { Link } from "react-router-dom";


function FrontPage(): JSX.Element {
  const [activeVideo, setActiveVideo] = useState('1');
  const handleChangeVideo = (next: string) => {
    document.getElementById("video-" + activeVideo)?.pause();
    document.getElementById("video-" + next)?.play();
    setActiveVideo(next);
  };
  return (
    <>
      <Header/>
      <section className="main__wrap">
        <div className="main">
        <div className="container">
            <input type="radio" name="slider" id="item-1" onClick={() => handleChangeVideo('1')} defaultChecked/>
            <input type="radio" name="slider" id="item-2" onClick={() => handleChangeVideo('2')}/>
            <input type="radio" name="slider" id="item-3" onClick={() => handleChangeVideo('3')}/>
            <div className="cards" >
              {Videos.map((video) => (
                <label className="card" key={video.id} htmlFor={"item-"+video.id} id={"song-"+video.id}>
                  <div className="video__mask">
                    <video id={'video-' + video.id} autoPlay={video.id == '1'} preload="metadata" height={"100%"} width={"100%"}>
                      <source src={video.src} />
                    </video>
                  </div>
                </label>
              ))}
            </div>
            <div className="button">
              <div className="upper-part">
                <div className="info-area" id="test">
                  {Videos.map((video) => (
                    <Link to='todo' key={video.id} className="video-info" id={"video-info-" + video.id}>
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