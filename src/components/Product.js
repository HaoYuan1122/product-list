import { Component } from "react";
class Product extends Component{
    render(){
        const {name,category,description,price}=this.props.productData
        return(
            <li style={{listStyle:'none'}}>
                <div style={{width:'400px',marginBottom:'30px'}}>
                    <strong>Name:</strong> {name} <br></br>
                    <strong>Category:</strong> {category} <br></br>
                    <strong>Price:</strong> ${price} <br></br>
                    <strong>Description:</strong> {description} <br></br>
                </div>
            </li>
        )
    }
}
export default Product