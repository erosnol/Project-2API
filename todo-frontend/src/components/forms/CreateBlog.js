import axios from 'axios';
import { useState } from 'react';

const CreateBlog = (props) => {
    const [blogData, setFormData] = useState({
        blog_title: '',
        blog_content: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4001/', blogData, {
            headers: {
                'x-auth-token': localStorage.getItem("userToken")
            }
        }).then(res => props.setBlog([...props.blog, res.data]))
    }

return (
    
    <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="blog_title">Title</label>
        <input type='text' id='blog_title' name='blog_title' value={blogData.blog_title}
        onChange={(e) => setFormData({...blogData, [e.target.id]: e.target.value})}
        />
        </div>

        <div>
         <label htmlFor="blog_content">Content</label>
        <input type='text' id='blog_content' name='blog_content' value={blogData.blog_content}
        onChange={(e) => setFormData({...blogData, [e.target.id]: e.target.value})}
        />    
        </div>
        <input type='submit' className='btn btn-success'/>
    </form>
   
)
}
export default CreateBlog
