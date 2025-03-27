import axios from "axios";
import { useEffect, useState } from "react";

function AllCustomers(){
    const [customers,setCustomers]=useState([])
    const token = sessionStorage.getItem("accessToken")
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    useEffect(()=>{
        axios.get("http://localhost:8080/api/customers")
        .then(resp=>{
            setCustomers(resp.data.data)
            console.log(customers)
        })
    },[])
    
    return (
        <div className="container-fluid">
            <h4>Customers Details</h4>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Gender</th>
                        <th>Phone</th>
                        <th>Email</th>
                        {/* <th>Password</th> */}
                    </tr>
                </thead>
                <tbody>
                {customers.map(x=>(
                    <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>{x.name}</td>
                        <td>{x.city}</td>
                        <td>{x.gender}</td>
                        <td>{x.phone}</td>
                        <td>{x.email}</td>
                        {/* <td>{x.pwd}</td> */}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default AllCustomers;