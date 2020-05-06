import React from "react";

const speakers = [
  {
    link: "https://twitter.com/hackintoshrao",
    image: "karthic-rao.jpeg",
    name: "Karthic Rao",
    role: "Developer Advocate, DGraph",
  },
  {
    link: "https://twitter.com/gethackteam",
    image: "roy-derks.jpg",
    name: "Roy Derks",
    role: "Senior Frontend Developer, City of Amsterdam",
  },
  {
    link: "https://twitter.com/maarcingebala",
    image: "marcin-gebala.jpg",
    name: "Marcin Gebala",
    role: "Lead Developer, Saleor",
  },
  {
    link: "https://twitter.com/UriGoldshtein",
    image: "uri-goldshtein.jpg",
    name: "Uri Goldshtein",
    role: "Founder, The Guild",
  },
  {
    link: "https://twitter.com/codingcoop",
    image: "joseph-cooper.png",
    name: "Joseph Cooper",
    role: "Founder & CEO, KintoHub",
  },
  {
    link: "https://twitter.com/dabit3",
    image: "nader-dabit.jpg",
    name: "Nader Dabit",
    role: "Developer Advocate, AWS",
  },
  {
    link: "https://twitter.com/shrutikapoor08",
    image: "shruti-kapoor.png",
    name: "Shruti Kapoor",
    role: "Software Engineer, Paypal",
  },
  {
    link: "https://twitter.com/Tirumarai",
    image: "tirumarai-selvan.png",
    name: "Tirumarai Selvan",
    role: "Serverless Manager, Hasura",
  },
  {
    link: "https://twitter.com/thorwebdev",
    image: "thor-schaeff.png",
    name: "Thor Schaeff",
    role: "Developer Advocate, Stripe",
  },
  {
    link: "https://twitter.com/VoodooLawz",
    image: "laura-ambrose.jpg",
    name: "Laura Ambrose",
    role: "Front End Developer, KintoHub",
  },
  {
    link: "https://www.linkedin.com/in/jason-mok-31121a1",
    image: "jason-mok.jpg",
    name: "Jason Mok",
    role: "CEO, LibraGold",
  },
  {
    link: "https://twitter.com/chatsidhartha",
    image: "sidharta-chatterjee.jpg",
    name: "Sidharta Chatterjee",
    role: "Software Engineer, Gatsby",
  },
  {
    link: "https://www.linkedin.com/in/varunvasu",
    image: "varum-vasudevan.png",
    name: "Varum Vasudevan",
    role: "Full Stack Developer",
  },
  {
    link: "https://twitter.com/bgever",
    image: "bart-verkoeijen.png",
    name: "Bart Verkoeijen",
    role: "Developer Advocate, KintoHub",
  },
];

export default function PastSpeakers() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="section-title-header text-center">
            <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">
              Past Speakers
            </h1>
            <p className="wow fadeInDown" data-wow-delay="0.2s"></p>
          </div>
        </div>
      </div>
      <div
        className="row mb-30 text-center wow fadeInDown"
        data-wow-delay="0.3s"
      >
        <div className="row">
          {speakers.map(({ link, image, name, role }) => {
            return (
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                {/* <!-- Team Item Starts --> */}
                <div className="team-item wow fadeInUp" data-wow-delay="0.8s">
                  <a href={link} target="_blank">
                    <div className="team-img">
                      <img
                        className="img-fluid"
                        src={require(`../../images/${image}`)}
                        alt=""
                      />
                      <div className="team-overlay">
                        <div className="overlay-social-icon text-center">
                          <ul className="social-icons">
                            <li>
                              <a href={link} target="_blank">
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
                        <a href={link} target="_blank">
                          {name}
                        </a>
                      </h3>
                      <p>{role}</p>
                    </div>
                  </a>
                </div>
                {/* <!-- Team Item Ends --> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
