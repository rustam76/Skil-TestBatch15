import React from "react";
import { Form, Nav, Button, Container } from "react-bootstrap";
import DaftarImg from "../image/dafter.svg";

function Daftar() {
  return (
    <div className="container mt-5">
      <div className="row container">
        <div className="col-md-6">
          <img src={DaftarImg} alt="tes" className="dafterimg" />
          <div className="contenDaftr">
            <h2>
              Gabung Komunitas <br />
              Programmer Terbesar di <br />
              Indonesia Sekarang!
            </h2>
            <p>
              Bangun reputasi online sebagai programmer
              <br />
              Perbesar jaringan dengan ribuan programmer Indonesia lainnya
              <br />
              Perluas wawasan seputar dunia teknologi
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="container">
            <Form className="conter12">
              <Form.Group className="mb-3 font1" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group className="mb-3 font1" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
              </Form.Group>

              <Form.Group className="mb-3 font1" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Form.Group className="mb-3 d-flex justify-content-end">
                <Nav.Link href="#">Lupa Password?</Nav.Link>
              </Form.Group>

              <Button
                variant="success"
                type="submit"
                className="form-control font2"
              >
                Daftar
              </Button>
            </Form>
            <div className="text-center mt-3 mb-3">atau masuk dengan</div>
            <div className="text-center">
              <Container className="mb-5 d-flex justify-content-center">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card shadow">
                        <div className="card-body">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            version="1.1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 48 48"
                            enable-background="new 0 0 48 48"
                            height="1.4em"
                            width="1.4em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="#FFC107"
                              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                            ></path>
                            <path
                              fill="#FF3D00"
                              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                            ></path>
                            <path
                              fill="#4CAF50"
                              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                            ></path>
                            <path
                              fill="#1976D2"
                              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card shadow">
                        <div className="card-body">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 1024 1024"
                            height="1.4em"
                            width="1.4em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
              <div className="text-center mt-3 mb-3">Belum Memiliki Akun? </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Daftar;
