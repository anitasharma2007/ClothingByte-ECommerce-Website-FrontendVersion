import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import LoginRegisterMenu from "./LoginRegisterMenu"
import { ImCart } from 'react-icons/im';
import { BsPersonLinesFill } from 'react-icons/bs';
import { RiShoppingBag3Fill } from 'react-icons/ri';
import { SiHomeadvisor } from 'react-icons/si';
import { BsFillPersonXFill } from 'react-icons/bs';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { ImTruck } from 'react-icons/im';
import { HiUserGroup } from 'react-icons/hi';
import { GiClothes } from 'react-icons/gi';
import { GiLoincloth } from 'react-icons/gi';


const RoleNavbar=({isLoggedIn})=>{
    const logout=e=>{
        dispatch({type:'LogOut'})
        sessionStorage.clear();
        history.push("/");
    }
    const state=useSelector((state)=>state);
    const history=useHistory()
    const dispatch=useDispatch()
    console.log(sessionStorage.getItem("role"),isLoggedIn)
    if(!isLoggedIn) {
         return (
        <LoginRegisterMenu/>
        )
    }
    else if(sessionStorage.getItem("role")==="customer"){
    return (
        <>
        <li className="nav-item active">
            <Link className="nav-link" to="/"><SiHomeadvisor /> Home</Link>
        </li>
        <li className="nav-item active">
            <Link className="nav-link" to="/cart"><ImCart /> View Cart {state.cart.length==0 ? '' : 
            <span className="badge badge-primary p-2">{state.cart.length}</span>}</Link>
        </li>
        <li className="nav-item active">
            <Link className="nav-link" to="/cprofile"><BsPersonLinesFill /> Profile</Link>
        </li>
        <li className="nav-item active">
            <Link className="nav-link" to="/myorders"><RiShoppingBag3Fill /> My Orders</Link>
        </li>
        <li className="nav-item active">
        <Link className="nav-link" to="/contactus"><MdOutlineSupportAgent /> Contact Us</Link>
        </li>   
        <li className="nav-item active">
            <Link className="nav-link" onClick={logout} to="#"><BsFillPersonXFill /> Logout</Link>
        </li>        
        </>
    )
    }
    else if(sessionStorage.getItem("role")==="seller"){
        return (
            <>
            <li className="nav-item active">
                <Link className="nav-link" to="/homeadmin"><SiHomeadvisor /> Home</Link>
            </li>   
            <li className="nav-item active">
                <Link className="nav-link" to="/sprofile"><BsPersonLinesFill /> Profile</Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/add-product"><GiClothes /> Add Product</Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/myproducts"><GiLoincloth /> Products</Link>
            </li>          
            <li className="nav-item active">
                <Link className="nav-link" onClick={logout} to="#"><BsFillPersonXFill /> Logout</Link>
            </li>        
            </>
        )
    }
    return (
        <>
        <li className="nav-item active">
            <Link className="nav-link" to="/homeadmin"><SiHomeadvisor /> Home</Link>
        </li>              
        <li className="nav-item active">
            <Link className="nav-link" to="/aprofile"><BsPersonLinesFill /> Profile</Link>
        </li>
        <li className="nav-item active">
            <Link className="nav-link" to="/sellers"><ImTruck /> Sellers</Link>
        </li>
        <li className="nav-item active">
            <Link className="nav-link" to="/customers"><HiUserGroup /> Customers</Link>
        </li>
        <li className="nav-item active">
            <Link className="nav-link" to="/orders"><RiShoppingBag3Fill /> Orders</Link>
        </li>
        <li className="nav-item active">
            <Link className="nav-link" onClick={logout} to="#"><BsFillPersonXFill /> Logout</Link>
        </li>        
        </>
    )

}



export default RoleNavbar;