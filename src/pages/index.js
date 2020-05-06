// Components
// Vendors
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
// Utils
import HelmetCustom from "./HelmetCustom";
import Landing from "./landing";

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
      <Landing />
    </Layout>
  );
}
