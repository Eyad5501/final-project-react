import { Card, Carousel, Col, Container, Row } from "react-bootstrap"
import R from "../image/R.jpeg"
import Showcass from "../components/Showcass"


function Homesite() {
  return (
    <>
   
    <div className="B">
      <Container>
      
        <Row>
          <Showcass />
        </Row>
        <Row className="AA"md="9" style={{width:"95%",height:"45vh",margin:"auto"}}>
          {/* <Card> */}
            <Carousel variant="dark" class="carousel-inner">
              <Carousel.Item>
                <div class="row " style={{ borderRadius: "30px"}}>
                  <div class="col-lg-4" style={{marginLeft:"25px"}}>
                    {" "}
                    <img src={R} class="d-block w-100 h-95" style={{ borderRadius: "30px",marginTop:"5px" }} alt="..."  />{" "}
                  </div>
                  <div class="col-lg-6 " style={{margin:"auto",marginLeft:"50px" }}>
                    <div class=" d-flex flex-column justify-content-center my-4 px-3">
                      <p class="review text-center" >
                        "This is one of the projects that have contacted us to build their project and it is an Indian
                        food restaurant"
                      </p>
                      <div class="name d-flex align-items-center justify-content-center">
                        {" "}
                        <span class="fas fa-minus pe-1"></span>
                        <p class="mt-1">ROYAL DINE</p>
                      </div>
                      <a
                        href="https://g5g5.net/artaj/202109214171/%D8%B1%D9%88%D9%8A%D8%A7%D9%84-%D8%AF%D8%A7%D9%8A%D9%86-%D8%AC%D8%AF%D8%A9/"
                        class=" text-center"
                      >
                        {" "}
                        <button className="btn" style={{backgroundColor:"#F4F3F0",
                       borderColor: "gray",color:"#797978",padding:"10px", width:"40%"}}>Project Show</button>
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div class="row" style={{ borderRadius: "30px"}}>
                  <div class="col-lg-4 "style={{marginLeft:"25px"}} >
                    {" "}
                    <img
                      src="https://nafezly-production.s3.eu-west-3.amazonaws.com/uploads/portfolios/6666_5f6f0c3f06883-1601113151.jpg"
                      class="d-block w-100 h-95" style={{ borderRadius: "30px",marginTop:"5px" }}
                      alt="..."
                    />{" "}
                  </div>
                  <div class="col-lg-6 "style={{margin:"auto",marginLeft:"50px" }}>
                    <div class="  d-flex flex-column justify-content-center my-4 px-3">
                      <p class="review text-center " >
                        "This is one of the projects that contacted us to build their project, which is a workshop for
                        the maintenance of tours and We are proud to see it"
                      </p>
                      <div class="name d-flex align-items-center justify-content-center">
                        {" "}
                        <span class="fas fa-minus pe-1"></span>
                        <p class="mt-1">AS</p>
                      </div>
                      <a harf="https://nafezly.com/portfolio/6520" class="job text-center">
                        <button className="btn" style={{backgroundColor:"#F4F3F0",
                       borderColor: "gray",color:"#797978",padding:"10px", width:"40%"}}>Project Show</button>
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          {/* </Card> */}
        </Row>
      </Container>
    </div>
    </>
  )
}
export default Homesite
