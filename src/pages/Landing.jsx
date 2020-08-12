import React from "react";
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div>
      <div class="splash-container">
        <div class="splash">
          <h1 class="splash-head">TODO</h1>
          <p class="splash-subhead">Let tech do the remembering for you</p>
          <p>
            {/* TODO: Link to signin, signup, or app page */}
            <Link to="/app" class="pure-button pure-button-primary">
              Get Started
            </Link>
          </p>
        </div>
      </div>

      <div class="content-wrapper">
        <div class="content">
          <h2 class="content-head is-center">
            Let tech do the remembering for you.
          </h2>

          <div class="pure-g">
            <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
              <h3 class="content-subhead">
                <i class="fa fa-rocket"></i>
                Get Started Quickly
              </h3>
              <p>
                Simple signup, start adding todos immediately!
              </p>
            </div>
            <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
              <h3 class="content-subhead">
                <i class="fa fa-mobile"></i>
                Non-intrusive reminders
              </h3>
              <p>
                Get a summary email delivered to your inbox in the AM
              </p>
            </div>
            <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
              <h3 class="content-subhead">
                <i class="fa fa-th-large"></i>
                Useful visualizations
              </h3>
              <p>
                See a calendar of upcoming items, or a summary of today's tasks
              </p>
            </div>
            <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
              <h3 class="content-subhead">
                <i class="fa fa-check-square-o"></i>
                Free
              </h3>
              <p>
                As in free beer!
              </p>
            </div>
          </div>
        </div>

        <div class="ribbon l-box-lrg pure-g">
          <div class="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
            <img
              width="300"
              alt="File Icons"
              class="pure-img-responsive"
              src="/img/common/file-icons.png"
            />
          </div>
          <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">
            <h2 class="content-head content-head-ribbon">
              What are you waiting for?
            </h2>

            <p>
              Sign up now, and start winning at life.
            </p>
          </div>
        </div>

        <div class="content">
          <h2 class="content-head is-center">
            Feedback
          </h2>

          <div class="pure-g">
            <div class="l-box-lrg pure-u-1 pure-u-md-2-5">
              <form class="pure-form pure-form-stacked">
                <fieldset>
                  <label for="name">Your Name</label>
                  <input id="name" type="text" placeholder="Your Name"></input>

                  <label for="email">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                  ></input>

                  <label for="message">Your Message</label>
                  <textarea
                    id="message"
                    type="text"
                    placeholder="Your message"
                  ></textarea>

                  <button type="submit" class="pure-button">
                    Send message
                  </button>
                </fieldset>
              </form>
            </div>

            <div class="l-box-lrg pure-u-1 pure-u-md-3-5">
              <h4>Share your thoughts</h4>
              <p>
                Have some thoughts on how this could be done better? Send a message! All opinions are welcome.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
