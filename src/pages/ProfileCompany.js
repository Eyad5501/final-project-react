// import { useContext } from "react"
// import { Col, Container, Row } from "react-bootstrap"

// import MovieItem from "../components/MovieItem"
// import SQBContext from "../utils/SQBContext"

// function ProfileCompany() {
//   const { profileCompany } = useContext(SQBContext)
//   if (!profileCompany) return <h1>Loading...</h1>
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
//           <img variant="top" src={profileCompany.photo} width="100%" style={{ borderRadius: "10px", margin: "20px" }} />
//         </Col>
//         <Col>
//           <h1>
//             {profileCompany.nameCompany}
//           </h1>
//           <p>{profileCompany.email}</p>
//         </Col>
//       </Row>
//       <Row className="mt-5">
//         <h3>Field</h3>
//         {profileCompany.fieldS.map(field => (
//           <MovieItem field={field} key={field._id} />
//         ))}
//       </Row>
//       <Row className="mt-5">
//         <h3>Employee</h3>
//         {profileCompany.employees.map(employee => (
//           <MovieItem employee={employee} key={employee._id} />
//         ))}
//       </Row>
     
     
//     </Container>
//   )
// }

// export default ProfileCompany