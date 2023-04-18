import Navigation from "../../routes/navigation/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

const LayoutMain = () => {
    return(
        <>
            <Navigation />
            <Outlet />
            <Footer />
        </>
    )
}

export default LayoutMain;