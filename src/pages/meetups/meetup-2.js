import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import Organizers from "../sections/organizers";
import PastSpeakers from "../sections/pastspeakers";
import PastSponsors from "../sections/pastsponsors";

require("../../../assets/css/bootstrap.min.css");
require("../../../assets/fonts/line-icons.css");
// require('../../../assets/scss/slicknav.scss')
require("../../../assets/css/nivo-lightbox.css");
// require('../../../assets/css/animate.css')

require("../../../assets/scss/main.scss");
require("../../../assets/scss/responsive.scss");
const slide1 = require("../../images/background.jpg");
const slideImages = [
  slide1
  // 'images/slide_3.jpg',
  // 'images/slide_4.jpg'
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const Tickets = () => {
  return (
    <section id="buy-tickets" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay="0.2s">
                Tickets
              </h2>
              <p className="wow fadeInDown" data-wow-delay="0.2s"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const Slideshow = () => {
  return (
    <Slide {...properties}>
      <div className="each-slide">
        <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
          <span>Slide 1</span>
        </div>
      </div>
      <div className="each-slide">
        <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
          <span>Slide 2</span>
        </div>
      </div>
    </Slide>
  );
};

export default function Meetup2() {
  const [showTickets, setShowTickets] = useState(false);

  return (
    <>
      <header id="header-wrap">
        {/* <!-- Navbar Start --> */}
        <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
          <div className="container">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <div className="navbar-header">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#main-navbar"
                aria-controls="main-navbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
                <span className="icon-menu"></span>
                <span className="icon-menu"></span>
                <span className="icon-menu"></span>
              </button>
              <a href="#" className="navbar-brand">
                <img
                  style={{
                    height: "40px",
                    width: "40px",
                    objectFit: "contain",
                    display: "block",
                    margin: "0 auto"
                  }}
                  src={require("../../images/graphql-hongkong-logo.png")}
                  alt="GraphQL Hong Kong Logo"
                />
              </a>
            </div>
            <div className="collapse navbar-collapse" id="main-navbar">
              <ul className="navbar-nav mr-auto w-100 justify-content-end">
                <li className="nav-item">
                  <a className="nav-link" href="#header-wrap">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#speakers">
                    Speakers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#intro">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#agenda">
                    Agenda
                  </a>
                </li>

                {/* <li className="nav-item">
                <a className="nav-link" href="#gallery">
                  Gallery
                </a>
              </li> */}
                {/* <li className="nav-item">
                <a className="nav-link" href="#faq">
                  Faq
                </a>
              </li> */}
                <li className="nav-item">
                  <a className="nav-link" href="#sponsors">
                    Sponsors
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#pricing">
                    rspv
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#venue">
                    venue
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#coc">
                    coc
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Mobile Menu Start --> */}
          {
            <ul className="mobile-menu">
              <li>
                <a className="page-scrool" href="#speakers">
                  Speakers
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#agenda">
                  Agenda
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#venue">
                  Venue
                </a>
              </li>
            </ul>
          }
          {/* <!-- Mobile Menu End --> */}
        </nav>
        {/* <!-- Navbar End --> */}

        <div
          style={{
            paddingTop: "20vh",
            height: "100vh",
            backgroundImage: `
        linear-gradient(
          rgba(15,15,15, 0.25), 
          rgba(15,15,15, 0.25)
        ),
          url(${slide1})
        `,
            backgroundSize: "cover",
            textAlign: "center"
          }}
        >
          <h1 className="mainTitle">
            GraphQL Hong Kong <br />
            Meetup #2
          </h1>
          <div className="navbar-brand">
            <img
              style={{
                height: "200px",
                width: "200px",
                objectFit: "contain",
                display: "block",
                margin: "0 auto",
                marginBottom: "20px"
              }}
              src={require("../../images/graphql-hongkong-logo.png")}
              alt="GraphQL Hong Kong Logo"
            />
          </div>
          <h2
            class="title-date"
            style={{
              color: "white",
              // color: '#e535ab',
              // background: 'white',
              fontSize: "2.5em",
              width: "max-content",
              margin: "0 auto"
            }}
          >
            05<sup>th</sup> Mar, 2020
          </h2>
          <h2
            class="title-date"
            style={{
              color: "white",
              // color: '#e535ab',
              // background: 'white',
              fontSize: "2.5em",
              width: "max-content",
              margin: "0 auto"
            }}
          >
            <a href="https://zoom.us/j/881896207" target="_blank">Zoom</a> & <a href="https://youtu.be/l9e9VbGPo2c" target="_blank">Youtube</a>
          </h2>
          <br />
          <br />
          <div className="col-12 text-center">
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdm3jOtYk-s_MVSoNucNVMUwjLGTU30FcAdReuEEkNLPOYIWQ/viewform"
              className="btn btn-common"
              style={{ marginRight: 10 }}
            >
              Submit a talk
            </a>
            <a
              href="#pricing"
              className="btn btn-common"
              style={{ marginRight: 10 }}
            >
              RSPV NOW!
            </a>
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdkgoUclUI5KOcdYvunKbtAU13bsoHMCSMxdPphpJ8r6DXh6w/viewform"
              className="btn btn-common"
            >
              Become a sponsor
            </a>
          </div>
        </div>
      </header>

      {/* <!-- Team Section Start --> */}
      <div id="speakers" style={{ paddingBottom: 40 }}></div>
      <section id="speakers" className="section-padding text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h1
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Who's Speaking?
                </h1>
                {/* <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-4">
              {/* <!-- Team Item Starts --> */}
              <div className="team-item wow fadeInUp" data-wow-delay="0.4s">
                <a href="https://twitter.com/motleydev" target="_blank">
                  <div className="team-img">
                    <img
                      className="img-fluid"
                      src={require("../../images/jesse-martin.jpg")}
                      alt=""
                    />
                    <div className="team-overlay">
                      <div className="overlay-social-icon text-center">
                        <ul className="social-icons">
                          <li>
                            <a
                              href="https://twitter.com/motleydev"
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
                      <a href="https://twitter.com/motleydev" target="_blank">
                        Jesse Martin
                      </a>
                    </h3>
                    <p>Developer Relations, GraphCMS</p>
                  </div>
                </a>
              </div>
              {/* <!-- Team Item Ends --> */}
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
              {/* <!-- Team Item Starts --> */}
              <div className="team-item wow fadeInUp" data-wow-delay="0.8s">
                <a href="https://twitter.com/gethackteam" target="_blank">
                  <div className="team-img">
                    <img
                      className="img-fluid"
                      src={require("../../images/roy-derks.jpg")}
                      alt=""
                    />
                    <div className="team-overlay">
                      <div className="overlay-social-icon text-center">
                        <ul className="social-icons">
                          <li>
                            <a
                              href="https://twitter.com/gethackteam"
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
                        href="https://twitter.com/gethackteam"
                        target="_blank"
                      >
                        Roy Derks
                      </a>
                    </h3>
                    <p>Senior Frontend Developer, City of Amsterdam</p>
                  </div>
                </a>
              </div>
              {/* <!-- Team Item Ends --> */}
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
              {/* <!-- Team Item Starts --> */}
              <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
                <a href="https://twitter.com/hackintoshrao" target="_blank">
                  <div className="team-img">
                    <img
                      className="img-fluid"
                      src={require("../../images/karthic-rao.jpeg")}
                      alt=""
                    />
                    <div className="team-overlay">
                      <div className="overlay-social-icon text-center">
                        <ul className="social-icons">
                          <li>
                            <a
                              href="https://twitter.com/hackintoshrao"
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
                        href="https://twitter.com/hackintoshrao"
                        target="_blank"
                      >
                        Karthic Rao
                      </a>
                    </h3>
                    <p>Developer Advocate, DGraph</p>
                  </div>
                </a>
              </div>
              {/* <!-- Team Item Ends --> */}
            </div>
          </div>
          <br />
          <br />
          <Organizers />
          <br />
          <br />
          <PastSpeakers />
        </div>
      </section>
      {/* <!-- Team Section End --> */}

      {/* <!-- Services Section Start --> */}
      <div id="intro" style={{ paddingBottom: 40 }}></div>
      <section id="intro" className="services section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h1
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Why GraphQL Hong Kong?
                </h1>
                {/* <p className="wow fadeInDown" data-wow-delay="0.2s">1<sup>st</sup> local GraphQL event in HK</p> */}
              </div>
            </div>
          </div>
          <div className="row services-wrapper">
            {/* <!-- Services item --> */}
            <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
              <div
                className="services-item wow fadeInDown"
                data-wow-delay="0.2s"
              >
                <div className="icon">
                  <i className="lni-heart"></i>
                </div>
                <div className="services-content">
                  <h3>
                    <a href="#">Get Inspired</a>
                  </h3>
                  <p>
                    With talks from community members and companies from the
                    GraphQL ecosystem.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Services item --> */}
            <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
              <div
                className="services-item wow fadeInDown"
                data-wow-delay="0.4s"
              >
                <div className="icon">
                  <i className="lni-user"></i>
                </div>
                <div className="services-content">
                  <h3>
                    <a href="#">Meet New Faces</a>
                  </h3>
                  <p>At the first GraphQL meetup in Hong Kong.</p>
                </div>
              </div>
            </div>
            {/* <!-- Services item --> */}
            <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
              <div
                className="services-item wow fadeInDown"
                data-wow-delay="0.6s"
              >
                <div className="icon">
                  <i className="lni-mic"></i>
                </div>
                <div className="services-content">
                  <h3>
                    <a href="#">Fresh Tech Insights</a>
                  </h3>
                  <p>Expect new announcements and launches at the event.</p>
                </div>
              </div>
            </div>
            {/* <!-- Services item --> */}
            <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
              <div
                className="services-item wow fadeInDown"
                data-wow-delay="0.8s"
              >
                <div className="icon">
                  <i className="lni-users"></i>
                </div>
                <div className="services-content">
                  <h3>
                    <a href="#">Networking Session</a>
                  </h3>
                  <p>
                    Connect with people at the event to learn more about the
                    people behind and in the GraphQL community.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Services item --> */}
            <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
              <div className="services-item wow fadeInDown" data-wow-delay="1s">
                <div className="icon">
                  <i className="lni-world"></i>
                </div>
                <div className="services-content">
                  <h3>
                    <a href="#">Local Event</a>
                  </h3>
                  <p>An event with international speakers.</p>
                </div>
              </div>
            </div>
            {/* <!-- Services item --> */}
            <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
              <div
                className="services-item wow fadeInDown"
                data-wow-delay="1.2s"
              >
                <div className="icon">
                  <i className="lni-tshirt"></i>
                </div>
                <div className="services-content">
                  <h3>
                    <a href="#">Free Swags</a>
                  </h3>
                  <p>
                    Get your stickers and swags from our sponsors and partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Services Section End --> */}

      {/* <!-- Counter Area Start--> */}
      <section className="counter-section section-padding">
        <div className="container">
          <div className="row">
            {/* <!-- Counter Item --> */}
            <div className="col-md-6 col-lg-2 col-xs-12 work-counter-widget text-center">
              <div className="counter wow fadeInRight" data-wow-delay="0.3s">
                {/* <div className="icon"><i className="lni-map"></i></div> */}
                {/* <p>Wst. Conference Center</p> */}
                {/* <span>San Francisco, CA</span> */}
              </div>
            </div>
            {/* <!-- Counter Item --> */}
            <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
              <div className="counter wow fadeInRight" data-wow-delay="0.6s">
                <div className="icon">
                  <i className="lni-timer"></i>
                </div>
                <p>March 05th, 2020</p>
                <span>12:00 – 14:30</span>
              </div>
            </div>
            {/* <!-- Counter Item --> */}
            <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
              <div className="counter wow fadeInRight" data-wow-delay="0.9s">
                <div className="icon">
                  <i className="lni-users"></i>
                </div>
                <p>∞ Available Spots</p>
                <span>Enjoy a remote meetup!</span>
              </div>
            </div>
            {/* <!-- Counter Item --> */}
            <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
              <div className="counter wow fadeInRight" data-wow-delay="1.2s">
                <div className="icon">
                  <i className="lni-dinner"></i>
                </div>
                <p>Connect &amp; GraphQL</p>
                <span>Don’t miss it</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Counter Area End--> */}

      {/* <!-- Schedule Section Start --> */}
      <div id="agenda" style={{ paddingBottom: 40 }}></div>
      <section id="agenda" className="schedule section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h1
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Agenda
                </h1>
                <p className="wow fadeInDown" data-wow-delay="0.2s"></p>
              </div>
            </div>
          </div>
          <div
            className="schedule-area row wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <div className="schedule-tab-title col-md-3 col-lg-3 col-xs-12">
              <div className="table-responsive">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="monday-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="monday"
                      aria-expanded="true"
                    >
                      <div className="item-text">
                        <h4>Thrusday</h4>
                        <h5>5th March</h5>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="schedule-tab-content col-md-9 col-lg-9 col-xs-12 clearfix">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="monday"
                  role="tabpanel"
                  aria-labelledby="monday-tab"
                >
                  <div id="accordion">
                    <div className="card">
                      <div id="headingTwo">
                        <div
                          className="collapsed card-header"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <div className="images-box">
                            <img
                              className="img-fluid"
                              width={60}
                              style={{ borderRadius: 0 }}
                              src={require("../../images/graphql-hongkong-logo.png")}
                              alt=""
                            />
                          </div>
                          <span className="time">11:30 - 12:00</span>
                          <h4>Registration</h4>
                          <h5 className="name">
                            Get ready meeting new folks & enjoying chats
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div id="headingTwo">
                        <div
                          className="collapsed card-header"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <div className="images-box">
                            <img
                              className="img-fluid"
                              src={require("../../images/carlos-rufo.jpg")}
                              alt=""
                            />
                          </div>
                          <span className="time">12:00 - 12:15</span>
                          <h4>Welcome & Intro</h4>
                          <h5 className="name">
                            Carlos Rufo - Co-Organizer, GraphQL Hong Kong
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div id="headingThree">
                        <div
                          className="collapsed card-header"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <div className="images-box">
                            <img
                              className="img-fluid"
                              src={require("../../images/jesse-martin.jpg")}
                              alt=""
                            />
                          </div>
                          <span className="time">12:15 - 12:45</span>
                          <h4>An Introduction to React Query 1.0</h4>
                          <h5 className="name">
                            Jesse Martin - Developer Advocate, GraphCMS
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div id="headingThree">
                        <div
                          className="collapsed card-header"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <div className="images-box">
                            <img
                              className="img-fluid"
                              src={require("../../images/roy-derks.jpg")}
                              alt=""
                            />
                          </div>
                          <span className="time">12:45 - 13:15</span>
                          <h4>Testing GraphQL: From Zero To Hundred Percent</h4>
                          <h5 className="name">
                            Roy Derks - Senior Frontend Developer, City of Amsterdam
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div id="headingThree">
                        <div
                          className="collapsed card-header"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <div className="images-box">
                            <img
                              className="img-fluid"
                              src={require("../../images/karthic-rao.jpeg")}
                              alt=""
                            />
                          </div>
                          <span className="time">13:15 - 13:45</span>
                          <h4>Building GraphQL API for a twitter clone in 10 minutes</h4>
                          <h5 className="name">
                            Karthic Rao - Developer Advocate, DGraph
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div id="headingTwo">
                        <div
                          className="collapsed card-header"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <div className="images-box">
                            <img
                              className="img-fluid"
                              src={require("../../images/tobias-meixner.jpg")}
                              alt=""
                            />
                          </div>
                          <span className="time">13:45 - 14:00</span>
                          <h4>Closing & Announcements</h4>
                          <h5 className="name">
                            Tobias Meixner - Co-Organizer, GraphQL Hong Kong
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Schedule Section End --> */}

      {/* <!-- Sponsors Section Start --> */}
      <div id="sponsors" style={{ paddingBottom: 40 }}></div>
      <section id="sponsors" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h1
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Sponsors
                </h1>
                <p className="wow fadeInDown" data-wow-delay="0.2s"></p>
              </div>
            </div>
          </div>
          <div
            className="row mb-30 text-center wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <div className="col-md-6 col-sm-6 col-xs-6">
              <h2>Venue</h2>
              <a href="https://engineers.sg">
                <div className="spnsors-logo">
                  <img
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "contain"
                    }}
                    className="img-fluid"
                    src={require("../../images/engineers-sg.png")}
                    alt="engineers-sg"
                  />
                </div>
              </a>
              {/* <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdkgoUclUI5KOcdYvunKbtAU13bsoHMCSMxdPphpJ8r6DXh6w/viewform"
              >
                <div className="spnsors-logo">
                  <img
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "contain"
                    }}
                    className="img-fluid"
                    src={require("../../images/become-sponsor.jpg")}
                    alt="Hasura"
                  />
                </div>
              </a> */}
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <h2>Swag</h2>
              <a target="_blank" href="https://www.brikl.com">
                <div className="spnsors-logo">
                  <img
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "contain"
                    }}
                    className="img-fluid"
                    src={require("../../images/BrikL.svg")}
                    alt="BrikL"
                  />
                </div>
              </a>
            </div>
          </div>
          <PastSponsors />
        </div>
      </section>
      {/* <!-- Sponsors Section End --> */}
      <div id="pricing" style={{ paddingBottom: 40 }}></div>
      <section id="pricing" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h1
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  RSPV
                </h1>
                <p className="wow fadeInDown" data-wow-delay="0.2s"></p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-xa-12 mb-3"></div>
            <div className="col-lg-4 col-sm-6 col-xa-12 mb-3">
              <div
                className="price-block-wrapper wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="icon">
                  <i className="lni-layers"></i>
                </div>
                <div className="colmun-title">
                  <h5>Free</h5>
                </div>
                <div className="price">
                  <h2>Passes</h2>
                  <p>∞ Spots Available</p>
                </div>
                <div className="pricing-list">
                  <ul>
                    <li>
                      <i className="lni-check-mark-circle"></i>
                      <span className="text">Entrance</span>
                    </li>
                    <li>
                      <i className="lni-check-mark-circle"></i>
                      <span className="text">Access to all talks</span>
                    </li>
                    <li>
                      <i className="lni-check-mark-circle"></i>
                      <span className="text">Dinner & Drinks</span>
                    </li>
                    <li>
                      <i className="lni-check-mark-circle"></i>
                      <span className="text">Swag</span>
                    </li>
                  </ul>
                </div>
                <a
                  href="https://www.meetup.com/GraphQLHongKong/events/269158848"
                  target="_blank"
                  className="btn btn-common"
                >
                  RSPV now!
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xa-12 mb-3"></div>
          </div>
        </div>
      </section>
      {/* <!-- Map Section Start --> */}
      <div id="venue" style={{ paddingBottom: 100 }}></div>
      <section id="venue-map">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h2
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Venue
                </h2>
                <p className="wow fadeInDown" data-wow-delay="0.2s"></p>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12 col-sm-12 col-lg-12"
              style={{
                textAlign: "center",
                paddingBottom: 40
              }}
            >
              <h3 style={{ marginBottom: 40 }}>
                GraphQL Hong Kong Meetup #2 will be hosted by
              </h3>
              <a href="https://engineers.sg" target="_blank">
                <img width={500} src={require("../../images/engineers-sg.png")} />
              </a>
              <h3 style={{ margin: "20px 0px" }}>
                @ <a href="https://zoom.us/j/881896207" target="_blank">Zoom</a> & <a href="https://youtu.be/l9e9VbGPo2c" target="_blank">Youtube</a>
              </h3>
            </div>
            {/* <div className="col-12" style={{ padding: 0 }}>
              <div id="conatiner-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.909922956181!2d114.18173085109052!3d22.281401749138187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404019b30d1286b%3A0x435f07b1a333608e!2sAWS%20Hong%20Kong!5e0!3m2!1sen!2shk!4v1572846267272!5m2!1sen!2shk"
                  style={{
                    width: "100%",
                    height: "500px",
                    border: 0
                  }}
                  allowfullscreen
                ></iframe>
              </div>
            </div>*/}
          </div>
        </div>
        <div style={{ paddingBottom: 40 }}></div>
      </section>
      {/* <!-- Map Section End --> */}
      {/* <!-- Code of Conduct Section Start --> */}
      <div id="coc" style={{ paddingBottom: 40 }}></div>
      <section id="coc" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h2
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Code of Conduct
                </h2>
                <p className="wow fadeInDown" data-wow-delay="0.2s"></p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xs-12 wow fadeInRight"
              data-wow-delay="0.3s"
            >
              <div className="video">
                <img
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "contain",
                    display: "block",
                    margin: "0 auto"
                  }}
                  src={require("../../images/graphql-hongkong-logo.png")}
                  alt="GraphQL Hong Kong Logo"
                />
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xs-12 wow fadeInLeft"
              data-wow-delay="0.3s"
            >
              <p className="intro-desc">
                GraphQL Hong Kong is dedicated to providing a harassment-free
                conference experience for everyone, regardless of gender, gender
                identity and expression, age, sexual orientation, disability,
                physical appearance, body size, race, ethnicity, religion (or
                lack thereof), or technology choices. We do not tolerate
                harassment of conference participants in any form. Sexual
                language and imagery is not appropriate for any conference
                venue, including talks, workshops, parties, Twitter and other
                online media. Conference participants violating these rules may
                be sanctioned or expelled from the conference without a refund
                at the discretion of the conference organisers.
              </p>
              <br />
              <h2 className="intro-title">Check List</h2>
              <ul className="list-specification">
                <li>
                  <i className="lni-check-mark-circle"></i> By & for the
                  community!
                </li>
                <li>
                  <i className="lni-check-mark-circle"></i> Harassment-free
                </li>
                <li>
                  <i className="lni-check-mark-circle"></i> Open to everyone
                </li>
                <br />
              </ul>
              <span>
                Check the less quick version{" "}
                <a href="https://confcodeofconduct.com/">here</a>!
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Code of Conduct Section End --> */}

      {/* <!-- Blog Section Start --> */}
      <section
        style={{
          display: "none"
        }}
        id="blog"
        className="section-padding"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h1
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Our Latest News & Articles
                </h1>
                <p className="wow fadeInDown" data-wow-delay="0.2s">
                  Global Grand Event on Digital Design
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="blog-item">
                <div className="blog-image">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="assets/img/blog/img-1.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="descr">
                  <div className="tag">Design</div>
                  <h3 className="title">
                    <a href="single-blog.html">
                      The 9 Design Trends You Need to Know
                    </a>
                  </h3>
                  <div className="meta-tags">
                    <span className="date">Jan 20, 2018</span>
                    <span className="comments">
                      | <a href="#"> by Cindy Jefferson</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="blog-item">
                <div className="blog-image">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="assets/img/blog/img-2.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="descr">
                  <div className="tag">Design</div>
                  <h3 className="title">
                    <a href="single-blog.html">
                      The 9 Design Trends You Need to Know
                    </a>
                  </h3>
                  <div className="meta-tags">
                    <span className="date">Jan 20, 2018 </span>
                    <span className="comments">
                      | <a href="#"> by Cindy Jefferson</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="blog-item">
                <div className="blog-image">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="assets/img/blog/img-3.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="descr">
                  <div className="tag">Design</div>
                  <h3 className="title">
                    <a href="single-blog.html">
                      The 9 Design Trends You Need to Know
                    </a>
                  </h3>
                  <div className="meta-tags">
                    <span className="date">Jan 20, 2018</span>
                    <span className="comments">
                      | <a href="#"> by Cindy Jefferson</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 text-center">
              <a href="#" className="btn btn-common">
                Read More News
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Blog Section End --> */}

      {/* <!-- Subscribe Area Start --> */}
      {/* <div id="subscribe" className="section-padding">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-10 col-lg-7">
            <div className="subscribe-inner wow fadeInDown" data-wow-delay="0.3s">
              <h2 className="subscribe-title">Sign Up For Our Newsletter</h2>
              <form className="text-center form-inline">
                <input className="mb-20 form-control" name="email" placeholder="Enter Your Email Here" />
                <button type="submit" className="btn btn-common sub-btn" data-style="zoom-in" data-spinner-size="30" name="submit" id="submit">
                <span className="ladda-label"><i className="lni-check-box"></i> Submit</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div> */}
      {/* <!-- Subscribe Area End --> */}

      {/* <!-- Map Section Start --> */}
      {/* TODO PUT MAP HERE FOR VENUE */}
      {/* <section id="google-map-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div id="conatiner-map"></div>
          </div>
        </div>
      </div>
    </section> */}
      {/* <!-- Map Section End --> */}

      {/* <!-- Contact Us Section --> */}
      <div id="contact" style={{ paddingBottom: 40 }}></div>
      <section id="contact" className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h1
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Drop A Message
                </h1>
                {/* <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p> */}
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-xs-12">
              <div
                className="container-form wow fadeInLeft"
                data-wow-delay="0.2s"
              >
                <div className="form-wrapper">
                  <form
                    action="thank-you"
                    name="contact"
                    method="POST"
                    netlify-honeypot="bot-field"
                    data-netlify="true"
                    role="form"
                    id="contactForm"
                    data-toggle="validator"
                  >
                    <input
                      name="bot-field"
                      style={{
                        display: "none"
                      }}
                    />
                    <div className="row">
                      <div className="col-md-6 form-line">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Name"
                            required
                            data-error="Please enter your name"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6 form-line">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Email"
                            required
                            data-error="Please enter your Email"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            placeholder="Your message"
                            className="form-control"
                            rows="4"
                            id="message"
                            name="message"
                            required
                            data-error="Write your message"
                          ></textarea>
                        </div>
                        <div className="form-submit">
                          <button
                            type="submit"
                            className="btn btn-common"
                            id="form-submit"
                          >
                            <i
                              className="fa fa-paper-plane"
                              aria-hidden="true"
                            ></i>{" "}
                            Send Us Now
                          </button>
                          <div
                            id="msgSubmit"
                            className="h3 text-center hidden"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-area section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <h3>
                <img src="assets/img/logo.png" alt="" />
              </h3>
              <p>
                {/* Aorem ipsum dolor sit amet elit sed lum tempor incididunt ut labore el dolore alg minim veniam quis nostrud ncididunt. */}
              </p>
            </div>
            <div
              className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <h3>QUICK LINKS</h3>
              <ul>
                <li>
                  <a href="#speakers">Our Speakers</a>
                </li>
                <li>
                  <a href="#intro">About Conference</a>
                </li>
                <li>
                  <a href="#agenda">Event Schedule</a>
                </li>
                <li>
                  <a href="#sponsors">Our sponsors</a>
                </li>
                <li>
                  <a href="#pricing">Get tickets</a>
                </li>
                {/* <li><a href="#">Latest News</a></li> */}
                {/* <li><a href="#">Event Photo Gallery</a></li> */}
              </ul>
            </div>
            <div
              className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              {/* <h3>RECENT POSTS</h3>
            <ul className="image-list">
              <li>
                <figure className="overlay">
                  <img className="img-fluid" src="assets/img/art/a1.jpg" alt="" />
                </figure>
                <div className="post-content">
                  <h6 className="post-title"> <a href="blog-single.html">Lorem ipsm dolor sumit.</a> </h6>
                  <div className="meta"><span className="date">October 12, 2018</span></div>
                </div>
              </li>
              <li>
                <figure className="overlay">
                  <img className="img-fluid" src="assets/img/art/a2.jpg" alt="" />
                </figure>
                <div className="post-content">
                  <h6 className="post-title"><a href="blog-single.html">Lorem ipsm dolor sumit.</a></h6>
                  <div className="meta"><span className="date">October 12, 2018</span></div>
                </div>
              </li>
            </ul> */}
            </div>
            <div
              className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-delay="0.8s"
            >
              {/* <h3>SUBSCRIBE US</h3>
            <div className="widget">
              <div className="newsletter-wrapper">
                <form method="post" id="subscribe-form" name="subscribe-form" className="validate">
                  <div className="form-group is-empty">
                    <input type="email" value="" name="Email" className="form-control" id="EMAIL" placeholder="Your email" required="" />
                    <button type="submit" name="subscribe" id="subscribes" className="btn btn-common sub-btn"><i className="lni-pointer"></i></button>
                    <div className="clearfix"></div>
                  </div>
                </form>
              </div>
            </div> */}
              {/* <!-- /.widget --> */}
              <div className="widget">
                <h5 className="widget-title">FOLLOW US ON</h5>
                <ul className="footer-social">
                  {/* <li><a className="facebook" href="#"><i className="lni-facebook-filled"></i></a></li> */}
                  <li>
                    <a
                      className="twitter"
                      href="https://twitter.com/GraphQLHongKong"
                    >
                      <i className="lni-twitter-filled"></i>
                    </a>
                  </li>
                  {/* <li><a className="linkedin" href="#"><i className="lni-linkedin-filled"></i></a></li> */}
                  {/* <li><a className="google-plus" href="#"><i className="lni-google-plus"></i></a></li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* <!-- Go to Top Link --> */}
      <a href="#" className="back-to-top">
        <i className="lni-chevron-up"></i>
      </a>

      <a
        style={{
          height: 0,
          display: "grid"
        }}
        href="/thank-you"
      >
        &nbsp;
      </a>
    </>
  );
}
