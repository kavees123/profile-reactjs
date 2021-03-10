import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Front End Developer at York University <span>May 2019-present</span></h2>
                        <p>I was working on migrating content site form an old server to a new server, which involved updgtating the codebase from Jquery to reactjs. Additionally, I upgraded the cases by introducing bootstrap and adding more AODA complicated to the site as well and also making sure the site is mobile friendly because the professor would use tablets and not have a laptop with them all the time.</p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer Developer at Ontario Treasury Board Secretariat <span>May 2018- December 2018</span></h2>
                        <p> I was working on implementing a training site using angular and python. There I was part of a bigger team and there I learned how the marketing/a team and the development team interact.  Especially when the marketing team will announce a feature on the dashboard and I will work on that task and once its done set it to a. While I was there I was able to watch the training site go from production to development and that involved making sure the site was AODA complicate and doing some unit tests as well.
Addtion to the training site I was given a task to updarade and fix bugs and add AODA features on some other internal  sites as well.
</p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Full Stack Developer (Co-op) at Ministry of Health and Long-term care <span> September 2016- September 2017</span></h2>
                        <p>In the ministry of health I was working on a website where patients can view their data and this site was created using angular and node.js.  While working on the site I was also given another project to develop a mobile site.  I worked on the Android site of the mobile app.  I would say the challenge here was finding the similar feature that was available at the website and putting them on the mobile site. Here I was introduced to full stack</p>
                      </div>
                    </div>
                  </article>
                
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
