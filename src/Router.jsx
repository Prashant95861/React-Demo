import { Route, Routes } from "react-router-dom";
import Contact from "./screens/contact/Contact";

const Router = () => {

    return (
        <>
            <Routes>
                <Route path="contact" element={Contact} />  
            </Routes>
        </>
    )
}