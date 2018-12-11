import React from "react";
import Link from "next/link";

const Footer = () => (
  <div>
    <div className="footer footer--dark">
      <div className="container">
        <div className="footer__inner">
          <Link href="/">
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
                Code/design by{" "}
                <a
                  href="https://twitter.com/funkstyr"
                  target="_blank"
                  className="footer__link"
                >
                  @funkstyr
                </a>
              </div>
            </div>
            <div className="footer__data__item">
              <div className="footer__row">
                Created with ☕ in{" "}
                <a
                  href="https://undraw.co"
                  target="_blank"
                  className="footer__link"
                >
                  Sacramento
                </a>
              </div>
              <div className="footer__row">
                <Link href="/demo/auth">
                  <a className="footer__link">Demo/Auth</a>
                </Link>
              </div>
              <div className="footer__row">
                <Link href="/demo/dashboard">
                  <a className="footer__link">Demo/Dashboard</a>
                </Link>
              </div>
              <div className="footer__row">
                <Link href="/demo/page">
                  <a className="footer__link">Demo/Page</a>
                </Link>
              </div>
            </div>
            <div className="footer__data__item">
              <div className="footer__row">
                <a
                  href="https://github.com/anges244/evie"
                  target="_blank"
                  className="footer__link"
                >
                  GitHub
                </a>
              </div>
              <div className="footer__row">
                <a
                  href="https://twitter.com/undraw_co"
                  target="_blank"
                  className="footer__link"
                >
                  Twitter
                </a>
              </div>
              <div className="footer__row">
                <a
                  href="https://www.facebook.com/undraw.co/"
                  target="_blank"
                  className="footer__link"
                >
                  Facebook
                </a>
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
