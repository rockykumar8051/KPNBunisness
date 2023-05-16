import React from "react";
import { useEffect } from "react";
import "./style.css";

function Conter() {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    const speed = 10;

    counters.forEach((counter) => {
      const updCount = () => {
        counters.innerText = 0;
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const score = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + score);
          setTimeout(updCount, 100);
        } else {
          counter.innerText = target + "+";
        }
      };

      let countercontainer = document.querySelector(".counter-container");

      let option = {
        rootMargin: "0px 0px -200px 0px",
      };

      const sectionObserver = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          updCount();
        }
      }, option);
      sectionObserver.observe(countercontainer);
    });
  }, []);
  return (
    <>
      <section className="main-heading my-4  pt-4">
        <div
          className="container-fluid "
          style={{
            background: "linear-gradient(180deg, #2A2A2C 0%, #1A1A1E 100%)",
            boxShadow:
              "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="container">
            <div className="counter-container">
              <div className="content">
                <div className="counter" data-target="30">
                  0
                </div>
                <h3>Happy Clients</h3>
              </div>
              <div className="content">
                <div className="counter" data-target="50">
                  0
                </div>
                <h3>Projects</h3>
              </div>
              <div className="content">
                <div className="counter" data-target="1463">
                  0
                </div>
                <h3>Hours Of Support</h3>
              </div>
              <div className="content">
                <div className="counter" data-target="25">
                  0
                </div>
                <h3>Hard Workers</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container text-center mt-4 px-4 py-4 " data-aos="fade-up" data-aos-duration="1000"  data-aos-easing="ease-in-sine">
        <h2 style={{ color: "#29FFE2" }}>Our Purpose</h2>
        <p style={{ color: "#fff" }}>
          Our purpose is to build a brand that stands for values, dedication,
          and commitment. We believe that a business is only as good as the
          people working for it. That's why we have the best talent on our team
          who go the extra mile to ensure your success.
        </p>
      </div>
    </>
  );
}

export default Conter;
