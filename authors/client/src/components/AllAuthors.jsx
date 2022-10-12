import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const AllAuthors = (props) => {

    const [authors, setAuthors] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
        .then((res)=>{
            console.log(res)
            setAuthors(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const DeleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(res)
                const filterAuthors = authors.filter(author => {
                    return author._id !== id
                })
                setAuthors(filterAuthors)
            }).catch((err)=>{
                console.log(err)
            })
    }

    return(
        <div >
            <h3 className='' style={{color: 'purple'}}>We have quotes by:</h3>
            <div className='d-flex justify-content-center'>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Author</th>
                            <th scope="col">Actions available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            authors.sort((a,b)=>a.name.localeCompare(b.name)).map((author, index)=>{
                                return (
                                    <tr key={author._id}>
                                        <td>{author.name}</td>
                                        <td>
                                            <Link to={`/edit/${author._id}`}><button>Edit</button></Link>
                                            <button onClick={(e)=>DeleteHandler(author._id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllAuthors