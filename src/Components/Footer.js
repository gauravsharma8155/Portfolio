import linkdin from '../images/linkedin-ico.png'
import github from '../images/github-ico.png'

function Footer() {
  return (
    <footer class="main-footer">
    <div class="main-container">
      <div class="main-footer__upper">
        <div class="main-footer__row main-footer__row-1">
          <h2 class="heading heading-sm main-footer__heading-sm">
            <span>Social</span>
          </h2>
          <div class="main-footer__social-cont">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gaurav-sharma-4bba8621a/">
              <img class="main-footer__icon" src={linkdin} alt="Gaurav Sharma Linkedin Profile"/>
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/gauravsharma8155">
              <img class="main-footer__icon" src={github} alt="Gaurav Sharma Github Profile"/>
            </a>
           

           
           
          </div>
        </div>
        <div class="main-footer__row main-footer__row-2">
          <h2 class="heading heading-sm text-lt">Gaurav Sharma</h2>
          <p class="main-footer__short-desc">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
      </div>

      
      <div class="main-footer__lower">
        © Copyright
        <script>
          document.write(new Date().getFullYear());
        </script>2024
        
      </div>
    </div>
  </footer>
  )
}

export default Footer