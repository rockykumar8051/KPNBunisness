import React from "react";

function Carrer() {
  return (
    <>
    <section className=" container">
    <h2 style={{color:"#29FFE2"}}>Career</h2>
      <div
        className="container"
        style={{
          background:
            "linear-gradient(180deg, #2A2A2C 0%, #1A1A1E 100%)",
          boxShadow:
            "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "10px",
          border: "1px solid #151313",
        }}
      >
        <div className="row d-flex flex-wrap py-3 px-3">
          <div className="col-md-10 col-10 col-xxl-5 col-lg-5 mx-auto">
            <img className="careerIMG" src="img/career.png" />
          </div>
          <div className="col-md-10 col-10 col-xxl-5 col-lg-5 mx-auto text-center d-flex  align-items-center">
            <div>
              <h2
                className="card-title"
                style={{ color: "#29FFE2", margin: "15px 0px" }}
              >
                Careers at KNP Business Solutions{" "}
              </h2>
              <p
                className="card-text"
                style={{ color: "#fff", margin: "15px 0px" }}
              >
                We invite you to supercharge your potential. Find what inspires
                and drives you. Find your spark.
              </p>
              <a href="https://forms.office.com/r/NC1GSiSLE1" target="_blank" rel="noopener noreferrer">
              <button
                style={{ color: "#fff" }}
                className="btn btn-primary"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#multiCollapseExample1"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                Visit Our Page
                <i
                  className="fa-sharp fa-solid fa-arrow-right fa-beat-fade"
                  style={{ paddingLeft: "5px" }}
                ></i>
              </button>
              </a>
             
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

export default Carrer;
