import React from "react";
import Link from "next/link";

const CallToAction = () => (
  <div>
    <div className="cta cta--reverse">
      <div className="container">
        <div className="cta__inner">
          <h2 className="cta__title">Get started now</h2>
          <p className="cta__sub cta__sub--center">
            Add some vision to your script execution.
          </p>
          <a href="#" className="button button__accent">
            Download Prunr
          </a>
        </div>
      </div>
    </div>

    <style jsx>{``}</style>
  </div>
);

export default CallToAction;
