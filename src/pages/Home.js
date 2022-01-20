import { Col, Container, Row } from "react-bootstrap"
import CompanyList from "../components/CompanyList"





function Home() {
  return (
    <>
    
      <Container>
     
        <Row>
         
          <CompanyList listTitle="Company"/>
          
        </Row>
      </Container>
    </>
  )
}
export default Home
