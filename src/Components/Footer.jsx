import React from "react";

const Footer = () => {
  return (
    <>
      <div className="colorsite">
        <footer className="text-center text-lg-start colorfooter text-muted ">
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Cercaci sui social:</span>
            </div>

            <div>
              <a
                href="https://www.facebook.com/xorbun92/"
                className="me-4 text-reset"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com/xorbun4" className="me-4 text-reset">
                <i className="bi bi-twitter-x"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/brunocapobianco/"
                className="me-4 text-reset"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/xorbun" className="me-4 text-reset">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>Ristoria Pizzorante
                  </h6>
                  <p>Ristoria Pizzorante, se non ci vieni sei ignorante</p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Servizi</h6>

                  <p>
                    <a
                      href="http://localhost:3000/prenota"
                      className="text-reset"
                    >
                      Prenota
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Link utili</h6>
                  <p>
                    <a href="http://localhost:3000/menu" className="text-reset">
                      Pricing
                    </a>
                  </p>
                  <p>
                    <a
                      href="http://localhost:3000/ordered"
                      className="text-reset"
                    >
                      Orders
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Help
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contatti</h6>
                  <p>
                    <i className="fas fa-home me-3"></i> Cassino, FR 03043, IT
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    info@example.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3"></i> +39 0776 3245876
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center p-4">
            © 2024 Copyright:Ristoria Pizzorante
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
