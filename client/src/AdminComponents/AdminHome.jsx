import { Routes, Route, Navigate, useNavigate } from "react-router-dom"
import AdminNav from "./AdminNav.jsx"
import NotFound from "../LandingComponents/NotFound.jsx"
import { useEffect } from "react"
import AdminHomeMain from "./AdminHomeMain.jsx"
import AdminUsers from "./AdminUsers.jsx"
import AdminMarket from "./AdminMarket.jsx"
import AdminCommunity from "./AdminCommunity.jsx"
import AdminModeration from "./AdminModeration.jsx"



function UserHome() {
    const navigate = useNavigate()
    useEffect(() => {
        // console.log("authenticating user")
        // fetch('/api/userserver/user_auth')
        //     .then(res => res.json())
        //     .then(data => {
        //         if (!data.success) {
        //             return navigate("/")
        //         }
        //     })
    }, [])

    return (
        <>

            <AdminNav />
            <Routes>
                <Route path="/" element={<AdminHomeMain />} />
                <Route path="/users" element={<AdminUsers />} />
                <Route path="/market" element={<AdminMarket />} />
                <Route path="/community" element={<AdminCommunity />} />
                <Route path="/moderation" element={<AdminModeration />} />
                <Route path='*' element={<NotFound />}></Route>

            </Routes>

        </>
    )
}

export default UserHome