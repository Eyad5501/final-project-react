// import { useContext } from "react"
// import { Col, Container, Row } from "react-bootstrap"

// import MovieItem from "../components/MovieItem"
// import SQBContext from "../utils/SQBContext"

// function ProfileEmployee() {
//   const { profileEmployee } = useContext(SQBContext)
//   if (!profileEmployee) return <h1>Loading...</h1>
//   return (
//     <Container>
//       <Row
//         style={{
//           backgroundColor: `rgba(50,12,240, 0.3)`,
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           display: "flex",
//           alignItems: "center",
//         }}
//       >
//         <Col md="4">
//           <img variant="top" src={profileEmployee.photo} width="100%" style={{ borderRadius: "10px", margin: "20px" }} />
//         </Col>
//         <Col>
//         {profileEmployee.companyid}
//         </Col>
//         <Col>
//           <h1>
//             {profileEmployee.firstName} {profileEmployee.lastName}
//           </h1>
//           <p>{profileEmployee.email}</p>
//           <p>{profileEmployee.phone}</p>
//         </Col>
//       </Row>
//       <Row className="mt-5">
//         <h3>study</h3>
//         {profileEmployee. studise.map( study => (
//           <MovieItem  study={ study} key={ study._id} />
//         ))}
//       </Row>
//       <Row className="mt-5">
//         <h3>Field</h3>
//         {profileEmployee. fields.map( field => (
//           <MovieItem  field={ field} key={ field._id} />
//         ))}
//       </Row>
     
//     </Container>
//   )
// }

// export default ProfileEmployee