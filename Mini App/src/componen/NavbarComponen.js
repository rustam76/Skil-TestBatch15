import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Kotak from "../image/logokotak.svg";
function NavbarComponen() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      className="navbar sticky-top"
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={Kotak} alt="kotak kode" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav">
            <Nav.Link className="menu" href="/Tentang">
              Tentang
            </Nav.Link>
            <NavDropdown title="Produk" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Forum">
                <strong>Forum Q&A</strong>
                <br />
                <small>Pertanyaan & Jawaban</small>
              </NavDropdown.Item>
              <NavDropdown.Item href="/Blog">
                <strong> Blog</strong>
                <br />
                <small>Diskusi & Informasi</small>
              </NavDropdown.Item>
              <NavDropdown.Item href="/Jobs">
                <strong> Jobs</strong>
                <br />
                <small>Cari Kerja</small>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="menu" href="/Faq">
              FAQ
            </Nav.Link>
            <Nav.Link className="menu" href="/Events">
              Events
            </Nav.Link>
            <Nav.Link className="menu" href="/Patner">
              Partnership
            </Nav.Link>
          </Nav>
          <Nav>
            <button className="btn btn-outline-success masuk">
              {" "}
              <a href="/Masuk">Masuk</a>{" "}
            </button>
            <button className="btn btn-success daftar">
              <a href="/Daftar">Daftar</a>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponen;
