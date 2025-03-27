import axios from "axios"
import { useState } from "react"

function AdminProfile(){
    const email=sessionStorage.getItem("email")
    const uname=sessionStorage.getItem("uname")
    const token = sessionStorage.getItem("accessToken")
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const [user,setUser]=useState({
        "uname":uname,
        "email":email,
        "pwd":""        
    })

    const handleInput=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault() 
        axios.put("http://localhost:8080/api/admin/update",user
         )
        .then(resp=>{
            console.log(resp)
            alert("Profile updated successfully")   
            sessionStorage.setItem("uname",user.uname)         
        })
        .catch(error=>console.log("Error",error))   
    }

    return (
        <div className="container-fluid">
            <h2>Welcome {user.uname}</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-group form-row">
                <label className="col-sm-4 form-control-label">Email Id</label>
                <div className="col-sm-8">
                    <input type="text" name="email" readOnly value={user.email} onChange={handleInput} className="form-control" />                            
                </div>                        
            </div>
            <div className="form-group form-row">
                <label className="col-sm-4 form-control-label">User Name</label>
                <div className="col-sm-8">
                    <input type="text" name="uname" value={user.uname} onChange={handleInput} className="form-control" />                            
                </div>                        
            </div>
            <div className="form-group form-row">
                <label className="col-sm-4 form-control-label">Password</label>
                <div className="col-sm-8">
                    <input type="password" name="pwd" value={user.pwd} onChange={handleInput} className="form-control" />                            
                </div>                        
            </div>
            <button className="btn btn-primary float-right">Update Profile</button>
            </form>
        </div>
    )
}

export default AdminProfile;
