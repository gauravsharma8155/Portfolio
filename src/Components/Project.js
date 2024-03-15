import { Extension_data, project_data } from '../utils/Projectdata'
import { useState } from 'react'
function Project() {
  const [showdata, setshowdata] = useState(false)
  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">Projects</span>
          <span className="heading-sec__sub">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </span>
          <div className='project-type'>
            <h1 onClick={() => setshowdata(false)} className='project-name'>Websites</h1>
            <h1   onClick={() => setshowdata(true)}className='project-name'>Chrome Extension</h1>

          </div>
        </h2>


        {/* <div className="projects__content">
        <div className="projects__row">
          <div className="projects__row-img-cont">
            <img src="./assets/jpeg/dopefolio.jpeg" alt="Software Screenshot" className="projects__row-img" loading="lazy"/>
          </div>
          <div className="projects__row-content">
            <h3 className="projects__row-content-title">Dopefolio</h3>
            <p className="projects__row-content-desc">
              Dopefolio is a successful Open-Source project that I created
              which have been featured on some of the biggest tech sites like
              CSS-Tricks, Hostinger, etc &amp; used by thousands of developers
              globally
            </p>
            <a className="btn btn--med btn--theme dynamicBgClr" href="/project-1" target="_blank">Case Study</a>
          </div>
        </div>
        <div className="projects__row">
          <div className="projects__row-img-cont">
            <img src="./assets/jpeg/wilsonport.jpeg" alt="Software Screenshot" className="projects__row-img" loading="lazy"/>
          </div>
          <div className="projects__row-content">
            <h3 className="projects__row-content-title">Wilsonport</h3>
            <p className="projects__row-content-desc">
              Wilsonport is a multiservice logistics and transport company and
              I created their website from scratch using the frontend tools I
              know.
            </p>
            <a className="btn btn--med btn--theme dynamicBgClr" href="/project-2" target="_blank">Case Study</a>
          </div>
        </div>
        <div className="projects__row">
          <div className="projects__row-img-cont">
            <img src="./assets/jpeg/boreal-coffee-clone.jpeg" alt="Software Screenshot" className="projects__row-img" loading="lazy"/>
          </div>
          <div className="projects__row-content">
            <h3 className="projects__row-content-title">Boreal Coffee Clone</h3>
            <p className="projects__row-content-desc">
              I re-created the frontend of Boreal Coffee's official web app
              because I got attracted to their beautiful UI. It was a great
              experience for me to build the entire frontend.
            </p>
            <a className="btn btn--med btn--theme dynamicBgClr" href="/project-3" target="_blank">Case Study</a>
          </div>
        </div>
        <div className="projects__row">
          <div className="projects__row-img-cont">
            <img src="./assets/jpeg/crown-template.jpeg" alt="Software Screenshot" className="projects__row-img" loading="lazy"/>
          </div>
          <div className="projects__row-content">
            <h3 className="projects__row-content-title">Crown Template</h3>
            <p className="projects__row-content-desc">
              Crown is a web template that I created targeting the restaurant
              and food industry which anyone can use to present their business
              online.
            </p>
            <a className="btn btn--med btn--theme dynamicBgClr" href="/project-4" target="_blank">Case Study</a>
          </div>
        </div>
      </div> */}


      { showdata ?   <section className="articles">
          {
            Extension_data.map((item) => {
              const { img_url, title, description, redirect_url } = item
              return <article>
                <div className="article-wrapper">
                  <figure>
                    <img src={img_url} alt="" />
                  </figure>
                  <div className="article-body">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <a href={redirect_url} target="_blank" className="read-more">
                      Read more <span className="sr-only">about this is some title</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            })
          }
        </section> : <section className="articles">
          {
            project_data.map((item) => {
              const { img_url, title, description, redirect_url } = item
              return <article>
                <div className="article-wrapper">
                  <figure>
                    <img src={img_url} alt="" />
                  </figure>
                  <div className="article-body">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <a href={redirect_url} target="_blank" className="read-more">
                      Read more <span className="sr-only">about this is some title</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            })
          }
        </section>}
      </div>
    </section>
  )
}

export default Project