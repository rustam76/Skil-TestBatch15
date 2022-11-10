import React from "react";
import Jawab from "../image/2.png";
import Konsep from "../image/3.png";
import Bangun from '../image/1.png';
import SolusiHome from "./SolusiHome";

function PortoHome() {
  return (
    <div className="container carde">
      <div className="card1">
        <div className="row">
          <div className="col-md-4 ">
            <div className="row ">
              <div className="col-12">
                <div className="cardjawab">
                    <div className="imgco">
                      <img src={Jawab} alt="jawaban" className="jawabimg" />
                    </div>
                    <div className="textimg">
                      <h3 className="titleimg">Jawaban cepat, tepat & gratis</h3>
                      <p className="deskripsi">
                        Dapatkan jawaban dalam hitungan menit dari ribuan
                        programmer lainnya
                      </p>
                    </div>
               
                </div>
              </div>
              <div className="col-12">
              <div className="cardjawab">
                
                    <div className="imgco">
                      <img src={Konsep} alt="jawaban" className="jawabimg" />
                    </div>
                    <div className="textimg">
                      <h3 className="titleimg">Konsep Gamifikasi</h3>
                      <p className="deskripsi">
                      Dapatkan badge menarik yang akan meningkatkan personal branding kamu sebagai seorang programmer.
                      </p>
                    </div>
             
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 right1">
            <div className="card2">
            <div className="topimg">
            <img src={Bangun} alt="jawaban" className="bangunimg" />
            </div>
            
            <div className="titleright">
            <h3 className="right">Bangun Online Portofolio</h3>
              <p className="deskripsi1">
                Portofolio ibaratkan sebuah aset yang berharga bagi setiap
                orang. Semakin kamu aktif di dalam forum, semakin membuktikan
                bahwa kamu adalah programmer yang berkualitas.
              </p>
            </div>
              
            </div>
          </div>
          <div className="col-md-4">
          <div className="text4">
            <h1>Mengapa perlu menggunakan Kotakode?</h1>
            <p >
              Ibaratkan sebuah kota dengan penduduk para programmer, Kotakode
              memberikan fasilitas guna mensejahterakan kehidupan penduduknya.
            </p>
          </div>
          </div>
        </div>
      </div>
      <SolusiHome/>
    </div>
  );
}

export default PortoHome;
