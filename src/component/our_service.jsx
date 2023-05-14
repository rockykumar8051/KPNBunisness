import React from "react";
import "./style.css";

function OurService() {
  return (
    <>
      <section className="main-heading my-4  pt-4">
        <div className="container text-center"  >
        <h2 style={{color:"#29FFE2"}}  data-aos="fade-up" data-aos-duration="800">Our Areas of Expertise</h2>
          <p style={{color:"#fff"}} data-aos="fade-up" data-aos-duration="800">
            We specialize in B2B lead generation, appointment setting,
            telemarketing, email marketing, and WEB/BPO solutions. Our proven
            methods ensure you reach the right prospects and achieve your sales
            goals.
          </p>
          <div className="row g-3 d-flex flex-wrap my-3 ">
            <div className="col-md-3 col-10 col-xxl-3 col-lg-3 mx-auto" data-aos="fade-up" data-aos-duration="1300"  data-aos-easing="ease-in-sine">
              <div className="card mb-3 shadow-sm ourservice">
                <img
                  className="card-img-top"
                  src="img/b2b.png"
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title">B2B Lead Generation</h5>
                  <p className="card-text">
                    Our approach to lead generation is designed to maximise your
                    sales team's productivity.
                  </p>
                  <button
                    style={{ color: "#29FFE2" }}
                    className="btn "
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#multiCollapseExample1"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    <i
                      className="fa-sharp fa-solid fa-arrow-right fa-beat-fade"
                      style={{ paddingLeft: "5px" }}
                    ></i>
                  </button>
                  <div
                    className="collapse multi-collapse mt-1"
                    id="multiCollapseExample1"
                  >
                    <p className="card-text">
                      We use targeted email and telemarketing campaigns to
                      generate qualified leads, freeing up your team's time to
                      focus on selling. With our proven methods, you can rest
                      assured that you're reaching the right prospects and
                      achieving your sales goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-10 col-xxl-3 col-lg-3 mx-auto" data-aos="fade-up" data-aos-duration="1300"  data-aos-easing="ease-in-sine">
              <div className="card mb-3 shadow-sm ourservice">
                <img
                  className="card-img-top"
                  src="img/email-marketing.png"
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title">E-Mail Marketing</h5>
                  <p className="card-text">
                    Revamped: "Say goodbye to email list problems with our
                    expert database management.
                  </p>
                  <button
                    style={{ color: "#29FFE2" }}
                    className="btn "
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#multiCollapseExample2"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample2"
                  >
                    <i
                      className="fa-sharp fa-solid fa-arrow-right fa-beat-fade"
                      style={{ paddingLeft: "5px" }}
                    ></i>
                  </button>
                  <div
                    className="collapse multi-collapse mt-1"
                    id="multiCollapseExample2"
                  >
                    <p className="card-text">
                      Our in-house sniper targeting can develop accurate and
                      relevant lists, ready for you to market and reach new
                      contacts."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-10 col-xxl-3 col-lg-3 mx-auto" data-aos="fade-up" data-aos-duration="1300"  data-aos-easing="ease-in-sine">
              <div className="card mb-3 shadow-sm ourservice">
                <img
                  className="card-img-top"
                  src="img/appointment.png"
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Appointment Setting</h5>
                  <p className="card-text">
                    We generate quality leads and sales meetings with our
                    appointment-setting experts.
                  </p>
                  <button
                    style={{ color: "#29FFE2" }}
                    className="btn"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#multiCollapseExample3"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample3"
                  >
                    <i
                      className="fa-sharp fa-solid fa-arrow-right fa-beat-fade"
                      style={{ paddingLeft: "5px" }}
                    ></i>
                  </button>
                  <div
                    className="collapse multi-collapse mt-1"
                    id="multiCollapseExample3"
                  >
                    <p className="card-text">
                      Our advanced call center strategy provides analytics and a
                      high volume of activities, resulting in a high ROI and
                      cost reduction for your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-10 col-xxl-3 col-lg-3 mx-auto" data-aos="fade-up" data-aos-duration="1300"  data-aos-easing="ease-in-sine">
              <div className="card mb-3 shadow-sm ourservice">
                <img
                  className="card-img-top"
                  src="img/live-chat.png"
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title chat">Chat/Voice/E-Mail Support</h5>
                  <p className="card-text">
                    We offer expert chat and email support to help you resolve
                    grievances quickly and easily.
                  </p>
                  <button
                    style={{ color: "#29FFE2" }}
                    className="btn"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#multiCollapseExample4"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample4"
                  >
                    <i
                      className="fa-sharp fa-solid fa-arrow-right fa-beat-fade"
                      style={{ paddingLeft: "5px" }}
                    ></i>
                  </button>
                  <div
                    className="collapse multi-collapse mt-1"
                    id="multiCollapseExample4"
                  >
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurService;
