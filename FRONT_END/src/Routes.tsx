import { Route, BrowserRouter, Routes } from "react-router-dom"; 
import Welcome from "./Welcome/welcome.tsx.tsx";
import Login from "./Auth/Login/login.tsx"
import Register from "./Auth/Register/register.tsx";
import Home from "./Home/home.tsx"
import ErrorScreen from "./ErrorScreen/ErrorScreen.tsx";

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
 };
 
 export default AppRoutes;