import React from "react";
import Link from "next/link";

const Footer = () => (
  <div>
    <div className="footer footer--dark">
      <div className="container">
        <div className="footer__inner">
          <Link href="/" as={`${process.env.ASSET_PREFIX}/`}>
            <a className="footer__textLogo">Prunr</a>
          </Link>
          <div className="footer__data">
            <div className="footer__data__item">
              <div className="footer__row">
                Created by{" "}
                <a
                  href="https://twitter.com/omnibytes"
                  target="_blank"
                  className="footer__link"
                >
                  Omnibytes
                </a>
              </div>
              <div className="footer__row">
                Theme by{" "}
                <a
                  href="https://twitter.com/undraw_co"
                  target="_blank"
                  className="footer__link"
                >
                  @undraw_co
                </a>
              </div>
              <div className="footer__row">
                Created with <i className="fas fa-coffee" /> in{" "}
                <a
                  href="https://www.cityofsacramento.org/"
                  target="_blank"
                  className="footer__link"
                >
                  Sacramento
                </a>
              </div>
            </div>
            <div className="footer__data__item">
              <div className="footer__row">
                <Link
                  href="/demo/auth"
                  as={`${process.env.ASSET_PREFIX}/demo/auth`}
                >
                  <a className="footer__link">Demo/Auth</a>
                </Link>
              </div>
              <div className="footer__row">
                <Link
                  href="/demo/dashboard"
                  as={`${process.env.ASSET_PREFIX}/demo/dashboard`}
                >
                  <a className="footer__link">Demo/Dashboard</a>
                </Link>
              </div>
              <div className="footer__row">
                <Link
                  href="/demo/page"
                  as={`${process.env.ASSET_PREFIX}/demo/page`}
                >
                  <a className="footer__link">Demo/Page</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{``}</style>
  </div>
);

export default Footer;
