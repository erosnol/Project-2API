import { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

const LoginForm = (props) => {
    const history = useHistory()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);


        axios.post('http://localhost:4001/auth', formData)
            .then(res => {
                console.log(res.data)

                if (res.data.token && res.data.user){
                    localStorage.setItem('userToken', res.data.token)
                    props.setUser(res.data.user)
                    history.push('/home')
                } else {
                    console.log(res.data);
                }
            })

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                
                <label htmlFor="email" className="form-label">Email</label>
                <input className="form-control" type='text' id='email' name='email' value={formData.email}
                    onChange={e => setFormData({ ...formData, [e.target.id]: e.target.value })}
                />

                <label htmlFor="password" className="form-label"> Password</label>
                <input className="form-control" type='password' id='password' name='password' value={formData.password}
                    onChange={e => setFormData({ ...formData, [e.target.id]: e.target.value })}
                />

                <div className="mb-3">
                <input type='submit' className="btn btn-info" />
                </div>
                
            </form>
        </div>
    )
}

export default LoginForm