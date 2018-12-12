import React from "react";
import Link from "next/link";
import Steps from "./steps";
import Jumbotron from "./jumbotron";

const Sections = () => (
  <div>
    <Steps />
    <div />

    <div className="expanded landing__section">
      <div className="container">
        <div className="expanded__inner">
          <div className="expanded__media">
            <img
              src={`${
                process.env.ASSET_PREFIX
              }/static/images/undraw_browser.svg`}
              className="expanded__image"
            />
          </div>
          <div className="expanded__content">
            <h2 className="expanded__title">
              Natural styling with almost nothing to learn
            </h2>
            <p className="expanded__text">
              Evie brings you the pages you'll need and the structure to create
              your own, without a learning curve. It is minimal and mostly
              styles plain elements. There are only a few classNamees you'll
              need to know but nothing to disrupt your preferred coding style.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="expanded landing__section">
      <div className="container">
        <div className="expanded__inner">
          <div className="expanded__media">
            <img
              src={`${
                process.env.ASSET_PREFIX
              }/static/images/undraw_frameworks.svg`}
              className="expanded__image"
            />
          </div>
          <div className="expanded__content">
            <h2 className="expanded__title">
              Framework agnostic. Your front-end setup, your choice.
            </h2>
            <p className="expanded__text">
              Evie has zero dependencies and uses vanilla JavaScript for a few
              functions with minimal footprint. You can use React, Vue, Angular,
              jQuery or whatever you prefer.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="expanded landing__section">
      <div className="container">
        <div className="expanded__inner">
          <div className="expanded__media">
            <img
              src={`${process.env.ASSET_PREFIX}/static/images/together.svg`}
              className="expanded__image"
            />
          </div>
          <div className="expanded__content">
            <h2 className="expanded__title">
              Ready for production or rapid prototyping
            </h2>
            <p className="expanded__text">
              Landing, authentication and a few other pages to select from,
              despite the small size. Tested on production at unDraw with
              amazing speeds and unopinionated on how to structure your project.
              We really hope you'll find it awesome and useful!
            </p>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{``}</style>
  </div>
);

export default Sections;
