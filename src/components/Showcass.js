import { Button } from "react-bootstrap"
import { Carousel } from "react-bootstrap"
import { Link } from "react-router-dom"
import PexelsCompany from "../image/pexels-company.jpg"
import pexelsMeet from "../image/pexels-Meet.jpg"
import pexelsStudy from "../image/pexels-study.jpg"
import "./Showcass.css"
function Showcase() {
  return (
   <> 
     
    <div class="container my-5 ">
     
    <div class="ombre-externe">
        <div class="ombre-interne">
      < Carousel class="container mb-6" >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={PexelsCompany}id="pexels-company.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>The Best Companies</h3>
            <p>Interested in studying projects and how to plan them</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pexelsMeet}id="pexels-Meet.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Meetings With Clients</h3>
            <p>Interested in customer satisfaction and assistance in building the project</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pexelsStudy}id="pexels-study.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Study Projects</h3>
            <p>Interested in studying projects and selecting employees for this task</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <center class="container my-4">
     <Link to="/loginUser"><Button style={{backgroundColor: "#F4F3F0",
  borderColor: "gray",color:"#797978",padding:"15px 60px" ,
  }}>Join The Trading World</Button></Link>
      </center>
        </div>
      </div>
    </div>
    </>
  )
}

export default Showcase
