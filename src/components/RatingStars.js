import { useState } from "react"
import { Button, Collapse, OverlayTrigger, Tooltip } from "react-bootstrap"
import { AiFillStar } from "react-icons/ai"
import OneStar from "./OneStar"

function RatingStars(props) {
  const { companyid } = props
  const [show, setShow] = useState(false)
  const [fill, setFill] = useState(0)
  return (
    
    <OverlayTrigger
      placement="bottom" 
      overlay={
       
        <Tooltip >
          <div style={{ padding:15,backgroundColor:"#F4F3F0",
            borderColor: "gray",color:"#797978", width:"100%",margin:"auto"}} onMouseLeave={() => setFill(0)}>
            <OneStar fill={fill} setFill={setFill} starNumber={1} companyid={companyid} setShow={setShow} />
            <OneStar fill={fill} setFill={setFill} starNumber={2} companyid={companyid} setShow={setShow} />
            <OneStar fill={fill} setFill={setFill} starNumber={3} companyid={companyid} setShow={setShow} />
            <OneStar fill={fill} setFill={setFill} starNumber={4} companyid={companyid} setShow={setShow} />
            <OneStar fill={fill} setFill={setFill} starNumber={5} companyid={companyid} setShow={setShow} />
          </div>
          </Tooltip>
        
      }
      show={show}
    >
      <Button  style={{backgroundColor:"#F4F3F0",
            borderColor: "gray",color:"#797978",padding:"10px", width:"40%"}} onClick={() => setShow(!show)}>
        <AiFillStar />
      </Button>
    </OverlayTrigger>
  )
}

export default RatingStars
