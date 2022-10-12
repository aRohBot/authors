import {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const EditForm = (props) => {
    const navigate = useNavigate()
    const [authorName, setAuthorName] = useState('')
    const [errors, setErrors] = useState({})
    const {id} = useParams()
    const [notFoundError, setNotFoundError] = useState('')

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res)=>{
            console.log(res)
            setAuthorName(res.data.name)
        }).catch((err)=>{
            console.log(err)
            setNotFoundError(`Author with that ID not found`)
        })
    },[])

    const UpdateHandler =(e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`,{
            name: authorName
        }).then((res) => {
            navigate("/")
        }).catch((err)=>{
            console.log(err.response.data.err.errors)
            setErrors(err.response.data.err.errors)
        })
    }


    const goHome = (e) => {
        e.preventDefault()
        navigate("/")
    }

    return(
        <div>
            <h3 style={{color: 'purple', padding: 20}}>Edit author:</h3>
            <form onSubmit={UpdateHandler}>
                {notFoundError ? <h3>{notFoundError} <Link to="/new">Click here to add an author</Link></h3>:null}
                <label>Name:</label>
                    <input type="text" name="name" value={authorName} onChange={(e)=>setAuthorName(e.target.value)}/>
                    {errors.name ? <p className='text text-danger'>{errors.name.message}</p> : null}
                <button onClick={goHome}>Cancel</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default EditForm