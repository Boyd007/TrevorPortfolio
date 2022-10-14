import React, { Component } from "react";
import "./projects.scss";
// import "../FooterWaves/Footerwaves";

class Portfolio extends Component {
  render() {
    return (
      <section id="projects">
        <div className="projects">
          <div className="twelve columns collapsed">
            <h4>A Few Projects I Have Been Working On</h4>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a
                    href="https://boyd007.github.io/Personal-Weather-Dashboard/"
                    className="image fit thumb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <img src="assets/weatherthumb.png" alt="weather" /> */}
                  </a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Your Personal Weather App</h3>
                      <p>
                        This application was developed to allow the user to view
                        various weather parameters and recall recent cities
                        searched
                      </p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li>
                          <a
                            href="https://boyd007.github.io/Personal-Weather-Dashboard"
                            className="button project-button"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Weather Application
                          </a>
                        </li>
                        {/* <li>
                          <a
                            href="https://boyd007.github.io/Strong-Password-Generator/"
                            className="button project-button brands"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-github icon"></i>View Source
                          </a>
                        </li> */}
                      </div>
                      <div className="languages">
                        <i className="devicon-nodejs-plain colored technology"></i>
                        <i className="devicon-react-plain-wordmark colored technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a
                    href="https://4ob4p.codesandbox.io/"
                    className="image fit thumb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <img src="images/thumbs/08.jpg" alt="pic-some" /> */}
                  </a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Strong Password Generator</h3>
                      <p>
                        An application designed to allow a user to generate a
                        very strong password.
                      </p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li>
                          <a
                            href="https://boyd007.github.io/Strong-Password-Generator/"
                            className="button project-button brands"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-github icon"></i>Create A Strong
                            Password Here
                          </a>
                        </li>
                      </div>
                      <div className="languages">
                        <i className="devicon-css3-plain-wordmark colored technology"></i>
                        <i className="devicon-react-plain-wordmark colored technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  {/* <a
                    href=""
                    className="image fit thumb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="images/thumbs/09.jpg" alt="final-capstone" />
                  </a> */}
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Workday Scheduler</h3>
                      <p>
                        This application allows the user to plan their day by
                        showing their schedule and blocking off any unavailable
                        time.
                      </p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li>
                          <a
                            href="https://boyd007.github.io/Work-Day-Scheduler/"
                            className="button project-button brands"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-github icon"></i>Schedule Your
                            Day Here
                          </a>
                        </li>
                      </div>
                      <div className="languages">
                        <i className="devicon-react-plain-wordmark colored technology"></i>
                        <i class="devicon-mongodb-plain colored technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a
                    href="https://5dq86.codesandbox.io/"
                    className="image fit thumb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <img src="images/thumbs/10.jpg" alt="final-capstone" /> */}
                  </a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Technology Blog</h3>
                      <p>
                        A blog application designed to allow the user to post
                        and read posts from other users, pertaining to
                        technology.
                      </p>
                    </div>
                    <li>
                      <a
                        href="https://trevortechblog.herokuapp.com/"
                        className="button project-button brands"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-github icon"></i>Click Here To View
                        The Blog
                      </a>
                    </li>
                    <ul className="actions">
                      <div className="actions-wrapper"></div>
                      <div className="languages">
                        <i className="devicon-css3-plain-wordmark colored technology"></i>
                        <i className="devicon-javascript-plain colored technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
