import { useEffect, useState } from 'react'
import NavBar from '../layout/NavBar'
import axios from 'axios'
import CreateBlog from '../forms/CreateBlog'


const Home = (props) => {
    const [blog, setBlog] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:4001/blog', {
            headers: {
                'x-auth-token': localStorage.getItem("userToken")
            }
        }).then(res => setBlog(res.data)).catch(err => console.error(err))
    }, [])

    const handleDelete = () => (
        (blog) => {
            axios.delete(`http://localhost:4001/blog/${blog._id}`, {
                headers: {
                    "x-auth-token": localStorage.getItem("userToken"),
                },
            }).then(res => setBlog([...blog.filter(b => b._id !== blog._id )])).catch(err => console.error(err))
        }
    )

    return (
        <div>
            <NavBar user={props.user} />
            <h1>Home Page</h1>

            <CreateBlog setBlog={setBlog} blog={blog} />

            {blog && blog.map(blog => (
                <div key={blog._id}>
                    <h6>{blog.blog_title}</h6>
                    <h6>{blog.blog_content} <span className=' btn btn-danger' onClick={() => handleDelete(blog)}>X</span> </h6>

                </div>
            ))}
        </div>
    )
}

export default Home