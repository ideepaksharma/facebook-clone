import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'
import './Login.css'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'

function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () => {

        //do google authentication using popup
        auth.signInWithPopup(provider)
            .then((result) => {

                console.log(result.user);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                });
            })
            .catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src='https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png' alt='' />
                <img src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg' alt='' />
            </div>
            <Button type="submit" onClick={signIn} >Sign In</Button>
        </div>
    )
}

export default Login
