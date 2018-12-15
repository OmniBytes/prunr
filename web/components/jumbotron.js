import React from "react";
import Link from "next/link";

const Jumbotron = () => (
  <div>
    <div className="hero">
      <div className="hero__overlay hero__overlay--gradient" />
      <div className="hero__mask" />
      <div className="hero__inner">
        <div className="container">
          <div className="hero__content">
            <div className="hero__content__inner" id="navConverter">
              <h1 className="hero__title">Vision for your scripts.</h1>
              <p className="hero__text">
                It is extemely lightweight, customizable and works perfectly on
                every OS.
              </p>
              <a href="#calltoaction" className="button button__accent">
                Download Prunr
              </a>
              <a href="#" className="button hero__button">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{``}</style>
  </div>
);

export default Jumbotron;
