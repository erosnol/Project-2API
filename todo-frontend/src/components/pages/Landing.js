import LoginForm from "../forms/LoginForm"
import RegisterForm from "../forms/RegisterForm"
import { useState } from "react"


const Landing = (props) => {
    const [hasAccount, setHasAccount] = useState(false)
    const { setUser } = props

    return (
        <div>
            <h1>Landing Page</h1>

            {hasAccount === false ? (
                <div>
                    <RegisterForm setUser={setUser} />
                    <p>Already have an account? <span onClick={() => setHasAccount(true)}>Login</span> </p>
                </div>
            ) : <LoginForm setUser={setUser} />}


        </div>
    )
}

export default Landing