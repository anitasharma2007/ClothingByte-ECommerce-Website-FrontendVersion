import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function HomePageAdmin(){
    const [products,setProducts]=useState([])
    const {pcat,subcat}=useParams()
    const state=useSelector((state)=>state);
    const token = sessionStorage.getItem("accessToken")
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    useEffect(()=>{
        console.log(pcat,subcat)
        if(pcat !== undefined){
            axios.get("http://localhost:8080/api/products/cats?cat="+pcat+"&subcat="+subcat)
            .then(resp=>{
                console.log(resp.data)
                setProducts(resp.data.data)
                console.log("products = ",products)
            })
        }
        else {
            axios.get("http://localhost:8080/api/products/allproducts")
            .then(resp=>{
                console.log(resp.data)
                setProducts(resp.data.data)
                console.log("products = ",products)
            })
        }
    },[pcat,subcat])

    const checkItem =(prodid)=>{
        return state.cart.findIndex(x=>x.prodid===prodid)<0
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h4>All Products</h4>
                    <div className="row">
                    {products.map(x=>(
                        <div className="col-sm-3" key={x.prodid}>
                            <div className="card shadow mb-2">
                                <div className="card-header">
                                    <h4>{x.pname}</h4>
                                </div>
                                <div className="card-body">
                                <img width="150" height="150" src={"http://localhost:8080/api/products/image/"+x.prodid} className="img-thumnail" />
                                <h6>Category: {x.pcat}</h6>
                                <h5>Price: {x.price}</h5>                            
                                </div>
                               
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default HomePageAdmin;