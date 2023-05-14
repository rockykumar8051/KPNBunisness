import React from "react";

function contact() {
  return (
    <>
      <section className="container-fluid my-4 py-4">
        <div className="container text-center">
          <div className="row d-flex flex-wrap justify-content-center align-items-center">
            <div className="col-md-10 col-10 col-xxl-5 col-lg-5 ">
              <img src="img/logo.png" alt="logo"  style={{marginBottom:"10px"}}/>
              {/* <h2 style={{color:"#29FFE2" , marginTop:"20px"}}>KPN BUSINESS SOLUTIONS</h2> */}
            </div>
            <div className="col-md-10 col-10 col-xxl-5 col-lg-5 text-center d-flex flex-column align-items-center">
              <div>
                <a href="https://forms.office.com/r/pLK33xbCpD" target="_blank" rel="noopener noreferrer">
                <button
                  style={{ color: "#fff" , width:"200px" , marginBottom:"10px"}}
                  className="btn btn-outline-secondary"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#multiCollapseExample1"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1"
                >
                  contact us
                  <i
                    className="fa-sharp fa-solid fa-arrow-right fa-beat-fade"
                    style={{ paddingLeft: "5px" }}
                  ></i>
                </button>
                </a>
             
              </div>
              <div>
                <a href="https://forms.office.com/r/r2HhgB744k" target="_blank" rel="noopener noreferrer">
                <button
                  style={{ color: "#fff" , width:"200px"}}
                  className="btn  btn-outline-secondary"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#multiCollapseExample1"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1"
                >
                  subscribe us
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

export default contact;
