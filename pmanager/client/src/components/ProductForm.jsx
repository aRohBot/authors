import {useState} from 'react'
import axios from 'axios'

const ProductForm = (props) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")

    const SubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/products',{
            title,
            description,
            price
        }).then((res)=>{
            console.log(res)
            console.log(res.data)
            setTitle("")
            setDescription("")
            setPrice("")
        }).catch((err)=>console.log(err))
    }

    return(
        <div>
            <h1>Create Product</h1>
            <form onSubmit={SubmitHandler}>
                <div className='form-group'>
                    <label className="col-sm-1 col-form-label">Title</label>
                    <input className="col-sm-2 col-form" type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div>
                    <label className="col-sm-1 col-form-label">Description</label>
                    <input className="col-sm-2 col-form" type="text" name="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <div>
                    <label className="col-sm-1 col-form-label">Price</label>
                    <input className="col-sm-2 col-form" type="number" name="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                </div>
                <div className="col-sm-10 offset-sm-1">
                    <button type="submit" className="btn btn-primary">Create</button>
                </div>
            </form>
        </div>
    )
}

export default ProductForm