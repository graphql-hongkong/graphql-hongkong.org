// Components
// Vendors
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
// Utils
import "./css";
import HelmetCustom from "./HelmetCustom";
import Meetup2 from "./meetups/meetup-2";


require("../../assets/css/bootstrap.min.css");
require("../../assets/fonts/line-icons.css");
// require('../../assets/scss/slicknav.scss')
require("../../assets/css/nivo-lightbox.css");
// require('../../assets/css/animate.css')

require("../../assets/scss/main.scss");
require("../../assets/scss/responsive.scss");

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HelmetCustom />
      <Meetup2 />
    </Layout>
  );
}
