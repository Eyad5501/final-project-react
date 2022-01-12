import { Container, Row } from "react-bootstrap"
import CompanyList from "../components/CompanyList"
import Showcass from "../components/Showcass"


function Home() {
  return (
    <>
    
      <Container>
        
        <Row>
          <CompanyList listTitle="What's Popular" />
          <CompanyList listTitle="Company"/>
        </Row>
      </Container>
    </>
  )
}
export default Home
