import React from "react";
import { Container } from "react-bootstrap";

function Jobs() {
  return (
    <div>
      <Container>
        <div className="text-center">
          <img
            src="https://www.kotakode.com/static/media/jobsComingSoon.ef30cd11.gif"
            className="text-center mt-5 bg-perbaikan"
            alt="React Bootstrap logo"
          />
          <h1 className="font3">Segera Hadir!!!</h1>
          <h2 className="font4">
            <strong>Clone Kotakode Tentang</strong> sedang dalam proses
            pengembangan
            <br />
            Kirim email Anda untuk mendapatkan akses beta eksklusif dari
            <br />
            <strong>Kotakode Tentang</strong>
          </h2>
        </div>
      </Container>
    </div>
  );
}

export default Jobs;
