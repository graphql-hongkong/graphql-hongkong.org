import React from "react";

export default function PastSponsors() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="section-title-header text-center">
            <h1
              className="section-title wow fadeInUp"
              data-wow-delay="0.2s"
              style={{
                marginTop: 60
              }}
            >
              Past Sponsors
                </h1>
            <p className="wow fadeInDown" data-wow-delay="0.2s"></p>
          </div>
        </div>
      </div>
      <div
        className="row mb-30 text-center wow fadeInDown"
        data-wow-delay="0.3s"
      >
        <div className="col-md-4 col-sm-6 col-xs-12">
          <a href="https://aws.amazon.com">
            <div className="spnsors-logo">
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain"
                }}
                className="img-fluid"
                src={require("../../images/aws.png")}
                alt="AWS"
              />
            </div>
          </a>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <a href="https://aws.amazon.com/amplify">
            <div className="spnsors-logo">
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain"
                }}
                className="img-fluid"
                src={require("../../images/aws-amplify.png")}
                alt="AWS Amplify"
              />
            </div>
          </a>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <a target="_blank" href="https://hasura.io">
            <div className="spnsors-logo">
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain"
                }}
                className="img-fluid"
                src={require("../../images/hasura.svg")}
                alt="Hasura"
              />
            </div>
          </a>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <a href="https://www.brikl.com">
            <div className="spnsors-logo">
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain"
                }}
                className="img-fluid"
                src={require("../../images/BrikL.svg")}
                alt="BrikL"
              />
            </div>
          </a>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <a href="https://www.kintohub.com/">
            <div className="spnsors-logo">
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain"
                }}
                className="img-fluid"
                src={require("../../images/kintohub.png")}
                alt="Kintohub"
              />
            </div>
          </a>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdkgoUclUI5KOcdYvunKbtAU13bsoHMCSMxdPphpJ8r6DXh6w/viewform"
          >
            <div className="spnsors-logo">
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain"
                }}
                className="img-fluid"
                src={require("../../images/become-sponsor.jpg")}
                alt="Hasura"
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
