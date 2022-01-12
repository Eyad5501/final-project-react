import { useContext } from "react"
import { Row } from "react-bootstrap"
import CompanyItem from "../components/CompanyItem"
import SQBContext from "../utils/SQBContext"

function AllFilds() {
  const { fildes } = useContext(SQBContext)

  return (
    <>
      <Row>
        <h4 className="mt-5 mb-4">All fildes</h4>
      </Row>
      <Row md={5}>
        {fildes.map(filde => (
          <CompanyItem key={filde._id} filde={filde} />
        ))}
      </Row>
    </>
  )
}

export default AllFilds
