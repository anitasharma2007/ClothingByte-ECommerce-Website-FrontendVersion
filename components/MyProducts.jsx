import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MyProducts(){
    const sellerid=sessionStorage.getItem("id");
    const [products,setProducts]=useState([])
    const token = sessionStorage.getItem("accessToken")
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    useEffect(()=>{
        axios.get("http://localhost:8080/api/products/allproducts?sellerId="+sellerid)
        .then(resp=>{
            console.log(resp.data)
            setProducts(resp.data.data)
            console.log(products)
        })
    },[])

    const deleteProduct = (prodid)=>{
        let resp=window.confirm('Are you sure to delete this product ?');
        if(resp){
            axios.delete("http://localhost:8080/api/products/"+prodid)
            .then(resp=>{
                alert("Product deleted successfully")
                axios.get("http://localhost:8080/api/products/allproducts?sellerId="+sellerid)
                .then(resp=>{
                    console.log(resp.data)
                    setProducts(resp.data.data)
                    console.log(products)
                })
            })            
        }
    }
    
    return (
        <div className="container-fluid">
            <h4>My Products</h4>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Sub Category</th>
                        <th>Brand Name</th>
                        <th>Price</th>
                        <th>Action</th>                                
                    </tr>
                </thead>
                <tbody>
                {products.map(x=>(
                    <tr key={x.prodid}>
                        <td><img width="100" src={"http://localhost:8080/api/products/image/"+x.prodid} className="img-thumnail" />{x.pname}</td>
                        <td>{x.pcat}</td>
                        <td>{x.subcat}</td>
                        <td>{x.brand}</td>
                        <td>{x.price}</td>
                        <td>
                            <Link to={"/edit/"+x.prodid} className="btn btn-primary btn-sm mr-2">Edit</Link>
                            <button onClick={()=>deleteProduct(x.prodid)} className="btn btn-danger btn-sm">Delete</button>
                        </td>                                
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default MyProducts;