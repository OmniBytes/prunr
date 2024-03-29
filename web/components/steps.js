import React from "react";
import Link from "next/link";

const Steps = () => (
  <div>
    <div />
    <div className="steps landing__section">
      <div className="container">
        <h2>Who is Prunr for?</h2>
        <p>
          Here's who we can think of, but surely creative people will surprise
          us.
        </p>
      </div>
      <div className="container">
        <div className="steps__inner">
          <div className="step">
            <div className="step__media">
              <img
                src={`${
                  process.env.ASSET_PREFIX
                }/static/images/undraw_designer.svg`}
                className="step__image"
              />
            </div>
            <h4>Programmers</h4>
            <p className="step__text">
              A landing page for your open source projects. Present your
              solution, easily create docs.
            </p>
          </div>
          <div className="step">
            <div className="step__media">
              <img
                src={`${
                  process.env.ASSET_PREFIX
                }/static/images/undraw_responsive.svg`}
                className="step__image"
              />
            </div>
            <h4>Designers</h4>
            <p className="step__text">
              A website for your own freebies. Let the world download and use
              your artwork.
            </p>
          </div>
          <div className="step">
            <div className="step__media">
              <img
                src={`${
                  process.env.ASSET_PREFIX
                }/static/images/undraw_creation.svg`}
                className="step__image"
              />
            </div>
            <h4>Makers</h4>
            <p className="step__text">
              A great starting point for your web application. Focus on your
              idea and execution.
            </p>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{``}</style>
  </div>
);

export default Steps;
