import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function ViewCart(){
    const state=useSelector((state)=>state);
    const dispatch=useDispatch()
    const history=useHistory()
    const token = sessionStorage.getItem("accessToken")
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const [address,setAddress]=useState({
        "city":"",
        "state":"",
        "zip":"",
        "country":"India"
    })
    const [payment,setPayment]=useState({
        "cardno":"",
        "nameoncard":"",
        "cvv":"",
        "amount":state.cart.reduce((a,b)=> (a+b.price),0)       
    })
    const deleteItem=(item)=>{
        dispatch({type:'RemoveItem',payload:item})   
        let amount=state.cart.reduce((a,b)=> (a+b.price),0)
        console.log("Amount ",amount)
        
    }
    const handleAddressInput=(e)=>{
        setAddress({...address,[e.target.name]:e.target.value})
    }

    const handlePaymentInput=(e)=>{
        setPayment({...payment,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        let amount=state.cart.reduce((a,b)=> (a+b.price),0)
        setPayment({...payment,'amount':amount}) 
        console.log("Amount => ",amount)
    },[state.cart])

    const handleSubmit=(e)=>{
        e.preventDefault()  
        let amount=state.cart.reduce((a,b)=> (a+b.price),0)
        console.log("Amount ",payment.amount)
        setPayment({...payment,'amount':amount})

        let data={
            'cart':state.cart,
            'payment':payment,
            'address':address,
            'customerid':sessionStorage.getItem('id')
        } 
        console.log(data) 
        axios.post("http://localhost:8080/api/orders",data)
        .then(resp=>{
            console.log(resp)
            dispatch({type:'Clear'});
            history.push('/myorders')
        })  
    }
    return (
        <div className="container-fluid">
            
            {state.cart.length>0 ? 
            <div className="row">
                <div className="col-sm-7">
                <h4 className="p-2">Cart View</h4>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {state.cart.map(item=>(
                        <tr key={item.prodid}>
                            <td>{item.prodid}</td>
                            <td>
                                <img className="mr-2 float-left" src={"http://localhost:8080/api/products/image/"+item.prodid} width="100" />
                                {item.pname}
                            </td>
                            <td>&#8377; {item.price}</td>
                            <td>{item.qty}</td>
                            <td>&#8377; {item.qty * item.price}</td>
                            <td><button onClick={e=>deleteItem(item)} className="btn btn-danger">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan="4">Total Amount</th>
                        <th>&#8377; {state.cart.reduce((a,b)=> (a+b.price),0)}</th>
                    </tr>
                </tfoot>
            </table>
            </div>
            <div className="col-sm-4">     
            <form>           
                <h5 className="p-2">Address Information</h5>
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label">City</label>
                    <div className="col-sm-8">
                        <input type="text" name="city" value={address.city} onChange={handleAddressInput} className="form-control" />                        
                    </div>                        
                </div>
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label">State</label>
                    <div className="col-sm-8">
                        <input type="text" name="state" value={address.state} onChange={handleAddressInput} className="form-control" />
                    </div>                        
                </div>
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label">Zip</label>
                    <div className="col-sm-8">
                        <input type="text" name="zip" value={address.zip} onChange={handleAddressInput} className="form-control" />                        
                    </div>                        
                </div>
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label">Country</label>
                    <div className="col-sm-8">
                        <input type="text" name="country" value={address.country} onChange={handleAddressInput} className="form-control" />                       
                    </div>                        
                </div>

                <h5 className="p-2">Payment Information</h5>
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label">Card No</label>
                    <div className="col-sm-8">
                        <input type="text" name="cardno" value={payment.cardno} onChange={handlePaymentInput} className="form-control" maxLength="16" />                        
                    </div>                        
                </div>
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label">Name on Card</label>
                    <div className="col-sm-8">
                        <input type="text" name="nameoncard" value={payment.nameoncard} onChange={handlePaymentInput} className="form-control" />                        
                    </div>                        
                </div>
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label">Expiry Date</label>
                    <div className="col-sm-8">
                        <input type="month" required className="form-control" />                        
                    </div>                        
                </div>
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label">CVV</label>
                    <div className="col-sm-8">
                        <input type="text" maxLength="3"  onChange={handlePaymentInput} className="form-control" />                        
                    </div>                        
                </div>
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label">Billed Amount</label>
                    <div className="col-sm-8">
                        <input type="text" maxLength="3" readOnly value={payment.amount} onChange={handlePaymentInput} className="form-control" />                        
                    </div>                        
                </div>                
                <button onClick={handleSubmit} className="btn btn-success float-right">Place Order</button>
                </form>
            </div>
            </div> : <h4>Cart is Empty</h4>}
        </div>
    )
}

export default ViewCart;