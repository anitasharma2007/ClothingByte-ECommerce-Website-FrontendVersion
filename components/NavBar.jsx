import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RoleNavbar from "./RoleNavbar";
import { FaChild } from 'react-icons/fa';
import { FaMale} from 'react-icons/fa';
import { FaFemale } from 'react-icons/fa';
import { RiShirtFill } from 'react-icons/ri';
import { IoShirtSharp } from 'react-icons/io5';
import { GiTrousers } from 'react-icons/gi';
import { GiSkirt } from 'react-icons/gi';
import { RiTShirtFill } from 'react-icons/ri';


const { Fragment } = require("react");

function NavBar(){
    const state=useSelector((state)=>state);
    console.log("LoggedIn ",state.loggedin)
    console.log("Cart ",state.cart) 
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="#">ClothingByte</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <FaMale />Men
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link className="dropdown-item" to="/cat/Men/Upper Wear"><RiShirtFill /> Upper Wear</Link>
                        <Link className="dropdown-item" to="/cat/Men/Bottom Wear"><GiTrousers />Bottom Wear</Link>                        
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <FaFemale />Women
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link className="dropdown-item" to="/cat/Women/Upper Wear"><RiTShirtFill />Upper Wear</Link>
                        <Link className="dropdown-item" to="/cat/Women/Bottom Wear"><GiSkirt />Bottom Wear</Link>                        
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <FaChild />Kids
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link className="dropdown-item" to="/cat/Kids/Upper Wear"><IoShirtSharp /> Upper Wear</Link>
                        <Link className="dropdown-item" to="/cat/Kids/Bottom Wear"><GiTrousers />Bottom Wear</Link>                        
                        </div>
                    </li>
                    <RoleNavbar isLoggedIn={state.loggedin.IsLoggedIn} />
                    </ul>
                </div>
                </nav>
        </Fragment>
    )
}

export default NavBar;
