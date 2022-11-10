import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PortoHome from "./PortoHome";
import SolusiHome from "./SolusiHome";
import TeleHome from "./TeleHome";
import PatnertHome from "./PatnertHome";
import LogoHome from "./LogoHome";

function HomeComponen() {
  return (
    <div className="home">
      <div className="container padd">
        <div className="row bg1">
          <div className="col-12">
            <h1 className="jadi">
              Jadilah Bagian dari <br /> Komunitas Tech Terbesar <br />
              di Indonesia
            </h1>
            <p className="pe">
              Ikutan diskusi forum tanya jawab, tulis blog dan
              <br /> Membangun portofolio semua di Kotakode
            </p>
            <Form className="d-flex from1">
              <Form.Control
                type="search"
                placeholder="Masukkan Email Kamu"
                className="me-2"
                aria-label="Email"
              />
              <Button variant="warning email">Daftar</Button>
            </Form>
            <div className="row mt-5 text-center">
              <div className="card user1">
                <h2>29261</h2>
                <p>User Bergabung</p>
              </div>
              <div className="card user2">
                <h2>1037</h2>
                <p>Blog Ditulis</p>
              </div>
              <div className="card user3">
                <h2>19472</h2>
                <p>Total Pertanyaan & Jawaban</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PortoHome />
      <TeleHome />
      <PatnertHome />
      <LogoHome />
    </div>
  );
}

export default HomeComponen;
