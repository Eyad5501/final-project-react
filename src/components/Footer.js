
import"./Footer.css"

function Footer() {
  return (
    <>
    <div className="AA">
      <footer style={{marginTop: "60px"}}>
        <div >
          <div className="row">
            <div style={{ textAlign: "center", marginTop: "15px" }} class="col-sm-12 col-md-6">
              <h3 style={{ color: "rgba(202, 171, 31, 0.473)",marginBottom: "20px"  }}>About</h3>
              <p style={{color:"white", marginLeft:"20px"}} className="text-justify">
              We help you achieve your goals, reach your goal, and compete in the labor market
              </p>
            </div>

            <div style={{ marginTop: "15px", paddingLeft:"70px" }} className="col-6 col-md-3">
              <h3 style={{ color: "rgba(202, 171, 31, 0.473)" }}>Categories</h3>
              <ul style={{ color: "rgba(202, 171, 31, 0.473)" }} className="footer-links ">
                <li>
                  <a style={{ color: "white" }} href="google.com">
                    Website Design
                  </a>
                </li>
                <li>
                  <a style={{ color: "white" }} href="#">
                    UI Design
                  </a>
                </li>
                <li>
                  <a style={{ color: "white" }} href="#">
                    Web Development
                  </a>
                </li>
                <li>
                  <a style={{ color: "white" }} href="#">
                    Video Editor
                  </a>
                </li>
                <li>
                  <a style={{ color: "white" }} href="#">
                    Theme Creator
                  </a>
                </li>
                <li>
                  <a style={{ color: "white" }} href="#">
                    Templates
                  </a>
                </li>
              </ul>
            </div>

            <div style={{ marginTop: "15px" }} className="col-6 col-md-3">
              <h3 style={{ color: "rgba(202, 171, 31, 0.473)" }}>Quick Links</h3>
              <ul style={{ color: "rgba(202, 171, 31, 0.473)" }} className="footer-links">
                <li>
                  <a style={{  color: "white" }} href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a style={{  color: "white" }} href="#">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a style={{  color: "white" }} href="#">
                    Contribute
                  </a>
                </li>
                <li>
                  <a style={{ color: "white" }} href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a style={{  color: "white" }} href="#">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
         
        </div>
      </footer>
      </div>
    </>
  )
}

export default Footer