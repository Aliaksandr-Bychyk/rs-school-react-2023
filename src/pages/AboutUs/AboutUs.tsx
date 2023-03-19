import React from 'react';
import Header from '../../components/Header/Header';
import './AboutUs.css';

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <Header title="About Us" />
        <div className="about-us-container">
          <p className="about-us-paragraph">
            <strong>RS School</strong> is free-of-charge and community-based education program
            conducted by The Scopes developer communitysince 2013.
          </p>
          <p className="about-us-paragraph">
            Everyone can study at RS School, regardless of age, professional employment, or place of
            residence.
          </p>
          <p className="about-us-paragraph">
            The mentors and trainers of our school are front-end and javascript developers from
            different companies and countries.
          </p>
        </div>
      </>
    );
  }
}

export default AboutUs;
