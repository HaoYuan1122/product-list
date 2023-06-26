import { Component } from "react";
import Product from './Product'

class ProductList extends Component {
    state = {
        initalData: this.props.data,
        filteredData:this.props.data,
    }
    
    handleShirts=()=>{
        const shirts=this.state.initalData.filter(item=>item.category==="shirts")
        this.setState({
            filteredData:shirts
        })
    }

    handlePantsAndSkirts=()=>{
        const pantsAndSkirts=this.state.initalData.filter(item=>item.category==='pants'||item.category==='skirts')
        this.setState({
            filteredData:pantsAndSkirts
        })
    }

    handleJackets=()=>{
        const jackets=this.state.initalData.filter(item=>item.category==='jackets')
        this.setState({
            filteredData:jackets
        })
    }

    handleAll=()=>{
        this.setState({
            filteredData:this.props.data
        })
    }

    handleInputChange=(e)=>{
        const capturedInput=e.target.value.trim().toLowerCase()
        const itemsToDisplay=this.state.initalData.filter(item=>item.name.toLowerCase().includes(capturedInput)||item.description.toLowerCase().includes(capturedInput))
        this.setState({
            filteredData:itemsToDisplay
        })
    }

    handleSortByPrice=(e)=>{
        if(e.target.value==="lowest-to-highest"){
            const lowestToHighest=this.state.initalData.sort((a,b)=>a.price-b.price)
            this.setState({
                filteredData:lowestToHighest
            })
        }else if(e.target.value==="highest-to-lowest"){
            const highestToLowest=this.state.initalData.sort((a,b)=>b.price-a.price)
            this.setState({
                filteredData:highestToLowest
            })
        }
    }

    render() {
        return (
            <div style={{ margin: '10px auto', width: '400px' }}>
                <h1>Product List</h1>
                <div className="selectCategory">
                    <p>Select category from buttons below:</p>
                    <div>
                        <button className="btn btn-primary" onClick={this.handleShirts}>Shirts</button>
                        <button className="btn btn-primary" onClick={this.handlePantsAndSkirts}>Pants and skirts</button>
                        <button className="btn btn-primary" onClick={this.handleJackets}>Jackets</button>
                        <button className="btn btn-primary" onClick={this.handleAll}>All products</button>
                    </div>
                </div>
                <div>
                    <label >Search for a product:</label><br></br>
                    <input 
                    style={{width:"400px",marginBottom:"15px"}}placeholder="enter a product name or description"
                    onChange={this.handleInputChange}
                    className="form-control"
                    ></input>
                </div>
                <div>
                    <label>Sort by price:</label> <br></br>
                    <select 
                    style={{marginBottom:"15px"}}
                    onChange={this.handleSortByPrice}
                    className="form-select"
                    >
                        <option defaultValue></option>
                        <option value="lowest-to-highest">lowest-to-highest</option>
                        <option value="highest-to-lowest">highest-to-lowest</option>
                    </select>
                </div>
                <ul style={{ padding: 0, margin: 0 }}>
                    {this.state.filteredData.map((item, index) => <Product productData={item} key={index} />)}
                </ul>
            </div>

        )
    }
}
export default ProductList