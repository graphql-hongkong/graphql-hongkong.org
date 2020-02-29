import React from "react";
import Organizers from "./organizers";
import PastSpeakers from "./pastspeakers";
import PastSponsors from "./pastsponsors";

export default function Sponsors() {
  return (
    <>
      {/* <!-- Sponsors Section Start --> */}
      <div id="sponsors" style={{ paddingBottom: 40 }}></div>
      <section id="sponsors" className="section-padding">
        <div className="container">
          <PastSpeakers />
          <PastSponsors />
          <Organizers />
        </div>
      </section>
      {/* <!-- Sponsors Section End --> */}
    </>
  );
}
