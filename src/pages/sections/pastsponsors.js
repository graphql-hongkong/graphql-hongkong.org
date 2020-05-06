import React from "react";

const sponsors = [
  {
    link: "https://www.brikl.com",
    image: "BrikL.svg",
  },
  {
    link: "https://engineers.sg",
    image: "engineers-sg.png",
  },
  {
    link: "https://aws.amazon.com",
    image: "aws.png",
  },
  {
    link: "https://aws.amazon.com/amplify",
    image: "aws-amplify.png",
  },
  {
    link: "https://hasura.io",
    image: "hasura.svg",
  },
  {
    link: "https://www.kintohub.com",
    image: "kintohub.png",
  },
  {
    link:
      "https://docs.google.com/forms/d/e/1FAIpQLSdkgoUclUI5KOcdYvunKbtAU13bsoHMCSMxdPphpJ8r6DXh6w/viewform",
    image: "become-sponsor.jpg",
  },
];

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
                marginTop: 60,
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
        {sponsors.map(({ link, image }) => {
          return (
            <div className="col-md-4 col-sm-6 col-xs-12">
              <a href={link} target="_blank">
                <div className="spnsors-logo">
                  <img
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "contain",
                    }}
                    className="img-fluid"
                    src={require(`../../images/${image}`)}
                    alt={image}
                  />
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
