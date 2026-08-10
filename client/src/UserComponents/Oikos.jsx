import { useEffect } from "react";
function Oikos() {
    useEffect(() => {
        // console.log("cakked")
        document.getElementById("nav_oikos").classList.remove("user-nav-link");
        document.getElementById("nav_oikos").classList.add("user-nav-link", "active");
        document.getElementById("nav_discover").classList.remove("active");
        document.getElementById("nav_shop").classList.remove("active");
        document.getElementById("nav_home").classList.remove("active");
        document.getElementById("nav_community").classList.remove("active");
    }, [])
    return (
        <>
        </>
    )
}
export default Oikos