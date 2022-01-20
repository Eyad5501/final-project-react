import { useContext } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"
import"./ProfileUser.css"
import  pexelsphoto from "../image/pexels-photo.jpg"

function ProfileUser() {
  const { profile } = useContext(SQBContext)
  if (!profile) return <h1>Loading...</h1>
  return (
    <Container >
     
      <img className="IT" src={pexelsphoto} id="pexels-photo.jpg"/>
       <div className="AA">
      <div className="Ap">
      <Row  className="d-flex align-items-center md-5 "
        
        // }}
      >
        <Col md="4">
          <img className="image rounded-circle" variant="top" src={profile.avatar} width="100%" style={{ borderRadius: "10px", margin: "20px" }} />
        </Col>
        <Col>
          <h1 className="name">
            {profile.firstName} {profile.lastName}
          </h1>
          <p className="email">{profile.email}</p>
        </Col>
      </Row>
      </div>
      <div className="AC">
    <Row >
   
      <h1 className="name mb-5 ">Order</h1>
      {profile.orders.map(order=>
      <> 
      <Col className=" md-3" >
      <Card  className=" md-7 "style={{ width:"100%",height:"50vh", backgroundColor:"rgb(228, 228, 228)",borderRadius:"10px"}}>
      <div className="mb-5">
         <p className="namep" >{order.nameP}</p>
         <img className="image1" src={order.posterP}/>
         <p className="orderstatus">{order.orderstatus}</p>
          <p style={{ backgroundColor:"#797978",width:"40%",margin: "auto",borderRadius:"6px"  }}>
         {order.study ? <a className="btn"href={order.study}  target="_blank">view study</a> : null}
         </p>
          </div>
         </Card>
         </Col>
         </>
        )}
       
    </Row>
    </div>
    </div>
    
    </Container>
  )
}

export default ProfileUser