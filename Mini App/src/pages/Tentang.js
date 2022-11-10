import React from "react";
import "../App.css";
import Peter from "../image/ptr.svg";
import Michel from "../image/micel.svg";
import Anna from "../image/anna.png";
import About from "../image/about.svg";

function Tentang() {
  return (
    <div className="container">
  
      
          <div className="herobg bghero">
            <div className="textwwrap">
              <div className="linehero">
                <div className="heroline"></div>
              </div>
              <h1 className="texthero">
                Dukung kami dalam menciptakan ekosistem <br/> yang inklusif bagi
                programmer di seluruh<br/> Indonesia
              </h1>
              <div className="textabout">
                <div className="textaboutwrap">
                  <h2 className="te">Tentang Kotakode</h2>
                  <p className="pe">
                    Kotakode merupakan platform komunitas bagi para pegiat IT di
                    Indonesia dimana programmer dapat belajar dan berbagi
                    wawasan seputar dunia IT terkini untuk mendukung memberikan
                    pertumbuhan perekonomian di Indonesia.
                  </p>
                </div>
              </div>
            </div>
          </div>

        <div className="container-01">
          <div>
            <h1 className="timkode">Tim Kotakode</h1>
            <div className="contentim">
              <div className="imgtim">
                <img src={Peter} alt="img" className="timimg" />
              </div>
              <div className="texttim">
                <h3 className="peter">Peter Tanugraha</h3>
                <h4 className="subpe">Cofounder & CEO</h4>
                <h4 className="scholl">
                  Computer Engineering @University of Toronto 2019
                </h4>
                <p className="para"></p>
                <div className="deskriptim">
                  <p>• Deep Learning Engineer @IBM Canada (1.5 years)</p>
                  <p>
                    • Deep Learning Engineer / Software Engineer
                    @Nightingtale.ai Canada (1.5 years)
                  </p>
                </div>
                <div className="icontim">
                  <a className="iconku"></a>
                </div>
              </div>
            </div>

            <div className="contentim">
              <div className="imgtim">
                <img src={Michel} alt="img" className="timimg" />
              </div>
              <div className="texttim">
                <h3 className="peter">Peter Tanugraha</h3>
                <h4 className="subpe">Cofounder & CEO</h4>
                <h4 className="scholl">
                  Computer Engineering @University of Toronto 2019
                </h4>
                <p className="para"></p>
                <div className="deskriptim">
                  <p>• Deep Learning Engineer @IBM Canada (1.5 years)</p>
                  <p>
                    • Deep Learning Engineer / Software Engineer
                    @Nightingtale.ai Canada (1.5 years)
                  </p>
                </div>
                <div className="icontim">
                  <a className="iconku"></a>
                </div>
              </div>
            </div>

            <div className="contentim">
              <div className="imgtim">
                <img src={Anna} alt="img" className="timimg" />
              </div>
              <div className="texttim">
                <h3 className="peter">Peter Tanugraha</h3>
                <h4 className="subpe">Cofounder & CEO</h4>
                <h4 className="scholl">
                  Computer Engineering @University of Toronto 2019
                </h4>
                <p className="para"></p>
                <div className="deskriptim">
                  <p>• Deep Learning Engineer @IBM Canada (1.5 years)</p>
                  <p>
                    • Deep Learning Engineer / Software Engineer
                    @Nightingtale.ai Canada (1.5 years)
                  </p>
                </div>
                <div className="icontim">
                  <a className="iconku"></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mascotbg">
          <div className="contenmascot">
            <div className="imgmascot">
              <img src={About} alt="log" />
            </div>
            <div className="textmascot">
              <h3>Maskot Kotakode</h3>
              <h1>Kucing Robot Koko!</h1>
              <p>
                Banyak dari kita yang menyukai kucing, termasuk para programmer.
                Koko merupakan sebuah robot berbentuk kucing dengan kombinasi
                warna hijau dan putih. Koko adalah sebuah robot yang fanatik
                terhadap teknologi, khususnya di bidang IT. Ia datang dari masa
                depan dan diprogram untuk membantu orang-orang yang memiliki
                semangat yang sama dengan dirinya. Sama seperti Koko, Kotakode
                memiliki semangat untuk membantu para fanatik IT di Indonesia
                untuk mengembangkan ekosistem yang menyenangkan untuk
                mempelajari hal-hal yang berkaitan dengan dunia IT terkini
              </p>
            </div>
          </div>
        </div>

        <div className="container-01">
          <h1>Punya Pertanyaan Mengenai Kotakode?</h1>
          <div className="linehero">
            <div className="heroline"></div>
          </div>
          <p>
            Kotakode merupakan platform yang dibuat untuk mengatasi permasalahan
            bagi para pegiat IT di Indonesia. Kami menyadari bahwa kami sangat
            membutuhkan kontribusi pengguna dalam membangun Kotakode. Agar
            setiap fitur, tombol, dan warna yang kami buat sesuai dengan
            kebutuhan pengguna. Oleh karena itu jika kamu memiliki pertanyaan,
            saran, atau tawaran kerjasama yang ingin ditanyakan dan diskusikan
            dengan kami. Silakan hubungi kami melalui:
          </p>
          <h2>Kotakode:</h2>
          <p>
            Ariobimo Sentral level 8. Jalan H. R. Rasuna Said Kav X-2 No. 5,
            Kuningan Timur, Setiabudi, Jakarta Selatan 12950
          </p>
          <h2>Email:</h2>
          <a href="#">petertanugraha@kotakode.com</a>
        </div>
      </div>
 
  );
}

export default Tentang;
