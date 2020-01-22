import React, { useState } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { Slide } from "react-slideshow-image";
import Countdown from "react-countdown-now";
import Iframe from "react-iframe";
import { Helmet } from "react-helmet";
import Meetup1 from "./meetups/meetup-1";
import Meetup2 from "./meetups/meetup-2";
import Landing from "./landing";

require("../../assets/css/bootstrap.min.css");
require("../../assets/fonts/line-icons.css");
// require('../../assets/scss/slicknav.scss')
require("../../assets/css/nivo-lightbox.css");
// require('../../assets/css/animate.css')

require("../../assets/scss/main.scss");
require("../../assets/scss/responsive.scss");
const slide1 = require("../images/background.jpg");
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

const IndexPage = () => {
  const [showTickets, setShowTickets] = useState(false);

  return (
    <Layout>
      <SEO title="Home" />
      <Helmet>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@GraphQLHongKong" />
        <meta name="twitter:title" content="GraphQL Hong Kong Meetup" />
        <meta
          name="twitter:description"
          content="A meetup & conference by-for the GraphQL community"
        />
        <meta
          name="twitter:image"
          content="https://graphql-hongkong.org/graphql-hongkong-logo-card.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site" content="@GraphQLHongKong" />
        <meta property="og:title" content="GraphQL Hong Kong Meetup" />
        <meta
          property="og:description"
          content="A meetup & conference by-for the GraphQL community"
        />
        <meta
          property="og:image"
          content="https://graphql-hongkong.org/graphql-hongkong-logo-card.png"
        />
        <meta
          property="og:image:url"
          content="https://graphql-hongkong.org/graphql-hongkong-logo-card.png"
        />
        <meta
          name="description"
          content="A meetup & conference by-for the GraphQL community"
        />
        <meta
          name="keywords"
          content="GraphQL,meetup,Asia,HongKong,GraphQLHongKong"
        />
        <meta property="og:url" content="https://graphql-hongkong.org/" />
      </Helmet>
      <Landing />
    </Layout>
  );
};

export default IndexPage;
