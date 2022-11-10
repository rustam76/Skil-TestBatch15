import React from "react";
import Terbang from "../image/4.svg";
import Micro from '../image/bg.svg'
import Ter from '../image/12.png'
function SolusiHome() {
  return (
    <div className="fitur">
      <div className="fiturleft">
        <h1 className="shorttitle">
          Satu Platform, <br />
          Banyak Solusi
        </h1>
        <p className="fiturdeskripsi">
          Kotakode memfasilitasi dengan memberikan berbagai fitur yang menarik
          dan terbaik untuk mengembangkan ekosistem IT anak bangsa.
        </p>
      </div>
      <div className="cardcontainer">
        <div className="containercard">
          <div className="cardconten">
            <div className="imagecard">
              <img src={Terbang} alt="" className="imeg" />
            </div>
            <div className="deskripsisaya">
              <h1 className="des1">Online Forum</h1>
              <p className="des2">Kotakode dapat menjawab pertanyaan dan membantu programmer dalam memberikan jawaban yang berkualitas</p>
              <a className="btnku">Tanya Sekarang</a>
            </div>
          </div>
        </div>

        <div className="containercard midcard">
          <div className="cardconten">
            <div className="imagecard">
              <img src={Micro} alt="" className="imeg" />
            </div>
            <div className="deskripsisaya">
              <h1 className="des1">Microblogging</h1>
              <p className="des2">Kotakode menyediakan wadah bagi programmer untuk berbagi wawasan terkait info terkini di bidang IT</p>
              <a className="btnku">Tulis Sekarang</a>
            </div>
          </div>
        </div>

        <div className="containercard">
          <div className="cardconten">
            <div className="imagecard">
              <img src={Ter} alt="" className="imeg" />
            </div>
            <div className="deskripsisaya">
              <h1 className="des1">Job Hiring (Coming Soon)</h1>
              <p className="des2">Kotakode membantu rekruiter dalam mencari talent terbaik yang memenuhi standar perusahaan</p>
              <a className="btnkita">Cari Kerja</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolusiHome;
