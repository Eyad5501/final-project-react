import { useContext } from "react"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { toast } from "react-toastify"
import SQBContext from "../utils/SQBContext"

function OneStar(props) {
  const { fill, setFill, starNumber, companyid, setShow } = props
  const { addRating } = useContext(SQBContext)
  return starNumber <= fill ? (
    <AiFillStar
      size="25"
      onMouseOver={() => setFill(starNumber)}
      onClick={() => {
        if (localStorage.tokenAdmins) addRating(companyid, starNumber)
        else toast.error("please login first")
        setShow(false)
      }}
    />
  ) : (
    <AiOutlineStar size="25" onMouseOver={() => setFill(starNumber)} />
  )
}

export default OneStar
