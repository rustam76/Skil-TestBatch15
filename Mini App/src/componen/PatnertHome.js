import React from "react";
import Android from '../image/andr.svg'
import Bootstrap from '../image/bost.svg'
import Codeigniter from '../image/ci.svg'
import Css from '../image/css.svg'
import Firebase from '../image/fire.svg'
import Git from '../image/git.svg'
import Html from '../image/html.svg'
import Java from '../image/java.svg'
import Javasript from '../image/js.svg'
import Jquery from '../image/jquery.svg'
import Kotlin from '../image/kotlin.svg'
import Nodejs from '../image/node.svg'
import Python from '../image/python.svg'
import Php from '../image/php.svg'
import Reactjs from '../image/react.svg'
import Sql from '../image/mysql.svg'
import Swift from '../image/swift.svg'



function PatnertHome() {
  return (
    <div className="container patr">
      <div className="conten text-center">
        <div className="title">
          <h1 className="mt-5">
            Dapatkan Bantuan dari<br/> Ribuan Ahli dan <br/> Professional Programmer <br />
            di Seluruh Indonesia
          </h1>
          <p>
            Dari Berbagai Bahasa Pemrograman, Framework, Tools Coding, dan
            Contoh Pengembangan Proyek
          </p>
        </div>
        <div className="container">
          <div className="row logoconten">
            <div className="cardlogo">
              <div className="card-img">
                <img src={Android}  alt="android" className="logoimg"/>
              </div>
              <p className="namelogo">Android</p>
            </div>
            <div className="cardlogo">
              <div className="card-img">
                <img src={Bootstrap}  alt="android" className="logoimg"/>
              </div>
              <p className="namelogo">Bootstrap</p>
            </div>
            <div className="cardlogo">
              <div className="card-img">
                <img src={Codeigniter}  alt="android" className="logoimg"/>
              </div>
              <p className="namelogo">Code igniter</p>
            </div>
            <div className="cardlogo">
              <div className="card-img">
                <img src={Css}  alt="android" className="logoimg"/>
              </div>
              <p className="namelogo">CSS</p>
            </div>
            <div className="cardlogo">
              <div className="card-img">
                <img src={Firebase}  alt="android" className="logoimg"/>
              </div>
              <p className="namelogo">Firebase</p>
            </div>
            <div className="cardlogo">
              <div className="card-img">
                <img src={Git}  alt="android" className="logoimg"/>
              </div>
              <p className="namelogo">Git</p>
            </div>
            <div className="cardlogo">
              <div className="card-img">
                <img src={Html}  alt="android" className="logoimg"/>
              </div>
              <p className="namelogo">Html</p>
            </div>
            <div className="cardlogo">
              <div className="card-img">
                <img src={Java}  alt="android" className="logoimg"/>
              </div>
              <p className="namelogo">Java</p>
            </div>
            <div className="cardlogo">
              <div className="card-img">
                <img src={Javasript}  alt="android" className="logoimg"/>
              </div>
              <p className="namelogo">Javasript</p>
            </div>
             <div className="cardlogo">
              <div className="card-img">
                <img src={Jquery}  alt="android" className="logoimg"/>
              </div>
              <p className="namelogo">Jquery</p>
            </div>
            <div className="cardlogo">
              <div className="card-img">
                <img src={Kotlin}  alt="android" className="logoimg"/>
              </div>
              <p className="namelogo">Kotlin</p>
            </div>
            <div className="cardlogo">
              <div className="card-img">
                <img src={Nodejs}  alt="android" className="logoimg"/>
              </div>
              <p className="namelogo">Node js</p>
            </div>
            <div className="cardlogo">
              <div className="card-img">
                <img src={Python}  alt="android" className="logoimg"/>
              </div>
              <p className="namelogo">Python</p>
            </div>
            <div className="cardlogo">
              <div className="card-img">
                <img src={Php}  alt="android" className="logoimg"/>
              </div>
              <p className="namelogo">Php</p>
            </div>
            <div className="cardlogo">
              <div className="card-img">
                <img src={Reactjs}  alt="android" className="logoimg"/>
              </div>
              <p className="namelogo">React js</p>
            </div>
            <div className="cardlogo">
              <div className="card-img">
                <img src={Sql}  alt="android" className="logoimg"/>
              </div>
              <p className="namelogo">SQL</p>
            </div>
            <div className="cardlogo">
              <div className="card-img">
                <img src={Swift}  alt="android" className="logoimg"/>
              </div>
              <p className="namelogo">Swift</p>
            </div>
          </div>
          <button className="btn btn-warning btntele">Ajukan Pertanyaan</button>
        </div>
      </div>
    </div>
  );
}

export default PatnertHome;
