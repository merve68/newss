import React from "react";
import "./home.css"
import video from "../../Assets/Videos/news.mp4"
const Home = () =>{
    return(
      <section className="home">
        <div className="overlay"></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>
        <div className="homeContent contaier">
       <div className="textDiv">

   <h1 className="homeTittle"> Türkiye'nin En Çok Okunan Haber Sitesi</h1>

       </div>

        </div>
      </section>
    )
}

export default Home;