import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Form = (props) => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [errors, setErrors] = useState({})

    const SubmitHandler =(e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/authors',{
            name
        }).then((res) => {
            navigate("/")
        }).catch((err)=>{
            setErrors(err.response.data.err.errors)
        })
    }

    const goHome = (e) => {
        e.preventDefault()
        navigate("/")
    }

    return(
        <div>
            <h3 style={{color: 'purple', padding: 20}}>Add a new author:</h3>
            <form onSubmit={SubmitHandler}>
                <label>Name:</label>
                    <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    {errors.name ? <p className='text text-danger'>{errors.name.message}</p> : null}
                <button onClick={goHome}>Cancel</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default Form