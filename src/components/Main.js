import PropTypes from 'prop-types'
import React from 'react'
import jobtrackerintro from '../images/jobtrackerintro.jpg'
import travelapppic from '../images/travelapppic.jpg'
import festivaltrackerpic from '../images/festivaltrackerpic.jpg'


class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Introduction</h2>
          <p>
            Hello! My name is Vincent Kokojan, but everyone who knows me calls me Vinnie.
            I am a software developer from Louisville, Kentucky. I graduated from the University 
            of Louisville with a Bachelor's of Science in Finance and have been working
            in the entertainment industry, specifically theatrical production. I have
            always been passionate about new technologies as my main hobby which is why recently I 
            decided to attend the Software Engineering Immersive bootcamp at General Assembly 
            in Austin, Texas. I feel that all of the in-class projects, personal projects, and hackathons at 
            General Assembly as well as my own persuit of knowledge has prepared me for my career pivot into
            the tech space and I could not be more excited to continue my journey.
          </p>
          <p>
            If you are reading this, that means you have made it all the way to my personal portfolio
            site! I appreciate you taking time out of your day to check it out! Also feel free to browse
            my GitHub <a href="https://github.com/vin23-dev">here</a>.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <a className="image main" href="https://job-tracker-capstone.herokuapp.com/login"><img src={jobtrackerintro}/></a>
          <p>
          My software development job tracker is an application developed with React.js, Node.js, and Express.js.
          It allows the user to signup and and create a collection of jobs they have applied to during their job 
          search, based company, position, location, date posted, date applied, and estimated salary. Click <a href="https://github.com/vin23-dev/ga-capstone-project">here</a> to 
          see the code or on the image above to navigate to the heroku deployment.
          </p>
          <a className="image main" href="https://into-the-unknown.herokuapp.com/"><img src={travelapppic}/></a>
          <p>
          Into the Unknown is an app developed with Python and the Django framework. It allows the user to signup, 
          login and then add places they have been to based on country, state/province, city, and description. It 
          also allows the user to leave comments and ratings on certain locations once they have been created. This
          was a group project designed to practice git workflow. Click <a href="https://github.com/skylarw19/into-the-unknown">here</a> to 
          see the code or on the image above to navigate to the heroku deployment.
          </p>
          <a className="image main" href="https://festival-tracker.herokuapp.com/users"><img src={festivaltrackerpic}/></a>
          <p>
          Festival tracker that allows the addition of new festivals that I have attended, specified by name, location, 
          number of years attended, links to the festival website, comments, and the ability to edit inputs.
          Click <a href="https://github.com/vin23-dev/SEIproject2">here</a> to 
          see the code or on the image above to navigate to the heroku deployment.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="labeled-icons">
            <li>
              <h3 className="icon fa-home">
                <span className="label">Address</span>
              </h3>
              1708 Harvard Dr.
              <br />
              Louisville, KY 40205
              <br />
              United States
            </li>
              <li>
                <h3 className="icon fa-mobile">
                  <span className="label">Phone</span>
                </h3>
                502-409-1552
              </li>
              <li>
                <h3 className="icon fa-envelope-o">
                  <span className="label">Email</span>
                </h3>
              <a href="mailto:vkokojanjr@gmail.com">vkokojanjr@gmail.com</a>
            </li>
          </ul>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/vinniekokojan/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/vin23-dev"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/vinnie.kokojan/" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/vinniekokojan/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
