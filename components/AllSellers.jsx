import axios from "axios";
import { useEffect, useState } from "react";

function AllSellers(){
    const [sellers,setSellers]=useState([])
    const token = sessionStorage.getItem("accessToken")
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    useEffect(()=>{
        axios.get("http://localhost:8080/api/sellers")
        .then(resp=>{
            setSellers(resp.data.data)
            console.log(sellers)
        })
    },[])

    const deleteSeller=(id)=>{
        let response=window.confirm('Are you sure to delete this supplier ?');
        if(response){
           console.log(id);
           axios.delete("http://localhost:8080/api/sellers/"+id)
           .then(resp=>{
                axios.get("http://localhost:8080/api/sellers")
                .then(resp=>{
                    setSellers(resp.data.data)            
                })
           })
        }
    }
    
    return (
        <div className="container-fluid">
            <h4>All Sellers</h4>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Phone</th>
                        <th>Email Id</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {sellers.map(x=>(
                    <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>{x.name}</td>
                        <td>{x.city}</td>
                        <td>{x.phone}</td>
                        <td>{x.email}</td>
                        <td><button onClick={(e)=>deleteSeller(x.id)} className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default AllSellers;