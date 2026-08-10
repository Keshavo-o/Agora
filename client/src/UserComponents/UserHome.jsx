import { Routes, Route, Navigate, useNavigate } from "react-router-dom"
import UserNav from "./UserNav.jsx"
import NotFound from "../LandingComponents/NotFound.jsx"
import { useEffect } from "react"
import UserHomeMain from "./UserHomeMain.jsx"
import Discover from './Discover.jsx'
import Shop from "./Shop.jsx"
import Community from "./Community.jsx"
import Oikos from "./Oikos.jsx"

function UserHome() {
    const navigate = useNavigate()
    useEffect(() => {
        // console.log("authenticating user")
        fetch('/api/userserver/user_auth')
            .then(res => res.json())
            .then(data => {
                if (!data.success) {
                    return navigate("/")
                }
            })
    }, [])

    return (
        <>

            <UserNav />
            <Routes>
                <Route path="/" element={<UserHomeMain />} />
                <Route path="/discover" element={<Discover />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/community" element={<Community />} />
                <Route path="/oikos" element={<Oikos />} />


                <Route path='*' element={<NotFound />}></Route>
            </Routes>

        </>
    )
}

export default UserHome