import React from "react";

export default function App() {
  return (
    <>
      <section className="gradient-custom">
        <div className="container my-2 py-3">
          <h2 style={{color:"#29FFE2"}} className="text-center">Testimonials</h2>
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="text-center mb-4 pb-2">
                <i className="fas fa-quote-left fa-3x text-white"></i>
              </div>

              <div
                className="card"
                style={{
                  background:
                    "linear-gradient(180deg, #2A2A2C 0%, #1A1A1E 100%)",
                  boxShadow:
                    "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
                  color: "#fff",
                }}
              >
                <div className="card-body px-4 py-5">
                  <div
                    id="carouselDarkVariant"
                    className="carousel slide carousel-white"
                    data-mdb-ride="carousel"
                  >
                    <div className="carousel-indicators mb-0">
                      <button
                        data-mdb-target="#carouselDarkVariant"
                        data-mdb-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        data-mdb-target="#carouselDarkVariant"
                        data-mdb-slide-to="1"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        data-mdb-target="#carouselDarkVariant"
                        data-mdb-slide-to="2"
                        aria-label="Slide 1"
                      ></button>
                    </div>

                    <div className="carousel-inner pb-3">
                      <div className="carousel-item active">
                        <div className="row d-flex justify-content-center">
                          <div className="col-lg-10 col-xl-8">
                            <div className="row">
                              <div className="col-lg-4 d-flex justify-content-center">
                                <img
                                  src="img/profileAvtar.png"
                                  className="rounded-circle shadow-1 mb-4 mb-lg-0"
                                  alt="woman avatar"
                                  width="150"
                                  height="150"
                                />
                              </div>
                              <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                <p className="mb-0 pb-1">
                                  Thanks to KPN Business Solutions, my network
                                  expanded exponentially, and I received many
                                  high-quality leads for our start-up, which we
                                  later converted into direct sales. I am
                                  incredibly impressed with the value they
                                  delivered, and I highly recommend their
                                  services
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="carousel-item">
                        <div className="row d-flex justify-content-center">
                          <div className="col-lg-10 col-xl-8">
                            <div className="row">
                              <div className="col-lg-4 d-flex justify-content-center">
                                <img
                                  src="img/profile.png"
                                  className="rounded-circle shadow-1 mb-4 mb-lg-0"
                                  alt="woman avatar"
                                  width="150"
                                  height="150"
                                />
                              </div>
                              <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                <p className="mb-0 pb-1">
                                  They delivered beyond my expectations and I'm
                                  grateful for their exceptional service..
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="carousel-item">
                        <div className="row d-flex justify-content-center">
                          <div className="col-lg-10 col-xl-8">
                            <div className="row">
                              <div className="col-lg-4 d-flex justify-content-center">
                                <img
                                  src="img/profileAvtar.png"
                                  className="rounded-circle shadow-1 mb-4 mb-lg-0"
                                  alt="woman avatar"
                                  width="150"
                                  height="150"
                                />
                              </div>
                              <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                <p className="mb-0 pb-1">
                                  Thanks to KPN Business Solutions, my network
                                  expanded exponentially, and I received many
                                  high-quality leads for our start-up, which we
                                  later converted into direct sales. I am
                                  incredibly impressed with the value they
                                  delivered, and I highly recommend their
                                  services.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-mdb-target="#carouselDarkVariant"
                      data-mdb-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-mdb-target="#carouselDarkVariant"
                      data-mdb-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4 pt-2" style={{ color: "#fff" }}>
                <i className="fas fa-quote-right fa-3x text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
