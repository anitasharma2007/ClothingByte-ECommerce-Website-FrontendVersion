import { useSelector } from "react-redux";

function Header(){
    const state=useSelector((state)=>state);
    console.log("Header ",state.loggedin.Username)
    
    return (
        <div className="jumbotron p-3 mb-0 rounded-0">
            {state.loggedin.IsLoggedIn ?
            <>
            <h5 className="float-left">Role : {state.loggedin.Role}</h5>
            <h5 className="float-right">Welcome ! {state.loggedin.Username}</h5> </>:
            ''}
            <h2 style={{fontFamily: 'Droid Sans'}}>Welcome to ClothingByte<h4><sub>Wear your Best Moments</sub></h4></h2>
        </div>
    )
}

export default Header;