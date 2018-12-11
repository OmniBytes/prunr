import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default () => (
  <div>
    <Head title="Blog" />
    <Nav />
    <div className="page__header">
      <div className="hero__overlay hero__overlay--gradient" />
      <div className="hero__mask" />
      <div className="page__header__inner">
        <div className="container">
          <div className="page__header__content">
            <div className="page__header__content__inner" id="navConverter">
              <h1 className="page__header__title">Multi-purpose page</h1>
              <p className="page__header__text">
                This is mostly a simple layout, rather than a complete page
                unlike the others. However this is a really useful starting
                point for anything you want to create.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="page" style={{ minHeight: 600 }}>
      <div className="container">
        <div className="page__inner">
          <div className="page__menu">
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
          <div className="page__main">
            <div className="text-container">
              <h3 className="page__main__title">This is the main area</h3>
              <p>Write or do whatever you want here!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
