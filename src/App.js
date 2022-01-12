import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Homesite from "./pages/Homesite"
import "./App.css"
import { Route, Routes, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import SQBContext from "./utils/SQBContext"
import Signup from "./pages/SignUp"
import LoginUser from "./pages/LoginUser"
import LoginCompany from "./pages/LoginCompany"
import LoginEmployee from "./pages/LoginEmployee"
import { toast, ToastContainer } from "react-toastify"
import ProfileUser from "./pages/ProfileUser"
import AllCompanise from "./pages/AllCompanise"
import OneCompany from "./pages/OneCompany"
import AllFields from "./pages/AllFields"
import OneField from "./pages/Homesite"
import Orders from "./pages/Order"
function App() {
  const [profile, setProfile] = useState(null)
  const [companies, setcompanies] = useState([])
  const [orders, setorders] = useState([])
  const [fields, setfields] = useState([])
  const navigate = useNavigate()

  const getCopmany = async () => {
    const response = await axios.get("http://localhost:5000/api/company")
    setcompanies(response.data)
  }
  const getOrder = async () => {
    const response = await axios.get("http://localhost:5000/api/order")
    setorders(response.data)
  }
  const getField = async () => {
    const response = await axios.get("http://localhost:5000/api/field")
    setfields(response.data)
  }

  const getProfile = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/profile", {
      headers: {
        Authorization: localStorage.tokenAdmins,
      },
    })
    setProfile(response.data)
  }
  useEffect(() => {
    getCopmany()
    getField()
    getOrder()
    if (localStorage.tokenAdmins) getProfile()
  }, [])

  const signup = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        phone: form.elements.phone.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }

      await axios.post("http://localhost:5000/api/auth/signup", userBody)
      console.log("signup success")
      navigate("/login")
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }

  const loginUser = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }

      const response = await axios.post("http://localhost:5000/api/auth/login", userBody)

      const token = response.data
      localStorage.tokenAdmins = token

      getProfile()
      console.log("login success")

      navigate("/")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  // const loginCompany = async e => {
  //   e.preventDefault()
  //   try {
  //     const form = e.target
  //     const userBody = {
  //       email: form.elements.email.value,
  //       password: form.elements.password.value,
  //     }

  //     const response = await axios.post("http://localhost:5000/api/company/login", userBody)

  //     const token = response.data
  //     localStorage.tokenOrders = token
  //     getProfile()
  //     console.log("login success")
  //     navigate("/")
  //   } catch (error) {
  //     if (error.response) toast.error(error.response.data)
  //     else console.log(error)
  //   }
  // }
  // const loginEmployee = async e => {
  //   e.preventDefault()
  //   try {
  //     const form = e.target
  //     const userBody = {
  //       email: form.elements.email.value,
  //       password: form.elements.password.value,
  //     }

  //     const response = await axios.post("http://localhost:5000/api/auth/login", userBody)

  //     const token = response.data
  //     localStorage.tokenOrders = token

  //     getProfile()
  //     console.log("login success")

  //     navigate("/")
  //   } catch (error) {
  //     if (error.response) toast.error(error.response.data)
  //     else console.log(error)
  //   }
  // }
  const addRating = async (companyid, rating) => {
    try {
      const ratingBody = {
        rating,
      }
      await axios.post(`http://localhost:5000/api/company/${companyid}/ratings`, ratingBody, {
        headers: {
          Authorization: localStorage.tokenAdmins,
        },
      })
      getCopmany()
      toast.success("Your rate is added")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const addComment = async (e, companyid) => {
    e.preventDefault()
    try {
      const form = e.target
      const commentBody = {
        comment: form.elements.comment.value,
      }

      form.reset()
      await axios.post(`http://localhost:5000/api/company/${companyid}/comments`, commentBody, {
        headers: {
          Authorization: localStorage.tokenAdmins,
        },
      })
      getCopmany()
      toast.success("Comment added")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const addOrder = async( e,companyid,fieldid) => {
    console.log("jjjj")
    e.preventDefault()
    try {
      const form = e.target

      const orderBody = {
        nameP: form.elements.nameP.value,
        descriptionP: form.elements.descriptionP.value,
        posterP: form.elements.posterP.value,
        areaP: form.elements.areaP.value,
        LocationP: form.elements.LocationP.value,
      }
      await axios.post(`http://localhost:5000/api/order/${companyid}/order/${fieldid}`, orderBody, {
        headers: {
          Authorization: localStorage.tokenAdmins,
        },
      })
      getProfile()
      navigate("/profile")
      toast.success("add Order success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const logout = () => {
    localStorage.removeItem("tokenUsers")
    console.log("logout success")
  }

  const store = {
    profile,
    companies,
    fields,
    orders,
    signup,
    loginUser,
    logout,
    // loginCompany,
    // loginEmployee,
    addRating,
    addComment,
    addOrder,
  }
  return (
    <SQBContext.Provider value={store}>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={localStorage.tokenUsers?<Home />: <h3><Homesite/></h3>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<ProfileUser />} />
        <Route path="/loginUser" element={<LoginUser />} />
        <Route path="/loginCompany" element={<LoginCompany />} />
        <Route path="/loginEmployee" element={<LoginEmployee />} />
        <Route path="/companise" element={<AllCompanise />} />
        <Route path="/company/:companyid" element={<OneCompany />} />
        <Route path="/fields" element={<AllFields />} />
    
        {/* <Route path="/loginEmployee" element={<LoginEmployee />} /> */}
        <Route path="/:companyid/order/:fieldid" element={<Orders />} />
      </Routes>
    </SQBContext.Provider>
  )
}

export default App
