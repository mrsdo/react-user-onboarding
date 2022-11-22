import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";

// import components
import Header from "./components/Header";
import Home from './pages/Home'
import Signup from './pages/Signup';
import Login from './pages/Login';

export default function App () {

    return (
        <BrowserRouter>

            <Header className="nav" />

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/login" element={<Login />} />

            </Routes>
        </BrowserRouter>
    );
}


