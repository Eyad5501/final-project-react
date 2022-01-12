import { useContext } from "react"
import { Col, Container, Row } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"

function ProfileUser() {
  const { profile } = useContext(SQBContext)
  if (!profile) return <h1>Loading...</h1>
  return (
    <Container>
      <Row
        style={{
          backgroundColor: `rgba(50,12,240, 0.3)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Col md="4">
          <img variant="top" src={profile.avatar} width="100%" style={{ borderRadius: "10px", margin: "20px" }} />
        </Col>
        <Col>
          <h1>
            {profile.firstName} {profile.lastName}
          </h1>
          <p>{profile.email}</p>
        </Col>
      </Row>
     
    <Row>
      <h1>Order</h1>
      {profile.orders.map(order=>
      <>
         <p>{order.nameP}</p>
         <img src={order.posterP}/>
         </>
        )}
       
    </Row>
    </Container>
  )
}

export default ProfileUser