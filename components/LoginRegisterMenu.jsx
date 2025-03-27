import { Fragment } from "react";
import { BsPersonCheckFill } from 'react-icons/bs';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { RiAdminLine } from 'react-icons/ri';
import { ImTruck } from 'react-icons/im';
import { HiUserGroup } from 'react-icons/hi';


function LoginRegisterMenu(){
    return(
        <Fragment>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <BsPersonCheckFill /> Login
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/alogin"><RiAdminLine /> Admin</a>
                <a className="dropdown-item" href="/slogin"><ImTruck /> Supplier</a>                        
                <a className="dropdown-item" href="/clogin"><HiUserGroup /> Customer</a>                        
                </div>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <BsFillPersonPlusFill /> Register
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/regsupplier"><ImTruck /> Supplier</a>
                <a className="dropdown-item" href="/register"><HiUserGroup /> Customer</a>                        
                </div>
            </li>
        </Fragment>
    )
}

export default LoginRegisterMenu;