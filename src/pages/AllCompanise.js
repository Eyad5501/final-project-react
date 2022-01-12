import { useContext } from "react"
import { Row } from "react-bootstrap"
import CompanyItem from "../components/CompanyItem"
import SQBContext from "../utils/SQBContext"

function AllCompanise() {
  const { companies } = useContext(SQBContext)

  return (
    <>
      <Row>
        <h4 className="mt-5 mb-4">All companise</h4>
      </Row>
      <Row md={5}>
        {companies.map(company => (
          <CompanyItem company={company} key={company._id} />
        ))}
      </Row>
    </>
  )
}

export default AllCompanise
