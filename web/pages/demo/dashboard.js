import React from "react";
import Link from "next/link";
import Head from "../../components/head";
import Nav from "../../components/nav";
import Footer from "../../components/footer";

const Dashboard = () => (
  <div>
    <Head />
    <Nav />

    <div className="app">
      <div className="container">
        <div className="app__inner">
          <div className="app__menu">
            <ul className="vMenu">
              <li>
                <a href="#" className="vMenu--active">
                  Active page
                </a>
              </li>
              <li>
                <a href="#">Second page</a>
              </li>
              <li>
                <a href="#">Third page</a>
              </li>
              <li>
                <a href="#">Fourth page</a>
              </li>
              <li>
                <a href="#">Fifth page</a>
              </li>
            </ul>
          </div>
          <div className="app__main">
            <div className="text-container">
              <h3 className="app__main__title">This is the main area</h3>
              <p>Write or do whatever you want here!</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />

    <style jsx>{``}</style>
  </div>
);

export default Dashboard;
