import React from "react";

function Footer() {
  return (
    <>
      <div>
        <footer
          className="page-footer font-small  lighten-3 "
          style={{ backgroundColor: "rgba(31,43,59,0.92)", marginTop: "50px" }}
        >
          <div className="container-fluid pt-4 footer-col">
            <div className="container text-center text-md-left">
              <div className="row">
                <div className="col-md-4 col-lg-4 text-center mx-auto my-4">
                  <h5
                    className="font-weight-bold text-uppercase mb-4"
                    style={{ color: "#29FFE2" }}
                  >
                    About us
                  </h5>
                  <p style={{ color: "#fff" }}>
                    KPN Business Solutions delivers targeted B2B solutions,
                    generating qualified leads for sustainable growth. Our team
                    of experts is dedicated to providing customised strategies
                    that prioritise trust and quality.
                  </p>
                </div>
                <hr className="clearfix w-100 d-md-none" />
                <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1" >
                  {/* <!-- Contact details --> */}
                  <h5 className="font-weight-bold text-uppercase mb-3"  style={{ color: "#29FFE2" }}>Address</h5>

                  <ul className="list-unstyled" style={{ color: "#fff" ,fontWeight:"lighter"}}>
                    <li>
                      <p>
                        <i className="fa fa-home" style={{marginRight:"5px"}}></i>EFC Prime Office Space - Business Center 
                        Sharayu Harmony, Pashan Hwy Side Rd, Baner, Pune Maharashtra 411045
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fa fa-envelope "></i> hr@kpnbusinesssolutions.in
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fa fa-phone "></i> +91 89567 44785
                      </p>
                    </li>
                  </ul>
                </div>
                <hr className="clearfix w-100 d-md-none" />
                <div className="col-md-4 col-lg-4 text-center mx-auto my-4 ">
                  <h5
                    className="font-weight-bold text-uppercase mb-4"
                    style={{ color: "#29FFE2" }}
                  >
                    Follow Us
                  </h5>

                  <a type="button" className="btn-floating btn-tw" href="https://api.whatsapp.com/send?phone= +918956744785" target="_blank">
                  <i class="fa-brands fa-whatsapp  fa-bounce fa-xl"   style={{color:"#ffff"}}></i>
                  </a>

                  <a type="button" className="btn-floating btn-gplus" href="mailto:hr@kpnbusinesssolutions.in">
                   <i class="fa-solid fa-envelope  fa-bounce fa-xl"   style={{color:"#ffff"}}></i>
                  </a>

                  <a type="button" className="btn-floating btn-dribbble" href=" https://www.linkedin.com/company/kpn-businesssolutions/" target="_blank">
                    <i
                      className="fa-brands fa-linkedin fa-bounce fa-xl"
                      style={{color:"#ffff"}}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <div
          className=" container-fluid  footer-copyright text-center py-3"
          style={{ backgroundColor: " #111822", color: "#ccc" }}
        >
          © 2023 Copyright:
          <a
            href="https://www.linkedin.com/in/rocky-kumar-3b6209145/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            KPN Business Solutions
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
