import axios from "axios";
import { useEffect, useState } from "react";

function Orders(){
    const [orders,setOrders]=useState([])
    const [show,setShow]=useState(false)
    const [details,setDetails]=useState([])
    const token = sessionStorage.getItem("accessToken")
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    useEffect(()=>{
        axios.get("http://localhost:8080/api/orders")
        .then(resp=>{
            console.log(resp.data)
            setOrders(resp.data.data)
        })
    },[]);

    const showDetails=(orderid)=>{
        axios.get("http://localhost:8080/api/orders/"+orderid)
        .then(resp=>{
            console.log(resp.data)
            setDetails(resp.data.data.details)
        })
        setShow(true)
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-7">
                <h4 className="p-2">Order History</h4>
                <table className="table table-bordered table-sm">
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Order Date</th>
                            <th>Amount</th>
                            <th>Customer</th>
                            <th>Action</th>                       
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(x=>(
                            <tr key={x.id}>
                                <td>{x.id}</td>
                                <td>{x.orderDate}</td>
                                <td>&#8377; {x.payment.amount}</td>
                                <td>{x.customer.name}</td>
                                <td><button onClick={e=>showDetails(x.id)} className="btn btn-primary btn-sm">Show Details</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>  
                </div>
                <div className="col-sm-5">
                    {show ? <>
                    <h4 className="p-2">Order Details</h4>
                    <table className="table table-bordered table-sm">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Qty</th>
                            </tr>
                        </thead>
                        <tbody>
                            {details.map(x => (
                                <tr key={x.product.id}>
                                    <td>{x.product.id}</td>
                                    <td><img className="mr-2 float-left" src={"http://localhost:8080/api/products/"+x.product.id} width="100"></img>{x.product.pname}</td>
                                    <td>{x.product.price}</td>
                                    <td>{x.qty}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </> : ''}
                </div>
            </div>                
                              
        </div>                    
    )
}

export default Orders;