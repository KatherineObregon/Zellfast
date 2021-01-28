import React, { useState } from 'react'
//import './Login.css'
import { useHistory } from "react-router-dom"
import { auth } from "./firebase"

function Login(){

    const history = useHistory('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth)=>{
                //it succesfully created a new user with email and password.
                console.log(auth);
                if(auth){
                    history.push('/')
                }
            }).catch(error=>alert(error.message))
        
    }

    return (
        <div className="login">
            <div className='login_container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}></input>

                    <h5>Contraseña</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                    
                    <button onClick={signIn}>Sign In</button>
                </form>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <button onClick={register}>Create your Amazon Account</button>

            </div>
        </div>
    )
}

export default Login;