import React from "react";

export default function Organizers() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="section-title-header text-center">
            <h1
              className="section-title wow fadeInUp"
              data-wow-delay="0.2s"
            >
              Organizers
                </h1>
            {/* <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p> */}
          </div>
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-sm-6 col-md-6 col-lg-4">
          {/* <!-- Team Item Starts --> */}
          <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
            <a href="https://twitter.com/swcarlosrj" target="_blank">
              <div className="team-img">
                <img
                  className="img-fluid"
                  src={require("../../images/carlos-rufo.jpg")}
                  alt="Carlos Rufo"
                />
                <div className="team-overlay">
                  <div className="overlay-social-icon text-center">
                    <ul className="social-icons">
                      <li>
                        <a
                          href="https://twitter.com/swcarlosrj"
                          target="_blank"
                        >
                          <i
                            className="lni-twitter-filled"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="info-text">
                <h3>
                  <a href="https://twitter.com/swcarlosrj" target="_blank">
                    Carlos Rufo
                      </a>
                </h3>
                <p>Co-Organizer, GraphQL Hong Kong</p>
              </div>
            </a>
          </div>
          {/* <!-- Team Item Ends --> */}
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4">
          {/* <!-- Team Item Starts --> */}
          <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
            <a href="https://twitter.com/meixnertobias" target="_blank">
              <div className="team-img">
                <img
                  className="img-fluid"
                  src={require("../../images/tobias-meixner.jpg")}
                  alt=""
                />
                <div className="team-overlay">
                  <div className="overlay-social-icon text-center">
                    <ul className="social-icons">
                      <li>
                        <a
                          href="https://twitter.com/meixnertobias"
                          target="_blank"
                        >
                          <i
                            className="lni-twitter-filled"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="info-text">
                <h3>
                  <a
                    href="https://twitter.com/meixnertobias"
                    target="_blank"
                  >
                    Tobias Meixner
                      </a>
                </h3>
                <p>Co-Organizer, GraphQL Hong Kong</p>
              </div>
            </a>
          </div>
          {/* <!-- Team Item Ends --> */}
        </div>
      </div>
    </>
  );
}
